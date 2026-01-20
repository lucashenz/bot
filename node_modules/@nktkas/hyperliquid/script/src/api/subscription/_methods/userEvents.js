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
exports.UserEventsEvent = exports.UserEventsRequest = void 0;
exports.userEvents = userEvents;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const userTwapSliceFills_js_1 = require("../../info/_methods/userTwapSliceFills.js");
const userFills_js_1 = require("../../info/_methods/userFills.js");
const twapHistory_js_1 = require("../../info/_methods/twapHistory.js");
/** Subscription to user events for a specific user. */
exports.UserEventsRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("userEvents"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Subscription to user events for a specific user."));
})();
/** Event of one of possible user events. */
exports.UserEventsEvent = (() => {
    return v.pipe(v.union([
        /** Event of array of user trade fills. */
        v.object({
            /** Array of user trade fills. */
            fills: v.pipe(userFills_js_1.UserFillsResponse, v.description("Array of user trade fills.")),
        }),
        /** Event of user funding update. */
        v.object({
            /** Funding update details. */
            funding: v.pipe(v.object({
                /** Asset symbol. */
                coin: v.pipe(v.string(), v.description("Asset symbol.")),
                /** Amount transferred in USDC. */
                usdc: v.pipe(_schemas_js_1.Decimal, v.description("Amount transferred in USDC.")),
                /** Signed position size. */
                szi: v.pipe(_schemas_js_1.Decimal, v.description("Signed position size.")),
                /** Applied funding rate. */
                fundingRate: v.pipe(_schemas_js_1.Decimal, v.description("Applied funding rate.")),
                /** Number of samples. */
                nSamples: v.pipe(v.nullable(_schemas_js_1.UnsignedInteger), v.description("Number of samples.")),
            }), v.description("Funding update details.")),
        }),
        /** Event of user liquidation. */
        v.object({
            /** Liquidation details. */
            liquidation: v.pipe(v.object({
                /** Unique liquidation ID. */
                lid: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Unique liquidation ID.")),
                /** Address of the liquidator. */
                liquidator: v.pipe(_schemas_js_1.Address, v.description("Address of the liquidator.")),
                /** Address of the liquidated user. */
                liquidated_user: v.pipe(_schemas_js_1.Address, v.description("Address of the liquidated user.")),
                /** Notional position size that was liquidated. */
                liquidated_ntl_pos: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Notional position size that was liquidated.")),
                /** Account value at time of liquidation. */
                liquidated_account_value: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Account value at time of liquidation.")),
            }), v.description("Liquidation details.")),
        }),
        /** Event of array of non-user initiated order cancellations. */
        v.object({
            /** Array of non-user initiated order cancellations. */
            nonUserCancel: v.pipe(v.array(
            /** Cancelled order not initiated by the user. */
            v.object({
                /** Asset symbol (e.g., BTC). */
                coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
                /** Order ID. */
                oid: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Order ID.")),
            })), v.description("Array of non-user initiated order cancellations.")),
        }),
        /** Event of a TWAP history entry. */
        v.object({
            /** Array of user's TWAP history. */
            twapHistory: v.pipe(twapHistory_js_1.TwapHistoryResponse, v.description("Array of user's TWAP history.")),
        }),
        /** Event of TWAP slice fills. */
        v.object({
            /** Array of user's twap slice fills. */
            twapSliceFills: v.pipe(userTwapSliceFills_js_1.UserTwapSliceFillsResponse, v.description("Array of user's twap slice fills.")),
        }),
    ]), v.description("Event of one of possible user events."));
})();
/**
 * Subscribe to non-order events for a specific user.
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
 * import { userEvents } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await userEvents(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
function userEvents(config, params, listener) {
    const payload = v.parse(exports.UserEventsRequest, { type: "userEvents", ...params });
    return config.transport.subscribe("user", payload, (e) => {
        listener(e.detail);
    });
}
//# sourceMappingURL=userEvents.js.map