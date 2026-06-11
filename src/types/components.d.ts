import type { ReactNode } from 'react';

export type ButtonTheme = 'danger' | 'info' | 'warning';

export interface LayoutProps {
    children?: ReactNode;
    className?: string;
}

export interface SelectOption {
    label: string;
    value: string;
}
