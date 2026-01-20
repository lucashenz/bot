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
exports.LinkStakingUserTypes = exports.LinkStakingUserResponse = exports.LinkStakingUserRequest = void 0;
exports.linkStakingUser = linkStakingUser;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Link staking and trading accounts for fee discount attribution.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees#staking-linking
 */
exports.LinkStakingUserRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("linkStakingUser"), v.description("Type of action.")),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: v.pipe(_schemas_js_1.Hex, v.description("Chain ID in hex format for EIP-712 signing.")),
            /** HyperLiquid network type. */
            hyperliquidChain: v.pipe(commonSchemas_js_1.HyperliquidChainSchema, v.description("HyperLiquid network type.")),
            /**
             * Target account address.
             * - Trading user initiating: enter staking account address.
             * - Staking user finalizing: enter trading account address.
             */
            user: v.pipe(_schemas_js_1.Address, v.description("Target account address." +
                "\n- Trading user initiating: enter staking account address." +
                "\n- Staking user finalizing: enter trading account address.")),
            /**
             * Link phase.
             * - `false` = trading user initiates link request.
             * - `true` = staking user finalizes permanent link.
             */
            isFinalize: v.pipe(v.boolean(), v.description("Link phase." +
                "\n- `false` = trading user initiates link request." +
                "\n- `true` = staking user finalizes permanent link.")),
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
    }), v.description("Link staking and trading accounts for fee discount attribution."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees#staking-linking
 */
exports.LinkStakingUserResponse = (() => {
    return v.pipe(v.union([commonSchemas_js_1.SuccessResponse, commonSchemas_js_1.ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const LinkStakingUserParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.LinkStakingUserRequest.entries.action.entries), ["type", "signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode linkStakingUser} function. */
exports.LinkStakingUserTypes = {
    "HyperliquidTransaction:LinkStakingUser": [
        { name: "hyperliquidChain", type: "string" },
        { name: "user", type: "address" },
        { name: "isFinalize", type: "bool" },
        { name: "nonce", type: "uint64" },
    ],
};
/**
 * Link staking and trading accounts for fee discount attribution.
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
 * import { linkStakingUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await linkStakingUser(
 *   { transport, wallet },
 *   { user: "0x...", isFinalize: false },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/trading/fees#staking-linking
 */
function linkStakingUser(config, params, opts) {
    const action = v.parse(LinkStakingUserParameters, params);
    return (0, execute_js_1.executeUserSignedAction)(config, { type: "linkStakingUser", ...action }, exports.LinkStakingUserTypes, opts);
}
//# sourceMappingURL=linkStakingUser.js.map