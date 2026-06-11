import type { ReactNode } from 'react';

interface InsideSheetWrapperProps {
    children: ReactNode;
}

export const InsideSheetWrapper = ({ children }: InsideSheetWrapperProps) => (
    <div className="h-screen overflow-y-scroll border-l border-border bg-white px-4 py-4">
        {children}
    </div>
);
