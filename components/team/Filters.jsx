"use client";

export default function Filters({ active, setActive, departments }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 px-5 py-6">
      {["All Team", ...departments].map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`min-w-24 rounded-md border px-3 py-1.5 text-[10px] font-medium transition  ${
            active === item
              ? "border-(--primary) bg-(--primary) text-white"
              : "border-(--border) text-(--muted) hover:border-(--primary)"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}