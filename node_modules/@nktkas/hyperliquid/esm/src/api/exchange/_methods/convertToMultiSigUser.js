import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Hex, UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, HyperliquidChainSchema, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/** Multi-sig config or `null` to revert to single-sig. */
const ConvertToMultiSigUserRequestSignersSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.nullable(
    /** Multi-signature configuration. */
    v.object({
        /** List of authorized user addresses. */
        authorizedUsers: v.pipe(v.array(Address), v.description("List of authorized user addresses.")),
        /** Minimum number of signatures required. */
        threshold: v.pipe(UnsignedInteger, v.minValue(1), v.maxValue(10), v.description("Minimum number of signatures required.")),
    })), v.description("Multi-sig config or `null` to revert to single-sig."));
})();
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export const ConvertToMultiSigUserRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("convertToMultiSigUser"), v.description("Type of action.")),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: v.pipe(Hex, v.description("Chain ID in hex format for EIP-712 signing.")),
            /** HyperLiquid network type. */
            hyperliquidChain: v.pipe(HyperliquidChainSchema, v.description("HyperLiquid network type.")),
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
            nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
    }), v.description("Convert a single-signature account to a multi-signature account or vice versa."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export const ConvertToMultiSigUserResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeUserSignedAction } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const ConvertToMultiSigUserParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(ConvertToMultiSigUserRequest.entries.action.entries), ["type", "signatureChainId", "hyperliquidChain", "nonce"]);
})();
/** EIP-712 types for the {@linkcode convertToMultiSigUser} function. */
export const ConvertToMultiSigUserTypes = {
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
export function convertToMultiSigUser(config, params, opts) {
    const action = v.parse(ConvertToMultiSigUserParameters, params);
    return executeUserSignedAction(config, { type: "convertToMultiSigUser", ...action }, ConvertToMultiSigUserTypes, opts);
}
//# sourceMappingURL=convertToMultiSigUser.js.map