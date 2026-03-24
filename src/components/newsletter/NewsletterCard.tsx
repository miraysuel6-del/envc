import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface NewsletterCardProps {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
}

export default function NewsletterCard({
  slug,
  title,
  summary,
  date,
  category,
}: NewsletterCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <Link
      href={`/newsletter/${slug}`}
      className="group block border border-black/15 p-6 lg:p-8 transition-all duration-300 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary border border-black/20 px-3 py-1">
          {category}
        </span>
        <span className="text-xs text-text-secondary">{formattedDate}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:underline underline-offset-4">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary mb-4">
        {summary}
      </p>
      <span className="inline-flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all">
        Devamını Oku <ArrowRight size={12} />
      </span>
    </Link>
  );
}
