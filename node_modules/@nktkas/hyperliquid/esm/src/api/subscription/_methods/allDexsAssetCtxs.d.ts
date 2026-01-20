import * as v from "valibot";
/** Subscription to asset context events for all DEXs. */
export declare const AllDexsAssetCtxsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"allDexsAssetCtxs", undefined>, v.DescriptionAction<"allDexsAssetCtxs", "Type of subscription.">]>;
}, undefined>, v.DescriptionAction<{
    type: "allDexsAssetCtxs";
}, "Subscription to asset context events for all DEXs.">]>;
export type AllDexsAssetCtxsRequest = v.InferOutput<typeof AllDexsAssetCtxsRequest>;
/** Event of asset contexts for all DEXs. */
export declare const AllDexsAssetCtxsEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Array of tuples of dex names and contexts for each perpetual asset. */
    readonly ctxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly prevDayPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Previous day's closing price.">]>;
        readonly dayNtlVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Daily notional volume.">]>;
        readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Mark price.">]>;
        readonly midPx: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<string | null, "Mid price.">]>;
        readonly funding: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Funding rate.">]>;
        readonly openInterest: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total open interest.">]>;
        readonly premium: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<string | null, "Premium price.">]>;
        readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Oracle price.">]>;
        readonly impactPxs: v.SchemaWithPipe<readonly [v.NullableSchema<v.ArraySchema<v.StringSchema<undefined>, undefined>, undefined>, v.DescriptionAction<string[] | null, "Array of impact prices.">]>;
        readonly dayBaseVlm: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Daily volume in base currency.">]>;
    }, undefined>, v.DescriptionAction<{
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        funding: string;
        openInterest: string;
        premium: string | null;
        oraclePx: string;
        impactPxs: string[] | null;
        dayBaseVlm: string;
    }, "Perpetual asset context.">]>, undefined>], undefined>, undefined>, v.DescriptionAction<[string, {
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        funding: string;
        openInterest: string;
        premium: string | null;
        oraclePx: string;
        impactPxs: string[] | null;
        dayBaseVlm: string;
    }[]][], "Array of tuples of dex names and contexts for each perpetual asset.">]>;
}, undefined>, v.DescriptionAction<{
    ctxs: [string, {
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        funding: string;
        openInterest: string;
        premium: string | null;
        oraclePx: string;
        impactPxs: string[] | null;
        dayBaseVlm: string;
    }[]][];
}, "Event of asset contexts for all DEXs.">]>;
export type AllDexsAssetCtxsEvent = v.InferOutput<typeof AllDexsAssetCtxsEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/**
 * Subscribe to asset contexts for all DEXs.
 *
 * @param config - General configuration for Subscription API subscriptions.
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
 * import { allDexsAssetCtxs } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await allDexsAssetCtxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function allDexsAssetCtxs(config: SubscriptionConfig, listener: (data: AllDexsAssetCtxsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=allDexsAssetCtxs.d.ts.map