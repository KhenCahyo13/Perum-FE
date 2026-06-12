import { useState } from 'react';

import { PageWrapper } from '@/components/layout';
import CreateExpense from '@/features/expense/create';
import ExpenseDetail from '@/features/expense/detail';
import UpdateExpense from '@/features/expense/update';

import ExpenseListDataTable from './components/datatable';
import ExpenseListStats from './components/stats';

type ExpenseListPanel =
    | 'create'
    | 'stats'
    | { id: string; type: 'detail' }
    | { id: string; type: 'update' };

const ExpenseListView = () => {
    const [panel, setPanel] = useState<ExpenseListPanel>('stats');

    const insideSheetContent =
        typeof panel === 'object' && panel.type === 'detail' ? (
            <ExpenseDetail
                expenseId={panel.id}
                onClose={() => setPanel('stats')}
                onDelete={() => setPanel('stats')}
                onEdit={() => setPanel({ id: panel.id, type: 'update' })}
            />
        ) : typeof panel === 'object' && panel.type === 'update' ? (
            <UpdateExpense
                expenseId={panel.id}
                onClose={() => setPanel({ id: panel.id, type: 'detail' })}
            />
        ) : panel === 'create' ? (
            <CreateExpense onClose={() => setPanel('stats')} />
        ) : (
            <ExpenseListStats />
        );

    return (
        <PageWrapper
            description="Manajemen data pengeluaran Anda dengan mudah"
            insideSheetContent={insideSheetContent}
            title="Pengeluaran"
        >
            <ExpenseListDataTable
                onAddClick={() => setPanel('create')}
                onSelectExpense={(id) => setPanel({ id, type: 'detail' })}
            />
        </PageWrapper>
    );
};

export default ExpenseListView;
