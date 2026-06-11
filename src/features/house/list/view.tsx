import { useState } from 'react';

import { PageWrapper } from '@/components/layout';
import HouseDetail from '@/features/house/detail';

import HouseListDataTable from './components/datatable';
import HouseListStats from './components/stats';

const HouseListView = () => {
    const [selectedHouseId, setSelectedHouseId] = useState<null | string>(null);

    return (
        <PageWrapper
            description="Manajemen data rumah Anda dengan mudah"
            insideSheetContent={
                selectedHouseId ? (
                    <HouseDetail
                        houseId={selectedHouseId}
                        onClose={() => setSelectedHouseId(null)}
                    />
                ) : (
                    <HouseListStats />
                )
            }
            title="Rumah"
        >
            <HouseListDataTable onSelectHouse={setSelectedHouseId} />
        </PageWrapper>
    );
};

export default HouseListView;
