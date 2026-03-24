interface CardProps {
  title: string;
  description: string;
  tag?: string;
  className?: string;
}

export default function Card({
  title,
  description,
  tag,
  className = "",
}: CardProps) {
  return (
    <div
      className={`group border border-black/15 p-6 lg:p-8 transition-all duration-300 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 ${className}`}
    >
      {tag && (
        <span className="inline-block mb-4 text-xs font-semibold tracking-widest uppercase text-text-secondary border border-black/20 px-3 py-1">
          {tag}
        </span>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  );
}
