import * as v from "valibot";
/**
 * Cancel order(s).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
export declare const CancelRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of action.">]>;
        /** Orders to cancel by asset and order ID. */
        readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            /** Asset ID. */
            readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            /** Order ID. */
            readonly o: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            a: number;
            o: number;
        }[], "Orders to cancel by asset and order ID.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "cancel";
        cancels: {
            a: number;
            o: number;
        }[];
    }, "Action to perform.">]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    /** ECDSA signature components. */
    readonly signature: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "First 32-byte component.">]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Second 32-byte component.">]>;
        readonly v: v.SchemaWithPipe<readonly [v.PicklistSchema<[27, 28], undefined>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
    }, undefined>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components.">]>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components.">]>;
    /** Vault address (for vault trading). */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Vault address (for vault trading).">]>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "cancel";
        cancels: {
            a: number;
            o: number;
        }[];
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    vaultAddress?: `0x${string}` | undefined;
    expiresAfter?: number | undefined;
}, "Cancel order(s).">]>;
export type CancelRequest = v.InferOutput<typeof CancelRequest>;
/**
 * Response for order cancellation.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
export declare const CancelResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of response.">]>;
        /** Specific data. */
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Array of statuses for each canceled order. */
            readonly statuses: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.LiteralSchema<"success", undefined>, v.ObjectSchema<{
                /** Error message returned by the exchange. */
                readonly error: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message returned by the exchange.">]>;
            }, undefined>], undefined>, undefined>, v.DescriptionAction<("success" | {
                error: string;
            })[], "Array of statuses for each canceled order.">]>;
        }, undefined>, v.DescriptionAction<{
            statuses: ("success" | {
                error: string;
            })[];
        }, "Specific data.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "cancel";
        data: {
            statuses: ("success" | {
                error: string;
            })[];
        };
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "cancel";
        data: {
            statuses: ("success" | {
                error: string;
            })[];
        };
    };
}, "Response for order cancellation.">]>;
export type CancelResponse = v.InferOutput<typeof CancelResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const CancelParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of action.">]>;
    /** Orders to cancel by asset and order ID. */
    readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        /** Asset ID. */
        readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
        /** Order ID. */
        readonly o: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        a: number;
        o: number;
    }[], "Orders to cancel by asset and order ID.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of action.">]>;
        /** Orders to cancel by asset and order ID. */
        readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            /** Asset ID. */
            readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            /** Order ID. */
            readonly o: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            a: number;
            o: number;
        }[], "Orders to cancel by asset and order ID.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        cancels: {
            a: string | number;
            o: string | number;
        }[];
    }, {
        cancels: {
            a: number;
            o: number;
        }[];
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        cancels: {
            a: number;
            o: number;
        }[];
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>>;
    readonly "~types"?: {
        readonly input: {
            cancels: {
                a: string | number;
                o: string | number;
            }[];
        };
        readonly output: {
            cancels: {
                a: number;
                o: number;
            }[];
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>;
    } | undefined;
};
/** Action parameters for the {@linkcode cancel} function. */
export type CancelParameters = v.InferInput<typeof CancelParameters>;
/** Request options for the {@linkcode cancel} function. */
export type CancelOptions = ExtractRequestOptions<v.InferInput<typeof CancelRequest>>;
/** Successful variant of {@linkcode CancelResponse} without errors. */
export type CancelSuccessResponse = ExcludeErrorResponse<CancelResponse>;
/**
 * Cancel order(s).
 *
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 *
 * @returns Successful variant of {@link CancelResponse} without error statuses.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cancel } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await cancel(
 *   { transport, wallet },
 *   {
 *     cancels: [
 *       { a: 0, o: 123 },
 *     ],
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
export declare function cancel(config: ExchangeConfig, params: CancelParameters, opts?: CancelOptions): Promise<CancelSuccessResponse>;
export {};
//# sourceMappingURL=cancel.d.ts.map