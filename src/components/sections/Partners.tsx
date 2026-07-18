import { partners } from "@/data/content";
import Reveal from "@/components/ui/Reveal";

export default function Partners() {
  const row1 = partners.slice(0, 4);
  const row2 = partners.slice(4);

  return (
    <section id="partners" className="relative overflow-hidden bg-base py-24">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="eyebrow text-emerald">Trusted Collaboration</span>
          <h2 className="mt-4 font-display text-2xl text-white sm:text-3xl">
            Working alongside the world&apos;s leading institutions.
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-14 space-y-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent sm:w-48" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent sm:w-48" />

        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
            {[...row1, ...row1].map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-xl text-muted/60 transition-colors hover:text-white"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee-reverse items-center gap-16 pr-16">
            {[...row2, ...row2].map((name, i) => (
              <span
                key={i}
                className="whitespace-nowrap font-display text-xl text-muted/60 transition-colors hover:text-white"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
