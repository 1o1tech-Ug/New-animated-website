"use client";

import {
  Microscope,
  FlaskConical,
  Dna,
  Globe2,
  Pill,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";
import { researchAreas } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = { Microscope, FlaskConical, Dna, Globe2, Pill, BrainCircuit };

export default function ResearchAreas() {
  return (
    <section id="research-areas" className="relative bg-base py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What We Study"
          title="Six domains. One mission: better outcomes."
          description="Our research spans the full arc from molecular discovery to population-level health policy."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {researchAreas.map((area, i) => {
            const Icon = icons[area.icon as keyof typeof icons];
            return (
              <Reveal key={area.title} delay={(i % 3) * 0.1}>
                <GlassCard className="h-full !p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-medblue/20 to-emerald/20 text-emerald transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-muted opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-emerald group-hover:opacity-100"
                    />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
