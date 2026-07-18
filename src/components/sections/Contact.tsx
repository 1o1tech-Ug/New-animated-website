"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";

const infoItems = [
  { icon: Mail, label: "Email", value: siteConfig.email },
  { icon: Phone, label: "Phone", value: siteConfig.phone },
  { icon: MapPin, label: "Address", value: siteConfig.address },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    window.setTimeout(() => setSubmitted(false), 4000);
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-muted/50 outline-none transition-colors focus:border-emerald/50";

  return (
    <section id="contact" className="relative bg-base py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Partner with our research team."
          description="Whether you're exploring a clinical partnership, media inquiry, or funding collaboration, our team responds within two business days."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            {infoItems.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.08}>
                <GlassCard tilt={false} className="flex items-center gap-4 !p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-emerald">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-muted">{item.label}</p>
                    <p className="mt-0.5 text-sm text-white">{item.value}</p>
                  </div>
                </GlassCard>
              </Reveal>
            ))}

            <Reveal delay={0.24}>
              <div className="relative h-56 overflow-hidden rounded-2xl border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-light to-base" />
                <div className="absolute inset-0 bg-grid-faint bg-[length:28px_28px] opacity-40" />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="flex h-10 w-10 animate-float items-center justify-center rounded-full bg-gradient-to-br from-medblue to-emerald shadow-glow">
                    <MapPin size={18} className="text-white" />
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 text-xs text-muted">
                  Map preview — Boston, MA
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <GlassCard tilt={false} className="!p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-xs text-muted">Full name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Dr. Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-xs text-muted">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="jane@institution.org"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-xs text-muted">Subject</label>
                  <input
                    required
                    value={form.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    placeholder="Research partnership inquiry"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs text-muted">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your inquiry..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <MagneticButton type="submit" variant="primary">
                    Send Message
                    <Send size={15} />
                  </MagneticButton>
                  {submitted && (
                    <span className="flex items-center gap-1.5 text-sm text-emerald">
                      <CheckCircle2 size={16} />
                      Message sent
                    </span>
                  )}
                </div>
              </form>
            </GlassCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
