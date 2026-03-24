import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  dark?: boolean;
  muted?: boolean;
  className?: string;
}

export default function Section({
  children,
  id,
  dark = false,
  muted = false,
  className = "",
}: SectionProps) {
  const bg = dark ? "bg-black text-white" : muted ? "bg-muted text-black" : "bg-white text-black";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        {children}
      </div>
    </section>
  );
}
