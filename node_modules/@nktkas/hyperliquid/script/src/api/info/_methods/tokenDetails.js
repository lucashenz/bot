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
exports.TokenDetailsResponse = exports.TokenDetailsRequest = void 0;
exports.tokenDetails = tokenDetails;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request token details.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
 */
exports.TokenDetailsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("tokenDetails"), v.description("Type of request.")),
        /** Token ID. */
        tokenId: v.pipe(_schemas_js_1.Hex, v.length(34), v.description("Token ID.")),
    }), v.description("Request token details."));
})();
/**
 * Details of a token.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
 */
exports.TokenDetailsResponse = (() => {
    return v.pipe(v.object({
        /** Name of the token. */
        name: v.pipe(v.string(), v.description("Name of the token.")),
        /** Maximum supply of the token. */
        maxSupply: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Maximum supply of the token.")),
        /** Total supply of the token. */
        totalSupply: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total supply of the token.")),
        /** Circulating supply of the token. */
        circulatingSupply: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Circulating supply of the token.")),
        /** Decimal places for the minimum tradable unit. */
        szDecimals: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Decimal places for the minimum tradable unit.")),
        /** Decimal places for the token's smallest unit. */
        weiDecimals: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Decimal places for the token's smallest unit.")),
        /** Mid price of the token. */
        midPx: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Mid price of the token.")),
        /** Mark price of the token. */
        markPx: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Mark price of the token.")),
        /** Previous day's price of the token. */
        prevDayPx: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Previous day's price of the token.")),
        /** Genesis data for the token. */
        genesis: v.pipe(v.nullable(v.object({
            /** User balances. */
            userBalances: v.pipe(v.array(v.tuple([_schemas_js_1.Address, v.string()])), v.description("User balances.")),
            /** Existing token balances. */
            existingTokenBalances: v.pipe(v.array(v.tuple([_schemas_js_1.UnsignedInteger, v.string()])), v.description("Existing token balances.")),
            /** Blacklisted users. */
            blacklistUsers: v.pipe(v.array(_schemas_js_1.Address), v.description("Blacklisted users.")),
        })), v.description("Genesis data for the token.")),
        /** Deployer address. */
        deployer: v.pipe(v.nullable(_schemas_js_1.Address), v.description("Deployer address.")),
        /** Gas used during token deployment. */
        deployGas: v.pipe(v.nullable(_schemas_js_1.UnsignedDecimal), v.description("Gas used during token deployment.")),
        /** Deployment time. */
        deployTime: v.pipe(v.nullable(v.string()), v.description("Deployment time.")),
        /** Seeded USDC amount for the token. */
        seededUsdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Seeded USDC amount for the token.")),
        /** Non-circulating user balances of the token. */
        nonCirculatingUserBalances: v.pipe(v.array(v.tuple([_schemas_js_1.Address, v.string()])), v.description("Non-circulating user balances of the token.")),
        /** Future emissions amount. */
        futureEmissions: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Future emissions amount.")),
    }), v.description("Details of a token."));
})();
/**
 * Request token details.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Details of a token.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { tokenDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await tokenDetails(
 *   { transport },
 *   { tokenId: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/spot#retrieve-information-about-a-token
 */
function tokenDetails(config, params, signal) {
    const request = v.parse(exports.TokenDetailsRequest, {
        type: "tokenDetails",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=tokenDetails.js.map