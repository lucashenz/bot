import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/** Transfer between sub-accounts (spot). */
export const SubAccountSpotTransferRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("subAccountSpotTransfer"), v.description("Type of action.")),
            /** Sub-account address. */
            subAccountUser: v.pipe(Address, v.description("Sub-account address.")),
            /** `true` for deposit, `false` for withdrawal. */
            isDeposit: v.pipe(v.boolean(), v.description("`true` for deposit, `false` for withdrawal.")),
            /** Token identifier. */
            token: v.pipe(v.string(), v.description("Token identifier.")),
            /** Amount to send (not in wei). */
            amount: v.pipe(UnsignedDecimal, v.description("Amount to send (not in wei).")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Transfer between sub-accounts (spot)."));
})();
/** Successful response without specific data or error response. */
export const SubAccountSpotTransferResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeL1Action } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const SubAccountSpotTransferParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(SubAccountSpotTransferRequest.entries.action.entries), ["type"]);
})();
/**
 * Transfer between sub-accounts (spot).
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
 * import { subAccountSpotTransfer } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await subAccountSpotTransfer(
 *   { transport, wallet },
 *   {
 *     subAccountUser: "0x...",
 *     isDeposit: true,
 *     token: "USDC:0xeb62eee3685fc4c43992febcd9e75443",
 *     amount: "1",
 *   },
 * );
 * ```
 */
export function subAccountSpotTransfer(config, params, opts) {
    const action = v.parse(SubAccountSpotTransferParameters, params);
    return executeL1Action(config, { type: "subAccountSpotTransfer", ...action }, opts);
}
//# sourceMappingURL=subAccountSpotTransfer.js.map