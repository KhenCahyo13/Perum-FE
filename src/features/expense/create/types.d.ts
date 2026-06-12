import type { UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

import type { SelectOption } from '@/types/components';

import type { createExpenseFormSchema } from './schema';

export type CreateExpenseFormValues = z.infer<typeof createExpenseFormSchema>;

export interface CreateExpenseProps {
    onClose: () => void;
}

export interface CreateExpenseViewProps extends CreateExpenseProps {
    categoryOptions: SelectOption[];
    form: UseFormReturn<CreateExpenseFormValues>;
    isLoadingCreate: boolean;
    onSubmit: (values: CreateExpenseFormValues) => void;
}
