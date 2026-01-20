import * as v from "valibot";
/**
 * Approve an agent to sign on behalf of the master account.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
export declare const ApproveAgentRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveAgent", undefined>, v.DescriptionAction<"approveAgent", "Type of action.">]>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
        /** Agent address. */
        readonly agentAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Agent address.">]>;
        /** Agent name or null for unnamed agent. */
        readonly agentName: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 17, undefined>]>, null>, v.DescriptionAction<string | null, "Agent name or null for unnamed agent.">]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "approveAgent";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        agentAddress: `0x${string}`;
        agentName: string | null;
        nonce: number;
    }, "Action to perform.">]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    /** ECDSA signature components. */
    readonly signature: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "First 32-byte component.">]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Second 32-byte component.">]>;
        readonly v: v.SchemaWithPipe<readonly [v.PicklistSchema<[27, 28], undefined>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
    }, undefined>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components.">]>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "approveAgent";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        agentAddress: `0x${string}`;
        agentName: string | null;
        nonce: number;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
}, "Approve an agent to sign on behalf of the master account.">]>;
export type ApproveAgentRequest = v.InferOutput<typeof ApproveAgentRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
export declare const ApproveAgentResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"default", undefined>, v.DescriptionAction<"default", "Type of response.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "default";
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "default";
    };
}, "Successful response without specific data.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"err", undefined>, v.DescriptionAction<"err", "Error status.">]>;
    readonly response: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
}, undefined>, v.DescriptionAction<{
    status: "err";
    response: string;
}, "Error response for failed operations.">]>], undefined>, v.DescriptionAction<{
    status: "err";
    response: string;
} | {
    status: "ok";
    response: {
        type: "default";
    };
}, "Successful response without specific data or error response.">]>;
export type ApproveAgentResponse = v.InferOutput<typeof ApproveAgentResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const ApproveAgentParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveAgent", undefined>, v.DescriptionAction<"approveAgent", "Type of action.">]>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
    /** Agent address. */
    readonly agentAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Agent address.">]>;
    /** Agent name or null for unnamed agent. */
    readonly agentName: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 17, undefined>]>, null>, v.DescriptionAction<string | null, "Agent name or null for unnamed agent.">]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveAgent", undefined>, v.DescriptionAction<"approveAgent", "Type of action.">]>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
        /** Agent address. */
        readonly agentAddress: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Agent address.">]>;
        /** Agent name or null for unnamed agent. */
        readonly agentName: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 17, undefined>]>, null>, v.DescriptionAction<string | null, "Agent name or null for unnamed agent.">]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    }, "type" | "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        agentName?: string | null | undefined;
        agentAddress: string;
    }, {
        agentName: string | null;
        agentAddress: `0x${string}`;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        agentName: string | null;
        agentAddress: `0x${string}`;
    }, v.StringIssue | v.ObjectIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.MinLengthIssue<string, 1> | v.MaxLengthIssue<string, 17>>;
    readonly "~types"?: {
        readonly input: {
            agentName?: string | null | undefined;
            agentAddress: string;
        };
        readonly output: {
            agentName: string | null;
            agentAddress: `0x${string}`;
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.MinLengthIssue<string, 1> | v.MaxLengthIssue<string, 17>;
    } | undefined;
};
/** Action parameters for the {@linkcode approveAgent} function. */
export type ApproveAgentParameters = v.InferInput<typeof ApproveAgentParameters>;
/** Request options for the {@linkcode approveAgent} function. */
export type ApproveAgentOptions = ExtractRequestOptions<v.InferInput<typeof ApproveAgentRequest>>;
/** Successful variant of {@linkcode ApproveAgentResponse} without errors. */
export type ApproveAgentSuccessResponse = ExcludeErrorResponse<ApproveAgentResponse>;
/** EIP-712 types for the {@linkcode approveAgent} function. */
export declare const ApproveAgentTypes: {
    "HyperliquidTransaction:ApproveAgent": {
        name: string;
        type: string;
    }[];
};
/**
 * Approve an agent to sign on behalf of the master account.
 *
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 *
 * @returns Successful response without specific data.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { approveAgent } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await approveAgent(
 *   { transport, wallet },
 *   { agentAddress: "0x...", agentName: "..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-an-api-wallet
 */
export declare function approveAgent(config: ExchangeConfig, params: ApproveAgentParameters, opts?: ApproveAgentOptions): Promise<ApproveAgentSuccessResponse>;
export {};
//# sourceMappingURL=approveAgent.d.ts.map