import * as v from "valibot";
/**
 * Request order status.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
export declare const OrderStatusRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"orderStatus", undefined>, v.DescriptionAction<"orderStatus", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Order ID or Client Order ID. */
    readonly oid: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>, v.DescriptionAction<number | `0x${string}`, "Order ID or Client Order ID.">]>;
}, undefined>, v.DescriptionAction<{
    type: "orderStatus";
    user: `0x${string}`;
    oid: number | `0x${string}`;
}, "Request order status.">]>;
export type OrderStatusRequest = v.InferOutput<typeof OrderStatusRequest>;
/**
 * Order status response.
 * - If the order is found, returns detailed order information and its current status.
 * - If the order is not found, returns a status of "unknownOid".
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
export declare const OrderStatusResponse: v.SchemaWithPipe<readonly [v.VariantSchema<"status", [v.ObjectSchema<{
    /** Indicates that the order was found. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"order", undefined>, v.DescriptionAction<"order", "Indicates that the order was found.">]>;
    /** Order status details. */
    readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Open order with additional display information. */
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
        /**
         * Order processing status.
         * - `"open"`: Order active and waiting to be filled.
         * - `"filled"`: Order fully executed.
         * - `"canceled"`: Order canceled by the user.
         * - `"triggered"`: Order triggered and awaiting execution.
         * - `"rejected"`: Order rejected by the system.
         * - `"marginCanceled"`: Order canceled due to insufficient margin.
         * - `"vaultWithdrawalCanceled"`: Canceled due to a user withdrawal from vault.
         * - `"openInterestCapCanceled"`: Canceled due to order being too aggressive when open interest was at cap.
         * - `"selfTradeCanceled"`: Canceled due to self-trade prevention.
         * - `"reduceOnlyCanceled"`: Canceled reduced-only order that does not reduce position.
         * - `"siblingFilledCanceled"`: Canceled due to sibling ordering being filled.
         * - `"delistedCanceled"`: Canceled due to asset delisting.
         * - `"liquidatedCanceled"`: Canceled due to liquidation.
         * - `"scheduledCancel"`: Canceled due to exceeding scheduled cancel deadline (dead man's switch).
         * - `"tickRejected"`: Rejected due to invalid tick price.
         * - `"minTradeNtlRejected"`: Rejected due to order notional below minimum.
         * - `"perpMarginRejected"`: Rejected due to insufficient margin.
         * - `"reduceOnlyRejected"`: Rejected due to reduce only.
         * - `"badAloPxRejected"`: Rejected due to post-only immediate match.
         * - `"iocCancelRejected"`: Rejected due to IOC not able to match.
         * - `"badTriggerPxRejected"`: Rejected due to invalid TP/SL price.
         * - `"marketOrderNoLiquidityRejected"`: Rejected due to lack of liquidity for market order.
         * - `"positionIncreaseAtOpenInterestCapRejected"`: Rejected due to open interest cap.
         * - `"positionFlipAtOpenInterestCapRejected"`: Rejected due to open interest cap.
         * - `"tooAggressiveAtOpenInterestCapRejected"`: Rejected due to price too aggressive at open interest cap.
         * - `"openInterestIncreaseRejected"`: Rejected due to open interest cap.
         * - `"insufficientSpotBalanceRejected"`: Rejected due to insufficient spot balance.
         * - `"oracleRejected"`: Rejected due to price too far from oracle.
         * - `"perpMaxPositionRejected"`: Rejected due to exceeding margin tier limit at current leverage.
         */
        readonly status: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["open", "filled", "canceled", "triggered", "rejected", "marginCanceled", "vaultWithdrawalCanceled", "openInterestCapCanceled", "selfTradeCanceled", "reduceOnlyCanceled", "siblingFilledCanceled", "delistedCanceled", "liquidatedCanceled", "scheduledCancel", "tickRejected", "minTradeNtlRejected", "perpMarginRejected", "reduceOnlyRejected", "badAloPxRejected", "iocCancelRejected", "badTriggerPxRejected", "marketOrderNoLiquidityRejected", "positionIncreaseAtOpenInterestCapRejected", "positionFlipAtOpenInterestCapRejected", "tooAggressiveAtOpenInterestCapRejected", "openInterestIncreaseRejected", "insufficientSpotBalanceRejected", "oracleRejected", "perpMaxPositionRejected"], undefined>, v.DescriptionAction<"open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected", string>]>, v.DescriptionAction<"open" | "filled" | "canceled" | "triggered" | "rejected" | "marginCanceled" | "vaultWithdrawalCanceled" | "openInterestCapCanceled" | "selfTradeCanceled" | "reduceOnlyCanceled" | "siblingFilledCanceled" | "delistedCanceled" | "liquidatedCanceled" | "scheduledCancel" | "tickRejected" | "minTradeNtlRejected" | "perpMarginRejected" | "reduceOnlyRejected" | "badAloPxRejected" | "iocCancelRejected" | "badTriggerPxRejected" | "marketOrderNoLiquidityRejected" | "positionIncreaseAtOpenInterestCapRejected" | "positionFlipAtOpenInterestCapRejected" | "tooAggressiveAtOpenInterestCapRejected" | "openInterestIncreaseRejected" | "insufficientSpotBalanceRejected" | "oracleRejected" | "perpMaxPositionRejected", string>]>;
        /** Timestamp when the status was last updated (in ms since epoch). */
        readonly statusTimestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the status was last updated (in ms since epoch).">]>;
    }, undefined>, v.DescriptionAction<{
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
    }, "Order status details.">]>;
}, undefined>, v.ObjectSchema<{
    /** Indicates that the order was not found. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"unknownOid", undefined>, v.DescriptionAction<"unknownOid", "Indicates that the order was not found.">]>;
}, undefined>], undefined>, v.DescriptionAction<{
    status: "order";
    order: {
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
    };
} | {
    status: "unknownOid";
}, string>]>;
export type OrderStatusResponse = v.InferOutput<typeof OrderStatusResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode orderStatus} function. */
export type OrderStatusParameters = Omit<v.InferInput<typeof OrderStatusRequest>, "type">;
/**
 * Request order status.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Order status response.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { orderStatus } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await orderStatus(
 *   { transport },
 *   { user: "0x...", oid: 12345 },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-order-status-by-oid-or-cloid
 */
export declare function orderStatus(config: InfoConfig, params: OrderStatusParameters, signal?: AbortSignal): Promise<OrderStatusResponse>;
//# sourceMappingURL=orderStatus.d.ts.map