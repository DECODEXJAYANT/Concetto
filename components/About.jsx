"use client";

import Image from "next/image";

const images = [
  {
    src: "/about1.webp",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/about2.webp",
    className: "col-span-1 row-span-1",
  },
  {
    src: "/about3.webp",
    className: "col-span-1 row-span-2",
  },
  {
    src: "/about4.webp",
    className: "col-span-1 row-span-1",
  },
];

export default function About() {
  return (
    <section
      id="about-us"
      className="relative overflow-hidden bg-[var(--background)] px-5 py-20 md:px-10 md:py-28"
    >
      <div className="mx-auto grid max-w-[1800px] gap-8 lg:grid-cols-2 lg:gap-10">

        {/* Left Content */}
        <div className="flex flex-col justify-center rounded-3xl border border-[var(--border)] bg-[var(--background)] p-7 md:p-12 lg:p-14">

          <div className="mb-10 flex items-center gap-4">
            <span className="h-px w-10 bg-[var(--primary)]" />

            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              About Concetto
            </span>
          </div>

          <h2 className="text-2xl font-bold uppercase leading-[0.95] tracking-tight md:text-4xl xl:text-4xl">
            Where Ideas
            <br />
            <span className="text-[var(--primary)]">Meet</span> Innovation.
          </h2>

          <div className="mt-10 space-y-6 text-sm leading-7 text-[var(--text-muted)] md:text-base">
            <p>
              CONCETTO is the annual techno-management fest of IIT
              (ISM) Dhanbad, bringing together technology, innovation,
              creativity and competition under one roof.
            </p>

            <p>
              More than just a fest, CONCETTO is a platform where
              ambitious minds come together to challenge ideas, build
              solutions and experience the future of technology.
            </p>

            <p>
              From intense technical competitions and workshops to
              engaging events and unforgettable experiences, CONCETTO
              celebrates curiosity, creativity and the spirit of
              innovation.
            </p>
          </div>

          {/* Accent */}
          <div className="mt-12 flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)]">
              IIT (ISM) Dhanbad
            </span>
          </div>
        </div>

        {/* Image Collage */}
        <div className="grid min-h-[600px] grid-cols-2 grid-rows-3 gap-4 md:min-h-[700px]">

          {images.map((image, index) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={`Concetto ${index + 1}`}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Orange Overlay */}
              <div className="absolute inset-0 bg-[var(--primary)] opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-30" />

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-[var(--primary)]/60" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}