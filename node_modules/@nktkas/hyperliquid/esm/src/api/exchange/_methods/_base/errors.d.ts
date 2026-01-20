import { HyperliquidError } from "../../../../_base.js";
/** Thrown when Exchange API returns an error response. */
export declare class ApiRequestError extends HyperliquidError {
    readonly response: unknown;
    constructor(response: unknown);
}
/** Assert that response is successful, throw ApiRequestError otherwise. */
export declare function assertSuccessResponse(response: unknown): void;
type Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
/** Exclude error variants from response type. */
export type ExcludeErrorResponse<T> = T extends {
    status: "err";
} ? never : T extends {
    response: {
        data: {
            statuses: ReadonlyArray<infer S>;
        };
    };
} ? Exclude<S, {
    error: unknown;
}> extends never ? never : Prettify<Omit<T, "response"> & {
    response: Prettify<Omit<T["response"], "data"> & {
        data: {
            statuses: Array<Exclude<S, {
                error: unknown;
            }>>;
        };
    }>;
}> : T extends {
    response: {
        data: {
            status: infer S;
        };
    };
} ? S extends {
    error: unknown;
} ? never : Prettify<Omit<T, "response"> & {
    response: Prettify<Omit<T["response"], "data"> & {
        data: {
            status: Exclude<S, {
                error: unknown;
            }>;
        };
    }>;
}> : T;
export {};
//# sourceMappingURL=errors.d.ts.map