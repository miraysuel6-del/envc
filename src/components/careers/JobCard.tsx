import Link from 'next/link';
import { JobPostingPreview } from '../../../sanity/lib/queries';

export default function JobCard({ job }: { job: JobPostingPreview }) {
  // Format dates: e.g. "24 Mar 2026"
  const formattedDeadline = job.deadline 
    ? new Date(job.deadline).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short', year: 'numeric' }) 
    : null;
  
  return (
    <Link 
      href={`/careers/${job.slug.current}`}
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
}
