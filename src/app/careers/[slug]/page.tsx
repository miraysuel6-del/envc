import { notFound } from 'next/navigation';
import { fetchJobBySlug } from '../../../lib/sanity';
import Link from 'next/link';

export const revalidate = 60;

export default async function JobDetailsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const job = await fetchJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/careers" className="inline-block mb-12 text-sm hover:underline">
        ← Back to Jobs
      </Link>

      <div className="mb-4">
        {job.category && (
          <span className="inline-block border border-black px-3 py-1 text-xs uppercase mr-2 mb-4">
            {job.category}
          </span>
        )}
        {job.type && (
          <span className="inline-block border border-black px-3 py-1 text-xs uppercase mr-2 mb-4">
            {job.type}
          </span>
        )}
      </div>

      <h1 className="text-4xl font-bold mb-2">{job.title}</h1>
      <p className="text-xl text-gray-600 mb-6">{job.company}</p>

      {job.description && (
        <div className="prose prose-black max-w-none mb-8 whitespace-pre-wrap">
          {job.description}
        </div>
      )}

      {job.requirements && job.requirements.length > 0 && (
        <ul className="list-disc list-outside pl-5 mb-8 marker:text-black">
          {job.requirements.map((req: string, i: number) => (
            <li key={i} className="mb-2 leading-relaxed">{req}</li>
          ))}
        </ul>
      )}

      {job.applicationLink && (
        <a 
          href={job.applicationLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-8 py-3 hover:bg-white hover:text-black border border-black transition"
        >
          Apply Now
        </a>
      )}
    </div>
  );
}
