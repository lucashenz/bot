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
exports.PerpDexLimitsResponse = exports.PerpDexLimitsRequest = void 0;
exports.perpDexLimits = perpDexLimits;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request builder deployed perpetual market limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
 */
exports.PerpDexLimitsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("perpDexLimits"), v.description("Type of request.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.string(), v.description("DEX name (empty string for main dex).")),
    }), v.description("Request builder deployed perpetual market limits."));
})();
/**
 * Builder deployed perpetual market limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
 */
exports.PerpDexLimitsResponse = (() => {
    return v.pipe(v.nullable(v.object({
        /** Total open interest cap. */
        totalOiCap: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total open interest cap.")),
        /** Open interest size cap per perpetual. */
        oiSzCapPerPerp: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Open interest size cap per perpetual.")),
        /** Maximum transfer notional amount. */
        maxTransferNtl: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Maximum transfer notional amount.")),
        /** Coin to open interest cap mapping. */
        coinToOiCap: v.pipe(v.array(v.tuple([v.string(), _schemas_js_1.UnsignedDecimal])), v.description("Coin to open interest cap mapping.")),
    })), v.description("Builder deployed perpetual market limits."));
})();
/**
 * Request builder deployed perpetual market limits.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Builder deployed perpetual market limits.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { perpDexLimits } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpDexLimits(
 *   { transport },
 *   { dex: "test" },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-builder-deployed-perp-market-limits
 */
function perpDexLimits(config, params, signal) {
    const request = v.parse(exports.PerpDexLimitsRequest, {
        type: "perpDexLimits",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=perpDexLimits.js.map