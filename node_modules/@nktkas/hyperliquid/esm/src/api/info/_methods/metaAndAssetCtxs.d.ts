import * as v from "valibot";
/**
 * Request metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export declare const MetaAndAssetCtxsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"metaAndAssetCtxs", undefined>, v.DescriptionAction<"metaAndAssetCtxs", "Type of request.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "metaAndAssetCtxs";
    dex?: string | undefined;
}, "Request metadata and asset contexts.">]>;
export type MetaAndAssetCtxsRequest = v.InferOutput<typeof MetaAndAssetCtxsRequest>;
/**
 * Tuple containing metadata and array of asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export declare const MetaAndAssetCtxsResponse: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly universe: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum decimal places for order sizes.">]>;
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the universe.">]>;
        readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage.">]>;
        readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the margin requirements table.">]>;
        readonly onlyIsolated: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if only isolated margin trading is allowed.">]>;
        readonly isDelisted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if the universe is delisted.">]>;
        readonly marginMode: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<["strictIsolated", "noCross"], undefined>, undefined>, v.DescriptionAction<"strictIsolated" | "noCross" | undefined, "Trading margin mode constraint.">]>;
        readonly growthMode: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<"enabled", undefined>, undefined>, v.DescriptionAction<"enabled" | undefined, "Indicates if growth mode is enabled.">]>;
        readonly lastGrowthModeChangeTime: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<string | undefined, "Timestamp of the last growth mode change.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        szDecimals: number;
        name: string;
        maxLeverage: number;
        marginTableId: number;
        onlyIsolated?: true | undefined;
        isDelisted?: true | undefined;
        marginMode?: "strictIsolated" | "noCross" | undefined;
        growthMode?: "enabled" | undefined;
        lastGrowthModeChangeTime?: string | undefined;
    }[], "Trading universes available for perpetual trading.">]>;
    readonly marginTables: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Description of the margin table.">]>;
        readonly marginTiers: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly lowerBound: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Lower position size boundary for this tier.">]>;
            readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage for this tier.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            lowerBound: string;
            maxLeverage: number;
        }[], "Array of margin tiers defining leverage limits.">]>;
    }, undefined>, v.DescriptionAction<{
        description: string;
        marginTiers: {
            lowerBound: string;
            maxLeverage: number;
        }[];
    }, "Margin requirements table with multiple tiers.">]>], undefined>, undefined>, v.DescriptionAction<[number, {
        description: string;
        marginTiers: {
            lowerBound: string;
            maxLeverage: number;
        }[];
    }][], "Margin requirement tables for different leverage tiers.">]>;
    readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
}, undefined>, v.DescriptionAction<{
    universe: {
        szDecimals: number;
        name: string;
        maxLeverage: number;
        marginTableId: number;
        onlyIsolated?: true | undefined;
        isDelisted?: true | undefined;
        marginMode?: "strictIsolated" | "noCross" | undefined;
        growthMode?: "enabled" | undefined;
        lastGrowthModeChangeTime?: string | undefined;
    }[];
    marginTables: [number, {
        description: string;
        marginTiers: {
            lowerBound: string;
            maxLeverage: number;
        }[];
    }][];
    collateralToken: number;
}, "Metadata for perpetual assets.">]>, v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly prevDayPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Previous day's closing price.">]>;
    readonly dayNtlVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Daily notional volume.">]>;
    readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Mark price.">]>;
    readonly midPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<string | null, "Mid price.">]>;
    readonly funding: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Funding rate.">]>;
    readonly openInterest: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total open interest.">]>;
    readonly premium: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<string | null, "Premium price.">]>;
    readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Oracle price.">]>;
    readonly impactPxs: v.SchemaWithPipe<readonly [v.NullableSchema<v.ArraySchema<v.StringSchema<undefined>, undefined>, undefined>, v.DescriptionAction<string[] | null, "Array of impact prices.">]>;
    readonly dayBaseVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Daily volume in base currency.">]>;
}, undefined>, v.DescriptionAction<{
    prevDayPx: string;
    dayNtlVlm: string;
    markPx: string;
    midPx: string | null;
    funding: string;
    openInterest: string;
    premium: string | null;
    oraclePx: string;
    impactPxs: string[] | null;
    dayBaseVlm: string;
}, "Perpetual asset context.">]>, undefined>], undefined>, v.DescriptionAction<[{
    universe: {
        szDecimals: number;
        name: string;
        maxLeverage: number;
        marginTableId: number;
        onlyIsolated?: true | undefined;
        isDelisted?: true | undefined;
        marginMode?: "strictIsolated" | "noCross" | undefined;
        growthMode?: "enabled" | undefined;
        lastGrowthModeChangeTime?: string | undefined;
    }[];
    marginTables: [number, {
        description: string;
        marginTiers: {
            lowerBound: string;
            maxLeverage: number;
        }[];
    }][];
    collateralToken: number;
}, {
    prevDayPx: string;
    dayNtlVlm: string;
    markPx: string;
    midPx: string | null;
    funding: string;
    openInterest: string;
    premium: string | null;
    oraclePx: string;
    impactPxs: string[] | null;
    dayBaseVlm: string;
}[]], "Tuple containing metadata and array of asset contexts.">]>;
export type MetaAndAssetCtxsResponse = v.InferOutput<typeof MetaAndAssetCtxsResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode metaAndAssetCtxs} function. */
export type MetaAndAssetCtxsParameters = Omit<v.InferInput<typeof MetaAndAssetCtxsRequest>, "type">;
/**
 * Request metadata and asset contexts.
 *
 * @param config - General configuration for Info API requests.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Metadata and context for perpetual assets.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { metaAndAssetCtxs } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await metaAndAssetCtxs({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export declare function metaAndAssetCtxs(config: InfoConfig, params?: MetaAndAssetCtxsParameters, signal?: AbortSignal): Promise<MetaAndAssetCtxsResponse>;
export declare function metaAndAssetCtxs(config: InfoConfig, signal?: AbortSignal): Promise<MetaAndAssetCtxsResponse>;
//# sourceMappingURL=metaAndAssetCtxs.d.ts.map