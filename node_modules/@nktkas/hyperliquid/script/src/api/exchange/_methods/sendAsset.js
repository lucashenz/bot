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
exports.SendAssetTypes = exports.SendAssetResponse = exports.SendAssetRequest = void 0;
exports.sendAsset = sendAsset;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
 */
exports.SendAssetRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("sendAsset"), v.description("Type of action.")),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: v.pipe(_schemas_js_1.Hex, v.description("Chain ID in hex format for EIP-712 signing.")),
            /** HyperLiquid network type. */
            hyperliquidChain: v.pipe(commonSchemas_js_1.HyperliquidChainSchema, v.description("HyperLiquid network type.")),
            /** Destination address. */
            destination: v.pipe(_schemas_js_1.Address, v.description("Destination address.")),
            /** Source DEX ("" for default USDC perp DEX, "spot" for spot). */
            sourceDex: v.pipe(v.string(), v.description('Source DEX ("" for default USDC perp DEX, "spot" for spot).')),
            /** Destination DEX ("" for default USDC perp DEX, "spot" for spot). */
            destinationDex: v.pipe(v.string(), v.description('Destination DEX ("" for default USDC perp DEX, "spot" for spot).')),
            /** Token identifier. */
            token: v.pipe(v.string(), v.description("Token identifier.")),
            /** Amount to send (not in wei). */
            amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount to send (not in wei).")),
            /** Source sub-account address ("" for main account). */
            fromSubAccount: v.pipe(v.optional(v.union([v.literal(""), _schemas_js_1.Address]), ""), v.description('Source sub-account address ("" for main account).')),
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
    }), v.description("Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
 */
exports.SendAssetResponse = (() => {
    return v.pipe(v.union([commonSchemas_js_1.SuccessResponse, commonSchemas_js_1.ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const SendAssetParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.SendAssetRequest.entries.action.entries), ["type", "signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode sendAsset} function. */
exports.SendAssetTypes = {
    "HyperliquidTransaction:SendAsset": [
        { name: "hyperliquidChain", type: "string" },
        { name: "destination", type: "string" },
        { name: "sourceDex", type: "string" },
        { name: "destinationDex", type: "string" },
        { name: "token", type: "string" },
        { name: "amount", type: "string" },
        { name: "fromSubAccount", type: "string" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts.
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
 * import { sendAsset } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await sendAsset(
 *   { transport, wallet },
 *   {
 *     destination: "0x0000000000000000000000000000000000000001",
 *     sourceDex: "",
 *     destinationDex: "test",
 *     token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *     amount: "1",
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#send-asset
 */
function sendAsset(config, params, opts) {
    const action = v.parse(SendAssetParameters, params);
    return (0, execute_js_1.executeUserSignedAction)(config, { type: "sendAsset", ...action }, exports.SendAssetTypes, opts);
}
//# sourceMappingURL=sendAsset.js.map