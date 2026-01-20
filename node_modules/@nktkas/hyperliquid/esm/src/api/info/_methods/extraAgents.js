import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address, UnsignedInteger } from "../../_schemas.js";
/**
 * Request user extra agents.
 */
export const ExtraAgentsRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("extraAgents"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
    }), v.description("Request user extra agents."));
})();
/**
 * Array of extra agent details for a user.
 */
export const ExtraAgentsResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.array(v.object({
        /** Extra agent address. */
        address: v.pipe(Address, v.description("Extra agent address.")),
        /** Extra agent name. */
        name: v.pipe(v.string(), v.nonEmpty(), v.description("Extra agent name.")),
        /** Validity period as a timestamp (in ms since epoch). */
        validUntil: v.pipe(UnsignedInteger, v.description("Validity period as a timestamp (in ms since epoch).")),
    })), v.description("Array of extra agent details for a user."));
})();
/**
 * Request user extra agents.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of extra agent details for a user.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { extraAgents } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await extraAgents(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export function extraAgents(config, params, signal) {
    const request = v.parse(ExtraAgentsRequest, {
        type: "extraAgents",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=extraAgents.js.map