"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/content";
import MagneticButton from "@/components/ui/MagneticButton";
import ParticleField from "@/components/ui/ParticleField";

const FloatingMolecule = dynamic(
  () => import("@/components/three/FloatingMolecule"),
  { ssr: false }
);

const headline = siteConfig.tagline.split(" ");

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.4 },
  },
};

const word = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-base pt-28"
    >
      <div className="absolute inset-0 bg-grid-faint bg-[length:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_30%,black,transparent)]" />
      <div className="absolute -left-40 top-0 h-[32rem] w-[32rem] rounded-full bg-navy-light/60 blur-[140px]" />
      <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] rounded-full bg-emerald/10 blur-[140px]" />
      <ParticleField count={70} />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-emerald"
          >
            <Sparkles size={12} />
            Biomedical Research &middot; Est. 2010
          </motion.span>

          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="mt-7 font-display text-4xl font-medium leading-[1.08] text-balance sm:text-5xl md:text-6xl lg:text-[3.75rem]"
          >
            {headline.map((w, i) => (
              <motion.span
                key={i}
                variants={word}
                className={`mr-3 inline-block ${
                  i >= headline.length - 3 ? "text-gradient-accent" : "text-white"
                }`}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton variant="primary">
              Our Research
            </MagneticButton>
            <MagneticButton variant="ghost">Learn More</MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-14 flex items-center gap-8 border-t border-white/10 pt-8"
          >
            {[
              ["100+", "Researchers"],
              ["250+", "Publications"],
              ["15+", "Countries"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-mono text-xl text-white sm:text-2xl">{value}</p>
                <p className="mt-1 text-xs text-muted">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto h-[22rem] w-full max-w-md lg:h-[32rem]"
        >
          <FloatingMolecule />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="eyebrow text-[10px]">Scroll</span>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
