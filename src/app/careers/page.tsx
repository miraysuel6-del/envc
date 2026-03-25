import { fetchActiveJobs } from '../../lib/sanity';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every minute

export default async function CareersPage() {
  const jobs = await fetchActiveJobs();

  return (
    <div className="container mx-auto px-4 py-24 pt-32 min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto mb-16 text-center border-b border-black pb-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6">
          Kariyer & Staj Fırsatları
        </h1>
        <p className="text-lg md:text-xl font-medium opacity-80 max-w-2xl mx-auto">
          Boğaziçi ENVC ekosistemindeki en güncel VC ve Startup iş ilanları.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        {jobs && jobs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job: any) => {
              const formattedDeadline = job.deadline 
                ? new Date(job.deadline).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }) 
                : null;

              return (
                <Link 
                  href={`/careers/${job.slug?.current || '#'}`}
                  key={job._id} 
                  className="group block border border-black bg-white p-6 transition-colors duration-300 hover:bg-black hover:text-white"
                >
                  <div className="flex flex-col h-full justify-between gap-6">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="border border-black group-hover:border-white px-2 py-1 text-[10px] uppercase font-bold tracking-wider">
                          {job.category}
                        </span>
                        <span className="border border-black group-hover:border-white px-2 py-1 text-[10px] uppercase font-bold tracking-wider">
                          {job.type}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 leading-tight">{job.title}</h3>
                      <p className="text-sm font-medium opacity-80 group-hover:opacity-100">{job.company}</p>
                    </div>
                    
                    {formattedDeadline && (
                      <div className="text-xs pt-4 border-t border-black group-hover:border-white transition-colors">
                        Son Başvuru: <strong>{formattedDeadline}</strong>
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="py-16 px-6 text-center border border-black bg-white w-full max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Şu anda aktif ilan bulunmuyor</h3>
            <p className="text-base font-medium opacity-80 mb-6">
              Yeni yetenekler ve fırsatlar için bizi takip etmeye devam edin.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
