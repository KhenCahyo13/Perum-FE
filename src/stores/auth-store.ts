import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

import { env } from '@/lib/env';
import type { AuthToken, AuthUser } from '@/types/auth';

interface AuthState {
    clearAuth: () => void;
    setToken: (token: AuthToken | null) => void;
    setUser: (user: AuthUser | null) => void;
    token: AuthToken | null;
    user: AuthUser | null;
}

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                clearAuth: () =>
                    set({
                        token: null,
                        user: null,
                    }),
                setToken: (token) => set({ token }),
                setUser: (user) => set({ user }),
                token: null,
                user: null,
            }),
            {
                name: env.authStorageKey ?? 'perum-auth',
                partialize: (state) => ({
                    token: state.token,
                    user: state.user,
                }),
            }
        )
    )
);
