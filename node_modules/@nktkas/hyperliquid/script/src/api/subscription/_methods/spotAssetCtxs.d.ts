import * as v from "valibot";
/** Subscription to context events for all spot assets. */
export declare const SpotAssetCtxsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotAssetCtxs", undefined>, v.DescriptionAction<"spotAssetCtxs", "Type of subscription.">]>;
}, undefined>, v.DescriptionAction<{
    type: "spotAssetCtxs";
}, "Subscription to context events for all spot assets.">]>;
export type SpotAssetCtxsRequest = v.InferOutput<typeof SpotAssetCtxsRequest>;
/** Event of spot asset contexts. */
export declare const SpotAssetCtxsEvent: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly prevDayPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Previous day's closing price.">]>;
    readonly dayNtlVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Daily notional volume.">]>;
    readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Mark price.">]>;
    readonly midPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<string | null, "Mid price.">]>;
    readonly circulatingSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Circulating supply.">]>;
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
    readonly totalSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total supply.">]>;
    readonly dayBaseVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Daily volume in base currency.">]>;
}, undefined>, v.DescriptionAction<{
    prevDayPx: string;
    dayNtlVlm: string;
    markPx: string;
    midPx: string | null;
    circulatingSupply: string;
    coin: string;
    totalSupply: string;
    dayBaseVlm: string;
}, "Spot asset context.">]>, undefined>, v.DescriptionAction<{
    prevDayPx: string;
    dayNtlVlm: string;
    markPx: string;
    midPx: string | null;
    circulatingSupply: string;
    coin: string;
    totalSupply: string;
    dayBaseVlm: string;
}[], "Event of spot asset contexts.">]>;
export type SpotAssetCtxsEvent = v.InferOutput<typeof SpotAssetCtxsEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/**
 * Subscribe to context updates for all spot assets.
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
 * import { spotAssetCtxs } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await spotAssetCtxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function spotAssetCtxs(config: SubscriptionConfig, listener: (data: SpotAssetCtxsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=spotAssetCtxs.d.ts.map