import { IconPlus, IconSearch } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { memo, type ReactNode, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { cn } from '@/lib/utils';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';
import { useDataTableContext } from './context';

interface DataTableHeaderProps {
    addAsLink?: string;
    customSearch?: string;
    customSetSearch?: (value: string) => void;
    filtersContent?: ReactNode;
    onAddClick?: () => void;
    searchPlaceholder?: string;
    subtitle: string;
    title: string;
}

function DataTableHeaderBase({
    addAsLink,
    customSearch,
    customSetSearch,
    filtersContent,
    onAddClick,
    searchPlaceholder = 'Cari data...',
    subtitle,
    title,
}: DataTableHeaderProps) {
    const limit = useDataTableContext((s) => s.limit);
    const search = useDataTableContext((s) => s.search);
    const setLimit = useDataTableContext((s) => s.setLimit);
    const setSearch = useDataTableContext((s) => s.setSearch);

    const [inputValue, setInputValue] = useState(customSearch ?? search);
    const [debouncedValue] = useDebounce(inputValue, 300);

    useEffect(() => {
        const setter = customSetSearch ?? setSearch;
        setter(debouncedValue);
    }, [debouncedValue, customSetSearch, setSearch]);

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-y-1.5">
                    <h2 className="text-base font-medium">{title}</h2>
                    <p className="text-sm text-muted-foreground">{subtitle}</p>
                </div>
                {onAddClick ? (
                    <Button onClick={onAddClick}>
                        <IconPlus />
                        <span className="hidden md:block">Create New</span>
                    </Button>
                ) : addAsLink ? (
                    <Button asChild>
                        <Link to={addAsLink}>
                            <IconPlus />
                            <span className="hidden md:block">Create New</span>
                        </Link>
                    </Button>
                ) : null}
            </div>
            <div className="flex items-center justify-between">
                <div
                    className={cn(
                        'flex items-center rounded-full border bg-muted',
                        'focus-within:ring-2 focus-within:ring-ring'
                    )}
                >
                    <span className="flex items-center pl-3 text-muted-foreground">
                        <IconSearch className="size-4.5" />
                    </span>

                    <Input
                        className="rounded-full border-0 bg-muted shadow-none focus-visible:ring-0 lg:w-72"
                        onChange={(e) => {
                            const value = e.target.value;
                            setInputValue(value);
                            if (!value) {
                                (customSetSearch ?? setSearch)(value);
                            }
                        }}
                        placeholder={searchPlaceholder}
                        type="text"
                        value={inputValue}
                    />
                </div>
                <div className="flex items-center gap-x-2">
                    <Select
                        onValueChange={(value) => setLimit(Number(value))}
                        value={limit.toString()}
                    >
                        <SelectTrigger className="w-fit rounded-full bg-muted">
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {[10, 20, 30, 40, 50].map((value) => (
                                <SelectItem
                                    key={value}
                                    value={value.toString()}
                                >
                                    {value}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {filtersContent}
                </div>
            </div>
        </div>
    );
}

export const DataTableHeader = memo(
    DataTableHeaderBase
) as typeof DataTableHeaderBase;
