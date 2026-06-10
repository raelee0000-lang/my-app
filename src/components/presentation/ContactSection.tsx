"use client";

import { motion } from "framer-motion";
import { FadeIn, SectionLabel, SectionTitle, SectionWrapper } from "./SectionWrapper";

const contacts = [
  { label: "Email", value: "contact@xxtechnology.com", href: "mailto:contact@xxtechnology.com" },
  { label: "WhatsApp", value: "+86 138 0000 0000", href: "https://wa.me/8613800000000" },
  { label: "Website", value: "www.xxtechnology.com", href: "https://www.xxtechnology.com" },
];

export function ContactSection() {
  return (
    <SectionWrapper id="contact" className="bg-black pb-24">
      <div className="relative z-10 w-full max-w-2xl text-center">
        <FadeIn className="flex flex-col items-center">
          <SectionLabel>Get in Touch</SectionLabel>
          <SectionTitle>Contact Us</SectionTitle>
          <p className="-mt-6 mb-12 text-muted">
            Ready to build the next generation of smart devices together?
          </p>
        </FadeIn>

        <div className="space-y-4">
          {contacts.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.1}>
              <a
                href={item.href}
                target={item.label === "Website" ? "_blank" : undefined}
                rel={item.label === "Website" ? "noopener noreferrer" : undefined}
                className="glass-card group flex flex-col items-center rounded-2xl px-6 py-5 transition-colors hover:border-accent/30 sm:flex-row sm:justify-between sm:px-8"
              >
                <span className="text-xs font-medium uppercase tracking-widest text-accent">
                  {item.label}
                </span>
                <span className="mt-1 text-base text-white transition-colors group-hover:text-accent sm:mt-0">
                  {item.value}
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <motion.a
            href="mailto:contact@xxtechnology.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-black shadow-[0_0_40px_rgba(41,151,255,0.35)] transition-shadow hover:shadow-[0_0_60px_rgba(41,151,255,0.5)] sm:w-auto sm:min-w-[280px] sm:text-lg"
          >
            Start Your Project
          </motion.a>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="mt-12 text-xs text-muted">
            © {new Date().getFullYear()} XX Technology. All rights reserved.
          </p>
        </FadeIn>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
    </SectionWrapper>
  );
}
