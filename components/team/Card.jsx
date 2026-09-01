import Image from "next/image";

export default function Card({ member }) {
  return (
    <article className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/60">
      <div className="relative aspect-[4/3]">
        <Image
          src={member.image || "/team/default.jpg"}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-sm font-bold text-[var(--foreground)]">
          {member.name}
        </h3>

        <p className="mt-1 text-[11px] font-medium text-[var(--primary)]">
          {member.role}
        </p>

        <p className="mt-1 text-[10px] text-[var(--muted)]">
          {member.department}
        </p>

        {member.email && (
          <p className="mt-3 break-all text-[10px] leading-4 text-[var(--muted)]">
            {member.email}
          </p>
        )}
      </div>
    </article>
  );
}