import * as v from "valibot";
/**
 * Request builder fee approval.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#check-builder-fee-approval
 */
export declare const MaxBuilderFeeRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"maxBuilderFee", undefined>, v.DescriptionAction<"maxBuilderFee", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Builder address. */
    readonly builder: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Builder address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "maxBuilderFee";
    user: `0x${string}`;
    builder: `0x${string}`;
}, "Request builder fee approval.">]>;
export type MaxBuilderFeeRequest = v.InferOutput<typeof MaxBuilderFeeRequest>;
/**
 * Maximum builder fee approval.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#check-builder-fee-approval
 */
export declare const MaxBuilderFeeResponse: v.SchemaWithPipe<readonly [v.NumberSchema<undefined>, v.DescriptionAction<number, "Maximum builder fee approval.">]>;
export type MaxBuilderFeeResponse = v.InferOutput<typeof MaxBuilderFeeResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode maxBuilderFee} function. */
export type MaxBuilderFeeParameters = Omit<v.InferInput<typeof MaxBuilderFeeRequest>, "type">;
/**
 * Request builder fee approval.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Maximum builder fee approval.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { maxBuilderFee } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await maxBuilderFee(
 *   { transport },
 *   { user: "0x...", builder: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#check-builder-fee-approval
 */
export declare function maxBuilderFee(config: InfoConfig, params: MaxBuilderFeeParameters, signal?: AbortSignal): Promise<MaxBuilderFeeResponse>;
//# sourceMappingURL=maxBuilderFee.d.ts.map