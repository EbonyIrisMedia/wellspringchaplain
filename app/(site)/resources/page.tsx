import Container from "@/components/Container";

export default function ResourcesPage() {
  return (
    <Container>
      <div className="py-12">
        <h1 className="text-3xl font-bold">Resources</h1>
        <ul className="mt-6 list-disc pl-6 space-y-2">
          <li><a className="underline" href="/events">Workshops & Events</a></li>
          <li><a className="underline" href="mailto:jen@wellspringchaplain.com">1:1 Consultation</a></li>
          <li><span>Guides and handouts (coming soon)</span></li>
        </ul>
      </div>
    </Container>
  );
}
