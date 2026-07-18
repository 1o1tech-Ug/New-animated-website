"use client";

import { useState } from "react";
import { CalendarDays, ArrowRight } from "lucide-react";
import { featuredResearch } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ResearchModal from "@/components/ui/ResearchModal";

type ResearchItem = (typeof featuredResearch)[number];

export default function FeaturedResearch() {
  const [active, setActive] = useState<ResearchItem | null>(null);

  return (
    <section id="featured-research" className="relative bg-base py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Featured Studies"
          title="Research currently shaping clinical practice."
          description="A selection of studies across our active portfolio — from early-stage discovery to published, peer-reviewed findings."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredResearch.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 0.1}>
              <button onClick={() => setActive(item)} className="block w-full text-left">
                <GlassCard className="flex h-full flex-col !p-7">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-medblue-light">{item.category}</span>
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <CalendarDays size={12} />
                      {item.date}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-emerald">
                    Read Study
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </GlassCard>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <ResearchModal item={active} onClose={() => setActive(null)} />
    </section>
  );
}
