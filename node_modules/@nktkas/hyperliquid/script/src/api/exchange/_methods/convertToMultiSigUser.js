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
exports.ConvertToMultiSigUserTypes = exports.ConvertToMultiSigUserResponse = exports.ConvertToMultiSigUserRequest = void 0;
exports.convertToMultiSigUser = convertToMultiSigUser;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/** Multi-sig config or `null` to revert to single-sig. */
const ConvertToMultiSigUserRequestSignersSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.nullable(
    /** Multi-signature configuration. */
    v.object({
        /** List of authorized user addresses. */
        authorizedUsers: v.pipe(v.array(_schemas_js_1.Address), v.description("List of authorized user addresses.")),
        /** Minimum number of signatures required. */
        threshold: v.pipe(_schemas_js_1.UnsignedInteger, v.minValue(1), v.maxValue(10), v.description("Minimum number of signatures required.")),
    })), v.description("Multi-sig config or `null` to revert to single-sig."));
})();
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
exports.ConvertToMultiSigUserRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("convertToMultiSigUser"), v.description("Type of action.")),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: v.pipe(_schemas_js_1.Hex, v.description("Chain ID in hex format for EIP-712 signing.")),
            /** HyperLiquid network type. */
            hyperliquidChain: v.pipe(commonSchemas_js_1.HyperliquidChainSchema, v.description("HyperLiquid network type.")),
            /**
             * Signers configuration.
             *
             * Must be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.
             */
            signers: v.pipe(v.union([
                v.pipe(v.string(), v.parseJson(), ConvertToMultiSigUserRequestSignersSchema, v.stringifyJson()),
                v.pipe(ConvertToMultiSigUserRequestSignersSchema, v.stringifyJson()),
            ]), v.description("Signers configuration." +
                "\n\nMust be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.")),
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
    }), v.description("Convert a single-signature account to a multi-signature account or vice versa."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
exports.ConvertToMultiSigUserResponse = (() => {
    return v.pipe(v.union([commonSchemas_js_1.SuccessResponse, commonSchemas_js_1.ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const ConvertToMultiSigUserParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.ConvertToMultiSigUserRequest.entries.action.entries), ["type", "signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode convertToMultiSigUser} function. */
exports.ConvertToMultiSigUserTypes = {
    "HyperliquidTransaction:ConvertToMultiSigUser": [
        { name: "hyperliquidChain", type: "string" },
        { name: "signers", type: "string" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
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
 * @example Convert to multi-sig user
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { convertToMultiSigUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await convertToMultiSigUser(
 *   { transport, wallet },
 *   {
 *     signers: {
 *       authorizedUsers: ["0x...", "0x...", "0x..."],
 *       threshold: 2,
 *     },
 *   },
 * );
 * ```
 *
 * @example Convert to single-sig user
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { convertToMultiSigUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await convertToMultiSigUser(
 *   { transport, wallet },
 *   { signers: null },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
function convertToMultiSigUser(config, params, opts) {
    const action = v.parse(ConvertToMultiSigUserParameters, params);
    return (0, execute_js_1.executeUserSignedAction)(config, { type: "convertToMultiSigUser", ...action }, exports.ConvertToMultiSigUserTypes, opts);
}
//# sourceMappingURL=convertToMultiSigUser.js.map