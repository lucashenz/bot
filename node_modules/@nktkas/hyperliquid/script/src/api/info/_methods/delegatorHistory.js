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
exports.DelegatorHistoryResponse = exports.DelegatorHistoryRequest = void 0;
exports.delegatorHistory = delegatorHistory;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request user staking history.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-history
 */
exports.DelegatorHistoryRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("delegatorHistory"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Request user staking history."));
})();
/**
 * Array of records of staking events by a delegator.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-history
 */
exports.DelegatorHistoryResponse = (() => {
    return v.pipe(v.array(v.object({
        /** Timestamp of the delegation event (in ms since epoch). */
        time: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Timestamp of the delegation event (in ms since epoch).")),
        /** Transaction hash of the delegation event. */
        hash: v.pipe(_schemas_js_1.Hex, v.length(66), v.description("Transaction hash of the delegation event.")),
        /** Details of the update. */
        delta: v.pipe(v.union([
            v.object({
                /** Delegation operation details. */
                delegate: v.pipe(v.object({
                    /** Address of the validator receiving or losing delegation. */
                    validator: v.pipe(_schemas_js_1.Address, v.description("Address of the validator receiving or losing delegation.")),
                    /** Amount of tokens being delegated or undelegated. */
                    amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount of tokens being delegated or undelegated.")),
                    /** Whether this is an undelegation operation. */
                    isUndelegate: v.pipe(v.boolean(), v.description("Whether this is an undelegation operation.")),
                }), v.description("Delegation operation details.")),
            }),
            v.object({
                /** Deposit details. */
                cDeposit: v.pipe(v.object({
                    /** Amount of tokens being deposited. */
                    amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount of tokens being deposited.")),
                }), v.description("Deposit details.")),
            }),
            v.object({
                /** Withdrawal details. */
                withdrawal: v.pipe(v.object({
                    /** Amount of tokens being withdrawn. */
                    amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount of tokens being withdrawn.")),
                    /** Phase of the withdrawal process. */
                    phase: v.pipe(v.picklist(["initiated", "finalized"]), v.description("Phase of the withdrawal process.")),
                }), v.description("Withdrawal details.")),
            }),
        ]), v.description("Details of the update.")),
    })), v.description("Array of records of staking events by a delegator."));
})();
/**
 * Request user staking history.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of records of staking events by a delegator.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { delegatorHistory } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await delegatorHistory(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-staking-history
 */
function delegatorHistory(config, params, signal) {
    const request = v.parse(exports.DelegatorHistoryRequest, {
        type: "delegatorHistory",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=delegatorHistory.js.map