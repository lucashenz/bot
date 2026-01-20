import * as v from "valibot";
/** Subscription to comprehensive user and market data events. */
export declare const WebData3Request: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"webData3", undefined>, v.DescriptionAction<"webData3", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "webData3";
    user: `0x${string}`;
}, "Subscription to comprehensive user and market data events.">]>;
export type WebData3Request = v.InferOutput<typeof WebData3Request>;
/** Event of comprehensive user and market data. */
export declare const WebData3Event: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** User state information. */
    readonly userState: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Agent address if one exists. */
        readonly agentAddress: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Agent address if one exists.">]>;
        /** Timestamp until which the agent is valid. */
        readonly agentValidUntil: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Timestamp until which the agent is valid.">]>;
        /** Cumulative ledger value. */
        readonly cumLedger: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Cumulative ledger value.">]>;
        /** Server timestamp (in ms since epoch). */
        readonly serverTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Server timestamp (in ms since epoch).">]>;
        /** Whether this account is a vault. */
        readonly isVault: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether this account is a vault.">]>;
        /** User address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
        /** Whether the user has opted out of spot dusting. */
        readonly optOutOfSpotDusting: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Whether the user has opted out of spot dusting.">]>;
        /** Whether DEX abstraction is enabled. */
        readonly dexAbstractionEnabled: v.SchemaWithPipe<readonly [v.OptionalSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | undefined, "Whether DEX abstraction is enabled.">]>;
        /** Abstraction mode for the user account. */
        readonly abstraction: v.SchemaWithPipe<readonly [v.OptionalSchema<v.PicklistSchema<["dexAbstraction", "disabled"], undefined>, undefined>, v.DescriptionAction<"dexAbstraction" | "disabled" | undefined, "Abstraction mode for the user account.">]>;
    }, undefined>, v.DescriptionAction<{
        agentAddress: `0x${string}` | null;
        agentValidUntil: number | null;
        cumLedger: string;
        serverTime: number;
        isVault: boolean;
        user: `0x${string}`;
        optOutOfSpotDusting?: true | undefined;
        dexAbstractionEnabled?: boolean | undefined;
        abstraction?: "dexAbstraction" | "disabled" | undefined;
    }, "User state information.">]>;
    /** Array of perpetual DEX states. */
    readonly perpDexStates: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        /** Total equity in vaults. */
        readonly totalVaultEquity: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total equity in vaults.">]>;
        /** Assets currently at their open interest cap. */
        readonly perpsAtOpenInterestCap: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string[], "Array of perpetuals at open interest caps.">]>, undefined>, v.DescriptionAction<string[] | undefined, "Assets currently at their open interest cap.">]>;
        /** Array of leading vaults. */
        readonly leadingVaults: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            readonly address: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
            readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Vault name.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            address: `0x${string}`;
            name: string;
        }[], "Array of leading vaults for a user.">]>, undefined>, v.DescriptionAction<{
            address: `0x${string}`;
            name: string;
        }[] | undefined, "Array of leading vaults.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        totalVaultEquity: string;
        perpsAtOpenInterestCap?: string[] | undefined;
        leadingVaults?: {
            address: `0x${string}`;
            name: string;
        }[] | undefined;
    }[], "Array of perpetual DEX states.">]>;
}, undefined>, v.DescriptionAction<{
    userState: {
        agentAddress: `0x${string}` | null;
        agentValidUntil: number | null;
        cumLedger: string;
        serverTime: number;
        isVault: boolean;
        user: `0x${string}`;
        optOutOfSpotDusting?: true | undefined;
        dexAbstractionEnabled?: boolean | undefined;
        abstraction?: "dexAbstraction" | "disabled" | undefined;
    };
    perpDexStates: {
        totalVaultEquity: string;
        perpsAtOpenInterestCap?: string[] | undefined;
        leadingVaults?: {
            address: `0x${string}`;
            name: string;
        }[] | undefined;
    }[];
}, "Event of comprehensive user and market data.">]>;
export type WebData3Event = v.InferOutput<typeof WebData3Event>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/** Request parameters for the {@linkcode webData3} function. */
export type WebData3Parameters = Omit<v.InferInput<typeof WebData3Request>, "type">;
/**
 * Subscribe to comprehensive user and market data updates.
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
 * import { webData3 } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await webData3(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function webData3(config: SubscriptionConfig, params: WebData3Parameters, listener: (data: WebData3Event) => void): Promise<ISubscription>;
//# sourceMappingURL=webData3.d.ts.map