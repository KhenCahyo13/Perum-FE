import { Outlet } from '@tanstack/react-router';

import { Navbar } from './navbar';

export const MainLayout = () => (
    <div className="flex h-screen flex-col overflow-hidden bg-muted">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
            <Outlet />
        </div>
    </div>
);
