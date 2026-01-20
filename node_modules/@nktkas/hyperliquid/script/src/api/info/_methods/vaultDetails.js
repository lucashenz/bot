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
exports.VaultDetailsResponse = exports.VaultDetailsRequest = void 0;
exports.vaultDetails = vaultDetails;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
const portfolio_js_1 = require("./portfolio.js");
/**
 * Request details of a vault.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-details-for-a-vault
 */
exports.VaultDetailsRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("vaultDetails"), v.description("Type of request.")),
        /** Vault address. */
        vaultAddress: v.pipe(_schemas_js_1.Address, v.description("Vault address.")),
        /** User address. */
        user: v.pipe(v.nullish(_schemas_js_1.Address), v.description("User address.")),
    }), v.description("Request details of a vault."));
})();
/**
 * Details of a vault or null if the vault does not exist.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-details-for-a-vault
 */
exports.VaultDetailsResponse = (() => {
    return v.pipe(v.object({
        /** Vault name. */
        name: v.pipe(v.string(), v.description("Vault name.")),
        /** Vault address. */
        vaultAddress: v.pipe(_schemas_js_1.Address, v.description("Vault address.")),
        /** Leader address. */
        leader: v.pipe(_schemas_js_1.Address, v.description("Leader address.")),
        /** Vault description. */
        description: v.pipe(v.string(), v.description("Vault description.")),
        /** Vault portfolio metrics grouped by time periods. */
        portfolio: v.pipe(portfolio_js_1.PortfolioResponse, v.description("Vault portfolio metrics grouped by time periods.")),
        /** Annual percentage rate. */
        apr: v.pipe(v.number(), v.description("Annual percentage rate.")),
        /** Current user follower state. */
        followerState: v.pipe(v.nullable(v.object({
            /** Follower address. */
            user: v.pipe(_schemas_js_1.Address, v.description("Follower address.")),
            /** Follower vault equity. */
            vaultEquity: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Follower vault equity.")),
            /** Current profit and loss. */
            pnl: v.pipe(_schemas_js_1.Decimal, v.description("Current profit and loss.")),
            /** All-time profit and loss. */
            allTimePnl: v.pipe(_schemas_js_1.Decimal, v.description("All-time profit and loss.")),
            /** Subscription duration in days. */
            daysFollowing: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Subscription duration in days.")),
            /** Vault entry timestamp. */
            vaultEntryTime: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Vault entry timestamp.")),
            /** Timestamp when funds become unlocked. */
            lockupUntil: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Timestamp when funds become unlocked.")),
        })), v.description("Current user follower state.")),
        /** Ownership percentage held by leader. */
        leaderFraction: v.pipe(v.number(), v.description("Ownership percentage held by leader.")),
        /** Leader commission percentage. */
        leaderCommission: v.pipe(v.number(), v.description("Leader commission percentage.")),
        /** Array of vault followers. */
        followers: v.pipe(v.array(v.object({
            /** Follower address or Leader. */
            user: v.pipe(v.union([_schemas_js_1.Address, v.literal("Leader")]), v.description("Follower address or Leader.")),
            /** Follower vault equity. */
            vaultEquity: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Follower vault equity.")),
            /** Current profit and loss. */
            pnl: v.pipe(_schemas_js_1.Decimal, v.description("Current profit and loss.")),
            /** All-time profit and loss. */
            allTimePnl: v.pipe(_schemas_js_1.Decimal, v.description("All-time profit and loss.")),
            /** Subscription duration in days. */
            daysFollowing: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Subscription duration in days.")),
            /** Vault entry timestamp. */
            vaultEntryTime: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Vault entry timestamp.")),
            /** Timestamp when funds become unlocked. */
            lockupUntil: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Timestamp when funds become unlocked.")),
        })), v.description("Array of vault followers.")),
        /** Maximum distributable amount. */
        maxDistributable: v.pipe(v.number(), v.description("Maximum distributable amount.")),
        /** Maximum withdrawable amount. */
        maxWithdrawable: v.pipe(v.number(), v.description("Maximum withdrawable amount.")),
        /** Vault closure status. */
        isClosed: v.pipe(v.boolean(), v.description("Vault closure status.")),
        /** Vault relationship type. */
        relationship: v.pipe(commonSchemas_js_1.VaultRelationshipSchema, v.description("Vault relationship type.")),
        /** Deposit permission status. */
        allowDeposits: v.pipe(v.boolean(), v.description("Deposit permission status.")),
        /** Position closure policy on withdrawal. */
        alwaysCloseOnWithdraw: v.pipe(v.boolean(), v.description("Position closure policy on withdrawal.")),
    }), v.description("Details of a vault or null if the vault does not exist."));
})();
/**
 * Request details of a vault.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Details of a vault or null if the vault does not exist.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { vaultDetails } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await vaultDetails(
 *   { transport },
 *   { vaultAddress: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#retrieve-details-for-a-vault
 */
function vaultDetails(config, params, signal) {
    const request = v.parse(exports.VaultDetailsRequest, {
        type: "vaultDetails",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=vaultDetails.js.map