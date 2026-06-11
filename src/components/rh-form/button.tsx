import { IconLoader2 } from '@tabler/icons-react';
import { type ComponentProps, memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type RhSubmitButtonProps = {
    isLoading?: boolean;
} & Omit<ComponentProps<typeof Button>, 'type'>;

function RhSubmitButtonBase({
    children,
    className,
    disabled,
    isLoading,
    ...props
}: RhSubmitButtonProps) {
    const form = useFormContext();
    const isSubmitting = isLoading ?? form?.formState.isSubmitting;

    return (
        <Button
            {...props}
            className={cn('rounded-full', className)}
            disabled={disabled ?? isSubmitting}
            type="submit"
        >
            {isSubmitting && <IconLoader2 className="animate-spin" />}
            {children}
        </Button>
    );
}

export const RhSubmitButton = memo(
    RhSubmitButtonBase
) as typeof RhSubmitButtonBase;
