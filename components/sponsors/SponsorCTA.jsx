import { ArrowUpRight, Mail } from "lucide-react";

export default function SponsorCTA() {
  return (
    <section className="px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[850px] rounded-2xl border border-[var(--primary)]/20 bg-[var(--surface)]/50 px-6 py-10 text-center md:px-10">

        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
          Become a Partner
        </p>

        <h2 className="mt-3 text-2xl font-bold text-[var(--foreground)] md:text-3xl">
          Put Your Brand in the Spotlight
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
          Partner with Concetto 2026 and connect your brand with
          thousands of students and innovators.
        </p>

        <a
          href="mailto:sponsorship.concetto@iitism.ac.in"
          className="mx-auto mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white"
        >
          <Mail size={15} />
          Contact for Sponsorship
          <ArrowUpRight size={15} />
        </a>

      </div>
    </section>
  );
}