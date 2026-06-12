import type { UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';

import type { SelectOption } from '@/types/components';

import type { createBillFormSchema } from './schema';

export type CreateBillFormValues = z.infer<typeof createBillFormSchema>;

export interface CreateBillProps {
    onClose: () => void;
}

export interface CreateBillViewProps extends CreateBillProps {
    feeTypeOptions: SelectOption[];
    form: UseFormReturn<CreateBillFormValues>;
    houseOptions: SelectOption[];
    isLoadingCreate: boolean;
    onSubmit: (values: CreateBillFormValues) => void;
    residentOptions: SelectOption[];
}
