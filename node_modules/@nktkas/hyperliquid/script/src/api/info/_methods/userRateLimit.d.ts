import * as v from "valibot";
/**
 * Request user rate limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
 */
export declare const UserRateLimitRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userRateLimit", undefined>, v.DescriptionAction<"userRateLimit", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userRateLimit";
    user: `0x${string}`;
}, "Request user rate limits.">]>;
export type UserRateLimitRequest = v.InferOutput<typeof UserRateLimitRequest>;
/**
 * User rate limits.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-user-rate-limits
 */
export declare const UserRateLimitResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Cumulative trading volume. */
    readonly cumVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Cumulative trading volume.">]>;
    /** Number of API requests used. */
    readonly nRequestsUsed: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of API requests used.">]>;
    /** Maximum allowed API requests. */
    readonly nRequestsCap: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Maximum allowed API requests.">]>;
    /** Number of surplus API requests. */
    readonly nRequestsSurplus: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of surplus API requests.">]>;
}, undefined>, v.DescriptionAction<{
    cumVlm: string;
    nRequestsUsed: number;
    nRequestsCap: number;
    nRequestsSurplus: number;
}, "User rate limits.">]>;
export type UserRateLimitResponse = v.InferOutput<typeof UserRateLimitResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userRateLimit} function. */
export type UserRateLimitParameters = Omit<v.InferInput<typeof UserRateLimitRequest>, "type">;
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
export declare function userRateLimit(config: InfoConfig, params: UserRateLimitParameters, signal?: AbortSignal): Promise<UserRateLimitResponse>;
//# sourceMappingURL=userRateLimit.d.ts.map