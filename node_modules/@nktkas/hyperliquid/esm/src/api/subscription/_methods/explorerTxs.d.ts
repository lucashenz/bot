import * as v from "valibot";
/** Subscription to explorer transaction events. */
export declare const ExplorerTxsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"explorerTxs", undefined>, v.DescriptionAction<"explorerTxs", "Type of subscription.">]>;
}, undefined>, v.DescriptionAction<{
    type: "explorerTxs";
}, "Subscription to explorer transaction events.">]>;
export type ExplorerTxsRequest = v.InferOutput<typeof ExplorerTxsRequest>;
/** Event of array of transaction details. */
export declare const ExplorerTxsEvent: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly action: v.SchemaWithPipe<readonly [v.LooseObjectSchema<{
        readonly type: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Action type.">]>;
    }, undefined>, v.DescriptionAction<{
        type: string;
    } & {
        [key: string]: unknown;
    }, "Action performed in transaction.">]>;
    readonly block: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block number where transaction was included.">]>;
    readonly error: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Error message if transaction failed.">]>;
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Transaction hash.">]>;
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Transaction creation timestamp.">]>;
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Creator's address.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: string;
    } & {
        [key: string]: unknown;
    };
    block: number;
    error: string | null;
    hash: `0x${string}`;
    time: number;
    user: `0x${string}`;
}, "Explorer transaction.">]>, undefined>, v.DescriptionAction<{
    action: {
        type: string;
    } & {
        [key: string]: unknown;
    };
    block: number;
    error: string | null;
    hash: `0x${string}`;
    time: number;
    user: `0x${string}`;
}[], "Event of array of transaction details.">]>;
export type ExplorerTxsEvent = v.InferOutput<typeof ExplorerTxsEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/**
 * Subscribe to explorer transaction updates.
 *
 * @param config - General configuration for Subscription API subscriptions.
 * @param listener - A callback function to be called when the event is received.
 * @returns A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { explorerTxs } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" });  // only `WebSocketTransport`; RPC endpoint
 *
 * const sub = await explorerTxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function explorerTxs(config: SubscriptionConfig, listener: (data: ExplorerTxsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=explorerTxs.d.ts.map