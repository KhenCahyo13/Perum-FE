import { CheckIcon, ChevronDownIcon, SearchIcon } from 'lucide-react';
import { Popover } from 'radix-ui';
import { useMemo, useState } from 'react';

import { cn } from '@/lib/utils';
import type { SelectOption } from '@/types/components';

interface SearchableSelectProps {
    allLabel?: string;
    contentClassName?: string;
    listClassName?: string;
    onValueChange: (value: string | undefined) => void;
    options: SelectOption[];
    placeholder?: string;
    value: string | undefined;
}

const ALL_VALUE = '__all__';

export function SearchableSelect({
    allLabel = 'Semua',
    contentClassName,
    listClassName,
    onValueChange,
    options,
    placeholder = 'Pilih...',
    value,
}: SearchableSelectProps) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');

    const filtered = useMemo(() => {
        const q = search.trim().toLowerCase();
        if (!q) return options;
        return options.filter((opt) => opt.label.toLowerCase().includes(q));
    }, [options, search]);

    const selectedLabel = useMemo(
        () => options.find((opt) => opt.value === value)?.label ?? placeholder,
        [options, value, placeholder]
    );

    function handleSelect(val: string) {
        onValueChange(val === ALL_VALUE ? undefined : val);
        setOpen(false);
        setSearch('');
    }

    function handleOpenChange(next: boolean) {
        setOpen(next);
        if (!next) setSearch('');
    }

    const displayValue = value == null ? allLabel : selectedLabel;

    return (
        <Popover.Root onOpenChange={handleOpenChange} open={open}>
            <Popover.Trigger asChild>
                <button
                    aria-expanded={open}
                    className={cn(
                        'flex h-9 w-full items-center justify-between gap-1.5 rounded-full border border-input bg-transparent px-3 py-2 text-sm shadow-xs transition-[color,box-shadow] outline-none',
                        'focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        value == null && 'text-muted-foreground'
                    )}
                    type="button"
                >
                    <span className="truncate">{displayValue}</span>
                    <ChevronDownIcon className="size-4 shrink-0 text-muted-foreground" />
                </button>
            </Popover.Trigger>

            <Popover.Portal>
                <Popover.Content
                    align="start"
                    className={cn(
                        'relative z-50 flex max-h-[min(20rem,var(--radix-popover-content-available-height))] min-w-(--radix-popover-trigger-width) flex-col overflow-hidden rounded-md bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10',
                        'duration-100 data-[state=closed]:animate-out data-[state=open]:animate-in',
                        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
                        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
                        'data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2',
                        contentClassName
                    )}
                    sideOffset={4}
                >
                    <div className="flex shrink-0 items-center gap-2 border-b px-3 py-2">
                        <SearchIcon className="size-4 shrink-0 text-muted-foreground" />
                        <input
                            autoFocus
                            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cari..."
                            value={search}
                        />
                    </div>

                    <div
                        className={cn(
                            'min-h-0 flex-1 overflow-y-auto overscroll-contain p-1',
                            listClassName
                        )}
                        onWheel={(event) => event.stopPropagation()}
                    >
                        <button
                            className={cn(
                                'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none',
                                'hover:bg-accent hover:text-accent-foreground',
                                value == null &&
                                    'bg-accent text-accent-foreground'
                            )}
                            onClick={() => handleSelect(ALL_VALUE)}
                            type="button"
                        >
                            {value == null && (
                                <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
                                    <CheckIcon className="size-4" />
                                </span>
                            )}
                            {allLabel}
                        </button>

                        {filtered.length === 0 ? (
                            <p className="py-4 text-center text-sm text-muted-foreground">
                                Tidak ada hasil.
                            </p>
                        ) : (
                            filtered.map((opt) => {
                                const isSelected = opt.value === value;
                                return (
                                    <button
                                        className={cn(
                                            'relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none select-none',
                                            'hover:bg-accent hover:text-accent-foreground',
                                            isSelected &&
                                                'bg-accent text-accent-foreground'
                                        )}
                                        key={opt.value}
                                        onClick={() => handleSelect(opt.value)}
                                        type="button"
                                    >
                                        {isSelected && (
                                            <span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center">
                                                <CheckIcon className="size-4" />
                                            </span>
                                        )}
                                        {opt.label}
                                    </button>
                                );
                            })
                        )}
                    </div>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
