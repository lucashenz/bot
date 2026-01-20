import * as v from "valibot";
/** Create a sub-account. */
export declare const CreateSubAccountRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"createSubAccount", undefined>, v.DescriptionAction<"createSubAccount", "Type of action.">]>;
        /** Sub-account name. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 16, undefined>, v.DescriptionAction<string, "Sub-account name.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "createSubAccount";
        name: string;
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
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "createSubAccount";
        name: string;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Create a sub-account.">]>;
export type CreateSubAccountRequest = v.InferOutput<typeof CreateSubAccountRequest>;
/** Response for creating a sub-account. */
export declare const CreateSubAccountResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"createSubAccount", undefined>, v.DescriptionAction<"createSubAccount", "Type of response.">]>;
        /** Sub-account address. */
        readonly data: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-account address.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "createSubAccount";
        data: `0x${string}`;
    }, "Response details.">]>;
}, undefined>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
        type: "createSubAccount";
        data: `0x${string}`;
    };
}, "Response for creating a sub-account.">]>;
export type CreateSubAccountResponse = v.InferOutput<typeof CreateSubAccountResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const CreateSubAccountParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"createSubAccount", undefined>, v.DescriptionAction<"createSubAccount", "Type of action.">]>;
    /** Sub-account name. */
    readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 16, undefined>, v.DescriptionAction<string, "Sub-account name.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"createSubAccount", undefined>, v.DescriptionAction<"createSubAccount", "Type of action.">]>;
        /** Sub-account name. */
        readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MinLengthAction<string, 1, undefined>, v.MaxLengthAction<string, 16, undefined>, v.DescriptionAction<string, "Sub-account name.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        name: string;
    }, {
        name: string;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        name: string;
    }, v.StringIssue | v.ObjectIssue | v.MinLengthIssue<string, 1> | v.MaxLengthIssue<string, 16>>;
    readonly "~types"?: {
        readonly input: {
            name: string;
        };
        readonly output: {
            name: string;
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.MinLengthIssue<string, 1> | v.MaxLengthIssue<string, 16>;
    } | undefined;
};
/** Action parameters for the {@linkcode createSubAccount} function. */
export type CreateSubAccountParameters = v.InferInput<typeof CreateSubAccountParameters>;
/** Request options for the {@linkcode createSubAccount} function. */
export type CreateSubAccountOptions = ExtractRequestOptions<v.InferInput<typeof CreateSubAccountRequest>>;
/** Successful variant of {@linkcode CreateSubAccountResponse} without errors. */
export type CreateSubAccountSuccessResponse = ExcludeErrorResponse<CreateSubAccountResponse>;
/**
 * Create a sub-account.
 *
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 *
 * @returns Response for creating a sub-account.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { createSubAccount } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await createSubAccount(
 *   { transport, wallet },
 *   { name: "..." },
 * );
 * ```
 */
export declare function createSubAccount(config: ExchangeConfig, params: CreateSubAccountParameters, opts?: CreateSubAccountOptions): Promise<CreateSubAccountSuccessResponse>;
export {};
//# sourceMappingURL=createSubAccount.d.ts.map