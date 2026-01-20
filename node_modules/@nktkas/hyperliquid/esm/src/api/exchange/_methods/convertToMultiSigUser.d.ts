import * as v from "valibot";
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export declare const ConvertToMultiSigUserRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"convertToMultiSigUser", undefined>, v.DescriptionAction<"convertToMultiSigUser", "Type of action.">]>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
        /**
         * Signers configuration.
         *
         * Must be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.
         */
        readonly signers: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.ParseJsonAction<string, undefined, undefined>, v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, "Multi-sig config or `null` to revert to single-sig.">]>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, "Multi-sig config or `null` to revert to single-sig.">]>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>], undefined>, v.DescriptionAction<string, string>]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "convertToMultiSigUser";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        signers: string;
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
        type: "convertToMultiSigUser";
        signatureChainId: `0x${string}`;
        hyperliquidChain: "Testnet" | "Mainnet";
        signers: string;
        nonce: number;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
}, "Convert a single-signature account to a multi-signature account or vice versa.">]>;
export type ConvertToMultiSigUserRequest = v.InferOutput<typeof ConvertToMultiSigUserRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export declare const ConvertToMultiSigUserResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
export type ConvertToMultiSigUserResponse = v.InferOutput<typeof ConvertToMultiSigUserResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const ConvertToMultiSigUserParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"convertToMultiSigUser", undefined>, v.DescriptionAction<"convertToMultiSigUser", "Type of action.">]>;
    /** Chain ID in hex format for EIP-712 signing. */
    readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
    /** HyperLiquid network type. */
    readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
    /**
     * Signers configuration.
     *
     * Must be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.
     */
    readonly signers: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.ParseJsonAction<string, undefined, undefined>, v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
        /** List of authorized user addresses. */
        readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
        /** Minimum number of signatures required. */
        readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null, "Multi-sig config or `null` to revert to single-sig.">]>, v.StringifyJsonAction<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null, undefined, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
        /** List of authorized user addresses. */
        readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
        /** Minimum number of signatures required. */
        readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null, "Multi-sig config or `null` to revert to single-sig.">]>, v.StringifyJsonAction<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null, undefined, undefined>]>], undefined>, v.DescriptionAction<string, string>]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"convertToMultiSigUser", undefined>, v.DescriptionAction<"convertToMultiSigUser", "Type of action.">]>;
        /** Chain ID in hex format for EIP-712 signing. */
        readonly signatureChainId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.DescriptionAction<`0x${string}`, "Chain ID in hex format for EIP-712 signing.">]>;
        /** HyperLiquid network type. */
        readonly hyperliquidChain: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
        /**
         * Signers configuration.
         *
         * Must be `ConvertToMultiSigUserRequestSignersSchema` converted to a string via `JSON.stringify(...)`.
         */
        readonly signers: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.ParseJsonAction<string, undefined, undefined>, v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, "Multi-sig config or `null` to revert to single-sig.">]>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** List of authorized user addresses. */
            readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}`[], "List of authorized user addresses.">]>;
            /** Minimum number of signatures required. */
            readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.MaxValueAction<number, 10, undefined>, v.DescriptionAction<number, "Minimum number of signatures required.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, "Multi-sig config or `null` to revert to single-sig.">]>, v.StringifyJsonAction<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null, undefined, undefined>]>], undefined>, v.DescriptionAction<string, string>]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    }, "type" | "nonce" | "signatureChainId" | "hyperliquidChain">;
    readonly "~standard": v.StandardProps<{
        signers: string | {
            authorizedUsers: string[];
            threshold: string | number;
        } | null;
    }, {
        signers: string;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        signers: string;
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.MinValueIssue<number, 1> | v.MaxValueIssue<number, 10> | v.ParseJsonIssue<string> | v.StringifyJsonIssue<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null> | v.UnionIssue<v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.MinValueIssue<number, 1> | v.MaxValueIssue<number, 10> | v.ParseJsonIssue<string> | v.StringifyJsonIssue<{
        authorizedUsers: `0x${string}`[];
        threshold: number;
    } | null>>>;
    readonly "~types"?: {
        readonly input: {
            signers: string | {
                authorizedUsers: string[];
                threshold: string | number;
            } | null;
        };
        readonly output: {
            signers: string;
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.MinValueIssue<number, 1> | v.MaxValueIssue<number, 10> | v.ParseJsonIssue<string> | v.StringifyJsonIssue<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null> | v.UnionIssue<v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.MinValueIssue<number, 1> | v.MaxValueIssue<number, 10> | v.ParseJsonIssue<string> | v.StringifyJsonIssue<{
            authorizedUsers: `0x${string}`[];
            threshold: number;
        } | null>>;
    } | undefined;
};
/** Action parameters for the {@linkcode convertToMultiSigUser} function. */
export type ConvertToMultiSigUserParameters = v.InferInput<typeof ConvertToMultiSigUserParameters>;
/** Request options for the {@linkcode convertToMultiSigUser} function. */
export type ConvertToMultiSigUserOptions = ExtractRequestOptions<v.InferInput<typeof ConvertToMultiSigUserRequest>>;
/** Successful variant of {@linkcode ConvertToMultiSigUserResponse} without errors. */
export type ConvertToMultiSigUserSuccessResponse = ExcludeErrorResponse<ConvertToMultiSigUserResponse>;
/** EIP-712 types for the {@linkcode convertToMultiSigUser} function. */
export declare const ConvertToMultiSigUserTypes: {
    "HyperliquidTransaction:ConvertToMultiSigUser": {
        name: string;
        type: string;
    }[];
};
/**
 * Convert a single-signature account to a multi-signature account or vice versa.
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
 * @example Convert to multi-sig user
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { convertToMultiSigUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await convertToMultiSigUser(
 *   { transport, wallet },
 *   {
 *     signers: {
 *       authorizedUsers: ["0x...", "0x...", "0x..."],
 *       threshold: 2,
 *     },
 *   },
 * );
 * ```
 *
 * @example Convert to single-sig user
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { convertToMultiSigUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await convertToMultiSigUser(
 *   { transport, wallet },
 *   { signers: null },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/hypercore/multi-sig
 */
export declare function convertToMultiSigUser(config: ExchangeConfig, params: ConvertToMultiSigUserParameters, opts?: ConvertToMultiSigUserOptions): Promise<ConvertToMultiSigUserSuccessResponse>;
export {};
//# sourceMappingURL=convertToMultiSigUser.d.ts.map