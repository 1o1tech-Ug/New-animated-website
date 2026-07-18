"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Globe2,
  FlaskConical,
  GraduationCap,
  ShieldCheck,
  LineChart,
  Target,
} from "lucide-react";
import { whyChooseUs } from "@/data/content";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

const icons = { Globe2, FlaskConical, GraduationCap, ShieldCheck, LineChart, Target };

export default function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-base py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Why Medovon"
          title="Built for the standard clinical evidence demands."
          align="center"
          className="mx-auto"
        />

        <div ref={ref} className="relative mt-20 pl-14 sm:pl-16">
          <div className="absolute left-[18px] top-1 h-full w-px bg-white/10 sm:left-[22px]" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[18px] top-1 w-px bg-gradient-to-b from-medblue to-emerald sm:left-[22px]"
          />

          <div className="space-y-12">
            {whyChooseUs.map((item, i) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <Reveal key={item.title} direction="left" delay={i * 0.05} className="relative">
                  <span className="absolute -left-14 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-emerald/40 bg-base text-emerald sm:-left-16">
                    <Icon size={16} />
                  </span>
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
