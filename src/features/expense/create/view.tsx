import { IconLoader2 } from '@tabler/icons-react';

import { InsideSheetWrapper } from '@/components/layout';
import {
    RhCalendarInput,
    RhSelectInput,
    RhTextInput,
} from '@/components/rh-form';
import { Button } from '@/components/ui/button';
import { FieldGroup } from '@/components/ui/field';

import type { CreateExpenseViewProps } from './types';

const FORM_ID = 'create-expense-form';

export const isRecurringOptions = [
    { label: 'Ya', value: 'true' },
    { label: 'Tidak', value: 'false' },
];

const CreateExpenseView = ({
    categoryOptions,
    form,
    isLoadingCreate,
    onClose,
    onSubmit,
}: CreateExpenseViewProps) => (
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
        subtitle="Isi form berikut untuk menambahkan pengeluaran baru"
        title="Tambah Pengeluaran"
    >
        <form id={FORM_ID} onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
                <RhSelectInput
                    control={form.control}
                    label="Kategori"
                    name="categoryId"
                    options={categoryOptions}
                    placeholder="Pilih kategori"
                    required
                    searchable
                />
                <RhTextInput
                    control={form.control}
                    label="Jumlah (Rp)"
                    name="amount"
                    placeholder="Masukkan jumlah"
                    required
                    type="number"
                />
                <RhCalendarInput
                    control={form.control}
                    label="Tanggal"
                    name="date"
                    required
                />
                <RhSelectInput
                    control={form.control}
                    label="Pengeluaran Rutin"
                    name="isRecurring"
                    options={isRecurringOptions}
                    placeholder="Pilih status"
                    required
                />
                <RhTextInput
                    control={form.control}
                    label="Deskripsi (opsional)"
                    name="description"
                    placeholder="Masukkan deskripsi"
                />
            </FieldGroup>
        </form>
    </InsideSheetWrapper>
);

export default CreateExpenseView;
