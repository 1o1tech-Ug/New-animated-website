"use client";

import { motion } from "framer-motion";
import { Target, Eye, HeartPulse, Microscope } from "lucide-react";
import { aboutCounters, missionVisionValues, siteConfig } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import GlassCard from "@/components/ui/GlassCard";

const icons = { Target, Eye, HeartPulse };

export default function About() {
  return (
    <section id="about" className="relative bg-base py-28 md:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal direction="left" className="lg:sticky lg:top-32 lg:self-start">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-base" />
            <div className="absolute inset-0 bg-grid-faint bg-[length:36px_36px] opacity-40" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald/20"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-medblue/30"
            />
            <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-medblue to-emerald shadow-glow">
              <Microscope size={30} className="text-white" />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-base to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="eyebrow text-emerald">Est. 2010</p>
              <p className="mt-2 font-display text-xl text-white">
                Boston Research Headquarters
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <span className="eyebrow flex items-center gap-2 text-emerald">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            About Medovon
          </span>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl font-medium leading-[1.15] text-balance text-white sm:text-4xl md:text-[2.75rem]">
              Where scientific rigor meets human impact.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              For over a decade, {siteConfig.shortName} has united clinicians,
              biostatisticians, and laboratory scientists under a single
              principle: research is only valuable once it reaches the people
              it was designed to help.
            </p>
          </Reveal>

          <div className="mt-10 space-y-4">
            {missionVisionValues.map((item, i) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <Reveal key={item.key} delay={0.1 + i * 0.08}>
                  <GlassCard tilt={false} className="flex gap-4 !p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-emerald">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-display text-lg text-white">{item.key}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </div>
                  </GlassCard>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
              {aboutCounters.map((c) => (
                <div key={c.label}>
                  <p className="font-mono text-2xl text-white sm:text-3xl">
                    <AnimatedCounter value={c.value} suffix={c.suffix} />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted">{c.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
