import { createFileRoute } from '@tanstack/react-router';

import { MainLayout } from '@/components/layout';

export const Route = createFileRoute('/(authenticated)')({
    component: () => <MainLayout />,
});
