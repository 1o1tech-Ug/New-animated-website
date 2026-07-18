"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, User2, CalendarDays, Activity } from "lucide-react";
import type { featuredResearch } from "@/data/content";

type ResearchItem = (typeof featuredResearch)[number];

interface ResearchModalProps {
  item: ResearchItem | null;
  onClose: () => void;
}

const statusColors: Record<string, string> = {
  "Peer Review": "text-medblue-light border-medblue/40 bg-medblue/10",
  "Phase II Trial": "text-emerald border-emerald/40 bg-emerald/10",
  "Phase I Trial": "text-emerald border-emerald/40 bg-emerald/10",
  Completed: "text-muted border-white/20 bg-white/5",
  Ongoing: "text-medblue-light border-medblue/40 bg-medblue/10",
};

export default function ResearchModal({ item, onClose }: ResearchModalProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-base/90 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-8 sm:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close research detail"
              className="absolute right-6 top-6 rounded-full border border-white/10 p-2 text-muted transition hover:border-emerald/40 hover:text-white"
            >
              <X size={18} />
            </button>

            <span className="eyebrow text-emerald">{item.category}</span>
            <h3 className="mt-3 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
              {item.title}
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
                  statusColors[item.status] ??
                  "text-muted border-white/20 bg-white/5"
                }`}
              >
                <Activity size={12} />
                {item.status}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                <CalendarDays size={12} />
                {item.date}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted">
                <User2 size={12} />
                {item.leadResearcher}
              </span>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              {item.fullSummary}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
