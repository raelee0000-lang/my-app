"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect fill='%23000' width='1' height='1'/%3E%3C/svg%3E"
      >
        <source
          src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent"
        >
          Smart Device Solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          3 Minutes to Understand
          <br />
          <span className="text-white">XX Technology</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:text-xl"
        >
          Helping brands sell over 5 million smart devices worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-muted">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-10 w-px bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
