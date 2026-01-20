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
exports.AllDexsClearinghouseStateEvent = exports.AllDexsClearinghouseStateRequest = void 0;
exports.allDexsClearinghouseState = allDexsClearinghouseState;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const clearinghouseState_js_1 = require("../../info/_methods/clearinghouseState.js");
/** Subscription to clearinghouse state events for all DEXs for a specific user. */
exports.AllDexsClearinghouseStateRequest = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("allDexsClearinghouseState"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Subscription to clearinghouse state events for all DEXs for a specific user."));
})();
/** Event of clearinghouse states for all DEXs for a specific user. */
exports.AllDexsClearinghouseStateEvent = (() => {
    return v.pipe(v.object({
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
        /** Array of tuples of dex names and clearinghouse states. */
        clearinghouseStates: v.pipe(v.array(v.tuple([
            v.string(),
            clearinghouseState_js_1.ClearinghouseStateResponse,
        ])), v.description("Array of tuples of dex names and clearinghouse states.")),
    }), v.description("Event of clearinghouse states for all DEXs for a specific user."));
})();
/**
 * Subscribe to clearinghouse states for all DEXs for a specific user.
 *
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
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
 * import { allDexsClearinghouseState } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await allDexsClearinghouseState(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
function allDexsClearinghouseState(config, params, listener) {
    const payload = v.parse(exports.AllDexsClearinghouseStateRequest, {
        type: "allDexsClearinghouseState",
        ...params,
    });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.user === payload.user) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=allDexsClearinghouseState.js.map