import Parser from "rss-parser";
import fs from "node:fs";
import path from "node:path";

const feeds = [
  "https://news.google.com/rss/search?q=AI+bisnis+OR+teknologi+AI+OR+tools+AI&hl=id&gl=ID&ceid=ID:id",
  "https://news.google.com/rss/search?q=tips+bisnis+UMKM+OR+strategi+usaha+digital&hl=id&gl=ID&ceid=ID:id",
  "https://news.google.com/rss/search?q=website+UMKM+OR+SEO+OR+pemasaran+digital&hl=id&gl=ID&ceid=ID:id",
  "https://news.google.com/rss/search?q=desain+branding+UMKM+OR+UI+UX+bisnis&hl=id&gl=ID&ceid=ID:id",
  "https://developers.google.com/search/blog/feed.xml",
];
const week = 7 * 24 * 60 * 60 * 1000;
const categories = new Set([
  "Tips Bisnis",
  "Update Teknologi",
  "Desain & Branding",
  "SEO & Marketing",
]);
const clean = (value, limit = 500) =>
  String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, limit);
const normalize = (value) =>
  clean(value)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

export function collectRecentItems(items, now = Date.now()) {
  const seen = new Set();
  return items
    .flatMap((item) => {
      const date = Date.parse(item.isoDate || item.pubDate || "");
      const title = clean(item.title, 200);
      let url;
      try {
        url = new URL(item.link);
      } catch {
        return [];
      }
      if (
        url.protocol !== "https:" ||
        !title ||
        !Number.isFinite(date) ||
        date > now ||
        now - date > week
      )
        return [];
      const key = normalize(title);
      if (seen.has(key)) return [];
      seen.add(key);
      const sourceName = typeof item.source === "string" ? item.source : item.source?._;
      const publisher = clean(sourceName || item.creator || url.hostname, 80).replace(
        /[\[\]()]/g,
        ""
      );
      return [
        {
          title,
          url: url.href,
          publisher: publisher || url.hostname,
          publishedAt: new Date(date).toISOString(),
          summary: clean(item.contentSnippet || item.content, 350),
        },
      ];
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getRecentSources() {
  const parser = new Parser({ customFields: { item: ["source"] } });
  const results = await Promise.allSettled(
    feeds.map(async (url) => {
      const response = await fetch(url, {
        signal: AbortSignal.timeout(12000),
        headers: { "user-agent": "KreativLabsBlogBot/1.0" },
      });
      if (!response.ok) throw new Error(`RSS HTTP ${response.status}`);
      return (await parser.parseString(await response.text())).items;
    })
  );
  const items = results.flatMap((result) => (result.status === "fulfilled" ? result.value : []));
  if (!items.length) throw new Error("Semua sumber RSS gagal atau kosong; tidak membuat artikel.");
  // Keep representation from each query instead of allowing a single feed to dominate.
  const grouped = results.flatMap((result) =>
    result.status === "fulfilled" ? collectRecentItems(result.value).slice(0, 8) : []
  );
  return collectRecentItems(
    grouped.map((item) => ({
      ...item,
      link: item.url,
      isoDate: item.publishedAt,
      contentSnippet: item.summary,
      source: { _: item.publisher },
    }))
  )
    .slice(0, 25)
    .map((item, id) => ({ id, ...item }));
}

export async function getRelevantTrends() {
  try {
    const response = await fetch("https://trends.google.com/trending/rss?geo=ID", {
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) return [];
    const items = (await new Parser().parseString(await response.text())).items;
    return items
      .map((item) => clean(item.title, 100))
      .filter((title) =>
        /\b(umkm|bisnis|usaha|startup|website|desain|branding|marketing|seo|teknologi|kecerdasan buatan|ai|chatgpt|gemini|google|aplikasi|otomasi|produktivitas|marketplace|e-commerce|media sosial)\b/i.test(
          title
        )
      )
      .slice(0, 10);
  } catch {
    return [];
  }
}

export const MIN_ARTICLE_WORDS = 300;

export function validateArticle(article, sources, titles, slugs) {
  if (
    !article ||
    !Number.isInteger(article.sourceId) ||
    !sources.some((source) => source.id === article.sourceId)
  )
    throw new Error("Sumber tidak valid");
  if (
    typeof article.title !== "string" ||
    article.title.trim().length < 12 ||
    typeof article.excerpt !== "string" ||
    !article.excerpt.trim()
  )
    throw new Error("Judul atau ringkasan tidak valid");
  if (
    typeof article.slug !== "string" ||
    !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) ||
    slugs.includes(article.slug)
  )
    throw new Error("Slug tidak valid atau sudah ada");
  if (titles.some((title) => normalize(title) === normalize(article.title)))
    throw new Error("Judul sudah ada");
  if (
    !categories.has(article.category) ||
    !Array.isArray(article.tags) ||
    !article.tags.length ||
    !article.tags.every((tag) => typeof tag === "string") ||
    typeof article.readTime !== "string"
  )
    throw new Error("Metadata tidak valid");
  const nonEmptyLines = Array.isArray(article.content)
    ? article.content.map((line) => (typeof line === "string" ? line.trim() : "")).filter(Boolean)
    : [];
  if (
    !Array.isArray(article.content) ||
    !article.content.every((line) => typeof line === "string") ||
    nonEmptyLines.length < 5
  )
    throw new Error("Isi artikel tidak valid");
  const headingCount = nonEmptyLines.filter((line) => /^##\s+\S/.test(line)).length;
  if (headingCount < 2) throw new Error("Artikel minimal harus memiliki 2 subjudul (##)");
  const wordCount = nonEmptyLines
    .filter((line) => !/^#{1,6}\s/.test(line))
    .reduce((count, line) => count + line.split(/\s+/).length, 0);
  if (wordCount < MIN_ARTICLE_WORDS)
    throw new Error(
      `Isi artikel terlalu pendek (${wordCount} kata, minimal ${MIN_ARTICLE_WORDS} kata)`
    );
  if (
    /\b(halo sobat kreativlabs|coba deh jujur|senam jantung|di era digital|tidak dapat dipungkiri)\b/i.test(
      nonEmptyLines.join(" ")
    )
  )
    throw new Error("Isi mengandung frasa klise");
  // Keamanan: tolak artikel yang mengandung tag HTML mentah (potensi stored-XSS
  // via rantai RSS -> AI -> blogs.ts -> render). Teks biasa seperti "5 < 10"
  // tetap lolos karena pola hanya mencocokkan tag diawali huruf setelah "<".
  const containsHtmlTag = (value) => /<\/?[a-zA-Z][^>]*>?/.test(value);
  if ([article.title, article.excerpt, ...article.tags, ...article.content].some(containsHtmlTag))
    throw new Error("Konten mengandung tag HTML mentah");
}

export async function generateArticleDraft({
  prompt,
  modelCandidates,
  generate,
  sources,
  titles,
  slugs,
}) {
  let validationIssue;
  let lastRequestError;

  for (const modelName of modelCandidates) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      const draftPrompt = validationIssue
        ? `${prompt}\n\nDraf sebelumnya ditolak: ${validationIssue}. Tulis ulang artikel lengkap dan perbaiki masalah itu. Jika draf terlalu pendek, kembangkan contoh, langkah praktis, atau pertimbangan bagi pembaca tanpa mengarang fakta dan tanpa mengulang isi.`
        : prompt;
      let response;
      try {
        response = await generate(modelName, draftPrompt);
      } catch (error) {
        lastRequestError = error;
        break;
      }

      try {
        let article;
        try {
          article = JSON.parse(
            response
              .text()
              .trim()
              .replace(/^```(?:json)?\s*|\s*```$/g, "")
          );
        } catch {
          throw new Error("Respons tidak berisi JSON artikel yang lengkap");
        }
        if (article?.skip === true) {
          if (!validationIssue) return null;
          break;
        }
        validateArticle(article, sources, titles, slugs);
        return { article, modelName };
      } catch (error) {
        validationIssue = error.message;
        console.warn(`Draf ${modelName} percobaan ${attempt} ditolak: ${validationIssue}`);
      }
    }
  }

  if (!validationIssue && lastRequestError) throw lastRequestError;
  return null;
}

export function pickUnusedImageCandidate(category, usedImages = [], imagePool = {}) {
  const usedSet = new Set(usedImages);
  const isUnused = (id) => !usedSet.has(`/blog-images/${id}.webp`);

  const preferred = Array.isArray(imagePool[category]) ? imagePool[category].filter(isUnused) : [];
  if (preferred.length > 0) {
    return preferred[Math.floor(Math.random() * preferred.length)];
  }

  const fallback = Object.values(imagePool).flat().filter(isUnused);
  if (fallback.length > 0) {
    return fallback[Math.floor(Math.random() * fallback.length)];
  }
  return null;
}

async function downloadImageFile(url, destPath) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(15000),
    headers: { "user-agent": "KreativLabsBlogBot/1.0 (https://www.kreativlabs.id)" },
  });
  if (!response.ok) return false;
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.startsWith("image/")) return false;
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.byteLength < 5000) return false;
  fs.writeFileSync(destPath, buffer);
  return true;
}

export async function fetchUniqueBlogImage({
  category,
  usedImages = [],
  imagesDir,
  imagePool = {},
}) {
  const usedSet = new Set(usedImages);
  fs.mkdirSync(imagesDir, { recursive: true });

  // 1. Cek apakah ada file lokal di public/blog-images yang sama sekali belum dipakai artikel mana pun
  const localUnused = fs
    .readdirSync(imagesDir)
    .filter((file) => /^(?:photo|picsum)-.*\.webp$/i.test(file))
    .map((file) => `/blog-images/${file}`)
    .filter((imgPath) => !usedSet.has(imgPath));
  if (localUnused.length > 0) {
    return localUnused[Math.floor(Math.random() * localUnused.length)];
  }

  // 2. Ambil gambar baru yang belum pernah dipakai dari pool terkurasi sesuai kategori, lalu simpan lokal
  const tried = new Set();
  for (let i = 0; i < 8; i++) {
    const candidate = pickUnusedImageCandidate(
      category,
      [...usedSet, ...[...tried].map((id) => `/blog-images/${id}.webp`)],
      imagePool
    );
    if (!candidate) break;
    tried.add(candidate);
    const filename = `${candidate}.webp`;
    const url = `https://images.unsplash.com/${candidate}?auto=format&fit=crop&w=1200&q=80&fm=webp`;
    try {
      if (await downloadImageFile(url, path.join(imagesDir, filename))) {
        return `/blog-images/${filename}`;
      }
    } catch {
      // Coba kandidat lain jika gagal unduh
    }
  }

  // 3. Fallback otomatis ke Picsum (foto Unsplash asli) jika seluruh pool terkurasi sudah habis terpakai
  for (let page = 1; page <= 5; page++) {
    try {
      const res = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=50`, {
        signal: AbortSignal.timeout(12000),
      });
      if (!res.ok) continue;
      const list = await res.json();
      const landscape = list.filter((item) => item.width > item.height);
      for (const item of landscape) {
        const imgPath = `/blog-images/picsum-${item.id}.webp`;
        if (usedSet.has(imgPath)) continue;
        const ok = await downloadImageFile(
          `https://picsum.photos/id/${item.id}/1200/675.webp`,
          path.join(imagesDir, `picsum-${item.id}.webp`)
        );
        if (ok) return imgPath;
      }
    } catch {
      // Lanjut halaman berikutnya
    }
  }

  throw new Error("Gagal mendapatkan gambar blog unik baru; membatalkan agar tidak duplikat.");
}
