import * as v from "valibot";
/**
 * Request block details by block height.
 */
export declare const BlockDetailsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"blockDetails", undefined>, v.DescriptionAction<"blockDetails", "Type of request.">]>;
    /** Block height. */
    readonly height: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block height.">]>;
}, undefined>, v.DescriptionAction<{
    type: "blockDetails";
    height: number;
}, "Request block details by block height.">]>;
export type BlockDetailsRequest = v.InferOutput<typeof BlockDetailsRequest>;
/**
 * Response containing block information.
 */
export declare const BlockDetailsResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of response. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"blockDetails", undefined>, v.DescriptionAction<"blockDetails", "Type of response.">]>;
    /** The details of a block. */
    readonly blockDetails: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Block creation timestamp. */
        readonly blockTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block creation timestamp.">]>;
        /** Block hash. */
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Block hash.">]>;
        /** Block height in chain. */
        readonly height: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block height in chain.">]>;
        /** Total transactions in block. */
        readonly numTxs: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Total transactions in block.">]>;
        /** Block proposer address. */
        readonly proposer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Block proposer address.">]>;
        /** Array of transactions in the block. */
        readonly txs: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
        }, "Explorer transaction.">]>, undefined>, v.DescriptionAction<{
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
        }[], "Array of transactions in the block.">]>;
    }, undefined>, v.DescriptionAction<{
        blockTime: number;
        hash: `0x${string}`;
        height: number;
        numTxs: number;
        proposer: `0x${string}`;
        txs: {
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
        }[];
    }, "The details of a block.">]>;
}, undefined>, v.DescriptionAction<{
    type: "blockDetails";
    blockDetails: {
        blockTime: number;
        hash: `0x${string}`;
        height: number;
        numTxs: number;
        proposer: `0x${string}`;
        txs: {
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
        }[];
    };
}, "Response containing block information.">]>;
export type BlockDetailsResponse = v.InferOutput<typeof BlockDetailsResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode blockDetails} function. */
export type BlockDetailsParameters = Omit<v.InferInput<typeof BlockDetailsRequest>, "type">;
/**
 * Request block details by block height.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Response containing block information.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { blockDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // only `HttpTransport` supports this API
 * const data = await blockDetails(
 *   { transport },
 *   { height: 123 },
 * );
 * ```
 */
export declare function blockDetails(config: InfoConfig, params: BlockDetailsParameters, signal?: AbortSignal): Promise<BlockDetailsResponse>;
//# sourceMappingURL=blockDetails.d.ts.map