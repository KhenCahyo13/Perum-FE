import type { UseFormReturn } from 'react-hook-form';
import type z from 'zod';

import type { createHouseFormSchema } from './schema';

export type CreateHouseFormValues = z.infer<typeof createHouseFormSchema>;

export interface CreateHouseProps {
    onClose: () => void;
}

export interface CreateHouseViewProps extends CreateHouseProps {
    form: UseFormReturn<CreateHouseFormValues>;
    isLoadingCreate: boolean;
    onSubmit: (values: CreateHouseFormValues) => void;
}
