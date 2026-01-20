"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionClient = void 0;
// =============================================================
// Methods Imports
// =============================================================
const activeAssetCtx_js_1 = require("./_methods/activeAssetCtx.js");
const activeAssetData_js_1 = require("./_methods/activeAssetData.js");
const activeSpotAssetCtx_js_1 = require("./_methods/activeSpotAssetCtx.js");
const allDexsAssetCtxs_js_1 = require("./_methods/allDexsAssetCtxs.js");
const allDexsClearinghouseState_js_1 = require("./_methods/allDexsClearinghouseState.js");
const allMids_js_1 = require("./_methods/allMids.js");
const assetCtxs_js_1 = require("./_methods/assetCtxs.js");
const bbo_js_1 = require("./_methods/bbo.js");
const candle_js_1 = require("./_methods/candle.js");
const clearinghouseState_js_1 = require("./_methods/clearinghouseState.js");
const explorerBlock_js_1 = require("./_methods/explorerBlock.js");
const explorerTxs_js_1 = require("./_methods/explorerTxs.js");
const l2Book_js_1 = require("./_methods/l2Book.js");
const notification_js_1 = require("./_methods/notification.js");
const openOrders_js_1 = require("./_methods/openOrders.js");
const orderUpdates_js_1 = require("./_methods/orderUpdates.js");
const spotAssetCtxs_js_1 = require("./_methods/spotAssetCtxs.js");
const spotState_js_1 = require("./_methods/spotState.js");
const trades_js_1 = require("./_methods/trades.js");
const twapStates_js_1 = require("./_methods/twapStates.js");
const userEvents_js_1 = require("./_methods/userEvents.js");
const userFills_js_1 = require("./_methods/userFills.js");
const userFundings_js_1 = require("./_methods/userFundings.js");
const userHistoricalOrders_js_1 = require("./_methods/userHistoricalOrders.js");
const userNonFundingLedgerUpdates_js_1 = require("./_methods/userNonFundingLedgerUpdates.js");
const userTwapHistory_js_1 = require("./_methods/userTwapHistory.js");
const userTwapSliceFills_js_1 = require("./_methods/userTwapSliceFills.js");
const webData2_js_1 = require("./_methods/webData2.js");
const webData3_js_1 = require("./_methods/webData3.js");
// =============================================================
// Client
// =============================================================
/**
 * Real-time data via WebSocket subscriptions.
 *
 * Corresponds to {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions | WebSocket subscriptions}.
 */
class SubscriptionClient {
    config_;
    /**
     * Creates an instance of the SubscriptionClient.
     *
     * @param config - Configuration for Subscription API requests. See {@link SubscriptionConfig}.
     *
     * @example
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     *
     * const transport = new hl.WebSocketTransport(); // only `WebSocketTransport`
     *
     * const subsClient = new hl.SubscriptionClient({ transport });
     * ```
     */
    constructor(config) {
        this.config_ = config;
    }
    /** @see {@link activeAssetCtx} */
    activeAssetCtx(params, listener) {
        return (0, activeAssetCtx_js_1.activeAssetCtx)(this.config_, params, listener);
    }
    /** @see {@link activeAssetData} */
    activeAssetData(params, listener) {
        return (0, activeAssetData_js_1.activeAssetData)(this.config_, params, listener);
    }
    /** @see {@link activeSpotAssetCtx} */
    activeSpotAssetCtx(params, listener) {
        return (0, activeSpotAssetCtx_js_1.activeSpotAssetCtx)(this.config_, params, listener);
    }
    /** @see {@link allDexsAssetCtxs} */
    allDexsAssetCtxs(listener) {
        return (0, allDexsAssetCtxs_js_1.allDexsAssetCtxs)(this.config_, listener);
    }
    /** @see {@link allDexsClearinghouseState} */
    allDexsClearinghouseState(params, listener) {
        return (0, allDexsClearinghouseState_js_1.allDexsClearinghouseState)(this.config_, params, listener);
    }
    allMids(paramsOrListener, maybeListener) {
        const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
        const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
        return (0, allMids_js_1.allMids)(this.config_, params, listener);
    }
    assetCtxs(paramsOrListener, maybeListener) {
        const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
        const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
        return (0, assetCtxs_js_1.assetCtxs)(this.config_, params, listener);
    }
    /** @see {@link bbo} */
    bbo(params, listener) {
        return (0, bbo_js_1.bbo)(this.config_, params, listener);
    }
    /** @see {@link candle} */
    candle(params, listener) {
        return (0, candle_js_1.candle)(this.config_, params, listener);
    }
    /** @see {@link clearinghouseState} */
    clearinghouseState(params, listener) {
        return (0, clearinghouseState_js_1.clearinghouseState)(this.config_, params, listener);
    }
    /** @see {@link explorerBlock} */
    explorerBlock(listener) {
        return (0, explorerBlock_js_1.explorerBlock)(this.config_, listener);
    }
    /** @see {@link explorerTxs} */
    explorerTxs(listener) {
        return (0, explorerTxs_js_1.explorerTxs)(this.config_, listener);
    }
    /** @see {@link l2Book} */
    l2Book(params, listener) {
        return (0, l2Book_js_1.l2Book)(this.config_, params, listener);
    }
    /** @see {@link notification} */
    notification(params, listener) {
        return (0, notification_js_1.notification)(this.config_, params, listener);
    }
    /** @see {@link openOrders} */
    openOrders(params, listener) {
        return (0, openOrders_js_1.openOrders)(this.config_, params, listener);
    }
    /** @see {@link orderUpdates} */
    orderUpdates(params, listener) {
        return (0, orderUpdates_js_1.orderUpdates)(this.config_, params, listener);
    }
    /** @see {@link spotAssetCtxs} */
    spotAssetCtxs(listener) {
        return (0, spotAssetCtxs_js_1.spotAssetCtxs)(this.config_, listener);
    }
    /** @see {@link spotState} */
    spotState(params, listener) {
        return (0, spotState_js_1.spotState)(this.config_, params, listener);
    }
    /** @see {@link trades} */
    trades(params, listener) {
        return (0, trades_js_1.trades)(this.config_, params, listener);
    }
    /** @see {@link twapStates} */
    twapStates(params, listener) {
        return (0, twapStates_js_1.twapStates)(this.config_, params, listener);
    }
    /** @see {@link userEvents} */
    userEvents(params, listener) {
        return (0, userEvents_js_1.userEvents)(this.config_, params, listener);
    }
    /** @see {@link userFills} */
    userFills(params, listener) {
        return (0, userFills_js_1.userFills)(this.config_, params, listener);
    }
    /** @see {@link userFundings} */
    userFundings(params, listener) {
        return (0, userFundings_js_1.userFundings)(this.config_, params, listener);
    }
    /** @see {@link userHistoricalOrders} */
    userHistoricalOrders(params, listener) {
        return (0, userHistoricalOrders_js_1.userHistoricalOrders)(this.config_, params, listener);
    }
    /** @see {@link userNonFundingLedgerUpdates} */
    userNonFundingLedgerUpdates(params, listener) {
        return (0, userNonFundingLedgerUpdates_js_1.userNonFundingLedgerUpdates)(this.config_, params, listener);
    }
    /** @see {@link userTwapHistory} */
    userTwapHistory(params, listener) {
        return (0, userTwapHistory_js_1.userTwapHistory)(this.config_, params, listener);
    }
    /** @see {@link userTwapSliceFills} */
    userTwapSliceFills(params, listener) {
        return (0, userTwapSliceFills_js_1.userTwapSliceFills)(this.config_, params, listener);
    }
    /** @see {@link webData2} */
    webData2(params, listener) {
        return (0, webData2_js_1.webData2)(this.config_, params, listener);
    }
    /** @see {@link webData3} */
    webData3(params, listener) {
        return (0, webData3_js_1.webData3)(this.config_, params, listener);
    }
}
exports.SubscriptionClient = SubscriptionClient;
//# sourceMappingURL=client.js.map