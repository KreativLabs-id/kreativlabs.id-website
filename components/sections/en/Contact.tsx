"use client";

import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import AnimatedSection from "@/components/AnimatedSection";

const contactInfoEN = [
  {
    icon: MessageSquare,
    title: "WhatsApp",
    value: "+62 858-7238-1791",
    link: "https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20discuss%20a%20project",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@kreativlabs.id",
    link: "mailto:hello@kreativlabs.id",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Semarang, Central Java, Indonesia",
    link: "#",
  },
];

const emailJsServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const emailJsTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const emailJsPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export default function ContactEN() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
          message: "Message sent successfully! We will contact you soon.",
        });
        setFormData({ name: "", email: "", message: "", website: "" });
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
              message: formData.message,
              reply_to: formData.email,
            },
            {
              publicKey: emailJsPublicKey,
            }
          );

          setSubmitStatus({
            type: "success",
            message: "Message sent successfully! We will contact you soon.",
          });
          setFormData({ name: "", email: "", message: "", website: "" });
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
        message: "Failed to send message. Please try again or reach out via WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-16 md:py-20 bg-background overflow-hidden w-full scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
        
        {/* Section Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 tracking-tight">
              Start Your <span className="text-primary">Project Consultation</span>
            </h2>
            <p className="text-foreground/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Tell us about your website or design goals. Our team is ready to provide the best roadmap and estimate.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Contact Info Cards (Left) */}
            <div className="lg:col-span-4 space-y-4">
              {contactInfoEN.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border/80 hover:border-primary/50 rounded-2xl p-5 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-foreground/60 font-medium">
                          {info.title}
                        </div>
                        <a
                          href={info.link}
                          target={info.link.startsWith("http") ? "_blank" : undefined}
                          rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-bold text-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Direct WA Card */}
              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
                <p className="text-xs text-foreground/80 leading-relaxed mb-3">
                  Prefer a faster reply? Chat with our team directly on WhatsApp to discuss your scope and schedule.
                </p>
                <a
                  href="https://wa.me/6285872381791?text=Hello%20KreativLabs,%20I%20would%20like%20to%20consult%20directly"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-2.5 px-4 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-colors"
                >
                  Chat WhatsApp Now
                </a>
              </div>
            </div>

            {/* Contact Form (Right) */}
            <div className="lg:col-span-8">
              <div className="bg-card border border-border/80 rounded-2xl p-6 sm:p-8">
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
                        placeholder="e.g. John Doe"
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
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="email@yourbusiness.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-background border-border/80 text-foreground placeholder:text-foreground/40 rounded-xl px-4 py-2.5 text-sm focus:border-primary"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-foreground mb-1.5"
                    >
                      Project Requirements
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Describe your website or design project..."
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background border-border/80 text-foreground placeholder:text-foreground/40 rounded-xl px-4 py-3 text-sm focus:border-primary min-h-[130px]"
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
                          ? "bg-green-500/10 border border-green-500/20 text-green-500 font-medium"
                          : "bg-red-500/10 border border-red-500/20 text-red-400 font-medium"
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
                    className="w-full py-5 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
