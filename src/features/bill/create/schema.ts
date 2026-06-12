import { z } from 'zod';

import type { CreateBillFormValues } from './types';

export const createBillFormSchema = z.object({
    billingMonth: z
        .string({ required_error: 'Bulan tagihan harus diisi' })
        .nonempty('Bulan tagihan harus diisi'),
    dueDate: z
        .string({ required_error: 'Jatuh tempo harus diisi' })
        .nonempty('Jatuh tempo harus diisi'),
    feeTypeId: z
        .string({ required_error: 'Tipe biaya harus diisi' })
        .nonempty('Tipe biaya harus diisi'),
    houseId: z
        .string({ required_error: 'Rumah harus diisi' })
        .nonempty('Rumah harus diisi'),
    residentId: z
        .string({ required_error: 'Penghuni harus diisi' })
        .nonempty('Penghuni harus diisi'),
});

export const createBillFormDefaultValues: CreateBillFormValues = {
    billingMonth: '',
    dueDate: '',
    feeTypeId: '',
    houseId: '',
    residentId: '',
};
