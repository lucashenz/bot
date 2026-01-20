import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
import { UserTwapSliceFillsResponse } from "../../info/_methods/userTwapSliceFills.js";
/** Subscription to user TWAP slice fill events for a specific user. */
export const UserTwapSliceFillsRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("userTwapSliceFills"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
    }), v.description("Subscription to user TWAP slice fill events for a specific user."));
})();
/** Event of user TWAP slice fill. */
export const UserTwapSliceFillsEvent = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
        /** Array of user's twap slice fills. */
        twapSliceFills: v.pipe(UserTwapSliceFillsResponse, v.description("Array of user's twap slice fills.")),
        /** Whether this is an initial snapshot. */
        isSnapshot: v.pipe(v.optional(v.literal(true)), v.description("Whether this is an initial snapshot.")),
    }), v.description("Event of user TWAP slice fill."));
})();
/**
 * Subscribe to TWAP execution updates for a specific user.
 *
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 *
 * @returns A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { userTwapSliceFills } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await userTwapSliceFills(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export function userTwapSliceFills(config, params, listener) {
    const payload = v.parse(UserTwapSliceFillsRequest, { type: "userTwapSliceFills", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.user === payload.user) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=userTwapSliceFills.js.map