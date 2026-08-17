"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { MessageSquare, Mail, MapPin, Clock, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";

const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function ContactEN() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "website",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  useEffect(() => {
    if (!submitStatus.type) return;

    const timeout = window.setTimeout(() => {
      setSubmitStatus({ type: null, message: "" });
    }, 7000);

    return () => window.clearTimeout(timeout);
  }, [submitStatus.type, submitStatus.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! Our team will get in touch shortly.",
        });
        setFormData({ name: "", email: "", service: "website", message: "", website: "" });
      } else {
        if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
          await emailjs.send(
            emailJsServiceId,
            emailJsTemplateId,
            {
              name: formData.name,
              from_name: formData.name,
              email: formData.email,
              from_email: formData.email,
              message: `[Service: ${formData.service}] ${formData.message}`,
              reply_to: formData.email,
            },
            {
              publicKey: emailJsPublicKey,
            }
          );

          setSubmitStatus({
            type: "success",
            message: "Message sent successfully! Our team will get in touch shortly.",
          });
          setFormData({ name: "", email: "", service: "website", message: "", website: "" });
          return;
        }

        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please reach out via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Start Your Project <span className="text-primary">Consultation</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Tell us about your digital goals or visual design requirements. We will provide technical recommendations and transparent timelines.
            </p>
          </div>
        </AnimatedSection>

        {/* 2-Column Clean Contact Section */}
        <AnimatedSection animation="fade-up" delay={80}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Direct Studio Channels (Left 5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-card border border-border/80 rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-foreground tracking-tight mb-1">
                    Contact & Channels
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    Connect through official channels or send a project brief through the inquiry form.
                  </p>
                </div>

                <div className="space-y-4 pt-2">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <WhatsAppIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/60 font-medium">Official WhatsApp</div>
                      <a
                        href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20consult%20a%20project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-foreground hover:text-primary transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>+62 858-7238-1791</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/60 font-medium">Studio Email</div>
                      <a
                        href="mailto:hello@kreativlabs.id"
                        className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                      >
                        hello@kreativlabs.id
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/60 font-medium">Location</div>
                      <p className="text-sm font-bold text-foreground">
                        Semarang, Central Java, Indonesia
                      </p>
                    </div>
                  </div>

                  {/* Operational Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/60 font-medium">Business Hours</div>
                      <p className="text-xs sm:text-sm text-foreground/80 font-medium">
                        Mon – Sat, 08:00 – 21:00 (GMT+7)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Fast WhatsApp Callout */}
              <div className="mt-8 pt-6 border-t border-border/60">
                <p className="text-xs text-foreground/75 leading-relaxed mb-3">
                  Prefer direct communication? Message our engineering team on WhatsApp for prompt responses.
                </p>
                <a
                  href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20consult%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-semibold hover:bg-primary/90 transition-all hover:shadow-md hover:-translate-y-0.5 text-center"
                >
                  Message via WhatsApp
                </a>
              </div>
            </div>

            {/* Editorial Contact Form (Right 7 cols) */}
            <div className="lg:col-span-7 bg-card border border-border/80 rounded-3xl p-6 sm:p-8 md:p-9 shadow-xs">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-foreground mb-1.5"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border/80 text-foreground placeholder:text-foreground/40 rounded-xl px-4 py-2.5 text-sm focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-foreground mb-1.5"
                    >
                      Email / WhatsApp Number
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="text"
                      placeholder="email@company.com or phone..."
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border/80 text-foreground placeholder:text-foreground/40 rounded-xl px-4 py-2.5 text-sm focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-xs font-semibold text-foreground mb-1.5"
                  >
                    Service Requirement
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-background border border-border/80 text-foreground rounded-xl px-4 py-2.5 text-sm focus:border-primary focus:outline-none transition-colors"
                  >
                    <option value="website">Web Development (Landing Page / Profile)</option>
                    <option value="custom-app">Custom Web Application (POS, Portals)</option>
                    <option value="branding">Logo & Brand Identity System</option>
                    <option value="social-media">Marketing Creative & Social Kit</option>
                    <option value="uiux">UI/UX Design (Figma System)</option>
                    <option value="other">Other Scope</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-foreground mb-1.5"
                  >
                    Project Scope & Brief
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project vision, target timeline, or reference ideas..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background border-border/80 text-foreground placeholder:text-foreground/40 rounded-xl px-4 py-3 text-sm focus:border-primary min-h-[120px]"
                    required
                  />
                </div>

                {/* Honeypot field for bot spam detection */}
                <div className="hidden" aria-hidden="true">
                  <Input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`flex items-center gap-2 p-3.5 rounded-xl text-xs sm:text-sm ${
                      submitStatus.type === "success"
                        ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-medium"
                        : "bg-red-500/10 border border-red-500/20 text-red-500 font-medium"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="w-4 h-4 shrink-0" />
                    ) : (
                      <AlertCircle className="w-4 h-4 shrink-0" />
                    )}
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all disabled:opacity-50 hover:shadow-md hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <span>Submit Inquiry</span>
                  )}
                </Button>

              </form>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
