import type { ReactNode } from 'react';
import { memo } from 'react';

import { cn } from '@/lib/utils';

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
}

const SectionWrapperBase = ({ children, className }: SectionWrapperProps) => (
    <section
        className={cn(
            'h-fit overflow-hidden rounded-xl border px-6 py-5',
            className
        )}
    >
        {children}
    </section>
);

export const SectionWrapper = memo(
    SectionWrapperBase
) as typeof SectionWrapperBase;
