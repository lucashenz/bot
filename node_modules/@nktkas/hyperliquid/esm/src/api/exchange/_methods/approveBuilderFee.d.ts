import * as v from "valibot";
/**
 * Approve a maximum fee rate for a builder.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-a-builder-fee
 */
export declare const ApproveBuilderFeeRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveBuilderFee", undefined>, v.DescriptionAction<"approveBuilderFee", "Type of action.">]>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
        /** Max fee rate (e.g., "0.01%"). */
        readonly maxFeeRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "Max fee rate (e.g., \"0.01%\").">]>;
        /** Builder address. */
        readonly builder: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Builder address.">]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "approveBuilderFee";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        maxFeeRate: `${string}%`;
        builder: `0x${string}`;
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
        type: "approveBuilderFee";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        maxFeeRate: `${string}%`;
        builder: `0x${string}`;
        nonce: number;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
}, "Approve a maximum fee rate for a builder.">]>;
export type ApproveBuilderFeeRequest = v.InferOutput<typeof ApproveBuilderFeeRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-a-builder-fee
 */
export declare const ApproveBuilderFeeResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
export type ApproveBuilderFeeResponse = v.InferOutput<typeof ApproveBuilderFeeResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const ApproveBuilderFeeParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveBuilderFee", undefined>, v.DescriptionAction<"approveBuilderFee", "Type of action.">]>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
    /** Max fee rate (e.g., "0.01%"). */
    readonly maxFeeRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "Max fee rate (e.g., \"0.01%\").">]>;
    /** Builder address. */
    readonly builder: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Builder address.">]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"approveBuilderFee", undefined>, v.DescriptionAction<"approveBuilderFee", "Type of action.">]>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
        /** Max fee rate (e.g., "0.01%"). */
        readonly maxFeeRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "Max fee rate (e.g., \"0.01%\").">]>;
        /** Builder address. */
        readonly builder: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Builder address.">]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    }, "type" | "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        maxFeeRate: string;
        builder: string;
    }, {
        maxFeeRate: `${string}%`;
        builder: `0x${string}`;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        maxFeeRate: `${string}%`;
        builder: `0x${string}`;
    }, v.StringIssue | v.ObjectIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42>>;
    readonly "~types"?: {
        readonly input: {
            maxFeeRate: string;
            builder: string;
        };
        readonly output: {
            maxFeeRate: `${string}%`;
            builder: `0x${string}`;
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42>;
    } | undefined;
};
/** Action parameters for the {@linkcode approveBuilderFee} function. */
export type ApproveBuilderFeeParameters = v.InferInput<typeof ApproveBuilderFeeParameters>;
/** Request options for the {@linkcode approveBuilderFee} function. */
export type ApproveBuilderFeeOptions = ExtractRequestOptions<v.InferInput<typeof ApproveBuilderFeeRequest>>;
/** Successful variant of {@linkcode ApproveBuilderFeeResponse} without errors. */
export type ApproveBuilderFeeSuccessResponse = ExcludeErrorResponse<ApproveBuilderFeeResponse>;
/** EIP-712 types for the {@linkcode approveBuilderFee} function. */
export declare const ApproveBuilderFeeTypes: {
    "HyperliquidTransaction:ApproveBuilderFee": {
        name: string;
        type: string;
    }[];
};
/**
 * Approve a maximum fee rate for a builder.
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
 * import { approveBuilderFee } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await approveBuilderFee(
 *   { transport, wallet },
 *   { maxFeeRate: "0.01%", builder: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#approve-a-builder-fee
 */
export declare function approveBuilderFee(config: ExchangeConfig, params: ApproveBuilderFeeParameters, opts?: ApproveBuilderFeeOptions): Promise<ApproveBuilderFeeSuccessResponse>;
export {};
//# sourceMappingURL=approveBuilderFee.d.ts.map