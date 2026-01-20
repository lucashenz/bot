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
exports.FundingHistoryResponse = exports.FundingHistoryRequest = void 0;
exports.fundingHistory = fundingHistory;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request funding history.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
exports.FundingHistoryRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("fundingHistory"), v.description("Type of request.")),
        /** Asset symbol (e.g., BTC). */
        coin: v.pipe(v.string(), v.description("Asset symbol (e.g., BTC).")),
        /** Start time (in ms since epoch). */
        startTime: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Start time (in ms since epoch).")),
        /** End time (in ms since epoch). */
        endTime: v.pipe(v.nullish(_schemas_js_1.UnsignedInteger), v.description("End time (in ms since epoch).")),
    }), v.description("Request funding history."));
})();
/**
 * Array of historical funding rate records for an asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
exports.FundingHistoryResponse = (() => {
    return v.pipe(v.array(v.object({
        /** Asset symbol. */
        coin: v.pipe(v.string(), v.description("Asset symbol.")),
        /** Funding rate. */
        fundingRate: v.pipe(_schemas_js_1.Decimal, v.description("Funding rate.")),
        /** Premium price. */
        premium: v.pipe(_schemas_js_1.Decimal, v.description("Premium price.")),
        /** Funding record timestamp (ms since epoch). */
        time: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Funding record timestamp (ms since epoch).")),
    })), v.description("Array of historical funding rate records for an asset."));
})();
/**
 * Request funding history.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of historical funding rate records for an asset.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { fundingHistory } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await fundingHistory(
 *   { transport },
 *   { coin: "ETH", startTime: Date.now() - 1000 * 60 * 60 * 24 },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-historical-funding-rates
 */
function fundingHistory(config, params, signal) {
    const request = v.parse(exports.FundingHistoryRequest, {
        type: "fundingHistory",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=fundingHistory.js.map