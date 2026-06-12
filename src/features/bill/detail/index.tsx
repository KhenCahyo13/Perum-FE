import { zodResolver } from '@hookform/resolvers/zod';
import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';

import {
    createPayment,
    deleteBill,
    deletePayment,
    fetchBillById,
} from '@/api/bills';
import {
    CONFIRMATION_MESSAGE_TITLE,
    ERROR_MESSAGE_TITLE,
    SUCCESS_MESSAGE_TITLE,
} from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { queryKeys } from '@/lib/query-keys';

import {
    createPaymentFormDefaultValues,
    createPaymentFormSchema,
} from './schema';
import type { BillDetailProps, CreatePaymentFormValues } from './types';
import BillDetailView from './view';

const BillDetail = ({ billId, onClose }: BillDetailProps) => {
    const queryClient = useQueryClient();

    const { data, isError, isLoading } = useQuery({
        queryFn: () => fetchBillById(billId),
        queryKey: queryKeys.bills.detail(billId),
    });

    const form = useForm({
        defaultValues: createPaymentFormDefaultValues,
        resolver: zodResolver(createPaymentFormSchema),
    });

    const deleteMutation = useMutation({
        mutationFn: () => deleteBill(billId),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Tagihan berhasil dihapus',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.bills.all });
            onClose();
        },
    });

    const paymentMutation = useMutation({
        mutationFn: (values: CreatePaymentFormValues) => createPayment(values),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Pembayaran berhasil dicatat',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.bills.all });
            form.reset();
        },
    });

    const deletePaymentMutation = useMutation({
        mutationFn: () => {
            const paymentId = data?.data?.payment?.id;
            if (!paymentId) throw new Error('Payment ID not found');
            return deletePayment(paymentId);
        },
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Pembayaran berhasil dihapus',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.bills.all });
        },
    });

    const handleDelete = useCallback(() => {
        notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
            action: {
                label: 'Ya, Hapus Tagihan',
                onClick: () => deleteMutation.mutate(),
            },
            cancel: { label: 'Cancel' },
            description: 'Apakah Anda yakin ingin menghapus tagihan ini?',
        });
    }, [deleteMutation]);

    const handleDeletePayment = useCallback(() => {
        notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
            action: {
                label: 'Ya, Hapus Pembayaran',
                onClick: () => deletePaymentMutation.mutate(),
            },
            cancel: { label: 'Cancel' },
            description:
                'Apakah Anda yakin ingin menghapus data pembayaran ini?',
        });
    }, [deletePaymentMutation]);

    const handleSubmitPayment = useCallback(
        (values: CreatePaymentFormValues) => {
            notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
                action: {
                    label: 'Ya, Catat Pembayaran',
                    onClick: () => paymentMutation.mutate(values),
                },
                cancel: { label: 'Cancel' },
                description: 'Apakah Anda yakin ingin mencatat pembayaran ini?',
            });
        },
        [paymentMutation]
    );

    return (
        <BillDetailView
            bill={data?.data}
            form={form}
            isDeletingBill={deleteMutation.isPending}
            isDeletingPayment={deletePaymentMutation.isPending}
            isError={isError}
            isLoading={isLoading}
            isSubmittingPayment={paymentMutation.isPending}
            onClose={onClose}
            onDelete={handleDelete}
            onDeletePayment={handleDeletePayment}
            onSubmitPayment={handleSubmitPayment}
        />
    );
};

export default BillDetail;
