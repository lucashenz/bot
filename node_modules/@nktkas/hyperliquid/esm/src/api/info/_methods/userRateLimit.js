import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedDecimal, UnsignedInteger } from "../../_schemas.js";
/**
 * Request user rate limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
 */
export const UserRateLimitRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userRateLimit"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
    }), v.description("Request user rate limits."));
})();
/**
 * User rate limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
 */
export const UserRateLimitResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Cumulative trading volume. */
        cumVlm: v.pipe(UnsignedDecimal, v.description("Cumulative trading volume.")),
        /** Number of API requests used. */
        nRequestsUsed: v.pipe(UnsignedInteger, v.description("Number of API requests used.")),
        /** Maximum allowed API requests. */
        nRequestsCap: v.pipe(UnsignedInteger, v.description("Maximum allowed API requests.")),
        /** Number of surplus API requests. */
        nRequestsSurplus: v.pipe(UnsignedInteger, v.description("Number of surplus API requests.")),
    }), v.description("User rate limits."));
})();
/**
 * Request user rate limits.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns User rate limits.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userRateLimit } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userRateLimit(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
 */
export function userRateLimit(config, params, signal) {
    const request = v.parse(UserRateLimitRequest, {
        type: "userRateLimit",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userRateLimit.js.map