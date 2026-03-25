import { notFound } from 'next/navigation';
import { fetchJobBySlug } from '../../../lib/sanity';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every minute

export default async function JobDetailsPage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const job = await fetchJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const formattedDeadline = job.deadline 
    ? new Date(job.deadline).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) 
    : null;

  return (
    <div className="container mx-auto px-4 py-24 pt-32 min-h-[80vh] bg-white text-black">
      <Link href="/careers" className="inline-block mb-12 text-sm font-bold uppercase tracking-wider border-b-2 border-black hover:opacity-50 transition-opacity">
        ← Tüm İlanlara Dön
      </Link>

      <div className="max-w-3xl mx-auto border border-black p-8 md:p-12">
        <div className="flex flex-wrap gap-3 mb-6">
          <span className="border border-black px-3 py-1 text-xs uppercase font-bold tracking-wider">
            {job.category}
          </span>
          <span className="border border-black px-3 py-1 text-xs uppercase font-bold tracking-wider">
            {job.type}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black mb-4 uppercase tracking-tight">{job.title}</h1>
        <p className="text-xl font-medium mb-10 opacity-90">{job.company}</p>

        <div className="prose prose-lg max-w-none text-black mb-12">
          <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-black pb-2">İlan Detayları</h2>
          <p className="whitespace-pre-wrap leading-relaxed opacity-80">{job.description}</p>
        </div>

        {job.requirements && job.requirements.length > 0 && (
          <div className="mb-12">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4 border-b border-black pb-2">Aranan Nitelikler</h2>
            <ul className="list-disc pl-5 space-y-2 opacity-80">
              {job.requirements.map((req: string, i: number) => (
                <li key={i} className="text-lg leading-relaxed">{req}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-black">
          <div>
            {formattedDeadline && (
              <p className="text-sm font-medium">Son Başvuru: <span className="font-bold">{formattedDeadline}</span></p>
            )}
          </div>
          
          {job.applicationLink ? (
            <a 
              href={job.applicationLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-white hover:text-black border border-black transition-colors"
            >
              Başvuru Yap
            </a>
          ) : (
            <span className="inline-block bg-white text-black opacity-50 px-8 py-4 font-bold uppercase tracking-wider border border-black cursor-not-allowed">
              Başvuru Kapalı
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
