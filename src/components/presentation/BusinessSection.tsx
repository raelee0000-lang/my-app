"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionLabel, SectionTitle, SectionWrapper } from "./SectionWrapper";

const capabilities = [
  {
    title: "ODM",
    desc: "End-to-end original design manufacturing tailored to your brand vision.",
    icon: "◆",
  },
  {
    title: "OEM",
    desc: "Scalable production with your specifications and quality standards.",
    icon: "◇",
  },
  {
    title: "Product Development",
    desc: "From concept to prototype — hardware, firmware, and industrial design.",
    icon: "◎",
  },
  {
    title: "Supply Chain",
    desc: "Global sourcing, logistics, and inventory management at scale.",
    icon: "◈",
  },
];

export function BusinessSection() {
  return (
    <SectionWrapper id="business" className="bg-zinc-950">
      <div className="relative z-10 w-full max-w-5xl">
        <FadeIn className="flex flex-col items-center">
          <SectionLabel>What We Do</SectionLabel>
          <SectionTitle>Business Introduction</SectionTitle>
          <p className="-mt-6 mb-12 max-w-lg text-center text-muted">
            Full-spectrum capabilities to bring smart devices from idea to market.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="glass-card group rounded-2xl p-6 sm:p-8"
            >
              <span className="mb-4 inline-block text-2xl text-accent transition-transform group-hover:scale-110">
                {item.icon}
              </span>
              <h3 className="text-xl font-semibold text-white sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
