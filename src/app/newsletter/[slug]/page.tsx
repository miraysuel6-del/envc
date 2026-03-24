import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { newsletters } from "@/content/newsletters";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return newsletters.map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const issue = newsletters.find((n) => n.slug === slug);
  if (!issue) return { title: "Yazı Bulunamadı" };

  return {
    title: `${issue.title} — ENVC Weekly`,
    description: issue.summary,
  };
}

export default async function NewsletterArticle({ params }: PageProps) {
  const { slug } = await params;
  const issue = newsletters.find((n) => n.slug === slug);

  if (!issue) {
    notFound();
  }

  const formattedDate = new Date(issue.date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <article className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-[700px] px-6">
        {/* Back link */}
        <Link
          href="/newsletter"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-black transition-colors mb-12"
        >
          <ArrowLeft size={14} />
          Tüm Yazılar
        </Link>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary border border-black/20 px-3 py-1">
            {issue.category}
          </span>
          <span className="text-xs text-text-secondary">{formattedDate}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15] mb-4">
          {issue.title}
        </h1>
        <p className="text-sm text-text-secondary mb-12">
          Yazar: {issue.author}
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-black/20 mb-12" />

        {/* Content */}
        <div
          className="prose-envc"
          dangerouslySetInnerHTML={{ __html: issue.content }}
        />

        {/* Bottom divider & back */}
        <div className="mt-16 pt-8 border-t border-black/10">
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
          >
            <ArrowLeft size={14} />
            Tüm Yazılara Dön
          </Link>
        </div>
      </div>
    </article>
  );
}
