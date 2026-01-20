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
exports.CancelResponse = exports.CancelRequest = void 0;
exports.cancel = cancel;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Cancel order(s).
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
exports.CancelRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("cancel"), v.description("Type of action.")),
            /** Orders to cancel by asset and order ID. */
            cancels: v.pipe(v.array(v.object({
                /** Asset ID. */
                a: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Asset ID.")),
                /** Order ID. */
                o: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Order ID.")),
            })), v.description("Orders to cancel by asset and order ID.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(_schemas_js_1.Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Cancel order(s)."));
})();
/**
 * Response for order cancellation.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
exports.CancelResponse = (() => {
    return v.pipe(v.object({
        /** Successful status. */
        status: v.pipe(v.literal("ok"), v.description("Successful status.")),
        /** Response details. */
        response: v.pipe(v.object({
            /** Type of response. */
            type: v.pipe(v.literal("cancel"), v.description("Type of response.")),
            /** Specific data. */
            data: v.pipe(v.object({
                /** Array of statuses for each canceled order. */
                statuses: v.pipe(v.array(v.union([
                    v.literal("success"),
                    v.object({
                        /** Error message returned by the exchange. */
                        error: v.pipe(v.string(), v.description("Error message returned by the exchange.")),
                    }),
                ])), v.description("Array of statuses for each canceled order.")),
            }), v.description("Specific data.")),
        }), v.description("Response details.")),
    }), v.description("Response for order cancellation."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const CancelParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.CancelRequest.entries.action.entries), ["type"]);
})();
/**
 * Cancel order(s).
 *
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 *
 * @returns Successful variant of {@link CancelResponse} without error statuses.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cancel } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await cancel(
 *   { transport, wallet },
 *   {
 *     cancels: [
 *       { a: 0, o: 123 },
 *     ],
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#cancel-order-s
 */
function cancel(config, params, opts) {
    const action = v.parse(CancelParameters, params);
    return (0, execute_js_1.executeL1Action)(config, { type: "cancel", ...action }, opts);
}
//# sourceMappingURL=cancel.js.map