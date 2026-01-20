import * as v from "valibot";
/** Opt Out of Spot Dusting. */
export declare const SpotUserRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotUser", undefined>, v.DescriptionAction<"spotUser", "Type of action.">]>;
        /** Spot dusting options. */
        readonly toggleSpotDusting: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Opt out of spot dusting. */
            readonly optOut: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Opt out of spot dusting.">]>;
        }, undefined>, v.DescriptionAction<{
            optOut: boolean;
        }, "Spot dusting options.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "spotUser";
        toggleSpotDusting: {
            optOut: boolean;
        };
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
        type: "spotUser";
        toggleSpotDusting: {
            optOut: boolean;
        };
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Opt Out of Spot Dusting.">]>;
export type SpotUserRequest = v.InferOutput<typeof SpotUserRequest>;
/** Successful response without specific data or error response. */
export declare const SpotUserResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
export type SpotUserResponse = v.InferOutput<typeof SpotUserResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const SpotUserParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotUser", undefined>, v.DescriptionAction<"spotUser", "Type of action.">]>;
    /** Spot dusting options. */
    readonly toggleSpotDusting: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Opt out of spot dusting. */
        readonly optOut: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Opt out of spot dusting.">]>;
    }, undefined>, v.DescriptionAction<{
        optOut: boolean;
    }, "Spot dusting options.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotUser", undefined>, v.DescriptionAction<"spotUser", "Type of action.">]>;
        /** Spot dusting options. */
        readonly toggleSpotDusting: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Opt out of spot dusting. */
            readonly optOut: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Opt out of spot dusting.">]>;
        }, undefined>, v.DescriptionAction<{
            optOut: boolean;
        }, "Spot dusting options.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        toggleSpotDusting: {
            optOut: boolean;
        };
    }, {
        toggleSpotDusting: {
            optOut: boolean;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        toggleSpotDusting: {
            optOut: boolean;
        };
    }, v.ObjectIssue | v.BooleanIssue>;
    readonly "~types"?: {
        readonly input: {
            toggleSpotDusting: {
                optOut: boolean;
            };
        };
        readonly output: {
            toggleSpotDusting: {
                optOut: boolean;
            };
        };
        readonly issue: v.ObjectIssue | v.BooleanIssue;
    } | undefined;
};
/** Action parameters for the {@linkcode spotUser} function. */
export type SpotUserParameters = v.InferInput<typeof SpotUserParameters>;
/** Request options for the {@linkcode spotUser} function. */
export type SpotUserOptions = ExtractRequestOptions<v.InferInput<typeof SpotUserRequest>>;
/** Successful variant of {@linkcode SpotUserResponse} without errors. */
export type SpotUserSuccessResponse = ExcludeErrorResponse<SpotUserResponse>;
/**
 * Opt Out of Spot Dusting.
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
 * import { spotUser } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotUser(
 *   { transport, wallet },
 *   { toggleSpotDusting: { optOut: false } },
 * );
 * ```
 */
export declare function spotUser(config: ExchangeConfig, params: SpotUserParameters, opts?: SpotUserOptions): Promise<SpotUserSuccessResponse>;
export {};
//# sourceMappingURL=spotUser.d.ts.map