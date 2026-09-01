import Card from "./Card";

export default function Grid({ members }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <Card key={member.name} member={member} />
      ))}
    </div>
  );
}