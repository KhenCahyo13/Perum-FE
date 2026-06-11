import { Outlet } from '@tanstack/react-router';

import { Navbar } from './navbar';

export const MainLayout = () => (
    <main className="min-h-screen bg-muted">
        <Navbar />
        <div className="px-8 py-4">
            <Outlet />
        </div>
    </main>
);
