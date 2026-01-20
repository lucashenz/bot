import * as v from "valibot";
/**
 * Request to check if a user is a VIP.
 */
export declare const IsVipRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"isVip", undefined>, v.DescriptionAction<"isVip", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "isVip";
    user: `0x${string}`;
}, "Request to check if a user is a VIP.">]>;
export type IsVipRequest = v.InferOutput<typeof IsVipRequest>;
/**
 * Boolean indicating user's VIP status.
 */
export declare const IsVipResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | null, "Boolean indicating user's VIP status.">]>;
export type IsVipResponse = v.InferOutput<typeof IsVipResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode isVip} function. */
export type IsVipParameters = Omit<v.InferInput<typeof IsVipRequest>, "type">;
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
export declare function isVip(config: InfoConfig, params: IsVipParameters, signal?: AbortSignal): Promise<IsVipResponse>;
//# sourceMappingURL=isVip.d.ts.map