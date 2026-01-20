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
exports.ScheduleCancelResponse = exports.ScheduleCancelRequest = void 0;
exports.scheduleCancel = scheduleCancel;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Schedule a cancel-all operation at a future time.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#schedule-cancel-dead-mans-switch
 */
exports.ScheduleCancelRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.object({
            /** Type of action. */
            type: v.pipe(v.literal("scheduleCancel"), v.description("Type of action.")),
            /**
             * Scheduled time (in ms since epoch).
             * Must be at least 5 seconds in the future.
             *
             * If not specified, will cause all scheduled cancel operations to be deleted.
             */
            time: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Scheduled time (in ms since epoch)." +
                "\nMust be at least 5 seconds in the future." +
                "\n\nIf not specified, will cause all scheduled cancel operations to be deleted.")),
        }), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
        /** Vault address (for vault trading). */
        vaultAddress: v.pipe(v.optional(_schemas_js_1.Address), v.description("Vault address (for vault trading).")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Schedule a cancel-all operation at a future time."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#schedule-cancel-dead-mans-switch
 */
exports.ScheduleCancelResponse = (() => {
    return v.pipe(v.union([commonSchemas_js_1.SuccessResponse, commonSchemas_js_1.ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const ScheduleCancelParameters = /* @__PURE__ */ (() => {
    return v.omit(v.object(exports.ScheduleCancelRequest.entries.action.entries), ["type"]);
})();
function scheduleCancel(config, paramsOrOpts, maybeOpts) {
    const isFirstArgParams = paramsOrOpts && "time" in paramsOrOpts;
    const params = isFirstArgParams ? paramsOrOpts : {};
    const opts = isFirstArgParams ? maybeOpts : paramsOrOpts;
    const action = v.parse(ScheduleCancelParameters, params);
    return (0, execute_js_1.executeL1Action)(config, { type: "scheduleCancel", ...action }, opts);
}
//# sourceMappingURL=scheduleCancel.js.map