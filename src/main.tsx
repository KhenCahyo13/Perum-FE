import './index.css';

import { createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { AppProvider } from './components/core';
import { routeTree } from './routeTree.gen';

// Tanstack Router
export const router = createRouter({
    defaultPreload: 'intent',
    routeTree,
    scrollRestoration: true,
});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <AppProvider router={router} />
        </StrictMode>
    );
}
