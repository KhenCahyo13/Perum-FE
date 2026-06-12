import {
    IconBuilding,
    IconCalendar,
    IconHash,
    IconHomeCancel,
    IconMapPin,
    IconPencil,
    IconPhone,
    IconTrash,
    IconUser,
    IconUsers,
} from '@tabler/icons-react';
import { memo } from 'react';

import { BoxPreview, DataPreview } from '@/components/data';
import {
    BoxTextFallback,
    ImageFallback,
    LoaderFallback,
} from '@/components/fallback';
import { InsideSheetWrapper } from '@/components/layout';
import { SectionWrapper } from '@/components/layout';
import { Button } from '@/components/ui/button';

import type { HouseDetailViewProps } from './types';

const HouseDetailView = ({
    house,
    isDeletingHouse,
    isError,
    isLoading,
    isRemovingResident,
    onClose,
    onDelete,
    onEdit,
    onRemoveResident,
}: HouseDetailViewProps) => (
    <InsideSheetWrapper
        footer={
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <Button
                        className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                        disabled={isDeletingHouse}
                        onClick={onDelete}
                        size="icon-lg"
                        variant="outline"
                    >
                        <IconTrash />
                    </Button>
                    <Button
                        className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                        disabled={isRemovingResident}
                        onClick={onRemoveResident}
                        size="icon-lg"
                        variant="outline"
                    >
                        <IconHomeCancel />
                    </Button>
                </div>
                <div className="flex items-center gap-x-2">
                    {house?.status !== 'Dihuni' && (
                        <Button variant="outline">
                            Isi Penghuni
                            <IconUser />
                        </Button>
                    )}
                    <Button onClick={onEdit}>
                        Edit Rumah
                        <IconPencil />
                    </Button>
                </div>
            </div>
        }
        onClose={onClose}
        subtitle="Informasi lengkap mengenai rumah"
        title="Detail Rumah"
    >
        {isLoading ? (
            <LoaderFallback label="Memuat detail..." />
        ) : isError || !house ? (
            <ImageFallback
                illustration="error"
                label="Gagal memuat detail rumah"
            />
        ) : (
            <div className="flex flex-col gap-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                    <BoxPreview
                        icon={IconHash}
                        title="No. Rumah"
                        value={house.houseNumber}
                    />
                    <BoxPreview
                        icon={IconBuilding}
                        title="Status"
                        value={house.status}
                        valueClassName={
                            house.status === 'Dihuni'
                                ? 'text-green-600'
                                : 'text-red-500'
                        }
                    />
                    <div className="md:col-span-full">
                        <BoxPreview
                            icon={IconMapPin}
                            title="Alamat"
                            value={house.address}
                        />
                    </div>
                </div>

                {house.currentResident ? (
                    <SectionWrapper>
                        <p className="text-sm font-medium text-muted-foreground">
                            Penghuni Saat Ini
                        </p>
                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <DataPreview
                                icon={IconUser}
                                title="Nama Lengkap"
                                titlePosition="top"
                                value={house.currentResident.fullName}
                            />
                            <DataPreview
                                icon={IconPhone}
                                title="No. Telepon"
                                titlePosition="top"
                                value={house.currentResident.phoneNumber}
                            />
                            <DataPreview
                                icon={IconUsers}
                                title="Tipe Penghuni"
                                titlePosition="top"
                                value={house.currentResident.residentType}
                            />
                            <DataPreview
                                icon={IconUser}
                                title="Status Pernikahan"
                                titlePosition="top"
                                value={
                                    house.currentResident.isMarried
                                        ? 'Sudah Menikah'
                                        : 'Belum Menikah'
                                }
                            />
                        </div>
                    </SectionWrapper>
                ) : (
                    <BoxTextFallback label="Rumah ini tidak memiliki penghuni saat ini" />
                )}

                {house.history && house.history.length > 0 && (
                    <SectionWrapper>
                        <p className="text-sm font-medium text-muted-foreground">
                            Riwayat Penghuni
                        </p>
                        <div className="mt-4 flex flex-col divide-y divide-border">
                            {house.history.map((h) => (
                                <div
                                    className="flex flex-col gap-y-3 py-4 first:pt-0 last:pb-0"
                                    key={h.id}
                                >
                                    <DataPreview
                                        icon={IconUser}
                                        title="Nama"
                                        titlePosition="top"
                                        value={h.residentName}
                                    />
                                    <div className="grid gap-3 md:grid-cols-2">
                                        <DataPreview
                                            icon={IconCalendar}
                                            title="Mulai"
                                            titlePosition="top"
                                            value={h.startDate}
                                        />
                                        <DataPreview
                                            icon={IconCalendar}
                                            title="Selesai"
                                            titlePosition="top"
                                            value={
                                                h.isActive
                                                    ? 'Sekarang'
                                                    : h.endDate
                                            }
                                            valueClassName={
                                                h.isActive
                                                    ? 'text-green-600'
                                                    : undefined
                                            }
                                        />
                                    </div>
                                    <DataPreview
                                        icon={IconPhone}
                                        title="No. Telepon"
                                        titlePosition="top"
                                        value={h.residentPhoneNumber}
                                    />
                                </div>
                            ))}
                        </div>
                    </SectionWrapper>
                )}
            </div>
        )}
    </InsideSheetWrapper>
);

export default memo(HouseDetailView);
