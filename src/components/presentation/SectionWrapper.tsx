"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`snap-section relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden px-5 py-16 sm:px-8 md:px-12 lg:px-16 ${className}`}
    >
      {children}
    </section>
  );
}

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-accent">
      {children}
    </p>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-gradient mb-10 max-w-2xl text-center text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
      {children}
    </h2>
  );
}
