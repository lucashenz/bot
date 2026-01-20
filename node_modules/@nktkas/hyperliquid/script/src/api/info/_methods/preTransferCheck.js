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
exports.PreTransferCheckResponse = exports.PreTransferCheckRequest = void 0;
exports.preTransferCheck = preTransferCheck;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request user existence check before transfer.
 */
exports.PreTransferCheckRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("preTransferCheck"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
        /** Source address. */
        source: v.pipe(_schemas_js_1.Address, v.description("Source address.")),
    }), v.description("Request user existence check before transfer."));
})();
/**
 * Pre-transfer user existence check result.
 */
exports.PreTransferCheckResponse = (() => {
    return v.pipe(v.object({
        /** Activation fee. */
        fee: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Activation fee.")),
        /** Whether the user is sanctioned. */
        isSanctioned: v.pipe(v.boolean(), v.description("Whether the user is sanctioned.")),
        /** Whether the user exists. */
        userExists: v.pipe(v.boolean(), v.description("Whether the user exists.")),
        /** Whether the user has sent a transaction. */
        userHasSentTx: v.pipe(v.boolean(), v.description("Whether the user has sent a transaction.")),
    }), v.description("Pre-transfer user existence check result."));
})();
/**
 * Request user existence check before transfer.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Pre-transfer user existence check result.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { preTransferCheck } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await preTransferCheck(
 *   { transport },
 *   { user: "0x...", source: "0x..." },
 * );
 * ```
 */
function preTransferCheck(config, params, signal) {
    const request = v.parse(exports.PreTransferCheckRequest, {
        type: "preTransferCheck",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=preTransferCheck.js.map