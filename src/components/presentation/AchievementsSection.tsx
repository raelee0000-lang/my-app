"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { useCounter } from "@/hooks/useCounter";
import { FadeIn, SectionLabel, SectionTitle, SectionWrapper } from "./SectionWrapper";

function StatCard({
  value,
  suffix,
  label,
  decimals = 0,
  active,
}: {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
  active: boolean;
}) {
  const count = useCounter(value, active, 2200, decimals);

  return (
    <div className="glass-card flex flex-col items-center rounded-2xl px-6 py-10 text-center sm:px-10">
      <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        {count}
        {suffix && (
          <span className="text-2xl font-medium text-accent sm:text-3xl">{suffix}</span>
        )}
      </p>
      <p className="mt-3 text-sm text-muted sm:text-base">{label}</p>
    </div>
  );
}

export function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <SectionWrapper id="achievements" className="bg-black">
      <div ref={ref} className="relative z-10 w-full max-w-5xl">
        <FadeIn className="flex flex-col items-center">
          <SectionLabel>Our Impact</SectionLabel>
          <SectionTitle>Company Achievements</SectionTitle>
        </FadeIn>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
          <FadeIn delay={0.1}>
            <StatCard value={137} label="Clients" active={inView} />
          </FadeIn>
          <FadeIn delay={0.2}>
            <StatCard
              value={5.2}
              suffix="M"
              label="Devices Shipped"
              decimals={1}
              active={inView}
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <StatCard value={18} label="Countries Served" active={inView} />
          </FadeIn>
        </div>
      </div>

      <div className="glow-line absolute bottom-0 left-0 right-0 h-px" />
    </SectionWrapper>
  );
}
