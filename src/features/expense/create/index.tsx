import { zodResolver } from '@hookform/resolvers/zod';
import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { fetchExpenseCategories } from '@/api/expense-categories';
import { createExpense } from '@/api/expenses';
import {
    CONFIRMATION_MESSAGE_TITLE,
    ERROR_MESSAGE_TITLE,
    SUCCESS_MESSAGE_TITLE,
} from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { queryKeys } from '@/lib/query-keys';

import {
    createExpenseFormDefaultValues,
    createExpenseFormSchema,
} from './schema';
import type { CreateExpenseFormValues, CreateExpenseProps } from './types';
import CreateExpenseView from './view';

const CreateExpense = ({ onClose }: CreateExpenseProps) => {
    const queryClient = useQueryClient();

    const form = useForm({
        defaultValues: createExpenseFormDefaultValues,
        resolver: zodResolver(createExpenseFormSchema),
    });

    const { data: categoriesData } = useQuery({
        queryFn: () => fetchExpenseCategories(),
        queryKey: queryKeys.expenseCategories.list(),
    });

    const categoryOptions = useMemo(
        () =>
            (categoriesData?.data ?? []).map((c) => ({
                label: c.name,
                value: c.id,
            })),
        [categoriesData]
    );

    const mutation = useMutation({
        mutationFn: (values: CreateExpenseFormValues) =>
            createExpense({
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
                description: 'Pengeluaran berhasil ditambahkan',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all });
            form.reset();
            onClose();
        },
    });

    const onSubmit = useCallback(
        (values: CreateExpenseFormValues) => {
            notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
                action: {
                    label: 'Ya, Tambah Pengeluaran',
                    onClick: () => mutation.mutate(values),
                },
                cancel: { label: 'Cancel' },
                description:
                    'Apakah Anda yakin ingin menambahkan pengeluaran ini?',
            });
        },
        [mutation]
    );

    return (
        <CreateExpenseView
            categoryOptions={categoryOptions}
            form={form}
            isLoadingCreate={mutation.isPending}
            onClose={onClose}
            onSubmit={onSubmit}
        />
    );
};

export default CreateExpense;
