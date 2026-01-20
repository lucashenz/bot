import * as v from "valibot";
/** Subscription to explorer block events. */
export declare const ExplorerBlockRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"explorerBlock", undefined>, v.DescriptionAction<"explorerBlock", "Type of subscription.">]>;
}, undefined>, v.DescriptionAction<{
    type: "explorerBlock";
}, "Subscription to explorer block events.">]>;
export type ExplorerBlockRequest = v.InferOutput<typeof ExplorerBlockRequest>;
/** Event of array of block details. */
export declare const ExplorerBlockEvent: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
    /** Block creation timestamp. */
    readonly blockTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block creation timestamp.">]>;
    /** Block hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Block hash.">]>;
    /** Block height in chain. */
    readonly height: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Block height in chain.">]>;
    /** Total transactions in block. */
    readonly numTxs: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Total transactions in block.">]>;
    /** Block proposer address. */
    readonly proposer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Block proposer address.">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    blockTime: number;
    hash: `0x${string}`;
    height: number;
    numTxs: number;
    proposer: `0x${string}`;
}[], "Event of array of block details.">]>;
export type ExplorerBlockEvent = v.InferOutput<typeof ExplorerBlockEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/**
 * Subscribe to explorer block updates.
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
 * import { explorerBlock } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport({ url: "wss://rpc.hyperliquid.xyz/ws" });  // only `WebSocketTransport`; RPC endpoint
 *
 * const sub = await explorerBlock(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function explorerBlock(config: SubscriptionConfig, listener: (data: ExplorerBlockEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=explorerBlock.d.ts.map