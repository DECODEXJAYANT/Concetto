import Card from "./Card";

export default function Grid({ members }) {
  const teams = [
    "convener",
    "secretariat",
    "coordinators",
    "co-coordinators",
    "pr",
    "event",
    "sponsorship",
  ];

  return (
    <div className="space-y-20">
      {teams.map((team) => {
        const teamMembers = members.filter(
          (member) => member.team === team
        );

        if (teamMembers.length === 0) return null;

        const count = teamMembers.length;

        let gridClass =
          "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4";

        if (count === 1) {
          gridClass =
            "grid grid-cols-1 gap-6 max-w-sm mx-auto";
        } else if (count === 2) {
          gridClass =
            "grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-2xl mx-auto";
        } else if (count === 3) {
          gridClass =
            "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto";
        }

        return (
          <section key={team}>
            {/* Team heading */}
            <div className="mb-8 text-center">
              <h2 className="text-2xl font-bold uppercase tracking-tight text-[var(--foreground)] md:text-3xl">
                {team} Team
              </h2>

              <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[var(--primary)]" />
            </div>

            {/* Team members */}
            <div className={gridClass}>
              {teamMembers.map((member) => (
                <Card key={member.name} member={member} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}