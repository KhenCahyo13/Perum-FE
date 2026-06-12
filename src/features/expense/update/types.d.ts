import type { UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

import type { SelectOption } from '@/types/components';

import type { updateExpenseFormSchema } from './schema';

export type UpdateExpenseFormValues = z.infer<typeof updateExpenseFormSchema>;

export interface UpdateExpenseProps {
    expenseId: string;
    onClose: () => void;
}

export interface UpdateExpenseViewProps extends UpdateExpenseProps {
    categoryOptions: SelectOption[];
    form: UseFormReturn<UpdateExpenseFormValues>;
    isLoadingUpdate: boolean;
    onSubmit: (values: UpdateExpenseFormValues) => void;
}
