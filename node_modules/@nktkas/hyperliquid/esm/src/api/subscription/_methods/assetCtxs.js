import * as v from "valibot";
// ============================================================
// API Schemas
// ============================================================
import { PerpAssetCtxSchema } from "../../info/_methods/_base/commonSchemas.js";
/** Subscription to context events for all perpetual assets. */
export const AssetCtxsRequest = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("assetCtxs"), v.description("Type of subscription.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Subscription to context events for all perpetual assets."));
})();
/** Event of asset contexts for all perpetual assets on a specified DEX. */
export const AssetCtxsEvent = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.string(), v.description("DEX name (empty string for main dex).")),
        /** Array of context information for each perpetual asset. */
        ctxs: v.pipe(v.array(PerpAssetCtxSchema), v.description("Array of context information for each perpetual asset.")),
    }), v.description("Event of asset contexts for all perpetual assets on a specified DEX."));
})();
export function assetCtxs(config, paramsOrListener, maybeListener) {
    const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
    const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
    const payload = v.parse(AssetCtxsRequest, {
        type: "assetCtxs",
        ...params,
        dex: params.dex ?? "", // same value as in response
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.dex === payload.dex) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=assetCtxs.js.map