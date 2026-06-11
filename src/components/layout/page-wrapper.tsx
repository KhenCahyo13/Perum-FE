import type { ReactNode } from 'react';

interface PageWrapperProps {
    children: ReactNode;
    title: string;
    description: string;
    insideSheetContent?: ReactNode;
}

export const PageWrapper = ({
    children,
    title,
    description,
    insideSheetContent,
}: PageWrapperProps) => (
    <div className="grid md:grid-cols-4 md:gap-8">
        <section className="px-8 py-4 md:col-span-3">
            <div className="flex flex-col gap-y-8">
                <div className="flex flex-col gap-y-0.5">
                    <h1 className="text-lg font-semibold">{title}</h1>
                    <p className="text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
                {children}
            </div>
        </section>
        {insideSheetContent}
    </div>
);
