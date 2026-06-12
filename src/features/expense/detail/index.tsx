import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

import { deleteExpense, fetchExpenseById } from '@/api/expenses';
import {
    CONFIRMATION_MESSAGE_TITLE,
    ERROR_MESSAGE_TITLE,
    SUCCESS_MESSAGE_TITLE,
} from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { queryKeys } from '@/lib/query-keys';

import type { ExpenseDetailProps } from './types';
import ExpenseDetailView from './view';

const ExpenseDetail = ({
    expenseId,
    onClose,
    onDelete,
    onEdit,
}: ExpenseDetailProps) => {
    const queryClient = useQueryClient();

    const { data, isError, isLoading } = useQuery({
        queryFn: () => fetchExpenseById(expenseId),
        queryKey: queryKeys.expenses.detail(expenseId),
    });

    const deleteMutation = useMutation({
        mutationFn: () => deleteExpense(expenseId),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Pengeluaran berhasil dihapus',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.expenses.all });
            onDelete();
        },
    });

    const handleDelete = useCallback(() => {
        notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
            action: {
                label: 'Ya, Hapus Pengeluaran',
                onClick: () => deleteMutation.mutate(),
            },
            cancel: { label: 'Cancel' },
            description: 'Apakah Anda yakin ingin menghapus pengeluaran ini?',
        });
    }, [deleteMutation]);

    return (
        <ExpenseDetailView
            expense={data?.data}
            isDeletingExpense={deleteMutation.isPending}
            isError={isError}
            isLoading={isLoading}
            onClose={onClose}
            onDelete={handleDelete}
            onEdit={onEdit}
        />
    );
};

export default ExpenseDetail;
