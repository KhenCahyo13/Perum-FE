import { IconLoader2 } from '@tabler/icons-react';
import { memo } from 'react';

interface LoaderProps {
    label: string;
}

function LoaderFallbackBase({ label }: LoaderProps) {
    return (
        <div className="flex h-24 flex-col items-center justify-center gap-2">
            <IconLoader2 className="animate-spin text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{label}</span>
        </div>
    );
}

export const LoaderFallback = memo(
    LoaderFallbackBase
) as typeof LoaderFallbackBase;
