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
exports.WebData2Response = exports.WebData2Request = void 0;
exports.webData2 = webData2;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
const clearinghouseState_js_1 = require("./clearinghouseState.js");
const meta_js_1 = require("./meta.js");
const spotClearinghouseState_js_1 = require("./spotClearinghouseState.js");
const frontendOpenOrders_js_1 = require("./frontendOpenOrders.js");
const leadingVaults_js_1 = require("./leadingVaults.js");
const perpsAtOpenInterestCap_js_1 = require("./perpsAtOpenInterestCap.js");
/**
 * Request comprehensive user and market data.
 */
exports.WebData2Request = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("webData2"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Request comprehensive user and market data."));
})();
/**
 * Comprehensive user and market data.
 */
exports.WebData2Response = (() => {
    return v.pipe(v.object({
        /** Account summary for perpetual trading. */
        clearinghouseState: v.pipe(clearinghouseState_js_1.ClearinghouseStateResponse, v.description("Account summary for perpetual trading.")),
        /** Array of leading vaults for a user. */
        leadingVaults: v.pipe(leadingVaults_js_1.LeadingVaultsResponse, v.description("Array of leading vaults for a user.")),
        /** Total equity in vaults. */
        totalVaultEquity: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total equity in vaults.")),
        /** Array of open orders with additional display information. */
        openOrders: v.pipe(frontendOpenOrders_js_1.FrontendOpenOrdersResponse, v.description("Array of open orders with additional display information.")),
        /** Agent address if one exists. */
        agentAddress: v.pipe(v.nullable(_schemas_js_1.Address), v.description("Agent address if one exists.")),
        /** Timestamp until which the agent is valid. */
        agentValidUntil: v.pipe(v.nullable(_schemas_js_1.UnsignedInteger), v.description("Timestamp until which the agent is valid.")),
        /** Cumulative ledger value. */
        cumLedger: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Cumulative ledger value.")),
        /** Metadata for perpetual assets. */
        meta: v.pipe(meta_js_1.MetaResponse, v.description("Metadata for perpetual assets.")),
        /** Array of contexts for each perpetual asset. */
        assetCtxs: v.pipe(v.array(commonSchemas_js_1.PerpAssetCtxSchema), v.description("Array of contexts for each perpetual asset.")),
        /** Server timestamp (in ms since epoch). */
        serverTime: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Server timestamp (in ms since epoch).")),
        /** Whether this account is a vault. */
        isVault: v.pipe(v.boolean(), v.description("Whether this account is a vault.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
        /** Array of tuples containing TWAP order ID and its state. */
        twapStates: v.pipe(v.array(v.tuple([_schemas_js_1.UnsignedInteger, commonSchemas_js_1.TwapStateSchema])), v.description("Array of tuples containing TWAP order ID and its state.")),
        /** Account summary for spot trading. */
        spotState: v.pipe(v.optional(spotClearinghouseState_js_1.SpotClearinghouseStateResponse), v.description("Account summary for spot trading.")),
        /** Asset context for each spot asset. */
        spotAssetCtxs: v.pipe(v.array(commonSchemas_js_1.SpotAssetCtxSchema), v.description("Asset context for each spot asset.")),
        /** Whether the user has opted out of spot dusting. */
        optOutOfSpotDusting: v.pipe(v.optional(v.literal(true)), v.description("Whether the user has opted out of spot dusting.")),
        /** Assets currently at their open interest cap. */
        perpsAtOpenInterestCap: v.pipe(v.optional(perpsAtOpenInterestCap_js_1.PerpsAtOpenInterestCapResponse), v.description("Assets currently at their open interest cap.")),
    }), v.description("Comprehensive user and market data."));
})();
/**
 * Request comprehensive user and market data.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Comprehensive user and market data.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { webData2 } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await webData2(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function webData2(config, params, signal) {
    const request = v.parse(exports.WebData2Request, {
        type: "webData2",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=webData2.js.map