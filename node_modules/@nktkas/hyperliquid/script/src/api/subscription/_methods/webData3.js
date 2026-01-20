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
exports.WebData3Event = exports.WebData3Request = void 0;
exports.webData3 = webData3;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const leadingVaults_js_1 = require("../../info/_methods/leadingVaults.js");
const perpsAtOpenInterestCap_js_1 = require("../../info/_methods/perpsAtOpenInterestCap.js");
/** Subscription to comprehensive user and market data events. */
exports.WebData3Request = (() => {
    return v.pipe(v.object({
        /** Type of subscription. */
        type: v.pipe(v.literal("webData3"), v.description("Type of subscription.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Subscription to comprehensive user and market data events."));
})();
/** Event of comprehensive user and market data. */
exports.WebData3Event = (() => {
    return v.pipe(v.object({
        /** User state information. */
        userState: v.pipe(v.object({
            /** Agent address if one exists. */
            agentAddress: v.pipe(v.nullable(_schemas_js_1.Address), v.description("Agent address if one exists.")),
            /** Timestamp until which the agent is valid. */
            agentValidUntil: v.pipe(v.nullable(_schemas_js_1.UnsignedInteger), v.description("Timestamp until which the agent is valid.")),
            /** Cumulative ledger value. */
            cumLedger: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Cumulative ledger value.")),
            /** Server timestamp (in ms since epoch). */
            serverTime: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Server timestamp (in ms since epoch).")),
            /** Whether this account is a vault. */
            isVault: v.pipe(v.boolean(), v.description("Whether this account is a vault.")),
            /** User address. */
            user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
            /** Whether the user has opted out of spot dusting. */
            optOutOfSpotDusting: v.pipe(v.optional(v.literal(true)), v.description("Whether the user has opted out of spot dusting.")),
            /** Whether DEX abstraction is enabled. */
            dexAbstractionEnabled: v.pipe(v.optional(v.boolean()), v.description("Whether DEX abstraction is enabled.")),
            /** Abstraction mode for the user account. */
            abstraction: v.pipe(v.optional(v.picklist(["dexAbstraction", "disabled"])), v.description("Abstraction mode for the user account.")),
        }), v.description("User state information.")),
        /** Array of perpetual DEX states. */
        perpDexStates: v.pipe(v.array(v.object({
            /** Total equity in vaults. */
            totalVaultEquity: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total equity in vaults.")),
            /** Assets currently at their open interest cap. */
            perpsAtOpenInterestCap: v.pipe(v.optional(perpsAtOpenInterestCap_js_1.PerpsAtOpenInterestCapResponse), v.description("Assets currently at their open interest cap.")),
            /** Array of leading vaults. */
            leadingVaults: v.pipe(v.optional(leadingVaults_js_1.LeadingVaultsResponse), v.description("Array of leading vaults.")),
        })), v.description("Array of perpetual DEX states.")),
    }), v.description("Event of comprehensive user and market data."));
})();
/**
 * Subscribe to comprehensive user and market data updates.
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
 * import { webData3 } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await webData3(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
function webData3(config, params, listener) {
    const payload = v.parse(exports.WebData3Request, { type: "webData3", ...params });
    return config.transport.subscribe(payload.type, payload, (e) => {
        if (e.detail.userState.user === payload.user) {
            listener(e.detail);
        }
    });
}
//# sourceMappingURL=webData3.js.map