import { zodResolver } from '@hookform/resolvers/zod';
import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { createHouse } from '@/api/houses';
import {
    CONFIRMATION_MESSAGE_TITLE,
    ERROR_MESSAGE_TITLE,
    SUCCESS_MESSAGE_TITLE,
} from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { queryKeys } from '@/lib/query-keys';

import { createHouseFormDefaultValues, createHouseFormSchema } from './schema';
import type { CreateHouseFormValues, CreateHouseProps } from './types';
import CreateHouseView from './view';

const CreateHouse = ({ onClose }: CreateHouseProps) => {
    const queryClient = useQueryClient();

    const form = useForm({
        defaultValues: createHouseFormDefaultValues,
        resolver: zodResolver(createHouseFormSchema),
    });

    const mutation = useMutation({
        mutationFn: (values: CreateHouseFormValues) => createHouse(values),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Rumah berhasil ditambahkan',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.houses.all });
            form.reset();
            onClose();
        },
    });

    const onSubmit = useCallback(
        (values: CreateHouseFormValues) => {
            notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
                action: {
                    label: 'Ya, Tambah Rumah',
                    onClick: () => mutation.mutate(values),
                },
                cancel: { label: 'Cancel' },
                description:
                    'Apakah Anda yakin ingin menambahkan rumah dengan data tersebut?',
            });
        },
        [mutation]
    );

    return (
        <CreateHouseView
            form={form}
            isLoadingCreate={mutation.isPending}
            onClose={onClose}
            onSubmit={onSubmit}
        />
    );
};

export default CreateHouse;
