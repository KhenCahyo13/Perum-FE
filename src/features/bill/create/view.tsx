import { IconLoader2 } from '@tabler/icons-react';

import { InsideSheetWrapper } from '@/components/layout';
import { RhCalendarInput, RhSelectInput } from '@/components/rh-form';
import { Button } from '@/components/ui/button';
import { FieldGroup } from '@/components/ui/field';

import type { CreateBillViewProps } from './types';

const FORM_ID = 'create-bill-form';

const CreateBillView = ({
    feeTypeOptions,
    form,
    houseOptions,
    isLoadingCreate,
    onClose,
    onSubmit,
    residentOptions,
}: CreateBillViewProps) => (
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
        subtitle="Isi form berikut untuk menambahkan tagihan baru"
        title="Tambah Tagihan"
    >
        <form id={FORM_ID} onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <RhSelectInput
                    control={form.control}
                    label="Rumah"
                    name="houseId"
                    options={houseOptions}
                    placeholder="Pilih rumah"
                    required
                    searchable
                />
                <RhSelectInput
                    control={form.control}
                    label="Penghuni"
                    name="residentId"
                    options={residentOptions}
                    placeholder="Pilih penghuni"
                    required
                    searchable
                />
                <RhSelectInput
                    control={form.control}
                    label="Tipe Biaya"
                    name="feeTypeId"
                    options={feeTypeOptions}
                    placeholder="Pilih tipe biaya"
                    required
                    searchable
                />
                <RhCalendarInput
                    control={form.control}
                    label="Bulan Tagihan"
                    name="billingMonth"
                    required
                />
                <RhCalendarInput
                    control={form.control}
                    label="Jatuh Tempo"
                    name="dueDate"
                    required
                />
            </FieldGroup>
        </form>
    </InsideSheetWrapper>
);

export default CreateBillView;
