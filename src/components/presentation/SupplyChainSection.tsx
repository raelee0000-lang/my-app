"use client";

import { FadeIn, SectionLabel, SectionTitle, SectionWrapper } from "./SectionWrapper";

const steps = [
  { title: "SMT", desc: "Precision surface-mount technology for PCB assembly." },
  { title: "Injection Molding", desc: "High-quality enclosures and structural components." },
  { title: "Assembly", desc: "Automated and manual assembly lines at scale." },
  { title: "Testing Lab", desc: "Rigorous QA, EMC, and reliability testing." },
];

export function SupplyChainSection() {
  return (
    <SectionWrapper id="supply-chain" className="bg-black">
      <div className="relative z-10 w-full max-w-3xl">
        <FadeIn className="flex flex-col items-center">
          <SectionLabel>Manufacturing</SectionLabel>
          <SectionTitle>Supply Chain Capability</SectionTitle>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent sm:left-1/2 sm:-translate-x-px" />

          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative mb-10 flex items-start gap-6 last:mb-0 sm:mb-14 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-black sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-accent animate-pulse-glow" />
              </div>

              <div
                className={`glass-card flex-1 rounded-2xl p-5 sm:max-w-[calc(50%-2rem)] sm:p-6 ${
                  i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"
                }`}
              >
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  Step {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
