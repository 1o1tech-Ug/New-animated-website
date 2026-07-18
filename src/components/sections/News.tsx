"use client";

import { ArrowUpRight } from "lucide-react";
import { newsArticles } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function News() {
  return (
    <section id="news" className="relative bg-base py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Latest"
          title="News & publications."
          description="Updates from across our laboratories, clinical sites, and partner network."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {newsArticles.map((article, i) => (
            <Reveal key={article.id} delay={i * 0.1}>
              <a href="#" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-light via-navy to-base transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-grid-faint bg-[length:24px_24px] opacity-30" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-base/60 px-3 py-1 text-xs text-emerald backdrop-blur-md">
                    {article.category}
                  </span>
                </div>
                <div className="mt-5">
                  <p className="text-xs text-muted">{article.date}</p>
                  <h3 className="mt-2 font-display text-lg leading-snug text-white transition-colors duration-300 group-hover:text-emerald">
                    {article.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-medblue-light">
                    Read More
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
