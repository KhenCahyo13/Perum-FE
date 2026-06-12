import {
    IconHash,
    IconHeart,
    IconMapPin,
    IconPhone,
    IconUser,
} from '@tabler/icons-react';
import { memo } from 'react';

import { BoxPreview, DataPreview } from '@/components/data';
import {
    BoxTextFallback,
    ImageFallback,
    LoaderFallback,
} from '@/components/fallback';
import { InsideSheetWrapper, SectionWrapper } from '@/components/layout';

import type { ResidentDetailViewProps } from './types';

const ResidentDetailView = ({
    isError,
    isLoading,
    onClose,
    resident,
}: ResidentDetailViewProps) => (
    <InsideSheetWrapper
        onClose={onClose}
        subtitle="Informasi lengkap mengenai penghuni"
        title="Detail Penghuni"
    >
        {isLoading ? (
            <LoaderFallback label="Memuat detail..." />
        ) : isError || !resident ? (
            <ImageFallback
                illustration="error"
                label="Gagal memuat detail penghuni"
            />
        ) : (
            <div className="flex flex-col gap-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="md:col-span-full">
                        <BoxPreview
                            icon={IconUser}
                            title="Nama Lengkap"
                            value={resident.fullName}
                        />
                    </div>
                    <BoxPreview
                        icon={IconHash}
                        title="Tipe Penghuni"
                        value={resident.residentType}
                    />
                    <BoxPreview
                        icon={IconHash}
                        title="No. Rumah"
                        value={resident.houseNumber ?? '-'}
                    />
                </div>

                <SectionWrapper>
                    <div className="grid gap-4 md:grid-cols-2">
                        <DataPreview
                            icon={IconPhone}
                            title="No. Telepon"
                            titlePosition="top"
                            value={resident.phoneNumber}
                        />
                        <DataPreview
                            icon={IconHeart}
                            title="Status Pernikahan"
                            titlePosition="top"
                            value={
                                resident.isMarried
                                    ? 'Sudah Menikah'
                                    : 'Belum Menikah'
                            }
                        />
                        <div className="col-span-full">
                            <DataPreview
                                icon={IconMapPin}
                                title="Alamat Rumah"
                                titlePosition="top"
                                value={resident.houseAddress ?? '-'}
                            />
                        </div>
                    </div>
                </SectionWrapper>

                {!resident.ktpFileUrl && (
                    <BoxTextFallback label="Tidak ada foto KTP tersedia" />
                )}
            </div>
        )}
    </InsideSheetWrapper>
);

export default memo(ResidentDetailView);
