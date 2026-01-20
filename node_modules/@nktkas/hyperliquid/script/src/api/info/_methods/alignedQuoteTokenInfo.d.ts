import * as v from "valibot";
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 */
export declare const AlignedQuoteTokenInfoRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"alignedQuoteTokenInfo", undefined>, v.DescriptionAction<"alignedQuoteTokenInfo", "Type of request.">]>;
    /** Token index. */
    readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token index.">]>;
}, undefined>, v.DescriptionAction<{
    type: "alignedQuoteTokenInfo";
    token: number;
}, "Request supply, rate, and pending payment information for an aligned quote token.">]>;
export type AlignedQuoteTokenInfoRequest = v.InferOutput<typeof AlignedQuoteTokenInfoRequest>;
/**
 * Supply, rate, and pending payment information for an aligned quote token.
 */
export declare const AlignedQuoteTokenInfoResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Whether the token is aligned. */
    readonly isAligned: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the token is aligned.">]>;
    /** Timestamp (in ms since epoch) when the token was first aligned. */
    readonly firstAlignedTime: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp (in ms since epoch) when the token was first aligned.">]>;
    /** Total EVM minted supply. */
    readonly evmMintedSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total EVM minted supply.">]>;
    /** Daily amount owed as an array of [date, amount] tuples. */
    readonly dailyAmountOwed: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IsoDateAction<string, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "Daily amount owed as an array of [date, amount] tuples.">]>;
    /** Predicted rate. */
    readonly predictedRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Predicted rate.">]>;
}, undefined>, v.DescriptionAction<{
    isAligned: boolean;
    firstAlignedTime: number;
    evmMintedSupply: string;
    dailyAmountOwed: [string, string][];
    predictedRate: string;
}, "Supply, rate, and pending payment information for an aligned quote token.">]>;
export type AlignedQuoteTokenInfoResponse = v.InferOutput<typeof AlignedQuoteTokenInfoResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode alignedQuoteTokenInfo} function. */
export type AlignedQuoteTokenInfoParameters = Omit<v.InferInput<typeof AlignedQuoteTokenInfoRequest>, "type">;
/**
 * Request supply, rate, and pending payment information for an aligned quote token.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Supply, rate, and pending payment information for an aligned quote token.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { alignedQuoteTokenInfo } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await alignedQuoteTokenInfo(
 *   { transport },
 *   { token: 1328 },
 * );
 * ```
 */
export declare function alignedQuoteTokenInfo(config: InfoConfig, params: AlignedQuoteTokenInfoParameters, signal?: AbortSignal): Promise<AlignedQuoteTokenInfoResponse>;
//# sourceMappingURL=alignedQuoteTokenInfo.d.ts.map