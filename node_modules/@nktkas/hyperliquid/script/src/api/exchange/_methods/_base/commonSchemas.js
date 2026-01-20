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
exports.HyperliquidChainSchema = exports.SignatureSchema = exports.SuccessResponse = exports.ErrorResponse = void 0;
const v = __importStar(require("valibot"));
const _schemas_js_1 = require("../../../_schemas.js");
/** Error response for failed operations. */
exports.ErrorResponse = (() => {
    return v.pipe(v.object({
        /** Error status. */
        status: v.pipe(v.literal("err"), v.description("Error status.")),
        /** Error message. */
        response: v.pipe(v.string(), v.description("Error message.")),
    }), v.description("Error response for failed operations."));
})();
/** Successful response without specific data. */
exports.SuccessResponse = (() => {
    return v.pipe(v.object({
        /** Successful status. */
        status: v.pipe(v.literal("ok"), v.description("Successful status.")),
        /** Response details. */
        response: v.pipe(v.object({
            /** Type of response. */
            type: v.pipe(v.literal("default"), v.description("Type of response.")),
        }), v.description("Response details.")),
    }), v.description("Successful response without specific data."));
})();
/** ECDSA signature components. */
exports.SignatureSchema = (() => {
    return v.pipe(v.object({
        /** First 32-byte component. */
        r: v.pipe(_schemas_js_1.Hex, v.length(66), v.description("First 32-byte component.")),
        /** Second 32-byte component. */
        s: v.pipe(_schemas_js_1.Hex, v.length(66), v.description("Second 32-byte component.")),
        /** Recovery identifier. */
        v: v.pipe(v.picklist([27, 28]), v.description("Recovery identifier.")),
    }), v.description("ECDSA signature components."));
})();
/** HyperLiquid network type. */
exports.HyperliquidChainSchema = (() => {
    return v.pipe(v.picklist(["Mainnet", "Testnet"]), v.description("HyperLiquid network type."));
})();
//# sourceMappingURL=commonSchemas.js.map