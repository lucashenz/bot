import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Deposit or withdraw from a vault.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-or-withdraw-from-a-vault
 */
export const VaultTransferRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("vaultTransfer"), v.description("Type of action.")),
            /** Vault address. */
            vaultAddress: v.pipe(Address, v.description("Vault address.")),
            /** `true` for deposit, `false` for withdrawal. */
            isDeposit: v.pipe(v.boolean(), v.description("`true` for deposit, `false` for withdrawal.")),
            /** Amount for deposit/withdrawal (float * 1e6). */
            usd: v.pipe(UnsignedInteger, v.minValue(1), v.description("Amount for deposit/withdrawal (float * 1e6).")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Deposit or withdraw from a vault."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-or-withdraw-from-a-vault
 */
export const VaultTransferResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeL1Action } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const VaultTransferParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(VaultTransferRequest.entries.action.entries), ["type"]);
})();
/**
 * Deposit or withdraw from a vault.
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
 * import { vaultTransfer } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await vaultTransfer(
 *   { transport, wallet },
 *   { vaultAddress: "0x...", isDeposit: true, usd: 10 * 1e6 },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#deposit-or-withdraw-from-a-vault
 */
export function vaultTransfer(config, params, opts) {
    const action = v.parse(VaultTransferParameters, params);
    return executeL1Action(config, { type: "vaultTransfer", ...action }, opts);
}
//# sourceMappingURL=vaultTransfer.js.map