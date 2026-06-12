import { memo } from 'react';

interface BoxTextFallbackProps {
    label: string;
}

const BoxTextFallbackBase = ({ label }: BoxTextFallbackProps) => (
    <div className="rounded-lg border border-dashed p-4 text-center">
        <p className="text-[13px] text-muted-foreground">{label}</p>
    </div>
);

export const BoxTextFallback = memo(
    BoxTextFallbackBase
) as typeof BoxTextFallbackBase;
