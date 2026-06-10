"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionLabel, SectionTitle, SectionWrapper } from "./SectionWrapper";

const keywords = [
  {
    word: "Quality",
    desc: "ISO-certified processes and rigorous testing at every stage.",
  },
  {
    word: "Innovation",
    desc: "Dedicated R&D team pushing the boundaries of smart devices.",
  },
  {
    word: "Delivery",
    desc: "On-time, on-budget — proven across 5M+ shipped units.",
  },
  {
    word: "Cost Efficiency",
    desc: "Optimized supply chain delivering maximum value.",
  },
];

export function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-us" className="bg-zinc-950">
      <div className="relative z-10 w-full max-w-4xl">
        <FadeIn className="flex flex-col items-center">
          <SectionLabel>Our Promise</SectionLabel>
          <SectionTitle>Why Choose Us</SectionTitle>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {keywords.map((item, i) => (
            <motion.div
              key={item.word}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.06] to-transparent p-6 sm:p-8"
            >
              <motion.div
                className="absolute -right-4 -top-4 text-7xl font-bold text-white/[0.03] transition-colors group-hover:text-accent/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                {String(i + 1).padStart(2, "0")}
              </motion.div>
              <h3 className="relative text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {item.word}
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.desc}
              </p>
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
