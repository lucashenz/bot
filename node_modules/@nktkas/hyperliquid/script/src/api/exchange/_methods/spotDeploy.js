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
exports.SpotDeployResponse = exports.SpotDeployRequest = void 0;
exports.spotDeploy = spotDeploy;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/**
 * Deploying HIP-1 and HIP-2 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
exports.SpotDeployRequest = (() => {
    return v.pipe(v.object({
        /** Action to perform. */
        action: v.pipe(v.union([
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Register token parameters. */
                registerToken2: v.pipe(v.object({
                    /** Token specifications. */
                    spec: v.pipe(v.object({
                        /** Token name. */
                        name: v.pipe(v.string(), v.description("Token name.")),
                        /** Number of decimals for token size. */
                        szDecimals: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Number of decimals for token size.")),
                        /** Number of decimals for token amounts in wei. */
                        weiDecimals: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Number of decimals for token amounts in wei.")),
                    }), v.description("Token specifications.")),
                    /** Maximum gas allowed for registration. */
                    maxGas: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Maximum gas allowed for registration.")),
                    /** Optional full token name. */
                    fullName: v.pipe(v.optional(v.string()), v.description("Optional full token name.")),
                }), v.description("Register token parameters.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** User genesis parameters. */
                userGenesis: v.pipe(v.object({
                    /** Token identifier. */
                    token: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Token identifier.")),
                    /** Array of tuples: [user address, genesis amount in wei]. */
                    userAndWei: v.pipe(v.array(v.tuple([
                        _schemas_js_1.Address,
                        _schemas_js_1.UnsignedDecimal,
                    ])), v.description("Array of tuples: [user address, genesis amount in wei].")),
                    /** Array of tuples: [existing token identifier, genesis amount in wei]. */
                    existingTokenAndWei: v.pipe(v.array(v.tuple([
                        _schemas_js_1.UnsignedInteger,
                        _schemas_js_1.UnsignedDecimal,
                    ])), v.description("Array of tuples: [existing token identifier, genesis amount in wei].")),
                    /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
                    blacklistUsers: v.pipe(v.optional(v.array(v.tuple([
                        _schemas_js_1.Address,
                        v.boolean(),
                    ]))), v.description("Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user).")),
                }), v.description("User genesis parameters.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Genesis parameters. */
                genesis: v.pipe(v.object({
                    /** Token identifier. */
                    token: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Token identifier.")),
                    /** Maximum token supply. */
                    maxSupply: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Maximum token supply.")),
                    /** Set hyperliquidity balance to 0. */
                    noHyperliquidity: v.pipe(v.optional(v.literal(true)), v.description("Set hyperliquidity balance to 0.")),
                }), v.description("Genesis parameters.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Register spot parameters. */
                registerSpot: v.pipe(v.object({
                    /** Tuple containing base and quote token indices. */
                    tokens: v.pipe(v.tuple([
                        _schemas_js_1.UnsignedInteger,
                        _schemas_js_1.UnsignedInteger,
                    ]), v.description("Tuple containing base and quote token indices.")),
                }), v.description("Register spot parameters.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Register hyperliquidity parameters. */
                registerHyperliquidity: v.pipe(v.object({
                    /** Spot index (distinct from base token index). */
                    spot: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Spot index (distinct from base token index).")),
                    /** Starting price for liquidity seeding. */
                    startPx: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Starting price for liquidity seeding.")),
                    /** Order size as a float (not in wei). */
                    orderSz: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Order size as a float (not in wei).")),
                    /** Total number of orders to place. */
                    nOrders: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Total number of orders to place.")),
                    /** Number of levels to seed with USDC. */
                    nSeededLevels: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Number of levels to seed with USDC.")),
                }), v.description("Register hyperliquidity parameters.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Set deployer trading fee share parameters. */
                setDeployerTradingFeeShare: v.pipe(v.object({
                    /** Token identifier. */
                    token: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Token identifier.")),
                    /** The deployer trading fee share. Range is 0% to 100%. */
                    share: v.pipe(_schemas_js_1.Percent, v.description("The deployer trading fee share. Range is 0% to 100%.")),
                }), v.description("Set deployer trading fee share parameters.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Enable quote token parameters. */
                enableQuoteToken: v.pipe(v.object({
                    /** The token ID to convert to a quote token. */
                    token: v.pipe(_schemas_js_1.UnsignedInteger, v.description("The token ID to convert to a quote token.")),
                }), v.description("Enable quote token parameters.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("spotDeploy"), v.description("Type of action.")),
                /** Enable aligned quote token parameters. */
                enableAlignedQuoteToken: v.pipe(v.object({
                    /** Token identifier to enable as aligned quote token. */
                    token: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Token identifier to enable as aligned quote token.")),
                }), v.description("Enable aligned quote token parameters.")),
            }),
        ]), v.description("Action to perform.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Deploying HIP-1 and HIP-2 assets."));
})();
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
exports.SpotDeployResponse = (() => {
    return v.pipe(v.union([commonSchemas_js_1.SuccessResponse, commonSchemas_js_1.ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const SpotDeployParameters = /* @__PURE__ */ (() => {
    return v.union(exports.SpotDeployRequest.entries.action.options.map((option) => v.omit(option, ["type"])));
})();
/**
 * Deploying HIP-1 and HIP-2 assets.
 *
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 *
 * @returns Successful response without specific data.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { spotDeploy } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotDeploy(
 *   { transport, wallet },
 *   {
 *     registerToken2: {
 *       spec: {
 *         name: "USDC",
 *         szDecimals: 8,
 *         weiDecimals: 8,
 *       },
 *       maxGas: 1000000,
 *       fullName: "USD Coin",
 *     },
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
function spotDeploy(config, params, opts) {
    const action = v.parse(SpotDeployParameters, params);
    return (0, execute_js_1.executeL1Action)(config, { type: "spotDeploy", ...action }, opts);
}
//# sourceMappingURL=spotDeploy.js.map