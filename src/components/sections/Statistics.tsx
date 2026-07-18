"use client";

import { statistics } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function Statistics() {
  return (
    <section className="relative overflow-hidden bg-navy py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-medblue/10 via-transparent to-emerald/10" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[length:48px_48px] opacity-30" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4 lg:px-10">
        {statistics.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} direction="scale" className="text-center">
            <p className="font-display text-4xl text-white sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 eyebrow text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
