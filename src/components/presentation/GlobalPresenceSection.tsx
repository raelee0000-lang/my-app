"use client";

import { FadeIn, SectionLabel, SectionTitle, SectionWrapper } from "./SectionWrapper";

const countries = [
  { name: "USA", x: 22, y: 38 },
  { name: "UK", x: 48, y: 28 },
  { name: "Germany", x: 52, y: 30 },
  { name: "France", x: 49, y: 33 },
  { name: "Japan", x: 82, y: 36 },
  { name: "China", x: 75, y: 38 },
  { name: "Australia", x: 84, y: 68 },
  { name: "Brazil", x: 32, y: 62 },
  { name: "India", x: 68, y: 45 },
  { name: "UAE", x: 60, y: 44 },
  { name: "Canada", x: 20, y: 28 },
  { name: "Mexico", x: 18, y: 44 },
  { name: "South Korea", x: 80, y: 37 },
  { name: "Singapore", x: 74, y: 52 },
  { name: "Netherlands", x: 50, y: 29 },
  { name: "Italy", x: 52, y: 34 },
  { name: "Spain", x: 47, y: 36 },
  { name: "Sweden", x: 53, y: 24 },
];

export function GlobalPresenceSection() {
  return (
    <SectionWrapper id="global" className="bg-black">
      <div className="relative z-10 w-full max-w-5xl">
        <FadeIn className="flex flex-col items-center">
          <SectionLabel>Worldwide</SectionLabel>
          <SectionTitle>Global Presence</SectionTitle>
          <p className="-mt-6 mb-10 text-center text-muted">
            Serving clients across {countries.length} countries and growing
          </p>
        </FadeIn>

        <FadeIn>
          <div className="glass-card relative mx-auto aspect-[2/1] w-full max-w-3xl overflow-hidden rounded-3xl">
            <svg
              viewBox="0 0 100 50"
              className="h-full w-full opacity-20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.15"
            >
              <ellipse cx="50" cy="25" rx="48" ry="23" className="stroke-white/30" />
              <path
                d="M10 25 Q30 15 50 25 T90 25"
                className="stroke-white/20"
              />
              <path
                d="M10 25 Q30 35 50 25 T90 25"
                className="stroke-white/20"
              />
              <line x1="50" y1="2" x2="50" y2="48" className="stroke-white/10" />
              <line x1="2" y1="25" x2="98" y2="25" className="stroke-white/10" />
            </svg>

            {countries.map((country) => (
              <div
                key={country.name}
                className="absolute"
                style={{ left: `${country.x}%`, top: `${country.y}%` }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 h-3 w-3 animate-ping rounded-full bg-accent/40" />
                  <div className="relative h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(41,151,255,0.8)]" />
                </div>
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {countries.map((c) => (
              <span
                key={c.name}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
              >
                {c.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
