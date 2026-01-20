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
exports.CValidatorActionResponse = exports.CValidatorActionRequest = void 0;
exports.cValidatorAction = cValidatorAction;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const commonSchemas_js_1 = require("./_base/commonSchemas.js");
/** Action related to validator management. */
exports.CValidatorActionRequest = (() => {
    return v.pipe(v.object({
        /** Validator management action. */
        action: v.pipe(v.union([
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("CValidatorAction"), v.description("Type of action.")),
                /** Profile changes to apply. */
                changeProfile: v.pipe(v.object({
                    /** Validator node IP address. */
                    node_ip: v.pipe(v.nullable(v.object({
                        /** IP address. */
                        Ip: v.pipe(v.string(), v.ip(), v.description("IP address.")),
                    })), v.description("Validator node IP address.")),
                    /** Validator name. */
                    name: v.pipe(v.nullable(v.string()), v.description("Validator name.")),
                    /** Validator description. */
                    description: v.pipe(v.nullable(v.string()), v.description("Validator description.")),
                    /** Whether the validator is unjailed. */
                    unjailed: v.pipe(v.boolean(), v.description("Whether the validator is unjailed.")),
                    /** Enable or disable delegations. */
                    disable_delegations: v.pipe(v.nullable(v.boolean()), v.description("Enable or disable delegations.")),
                    /** Commission rate in basis points (1 = 0.0001%). */
                    commission_bps: v.pipe(v.nullable(_schemas_js_1.UnsignedInteger), v.description("Commission rate in basis points (1 = 0.0001%).")),
                    /** Signer address. */
                    signer: v.pipe(v.nullable(_schemas_js_1.Address), v.description("Signer address.")),
                }), v.description("Profile changes to apply.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("CValidatorAction"), v.description("Type of action.")),
                /** Registration parameters. */
                register: v.pipe(v.object({
                    /** Validator profile information. */
                    profile: v.pipe(v.object({
                        /** Validator node IP address. */
                        node_ip: v.pipe(v.object({
                            /** IP address. */
                            Ip: v.pipe(v.string(), v.ip(), v.description("IP address.")),
                        }), v.description("Validator node IP address.")),
                        /** Validator name. */
                        name: v.pipe(v.string(), v.description("Validator name.")),
                        /** Validator description. */
                        description: v.pipe(v.string(), v.description("Validator description.")),
                        /** Whether delegations are disabled. */
                        delegations_disabled: v.pipe(v.boolean(), v.description("Whether delegations are disabled.")),
                        /** Commission rate in basis points (1 = 0.0001%). */
                        commission_bps: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Commission rate in basis points (1 = 0.0001%).")),
                        /** Signer address. */
                        signer: v.pipe(_schemas_js_1.Address, v.description("Signer address.")),
                    }), v.description("Validator profile information.")),
                    /** Initial jail status. */
                    unjailed: v.pipe(v.boolean(), v.description("Initial jail status.")),
                    /** Initial stake amount in wei. */
                    initial_wei: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Initial stake amount in wei.")),
                }), v.description("Registration parameters.")),
            }),
            v.object({
                /** Type of action. */
                type: v.pipe(v.literal("CValidatorAction"), v.description("Type of action.")),
                /** Unregister the validator. */
                unregister: v.pipe(v.null(), v.description("Unregister the validator.")),
            }),
        ]), v.description("Validator management action.")),
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        nonce: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Nonce (timestamp in ms) used to prevent replay attacks.")),
        /** ECDSA signature components. */
        signature: v.pipe(commonSchemas_js_1.SignatureSchema, v.description("ECDSA signature components.")),
        /** Expiration time of the action. */
        expiresAfter: v.pipe(v.optional(_schemas_js_1.UnsignedInteger), v.description("Expiration time of the action.")),
    }), v.description("Action related to validator management."));
})();
/** Successful response without specific data or error response. */
exports.CValidatorActionResponse = (() => {
    return v.pipe(v.union([commonSchemas_js_1.SuccessResponse, commonSchemas_js_1.ErrorResponse]), v.description("Successful response without specific data or error response."));
})();
// ============================================================
// Execution Logic
// ============================================================
const execute_js_1 = require("./_base/execute.js");
/** Schema for user-provided action parameters (excludes system fields). */
const CValidatorActionParameters = /* @__PURE__ */ (() => {
    return v.union(exports.CValidatorActionRequest.entries.action.options.map((option) => v.omit(option, ["type"])));
})();
/**
 * Action related to validator management.
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
 * @example Change validator profile
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cValidatorAction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cValidatorAction(
 *   { transport, wallet },
 *   {
 *     changeProfile: {
 *       node_ip: { Ip: "1.2.3.4" },
 *       name: "...",
 *       description: "...",
 *       unjailed: true,
 *       disable_delegations: false,
 *       commission_bps: null,
 *       signer: null,
 *     },
 *   },
 * );
 * ```
 */
function cValidatorAction(config, params, opts) {
    const action = v.parse(CValidatorActionParameters, params);
    return (0, execute_js_1.executeL1Action)(config, { type: "CValidatorAction", ...action }, opts);
}
//# sourceMappingURL=cValidatorAction.js.map