import { z } from 'zod';

import type { CreateExpenseFormValues } from './types';

export const createExpenseFormSchema = z.object({
    amount: z.coerce
        .number({ required_error: 'Jumlah wajib diisi' })
        .min(0, 'Jumlah tidak boleh negatif'),
    categoryId: z
        .string({ required_error: 'Kategori wajib diisi' })
        .nonempty('Kategori wajib diisi'),
    date: z
        .string({ required_error: 'Tanggal wajib diisi' })
        .nonempty('Tanggal wajib diisi'),
    description: z.string().optional(),
    isRecurring: z.enum(['true', 'false'], {
        required_error: 'Status rutin wajib diisi',
    }),
});

export const createExpenseFormDefaultValues: CreateExpenseFormValues = {
    amount: 0,
    categoryId: '',
    date: '',
    description: '',
    isRecurring: 'false',
};
