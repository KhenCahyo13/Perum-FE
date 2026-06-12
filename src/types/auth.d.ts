export type UserRole = string;

export interface AuthUser {
    created_at: string;
    email: string;
    email_verified_at: null | string;
    id: string;
    name: string;
    updated_at: string;
}

export interface AuthToken {
    token: string;
    token_type: string;
}
