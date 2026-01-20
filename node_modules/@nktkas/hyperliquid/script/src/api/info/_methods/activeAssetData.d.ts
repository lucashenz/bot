import * as v from "valibot";
/**
 * Request user active asset data.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-active-asset-data
 */
export declare const ActiveAssetDataRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"activeAssetData", undefined>, v.DescriptionAction<"activeAssetData", "Type of request.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "activeAssetData";
    coin: string;
    user: `0x${string}`;
}, "Request user active asset data.">]>;
export type ActiveAssetDataRequest = v.InferOutput<typeof ActiveAssetDataRequest>;
/**
 * User active asset data.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-active-asset-data
 */
export declare const ActiveAssetDataResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Asset symbol (e.g., BTC). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
    /** Leverage configuration. */
    readonly leverage: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
        /** Leverage type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"isolated", undefined>, v.DescriptionAction<"isolated", "Leverage type.">]>;
        /** Leverage value used. */
        readonly value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Leverage value used.">]>;
        /** Amount of USD used (1 = $1). */
        readonly rawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount of USD used (1 = $1).">]>;
    }, undefined>, v.ObjectSchema<{
        /** Leverage type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cross", undefined>, v.DescriptionAction<"cross", "Leverage type.">]>;
        /** Leverage value used. */
        readonly value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Leverage value used.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "isolated";
        value: number;
        rawUsd: string;
    } | {
        type: "cross";
        value: number;
    }, "Leverage configuration.">]>;
    /** Maximum trade size range [min, max]. */
    readonly maxTradeSzs: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, v.DescriptionAction<[string, string], "Maximum trade size range [min, max].">]>;
    /** Available to trade range [min, max]. */
    readonly availableToTrade: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, v.DescriptionAction<[string, string], "Available to trade range [min, max].">]>;
    /** Mark price. */
    readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Mark price.">]>;
}, undefined>, v.DescriptionAction<{
    user: `0x${string}`;
    coin: string;
    leverage: {
        type: "isolated";
        value: number;
        rawUsd: string;
    } | {
        type: "cross";
        value: number;
    };
    maxTradeSzs: [string, string];
    availableToTrade: [string, string];
    markPx: string;
}, "User active asset data.">]>;
export type ActiveAssetDataResponse = v.InferOutput<typeof ActiveAssetDataResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode activeAssetData} function. */
export type ActiveAssetDataParameters = Omit<v.InferInput<typeof ActiveAssetDataRequest>, "type">;
/**
 * Request user active asset data.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns User active asset data.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { activeAssetData } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await activeAssetData(
 *   { transport },
 *   { user: "0x...", coin: "ETH" },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-active-asset-data
 */
export declare function activeAssetData(config: InfoConfig, params: ActiveAssetDataParameters, signal?: AbortSignal): Promise<ActiveAssetDataResponse>;
//# sourceMappingURL=activeAssetData.d.ts.map