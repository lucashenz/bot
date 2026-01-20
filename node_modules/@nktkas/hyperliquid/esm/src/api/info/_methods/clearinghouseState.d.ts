import * as v from "valibot";
/**
 * Request clearinghouse state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-perpetuals-account-summary
 */
export declare const ClearinghouseStateRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"clearinghouseState", undefined>, v.DescriptionAction<"clearinghouseState", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "clearinghouseState";
    user: `0x${string}`;
    dex?: string | undefined;
}, "Request clearinghouse state.">]>;
export type ClearinghouseStateRequest = v.InferOutput<typeof ClearinghouseStateRequest>;
/**
 * Account summary for perpetual trading.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-perpetuals-account-summary
 */
export declare const ClearinghouseStateResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Margin summary details. */
    readonly marginSummary: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Total account value. */
        readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total account value.">]>;
        /** Total notional position value. */
        readonly totalNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total notional position value.">]>;
        /** Total raw USD value. */
        readonly totalRawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total raw USD value.">]>;
        /** Total margin used. */
        readonly totalMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total margin used.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValue: string;
        totalNtlPos: string;
        totalRawUsd: string;
        totalMarginUsed: string;
    }, "Margin summary details.">]>;
    /** Cross-margin summary details. */
    readonly crossMarginSummary: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Total account value. */
        readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total account value.">]>;
        /** Total notional position value. */
        readonly totalNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total notional position value.">]>;
        /** Total raw USD value. */
        readonly totalRawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total raw USD value.">]>;
        /** Total margin used. */
        readonly totalMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total margin used.">]>;
    }, undefined>, v.DescriptionAction<{
        accountValue: string;
        totalNtlPos: string;
        totalRawUsd: string;
        totalMarginUsed: string;
    }, "Cross-margin summary details.">]>;
    /** Maintenance margin used for cross-margin positions. */
    readonly crossMaintenanceMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Maintenance margin used for cross-margin positions.">]>;
    /** Amount available for withdrawal. */
    readonly withdrawable: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount available for withdrawal.">]>;
    /** Array of asset positions. */
    readonly assetPositions: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        /** Position type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"oneWay", undefined>, v.DescriptionAction<"oneWay", "Position type.">]>;
        /** Position details. */
        readonly position: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Asset symbol. */
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            /** Signed position size. */
            readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Signed position size.">]>;
            /** Leverage details. */
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
            }, "Leverage details.">]>;
            /** Average entry price. */
            readonly entryPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Average entry price.">]>;
            /** Position value. */
            readonly positionValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Position value.">]>;
            /** Unrealized profit and loss. */
            readonly unrealizedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Unrealized profit and loss.">]>;
            /** Return on equity. */
            readonly returnOnEquity: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Return on equity.">]>;
            /** Liquidation price. */
            readonly liquidationPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<string | null, "Liquidation price.">]>;
            /** Margin used. */
            readonly marginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Margin used.">]>;
            /** Maximum allowed leverage. */
            readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage.">]>;
            /** Cumulative funding details. */
            readonly cumFunding: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Total funding paid or received since account opening. */
                readonly allTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total funding paid or received since account opening.">]>;
                /** Funding accumulated since the position was opened. */
                readonly sinceOpen: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Funding accumulated since the position was opened.">]>;
                /** Funding accumulated since the last change in position size. */
                readonly sinceChange: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Funding accumulated since the last change in position size.">]>;
            }, undefined>, v.DescriptionAction<{
                allTime: string;
                sinceOpen: string;
                sinceChange: string;
            }, "Cumulative funding details.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            szi: string;
            leverage: {
                type: "isolated";
                value: number;
                rawUsd: string;
            } | {
                type: "cross";
                value: number;
            };
            entryPx: string;
            positionValue: string;
            unrealizedPnl: string;
            returnOnEquity: string;
            liquidationPx: string | null;
            marginUsed: string;
            maxLeverage: number;
            cumFunding: {
                allTime: string;
                sinceOpen: string;
                sinceChange: string;
            };
        }, "Position details.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        type: "oneWay";
        position: {
            coin: string;
            szi: string;
            leverage: {
                type: "isolated";
                value: number;
                rawUsd: string;
            } | {
                type: "cross";
                value: number;
            };
            entryPx: string;
            positionValue: string;
            unrealizedPnl: string;
            returnOnEquity: string;
            liquidationPx: string | null;
            marginUsed: string;
            maxLeverage: number;
            cumFunding: {
                allTime: string;
                sinceOpen: string;
                sinceChange: string;
            };
        };
    }[], "Array of asset positions.">]>;
    /** Timestamp when data was retrieved (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when data was retrieved (in ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    marginSummary: {
        accountValue: string;
        totalNtlPos: string;
        totalRawUsd: string;
        totalMarginUsed: string;
    };
    crossMarginSummary: {
        accountValue: string;
        totalNtlPos: string;
        totalRawUsd: string;
        totalMarginUsed: string;
    };
    crossMaintenanceMarginUsed: string;
    withdrawable: string;
    assetPositions: {
        type: "oneWay";
        position: {
            coin: string;
            szi: string;
            leverage: {
                type: "isolated";
                value: number;
                rawUsd: string;
            } | {
                type: "cross";
                value: number;
            };
            entryPx: string;
            positionValue: string;
            unrealizedPnl: string;
            returnOnEquity: string;
            liquidationPx: string | null;
            marginUsed: string;
            maxLeverage: number;
            cumFunding: {
                allTime: string;
                sinceOpen: string;
                sinceChange: string;
            };
        };
    }[];
    time: number;
}, "Account summary for perpetual trading.">]>;
export type ClearinghouseStateResponse = v.InferOutput<typeof ClearinghouseStateResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode clearinghouseState} function. */
export type ClearinghouseStateParameters = Omit<v.InferInput<typeof ClearinghouseStateRequest>, "type">;
/**
 * Request clearinghouse state.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Account summary for perpetual trading.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { clearinghouseState } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await clearinghouseState(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-perpetuals-account-summary
 */
export declare function clearinghouseState(config: InfoConfig, params: ClearinghouseStateParameters, signal?: AbortSignal): Promise<ClearinghouseStateResponse>;
//# sourceMappingURL=clearinghouseState.d.ts.map