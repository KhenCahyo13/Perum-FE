import type { ResidentDetail } from '@/types/resident';

export interface ResidentDetailProps {
    onClose: () => void;
    residentId: string;
}

export interface ResidentDetailViewProps {
    isError: boolean;
    isLoading: boolean;
    onClose: () => void;
    resident: ResidentDetail | undefined;
}
