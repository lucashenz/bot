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
exports.ActiveAssetDataResponse = exports.ActiveAssetDataRequest = void 0;
exports.activeAssetData = activeAssetData;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request user active asset data.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-active-asset-data
 */
exports.ActiveAssetDataRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("activeAssetData"), v.description("Type of request.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Request user active asset data."));
})();
/**
 * User active asset data.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-users-active-asset-data
 */
exports.ActiveAssetDataResponse = (() => {
    return v.pipe(v.object({
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
        /** Leverage configuration. */
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
        ]), v.description("Leverage configuration.")),
        /** Maximum trade size range [min, max]. */
        maxTradeSzs: v.pipe(v.tuple([_schemas_js_1.UnsignedDecimal, _schemas_js_1.UnsignedDecimal]), v.description("Maximum trade size range [min, max].")),
        /** Available to trade range [min, max]. */
        availableToTrade: v.pipe(v.tuple([_schemas_js_1.UnsignedDecimal, _schemas_js_1.UnsignedDecimal]), v.description("Available to trade range [min, max].")),
        /** Mark price. */
        markPx: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Mark price.")),
    }), v.description("User active asset data."));
})();
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
function activeAssetData(config, params, signal) {
    const request = v.parse(exports.ActiveAssetDataRequest, {
        type: "activeAssetData",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=activeAssetData.js.map