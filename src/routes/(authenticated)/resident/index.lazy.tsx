import { createLazyFileRoute } from '@tanstack/react-router';

import Resident from '@/features/resident/list';

export const Route = createLazyFileRoute('/(authenticated)/resident/')({
    component: Resident,
});
