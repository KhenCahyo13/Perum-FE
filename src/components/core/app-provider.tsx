import { Notifin } from '@khencahyo13/notifin-react';
import { RouterProvider } from '@tanstack/react-router';

import type { router } from '@/main';

interface AppProviderProps {
    router: typeof router;
}

export const AppProvider = ({ router }: AppProviderProps) => {
    return (
        <>
            <RouterProvider router={router} />
            <Notifin colorScheme="light" />
        </>
    );
};
