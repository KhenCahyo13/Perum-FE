import type { UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

import type { loginFormSchema } from './schema';

export type LoginFormValues = z.infer<typeof loginFormSchema>;

export interface LoginViewProps {
    form: UseFormReturn<LoginFormValues>;
    onSubmit: (values: LoginFormValues) => void;
}
