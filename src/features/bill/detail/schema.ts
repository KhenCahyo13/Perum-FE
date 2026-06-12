import { z } from 'zod';

import type { CreatePaymentFormValues } from './types';

export const createPaymentFormSchema = z.object({
    amount: z.coerce
        .number('Jumlah pembayaran harus berupa angka')
        .positive('Jumlah pembayaran harus lebih dari 0'),
    billId: z.string().nonempty('Bill ID harus diisi'),
    notes: z.string().optional(),
    paymentDate: z
        .string('Tanggal pembayaran harus berupa string')
        .nonempty('Tanggal pembayaran harus diisi'),
});

export const createPaymentFormDefaultValues: CreatePaymentFormValues = {
    amount: 0,
    billId: '',
    notes: '',
    paymentDate: '',
};
