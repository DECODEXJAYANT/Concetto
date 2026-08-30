import EventCard from "./EventCard";

export default function EventGrid({ events }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => (
        <EventCard
          key={event.id}
          title={event.title}
          category={event.category}
          description={event.description}
          image={event.image}
          mode={event.mode}
          href={event.href}
        />
      ))}
    </div>
  );
}