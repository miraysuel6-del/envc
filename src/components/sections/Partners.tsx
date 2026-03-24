import Section from "@/components/Section";

const partners = [
  "Sequoia Capital",
  "Boğaziçi University",
  "500 Global",
  "Earlybird VC",
  "Endeavor Turkey",
  "Koç Holdings",
  "Sabancı Ventures",
  "Startups.watch",
  "Techstars",
  "Y Combinator",
];

export default function Partners() {
  return (
    <Section id="partners" muted>
      <div className="text-center mb-16">
        <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-secondary mb-4">
          Network &amp; Trust
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Our ecosystem partners.
        </h2>
        <p className="mt-4 text-sm text-text-secondary max-w-lg mx-auto">
          We collaborate with leading venture firms, universities, and
          accelerators to expand opportunity for our community.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-black/10 py-8">
        {/* Gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap">
          {[...partners, ...partners].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="inline-flex items-center justify-center mx-8 sm:mx-12"
            >
              <span className="text-lg sm:text-xl font-semibold text-black/20 tracking-tight whitespace-nowrap select-none">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
