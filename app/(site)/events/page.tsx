import Container from "@/components/Container";
import { events } from "@/lib/events";
import EventCard from "@/components/EventCard";

export default function EventsPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold mb-6">Events</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((e) => <EventCard key={e.slug} event={e} />)}
        </div>
      </div>
    </Container>
  );
}
