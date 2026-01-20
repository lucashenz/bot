import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/** Jail or unjail self as a validator signer. */
export const CSignerActionRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to jail or unjail the signer. */
        action: v.pipe(v.union([
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("CSignerAction"), v.description("Type of action.")),
                /** Jail the signer. */
                jailSelf: v.pipe(v.null(), v.description("Jail the signer.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("CSignerAction"), v.description("Type of action.")),
                /** Unjail the signer. */
                unjailSelf: v.pipe(v.null(), v.description("Unjail the signer.")),
            }),
        ]), v.description("Action to jail or unjail the signer.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Jail or unjail self as a validator signer."));
})();
/** Successful response without specific data or error response. */
export const CSignerActionResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeL1Action } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const CSignerActionParameters = /* @__PURE__ */ (() => {
    return v.union(CSignerActionRequest.entries.action.options.map((option) => v.omit(option, ["type"])));
})();
/**
 * Jail or unjail self as a validator signer.
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
 * @example Jail self
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cSignerAction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cSignerAction(
 *   { transport, wallet },
 *   { jailSelf: null },
 * );
 * ```
 * @example Unjail self
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cSignerAction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cSignerAction(
 *   { transport, wallet },
 *   { unjailSelf: null },
 * );
 * ```
 */
export function cSignerAction(config, params, opts) {
    const action = v.parse(CSignerActionParameters, params);
    return executeL1Action(config, { type: "CSignerAction", ...action }, opts);
}
//# sourceMappingURL=cSignerAction.js.map