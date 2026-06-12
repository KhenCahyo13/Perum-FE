import { useState } from 'react';

import { PageWrapper } from '@/components/layout';
import CreateBill from '@/features/bill/create';
import BillDetail from '@/features/bill/detail';

import BillListDataTable from './components/datatable';
import BillListStats from './components/stats';

type BillListPanel = 'create' | 'default' | { id: string; type: 'detail' };

const BillListView = () => {
    const [panel, setPanel] = useState<BillListPanel>('default');

    const insideSheetContent =
        typeof panel === 'object' && panel.type === 'detail' ? (
            <BillDetail
                billId={panel.id}
                onClose={() => setPanel('default')}
                onDelete={() => setPanel('default')}
            />
        ) : panel === 'create' ? (
            <CreateBill onClose={() => setPanel('default')} />
        ) : (
            <BillListStats />
        );

    return (
        <PageWrapper
            description="Manajemen data tagihan Anda dengan mudah"
            insideSheetContent={insideSheetContent}
            title="Tagihan"
        >
            <BillListDataTable
                onAddClick={() => setPanel('create')}
                onSelectBill={(id) => setPanel({ id, type: 'detail' })}
            />
        </PageWrapper>
    );
};

export default BillListView;
