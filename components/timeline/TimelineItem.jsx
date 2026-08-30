import { MapPin } from "lucide-react";

export default function TimelineItem({ event, side = "left" }) {
  return (
    <div
      className={`relative flex w-full ${
        side === "left" ? "justify-start" : "justify-end"
      }`}
    >
      {/* Event Card */}
      <div
        className={`relative w-full md:w-[calc(50%-50px)] ${
          side === "left" ? "md:mr-auto" : "md:ml-auto"
        }`}
      >
        {/* Connector */}
        <div
          className={`absolute top-8 hidden h-px w-12 bg-[var(--primary)]/40 md:block ${
            side === "left" ? "-right-12" : "-left-12"
          }`}
        />

        {/* Arrow */}
        <div
          className={`absolute top-[25px] hidden h-3 w-3 rotate-45 border-r border-t border-[var(--primary)]/60 md:block ${
            side === "left" ? "-right-[5px]" : "-left-[5px] -rotate-[135deg]"
          }`}
        />

        <div className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.2)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60 hover:shadow-[0_10px_40px_rgba(232,80,2,0.12)] md:p-7">
          <h3 className="text-xl font-bold uppercase tracking-wide text-[var(--foreground)] md:text-2xl">
            {event.title}
          </h3>

          <p className="mt-3 text-base font-semibold text-[var(--primary)]">
            {event.time}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <MapPin size={17} />
            <span>{event.venue}</span>
          </div>
        </div>
      </div>
    </div>
  );
}