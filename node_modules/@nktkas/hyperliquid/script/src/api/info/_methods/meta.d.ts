import * as v from "valibot";
/**
 * Request trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export declare const MetaRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"meta", undefined>, v.DescriptionAction<"meta", "Type of request.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "meta";
    dex?: string | undefined;
}, "Request trading metadata.">]>;
export type MetaRequest = v.InferOutput<typeof MetaRequest>;
/**
 * Metadata for perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export declare const MetaResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Trading universes available for perpetual trading. */
    readonly universe: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        /** Minimum decimal places for order sizes. */
        readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Minimum decimal places for order sizes.">]>;
        /** Name of the universe. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the universe.">]>;
        /** Maximum allowed leverage. */
        readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage.">]>;
        /** Unique identifier for the margin requirements table. */
        readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the margin requirements table.">]>;
        /** Indicates if only isolated margin trading is allowed. */
        readonly onlyIsolated: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if only isolated margin trading is allowed.">]>;
        /** Indicates if the universe is delisted. */
        readonly isDelisted: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Indicates if the universe is delisted.">]>;
        /** Trading margin mode constraint. */
        readonly marginMode: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<["strictIsolated", "noCross"], undefined>, undefined>, v.DescriptionAction<"strictIsolated" | "noCross" | undefined, "Trading margin mode constraint.">]>;
        /** Indicates if growth mode is enabled. */
        readonly growthMode: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<"enabled", undefined>, undefined>, v.DescriptionAction<"enabled" | undefined, "Indicates if growth mode is enabled.">]>;
        /** Timestamp of the last growth mode change. */
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
    /** Margin requirement tables for different leverage tiers. */
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
    /** Collateral token index. */
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
}, "Metadata for perpetual assets.">]>;
export type MetaResponse = v.InferOutput<typeof MetaResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode meta} function. */
export type MetaParameters = Omit<v.InferInput<typeof MetaRequest>, "type">;
/**
 * Request trading metadata.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Metadata for perpetual assets.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { meta } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await meta({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
export declare function meta(config: InfoConfig, params?: MetaParameters, signal?: AbortSignal): Promise<MetaResponse>;
export declare function meta(config: InfoConfig, signal?: AbortSignal): Promise<MetaResponse>;
//# sourceMappingURL=meta.d.ts.map