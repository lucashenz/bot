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
exports.ModifyResponse = exports.ModifyRequest = void 0;
exports.modify = modify;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Modify an order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
exports.ModifyRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("modify"), v.description("Type of action.")),
            /** Order ID or Client Order ID. */
            oid: v.pipe(v.union([_schemas_js_1.UnsignedInteger, _schemas_js_1.Cloid]), v.description("Order ID or Client Order ID.")),
            /** New order parameters. */
            order: v.pipe(v.object({
                /** Asset ID. */
                a: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Asset ID.")),
                /** Position side (`true` for long, `false` for short). */
                b: v.pipe(v.boolean(), v.description("Position side (`true` for long, `false` for short).")),
                /** Price. */
                p: v.pipe(_schemas_js_1.UnsignedDecimal, v.check((input) => Number(input) > 0, "Value must be greater than zero."), v.description("Price.")),
                /** Size (in base currency units). */
                s: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Size (in base currency units).")),
                /** Is reduce-only? */
                r: v.pipe(v.boolean(), v.description("Is reduce-only?")),
                /** Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders). */
                t: v.pipe(v.union([
                    v.object({
                        /** Limit order parameters. */
                        limit: v.pipe(v.object({
                            /**
                             * Time-in-force.
                             * - `"Gtc"`: Remains active until filled or canceled.
                             * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
                             * - `"Alo"`: Adds liquidity only.
                             * - `"FrontendMarket"`: Similar to Ioc, used in Hyperliquid UI.
                             * - `"LiquidationMarket"`: Similar to Ioc, used in Hyperliquid UI.
                             */
                            tif: v.pipe(v.picklist(["Gtc", "Ioc", "Alo", "FrontendMarket", "LiquidationMarket"]), v.description("Time-in-force." +
                                '\n- `"Gtc"`: Remains active until filled or canceled.' +
                                '\n- `"Ioc"`: Fills immediately or cancels any unfilled portion.' +
                                '\n- `"Alo"`: Adds liquidity only.' +
                                '\n- `"FrontendMarket"`: Similar to Ioc, used in Hyperliquid UI.' +
                                '\n- `"LiquidationMarket"`: Similar to Ioc, used in Hyperliquid UI.')),
                        }), v.description("Limit order parameters.")),
                    }),
                    v.object({
                        /** Trigger order parameters. */
                        trigger: v.pipe(v.object({
                            /** Is market order? */
                            isMarket: v.pipe(v.boolean(), v.description("Is market order?")),
                            /** Trigger price. */
                            triggerPx: v.pipe(_schemas_js_1.UnsignedDecimal, v.check((input) => Number(input) > 0, "Value must be greater than zero."), v.description("Trigger price.")),
                            /** Indicates whether it is take profit or stop loss. */
                            tpsl: v.pipe(v.picklist(["tp", "sl"]), v.description("Indicates whether it is take profit or stop loss.")),
                        }), v.description("Trigger order parameters.")),
                    }),
                ]), v.description("Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders).")),
                /** Client Order ID. */
                c: v.pipe(v.optional(_schemas_js_1.Cloid), v.description("Client Order ID.")),
            }), v.description("New order parameters.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(_schemas_js_1.Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Modify an order."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
exports.ModifyResponse = (() => {
    return v.pipe(v.union([commonSchemas_js_1.SuccessResponse, commonSchemas_js_1.ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const ModifyParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.ModifyRequest.entries.action.entries), ["type"]);
})();
/**
 * Modify an order.
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
 * import { modify } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await modify(
 *   { transport, wallet },
 *   {
 *     oid: 123,
 *     order: {
 *       a: 0,
 *       b: true,
 *       p: "31000",
 *       s: "0.2",
 *       r: false,
 *       t: { limit: { tif: "Gtc" } },
 *       c: "0x...",
 *     },
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
function modify(config, params, opts) {
    const action = v.parse(ModifyParameters, params);
    return (0, execute_js_1.executeL1Action)(config, { type: "modify", ...action }, opts);
}
//# sourceMappingURL=modify.js.map