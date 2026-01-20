import * as v from "valibot";
/**
 * Cancel order(s) by cloid.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
 */
export declare const CancelByCloidRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancelByCloid", undefined>, v.DescriptionAction<"cancelByCloid", "Type of action.">]>;
        /** Orders to cancel by asset and client order ID. */
        readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            /** Asset ID. */
            readonly asset: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            /** Client Order ID. */
            readonly cloid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, v.DescriptionAction<`0x${string}`, "Client Order ID.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            asset: number;
            cloid: `0x${string}`;
        }[], "Orders to cancel by asset and client order ID.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "cancelByCloid";
        cancels: {
            asset: number;
            cloid: `0x${string}`;
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
        type: "cancelByCloid";
        cancels: {
            asset: number;
            cloid: `0x${string}`;
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
}, "Cancel order(s) by cloid.">]>;
export type CancelByCloidRequest = v.InferOutput<typeof CancelByCloidRequest>;
/**
 * Response for order cancellation by cloid.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
 */
export declare const CancelByCloidResponse: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancel", undefined>, v.DescriptionAction<"cancel", "Type of response.">]>;
        readonly data: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly statuses: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnionSchema<[v.LiteralSchema<"success", undefined>, v.ObjectSchema<{
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
}, "Response for order cancellation.">]>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "cancel";
        data: {
            statuses: ("success" | {
                error: string;
            })[];
        };
    };
}, "Response for order cancellation by cloid.">]>;
export type CancelByCloidResponse = v.InferOutput<typeof CancelByCloidResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const CancelByCloidParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancelByCloid", undefined>, v.DescriptionAction<"cancelByCloid", "Type of action.">]>;
    /** Orders to cancel by asset and client order ID. */
    readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        /** Asset ID. */
        readonly asset: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
        /** Client Order ID. */
        readonly cloid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, v.DescriptionAction<`0x${string}`, "Client Order ID.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        asset: number;
        cloid: `0x${string}`;
    }[], "Orders to cancel by asset and client order ID.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cancelByCloid", undefined>, v.DescriptionAction<"cancelByCloid", "Type of action.">]>;
        /** Orders to cancel by asset and client order ID. */
        readonly cancels: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            /** Asset ID. */
            readonly asset: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            /** Client Order ID. */
            readonly cloid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, v.DescriptionAction<`0x${string}`, "Client Order ID.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            asset: number;
            cloid: `0x${string}`;
        }[], "Orders to cancel by asset and client order ID.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        cancels: {
            asset: string | number;
            cloid: string;
        }[];
    }, {
        cancels: {
            asset: number;
            cloid: `0x${string}`;
        }[];
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        cancels: {
            asset: number;
            cloid: `0x${string}`;
        }[];
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 34>>;
    readonly "~types"?: {
        readonly input: {
            cancels: {
                asset: string | number;
                cloid: string;
            }[];
        };
        readonly output: {
            cancels: {
                asset: number;
                cloid: `0x${string}`;
            }[];
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 34>;
    } | undefined;
};
/** Action parameters for the {@linkcode cancelByCloid} function. */
export type CancelByCloidParameters = v.InferInput<typeof CancelByCloidParameters>;
/** Request options for the {@linkcode cancelByCloid} function. */
export type CancelByCloidOptions = ExtractRequestOptions<v.InferInput<typeof CancelByCloidRequest>>;
/** Successful variant of {@linkcode CancelByCloidResponse} without errors. */
export type CancelByCloidSuccessResponse = ExcludeErrorResponse<CancelByCloidResponse>;
/**
 * Cancel order(s) by cloid.
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
 * import { cancelByCloid } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await cancelByCloid(
 *   { transport, wallet },
 *   {
 *     cancels: [
 *       { asset: 0, cloid: "0x..." },
 *     ],
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s-by-cloid
 */
export declare function cancelByCloid(config: ExchangeConfig, params: CancelByCloidParameters, opts?: CancelByCloidOptions): Promise<CancelByCloidSuccessResponse>;
export {};
//# sourceMappingURL=cancelByCloid.d.ts.map