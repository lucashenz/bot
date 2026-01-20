import * as v from "valibot";
/** Subscription to context events for a specific spot asset. */
export declare const ActiveSpotAssetCtxRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"activeAssetCtx", undefined>, v.DescriptionAction<"activeAssetCtx", "Type of subscription.">]>;
    /** Asset ID (e.g., @1). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset ID (e.g., @1).">]>;
}, undefined>, v.DescriptionAction<{
    type: "activeAssetCtx";
    coin: string;
}, "Subscription to context events for a specific spot asset.">]>;
export type ActiveSpotAssetCtxRequest = v.InferOutput<typeof ActiveSpotAssetCtxRequest>;
/** Event of active spot asset context. */
export declare const ActiveSpotAssetCtxEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Asset ID (e.g., @1). */
    readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset ID (e.g., @1).">]>;
    /** Context for a specific spot asset. */
    readonly ctx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
    }, "Spot asset context.">]>, v.DescriptionAction<{
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        circulatingSupply: string;
        coin: string;
        totalSupply: string;
        dayBaseVlm: string;
    }, "Context for a specific spot asset.">]>;
}, undefined>, v.DescriptionAction<{
    coin: string;
    ctx: {
        prevDayPx: string;
        dayNtlVlm: string;
        markPx: string;
        midPx: string | null;
        circulatingSupply: string;
        coin: string;
        totalSupply: string;
        dayBaseVlm: string;
    };
}, "Event of active spot asset context.">]>;
export type ActiveSpotAssetCtxEvent = v.InferOutput<typeof ActiveSpotAssetCtxEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/** Request parameters for the {@linkcode activeSpotAssetCtx} function. */
export type ActiveSpotAssetCtxParameters = Omit<v.InferInput<typeof ActiveSpotAssetCtxRequest>, "type">;
/**
 * Subscribe to context updates for a specific spot asset.
 *
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { activeSpotAssetCtx } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await activeSpotAssetCtx(
 *   { transport },
 *   { coin: "@1" },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function activeSpotAssetCtx(config: SubscriptionConfig, params: ActiveSpotAssetCtxParameters, listener: (data: ActiveSpotAssetCtxEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=activeSpotAssetCtx.d.ts.map