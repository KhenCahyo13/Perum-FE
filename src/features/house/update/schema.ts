import z from 'zod';

import type { UpdateHouseFormValues } from './types';

export const updateHouseFormSchema = z.object({
    address: z
        .string('Alamat harus berupa string')
        .nonempty('Alamat tidak boleh kosong'),
    houseNumber: z
        .string('Nomor rumah harus berupa string')
        .max(16, 'Nomor rumah tidak boleh lebih dari 16 karakter')
        .nonempty('Nomor rumah tidak boleh kosong'),
    status: z.enum(
        ['occupied', 'vacant'],
        "Status harus berupa 'Dihuni' atau 'Kosong'"
    ),
});

export const updateHouseFormDefaultValues: UpdateHouseFormValues = {
    address: '',
    houseNumber: '',
    status: 'vacant',
};
