import type { SubscriptionConfig } from "./_methods/_types.js";
import type { ISubscription } from "../../transport/mod.js";
import { type ActiveAssetCtxEvent, type ActiveAssetCtxParameters } from "./_methods/activeAssetCtx.js";
import { type ActiveAssetDataEvent, type ActiveAssetDataParameters } from "./_methods/activeAssetData.js";
import { type ActiveSpotAssetCtxEvent, type ActiveSpotAssetCtxParameters } from "./_methods/activeSpotAssetCtx.js";
import { type AllDexsAssetCtxsEvent } from "./_methods/allDexsAssetCtxs.js";
import { type AllDexsClearinghouseStateEvent, type AllDexsClearinghouseStateParameters } from "./_methods/allDexsClearinghouseState.js";
import { type AllMidsEvent, type AllMidsParameters } from "./_methods/allMids.js";
import { type AssetCtxsEvent, type AssetCtxsParameters } from "./_methods/assetCtxs.js";
import { type BboEvent, type BboParameters } from "./_methods/bbo.js";
import { type CandleEvent, type CandleParameters } from "./_methods/candle.js";
import { type ClearinghouseStateEvent, type ClearinghouseStateParameters } from "./_methods/clearinghouseState.js";
import { type ExplorerBlockEvent } from "./_methods/explorerBlock.js";
import { type ExplorerTxsEvent } from "./_methods/explorerTxs.js";
import { type L2BookEvent, type L2BookParameters } from "./_methods/l2Book.js";
import { type NotificationEvent, type NotificationParameters } from "./_methods/notification.js";
import { type OpenOrdersEvent, type OpenOrdersParameters } from "./_methods/openOrders.js";
import { type OrderUpdatesEvent, type OrderUpdatesParameters } from "./_methods/orderUpdates.js";
import { type SpotAssetCtxsEvent } from "./_methods/spotAssetCtxs.js";
import { type SpotStateEvent, type SpotStateParameters } from "./_methods/spotState.js";
import { type TradesEvent, type TradesParameters } from "./_methods/trades.js";
import { type TwapStatesEvent, type TwapStatesParameters } from "./_methods/twapStates.js";
import { type UserEventsEvent, type UserEventsParameters } from "./_methods/userEvents.js";
import { type UserFillsEvent, type UserFillsParameters } from "./_methods/userFills.js";
import { type UserFundingsEvent, type UserFundingsParameters } from "./_methods/userFundings.js";
import { type UserHistoricalOrdersEvent, type UserHistoricalOrdersParameters } from "./_methods/userHistoricalOrders.js";
import { type UserNonFundingLedgerUpdatesEvent, type UserNonFundingLedgerUpdatesParameters } from "./_methods/userNonFundingLedgerUpdates.js";
import { type UserTwapHistoryEvent, type UserTwapHistoryParameters } from "./_methods/userTwapHistory.js";
import { type UserTwapSliceFillsEvent, type UserTwapSliceFillsParameters } from "./_methods/userTwapSliceFills.js";
import { type WebData2Event, type WebData2Parameters } from "./_methods/webData2.js";
import { type WebData3Event, type WebData3Parameters } from "./_methods/webData3.js";
/**
 * Real-time data via WebSocket subscriptions.
 *
 * Corresponds to {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions | WebSocket subscriptions}.
 */
export declare class SubscriptionClient<C extends SubscriptionConfig = SubscriptionConfig> {
    config_: C;
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
    constructor(config: C);
    /** @see {@link activeAssetCtx} */
    activeAssetCtx(params: ActiveAssetCtxParameters, listener: (data: ActiveAssetCtxEvent) => void): Promise<ISubscription>;
    /** @see {@link activeAssetData} */
    activeAssetData(params: ActiveAssetDataParameters, listener: (data: ActiveAssetDataEvent) => void): Promise<ISubscription>;
    /** @see {@link activeSpotAssetCtx} */
    activeSpotAssetCtx(params: ActiveSpotAssetCtxParameters, listener: (data: ActiveSpotAssetCtxEvent) => void): Promise<ISubscription>;
    /** @see {@link allDexsAssetCtxs} */
    allDexsAssetCtxs(listener: (data: AllDexsAssetCtxsEvent) => void): Promise<ISubscription>;
    /** @see {@link allDexsClearinghouseState} */
    allDexsClearinghouseState(params: AllDexsClearinghouseStateParameters, listener: (data: AllDexsClearinghouseStateEvent) => void): Promise<ISubscription>;
    /** @see {@link allMids} */
    allMids(listener: (data: AllMidsEvent) => void): Promise<ISubscription>;
    allMids(params: AllMidsParameters, listener: (data: AllMidsEvent) => void): Promise<ISubscription>;
    /** @see {@link assetCtxs} */
    assetCtxs(listener: (data: AssetCtxsEvent) => void): Promise<ISubscription>;
    assetCtxs(params: AssetCtxsParameters, listener: (data: AssetCtxsEvent) => void): Promise<ISubscription>;
    /** @see {@link bbo} */
    bbo(params: BboParameters, listener: (data: BboEvent) => void): Promise<ISubscription>;
    /** @see {@link candle} */
    candle(params: CandleParameters, listener: (data: CandleEvent) => void): Promise<ISubscription>;
    /** @see {@link clearinghouseState} */
    clearinghouseState(params: ClearinghouseStateParameters, listener: (data: ClearinghouseStateEvent) => void): Promise<ISubscription>;
    /** @see {@link explorerBlock} */
    explorerBlock(listener: (data: ExplorerBlockEvent) => void): Promise<ISubscription>;
    /** @see {@link explorerTxs} */
    explorerTxs(listener: (data: ExplorerTxsEvent) => void): Promise<ISubscription>;
    /** @see {@link l2Book} */
    l2Book(params: L2BookParameters, listener: (data: L2BookEvent) => void): Promise<ISubscription>;
    /** @see {@link notification} */
    notification(params: NotificationParameters, listener: (data: NotificationEvent) => void): Promise<ISubscription>;
    /** @see {@link openOrders} */
    openOrders(params: OpenOrdersParameters, listener: (data: OpenOrdersEvent) => void): Promise<ISubscription>;
    /** @see {@link orderUpdates} */
    orderUpdates(params: OrderUpdatesParameters, listener: (data: OrderUpdatesEvent) => void): Promise<ISubscription>;
    /** @see {@link spotAssetCtxs} */
    spotAssetCtxs(listener: (data: SpotAssetCtxsEvent) => void): Promise<ISubscription>;
    /** @see {@link spotState} */
    spotState(params: SpotStateParameters, listener: (data: SpotStateEvent) => void): Promise<ISubscription>;
    /** @see {@link trades} */
    trades(params: TradesParameters, listener: (data: TradesEvent) => void): Promise<ISubscription>;
    /** @see {@link twapStates} */
    twapStates(params: TwapStatesParameters, listener: (data: TwapStatesEvent) => void): Promise<ISubscription>;
    /** @see {@link userEvents} */
    userEvents(params: UserEventsParameters, listener: (data: UserEventsEvent) => void): Promise<ISubscription>;
    /** @see {@link userFills} */
    userFills(params: UserFillsParameters, listener: (data: UserFillsEvent) => void): Promise<ISubscription>;
    /** @see {@link userFundings} */
    userFundings(params: UserFundingsParameters, listener: (data: UserFundingsEvent) => void): Promise<ISubscription>;
    /** @see {@link userHistoricalOrders} */
    userHistoricalOrders(params: UserHistoricalOrdersParameters, listener: (data: UserHistoricalOrdersEvent) => void): Promise<ISubscription>;
    /** @see {@link userNonFundingLedgerUpdates} */
    userNonFundingLedgerUpdates(params: UserNonFundingLedgerUpdatesParameters, listener: (data: UserNonFundingLedgerUpdatesEvent) => void): Promise<ISubscription>;
    /** @see {@link userTwapHistory} */
    userTwapHistory(params: UserTwapHistoryParameters, listener: (data: UserTwapHistoryEvent) => void): Promise<ISubscription>;
    /** @see {@link userTwapSliceFills} */
    userTwapSliceFills(params: UserTwapSliceFillsParameters, listener: (data: UserTwapSliceFillsEvent) => void): Promise<ISubscription>;
    /** @see {@link webData2} */
    webData2(params: WebData2Parameters, listener: (data: WebData2Event) => void): Promise<ISubscription>;
    /** @see {@link webData3} */
    webData3(params: WebData3Parameters, listener: (data: WebData3Event) => void): Promise<ISubscription>;
}
export type { SubscriptionConfig } from "./_methods/_types.js";
export type { ActiveAssetCtxEvent as ActiveAssetCtxWsEvent, ActiveAssetCtxParameters as ActiveAssetCtxWsParameters, } from "./_methods/activeAssetCtx.js";
export type { ActiveAssetDataEvent as ActiveAssetDataWsEvent, ActiveAssetDataParameters as ActiveAssetDataWsParameters, } from "./_methods/activeAssetData.js";
export type { ActiveSpotAssetCtxEvent as ActiveSpotAssetCtxWsEvent, ActiveSpotAssetCtxParameters as ActiveSpotAssetCtxWsParameters, } from "./_methods/activeSpotAssetCtx.js";
export type { AllDexsAssetCtxsEvent as AllDexsAssetCtxsWsEvent } from "./_methods/allDexsAssetCtxs.js";
export type { AllDexsClearinghouseStateEvent as AllDexsClearinghouseStateWsEvent, AllDexsClearinghouseStateParameters as AllDexsClearinghouseStateWsParameters, } from "./_methods/allDexsClearinghouseState.js";
export type { AllMidsEvent as AllMidsWsEvent, AllMidsParameters as AllMidsWsParameters } from "./_methods/allMids.js";
export type { AssetCtxsEvent as AssetCtxsWsEvent, AssetCtxsParameters as AssetCtxsWsParameters, } from "./_methods/assetCtxs.js";
export type { BboEvent as BboWsEvent, BboParameters as BboWsParameters } from "./_methods/bbo.js";
export type { CandleEvent as CandleWsEvent, CandleParameters as CandleWsParameters } from "./_methods/candle.js";
export type { ClearinghouseStateEvent as ClearinghouseStateWsEvent, ClearinghouseStateParameters as ClearinghouseStateWsParameters, } from "./_methods/clearinghouseState.js";
export type { ExplorerBlockEvent as ExplorerBlockWsEvent } from "./_methods/explorerBlock.js";
export type { ExplorerTxsEvent as ExplorerTxsWsEvent } from "./_methods/explorerTxs.js";
export type { L2BookEvent as L2BookWsEvent, L2BookParameters as L2BookWsParameters } from "./_methods/l2Book.js";
export type { NotificationEvent as NotificationWsEvent, NotificationParameters as NotificationWsParameters, } from "./_methods/notification.js";
export type { OpenOrdersEvent as OpenOrdersWsEvent, OpenOrdersParameters as OpenOrdersWsParameters, } from "./_methods/openOrders.js";
export type { OrderUpdatesEvent as OrderUpdatesWsEvent, OrderUpdatesParameters as OrderUpdatesWsParameters, } from "./_methods/orderUpdates.js";
export type { SpotAssetCtxsEvent as SpotAssetCtxsWsEvent } from "./_methods/spotAssetCtxs.js";
export type { SpotStateEvent as SpotStateWsEvent, SpotStateParameters as SpotStateWsParameters, } from "./_methods/spotState.js";
export type { TradesEvent as TradesWsEvent, TradesParameters as TradesWsParameters } from "./_methods/trades.js";
export type { TwapStatesEvent as TwapStatesWsEvent, TwapStatesParameters as TwapStatesWsParameters, } from "./_methods/twapStates.js";
export type { UserEventsEvent as UserEventsWsEvent, UserEventsParameters as UserEventsWsParameters, } from "./_methods/userEvents.js";
export type { UserFillsEvent as UserFillsWsEvent, UserFillsParameters as UserFillsWsParameters, } from "./_methods/userFills.js";
export type { UserFundingsEvent as UserFundingsWsEvent, UserFundingsParameters as UserFundingsWsParameters, } from "./_methods/userFundings.js";
export type { UserHistoricalOrdersEvent as UserHistoricalOrdersWsEvent, UserHistoricalOrdersParameters as UserHistoricalOrdersWsParameters, } from "./_methods/userHistoricalOrders.js";
export type { UserNonFundingLedgerUpdatesEvent as UserNonFundingLedgerUpdatesWsEvent, UserNonFundingLedgerUpdatesParameters as UserNonFundingLedgerUpdatesWsParameters, } from "./_methods/userNonFundingLedgerUpdates.js";
export type { UserTwapHistoryEvent as UserTwapHistoryWsEvent, UserTwapHistoryParameters as UserTwapHistoryWsParameters, } from "./_methods/userTwapHistory.js";
export type { UserTwapSliceFillsEvent as UserTwapSliceFillsWsEvent, UserTwapSliceFillsParameters as UserTwapSliceFillsWsParameters, } from "./_methods/userTwapSliceFills.js";
export type { WebData2Event as WebData2WsEvent, WebData2Parameters as WebData2WsParameters, } from "./_methods/webData2.js";
export type { WebData3Event as WebData3WsEvent, WebData3Parameters as WebData3WsParameters, } from "./_methods/webData3.js";
//# sourceMappingURL=client.d.ts.map