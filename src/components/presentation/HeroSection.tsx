"use client";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/hero-bg.svg)" }}
        aria-hidden
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black" />
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">
          Smart Device Solutions
        </p>

        <h1 className="text-gradient text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          3 Minutes to Understand
          <br />
          <span className="text-white">XX Technology</span>
        </h1>

        <p className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg md:text-xl">
          Helping brands sell over 5 million smart devices worldwide
        </p>

        <div className="mt-16 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-muted">Scroll to explore</span>
          <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  );
}
