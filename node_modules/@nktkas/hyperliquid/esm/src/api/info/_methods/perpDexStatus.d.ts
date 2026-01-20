import * as v from "valibot";
/**
 * Request perp DEX status.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
 */
export declare const PerpDexStatusRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDexStatus", undefined>, v.DescriptionAction<"perpDexStatus", "Type of request.">]>;
    /** Perp dex name of builder-deployed dex market. The empty string represents the first perp dex. */
    readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Perp dex name of builder-deployed dex market. The empty string represents the first perp dex.">]>;
}, undefined>, v.DescriptionAction<{
    type: "perpDexStatus";
    dex: string;
}, "Request perp DEX status.">]>;
export type PerpDexStatusRequest = v.InferOutput<typeof PerpDexStatusRequest>;
/**
 * Status of a perp DEX.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
 */
export declare const PerpDexStatusResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Total net deposit. */
    readonly totalNetDeposit: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total net deposit.">]>;
}, undefined>, v.DescriptionAction<{
    totalNetDeposit: string;
}, "Status of a perp DEX.">]>;
export type PerpDexStatusResponse = v.InferOutput<typeof PerpDexStatusResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode perpDexStatus} function. */
export type PerpDexStatusParameters = Omit<v.InferInput<typeof PerpDexStatusRequest>, "type">;
/**
 * Request perp DEX status.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - An {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} can be used to cancel the request.
 *
 * @returns Status of a perp DEX.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { perpDexStatus } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await perpDexStatus({ transport }, { dex: "test" });
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#get-perp-market-status
 */
export declare function perpDexStatus(config: InfoConfig, params: PerpDexStatusParameters, signal?: AbortSignal): Promise<PerpDexStatusResponse>;
//# sourceMappingURL=perpDexStatus.d.ts.map