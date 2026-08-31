"use client";

import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";

const sponsorshipLevels = [
  {
    number: "01",
    title: "Title Sponsor",
    amount: "₹5 Lakh+",
  },
  {
    number: "02",
    title: "Gold Sponsor",
    amount: "₹4 Lakh",
  },
  {
    number: "03",
    title: "Silver Sponsor",
    amount: "₹3 Lakh",
  },
  {
    number: "04",
    title: "Bronze Sponsor",
    amount: "₹2 Lakh",
  },
  {
    number: "05",
    title: "Associate Sponsor",
    amount: "₹1 Lakh",
  },
];

export default function Sponsors() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)]">

      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--primary)]/5 blur-[150px]" />

      {/* ================= HERO ================= */}
      <section className="relative px-5 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-[1200px] text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
            Concetto 2026
          </p>

          <h1 className="text-4xl font-black uppercase tracking-tight text-[var(--foreground)] md:text-6xl">
            Our Sponsors
          </h1>

          <div className="mx-auto mt-5 h-px w-20 bg-[var(--primary)]" />

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[var(--muted)] md:text-base">
            Concetto is proudly supported by organisations and industry
            leaders who believe in innovation, creativity and the power of
            young minds.
          </p>

        </div>
      </section>

      {/* ================= SPONSORSHIP LEVELS ================= */}
      <section className="relative px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1100px]">

          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Partner With Us
            </p>

            <h2 className="mt-2 text-2xl font-bold uppercase text-[var(--foreground)] md:text-3xl">
              Sponsorship Levels
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--muted)]">
              Choose from our sponsorship packages designed to maximise your
              brand visibility at Concetto.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {sponsorshipLevels.map((level) => (
              <div
                key={level.number}
                className="group relative w-[145px] overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)]/60 p-4 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-[0_10px_35px_rgba(232,80,2,0.12)] sm:w-[165px]"
              >
                {/* Number */}
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)]/40 text-sm font-semibold text-[var(--primary)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:shadow-[0_0_18px_rgba(232,80,2,0.2)]">
                  {level.number}
                </div>

                <h3 className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--foreground)]">
                  {level.title}
                </h3>

                <p className="mt-2 text-xs font-medium text-[var(--primary)]">
                  {level.amount}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PAST SPONSORS ================= */}
      <section className="relative border-t border-[var(--border)] bg-[var(--surface)]/20 px-5 py-20 md:px-10 md:py-28">

        <div className="mx-auto max-w-[1200px]">

          <div className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Our Partners
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase tracking-tight text-[var(--foreground)] md:text-4xl">
              Past Sponsors
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
              We are grateful to the organisations that have supported
              Concetto and helped us create unforgettable experiences.
            </p>
          </div>

          {/* Sponsor Image */}
          <div className="relative mx-auto max-w-[1000px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-4 shadow-[0_15px_60px_rgba(0,0,0,0.25)] backdrop-blur-md md:p-8">

            {/* Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--primary)]/5 blur-[100px]" />

            <div className="relative">
              <Image
                src="/sponsors/sp_1.webp"
                alt="Concetto past sponsors"
                width={1200}
                height={900}
                className="h-auto w-full object-contain"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ================= SPONSOR CTA ================= */}
      <section className="relative px-5 py-20 md:px-10 md:py-24">

        <div className="mx-auto max-w-[850px] rounded-2xl border border-[var(--primary)]/20 bg-[var(--surface)]/50 px-6 py-10 text-center shadow-[0_0_50px_rgba(232,80,2,0.06)] backdrop-blur-md md:px-10">

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Become a Partner
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            Put Your Brand in the Spotlight
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
            Partner with Concetto 2026 and connect your brand with thousands
            of students, innovators and technology enthusiasts.
          </p>

          <a
            href="mailto:sponsorship.concetto@iitism.ac.in"
            className="group mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(232,80,2,0.25)]"
          >
            <Mail size={15} />
            Contact for Sponsorship
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>

        </div>

      </section>

    </main>
  );
}