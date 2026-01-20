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
exports.LegalCheckResponse = exports.LegalCheckRequest = void 0;
exports.legalCheck = legalCheck;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request legal verification status of a user.
 */
exports.LegalCheckRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("legalCheck"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Request legal verification status of a user."));
})();
/**
 * Legal verification status for a user.
 */
exports.LegalCheckResponse = (() => {
    return v.pipe(v.object({
        /** Whether the user IP address is allowed. */
        ipAllowed: v.pipe(v.boolean(), v.description("Whether the user IP address is allowed.")),
        /** Whether the user has accepted the terms of service. */
        acceptedTerms: v.pipe(v.boolean(), v.description("Whether the user has accepted the terms of service.")),
        /** Whether the user is allowed to use the platform. */
        userAllowed: v.pipe(v.boolean(), v.description("Whether the user is allowed to use the platform.")),
    }), v.description("Legal verification status for a user."));
})();
/**
 * Request legal verification status of a user.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Legal verification status for a user.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { legalCheck } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await legalCheck(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function legalCheck(config, params, signal) {
    const request = v.parse(exports.LegalCheckRequest, {
        type: "legalCheck",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=legalCheck.js.map