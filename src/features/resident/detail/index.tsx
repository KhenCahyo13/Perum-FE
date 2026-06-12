import { useQuery } from '@tanstack/react-query';

import { fetchResidentById } from '@/api/residents';
import { queryKeys } from '@/lib/query-keys';

import type { ResidentDetailProps } from './types';
import ResidentDetailView from './view';

const ResidentDetail = ({ onClose, residentId }: ResidentDetailProps) => {
    const { data, isError, isLoading } = useQuery({
        queryFn: () => fetchResidentById(residentId),
        queryKey: queryKeys.residents.detail(residentId),
    });

    return (
        <ResidentDetailView
            isError={isError}
            isLoading={isLoading}
            onClose={onClose}
            resident={data?.data}
        />
    );
};

export default ResidentDetail;
