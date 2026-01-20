import * as v from "valibot";
/** Jail or unjail self as a validator signer. */
export declare const CSignerActionRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to jail or unjail the signer. */
    readonly action: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
        /** Jail the signer. */
        readonly jailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Jail the signer.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
        /** Unjail the signer. */
        readonly unjailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unjail the signer.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "CSignerAction";
        jailSelf: null;
    } | {
        type: "CSignerAction";
        unjailSelf: null;
    }, "Action to jail or unjail the signer.">]>;
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
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "CSignerAction";
        jailSelf: null;
    } | {
        type: "CSignerAction";
        unjailSelf: null;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Jail or unjail self as a validator signer.">]>;
export type CSignerActionRequest = v.InferOutput<typeof CSignerActionRequest>;
/** Successful response without specific data or error response. */
export declare const CSignerActionResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
export type CSignerActionResponse = v.InferOutput<typeof CSignerActionResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const CSignerActionParameters: v.UnionSchema<((Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
    /** Jail the signer. */
    readonly jailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Jail the signer.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
        /** Jail the signer. */
        readonly jailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Jail the signer.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        jailSelf: null;
    }, {
        jailSelf: null;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        jailSelf: null;
    }, v.ObjectIssue | v.NullIssue>;
    readonly "~types"?: {
        readonly input: {
            jailSelf: null;
        };
        readonly output: {
            jailSelf: null;
        };
        readonly issue: v.ObjectIssue | v.NullIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
    /** Unjail the signer. */
    readonly unjailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unjail the signer.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CSignerAction", undefined>, v.DescriptionAction<"CSignerAction", "Type of action.">]>;
        /** Unjail the signer. */
        readonly unjailSelf: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unjail the signer.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        unjailSelf: null;
    }, {
        unjailSelf: null;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        unjailSelf: null;
    }, v.ObjectIssue | v.NullIssue>;
    readonly "~types"?: {
        readonly input: {
            unjailSelf: null;
        };
        readonly output: {
            unjailSelf: null;
        };
        readonly issue: v.ObjectIssue | v.NullIssue;
    } | undefined;
}))[], undefined>;
/** Action parameters for the {@linkcode cSignerAction} function. */
export type CSignerActionParameters = v.InferInput<typeof CSignerActionParameters>;
/** Request options for the {@linkcode cSignerAction} function. */
export type CSignerActionOptions = ExtractRequestOptions<v.InferInput<typeof CSignerActionRequest>>;
/** Successful variant of {@linkcode CSignerActionResponse} without errors. */
export type CSignerActionSuccessResponse = ExcludeErrorResponse<CSignerActionResponse>;
/**
 * Jail or unjail self as a validator signer.
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
 * @example Jail self
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cSignerAction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cSignerAction(
 *   { transport, wallet },
 *   { jailSelf: null },
 * );
 * ```
 * @example Unjail self
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cSignerAction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cSignerAction(
 *   { transport, wallet },
 *   { unjailSelf: null },
 * );
 * ```
 */
export declare function cSignerAction(config: ExchangeConfig, params: CSignerActionParameters, opts?: CSignerActionOptions): Promise<CSignerActionSuccessResponse>;
export {};
//# sourceMappingURL=cSignerAction.d.ts.map