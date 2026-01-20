import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/** Opt Out of Spot Dusting. */
export const SpotUserRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("spotUser"), v.description("Type of action.")),
            /** Spot dusting options. */
            toggleSpotDusting: v.pipe(v.object({
                /** Opt out of spot dusting. */
                optOut: v.pipe(v.boolean(), v.description("Opt out of spot dusting.")),
            }), v.description("Spot dusting options.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Opt Out of Spot Dusting."));
})();
/** Successful response without specific data or error response. */
export const SpotUserResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeL1Action } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const SpotUserParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(SpotUserRequest.entries.action.entries), ["type"]);
})();
/**
 * Opt Out of Spot Dusting.
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
 * import { spotUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotUser(
 *   { transport, wallet },
 *   { toggleSpotDusting: { optOut: false } },
 * );
 * ```
 */
export function spotUser(config, params, opts) {
    const action = v.parse(SpotUserParameters, params);
    return executeL1Action(config, { type: "spotUser", ...action }, opts);
}
//# sourceMappingURL=spotUser.js.map