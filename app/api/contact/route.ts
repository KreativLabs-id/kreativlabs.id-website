import { NextRequest, NextResponse } from "next/server";

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;
const MAX_TRACKED_IPS = 10000;
const ipRequests = new Map<string, { count: number; timestamp: number }>();

function getEnvValue(...keys: string[]): string {
  for (const key of keys) {
    const value = process.env[key]?.trim();
    if (value && !value.startsWith("your_")) return value;
  }
  return "";
}

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  const ip = forwarded?.split(",")[0]?.trim() || realIp || "";
  return ip || "unknown";
}

function getSiteOrigin(): string {
  const siteUrl = getEnvValue("NEXT_PUBLIC_SITE_URL");
  if (!siteUrl) return "https://kreativlabs.my.id";
  try {
    return new URL(siteUrl).origin;
  } catch {
    return "https://kreativlabs.my.id";
  }
}

function isAllowedOrigin(request: NextRequest): boolean {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const expectedOrigin = getSiteOrigin();
  const defaultOrigins = [
    expectedOrigin,
    "https://kreativlabs.my.id",
    "https://www.kreativlabs.my.id",
  ];
  const additionalAllowed = (getEnvValue("ALLOWED_ORIGINS") || "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
  const allowedOrigins = new Set([...defaultOrigins, ...additionalAllowed]);

  if (origin && allowedOrigins.has(origin)) return true;
  if (!origin && referer) {
    try {
      const refererOrigin = new URL(referer).origin;
      return allowedOrigins.has(refererOrigin);
    } catch {
      return false;
    }
  }
  return false;
}

function pruneRateLimitMap(now: number) {
  if (ipRequests.size < MAX_TRACKED_IPS) return;
  for (const [ip, record] of ipRequests.entries()) {
    if (now - record.timestamp > RATE_LIMIT_WINDOW) {
      ipRequests.delete(ip);
    }
  }
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  pruneRateLimitMap(now);
  const record = ipRequests.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    ipRequests.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  record.count++;
  return false;
}

function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "")
    .trim()
    .substring(0, 1000);
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
}

async function verifyTurnstileToken(
  token: string,
  ip: string
): Promise<boolean> {
  const secret = getEnvValue("TURNSTILE_SECRET_KEY");
  if (!secret) return true;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);
  try {
    const body = new FormData();
    body.append("secret", secret);
    body.append("response", token);
    if (ip !== "unknown") {
      body.append("remoteip", ip);
    }
    body.append("idempotency_key", crypto.randomUUID());

    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body,
        signal: controller.signal,
      }
    );
    if (!response.ok) return false;

    const result = (await response.json()) as { success?: boolean };
    return result.success === true;
  } catch {
    return false;
  } finally {
    clearTimeout(timeoutId);
  }
}

export async function POST(request: NextRequest) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json(
        { error: "Origin tidak diizinkan" },
        { status: 403 }
      );
    }

    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Terlalu banyak permintaan. Silakan coba lagi nanti." },
        { status: 429 }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Format request tidak valid" },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Format request tidak valid" },
        { status: 400 }
      );
    }

    const { name, email, message, website, turnstileToken } = body as Record<string, unknown>;

    // Honeypot check
    if (typeof website === "string" && website.length > 0) {
      return NextResponse.json(
        { error: "Permintaan tidak valid" },
        { status: 400 }
      );
    }

    // Validation
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        { error: "Semua field wajib diisi" },
        { status: 400 }
      );
    }

    if (getEnvValue("TURNSTILE_SECRET_KEY") && typeof turnstileToken !== "string") {
      return NextResponse.json(
        { error: "Captcha wajib diisi" },
        { status: 400 }
      );
    }

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      return NextResponse.json(
        { error: "Nama harus antara 2-100 karakter" },
        { status: 400 }
      );
    }

    if (!validateEmail(sanitizedEmail)) {
      return NextResponse.json(
        { error: "Format email tidak valid" },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 1000) {
      return NextResponse.json(
        { error: "Pesan harus antara 10-1000 karakter" },
        { status: 400 }
      );
    }

    if (getEnvValue("TURNSTILE_SECRET_KEY")) {
      if (typeof turnstileToken !== "string") {
        return NextResponse.json(
          { error: "Captcha wajib diisi" },
          { status: 400 }
        );
      }

      const captchaOk = await verifyTurnstileToken(turnstileToken, ip);
      if (!captchaOk) {
        return NextResponse.json(
          { error: "Verifikasi captcha gagal" },
          { status: 400 }
        );
      }
    }

    const serviceId = getEnvValue("EMAILJS_SERVICE_ID", "NEXT_PUBLIC_EMAILJS_SERVICE_ID");
    const templateId = getEnvValue("EMAILJS_TEMPLATE_ID", "NEXT_PUBLIC_EMAILJS_TEMPLATE_ID");
    const publicKey = getEnvValue("EMAILJS_PUBLIC_KEY", "NEXT_PUBLIC_EMAILJS_PUBLIC_KEY", "EMAILJS_USER_ID");
    const privateKey = getEnvValue("EMAILJS_PRIVATE_KEY", "EMAILJS_ACCESS_TOKEN");

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS configuration missing");
      return NextResponse.json(
        { error: "Konfigurasi email belum lengkap. Silakan hubungi kami via WhatsApp atau email langsung." },
        { status: 503 }
      );
    }

    // Send via EmailJS REST API directly
    const response = await fetch(
      `https://api.emailjs.com/api/v1.0/email/send`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Origin: getSiteOrigin(),
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          ...(privateKey ? { accessToken: privateKey } : {}),
          template_params: {
            name: sanitizedName,
            from_name: sanitizedName,
            email: sanitizedEmail,
            from_email: sanitizedEmail,
            message: sanitizedMessage,
            reply_to: sanitizedEmail,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("EmailJS API error:", errorText);
      return NextResponse.json(
        { error: "Gagal mengirim pesan ke server email. Silakan hubungi kami via WhatsApp atau email langsung." },
        { status: 502 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Pesan berhasil dikirim" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Gagal mengirim pesan. Silakan coba lagi nanti." },
      { status: 500 }
    );
  }
}
