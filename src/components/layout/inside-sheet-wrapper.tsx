import { IconX } from '@tabler/icons-react';
import type { ReactNode } from 'react';

import { Button } from '../ui/button';

interface InsideSheetWrapperProps {
    children: ReactNode;
    footer?: ReactNode;
    onClose?: () => void;
    subtitle: string;
    title: string;
}

export const InsideSheetWrapper = ({
    children,
    footer,
    onClose,
    subtitle,
    title,
}: InsideSheetWrapperProps) => (
    <aside className="flex w-lg shrink-0 flex-col border-l border-border bg-white">
        <div className="flex shrink-0 items-start justify-between gap-x-3 px-6 py-6">
            <div className="flex flex-col gap-y-1">
                <h2 className="text-base font-semibold">{title}</h2>
                <p className="text-sm text-muted-foreground">{subtitle}</p>
            </div>
            {onClose && (
                <Button
                    className="shrink-0"
                    onClick={onClose}
                    size="icon"
                    variant="ghost"
                >
                    <IconX className="size-4" />
                </Button>
            )}
        </div>
        <div className="flex-1 overflow-y-auto px-6 pb-6">{children}</div>
        {footer && (
            <div className="shrink-0 border-t border-border px-6 py-4">
                {footer}
            </div>
        )}
    </aside>
);
