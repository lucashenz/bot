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
exports.SubAccounts2Response = exports.SubAccounts2Request = void 0;
exports.subAccounts2 = subAccounts2;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const clearinghouseState_js_1 = require("./clearinghouseState.js");
const spotClearinghouseState_js_1 = require("./spotClearinghouseState.js");
/**
 * Request user sub-accounts (V2).
 */
exports.SubAccounts2Request = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("subAccounts2"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Request user sub-accounts (V2)."));
})();
/**
 * Array of user sub-account or null if the user does not have any sub-accounts.
 */
exports.SubAccounts2Response = (() => {
    return v.pipe(v.nullable(v.array(v.object({
        /** Sub-account name. */
        name: v.pipe(v.string(), v.nonEmpty(), v.description("Sub-account name.")),
        /** Sub-account address. */
        subAccountUser: v.pipe(_schemas_js_1.Address, v.description("Sub-account address.")),
        /** Master account address. */
        master: v.pipe(_schemas_js_1.Address, v.description("Master account address.")),
        /** DEX to clearinghouse state mapping. Always includes the main DEX (empty dex name). */
        dexToClearinghouseState: v.pipe(v.array(v.tuple([v.string(), clearinghouseState_js_1.ClearinghouseStateResponse])), v.nonEmpty(), v.description("DEX to clearinghouse state mapping. Always includes the main DEX (empty dex name).")),
        /** Spot tokens clearinghouse state. */
        spotState: v.pipe(spotClearinghouseState_js_1.SpotClearinghouseStateResponse, v.description("Spot tokens clearinghouse state.")),
    }))), v.description("Array of user sub-account or null if the user does not have any sub-accounts."));
})();
/**
 * Request user sub-accounts V2.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of user sub-account or null if the user does not have any sub-accounts.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @seenull
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { subAccounts2 } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await subAccounts2(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function subAccounts2(config, params, signal) {
    const request = v.parse(exports.SubAccounts2Request, {
        type: "subAccounts2",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=subAccounts2.js.map