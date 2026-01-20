import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/** Modify a vault's configuration. */
export const VaultModifyRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("vaultModify"), v.description("Type of action.")),
            /** Vault address. */
            vaultAddress: v.pipe(Address, v.description("Vault address.")),
            /** Allow deposits from followers. */
            allowDeposits: v.pipe(v.nullish(v.boolean(), null), v.description("Allow deposits from followers.")),
            /** Always close positions on withdrawal. */
            alwaysCloseOnWithdraw: v.pipe(v.nullish(v.boolean(), null), v.description("Always close positions on withdrawal.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Modify a vault's configuration."));
})();
/** Successful response without specific data or error response. */
export const VaultModifyResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeL1Action } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const VaultModifyParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(VaultModifyRequest.entries.action.entries), ["type"]);
})();
/**
 * Modify a vault's configuration.
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
 * import { vaultModify } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await vaultModify(
 *   { transport, wallet },
 *   {
 *     vaultAddress: "0x...",
 *     allowDeposits: true,
 *     alwaysCloseOnWithdraw: false,
 *   },
 * );
 * ```
 */
export function vaultModify(config, params, opts) {
    const action = v.parse(VaultModifyParameters, params);
    return executeL1Action(config, { type: "vaultModify", ...action }, opts);
}
//# sourceMappingURL=vaultModify.js.map