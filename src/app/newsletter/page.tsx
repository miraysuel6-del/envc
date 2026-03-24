import type { Metadata } from "next";
import { newsletters } from "@/content/newsletters";
import NewsletterCard from "@/components/newsletter/NewsletterCard";
import SubscriptionForm from "@/components/newsletter/SubscriptionForm";

export const metadata: Metadata = {
  title: "Bülten — ENVC Weekly",
  description:
    "ENVC Weekly: Türkiye startup ekosistemi, yatırım trendleri, yapay zeka ve girişimcilik dünyasından haftalık seçmeler.",
};

export default function NewsletterArchive() {
  return (
    <section className="bg-muted min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-text-secondary mb-4">
            Haftalık Bülten
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            ENVC Weekly
          </h1>
          <p className="text-base text-text-secondary leading-relaxed mb-8">
            Startup ekosistemi, yatırım turları, teknoloji trendleri ve topluluk
            haberleri — her hafta özenle derleniyor.
          </p>
          <SubscriptionForm />
        </div>

        {/* Archive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsletters.map((issue) => (
            <NewsletterCard
              key={issue.slug}
              slug={issue.slug}
              title={issue.title}
              summary={issue.summary}
              date={issue.date}
              category={issue.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
