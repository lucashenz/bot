import * as v from "valibot";
/**
 * Request user staking rewards.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 */
export declare const DelegatorRewardsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"delegatorRewards", undefined>, v.DescriptionAction<"delegatorRewards", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "delegatorRewards";
    user: `0x${string}`;
}, "Request user staking rewards.">]>;
export type DelegatorRewardsRequest = v.InferOutput<typeof DelegatorRewardsRequest>;
/**
 * Array of rewards received from staking activities.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 */
export declare const DelegatorRewardsResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
    /** Timestamp when the reward was received (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the reward was received (in ms since epoch).">]>;
    /** Source of the reward. */
    readonly source: v.SchemaWithPipe<readonly [v.PicklistSchema<["delegation", "commission"], undefined>, v.DescriptionAction<"delegation" | "commission", "Source of the reward.">]>;
    /** Total reward amount. */
    readonly totalAmount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total reward amount.">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    time: number;
    source: "delegation" | "commission";
    totalAmount: string;
}[], "Array of rewards received from staking activities.">]>;
export type DelegatorRewardsResponse = v.InferOutput<typeof DelegatorRewardsResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode delegatorRewards} function. */
export type DelegatorRewardsParameters = Omit<v.InferInput<typeof DelegatorRewardsRequest>, "type">;
/**
 * Request user staking rewards.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of rewards received from staking activities.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { delegatorRewards } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await delegatorRewards(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-rewards
 */
export declare function delegatorRewards(config: InfoConfig, params: DelegatorRewardsParameters, signal?: AbortSignal): Promise<DelegatorRewardsResponse>;
//# sourceMappingURL=delegatorRewards.d.ts.map