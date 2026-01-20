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
exports.PortfolioResponse = exports.PortfolioRequest = void 0;
exports.portfolio = portfolio;
const v = __importStar(require("valibot"));
// ============================================================
// API Schemas
// ============================================================
const _schemas_js_1 = require("../../_schemas.js");
/**
 * Request user portfolio.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 */
exports.PortfolioRequest = (() => {
    return v.pipe(v.object({
        /** Type of request. */
        type: v.pipe(v.literal("portfolio"), v.description("Type of request.")),
        /** User address. */
        user: v.pipe(_schemas_js_1.Address, v.description("User address.")),
    }), v.description("Request user portfolio."));
})();
/** Portfolio metrics snapshot. */
const PortfolioSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** History entries for account value as [timestamp, value]. */
        accountValueHistory: v.pipe(v.array(v.tuple([_schemas_js_1.UnsignedInteger, _schemas_js_1.UnsignedDecimal])), v.description("History entries for account value as [timestamp, value].")),
        /** History entries for profit and loss as [timestamp, value]. */
        pnlHistory: v.pipe(v.array(v.tuple([_schemas_js_1.UnsignedInteger, _schemas_js_1.Decimal])), v.description("History entries for profit and loss as [timestamp, value].")),
        /** Volume metric for the portfolio. */
        vlm: v.pipe(_schemas_js_1.UnsignedDecimal, v.description("Volume metric for the portfolio.")),
    }), v.description("Portfolio metrics snapshot."));
})();
/**
 * Portfolio metrics grouped by time periods.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 */
exports.PortfolioResponse = (() => {
    return v.pipe(v.tuple([
        v.tuple([v.literal("day"), PortfolioSchema]),
        v.tuple([v.literal("week"), PortfolioSchema]),
        v.tuple([v.literal("month"), PortfolioSchema]),
        v.tuple([v.literal("allTime"), PortfolioSchema]),
        v.tuple([v.literal("perpDay"), PortfolioSchema]),
        v.tuple([v.literal("perpWeek"), PortfolioSchema]),
        v.tuple([v.literal("perpMonth"), PortfolioSchema]),
        v.tuple([v.literal("perpAllTime"), PortfolioSchema]),
    ]), v.description("Portfolio metrics grouped by time periods."));
})();
/**
 * Request user portfolio.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Portfolio metrics grouped by time periods.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { portfolio } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await portfolio(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint#query-a-users-portfolio
 */
function portfolio(config, params, signal) {
    const request = v.parse(exports.PortfolioRequest, {
        type: "portfolio",
        ...params,
    });
    return config.transport.request("info", request, signal);
}
//# sourceMappingURL=portfolio.js.map