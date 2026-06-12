import { zodResolver } from '@hookform/resolvers/zod';
import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { createBill } from '@/api/bills';
import { fetchFeeTypes } from '@/api/fee-types';
import { fetchHouses } from '@/api/houses';
import { fetchResidents } from '@/api/residents';
import {
    CONFIRMATION_MESSAGE_TITLE,
    ERROR_MESSAGE_TITLE,
    SUCCESS_MESSAGE_TITLE,
} from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { formatCurrency } from '@/lib/currency';
import { queryKeys } from '@/lib/query-keys';

import { createBillFormDefaultValues, createBillFormSchema } from './schema';
import type { CreateBillFormValues, CreateBillProps } from './types';
import CreateBillView from './view';

const CreateBill = ({ onClose }: CreateBillProps) => {
    const queryClient = useQueryClient();

    const form = useForm({
        defaultValues: createBillFormDefaultValues,
        resolver: zodResolver(createBillFormSchema),
    });

    const { data: housesData } = useQuery({
        queryFn: () => fetchHouses({ limit: 100 }),
        queryKey: queryKeys.houses.list({ limit: 100 }),
    });

    const { data: residentsData } = useQuery({
        queryFn: () => fetchResidents({ limit: 100 }),
        queryKey: queryKeys.residents.list({ limit: 100 }),
    });

    const { data: feeTypesData } = useQuery({
        queryFn: () => fetchFeeTypes(),
        queryKey: queryKeys.feeTypes.list(),
    });

    const houseOptions = useMemo(
        () =>
            (housesData?.data ?? []).map((h) => ({
                label: h.houseNumber,
                value: h.id,
            })),
        [housesData]
    );

    const residentOptions = useMemo(
        () =>
            (residentsData?.data ?? []).map((r) => ({
                label: r.fullName,
                value: r.id,
            })),
        [residentsData]
    );

    const feeTypeOptions = useMemo(
        () =>
            (feeTypesData?.data ?? []).map((f) => ({
                label: `${f.name} (${formatCurrency(f.amount)})`,
                value: f.id,
            })),
        [feeTypesData]
    );

    const mutation = useMutation({
        mutationFn: (values: CreateBillFormValues) => createBill(values),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Tagihan berhasil ditambahkan',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.bills.all });
            form.reset();
            onClose();
        },
    });

    const onSubmit = useCallback(
        (values: CreateBillFormValues) => {
            notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
                action: {
                    label: 'Ya, Tambah Tagihan',
                    onClick: () => mutation.mutate(values),
                },
                cancel: { label: 'Cancel' },
                description:
                    'Apakah Anda yakin ingin menambahkan tagihan dengan data tersebut?',
            });
        },
        [mutation]
    );

    return (
        <CreateBillView
            feeTypeOptions={feeTypeOptions}
            form={form}
            houseOptions={houseOptions}
            isLoadingCreate={mutation.isPending}
            onClose={onClose}
            onSubmit={onSubmit}
            residentOptions={residentOptions}
        />
    );
};

export default CreateBill;
