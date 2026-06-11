import { IconFilter } from '@tabler/icons-react';
import { memo, type ReactNode } from 'react';

import { Button } from '../ui/button';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '../ui/dialog';

interface DataTableFilterDialogProps {
    activeCount?: number;
    children: ReactNode;
    onApply: () => void;
    onOpenChange: (open: boolean) => void;
    onReset: () => void;
    open: boolean;
    title?: string;
}

function DataTableFilterDialogBase({
    activeCount = 0,
    children,
    onApply,
    onOpenChange,
    onReset,
    open,
    title = 'Filter',
}: DataTableFilterDialogProps) {
    return (
        <Dialog onOpenChange={onOpenChange} open={open}>
            <Button
                className="relative bg-muted"
                onClick={() => onOpenChange(true)}
                size="icon"
                variant="outline"
            >
                <IconFilter />
                {activeCount > 0 && (
                    <span className="text-destructive-foreground absolute -top-0.5 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-white">
                        {activeCount}
                    </span>
                )}
            </Button>
            <DialogContent className="p-0">
                <DialogHeader className="border-b px-4 py-5">
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="mb-4 flex flex-col gap-y-4 px-4">
                    {children}
                </div>
                <DialogFooter className="border-t px-4 py-3">
                    <Button
                        className="rounded-full"
                        onClick={onReset}
                        size="sm"
                        variant="outline"
                    >
                        Reset
                    </Button>
                    <Button
                        className="rounded-full"
                        onClick={onApply}
                        size="sm"
                    >
                        Terapkan
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export const DataTableFilterDialog = memo(
    DataTableFilterDialogBase
) as typeof DataTableFilterDialogBase;
