import { IconRefresh } from '@tabler/icons-react';
import { memo } from 'react';

import { getIllustration, type Illustration } from '@/lib/assets';
import { cn } from '@/lib/utils';

import { Button } from '../ui/button';

interface FallbackActionProps {
    actionLabel?: string;
    illustration?: Illustration;
    imageClassName?: string;
    onAction: () => void;
}

function ActionFallbackBase({
    actionLabel = 'Coba Lagi',
    illustration = 'error',
    imageClassName,
    onAction,
}: FallbackActionProps) {
    return (
        <div className="flex flex-col items-center gap-2 text-sm">
            {illustration && (
                <img
                    alt="No Data"
                    className={cn(
                        'mx-auto h-72 w-72 object-contain',
                        imageClassName
                    )}
                    src={getIllustration(illustration)}
                />
            )}
            <Button className="w-fit" onClick={onAction} size="sm">
                <IconRefresh />
                {actionLabel}
            </Button>
        </div>
    );
}

export const ActionFallback = memo(
    ActionFallbackBase
) as typeof ActionFallbackBase;
