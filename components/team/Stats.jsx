export default function Stats({ team }) {
  const total = team.length;

  const departments = new Set(
    team.map((member) => member.department)
  ).size;

  const faculty = 2;

  const students = total - faculty;

  const stats = [
    [total, "Team Members"],
    [departments, "Departments"],
    [faculty, "Faculty Members"],
    [students, "Student Members"],
  ];

  return (
    <section className="border-y border-[var(--border)] bg-[var(--surface)]/30 px-5 py-8">
      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map(([number, label]) => (
          <div key={label} className="text-center">
            <p className="text-2xl font-bold text-[var(--primary)]">
              {number}
            </p>
            <p className="mt-1 text-xs text-[var(--muted)]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}