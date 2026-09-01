"use client";

export default function Filters({ active, setActive, departments }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 px-5 py-6">
      {["All Team", ...departments].map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`rounded-md border px-3 py-1.5 text-[10px] font-medium transition ${
            active === item
              ? "border-[var(--primary)] bg-[var(--primary)] text-white"
              : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)]"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}