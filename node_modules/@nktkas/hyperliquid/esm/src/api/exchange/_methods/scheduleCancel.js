import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
import { ErrorResponse, SignatureSchema, SuccessResponse } from "./_base/commonSchemas.js";
/**
 * Schedule a cancel-all operation at a future time.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#schedule-cancel-dead-mans-switch
 */
export const ScheduleCancelRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("scheduleCancel"), v.description("Type of action.")),
            /**
             * Scheduled time (in ms since epoch).
             * Must be at least 5 seconds in the future.
             *
             * If not specified, will cause all scheduled cancel operations to be deleted.
             */
            time: v.pipe(v.optional(UnsignedInteger), v.description("Scheduled time (in ms since epoch)." +
                "\nMust be at least 5 seconds in the future." +
                "\n\nIf not specified, will cause all scheduled cancel operations to be deleted.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(SignatureSchema, v.description("ECDSA signature components.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Schedule a cancel-all operation at a future time."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#schedule-cancel-dead-mans-switch
 */
export const ScheduleCancelResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.union([SuccessResponse, ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
import { executeL1Action } from "./_base/execute.js";
/** Schema for user-provided action parameters (excludes system fields). */
const ScheduleCancelParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(ScheduleCancelRequest.entries.action.entries), ["type"]);
})();
export function scheduleCancel(config, paramsOrOpts, maybeOpts) {
    const isFirstArgParams = paramsOrOpts && "time" in paramsOrOpts;
    const params = isFirstArgParams ? paramsOrOpts : {};
    const opts = isFirstArgParams ? maybeOpts : paramsOrOpts;
    const action = v.parse(ScheduleCancelParameters, params);
    return executeL1Action(config, { type: "scheduleCancel", ...action }, opts);
}
//# sourceMappingURL=scheduleCancel.js.map