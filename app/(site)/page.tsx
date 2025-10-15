import Image from "next/image";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";

export default function HomePage() {
  return (
    <div>
      <section className="bg-slate-50 border-b">
        <Container>
          <div className="py-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Jen Saries</h1>
              <p className="mt-2 text-slate-600">Chaplain | Gottman Method | Ministry</p>
              <p className="mt-6 leading-7">
                Wellspring Chaplaincy supports couples, churches, first responders, corporations, and non-profits
                through holistic care that blends counseling psychology and Christian ministry. We focus on relationship
                growth through in person and virtual workshops and also provide crisis debriefings, and supportive
                conversations which foster healing and renewal. Jennifer attended Moody Theological Seminary and is
                married with two boys. She has served as a police chaplain for four years.
              </p>
              <div className="mt-6">
                <a className="inline-block bg-brand text-white px-5 py-3 rounded-lg" href="/events">
                  Upcoming Events
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/jen-saries-2.webp"
                alt="Jen Saries"
                fill
                className="object-cover rounded-xl shadow"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="py-12 container-prose">
            <h2>Areas of Expertise</h2>
            <p className="uppercase tracking-wide text-sm text-slate-500">
              Chaplaincy | Marriage Ministry | Gottman Method Counsel | Crisis Intervention
            </p>
            <p>
              Wellspring Chaplaincy provides holistic care by integrating counseling psychology and Christian ministry.
              Specializing in the Gottman Method for relationship counseling and conducting crisis debriefings, Jen
              offers compassionate, tailored support to foster healing and growth inspired by 2 Corinthians 1:3-4.
            </p>

            <h2>Speaking Engagements</h2>
            <p>
              I'd love to speak at your school or church about the need for chaplains and the career opportunities for
              those who feel called to this ministry—across churches, hospitals, politics, the military, and corporate
              settings. I also present Gottman's <em>Seven Principles for Making Marriage Work</em>, equipping groups to
              nurture admiration, communicate through conflict, problem-solve, and strengthen happy marriages.
            </p>

            <h2>Certifications</h2>
            <ul className="list-disc pl-6">
              <li>Pastoral Crisis Intervention — International Conference of Police Chaplains</li>
              <li>Community Emergency Response Team — FEMA</li>
              <li>Critical Incident Stress Management — International Critical Incident Stress Foundation</li>
              <li>Seven Principles — Gottman Trained Leader</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 border-t">
        <Container>
          <div className="py-12">
            <h2 className="text-2xl font-semibold">Schedule a Consultation</h2>
            <ContactForm />
          </div>
        </Container>
      </section>
    </div>
  );
}
