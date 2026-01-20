import * as v from "valibot";
/**
 * Request transaction details by transaction hash.
 */
export declare const TxDetailsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"txDetails", undefined>, v.DescriptionAction<"txDetails", "Type of request.">]>;
    /** Transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Transaction hash.">]>;
}, undefined>, v.DescriptionAction<{
    type: "txDetails";
    hash: `0x${string}`;
}, "Request transaction details by transaction hash.">]>;
export type TxDetailsRequest = v.InferOutput<typeof TxDetailsRequest>;
/**
 * Response with transaction details.
 */
export declare const TxDetailsResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Response type. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"txDetails", undefined>, v.DescriptionAction<"txDetails", "Response type.">]>;
    /** Transaction details. */
    readonly tx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly action: v.SchemaWithPipe<readonly [v.LooseObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Action type.">]>;
        }, undefined>, v.DescriptionAction<{
            type: string;
        } & {
            [key: string]: unknown;
        }, "Action performed in transaction.">]>;
        readonly block: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block number where transaction was included.">]>;
        readonly error: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Error message if transaction failed.">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Transaction hash.">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Transaction creation timestamp.">]>;
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Creator's address.">]>;
    }, undefined>, v.DescriptionAction<{
        action: {
            type: string;
        } & {
            [key: string]: unknown;
        };
        block: number;
        error: string | null;
        hash: `0x${string}`;
        time: number;
        user: `0x${string}`;
    }, "Explorer transaction.">]>, v.DescriptionAction<{
        action: {
            type: string;
        } & {
            [key: string]: unknown;
        };
        block: number;
        error: string | null;
        hash: `0x${string}`;
        time: number;
        user: `0x${string}`;
    }, "Transaction details.">]>;
}, undefined>, v.DescriptionAction<{
    type: "txDetails";
    tx: {
        action: {
            type: string;
        } & {
            [key: string]: unknown;
        };
        block: number;
        error: string | null;
        hash: `0x${string}`;
        time: number;
        user: `0x${string}`;
    };
}, "Response with transaction details.">]>;
export type TxDetailsResponse = v.InferOutput<typeof TxDetailsResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode txDetails} function. */
export type TxDetailsParameters = Omit<v.InferInput<typeof TxDetailsRequest>, "type">;
/**
 * Request transaction details by transaction hash.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Transaction details.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { txDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 * const data = await txDetails(
 *   { transport },
 *   { hash: "0x..." },
 * );
 * ```
 */
export declare function txDetails(config: InfoConfig, params: TxDetailsParameters, signal?: AbortSignal): Promise<TxDetailsResponse>;
//# sourceMappingURL=txDetails.d.ts.map