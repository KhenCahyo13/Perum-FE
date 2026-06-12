import { useState } from 'react';

import { PageWrapper } from '@/components/layout';
import HouseCreate from '@/features/house/create';
import HouseDetail from '@/features/house/detail';
import HouseUpdate from '@/features/house/update';

import HouseListDataTable from './components/datatable';
import HouseListStats from './components/stats';

type HouseListPanel =
    | 'create'
    | 'stats'
    | { id: string; type: 'detail' }
    | { id: string; type: 'update' };

const HouseListView = () => {
    const [panel, setPanel] = useState<HouseListPanel>('stats');

    const insideSheetContent =
        panel === 'create' ? (
            <HouseCreate onClose={() => setPanel('stats')} />
        ) : typeof panel === 'object' && panel.type === 'detail' ? (
            <HouseDetail
                houseId={panel.id}
                onClose={() => setPanel('stats')}
                onEdit={() => setPanel({ id: panel.id, type: 'update' })}
            />
        ) : typeof panel === 'object' && panel.type === 'update' ? (
            <HouseUpdate houseId={panel.id} onClose={() => setPanel('stats')} />
        ) : (
            <HouseListStats />
        );

    return (
        <PageWrapper
            description="Manajemen data rumah Anda dengan mudah"
            insideSheetContent={insideSheetContent}
            title="Rumah"
        >
            <HouseListDataTable
                onAddClick={() => setPanel('create')}
                onSelectHouse={(id) => setPanel({ id, type: 'detail' })}
            />
        </PageWrapper>
    );
};

export default HouseListView;
