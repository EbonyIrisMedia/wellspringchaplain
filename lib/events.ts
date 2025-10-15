export type Event = {
  slug: string;
  title: string;
  summary: string;
  date?: string;
  location?: string;
  image?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export const events: Event[] = [
  {
    slug: "aapd-marriage-mini-conference",
    title: "AAPD Marriage Mini-Conference",
    summary:
      "Strengthen relationships and build lasting connections. Open to AAPD staff, spouses, and singles. Practical tools for healthy relationships. Light refreshments provided.",
    date: "TBD",
    location: "Ann Arbor (details in RSVP)",
    image: "/aapd-mini-conference-2-801x920.webp",
    ctaLabel: "RSVP & Learn More",
    ctaHref: "mailto:jen@wellspringchaplain.com"
  }
];
