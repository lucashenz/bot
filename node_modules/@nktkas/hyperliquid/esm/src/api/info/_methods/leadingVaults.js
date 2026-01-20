import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request leading vaults for a user.
 */
export const LeadingVaultsRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("leadingVaults"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
    }), v.description("Request leading vaults for a user."));
})();
/**
 * Array of leading vaults for a user.
 */
export const LeadingVaultsResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.array(v.object({
        /** Vault address. */
        address: v.pipe(Address, v.description("Vault address.")),
        /** Vault name. */
        name: v.pipe(v.string(), v.description("Vault name.")),
    })), v.description("Array of leading vaults for a user."));
})();
/**
 * Request leading vaults for a user.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of leading vaults for a user.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { leadingVaults } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await leadingVaults(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export function leadingVaults(config, params, signal) {
    const request = v.parse(LeadingVaultsRequest, {
        type: "leadingVaults",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=leadingVaults.js.map