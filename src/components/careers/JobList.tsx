import JobCard from './JobCard';
import { JobPostingPreview } from '../../../sanity/lib/queries';

export default function JobList({ jobs }: { jobs: JobPostingPreview[] }) {
  if (!jobs || jobs.length === 0) {
    return (
      <div className="py-16 px-6 text-center border border-black bg-white w-full max-w-2xl mx-auto">
        <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">Şu anda aktif ilan bulunmuyor</h3>
        <p className="text-base font-medium opacity-80 mb-6">
          Bültenimize abone olarak yeni fırsatlardan anında haberdar olabilirsiniz.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}
