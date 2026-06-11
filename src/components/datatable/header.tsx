import { IconPlus } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import { memo, type ReactNode, useEffect, useState } from 'react';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useDataTableContext } from './context';

interface DataTableHeaderProps {
    addAsLink?: string;
    addButtonLabel?: string;
    customSearch?: string;
    customSetSearch?: (value: string) => void;
    filtersContent?: ReactNode;
    onAddClick?: () => void;
    rightContent?: ReactNode;
    searchPlaceholder?: string;
    subtitle?: string;
    title?: string;
}

function DataTableHeaderBase({
    addAsLink,
    addButtonLabel = 'Add New',
    customSearch,
    customSetSearch,
    filtersContent,
    onAddClick,
    rightContent,
    searchPlaceholder = 'Cari data...',
    subtitle,
    title,
}: DataTableHeaderProps) {
    const search = useDataTableContext((s) => s.search);
    const setSearch = useDataTableContext((s) => s.setSearch);
    const setPage = useDataTableContext((s) => s.setPage);

    const [inputValue, setInputValue] = useState(customSearch ?? search);

    useEffect(() => {
        const timer = setTimeout(() => {
            const setter = customSetSearch ?? setSearch;
            setter(inputValue);
            setPage(1);
        }, 300);

        return () => clearTimeout(timer);
    }, [inputValue, customSetSearch, setSearch, setPage]);

    return (
        <div className="flex flex-col gap-4 px-6">
            {(title || subtitle) && (
                <div className="flex flex-col gap-y-0.5">
                    {title && <h2 className="font-semibold">{title}</h2>}
                    {subtitle && (
                        <p className="text-sm text-muted-foreground">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <Input
                    className="w-full bg-muted/50 shadow-none md:w-sm"
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={searchPlaceholder}
                    type="text"
                    value={inputValue}
                />

                <div className="flex items-center gap-x-2">
                    {filtersContent}
                    {rightContent}
                    {onAddClick ? (
                        <Button className="" onClick={onAddClick}>
                            <IconPlus />
                            {addButtonLabel}
                        </Button>
                    ) : addAsLink ? (
                        <Button asChild className="">
                            <Link to={addAsLink}>
                                <IconPlus />
                                {addButtonLabel}
                            </Link>
                        </Button>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export const DataTableHeader = memo(
    DataTableHeaderBase
) as typeof DataTableHeaderBase;
