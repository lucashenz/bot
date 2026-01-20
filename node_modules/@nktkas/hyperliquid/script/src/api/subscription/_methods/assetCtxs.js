"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetCtxsEvent = exports.AssetCtxsRequest = void 0;
exports.assetCtxs = assetCtxs;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const commonSchemas_js_1 = require("../../info/_methods/_base/commonSchemas.js");
/** Subscription to context events for all perpetual assets. */
exports.AssetCtxsRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("assetCtxs"), v.description("Type of subscription.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Subscription to context events for all perpetual assets."));
})();
/** Event of asset contexts for all perpetual assets on a specified DEX. */
exports.AssetCtxsEvent = (() => {
    return v.pipe(v.object({
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.string(), v.description("DEX name (empty string for main dex).")),
        /** Array of context information for each perpetual asset. */
        ctxs: v.pipe(v.array(commonSchemas_js_1.PerpAssetCtxSchema), v.description("Array of context information for each perpetual asset.")),
    }), v.description("Event of asset contexts for all perpetual assets on a specified DEX."));
})();
function assetCtxs(config, paramsOrListener, maybeListener) {
    const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
    const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
    const payload = v.parse(exports.AssetCtxsRequest, {
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