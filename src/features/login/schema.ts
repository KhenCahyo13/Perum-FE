import { z } from 'zod';

import type { LoginFormValues } from './types';

export const loginFormSchema = z.object({
    email: z.email('Format email tidak valid').nonempty('Email wajib diisi'),
    password: z
        .string('Password harus berupa string')
        .nonempty('Password wajib diisi'),
});

export const loginFormDefaultValues: LoginFormValues = {
    email: '',
    password: '',
};
