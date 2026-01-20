import * as v from "valibot";
/**
 * Request L2 order book.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export declare const L2BookRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"l2Book", undefined>, v.DescriptionAction<"l2Book", "Type of request.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** Number of significant figures. */
    readonly nSigFigs: v.SchemaWithPipe<readonly [v.NullishSchema<v.PicklistSchema<[2, 3, 4, 5], undefined>, undefined>, v.DescriptionAction<2 | 3 | 4 | 5 | null | undefined, "Number of significant figures.">]>;
    /** Mantissa for aggregation (if `nSigFigs` is 5). */
    readonly mantissa: v.SchemaWithPipe<readonly [v.NullishSchema<v.PicklistSchema<[2, 5], undefined>, undefined>, v.DescriptionAction<2 | 5 | null | undefined, "Mantissa for aggregation (if `nSigFigs` is 5).">]>;
}, undefined>, v.DescriptionAction<{
    type: "l2Book";
    coin: string;
    nSigFigs?: 2 | 3 | 4 | 5 | null | undefined;
    mantissa?: 2 | 5 | null | undefined;
}, "Request L2 order book.">]>;
export type L2BookRequest = v.InferOutput<typeof L2BookRequest>;
/**
 * L2 order book snapshot or `null` if the market does not exist.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export declare const L2BookResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
    /** Asset symbol. */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    /** Timestamp of the snapshot (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp of the snapshot (in ms since epoch).">]>;
    /** Bid and ask levels (index 0 = bids, index 1 = asks). */
    readonly levels: v.SchemaWithPipe<readonly [v.TupleSchema<[v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Price. */
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Price.">]>;
        /** Total size. */
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total size.">]>;
        /** Number of individual orders. */
        readonly n: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of individual orders.">]>;
    }, undefined>, v.DescriptionAction<{
        px: string;
        sz: string;
        n: number;
    }, "L2 order book level.">]>, undefined>, v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Price. */
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Price.">]>;
        /** Total size. */
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total size.">]>;
        /** Number of individual orders. */
        readonly n: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of individual orders.">]>;
    }, undefined>, v.DescriptionAction<{
        px: string;
        sz: string;
        n: number;
    }, "L2 order book level.">]>, undefined>], undefined>, v.DescriptionAction<[{
        px: string;
        sz: string;
        n: number;
    }[], {
        px: string;
        sz: string;
        n: number;
    }[]], "Bid and ask levels (index 0 = bids, index 1 = asks).">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    coin: string;
    time: number;
    levels: [{
        px: string;
        sz: string;
        n: number;
    }[], {
        px: string;
        sz: string;
        n: number;
    }[]];
} | null, "L2 order book snapshot or `null` if the market does not exist.">]>;
export type L2BookResponse = v.InferOutput<typeof L2BookResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode l2Book} function. */
export type L2BookParameters = Omit<v.InferInput<typeof L2BookRequest>, "type">;
/**
 * Request L2 order book.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns L2 order book snapshot.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { l2Book } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await l2Book(
 *   { transport },
 *   { coin: "ETH", nSigFigs: 2 },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#l2-book-snapshot
 */
export declare function l2Book(config: InfoConfig, params: L2BookParameters, signal?: AbortSignal): Promise<L2BookResponse>;
//# sourceMappingURL=l2Book.d.ts.map