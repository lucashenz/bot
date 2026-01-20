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
exports.ValidatorL1StreamResponse = exports.ValidatorL1StreamRequest = void 0;
exports.validatorL1Stream = validatorL1Stream;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Validator vote on risk-free rate for aligned quote asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
exports.ValidatorL1StreamRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("validatorL1Stream"), v.description("Type of action.")),
            /** Risk-free rate as a decimal string (e.g., "0.05" for 5%). */
            riskFreeRate: v.pipe(_schemas_js_1.UnsignedDecimal, v.description('Risk-free rate as a decimal string (e.g., "0.05" for 5%).')),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Validator vote on risk-free rate for aligned quote asset."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
exports.ValidatorL1StreamResponse = (() => {
    return v.pipe(v.union([commonSchemas_js_1.SuccessResponse, commonSchemas_js_1.ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const ValidatorL1StreamParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.ValidatorL1StreamRequest.entries.action.entries), ["type"]);
})();
/**
 * Validator vote on risk-free rate for aligned quote asset.
 *
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 *
 * @returns Successful response without specific data.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { validatorL1Stream } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await validatorL1Stream(
 *   { transport, wallet },
 *   { riskFreeRate: "0.05" },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
function validatorL1Stream(config, params, opts) {
    const action = v.parse(ValidatorL1StreamParameters, params);
    return (0, execute_js_1.executeL1Action)(config, { type: "validatorL1Stream", ...action }, opts);
}
//# sourceMappingURL=validatorL1Stream.js.map