import type { ReactNode } from 'react';

interface PageWrapperProps {
    children: ReactNode;
    description?: string;
    insideSheetContent?: ReactNode;
    title: string;
}

export const PageWrapper = ({
    children,
    description,
    insideSheetContent,
    title,
}: PageWrapperProps) => (
    <div className="flex flex-1 overflow-hidden">
        <section className="flex-1 overflow-y-auto px-8 py-6">
            <div className="flex flex-col gap-y-6">
                <div className="flex flex-col gap-y-1">
                    <h1 className="text-lg font-semibold">{title}</h1>
                    {description && (
                        <p className="text-[15px] text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>
                {children}
            </div>
        </section>
        {insideSheetContent}
    </div>
);
