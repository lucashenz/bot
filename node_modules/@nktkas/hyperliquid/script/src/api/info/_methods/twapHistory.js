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
exports.TwapHistoryResponse = exports.TwapHistoryRequest = void 0;
exports.twapHistory = twapHistory;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Request twap history of a user.
 */
exports.TwapHistoryRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("twapHistory"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Request twap history of a user."));
})();
/**
 * Array of user's TWAP history.
 */
exports.TwapHistoryResponse = (() => {
    return v.pipe(v.array(v.object({
        /** Creation time of the history record (in seconds since epoch). */
        time: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Creation time of the history record (in seconds since epoch).")),
        /** State of the TWAP order. */
        state: v.pipe(commonSchemas_js_1.TwapStateSchema, v.description("State of the TWAP order.")),
        /**
         * Current status of the TWAP order.
         * - `"finished"`: Fully executed.
         * - `"activated"`: Active and executing.
         * - `"terminated"`: Terminated.
         * - `"error"`: An error occurred.
         */
        status: v.pipe(v.variant("status", [
            v.object({
                /** Status of the TWAP order. */
                status: v.pipe(v.picklist(["finished", "activated", "terminated"]), v.description("Status of the TWAP order.")),
            }),
            v.object({
                /** Status of the TWAP order. */
                status: v.pipe(v.literal("error"), v.description("Status of the TWAP order.")),
                /** Error message. */
                description: v.pipe(v.string(), v.description("Error message.")),
            }),
        ]), v.description("Current status of the TWAP order." +
            '\n- `"finished"`: Fully executed.' +
            '\n- `"activated"`: Active and executing.' +
            '\n- `"terminated"`: Terminated.' +
            '\n- `"error"`: An error occurred.')),
        /** ID of the TWAP. */
        twapId: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("ID of the TWAP.")),
    })), v.description("Array of user's TWAP history."));
})();
/**
 * Request twap history of a user.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of user's TWAP history.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { twapHistory } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await twapHistory(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 */
function twapHistory(config, params, signal) {
    const request = v.parse(exports.TwapHistoryRequest, {
        type: "twapHistory",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=twapHistory.js.map