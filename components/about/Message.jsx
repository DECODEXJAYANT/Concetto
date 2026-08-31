import Image from "next/image";

export default function Message({
  name,
  designation,
  message,
  image,
}) {
  return (
    <div className="relative rounded-2xl border border-[var(--border)] bg-[var(--surface)]/70 px-6 pb-8 pt-16 shadow-[0_20px_70px_rgba(0,0,0,0.25)] backdrop-blur-md md:px-12">

      <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-[var(--background)] bg-[var(--surface)] shadow-xl">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
          Message
        </p>

        <h2 className="mt-2 text-2xl font-bold text-[var(--foreground)] md:text-3xl">
          {name}
        </h2>

        <p className="mt-1 text-sm text-[var(--text-muted)]">
          {designation}
        </p>
      </div>

      <div className="mx-auto mt-7 max-w-3xl space-y-5 text-sm leading-7 text-[var(--text-muted)]">
        {message.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

    </div>
  );
}