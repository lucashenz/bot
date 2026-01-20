import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { PerpAssetCtxSchema } from "./_base/commonSchemas.js";
import { MetaResponse } from "./meta.js";
/**
 * Request metadata and asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export const MetaAndAssetCtxsRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("metaAndAssetCtxs"), v.description("Type of request.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Request metadata and asset contexts."));
})();
/**
 * Tuple containing metadata and array of asset contexts.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-asset-contexts-includes-mark-price-current-funding-open-interest-etc
 */
export const MetaAndAssetCtxsResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.tuple([
        MetaResponse,
        v.array(PerpAssetCtxSchema),
    ]), v.description("Tuple containing metadata and array of asset contexts."));
})();
export function metaAndAssetCtxs(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = v.parse(MetaAndAssetCtxsRequest, {
        type: "metaAndAssetCtxs",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=metaAndAssetCtxs.js.map