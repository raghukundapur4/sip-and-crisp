import type { ReactNode } from 'react';
import FadeIn from './FadeIn';

interface SectionShellProps {
  number: string;
  children: ReactNode;
  className?: string;
  alt?: boolean;
}

export default function SectionShell({ number, children, className = '', alt = false }: SectionShellProps) {
  return (
    <section className={`relative px-6 py-24 md:py-32 ${alt ? 'bg-paper' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl">
        <span className="section-number pointer-events-none absolute -left-2 top-8 select-none md:left-0" aria-hidden="true">
          {number}
        </span>
        <FadeIn>{children}</FadeIn>
      </div>
    </section>
  );
}
