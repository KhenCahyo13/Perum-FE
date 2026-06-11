import { createLazyFileRoute } from '@tanstack/react-router';

import House from '@/features/house/list';

export const Route = createLazyFileRoute('/(authenticated)/house/')({
    component: House,
});
