import * as v from "valibot";
/**
 * Request multi-sig signers for a user.
 */
export declare const UserToMultiSigSignersRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userToMultiSigSigners", undefined>, v.DescriptionAction<"userToMultiSigSigners", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userToMultiSigSigners";
    user: `0x${string}`;
}, "Request multi-sig signers for a user.">]>;
export type UserToMultiSigSignersRequest = v.InferOutput<typeof UserToMultiSigSignersRequest>;
/**
 * Multi-sig signers for a user or null if the user does not have any multi-sig signers.
 */
export declare const UserToMultiSigSignersResponse: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
    /** Authorized users addresses. */
    readonly authorizedUsers: v.SchemaWithPipe<readonly [v.ArraySchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.NonEmptyAction<`0x${string}`[], undefined>, v.DescriptionAction<`0x${string}`[], "Authorized users addresses.">]>;
    /** Threshold number of signatures required. */
    readonly threshold: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.MinValueAction<number, 1, undefined>, v.DescriptionAction<number, "Threshold number of signatures required.">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    authorizedUsers: `0x${string}`[];
    threshold: number;
} | null, "Multi-sig signers for a user or null if the user does not have any multi-sig signers.">]>;
export type UserToMultiSigSignersResponse = v.InferOutput<typeof UserToMultiSigSignersResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userToMultiSigSigners} function. */
export type UserToMultiSigSignersParameters = Omit<v.InferInput<typeof UserToMultiSigSignersRequest>, "type">;
/**
 * Request multi-sig signers for a user.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Multi-sig signers for a user or null if the user does not have any multi-sig signers.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userToMultiSigSigners } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userToMultiSigSigners(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
export declare function userToMultiSigSigners(config: InfoConfig, params: UserToMultiSigSignersParameters, signal?: AbortSignal): Promise<UserToMultiSigSignersResponse>;
//# sourceMappingURL=userToMultiSigSigners.d.ts.map