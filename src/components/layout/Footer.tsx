"use client";

import { useState, type FormEvent } from "react";
import { Activity, Linkedin, Twitter, Youtube, Mail, ArrowUpRight } from "lucide-react";
import { footerLinks, siteConfig } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    window.setTimeout(() => setSubscribed(false), 3500);
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-base pt-24">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full bg-medblue/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <div className="grid gap-14 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-medblue to-emerald">
                  <Activity size={16} className="text-white" strokeWidth={2.5} />
                </span>
                <span className="font-display text-lg font-medium text-white">
                  {siteConfig.name}
                </span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
                {siteConfig.description}
              </p>

              <form onSubmit={handleSubmit} className="mt-8 max-w-sm">
                <p className="eyebrow mb-3 text-emerald">Newsletter</p>
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 pl-4 focus-within:border-emerald/50">
                  <Mail size={16} className="text-muted" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@institution.org"
                    className="w-full bg-transparent text-sm text-white placeholder:text-muted/60 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-medblue to-emerald text-white transition-transform hover:scale-105"
                    aria-label="Subscribe"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>
                <p className="mt-2 h-4 text-xs text-emerald">
                  {subscribed ? "Subscribed — thank you." : ""}
                </p>
              </form>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="eyebrow mb-5 text-muted">{title}</p>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-muted transition-all hover:border-emerald/40 hover:text-emerald"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
