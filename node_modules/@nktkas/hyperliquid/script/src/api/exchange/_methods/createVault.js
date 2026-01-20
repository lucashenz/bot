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
exports.CreateVaultResponse = exports.CreateVaultRequest = void 0;
exports.createVault = createVault;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/** Create a vault. */
exports.CreateVaultRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("createVault"), v.description("Type of action.")),
            /** Vault name. */
            name: v.pipe(v.string(), v.minLength(3), v.maxLength(50), v.description("Vault name.")),
            /** Vault description. */
            description: v.pipe(v.string(), v.minLength(10), v.maxLength(250), v.description("Vault description.")),
            /** Initial balance (float * 1e6). */
            initialUsd: v.pipe(_schemas_js_1.UnsignedInteger, v.minValue(100 * 1e6), // 100 USD
            v.description("Initial balance (float * 1e6).")),
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Create a vault."));
})();
/** Response for creating a vault. */
exports.CreateVaultResponse = (() => {
    return v.pipe(v.union([
        v.object({
            /** Successful status. */
            status: v.pipe(v.literal("ok"), v.description("Successful status.")),
            /** Response details. */
            response: v.pipe(v.object({
                /** Type of response. */
                type: v.pipe(v.literal("createVault"), v.description("Type of response.")),
                /** Vault address. */
                data: v.pipe(_schemas_js_1.Address, v.description("Vault address.")),
            }), v.description("Response details.")),
        }),
        commonSchemas_js_1.ErrorResponse,
    ]), v.description("Response for creating a vault."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const CreateVaultParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.CreateVaultRequest.entries.action.entries), ["type"]);
})();
/**
 * Create a vault.
 *
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 *
 * @returns Response for creating a vault.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { createVault } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await createVault(
 *   { transport, wallet },
 *   {
 *     name: "...",
 *     description: "...",
 *     initialUsd: 100 * 1e6,
 *     nonce: Date.now(),
 *   },
 * );
 * ```
 */
function createVault(config, params, opts) {
    const action = v.parse(CreateVaultParameters, params);
    return (0, execute_js_1.executeL1Action)(config, { type: "createVault", ...action }, opts);
}
//# sourceMappingURL=createVault.js.map