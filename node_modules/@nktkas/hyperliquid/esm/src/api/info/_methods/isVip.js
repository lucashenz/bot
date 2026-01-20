import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request to check if a user is a VIP.
 */
export const IsVipRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("isVip"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
    }), v.description("Request to check if a user is a VIP."));
})();
/**
 * Boolean indicating user's VIP status.
 */
export const IsVipResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.nullable(v.boolean()), v.description("Boolean indicating user's VIP status."));
})();
/**
 * Request to check if a user is a VIP.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Boolean indicating user's VIP status.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { isVip } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await isVip(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export function isVip(config, params, signal) {
    const request = v.parse(IsVipRequest, {
        type: "isVip",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=isVip.js.map