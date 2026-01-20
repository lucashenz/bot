import * as v from "valibot";
/** Subscription to user historical orders for a specific user. */
export declare const UserHistoricalOrdersRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userHistoricalOrders", undefined>, v.DescriptionAction<"userHistoricalOrders", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userHistoricalOrders";
    user: `0x${string}`;
}, "Subscription to user historical orders for a specific user.">]>;
export type UserHistoricalOrdersRequest = v.InferOutput<typeof UserHistoricalOrdersRequest>;
/** Event of user historical orders. */
export declare const UserHistoricalOrdersEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Array of frontend orders with current processing status. */
    readonly orderHistory: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly order: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly side: v.SchemaWithPipe<readonly [v.PicklistSchema<["B", "A"], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
            readonly limitPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Limit price.">]>;
            readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Size.">]>;
            readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
            readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the order was placed (in ms since epoch).">]>;
            readonly origSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Original size at order placement.">]>;
            readonly triggerCondition: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Condition for triggering the order.">]>;
            readonly isTrigger: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is a trigger order.">]>;
            readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Trigger price.">]>;
            readonly children: v.SchemaWithPipe<readonly [v.ArraySchema<v.UnknownSchema, undefined>, v.DescriptionAction<unknown[], "Child orders associated with this order.">]>;
            readonly isPositionTpsl: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is a position TP/SL order.">]>;
            readonly reduceOnly: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates whether the order is reduce-only.">]>;
            readonly orderType: v.SchemaWithPipe<readonly [v.PicklistSchema<["Market", "Limit", "Stop Market", "Stop Limit", "Take Profit Market", "Take Profit Limit"], undefined>, v.DescriptionAction<"Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit", string>]>;
            readonly tif: v.SchemaWithPipe<readonly [v.NullableSchema<v.PicklistSchema<["Gtc", "Ioc", "Alo", "FrontendMarket", "LiquidationMarket"], undefined>, undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null, string>]>;
            readonly cloid: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Client Order ID.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: unknown[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        }, "Open order with additional display information.">]>, v.DescriptionAction<{
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: unknown[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        }, "Open order with additional display information.">]>;
        readonly status: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["open", "filled", "canceled", "triggered", "rejected", "marginCanceled", "vaultWithdrawalCanceled", "openInterestCapCanceled", "selfTradeCanceled", "reduceOnlyCanceled", "siblingFilledCanceled", "delistedCanceled", "liquidatedCanceled", "scheduledCancel", "tickRejected", "minTradeNtlRejected", "perpMarginRejected", "reduceOnlyRejected", "badAloPxRejected", "iocCancelRejected", "badTriggerPxRejected", "marketOrderNoLiquidityRejected", "positionIncreaseAtOpenInterestCapRejected", "positionFlipAtOpenInterestCapRejected", "tooAggressiveAtOpenInterestCapRejected", "openInterestIncreaseRejected", "insufficientSpotBalanceRejected", "oracleRejected", "perpMaxPositionRejected"], undefined>, v.DescriptionAction<"open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected", string>]>, v.DescriptionAction<"open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected", string>]>;
        readonly statusTimestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the status was last updated (in ms since epoch).">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        order: {
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: unknown[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        };
        status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
        statusTimestamp: number;
    }[], "Array of frontend orders with current processing status.">]>, v.DescriptionAction<{
        order: {
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: unknown[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        };
        status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
        statusTimestamp: number;
    }[], "Array of frontend orders with current processing status.">]>;
    /** Whether this is an initial snapshot. */
    readonly isSnapshot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Whether this is an initial snapshot.">]>;
}, undefined>, v.DescriptionAction<{
    user: `0x${string}`;
    orderHistory: {
        order: {
            coin: string;
            side: "B" | "A";
            limitPx: string;
            sz: string;
            oid: number;
            timestamp: number;
            origSz: string;
            triggerCondition: string;
            isTrigger: boolean;
            triggerPx: string;
            children: unknown[];
            isPositionTpsl: boolean;
            reduceOnly: boolean;
            orderType: "Market" | "Limit" | "Stop Market" | "Stop Limit" | "Take Profit Market" | "Take Profit Limit";
            tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket" | null;
            cloid: `0x${string}` | null;
        };
        status: "open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected";
        statusTimestamp: number;
    }[];
    isSnapshot?: true | undefined;
}, "Event of user historical orders.">]>;
export type UserHistoricalOrdersEvent = v.InferOutput<typeof UserHistoricalOrdersEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/** Request parameters for the {@linkcode userHistoricalOrders} function. */
export type UserHistoricalOrdersParameters = Omit<v.InferInput<typeof UserHistoricalOrdersRequest>, "type">;
/**
 * Subscribe to historical order updates for a specific user.
 *
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 *
 * @returns A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { userHistoricalOrders } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await userHistoricalOrders(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function userHistoricalOrders(config: SubscriptionConfig, params: UserHistoricalOrdersParameters, listener: (data: UserHistoricalOrdersEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=userHistoricalOrders.d.ts.map