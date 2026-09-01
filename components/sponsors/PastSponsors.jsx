import Image from "next/image";

export default function PastSponsors() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--surface)]/20 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1200px]">

        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Our Partners
          </p>

          <h2 className="mt-2 text-3xl font-black text-[var(--foreground)]">
            Past Sponsors
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[var(--muted)]">
            We are grateful to the organisations that have supported
            Concetto and helped us create unforgettable experiences.
          </p>
        </div>

        <div className="mx-auto max-w-[1000px] rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 p-4 md:p-8">
          <Image
            src="/sponsors/sp_1.webp"
            alt="Concetto past sponsors"
            width={1200}
            height={900}
            className="h-auto w-full object-contain"
          />
        </div>

      </div>
    </section>
  );
}