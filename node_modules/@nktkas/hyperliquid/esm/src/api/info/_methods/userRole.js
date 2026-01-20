import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { Address } from "../../_schemas.js";
/**
 * Request user role.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-role
 */
export const UserRoleRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userRole"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(Address, v.description("User address.")),
    }), v.description("Request user role."));
})();
/**
 * User role.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-role
 */
export const UserRoleResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.variant("role", [
        v.object({
            /** Role identifier. */
            role: v.pipe(v.picklist(["missing", "user", "vault"]), v.description("Role identifier.")),
        }),
        v.object({
            /** Role identifier. */
            role: v.pipe(v.literal("agent"), v.description("Role identifier.")),
            /** Details for agent role. */
            data: v.pipe(v.object({
                /** Master account address associated with the agent. */
                user: v.pipe(Address, v.description("Master account address associated with the agent.")),
            }), v.description("Details for agent role.")),
        }),
        v.object({
            /** Role identifier. */
            role: v.pipe(v.literal("subAccount"), v.description("Role identifier.")),
            /** Details for sub-account role. */
            data: v.pipe(v.object({
                /** Master account address associated with the sub-account. */
                master: v.pipe(Address, v.description("Master account address associated with the sub-account.")),
            }), v.description("Details for sub-account role.")),
        }),
    ]), v.description("User role."));
})();
/**
 * Request user role.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns User role.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userRole } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userRole(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-role
 */
export function userRole(config, params, signal) {
    const request = v.parse(UserRoleRequest, {
        type: "userRole",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userRole.js.map