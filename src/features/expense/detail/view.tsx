import {
    IconCalendar,
    IconCash,
    IconClipboardText,
    IconLoader2,
    IconPencil,
    IconRefresh,
    IconTag,
    IconTrash,
} from '@tabler/icons-react';
import { memo } from 'react';

import { BoxPreview, DataPreview } from '@/components/data';
import { ImageFallback, LoaderFallback } from '@/components/fallback';
import { InsideSheetWrapper, SectionWrapper } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { formatCurrency } from '@/lib/currency';

import type { ExpenseDetailViewProps } from './types';

const ExpenseDetailView = ({
    expense,
    isDeletingExpense,
    isError,
    isLoading,
    onClose,
    onDelete,
    onEdit,
}: ExpenseDetailViewProps) => (
    <InsideSheetWrapper
        footer={
            expense && (
                <div className="flex items-center justify-between">
                    <Button
                        className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                        disabled={isDeletingExpense}
                        onClick={onDelete}
                        size="icon-lg"
                        variant="outline"
                    >
                        {isDeletingExpense ? (
                            <IconLoader2 className="animate-spin" />
                        ) : (
                            <IconTrash />
                        )}
                    </Button>
                    <Button onClick={onEdit}>
                        Edit Pengeluaran
                        <IconPencil />
                    </Button>
                </div>
            )
        }
        onClose={onClose}
        subtitle="Informasi lengkap mengenai pengeluaran"
        title="Detail Pengeluaran"
    >
        {isLoading ? (
            <LoaderFallback label="Memuat detail..." />
        ) : isError || !expense ? (
            <ImageFallback
                illustration="error"
                label="Gagal memuat detail pengeluaran"
            />
        ) : (
            <div className="flex flex-col gap-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-full">
                        <BoxPreview
                            icon={IconCash}
                            title="Jumlah"
                            value={formatCurrency(expense.amount)}
                            valueClassName="text-red-600"
                        />
                    </div>
                    <BoxPreview
                        icon={IconTag}
                        title="Kategori"
                        value={expense.categoryName}
                    />
                    <BoxPreview
                        icon={IconRefresh}
                        title="Status"
                        value={expense.isRecurring ? 'Rutin' : 'Non-Rutin'}
                        valueClassName={
                            expense.isRecurring
                                ? 'text-blue-600'
                                : 'text-muted-foreground'
                        }
                    />
                </div>

                <SectionWrapper>
                    <p className="text-sm font-medium text-muted-foreground">
                        Info Pengeluaran
                    </p>
                    <div className="mt-4 flex flex-col gap-y-4">
                        <DataPreview
                            icon={IconCalendar}
                            title="Tanggal"
                            titlePosition="top"
                            value={expense.date}
                        />
                        {expense.description && (
                            <div className="md:col-span-full">
                                <DataPreview
                                    icon={IconClipboardText}
                                    title="Deskripsi"
                                    titlePosition="top"
                                    value={expense.description}
                                />
                            </div>
                        )}
                    </div>
                </SectionWrapper>
            </div>
        )}
    </InsideSheetWrapper>
);

export default memo(ExpenseDetailView);
