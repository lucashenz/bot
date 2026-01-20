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
exports.AlignedQuoteTokenInfoResponse = exports.AlignedQuoteTokenInfoRequest = void 0;
exports.alignedQuoteTokenInfo = alignedQuoteTokenInfo;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 */
exports.AlignedQuoteTokenInfoRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("alignedQuoteTokenInfo"), v.description("Type of request.")),
        /** Token index. */
        token: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Token index.")),
    }), v.description("Request supply, rate, and pending payment information for an aligned quote token."));
})();
/**
 * Supply, rate, and pending payment information for an aligned quote token.
 */
exports.AlignedQuoteTokenInfoResponse = (() => {
    return v.pipe(v.object({
        /** Whether the token is aligned. */
        isAligned: v.pipe(v.boolean(), v.description("Whether the token is aligned.")),
        /** Timestamp (in ms since epoch) when the token was first aligned. */
        firstAlignedTime: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Timestamp (in ms since epoch) when the token was first aligned.")),
        /** Total EVM minted supply. */
        evmMintedSupply: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total EVM minted supply.")),
        /** Daily amount owed as an array of [date, amount] tuples. */
        dailyAmountOwed: v.pipe(v.array(v.tuple([
            v.pipe(v.string(), v.isoDate()),
            _schemas_js_1.UnsignedDecimal,
        ])), v.description("Daily amount owed as an array of [date, amount] tuples.")),
        /** Predicted rate. */
        predictedRate: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Predicted rate.")),
    }), v.description("Supply, rate, and pending payment information for an aligned quote token."));
})();
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Supply, rate, and pending payment information for an aligned quote token.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { alignedQuoteTokenInfo } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await alignedQuoteTokenInfo(
 *   { transport },
 *   { token: 1328 },
 * );
 * ```
 */
function alignedQuoteTokenInfo(config, params, signal) {
    const request = v.parse(exports.AlignedQuoteTokenInfoRequest, {
        type: "alignedQuoteTokenInfo",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=alignedQuoteTokenInfo.js.map