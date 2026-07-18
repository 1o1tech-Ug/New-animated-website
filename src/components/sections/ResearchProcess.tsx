"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lightbulb,
  FileText,
  TestTube,
  Stethoscope,
  BookOpen,
  Rocket,
} from "lucide-react";
import { processSteps } from "@/data/content";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = { Lightbulb, FileText, TestTube, Stethoscope, BookOpen, Rocket };

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ResearchProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!lineRef.current || !containerRef.current) return;

      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top" });

      gsap.to(lineRef.current, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
            delay: i * 0.03,
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" className="relative bg-base py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="How We Work"
          title="From hypothesis to healthcare — six deliberate stages."
          align="center"
          className="mx-auto"
        />

        <div ref={containerRef} className="relative mt-20">
          <div className="absolute left-6 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block" />
          <div
            ref={lineRef}
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-medblue to-emerald md:left-1/2 md:block"
          />

          <div className="space-y-10 md:space-y-0">
            {processSteps.map((step, i) => {
              const Icon = icons[step.icon as keyof typeof icons];
              const isEven = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="relative md:grid md:grid-cols-2 md:gap-16 md:py-8"
                >
                  <div
                    className={`flex items-start gap-5 md:items-center ${
                      isEven ? "md:col-start-1 md:justify-end md:text-right" : "md:col-start-2"
                    }`}
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald/30 bg-navy/40 text-emerald ${
                        isEven ? "md:order-2" : ""
                      }`}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-medblue-light">
                        {step.number}
                      </span>
                      <h3 className="mt-1 font-display text-xl text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <span className="absolute left-6 top-1 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-emerald bg-base md:left-1/2 md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
