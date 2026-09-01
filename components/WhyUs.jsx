const stats = [
  ["20K+", "Footfall"],
  ["100+", "Events"],
  ["100+", "Institutes"],
  ["5K+", "Student Participation"],
  ["100K+", "Media Reach"],
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-6xl">

        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Why Us?
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Why Concetto
            <span className="text-[var(--primary)]">?</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[var(--muted)]">
            A platform where innovation, technology and young minds
            come together to create something extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {stats.map(([value, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-[var(--border)] bg-[var(--surface)]/60 px-3 py-6 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:border-[var(--primary)]/50"
            >
              <h3 className="text-3xl font-black text-[var(--primary)]">
                {value}
              </h3>

              <p className="mt-2 text-xs uppercase tracking-wider text-[var(--muted)]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-2xl border border-[var(--primary)]/20 bg-[var(--primary)]/5 px-5 py-4 text-center">
          <p className="text-sm text-[var(--muted)]">
            One of the{" "}
            <span className="font-semibold text-[var(--foreground)]">
              largest techno-management fests in Eastern India
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}