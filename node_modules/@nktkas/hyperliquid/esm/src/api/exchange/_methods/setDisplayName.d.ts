import * as v from "valibot";
/** Set the display name in the leaderboard. */
export declare const SetDisplayNameRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"setDisplayName", undefined>, v.DescriptionAction<"setDisplayName", "Type of action.">]>;
        /**
         * Display name.
         * Set to an empty string to remove the display name.
         */
        readonly displayName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MaxLengthAction<string, 20, undefined>, v.DescriptionAction<string, string>]>;
    }, undefined>, v.DescriptionAction<{
        type: "setDisplayName";
        displayName: string;
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
        type: "setDisplayName";
        displayName: string;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Set the display name in the leaderboard.">]>;
export type SetDisplayNameRequest = v.InferOutput<typeof SetDisplayNameRequest>;
/** Successful response without specific data or error response. */
export declare const SetDisplayNameResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
export type SetDisplayNameResponse = v.InferOutput<typeof SetDisplayNameResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const SetDisplayNameParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"setDisplayName", undefined>, v.DescriptionAction<"setDisplayName", "Type of action.">]>;
    /**
     * Display name.
     * Set to an empty string to remove the display name.
     */
    readonly displayName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MaxLengthAction<string, 20, undefined>, v.DescriptionAction<string, string>]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"setDisplayName", undefined>, v.DescriptionAction<"setDisplayName", "Type of action.">]>;
        /**
         * Display name.
         * Set to an empty string to remove the display name.
         */
        readonly displayName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.MaxLengthAction<string, 20, undefined>, v.DescriptionAction<string, string>]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        displayName: string;
    }, {
        displayName: string;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        displayName: string;
    }, v.StringIssue | v.ObjectIssue | v.MaxLengthIssue<string, 20>>;
    readonly "~types"?: {
        readonly input: {
            displayName: string;
        };
        readonly output: {
            displayName: string;
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.MaxLengthIssue<string, 20>;
    } | undefined;
};
/** Action parameters for the {@linkcode setDisplayName} function. */
export type SetDisplayNameParameters = v.InferInput<typeof SetDisplayNameParameters>;
/** Request options for the {@linkcode setDisplayName} function. */
export type SetDisplayNameOptions = ExtractRequestOptions<v.InferInput<typeof SetDisplayNameRequest>>;
/** Successful variant of {@linkcode SetDisplayNameResponse} without errors. */
export type SetDisplayNameSuccessResponse = ExcludeErrorResponse<SetDisplayNameResponse>;
/**
 * Set the display name in the leaderboard.
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
 * import { setDisplayName } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await setDisplayName(
 *   { transport, wallet },
 *   { displayName: "..." },
 * );
 * ```
 */
export declare function setDisplayName(config: ExchangeConfig, params: SetDisplayNameParameters, opts?: SetDisplayNameOptions): Promise<SetDisplayNameSuccessResponse>;
export {};
//# sourceMappingURL=setDisplayName.d.ts.map