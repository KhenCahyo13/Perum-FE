import { zodResolver } from '@hookform/resolvers/zod';
import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { fetchHouseById, updateHouse } from '@/api/houses';
import {
    CONFIRMATION_MESSAGE_TITLE,
    ERROR_MESSAGE_TITLE,
    SUCCESS_MESSAGE_TITLE,
} from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { queryKeys } from '@/lib/query-keys';

import { updateHouseFormDefaultValues, updateHouseFormSchema } from './schema';
import type { UpdateHouseFormValues, UpdateHouseProps } from './types';
import UpdateHouseView from './view';

const UpdateHouse = ({ houseId, onClose }: UpdateHouseProps) => {
    const queryClient = useQueryClient();

    const { data } = useQuery({
        queryFn: () => fetchHouseById(houseId),
        queryKey: queryKeys.houses.detail(houseId),
    });

    const form = useForm({
        defaultValues: updateHouseFormDefaultValues,
        resolver: zodResolver(updateHouseFormSchema),
    });

    useEffect(() => {
        if (!data?.data) return;

        const { address, houseNumber, status } = data.data;

        form.reset({
            address,
            houseNumber,
            status: status === 'Dihuni' ? 'occupied' : 'vacant',
        });
    }, [data, form]);

    const mutation = useMutation({
        mutationFn: (values: UpdateHouseFormValues) =>
            updateHouse(houseId, values),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Data rumah berhasil diperbarui',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.houses.all });
            onClose();
        },
    });

    const onSubmit = useCallback(
        (values: UpdateHouseFormValues) => {
            notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
                action: {
                    label: 'Ya, Simpan Perubahan',
                    onClick: () => mutation.mutate(values),
                },
                cancel: { label: 'Batal' },
                description:
                    'Apakah Anda yakin ingin menyimpan perubahan data rumah ini?',
            });
        },
        [mutation]
    );

    return (
        <UpdateHouseView
            form={form}
            isLoadingUpdate={mutation.isPending}
            onClose={onClose}
            onSubmit={onSubmit}
        />
    );
};

export default UpdateHouse;
