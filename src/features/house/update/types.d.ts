import type { UseFormReturn } from 'react-hook-form';
import type z from 'zod';

import type { updateHouseFormSchema } from './schema';

export type UpdateHouseFormValues = z.infer<typeof updateHouseFormSchema>;

export interface UpdateHouseProps {
    houseId: string;
    onClose: () => void;
}

export interface UpdateHouseViewProps {
    form: UseFormReturn<UpdateHouseFormValues>;
    isLoadingUpdate: boolean;
    onClose: () => void;
    onSubmit: (values: UpdateHouseFormValues) => void;
}
