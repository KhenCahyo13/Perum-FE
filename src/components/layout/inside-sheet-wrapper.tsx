import type { ReactNode } from 'react';

interface InsideSheetWrapperProps {
    children: ReactNode;
    subtitle: string;
    title: string;
}

export const InsideSheetWrapper = ({
    children,
    subtitle,
    title,
}: InsideSheetWrapperProps) => (
    <aside className="w-lg shrink-0 overflow-y-auto border-l border-border bg-white px-6 py-6">
        <div className="mb-6 flex flex-col gap-y-1">
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>
        {children}
    </aside>
);
