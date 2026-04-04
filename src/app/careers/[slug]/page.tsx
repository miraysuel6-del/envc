import { fetchJobBySlug, fetchAllJobSlugs } from '../../../lib/sanity'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'

export const revalidate = 60

export async function generateStaticParams() {
  const jobs = await fetchAllJobSlugs()
  return jobs.map((job: { slug: string }) => ({
    slug: job.slug,
  }))
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await fetchJobBySlug(slug)

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white text-black py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <Link href="/careers" className="inline-block mb-8 text-sm hover:underline">
          ← Tüm İlanlara Dön
        </Link>

        <div className="border-b border-black pb-8 mb-8">
          <div className="flex gap-2 mb-4">
            <span className="border border-black px-3 py-1 text-xs uppercase font-bold">
              {job.category}
            </span>
            <span className="border border-black px-3 py-1 text-xs uppercase font-bold">
              {job.type}
            </span>
          </div>
          <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
          <p className="text-xl text-gray-600">{job.company}</p>
        </div>

        <div className="mb-8">
          <div className="job-description text-gray-700 leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                h2: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
                h3: ({ children }) => <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>,
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc list-inside space-y-1 mb-4 ml-2">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 mb-4 ml-2">{children}</ol>,
                li: ({ children }) => <li className="text-gray-700">{children}</li>,
                strong: ({ children }) => <strong className="font-bold text-black">{children}</strong>,
                a: ({ href, children }) => (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">
                    {children}
                  </a>
                ),
              }}
            >
              {job.description}
            </ReactMarkdown>
          </div>
        </div>

        {job.requirements && job.requirements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4 uppercase">Aranan Nitelikler</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {job.requirements.map((req: string, i: number) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
          </div>
        )}

        {job.applicationLink && (
          <a
            href={job.applicationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-8 py-4 font-bold hover:bg-white hover:text-black border border-black transition-colors"
          >
            Başvuru Yap →
          </a>
        )}
      </div>
    </div>
  )
}
