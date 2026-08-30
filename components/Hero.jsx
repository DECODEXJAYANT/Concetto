"use client";

import { ArrowDown } from "lucide-react";
import StarField from "./StarField";
import Image from "next/image";
export default function Hero() {
  const scrollToTimeline = () => {
  document.getElementById("timeline")?.scrollIntoView({
    behavior: "smooth",
  });
};
  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--background)] pt-24">

      <StarField />


      <div className="pointer-events-none z-10 absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/10 blur-[140px]" />

      {/* Left Tech Grid */}
      <div className="tech-grid-left pointer-events-none absolute left-0 top-1/2 h-[70%] w-[30%] -translate-y-1/2 opacity-40" />

      {/* Right Dot Grid */}
      <div className="dot-grid-right pointer-events-none absolute right-0 top-1/2 h-[70%] w-[30%] -translate-y-1/2 opacity-50" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-xs font-medium uppercase tracking-[0.5em] text-[var(--text-muted)] md:text-sm">
          IIT (ISM) Dhanbad presents
        </p>

     <div className="flex items-center justify-center">
  <div className="relative h-[clamp(5rem,13vw,10rem)] w-[clamp(5rem,13vw,10rem)] shrink-0">
    <Image
      src="/logo.webp"
      alt="C"
      fill
      priority
      className="object-contain"
    />
  </div>

  <h1 className="text-[clamp(3rem,9vw,7rem)] font-black uppercase leading-none tracking-[-0.06em]">
    oncetto
    <span className="text-(--primary)">.</span>
  </h1>
</div>

        <div className="mt-6 flex flex-col items-center gap-3">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--text-muted)] md:text-base">
            The Techno-Management Fest
          </p>

          <div className="h-px w-24 bg-[var(--primary)]" />

          <p className="text-xs uppercase tracking-[0.3em] text-[var(--text-muted)]">
            Think • Create • Transform
          </p>
        </div>

        <button className="group mt-12 flex items-center gap-3 rounded-full border border-(--primary) px-6 py-3 text-xs font-semibold uppercase tracking-widest  hover:bg-(--primary) hover:text-white"
        onClick={ scrollToTimeline }
        >
          Explore
          <ArrowDown
            size={15}
            className="transition-transform group-hover:translate-y-1"
          />
        </button>
      </div>
    </section>
  );
}