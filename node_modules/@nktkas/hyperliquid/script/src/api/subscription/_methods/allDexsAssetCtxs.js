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
exports.AllDexsAssetCtxsEvent = exports.AllDexsAssetCtxsRequest = void 0;
exports.allDexsAssetCtxs = allDexsAssetCtxs;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const commonSchemas_js_1 = require("../../info/_methods/_base/commonSchemas.js");
/** Subscription to asset context events for all DEXs. */
exports.AllDexsAssetCtxsRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("allDexsAssetCtxs"), v.description("Type of subscription.")),
    }), v.description("Subscription to asset context events for all DEXs."));
})();
/** Event of asset contexts for all DEXs. */
exports.AllDexsAssetCtxsEvent = (() => {
    return v.pipe(v.object({
        /** Array of tuples of dex names and contexts for each perpetual asset. */
        ctxs: v.pipe(v.array(v.tuple([
            v.string(),
            v.array(commonSchemas_js_1.PerpAssetCtxSchema),
        ])), v.description("Array of tuples of dex names and contexts for each perpetual asset.")),
    }), v.description("Event of asset contexts for all DEXs."));
})();
/**
 * Subscribe to asset contexts for all DEXs.
 *
 * @param config - General configuration for Subscription API subscriptions.
 * @param listener - A callback function to be called when the event is received.
 *
 * @returns A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { allDexsAssetCtxs } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await allDexsAssetCtxs(
 *   { transport },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
function allDexsAssetCtxs(config, listener) {
    const payload = v.parse(exports.AllDexsAssetCtxsRequest, {
        type: "allDexsAssetCtxs",
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        listener(e.detail);
    });
}
//# sourceMappingURL=allDexsAssetCtxs.js.map