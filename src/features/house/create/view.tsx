import { IconLoader2 } from '@tabler/icons-react';
import { memo } from 'react';

import { InsideSheetWrapper } from '@/components/layout';
import { RhSelectInput, RhTextInput } from '@/components/rh-form';
import { Button } from '@/components/ui/button';
import { FieldGroup } from '@/components/ui/field';

import { houseStatusOptions } from './data';
import type { CreateHouseViewProps } from './types';

const FORM_ID = 'create-house-form';

const CreateHouseView = ({
    form,
    isLoadingCreate,
    onClose,
    onSubmit,
}: CreateHouseViewProps) => (
    <InsideSheetWrapper
        footer={
            <div className="flex items-center justify-between">
                <Button
                    className="border-destructive text-destructive hover:bg-destructive hover:text-white"
                    disabled={isLoadingCreate}
                    onClick={() => form.reset()}
                    type="button"
                    variant="outline"
                >
                    Reset
                </Button>
                <Button disabled={isLoadingCreate} form={FORM_ID} type="submit">
                    {isLoadingCreate && (
                        <IconLoader2 className="animate-spin" />
                    )}
                    Simpan
                </Button>
            </div>
        }
        onClose={onClose}
        subtitle="Isi data berikut untuk menambahkan rumah baru"
        title="Tambah Rumah"
    >
        <form id={FORM_ID} onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <RhTextInput
                    control={form.control}
                    label="Nomor Rumah"
                    name="houseNumber"
                    placeholder="Masukkan nomor rumah"
                    required
                />
                <RhTextInput
                    control={form.control}
                    label="Alamat"
                    name="address"
                    placeholder="Masukkan alamat rumah"
                    required
                />
                <RhSelectInput
                    control={form.control}
                    label="Status"
                    name="status"
                    options={houseStatusOptions}
                    placeholder="Pilih status rumah"
                    required
                />
            </FieldGroup>
        </form>
    </InsideSheetWrapper>
);

export default memo(CreateHouseView);
