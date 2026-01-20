import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Validator vote on risk-free rate for aligned quote asset.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
export const ValidatorL1StreamRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("validatorL1Stream"), v.description("Type of action.")),
            /** Risk-free rate as a decimal string (e.g., "0.05" for 5%). */
            riskFreeRate: v.pipe(UnsignedDecimal, v.description('Risk-free rate as a decimal string (e.g., "0.05" for 5%).')),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Validator vote on risk-free rate for aligned quote asset."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
export const ValidatorL1StreamResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeL1Action } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const ValidatorL1StreamParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(ValidatorL1StreamRequest.entries.action.entries), ["type"]);
})();
/**
 * Validator vote on risk-free rate for aligned quote asset.
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
 * import { validatorL1Stream } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await validatorL1Stream(
 *   { transport, wallet },
 *   { riskFreeRate: "0.05" },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#validator-vote-on-risk-free-rate-for-aligned-quote-asset
 */
export function validatorL1Stream(config, params, opts) {
    const action = v.parse(ValidatorL1StreamParameters, params);
    return executeL1Action(config, { type: "validatorL1Stream", ...action }, opts);
}
//# sourceMappingURL=validatorL1Stream.js.map