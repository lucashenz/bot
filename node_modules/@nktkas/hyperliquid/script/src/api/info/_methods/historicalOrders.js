"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricalOrdersResponse = exports.HistoricalOrdersRequest = void 0;
exports.historicalOrders = historicalOrders;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Request user historical orders.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-historical-orders
 */
exports.HistoricalOrdersRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("historicalOrders"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Request user historical orders."));
})();
/**
 * Array of frontend orders with current processing status.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-historical-orders
 */
exports.HistoricalOrdersResponse = (() => {
    return v.pipe(v.array(v.object({
        /** Open order with additional display information. */
        order: v.pipe(commonSchemas_js_1.FrontendOpenOrderSchema, v.description("Open order with additional display information.")),
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
        status: v.pipe(commonSchemas_js_1.OrderProcessingStatusSchema, v.description("Order processing status." +
            '\n- `"open"`: Order active and waiting to be filled.' +
            '\n- `"filled"`: Order fully executed.' +
            '\n- `"canceled"`: Order canceled by the user.' +
            '\n- `"triggered"`: Order triggered and awaiting execution.' +
            '\n- `"rejected"`: Order rejected by the system.' +
            '\n- `"marginCanceled"`: Order canceled due to insufficient margin.' +
            '\n- `"vaultWithdrawalCanceled"`: Canceled due to a user withdrawal from vault.' +
            '\n- `"openInterestCapCanceled"`: Canceled due to order being too aggressive when open interest was at cap.' +
            '\n- `"selfTradeCanceled"`: Canceled due to self-trade prevention.' +
            '\n- `"reduceOnlyCanceled"`: Canceled reduced-only order that does not reduce position.' +
            '\n- `"siblingFilledCanceled"`: Canceled due to sibling ordering being filled.' +
            '\n- `"delistedCanceled"`: Canceled due to asset delisting.' +
            '\n- `"liquidatedCanceled"`: Canceled due to liquidation.' +
            '\n- `"scheduledCancel"`: Canceled due to exceeding scheduled cancel deadline (dead man\'s switch).' +
            '\n- `"tickRejected"`: Rejected due to invalid tick price.' +
            '\n- `"minTradeNtlRejected"`: Rejected due to order notional below minimum.' +
            '\n- `"perpMarginRejected"`: Rejected due to insufficient margin.' +
            '\n- `"reduceOnlyRejected"`: Rejected due to reduce only.' +
            '\n- `"badAloPxRejected"`: Rejected due to post-only immediate match.' +
            '\n- `"iocCancelRejected"`: Rejected due to IOC not able to match.' +
            '\n- `"badTriggerPxRejected"`: Rejected due to invalid TP/SL price.' +
            '\n- `"marketOrderNoLiquidityRejected"`: Rejected due to lack of liquidity for market order.' +
            '\n- `"positionIncreaseAtOpenInterestCapRejected"`: Rejected due to open interest cap.' +
            '\n- `"positionFlipAtOpenInterestCapRejected"`: Rejected due to open interest cap.' +
            '\n- `"tooAggressiveAtOpenInterestCapRejected"`: Rejected due to price too aggressive at open interest cap.' +
            '\n- `"openInterestIncreaseRejected"`: Rejected due to open interest cap.' +
            '\n- `"insufficientSpotBalanceRejected"`: Rejected due to insufficient spot balance.' +
            '\n- `"oracleRejected"`: Rejected due to price too far from oracle.' +
            '\n- `"perpMaxPositionRejected"`: Rejected due to exceeding margin tier limit at current leverage.')),
        /** Timestamp when the status was last updated (in ms since epoch). */
        statusTimestamp: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Timestamp when the status was last updated (in ms since epoch).")),
    })), v.description("Array of frontend orders with current processing status."));
})();
/**
 * Request user historical orders.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of frontend orders with current processing status.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { historicalOrders } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await historicalOrders(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-a-users-historical-orders
 */
function historicalOrders(config, params, signal) {
    const request = v.parse(exports.HistoricalOrdersRequest, {
        type: "historicalOrders",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=historicalOrders.js.map