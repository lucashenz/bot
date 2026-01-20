import * as v from "valibot";
/** Subscription to mid price events for all coins. */
export declare const AllMidsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"allMids", undefined>, v.DescriptionAction<"allMids", "Type of subscription.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "allMids";
    dex?: string | undefined;
}, "Subscription to mid price events for all coins.">]>;
export type AllMidsRequest = v.InferOutput<typeof AllMidsRequest>;
/** Event of mid prices for all assets. */
export declare const AllMidsEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Mapping of coin symbols to mid prices. */
    readonly mids: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.RecordSchema<v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<{
        [x: string]: string;
    }, "Mapping of coin symbols to mid prices.">]>, v.DescriptionAction<{
        [x: string]: string;
    }, "Mapping of coin symbols to mid prices.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    mids: {
        [x: string]: string;
    };
    dex?: string | undefined;
}, "Event of mid prices for all assets.">]>;
export type AllMidsEvent = v.InferOutput<typeof AllMidsEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/** Request parameters for the {@linkcode allMids} function. */
export type AllMidsParameters = Omit<v.InferInput<typeof AllMidsRequest>, "type">;
/**
 * Subscribe to mid prices for all actively traded assets.
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
 * import { allMids } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await allMids(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function allMids(config: SubscriptionConfig, listener: (data: AllMidsEvent) => void): Promise<ISubscription>;
export declare function allMids(config: SubscriptionConfig, params: AllMidsParameters, listener: (data: AllMidsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=allMids.d.ts.map