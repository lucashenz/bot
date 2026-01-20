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
exports.MetaResponse = exports.MetaRequest = void 0;
exports.meta = meta;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
const marginTable_js_1 = require("./marginTable.js");
/**
 * Request trading metadata.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
exports.MetaRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("meta"), v.description("Type of request.")),
        /** DEX name (empty string for main dex). */
        dex: v.pipe(v.optional(v.string()), v.description("DEX name (empty string for main dex).")),
    }), v.description("Request trading metadata."));
})();
/**
 * Metadata for perpetual assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-perpetuals-metadata-universe-and-margin-tables
 */
exports.MetaResponse = (() => {
    return v.pipe(v.object({
        /** Trading universes available for perpetual trading. */
        universe: v.pipe(v.array(v.object({
            /** Minimum decimal places for order sizes. */
            szDecimals: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Minimum decimal places for order sizes.")),
            /** Name of the universe. */
            name: v.pipe(v.string(), v.description("Name of the universe.")),
            /** Maximum allowed leverage. */
            maxLeverage: v.pipe(_schemas_js_1.UnsignedInteger, v.minValue(1), v.description("Maximum allowed leverage.")),
            /** Unique identifier for the margin requirements table. */
            marginTableId: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Unique identifier for the margin requirements table.")),
            /** Indicates if only isolated margin trading is allowed. */
            onlyIsolated: v.pipe(v.optional(v.literal(true)), v.description("Indicates if only isolated margin trading is allowed.")),
            /** Indicates if the universe is delisted. */
            isDelisted: v.pipe(v.optional(v.literal(true)), v.description("Indicates if the universe is delisted.")),
            /** Trading margin mode constraint. */
            marginMode: v.pipe(v.optional(v.picklist(["strictIsolated", "noCross"])), v.description("Trading margin mode constraint.")),
            /** Indicates if growth mode is enabled. */
            growthMode: v.pipe(v.optional(v.literal("enabled")), v.description("Indicates if growth mode is enabled.")),
            /** Timestamp of the last growth mode change. */
            lastGrowthModeChangeTime: v.pipe(v.optional(_schemas_js_1.ISO8601WithoutTimezone), v.description("Timestamp of the last growth mode change.")),
        })), v.description("Trading universes available for perpetual trading.")),
        /** Margin requirement tables for different leverage tiers. */
        marginTables: v.pipe(v.array(v.tuple([
            _schemas_js_1.UnsignedInteger,
            marginTable_js_1.MarginTableResponse,
        ])), v.description("Margin requirement tables for different leverage tiers.")),
        /** Collateral token index. */
        collateralToken: v.pipe(_schemas_js_1.UnsignedInteger, v.description("Collateral token index.")),
    }), v.description("Metadata for perpetual assets."));
})();
function meta(config, paramsOrSignal, maybeSignal) {
    const params = paramsOrSignal instanceof AbortSignal ? {} : paramsOrSignal;
    const signal = paramsOrSignal instanceof AbortSignal ? paramsOrSignal : maybeSignal;
    const request = v.parse(exports.MetaRequest, {
        type: "meta",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=meta.js.map