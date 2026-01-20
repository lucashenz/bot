import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, Integer, UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Add or remove margin from isolated position.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export const UpdateIsolatedMarginRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("updateIsolatedMargin"), v.description("Type of action.")),
            /** Asset ID. */
            asset: v.pipe(UnsignedInteger, v.description("Asset ID.")),
            /** Position side (`true` for long, `false` for short). */
            isBuy: v.pipe(v.boolean(), v.description("Position side (`true` for long, `false` for short).")),
            /** Amount to adjust (float * 1e6). */
            ntli: v.pipe(Integer, v.description("Amount to adjust (float * 1e6).")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Add or remove margin from isolated position."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export const UpdateIsolatedMarginResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeL1Action } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const UpdateIsolatedMarginParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(UpdateIsolatedMarginRequest.entries.action.entries), ["type"]);
})();
/**
 * Add or remove margin from isolated position.
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
 * import { updateIsolatedMargin } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await updateIsolatedMargin(
 *   { transport, wallet },
 *   { asset: 0, isBuy: true, ntli: 1 * 1e6 },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#update-isolated-margin
 */
export function updateIsolatedMargin(config, params, opts) {
    const action = v.parse(UpdateIsolatedMarginParameters, params);
    return executeL1Action(config, { type: "updateIsolatedMargin", ...action }, opts);
}
//# sourceMappingURL=updateIsolatedMargin.js.map