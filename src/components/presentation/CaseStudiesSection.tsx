"use client";

import { useEffect, useState } from "react";
import { FadeIn, SectionLabel, SectionTitle, SectionWrapper } from "./SectionWrapper";

const cases = [
  {
    brand: "Smart Home Leader",
    result: "2.1M units shipped in 18 months",
    desc: "Full ODM partnership from design to delivery across 12 SKUs.",
    metric: "98.5%",
    metricLabel: "On-time delivery",
  },
  {
    brand: "Wearables Startup",
    result: "Zero to 500K units in first year",
    desc: "Rapid prototyping and scalable manufacturing for a global launch.",
    metric: "4.8★",
    metricLabel: "Product rating",
  },
  {
    brand: "IoT Enterprise",
    result: "40% cost reduction achieved",
    desc: "Supply chain optimization and component redesign across the portfolio.",
    metric: "35%",
    metricLabel: "Faster time-to-market",
  },
];

export function CaseStudiesSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % cases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <SectionWrapper id="cases" className="bg-zinc-950">
      <div className="relative z-10 w-full max-w-4xl">
        <FadeIn className="flex flex-col items-center">
          <SectionLabel>Success Stories</SectionLabel>
          <SectionTitle>Case Studies</SectionTitle>
        </FadeIn>

        <div className="relative mx-auto mt-4 h-[340px] max-w-lg sm:h-[300px] sm:max-w-2xl">
          <div className="glass-card absolute inset-0 flex flex-col justify-between rounded-3xl p-6 sm:p-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">
                Customer {active + 1} of {cases.length}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                {cases[active].brand}
              </h3>
              <p className="mt-4 text-lg font-medium text-white/90">
                {cases[active].result}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {cases[active].desc}
              </p>
            </div>
            <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-6">
              <div>
                <p className="text-3xl font-bold text-accent">{cases[active].metric}</p>
                <p className="text-xs text-muted">{cases[active].metricLabel}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {cases.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`View case study ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-accent" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
