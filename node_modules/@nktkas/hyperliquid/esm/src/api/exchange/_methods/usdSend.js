import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Hex, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, HyperliquidChainSchema, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Send usd to another address.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 */
export const UsdSendRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("usdSend"), v.description("Type of action.")),
            /** Chain ID in hex format for EIP-712 signing. */
            signatureChainId: v.pipe(Hex, v.description("Chain ID in hex format for EIP-712 signing.")),
            /** HyperLiquid network type. */
            hyperliquidChain: v.pipe(HyperliquidChainSchema, v.description("HyperLiquid network type.")),
            /** Destination address. */
            destination: v.pipe(Address, v.description("Destination address.")),
            /** Amount to send (1 = $1). */
            amount: v.pipe(UnsignedDecimal, v.description("Amount to send (1 = $1).")),
            /** Nonce (timestamp in ms) used to prevent replay attacks. */
            time: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
    }), v.description("Send usd to another address."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 */
export const UsdSendResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeUserSignedAction } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const UsdSendParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(UsdSendRequest.entries.action.entries), ["type", "signatureChainId", "hyperliquidChain", "time"]);
})();
/** EIP-712 types for the {@linkcode usdSend} function. */
export const UsdSendTypes = {
    "HyperliquidTransaction:UsdSend": [
        { name: "hyperliquidChain", type: "string" },
        { name: "destination", type: "string" },
        { name: "amount", type: "string" },
        { name: "time", type: "uint64" },
    ],
};
/**
 * Send usd to another address.
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
 * import { usdSend } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await usdSend(
 *   { transport, wallet },
 *   { destination: "0x...", amount: "1" },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#core-usdc-transfer
 */
export function usdSend(config, params, opts) {
    const action = v.parse(UsdSendParameters, params);
    return executeUserSignedAction(config, { type: "usdSend", ...action }, UsdSendTypes, opts);
}
//# sourceMappingURL=usdSend.js.map