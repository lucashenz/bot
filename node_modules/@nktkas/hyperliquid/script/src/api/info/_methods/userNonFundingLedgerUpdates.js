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
exports.UserNonFundingLedgerUpdatesResponse = exports.UserNonFundingLedgerUpdatesRequest = void 0;
exports.userNonFundingLedgerUpdates = userNonFundingLedgerUpdates;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request user non-funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
exports.UserNonFundingLedgerUpdatesRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("userNonFundingLedgerUpdates"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
        /** Start time (in ms since epoch). */
        startTime: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Start time (in ms since epoch).")),
        /** End time (in ms since epoch). */
        endTime: v.pipe(v.nullish(_schemas_js_1.UnsignedInteger), v.description("End time (in ms since epoch).")),
    }), v.description("Request user non-funding ledger updates."));
})();
/**
 * Array of user's non-funding ledger update.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
exports.UserNonFundingLedgerUpdatesResponse = (() => {
    return v.pipe(v.array(v.object({
        /** Timestamp of the update (in ms since epoch). */
        time: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Timestamp of the update (in ms since epoch).")),
        /** L1 transaction hash. */
        hash: v.pipe(_schemas_js_1.Hex, v.length(66), v.description("L1 transaction hash.")),
        /** Update details. */
        delta: v.pipe(v.variant("type", [
            /** Transfer between spot and perpetual accounts. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("accountClassTransfer"), v.description("Update type.")),
                /** Amount transferred in USDC. */
                usdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount transferred in USDC.")),
                /** Indicates if the transfer is to the perpetual account. */
                toPerp: v.pipe(v.boolean(), v.description("Indicates if the transfer is to the perpetual account.")),
            }),
            /** Deposit to an account. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("deposit"), v.description("Update type.")),
                /** Amount deposited in USDC. */
                usdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount deposited in USDC.")),
            }),
            /** Internal transfer between accounts. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("internalTransfer"), v.description("Update type.")),
                /** Amount transferred in USDC. */
                usdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount transferred in USDC.")),
                /** Initiator address. */
                user: v.pipe(_schemas_js_1.Address, v.description("Initiator address.")),
                /** Destination address. */
                destination: v.pipe(_schemas_js_1.Address, v.description("Destination address.")),
                /** Transfer fee. */
                fee: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Transfer fee.")),
            }),
            /** Liquidation event. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("liquidation"), v.description("Update type.")),
                /** Total notional value of liquidated positions. */
                liquidatedNtlPos: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Total notional value of liquidated positions.")),
                /** Account value at liquidation time. */
                accountValue: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Account value at liquidation time.")),
                /** Leverage type for liquidated positions. */
                leverageType: v.pipe(v.picklist(["Cross", "Isolated"]), v.description("Leverage type for liquidated positions.")),
                /** Details of each liquidated position. */
                liquidatedPositions: v.pipe(v.array(v.object({
                    /** Asset symbol of the liquidated position. */
                    coin: v.pipe(v.string(), v.description("Asset symbol of the liquidated position.")),
                    /** Signed position size liquidated. */
                    szi: v.pipe(_schemas_js_1.Decimal, v.description("Signed position size liquidated.")),
                })), v.description("Details of each liquidated position.")),
            }),
            /** Rewards claim event. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("rewardsClaim"), v.description("Update type.")),
                /** Amount of rewards claimed. */
                amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount of rewards claimed.")),
                /** Token symbol. */
                token: v.pipe(v.string(), v.description("Token symbol.")),
            }),
            /** Spot transfer between accounts. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("spotTransfer"), v.description("Update type.")),
                /** Token symbol. */
                token: v.pipe(v.string(), v.description("Token symbol.")),
                /** Amount transferred. */
                amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount transferred.")),
                /** Equivalent USDC value. */
                usdcValue: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Equivalent USDC value.")),
                /** Initiator address. */
                user: v.pipe(_schemas_js_1.Address, v.description("Initiator address.")),
                /** Destination address. */
                destination: v.pipe(_schemas_js_1.Address, v.description("Destination address.")),
                /** Transfer fee. */
                fee: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Transfer fee.")),
                /** Fee in native token. */
                nativeTokenFee: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Fee in native token.")),
                /** Nonce of the transfer. */
                nonce: v.pipe(v.nullable(_schemas_js_1.UnsignedInteger), v.description("Nonce of the transfer.")),
                /** Token in which the fee is denominated (e.g., "USDC"). */
                feeToken: v.pipe(v.string(), v.description('Token in which the fee is denominated (e.g., "USDC").')),
            }),
            /** Transfer between sub-accounts. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("subAccountTransfer"), v.description("Update type.")),
                /** Amount transferred in USDC. */
                usdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount transferred in USDC.")),
                /** Initiator address. */
                user: v.pipe(_schemas_js_1.Address, v.description("Initiator address.")),
                /** Destination address. */
                destination: v.pipe(_schemas_js_1.Address, v.description("Destination address.")),
            }),
            /** Vault creation event. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("vaultCreate"), v.description("Update type.")),
                /** Address of the created vault. */
                vault: v.pipe(_schemas_js_1.Address, v.description("Address of the created vault.")),
                /** Initial allocated amount in USDC. */
                usdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Initial allocated amount in USDC.")),
                /** Vault creation fee. */
                fee: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Vault creation fee.")),
            }),
            /** Vault deposit event. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("vaultDeposit"), v.description("Update type.")),
                /** Address of the target vault. */
                vault: v.pipe(_schemas_js_1.Address, v.description("Address of the target vault.")),
                /** Amount deposited in USDC. */
                usdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount deposited in USDC.")),
            }),
            /** Vault distribution event. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("vaultDistribution"), v.description("Update type.")),
                /** Address of the vault distributing funds. */
                vault: v.pipe(_schemas_js_1.Address, v.description("Address of the vault distributing funds.")),
                /** Amount distributed in USDC. */
                usdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount distributed in USDC.")),
            }),
            /** Vault withdrawal event. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("vaultWithdraw"), v.description("Update type.")),
                /** Vault address. */
                vault: v.pipe(_schemas_js_1.Address, v.description("Vault address.")),
                /** Address of the user withdrawing funds. */
                user: v.pipe(_schemas_js_1.Address, v.description("Address of the user withdrawing funds.")),
                /** Withdrawal request amount in USD. */
                requestedUsd: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Withdrawal request amount in USD.")),
                /** Withdrawal commission fee. */
                commission: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Withdrawal commission fee.")),
                /** Closing cost associated with positions. */
                closingCost: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Closing cost associated with positions.")),
                /** Basis value for withdrawal calculation. */
                basis: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Basis value for withdrawal calculation.")),
                /** Net withdrawn amount in USD after fees and costs. */
                netWithdrawnUsd: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Net withdrawn amount in USD after fees and costs.")),
            }),
            /** Withdrawal from an account. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("withdraw"), v.description("Update type.")),
                /** Amount withdrawn in USDC. */
                usdc: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount withdrawn in USDC.")),
                /** Nonce (timestamp in ms) used to prevent replay attacks. */
                nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
                /** Withdrawal fee. */
                fee: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Withdrawal fee.")),
            }),
            /** Transfer tokens between different perp DEXs, spot balance, users, and/or sub-accounts. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("send"), v.description("Update type.")),
                /** Address of the sender. */
                user: v.pipe(_schemas_js_1.Address, v.description("Address of the sender.")),
                /** Destination address. */
                destination: v.pipe(_schemas_js_1.Address, v.description("Destination address.")),
                /** Source DEX ("" for default USDC perp DEX, "spot" for spot). */
                sourceDex: v.pipe(v.string(), v.description('Source DEX ("" for default USDC perp DEX, "spot" for spot).')),
                /** Destination DEX ("" for default USDC perp DEX, "spot" for spot). */
                destinationDex: v.pipe(v.string(), v.description('Destination DEX ("" for default USDC perp DEX, "spot" for spot).')),
                /** Token identifier. */
                token: v.pipe(v.string(), v.description("Token identifier.")),
                /** Amount to send (not in wei). */
                amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount to send (not in wei).")),
                /** Equivalent USDC value. */
                usdcValue: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Equivalent USDC value.")),
                /** Transfer fee. */
                fee: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Transfer fee.")),
                /** Fee in native token. */
                nativeTokenFee: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Fee in native token.")),
                /** Nonce of the transfer. */
                nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce of the transfer.")),
                /** Token in which the fee is denominated (e.g., "USDC"). */
                feeToken: v.pipe(v.string(), v.description('Token in which the fee is denominated (e.g., "USDC").')),
            }),
            /** Deploy gas auction update. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("deployGasAuction"), v.description("Update type.")),
                /** Token symbol. */
                token: v.pipe(v.string(), v.description("Token symbol.")),
                /** Amount in the specified token. */
                amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount in the specified token.")),
            }),
            /** C-staking transfer update. */
            v.object({
                /** Update type. */
                type: v.pipe(v.literal("cStakingTransfer"), v.description("Update type.")),
                /** Token symbol. */
                token: v.pipe(v.string(), v.description("Token symbol.")),
                /** Amount in the specified token. */
                amount: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Amount in the specified token.")),
                /** `true` for deposit, `false` for withdrawal. */
                isDeposit: v.pipe(v.boolean(), v.description("`true` for deposit, `false` for withdrawal.")),
            }),
        ]), v.description("Update details.")),
    })), v.description("Array of user's non-funding ledger update."));
})();
/**
 * Request user non-funding ledger updates.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of user's non-funding ledger update.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userNonFundingLedgerUpdates } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userNonFundingLedgerUpdates(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
function userNonFundingLedgerUpdates(config, params, signal) {
    const request = v.parse(exports.UserNonFundingLedgerUpdatesRequest, {
        type: "userNonFundingLedgerUpdates",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=userNonFundingLedgerUpdates.js.map