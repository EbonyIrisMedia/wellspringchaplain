import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/events";

export default function EventCard({ event }: { event: Event }) {
  return (
    <article className="border rounded-2xl overflow-hidden bg-white">
      {event.image && (
        <div className="relative h-48">
          <Image src={event.image} alt={event.title} fill className="object-cover" />
        </div>
      )}
      <div className="p-5">
        <h3 className="text-xl font-semibold">{event.title}</h3>
        {event.date && <div className="text-sm text-slate-500 mt-1">When: {event.date}</div>}
        {event.location && <div className="text-sm text-slate-500">Where: {event.location}</div>}
        <p className="mt-3">{event.summary}</p>
        {event.ctaHref && (
          <Link href={event.ctaHref} className="inline-block mt-4 bg-brand text-white px-4 py-2 rounded-lg">
            {event.ctaLabel ?? "Learn More"}
          </Link>
        )}
      </div>
    </article>
  );
}
