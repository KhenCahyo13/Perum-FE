export interface ApiResponse<TData, TMeta = null, TError = null> {
    data: TData;
    error: TError;
    message: string;
    meta: TMeta;
    success: boolean;
}

export interface ApiPagination {
    currentPage: number;
    from: number;
    lastPage: number;
    perPage: number;
    to: number;
    total: number;
}

export interface ApiBaseParams {
    limit?: number;
    page?: number;
    search?: string;
}
