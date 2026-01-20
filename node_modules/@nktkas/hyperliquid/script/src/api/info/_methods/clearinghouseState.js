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
exports.ClearinghouseStateResponse = exports.ClearinghouseStateRequest = void 0;
exports.clearinghouseState = clearinghouseState;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request clearinghouse state.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-perpetuals-account-summary
 */
exports.ClearinghouseStateRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("clearinghouseState"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Request clearinghouse state."));
})();
/**
 * Account summary for perpetual trading.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-perpetuals-account-summary
 */
exports.ClearinghouseStateResponse = (() => {
    return v.pipe(v.object({
        /** Margin summary details. */
        marginSummary: v.pipe(v.object({
            /** Total account value. */
            accountValue: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total account value.")),
            /** Total notional position value. */
            totalNtlPos: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total notional position value.")),
            /** Total raw USD value. */
            totalRawUsd: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total raw USD value.")),
            /** Total margin used. */
            totalMarginUsed: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total margin used.")),
        }), v.description("Margin summary details.")),
        /** Cross-margin summary details. */
        crossMarginSummary: v.pipe(v.object({
            /** Total account value. */
            accountValue: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total account value.")),
            /** Total notional position value. */
            totalNtlPos: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total notional position value.")),
            /** Total raw USD value. */
            totalRawUsd: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total raw USD value.")),
            /** Total margin used. */
            totalMarginUsed: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total margin used.")),
        }), v.description("Cross-margin summary details.")),
        /** Maintenance margin used for cross-margin positions. */
        crossMaintenanceMarginUsed: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Maintenance margin used for cross-margin positions.")),
        /** Amount available for withdrawal. */
        withdrawable: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount available for withdrawal.")),
        /** Array of asset positions. */
        assetPositions: v.pipe(v.array(v.object({
            /** Position type. */
            type: v.pipe(v.literal("oneWay"), v.description("Position type.")),
            /** Position details. */
            position: v.pipe(v.object({
                /** Asset symbol. */
                coin: v.pipe(v.string(), v.description("Asset symbol.")),
                /** Signed position size. */
                szi: v.pipe(_schemas_js_1.Decimal, v.description("Signed position size.")),
                /** Leverage details. */
                leverage: v.pipe(v.variant("type", [
                    v.object({
                        /** Leverage type. */
                        type: v.pipe(v.literal("isolated"), v.description("Leverage type.")),
                        /** Leverage value used. */
                        value: v.pipe(_schemas_js_1.UnsignedInteger, v.minValue(1), v.description("Leverage value used.")),
                        /** Amount of USD used (1 = $1). */
                        rawUsd: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount of USD used (1 = $1).")),
                    }),
                    v.object({
                        /** Leverage type. */
                        type: v.pipe(v.literal("cross"), v.description("Leverage type.")),
                        /** Leverage value used. */
                        value: v.pipe(_schemas_js_1.UnsignedInteger, v.minValue(1), v.description("Leverage value used.")),
                    }),
                ]), v.description("Leverage details.")),
                /** Average entry price. */
                entryPx: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Average entry price.")),
                /** Position value. */
                positionValue: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Position value.")),
                /** Unrealized profit and loss. */
                unrealizedPnl: v.pipe(_schemas_js_1.Decimal, v.description("Unrealized profit and loss.")),
                /** Return on equity. */
                returnOnEquity: v.pipe(_schemas_js_1.Decimal, v.description("Return on equity.")),
                /** Liquidation price. */
                liquidationPx: v.pipe(v.nullable(_schemas_js_1.UnsignedDecimal), v.description("Liquidation price.")),
                /** Margin used. */
                marginUsed: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Margin used.")),
                /** Maximum allowed leverage. */
                maxLeverage: v.pipe(_schemas_js_1.UnsignedInteger, v.minValue(1), v.description("Maximum allowed leverage.")),
                /** Cumulative funding details. */
                cumFunding: v.pipe(v.object({
                    /** Total funding paid or received since account opening. */
                    allTime: v.pipe(_schemas_js_1.Decimal, v.description("Total funding paid or received since account opening.")),
                    /** Funding accumulated since the position was opened. */
                    sinceOpen: v.pipe(_schemas_js_1.Decimal, v.description("Funding accumulated since the position was opened.")),
                    /** Funding accumulated since the last change in position size. */
                    sinceChange: v.pipe(_schemas_js_1.Decimal, v.description("Funding accumulated since the last change in position size.")),
                }), v.description("Cumulative funding details.")),
            }), v.description("Position details.")),
        })), v.description("Array of asset positions.")),
        /** Timestamp when data was retrieved (in ms since epoch). */
        time: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Timestamp when data was retrieved (in ms since epoch).")),
    }), v.description("Account summary for perpetual trading."));
})();
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
function clearinghouseState(config, params, signal) {
    const request = v.parse(exports.ClearinghouseStateRequest, {
        type: "clearinghouseState",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=clearinghouseState.js.map