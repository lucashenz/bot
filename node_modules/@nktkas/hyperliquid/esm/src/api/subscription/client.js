// =============================================================
// Methods Imports
// =============================================================
import { activeAssetCtx } from "./_methods/activeAssetCtx.js";
import { activeAssetData, } from "./_methods/activeAssetData.js";
import { activeSpotAssetCtx, } from "./_methods/activeSpotAssetCtx.js";
import { allDexsAssetCtxs } from "./_methods/allDexsAssetCtxs.js";
import { allDexsClearinghouseState, } from "./_methods/allDexsClearinghouseState.js";
import { allMids } from "./_methods/allMids.js";
import { assetCtxs } from "./_methods/assetCtxs.js";
import { bbo } from "./_methods/bbo.js";
import { candle } from "./_methods/candle.js";
import { clearinghouseState, } from "./_methods/clearinghouseState.js";
import { explorerBlock } from "./_methods/explorerBlock.js";
import { explorerTxs } from "./_methods/explorerTxs.js";
import { l2Book } from "./_methods/l2Book.js";
import { notification } from "./_methods/notification.js";
import { openOrders } from "./_methods/openOrders.js";
import { orderUpdates } from "./_methods/orderUpdates.js";
import { spotAssetCtxs } from "./_methods/spotAssetCtxs.js";
import { spotState } from "./_methods/spotState.js";
import { trades } from "./_methods/trades.js";
import { twapStates } from "./_methods/twapStates.js";
import { userEvents } from "./_methods/userEvents.js";
import { userFills } from "./_methods/userFills.js";
import { userFundings } from "./_methods/userFundings.js";
import { userHistoricalOrders, } from "./_methods/userHistoricalOrders.js";
import { userNonFundingLedgerUpdates, } from "./_methods/userNonFundingLedgerUpdates.js";
import { userTwapHistory, } from "./_methods/userTwapHistory.js";
import { userTwapSliceFills, } from "./_methods/userTwapSliceFills.js";
import { webData2 } from "./_methods/webData2.js";
import { webData3 } from "./_methods/webData3.js";
// =============================================================
// Client
// =============================================================
/**
 * Real-time data via WebSocket subscriptions.
 *
 * Corresponds to {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions | WebSocket subscriptions}.
 */
export class SubscriptionClient {
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
        return activeAssetCtx(this.config_, params, listener);
    }
    /** @see {@link activeAssetData} */
    activeAssetData(params, listener) {
        return activeAssetData(this.config_, params, listener);
    }
    /** @see {@link activeSpotAssetCtx} */
    activeSpotAssetCtx(params, listener) {
        return activeSpotAssetCtx(this.config_, params, listener);
    }
    /** @see {@link allDexsAssetCtxs} */
    allDexsAssetCtxs(listener) {
        return allDexsAssetCtxs(this.config_, listener);
    }
    /** @see {@link allDexsClearinghouseState} */
    allDexsClearinghouseState(params, listener) {
        return allDexsClearinghouseState(this.config_, params, listener);
    }
    allMids(paramsOrListener, maybeListener) {
        const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
        const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
        return allMids(this.config_, params, listener);
    }
    assetCtxs(paramsOrListener, maybeListener) {
        const params = typeof paramsOrListener === "function" ? {} : paramsOrListener;
        const listener = typeof paramsOrListener === "function" ? paramsOrListener : maybeListener;
        return assetCtxs(this.config_, params, listener);
    }
    /** @see {@link bbo} */
    bbo(params, listener) {
        return bbo(this.config_, params, listener);
    }
    /** @see {@link candle} */
    candle(params, listener) {
        return candle(this.config_, params, listener);
    }
    /** @see {@link clearinghouseState} */
    clearinghouseState(params, listener) {
        return clearinghouseState(this.config_, params, listener);
    }
    /** @see {@link explorerBlock} */
    explorerBlock(listener) {
        return explorerBlock(this.config_, listener);
    }
    /** @see {@link explorerTxs} */
    explorerTxs(listener) {
        return explorerTxs(this.config_, listener);
    }
    /** @see {@link l2Book} */
    l2Book(params, listener) {
        return l2Book(this.config_, params, listener);
    }
    /** @see {@link notification} */
    notification(params, listener) {
        return notification(this.config_, params, listener);
    }
    /** @see {@link openOrders} */
    openOrders(params, listener) {
        return openOrders(this.config_, params, listener);
    }
    /** @see {@link orderUpdates} */
    orderUpdates(params, listener) {
        return orderUpdates(this.config_, params, listener);
    }
    /** @see {@link spotAssetCtxs} */
    spotAssetCtxs(listener) {
        return spotAssetCtxs(this.config_, listener);
    }
    /** @see {@link spotState} */
    spotState(params, listener) {
        return spotState(this.config_, params, listener);
    }
    /** @see {@link trades} */
    trades(params, listener) {
        return trades(this.config_, params, listener);
    }
    /** @see {@link twapStates} */
    twapStates(params, listener) {
        return twapStates(this.config_, params, listener);
    }
    /** @see {@link userEvents} */
    userEvents(params, listener) {
        return userEvents(this.config_, params, listener);
    }
    /** @see {@link userFills} */
    userFills(params, listener) {
        return userFills(this.config_, params, listener);
    }
    /** @see {@link userFundings} */
    userFundings(params, listener) {
        return userFundings(this.config_, params, listener);
    }
    /** @see {@link userHistoricalOrders} */
    userHistoricalOrders(params, listener) {
        return userHistoricalOrders(this.config_, params, listener);
    }
    /** @see {@link userNonFundingLedgerUpdates} */
    userNonFundingLedgerUpdates(params, listener) {
        return userNonFundingLedgerUpdates(this.config_, params, listener);
    }
    /** @see {@link userTwapHistory} */
    userTwapHistory(params, listener) {
        return userTwapHistory(this.config_, params, listener);
    }
    /** @see {@link userTwapSliceFills} */
    userTwapSliceFills(params, listener) {
        return userTwapSliceFills(this.config_, params, listener);
    }
    /** @see {@link webData2} */
    webData2(params, listener) {
        return webData2(this.config_, params, listener);
    }
    /** @see {@link webData3} */
    webData3(params, listener) {
        return webData3(this.config_, params, listener);
    }
}
//# sourceMappingURL=client.js.map