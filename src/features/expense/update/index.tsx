import { zodResolver } from '@hookform/resolvers/zod';
import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { fetchExpenseCategories } from '@/api/expense-categories';
import { fetchExpenseById, updateExpense } from '@/api/expenses';
import {
    CONFIRMATION_MESSAGE_TITLE,
    ERROR_MESSAGE_TITLE,
    SUCCESS_MESSAGE_TITLE,
} from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { queryKeys } from '@/lib/query-keys';

import {
    updateExpenseFormDefaultValues,
    updateExpenseFormSchema,
} from './schema';
import type { UpdateExpenseFormValues, UpdateExpenseProps } from './types';
import UpdateExpenseView from './view';

const UpdateExpense = ({ expenseId, onClose }: UpdateExpenseProps) => {
    const queryClient = useQueryClient();

    const form = useForm({
        defaultValues: updateExpenseFormDefaultValues,
        resolver: zodResolver(updateExpenseFormSchema),
    });

    const { data } = useQuery({
        queryFn: () => fetchExpenseById(expenseId),
        queryKey: queryKeys.expenses.detail(expenseId),
    });

    const { data: categoriesData } = useQuery({
        queryFn: () => fetchExpenseCategories(),
        queryKey: queryKeys.expenseCategories.list(),
    });

    useEffect(() => {
        if (!data?.data) return;
        const { amount, categoryName, date, description, isRecurring } =
            data.data;

        const categoriesMatch = categoriesData?.data?.find(
            (c) => c.name === categoryName
        );

        form.reset({
            amount,
            categoryId: categoriesMatch?.id ?? '',
            date,
            description: description ?? '',
            isRecurring: isRecurring ? 'true' : 'false',
        });
    }, [data, categoriesData, form]);

    const categoryOptions = useMemo(
        () =>
            (categoriesData?.data ?? []).map((c) => ({
                label: c.name,
                value: c.id,
            })),
        [categoriesData]
    );

    const mutation = useMutation({
        mutationFn: (values: UpdateExpenseFormValues) =>
            updateExpense(expenseId, {
                ...values,
                isRecurring: values.isRecurring === 'true',
            }),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Pengeluaran berhasil diperbarui',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all });
            onClose();
        },
    });

    const onSubmit = useCallback(
        (values: UpdateExpenseFormValues) => {
            notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
                action: {
                    label: 'Ya, Simpan Perubahan',
                    onClick: () => mutation.mutate(values),
                },
                cancel: { label: 'Cancel' },
                description:
                    'Apakah Anda yakin ingin menyimpan perubahan pengeluaran ini?',
            });
        },
        [mutation]
    );

    return (
        <UpdateExpenseView
            categoryOptions={categoryOptions}
            expenseId={expenseId}
            form={form}
            isLoadingUpdate={mutation.isPending}
            onClose={onClose}
            onSubmit={onSubmit}
        />
    );
};

export default UpdateExpense;
