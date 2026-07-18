"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  return (
    <section className="relative bg-base py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Trusted By"
          title="What our research partners say."
          align="center"
          className="mx-auto"
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.12} direction="up">
              <GlassCard className="flex h-full flex-col !p-7" tilt>
                <Quote size={26} className="text-emerald/50" />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-white/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-7 flex items-center gap-3 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-medblue to-emerald font-display text-sm text-white">
                    {t.name
                      .split(" ")
                      .filter((n) => !n.endsWith("."))
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{t.name}</p>
                    <p className="text-xs text-muted">
                      {t.role}, {t.org}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
