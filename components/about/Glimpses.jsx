"use client";

import Image from "next/image";

const images = [
  "/about/glimpse1.png",
  "/about/glimpse2.png",
  "/about/glimpse3.png",
  "/about/glimpse4.png",
  "/about/glimpse5.png",
  "/about/glimpse6.png",
];

export default function Glimpses() {
  return (
    <section className="relative overflow-hidden pb-20 md:pb-28">
    <h2 className="mt-2 font-['Caveat'] text-4xl text-[var(--foreground)] md:text-5xl text-center mb-6">
  Glimpses of <span className="text-[var(--primary)]">Concetto</span>
</h2>

      {/* Marquee */}
      <div className="relative overflow-hidden">

        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[var(--background)] to-transparent md:w-32" />

        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[var(--background)] to-transparent md:w-32" />

       <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4">

          {[...images, ...images].map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative h-56 w-72 shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] md:h-72 md:w-96"
            >
              <Image
                src={image}
                alt={`Concetto glimpse ${(index % images.length) + 1}`}
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover"
              />
            </div>
          ))}

        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(calc(-50% - 8px));
          }
        }
      `}</style>
    </section>
  );
}