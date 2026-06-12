import { useState } from 'react';

import { PageWrapper } from '@/components/layout';
import ResidentDetail from '@/features/resident/detail';

import ResidentListDataTable from './components/datatable';
import ResidentListStats from './components/stats';

type ResidentListPanel = 'stats' | { id: string; type: 'detail' };

const ResidentListView = () => {
    const [panel, setPanel] = useState<ResidentListPanel>('stats');

    const insideSheetContent =
        typeof panel === 'object' && panel.type === 'detail' ? (
            <ResidentDetail
                onClose={() => setPanel('stats')}
                residentId={panel.id}
            />
        ) : (
            <ResidentListStats />
        );

    return (
        <PageWrapper
            description="Manajemen data penghuni Anda dengan mudah"
            insideSheetContent={insideSheetContent}
            title="Penghuni"
        >
            <ResidentListDataTable
                onSelectResident={(id) => setPanel({ id, type: 'detail' })}
            />
        </PageWrapper>
    );
};

export default ResidentListView;
