import {
    IconCalendar,
    IconCash,
    IconClipboardText,
    IconHome2,
    IconLoader2,
    IconReceipt,
    IconUser,
} from '@tabler/icons-react';
import { memo } from 'react';

import { BoxPreview, DataPreview } from '@/components/data';
import { ImageFallback, LoaderFallback } from '@/components/fallback';
import { InsideSheetWrapper, SectionWrapper } from '@/components/layout';
import { RhCalendarInput, RhTextInput } from '@/components/rh-form';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FieldGroup } from '@/components/ui/field';
import { formatCurrency } from '@/lib/currency';
import { formatBillingMonth } from '@/lib/datetime';
import { cn } from '@/lib/utils';

import type { BillDetailViewProps } from './types';

const PAYMENT_FORM_ID = 'create-payment-form';

const statusColorMap: Record<string, string> = {
    'Belum Dibayar': 'bg-yellow-100 text-yellow-600',
    Lunas: 'bg-green-100 text-green-600',
    Terlambat: 'bg-red-100 text-red-600',
};

const BillDetailView = ({
    bill,
    form,
    isDeletingBill,
    isDeletingPayment,
    isError,
    isLoading,
    isSubmittingPayment,
    onClose,
    onDelete,
    onDeletePayment,
    onSubmitPayment,
}: BillDetailViewProps) => (
    <InsideSheetWrapper
        footer={
            bill && !bill.payment ? (
                <div className="flex items-center justify-between">
                    <Button
                        className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
                        disabled={isDeletingBill}
                        onClick={onDelete}
                        variant="outline"
                    >
                        {isDeletingBill && (
                            <IconLoader2 className="animate-spin" />
                        )}
                        Hapus Tagihan
                    </Button>
                    <Button
                        disabled={isSubmittingPayment}
                        form={PAYMENT_FORM_ID}
                        type="submit"
                    >
                        {isSubmittingPayment && (
                            <IconLoader2 className="animate-spin" />
                        )}
                        Bayar
                    </Button>
                </div>
            ) : bill?.payment ? (
                <div className="flex justify-end">
                    <Button
                        className="border-destructive text-destructive hover:bg-destructive/10 hover:text-destructive"
                        disabled={isDeletingPayment}
                        onClick={onDeletePayment}
                        variant="outline"
                    >
                        {isDeletingPayment && (
                            <IconLoader2 className="animate-spin" />
                        )}
                        Hapus Pembayaran
                    </Button>
                </div>
            ) : null
        }
        onClose={onClose}
        subtitle="Informasi lengkap mengenai tagihan"
        title="Detail Tagihan"
    >
        {isLoading ? (
            <LoaderFallback label="Memuat detail..." />
        ) : isError || !bill ? (
            <ImageFallback
                illustration="error"
                label="Gagal memuat detail tagihan"
            />
        ) : (
            <div className="flex flex-col gap-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-full">
                        <BoxPreview
                            icon={IconUser}
                            title="Penghuni"
                            value={bill.residentName}
                        />
                    </div>
                    <BoxPreview
                        icon={IconHome2}
                        title="No. Rumah"
                        value={bill.houseNumber}
                    />
                    <BoxPreview
                        icon={IconReceipt}
                        title="Tipe Biaya"
                        value={bill.feeTypeName}
                    />
                </div>

                <SectionWrapper>
                    <p className="text-sm font-medium text-muted-foreground">
                        Informasi Tagihan
                    </p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                        <DataPreview
                            icon={IconCash}
                            title="Jumlah"
                            titlePosition="top"
                            value={formatCurrency(bill.amount)}
                        />
                        <DataPreview
                            title="Status"
                            titlePosition="top"
                            value={
                                <Badge
                                    className={cn(
                                        statusColorMap[bill.status] ??
                                            'bg-gray-100 text-gray-600'
                                    )}
                                >
                                    {bill.status}
                                </Badge>
                            }
                        />
                        <DataPreview
                            icon={IconCalendar}
                            title="Bulan Tagihan"
                            titlePosition="top"
                            value={formatBillingMonth(bill.billingMonth)}
                        />
                        <DataPreview
                            icon={IconCalendar}
                            title="Jatuh Tempo"
                            titlePosition="top"
                            value={bill.dueDate}
                        />
                    </div>
                </SectionWrapper>

                {bill.payment ? (
                    <SectionWrapper>
                        <p className="text-sm font-medium text-muted-foreground">
                            Informasi Pembayaran
                        </p>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <DataPreview
                                icon={IconCalendar}
                                title="Tanggal Bayar"
                                titlePosition="top"
                                value={bill.payment.paymentDate}
                            />
                            <DataPreview
                                icon={IconCash}
                                title="Jumlah Dibayar"
                                titlePosition="top"
                                value={formatCurrency(bill.payment.amount)}
                            />
                            {bill.payment.notes && (
                                <div className="col-span-full">
                                    <DataPreview
                                        icon={IconClipboardText}
                                        title="Catatan"
                                        titlePosition="top"
                                        value={bill.payment.notes}
                                    />
                                </div>
                            )}
                        </div>
                    </SectionWrapper>
                ) : (
                    <SectionWrapper>
                        <p className="text-sm font-medium text-muted-foreground">
                            Catat Pembayaran
                        </p>
                        <form
                            className="mt-4"
                            id={PAYMENT_FORM_ID}
                            onSubmit={form.handleSubmit(onSubmitPayment)}
                        >
                            <FieldGroup>
                                <RhCalendarInput
                                    control={form.control}
                                    label="Tanggal Pembayaran"
                                    name="paymentDate"
                                />
                                <RhTextInput
                                    control={form.control}
                                    label="Jumlah (Rp)"
                                    name="amount"
                                    placeholder="Masukkan jumlah"
                                    type="number"
                                />
                                <RhTextInput
                                    control={form.control}
                                    label="Catatan (opsional)"
                                    name="notes"
                                    placeholder="Catatan tambahan"
                                />
                            </FieldGroup>
                        </form>
                    </SectionWrapper>
                )}
            </div>
        )}
    </InsideSheetWrapper>
);

export default memo(BillDetailView);
