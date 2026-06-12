import { notifin } from '@khencahyo13/notifin-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useCallback } from 'react';

import { deleteHouse, fetchHouseById } from '@/api/houses';
import {
    CONFIRMATION_MESSAGE_TITLE,
    ERROR_MESSAGE_TITLE,
    SUCCESS_MESSAGE_TITLE,
} from '@/constants/message';
import { resolveErrorMessage } from '@/lib/api';
import { queryKeys } from '@/lib/query-keys';

import type { HouseDetailProps } from './types';
import HouseDetailView from './view';

const HouseDetail = ({ houseId, onClose, onEdit }: HouseDetailProps) => {
    const queryClient = useQueryClient();

    const { data, isError, isLoading } = useQuery({
        queryFn: () => fetchHouseById(houseId),
        queryKey: queryKeys.houses.detail(houseId),
    });

    const deleteMutation = useMutation({
        mutationFn: () => deleteHouse(houseId),
        onError: (error) => {
            notifin.error(ERROR_MESSAGE_TITLE, {
                description: resolveErrorMessage(error),
            });
        },
        onSuccess: () => {
            notifin.success(SUCCESS_MESSAGE_TITLE, {
                description: 'Rumah berhasil dihapus',
            });
            queryClient.invalidateQueries({ queryKey: queryKeys.houses.all });
            onClose();
        },
    });

    const onDelete = useCallback(() => {
        notifin.warning(CONFIRMATION_MESSAGE_TITLE, {
            action: {
                label: 'Ya, Hapus Rumah',
                onClick: () => deleteMutation.mutate(),
            },
            cancel: { label: 'Batal' },
            description: 'Tindakan ini tidak dapat dibatalkan.',
        });
    }, [deleteMutation]);

    return (
        <HouseDetailView
            house={data?.data}
            isDeletingHouse={deleteMutation.isPending}
            isError={isError}
            isLoading={isLoading}
            onClose={onClose}
            onDelete={onDelete}
            onEdit={onEdit}
        />
    );
};

export default HouseDetail;
