import type { UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

import type { BillDetail } from '@/types/bill';

import type { createPaymentFormSchema } from './schema';

export type CreatePaymentFormValues = z.infer<typeof createPaymentFormSchema>;

export interface BillDetailProps {
    billId: string;
    onClose: () => void;
    onDelete: () => void;
}

export interface BillDetailViewProps {
    bill: BillDetail | undefined;
    form: UseFormReturn<CreatePaymentFormValues>;
    isDeletingBill: boolean;
    isDeletingPayment: boolean;
    isError: boolean;
    isLoading: boolean;
    isSubmittingPayment: boolean;
    onClose: () => void;
    onDelete: () => void;
    onDeletePayment: () => void;
    onSubmitPayment: (values: CreatePaymentFormValues) => void;
}
