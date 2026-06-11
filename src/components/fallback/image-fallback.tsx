import { memo } from 'react';

import { getIllustration, type Illustration } from '@/lib/assets';
import { cn } from '@/lib/utils';

interface FallbackImageProps {
    containerClassName?: string;
    illustration?: Illustration;
    imageClassName?: string;
    label?: string;
}

function ImageFallbackBase({
    containerClassName,
    illustration = 'empty',
    imageClassName,
    label,
}: FallbackImageProps) {
    return (
        <div
            className={cn(
                'mb-6 flex flex-col items-center justify-center gap-4 text-sm',
                containerClassName
            )}
        >
            {illustration ? (
                <img
                    alt="No Data"
                    className={cn(
                        'mx-auto h-48 w-48 object-contain',
                        imageClassName
                    )}
                    fetchPriority="high"
                    height={192}
                    src={getIllustration(illustration)}
                    width={192}
                />
            ) : null}
            {label ? (
                <p className="text-center text-muted-foreground">
                    <span>{label}</span>
                </p>
            ) : null}
        </div>
    );
}

export const ImageFallback = memo(
    ImageFallbackBase
) as typeof ImageFallbackBase;
