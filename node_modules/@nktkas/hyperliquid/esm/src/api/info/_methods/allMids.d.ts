import * as v from "valibot";
/**
 * Request mid coin prices.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
 */
export declare const AllMidsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"allMids", undefined>, v.DescriptionAction<"allMids", "Type of request.">]>;
    /** DEX name (empty string for main dex). */
    readonly dex: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "DEX name (empty string for main dex).">]>;
}, undefined>, v.DescriptionAction<{
    type: "allMids";
    dex?: string | undefined;
}, "Request mid coin prices.">]>;
export type AllMidsRequest = v.InferOutput<typeof AllMidsRequest>;
/**
 * Mapping of coin symbols to mid prices.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
 */
export declare const AllMidsResponse: v.SchemaWithPipe<readonly [v.RecordSchema<v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, undefined>, v.DescriptionAction<{
    [x: string]: string;
}, "Mapping of coin symbols to mid prices.">]>;
export type AllMidsResponse = v.InferOutput<typeof AllMidsResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode allMids} function. */
export type AllMidsParameters = Omit<v.InferInput<typeof AllMidsRequest>, "type">;
/**
 * Request mid coin prices.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Mapping of coin symbols to mid prices.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { allMids } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await allMids({ transport });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-mids-for-all-coins
 */
export declare function allMids(config: InfoConfig, params?: AllMidsParameters, signal?: AbortSignal): Promise<AllMidsResponse>;
export declare function allMids(config: InfoConfig, signal?: AbortSignal): Promise<AllMidsResponse>;
//# sourceMappingURL=allMids.d.ts.map