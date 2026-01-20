import * as v from "valibot";
/**
 * Request user sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
export declare const SubAccountsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccounts", undefined>, v.DescriptionAction<"subAccounts", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "subAccounts";
    user: `0x${string}`;
}, "Request user sub-accounts.">]>;
export type SubAccountsRequest = v.InferOutput<typeof SubAccountsRequest>;
/**
 * Array of user sub-account or null if the user does not have any sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
export declare const SubAccountsResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.ArraySchema<v.ObjectSchema<{
    /** Sub-account name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.NonEmptyAction<string, undefined>, v.DescriptionAction<string, "Sub-account name.">]>;
    /** Sub-account address. */
    readonly subAccountUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-account address.">]>;
    /** Master account address. */
    readonly master: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Master account address.">]>;
    /** Perpetual trading clearinghouse state summary. */
    readonly clearinghouseState: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly marginSummary: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total account value.">]>;
            readonly totalNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total notional position value.">]>;
            readonly totalRawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total raw USD value.">]>;
            readonly totalMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total margin used.">]>;
        }, undefined>, v.DescriptionAction<{
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        }, "Margin summary details.">]>;
        readonly crossMarginSummary: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total account value.">]>;
            readonly totalNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total notional position value.">]>;
            readonly totalRawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total raw USD value.">]>;
            readonly totalMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total margin used.">]>;
        }, undefined>, v.DescriptionAction<{
            accountValue: string;
            totalNtlPos: string;
            totalRawUsd: string;
            totalMarginUsed: string;
        }, "Cross-margin summary details.">]>;
        readonly crossMaintenanceMarginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Maintenance margin used for cross-margin positions.">]>;
        readonly withdrawable: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount available for withdrawal.">]>;
        readonly assetPositions: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"oneWay", undefined>, v.DescriptionAction<"oneWay", "Position type.">]>;
            readonly position: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
                readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Signed position size.">]>;
                readonly leverage: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
                    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"isolated", undefined>, v.DescriptionAction<"isolated", "Leverage type.">]>;
                    readonly value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Leverage value used.">]>;
                    readonly rawUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount of USD used (1 = $1).">]>;
                }, undefined>, v.ObjectSchema<{
                    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cross", undefined>, v.DescriptionAction<"cross", "Leverage type.">]>;
                    readonly value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Leverage value used.">]>;
                }, undefined>], undefined>, v.DescriptionAction<{
                    type: "isolated";
                    value: number;
                    rawUsd: string;
                } | {
                    type: "cross";
                    value: number;
                }, "Leverage details.">]>;
                readonly entryPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Average entry price.">]>;
                readonly positionValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Position value.">]>;
                readonly unrealizedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Unrealized profit and loss.">]>;
                readonly returnOnEquity: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Return on equity.">]>;
                readonly liquidationPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<string | null, "Liquidation price.">]>;
                readonly marginUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Margin used.">]>;
                readonly maxLeverage: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Maximum allowed leverage.">]>;
                readonly cumFunding: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    readonly allTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total funding paid or received since account opening.">]>;
                    readonly sinceOpen: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Funding accumulated since the position was opened.">]>;
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
    }, "Account summary for perpetual trading.">]>, v.DescriptionAction<{
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
    }, "Perpetual trading clearinghouse state summary.">]>;
    /** Spot tokens clearinghouse state. */
    readonly spotState: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly balances: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the token.">]>;
            readonly total: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total balance.">]>;
            readonly hold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount on hold.">]>;
            readonly entryNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Entry notional value.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }[], "Array of available token balances.">]>;
        readonly evmEscrows: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique identifier for the token.">]>;
            readonly total: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total balance.">]>;
        }, undefined>, undefined>, undefined>, v.DescriptionAction<{
            coin: string;
            token: number;
            total: string;
        }[] | undefined, "Array of escrowed balances.">]>;
    }, undefined>, v.DescriptionAction<{
        balances: {
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }[];
        evmEscrows?: {
            coin: string;
            token: number;
            total: string;
        }[] | undefined;
    }, "Account summary for spot trading.">]>, v.DescriptionAction<{
        balances: {
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }[];
        evmEscrows?: {
            coin: string;
            token: number;
            total: string;
        }[] | undefined;
    }, "Spot tokens clearinghouse state.">]>;
}, undefined>, undefined>, undefined>, v.DescriptionAction<{
    name: string;
    subAccountUser: `0x${string}`;
    master: `0x${string}`;
    clearinghouseState: {
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
    };
    spotState: {
        balances: {
            coin: string;
            token: number;
            total: string;
            hold: string;
            entryNtl: string;
        }[];
        evmEscrows?: {
            coin: string;
            token: number;
            total: string;
        }[] | undefined;
    };
}[] | null, "Array of user sub-account or null if the user does not have any sub-accounts.">]>;
export type SubAccountsResponse = v.InferOutput<typeof SubAccountsResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode subAccounts} function. */
export type SubAccountsParameters = Omit<v.InferInput<typeof SubAccountsRequest>, "type">;
/**
 * Request user sub-accounts.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of user sub-account or null if the user does not have any sub-accounts.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { subAccounts } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await subAccounts(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-subaccounts
 */
export declare function subAccounts(config: InfoConfig, params: SubAccountsParameters, signal?: AbortSignal): Promise<SubAccountsResponse>;
//# sourceMappingURL=subAccounts.d.ts.map