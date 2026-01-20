import type { ExchangeConfig, ExchangeSingleWalletConfig } from "./_methods/_base/execute.js";
import { type AgentEnableDexAbstractionOptions, type AgentEnableDexAbstractionSuccessResponse } from "./_methods/agentEnableDexAbstraction.js";
import { type ApproveAgentOptions, type ApproveAgentParameters, type ApproveAgentSuccessResponse } from "./_methods/approveAgent.js";
import { type ApproveBuilderFeeOptions, type ApproveBuilderFeeParameters, type ApproveBuilderFeeSuccessResponse } from "./_methods/approveBuilderFee.js";
import { type BatchModifyOptions, type BatchModifyParameters, type BatchModifySuccessResponse } from "./_methods/batchModify.js";
import { type CancelOptions, type CancelParameters, type CancelSuccessResponse } from "./_methods/cancel.js";
import { type CancelByCloidOptions, type CancelByCloidParameters, type CancelByCloidSuccessResponse } from "./_methods/cancelByCloid.js";
import { type CDepositOptions, type CDepositParameters, type CDepositSuccessResponse } from "./_methods/cDeposit.js";
import { type ClaimRewardsOptions, type ClaimRewardsSuccessResponse } from "./_methods/claimRewards.js";
import { type ConvertToMultiSigUserOptions, type ConvertToMultiSigUserParameters, type ConvertToMultiSigUserSuccessResponse } from "./_methods/convertToMultiSigUser.js";
import { type CreateSubAccountOptions, type CreateSubAccountParameters, type CreateSubAccountSuccessResponse } from "./_methods/createSubAccount.js";
import { type CreateVaultOptions, type CreateVaultParameters, type CreateVaultSuccessResponse } from "./_methods/createVault.js";
import { type CSignerActionOptions, type CSignerActionParameters, type CSignerActionSuccessResponse } from "./_methods/cSignerAction.js";
import { type CValidatorActionOptions, type CValidatorActionParameters, type CValidatorActionSuccessResponse } from "./_methods/cValidatorAction.js";
import { type CWithdrawOptions, type CWithdrawParameters, type CWithdrawSuccessResponse } from "./_methods/cWithdraw.js";
import { type EvmUserModifyOptions, type EvmUserModifyParameters, type EvmUserModifySuccessResponse } from "./_methods/evmUserModify.js";
import { type LinkStakingUserOptions, type LinkStakingUserParameters, type LinkStakingUserSuccessResponse } from "./_methods/linkStakingUser.js";
import { type ModifyOptions, type ModifyParameters, type ModifySuccessResponse } from "./_methods/modify.js";
import { type OrderOptions, type OrderParameters, type OrderSuccessResponse } from "./_methods/order.js";
import { type NoopOptions, type NoopSuccessResponse } from "./_methods/noop.js";
import { type PerpDeployOptions, type PerpDeployParameters, type PerpDeploySuccessResponse } from "./_methods/perpDeploy.js";
import { type RegisterReferrerOptions, type RegisterReferrerParameters, type RegisterReferrerSuccessResponse } from "./_methods/registerReferrer.js";
import { type ReserveRequestWeightOptions, type ReserveRequestWeightParameters, type ReserveRequestWeightSuccessResponse } from "./_methods/reserveRequestWeight.js";
import { type ScheduleCancelOptions, type ScheduleCancelParameters, type ScheduleCancelSuccessResponse } from "./_methods/scheduleCancel.js";
import { type SendAssetOptions, type SendAssetParameters, type SendAssetSuccessResponse } from "./_methods/sendAsset.js";
import { type SetDisplayNameOptions, type SetDisplayNameParameters, type SetDisplayNameSuccessResponse } from "./_methods/setDisplayName.js";
import { type SetReferrerOptions, type SetReferrerParameters, type SetReferrerSuccessResponse } from "./_methods/setReferrer.js";
import { type SpotDeployOptions, type SpotDeployParameters, type SpotDeploySuccessResponse } from "./_methods/spotDeploy.js";
import { type SpotSendOptions, type SpotSendParameters, type SpotSendSuccessResponse } from "./_methods/spotSend.js";
import { type SpotUserOptions, type SpotUserParameters, type SpotUserSuccessResponse } from "./_methods/spotUser.js";
import { type SubAccountModifyOptions, type SubAccountModifyParameters, type SubAccountModifySuccessResponse } from "./_methods/subAccountModify.js";
import { type SubAccountSpotTransferOptions, type SubAccountSpotTransferParameters, type SubAccountSpotTransferSuccessResponse } from "./_methods/subAccountSpotTransfer.js";
import { type SubAccountTransferOptions, type SubAccountTransferParameters, type SubAccountTransferSuccessResponse } from "./_methods/subAccountTransfer.js";
import { type TokenDelegateOptions, type TokenDelegateParameters, type TokenDelegateSuccessResponse } from "./_methods/tokenDelegate.js";
import { type TwapCancelOptions, type TwapCancelParameters, type TwapCancelSuccessResponse } from "./_methods/twapCancel.js";
import { type TwapOrderOptions, type TwapOrderParameters, type TwapOrderSuccessResponse } from "./_methods/twapOrder.js";
import { type UpdateIsolatedMarginOptions, type UpdateIsolatedMarginParameters, type UpdateIsolatedMarginSuccessResponse } from "./_methods/updateIsolatedMargin.js";
import { type UpdateLeverageOptions, type UpdateLeverageParameters, type UpdateLeverageSuccessResponse } from "./_methods/updateLeverage.js";
import { type UsdClassTransferOptions, type UsdClassTransferParameters, type UsdClassTransferSuccessResponse } from "./_methods/usdClassTransfer.js";
import { type UsdSendOptions, type UsdSendParameters, type UsdSendSuccessResponse } from "./_methods/usdSend.js";
import { type UserDexAbstractionOptions, type UserDexAbstractionParameters, type UserDexAbstractionSuccessResponse } from "./_methods/userDexAbstraction.js";
import { type ValidatorL1StreamOptions, type ValidatorL1StreamParameters, type ValidatorL1StreamSuccessResponse } from "./_methods/validatorL1Stream.js";
import { type VaultDistributeOptions, type VaultDistributeParameters, type VaultDistributeSuccessResponse } from "./_methods/vaultDistribute.js";
import { type VaultModifyOptions, type VaultModifyParameters, type VaultModifySuccessResponse } from "./_methods/vaultModify.js";
import { type VaultTransferOptions, type VaultTransferParameters, type VaultTransferSuccessResponse } from "./_methods/vaultTransfer.js";
import { type Withdraw3Options, type Withdraw3Parameters, type Withdraw3SuccessResponse } from "./_methods/withdraw3.js";
/**
 * Execute actions: place orders, cancel orders, transfer funds, etc.
 *
 * Corresponds to the {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint | Exchange endpoint}.
 */
export declare class ExchangeClient<C extends ExchangeConfig = ExchangeSingleWalletConfig> {
    config_: C;
    /**
     * Creates an instance of the ExchangeClient.
     *
     * @param config - Configuration for Exchange API requests. See {@link ExchangeConfig}.
     *
     * @example [viem](https://viem.sh/docs/clients/wallet#local-accounts-private-key-mnemonic-etc)
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     *
     * const wallet = privateKeyToAccount("0x..."); // viem or ethers
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({ transport, wallet });
     * ```
     *
     * @example [ethers.js](https://docs.ethers.org/v6/api/wallet/#Wallet)
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     * import { ethers } from "npm:ethers";
     *
     * const transport = new hl.HttpTransport();
     * const client = new hl.ExchangeClient({ transport, wallet: new ethers.Wallet("0x...") });
     * ```
     *
     * @example Multi-sig
     * ```ts
     * import * as hl from "@nktkas/hyperliquid";
     * import { privateKeyToAccount } from "npm:viem/accounts";
     * import { ethers } from "npm:ethers";
     *
     * const signer1 = privateKeyToAccount("0x...");
     * const signer2 = new ethers.Wallet("0x...");
     * // ... and more signers
     *
     * const transport = new hl.HttpTransport(); // or `WebSocketTransport`
     *
     * const client = new hl.ExchangeClient({
     *   transport,
     *   signers: [signer1, signer2],
     *   multiSigUser: "0x...",
     * });
     * ```
     */
    constructor(config: C);
    /** @see {@link agentEnableDexAbstraction} */
    agentEnableDexAbstraction(opts?: AgentEnableDexAbstractionOptions): Promise<AgentEnableDexAbstractionSuccessResponse>;
    /** @see {@link approveAgent} */
    approveAgent(params: ApproveAgentParameters, opts?: ApproveAgentOptions): Promise<ApproveAgentSuccessResponse>;
    /** @see {@link approveBuilderFee} */
    approveBuilderFee(params: ApproveBuilderFeeParameters, opts?: ApproveBuilderFeeOptions): Promise<ApproveBuilderFeeSuccessResponse>;
    /** @see {@link batchModify} */
    batchModify(params: BatchModifyParameters, opts?: BatchModifyOptions): Promise<BatchModifySuccessResponse>;
    /** @see {@link cancel} */
    cancel(params: CancelParameters, opts?: CancelOptions): Promise<CancelSuccessResponse>;
    /** @see {@link cancelByCloid} */
    cancelByCloid(params: CancelByCloidParameters, opts?: CancelByCloidOptions): Promise<CancelByCloidSuccessResponse>;
    /** @see {@link cDeposit} */
    cDeposit(params: CDepositParameters, opts?: CDepositOptions): Promise<CDepositSuccessResponse>;
    /** @see {@link claimRewards} */
    claimRewards(opts?: ClaimRewardsOptions): Promise<ClaimRewardsSuccessResponse>;
    /** @see {@link convertToMultiSigUser} */
    convertToMultiSigUser(params: ConvertToMultiSigUserParameters, opts?: ConvertToMultiSigUserOptions): Promise<ConvertToMultiSigUserSuccessResponse>;
    /** @see {@link createSubAccount} */
    createSubAccount(params: CreateSubAccountParameters, opts?: CreateSubAccountOptions): Promise<CreateSubAccountSuccessResponse>;
    /** @see {@link createVault} */
    createVault(params: CreateVaultParameters, opts?: CreateVaultOptions): Promise<CreateVaultSuccessResponse>;
    /** @see {@link cSignerAction} */
    cSignerAction(params: CSignerActionParameters, opts?: CSignerActionOptions): Promise<CSignerActionSuccessResponse>;
    /** @see {@link cValidatorAction} */
    cValidatorAction(params: CValidatorActionParameters, opts?: CValidatorActionOptions): Promise<CValidatorActionSuccessResponse>;
    /** @see {@link cWithdraw} */
    cWithdraw(params: CWithdrawParameters, opts?: CWithdrawOptions): Promise<CWithdrawSuccessResponse>;
    /** @see {@link evmUserModify} */
    evmUserModify(params: EvmUserModifyParameters, opts?: EvmUserModifyOptions): Promise<EvmUserModifySuccessResponse>;
    /** @see {@link linkStakingUser} */
    linkStakingUser(params: LinkStakingUserParameters, opts?: LinkStakingUserOptions): Promise<LinkStakingUserSuccessResponse>;
    /** @see {@link modify} */
    modify(params: ModifyParameters, opts?: ModifyOptions): Promise<ModifySuccessResponse>;
    /** @see {@link order} */
    order(params: OrderParameters, opts?: OrderOptions): Promise<OrderSuccessResponse>;
    /** @see {@link noop} */
    noop(opts?: NoopOptions): Promise<NoopSuccessResponse>;
    /** @see {@link perpDeploy} */
    perpDeploy(params: PerpDeployParameters, opts?: PerpDeployOptions): Promise<PerpDeploySuccessResponse>;
    /** @see {@link registerReferrer} */
    registerReferrer(params: RegisterReferrerParameters, opts?: RegisterReferrerOptions): Promise<RegisterReferrerSuccessResponse>;
    /** @see {@link reserveRequestWeight} */
    reserveRequestWeight(params: ReserveRequestWeightParameters, opts?: ReserveRequestWeightOptions): Promise<ReserveRequestWeightSuccessResponse>;
    /** @see {@link scheduleCancel} */
    scheduleCancel(params?: ScheduleCancelParameters, opts?: ScheduleCancelOptions): Promise<ScheduleCancelSuccessResponse>;
    scheduleCancel(opts?: ScheduleCancelOptions): Promise<ScheduleCancelSuccessResponse>;
    /** @see {@link sendAsset} */
    sendAsset(params: SendAssetParameters, opts?: SendAssetOptions): Promise<SendAssetSuccessResponse>;
    /** @see {@link setDisplayName} */
    setDisplayName(params: SetDisplayNameParameters, opts?: SetDisplayNameOptions): Promise<SetDisplayNameSuccessResponse>;
    /** @see {@link setReferrer} */
    setReferrer(params: SetReferrerParameters, opts?: SetReferrerOptions): Promise<SetReferrerSuccessResponse>;
    /** @see {@link spotDeploy} */
    spotDeploy(params: SpotDeployParameters, opts?: SpotDeployOptions): Promise<SpotDeploySuccessResponse>;
    /** @see {@link spotSend} */
    spotSend(params: SpotSendParameters, opts?: SpotSendOptions): Promise<SpotSendSuccessResponse>;
    /** @see {@link spotUser} */
    spotUser(params: SpotUserParameters, opts?: SpotUserOptions): Promise<SpotUserSuccessResponse>;
    /** @see {@link subAccountModify} */
    subAccountModify(params: SubAccountModifyParameters, opts?: SubAccountModifyOptions): Promise<SubAccountModifySuccessResponse>;
    /** @see {@link subAccountSpotTransfer} */
    subAccountSpotTransfer(params: SubAccountSpotTransferParameters, opts?: SubAccountSpotTransferOptions): Promise<SubAccountSpotTransferSuccessResponse>;
    /** @see {@link subAccountTransfer} */
    subAccountTransfer(params: SubAccountTransferParameters, opts?: SubAccountTransferOptions): Promise<SubAccountTransferSuccessResponse>;
    /** @see {@link tokenDelegate} */
    tokenDelegate(params: TokenDelegateParameters, opts?: TokenDelegateOptions): Promise<TokenDelegateSuccessResponse>;
    /** @see {@link twapCancel} */
    twapCancel(params: TwapCancelParameters, opts?: TwapCancelOptions): Promise<TwapCancelSuccessResponse>;
    /** @see {@link twapOrder} */
    twapOrder(params: TwapOrderParameters, opts?: TwapOrderOptions): Promise<TwapOrderSuccessResponse>;
    /** @see {@link updateIsolatedMargin} */
    updateIsolatedMargin(params: UpdateIsolatedMarginParameters, opts?: UpdateIsolatedMarginOptions): Promise<UpdateIsolatedMarginSuccessResponse>;
    /** @see {@link updateLeverage} */
    updateLeverage(params: UpdateLeverageParameters, opts?: UpdateLeverageOptions): Promise<UpdateLeverageSuccessResponse>;
    /** @see {@link usdClassTransfer} */
    usdClassTransfer(params: UsdClassTransferParameters, opts?: UsdClassTransferOptions): Promise<UsdClassTransferSuccessResponse>;
    /** @see {@link usdSend} */
    usdSend(params: UsdSendParameters, opts?: UsdSendOptions): Promise<UsdSendSuccessResponse>;
    /** @see {@link userDexAbstraction} */
    userDexAbstraction(params: UserDexAbstractionParameters, opts?: UserDexAbstractionOptions): Promise<UserDexAbstractionSuccessResponse>;
    /** @see {@link validatorL1Stream} */
    validatorL1Stream(params: ValidatorL1StreamParameters, opts?: ValidatorL1StreamOptions): Promise<ValidatorL1StreamSuccessResponse>;
    /** @see {@link vaultDistribute} */
    vaultDistribute(params: VaultDistributeParameters, opts?: VaultDistributeOptions): Promise<VaultDistributeSuccessResponse>;
    /** @see {@link vaultModify} */
    vaultModify(params: VaultModifyParameters, opts?: VaultModifyOptions): Promise<VaultModifySuccessResponse>;
    /** @see {@link vaultTransfer} */
    vaultTransfer(params: VaultTransferParameters, opts?: VaultTransferOptions): Promise<VaultTransferSuccessResponse>;
    /** @see {@link withdraw3} */
    withdraw3(params: Withdraw3Parameters, opts?: Withdraw3Options): Promise<Withdraw3SuccessResponse>;
}
export type { ExchangeMultiSigConfig, ExchangeSingleWalletConfig } from "./_methods/_base/execute.js";
export { ApiRequestError } from "./_methods/_base/errors.js";
export type { AgentEnableDexAbstractionOptions, AgentEnableDexAbstractionSuccessResponse, } from "./_methods/agentEnableDexAbstraction.js";
export type { ApproveAgentOptions, ApproveAgentParameters, ApproveAgentSuccessResponse, } from "./_methods/approveAgent.js";
export type { ApproveBuilderFeeOptions, ApproveBuilderFeeParameters, ApproveBuilderFeeSuccessResponse, } from "./_methods/approveBuilderFee.js";
export type { BatchModifyOptions, BatchModifyParameters, BatchModifySuccessResponse } from "./_methods/batchModify.js";
export type { CancelOptions, CancelParameters, CancelSuccessResponse } from "./_methods/cancel.js";
export type { CancelByCloidOptions, CancelByCloidParameters, CancelByCloidSuccessResponse, } from "./_methods/cancelByCloid.js";
export type { CDepositOptions, CDepositParameters, CDepositSuccessResponse } from "./_methods/cDeposit.js";
export type { ClaimRewardsOptions, ClaimRewardsSuccessResponse } from "./_methods/claimRewards.js";
export type { ConvertToMultiSigUserOptions, ConvertToMultiSigUserParameters, ConvertToMultiSigUserSuccessResponse, } from "./_methods/convertToMultiSigUser.js";
export type { CreateSubAccountOptions, CreateSubAccountParameters, CreateSubAccountSuccessResponse, } from "./_methods/createSubAccount.js";
export type { CreateVaultOptions, CreateVaultParameters, CreateVaultSuccessResponse } from "./_methods/createVault.js";
export type { CSignerActionOptions, CSignerActionParameters, CSignerActionSuccessResponse, } from "./_methods/cSignerAction.js";
export type { CValidatorActionOptions, CValidatorActionParameters, CValidatorActionSuccessResponse, } from "./_methods/cValidatorAction.js";
export type { CWithdrawOptions, CWithdrawParameters, CWithdrawSuccessResponse } from "./_methods/cWithdraw.js";
export type { EvmUserModifyOptions, EvmUserModifyParameters, EvmUserModifySuccessResponse, } from "./_methods/evmUserModify.js";
export type { LinkStakingUserOptions, LinkStakingUserParameters, LinkStakingUserSuccessResponse, } from "./_methods/linkStakingUser.js";
export type { ModifyOptions, ModifyParameters, ModifySuccessResponse } from "./_methods/modify.js";
export type { OrderOptions, OrderParameters, OrderSuccessResponse } from "./_methods/order.js";
export type { NoopOptions, NoopSuccessResponse } from "./_methods/noop.js";
export type { PerpDeployOptions, PerpDeployParameters, PerpDeploySuccessResponse } from "./_methods/perpDeploy.js";
export type { RegisterReferrerOptions, RegisterReferrerParameters, RegisterReferrerSuccessResponse, } from "./_methods/registerReferrer.js";
export type { ReserveRequestWeightOptions, ReserveRequestWeightParameters, ReserveRequestWeightSuccessResponse, } from "./_methods/reserveRequestWeight.js";
export type { ScheduleCancelOptions, ScheduleCancelParameters, ScheduleCancelSuccessResponse, } from "./_methods/scheduleCancel.js";
export type { SendAssetOptions, SendAssetParameters, SendAssetSuccessResponse } from "./_methods/sendAsset.js";
export type { SetDisplayNameOptions, SetDisplayNameParameters, SetDisplayNameSuccessResponse, } from "./_methods/setDisplayName.js";
export type { SetReferrerOptions, SetReferrerParameters, SetReferrerSuccessResponse } from "./_methods/setReferrer.js";
export type { SpotDeployOptions, SpotDeployParameters, SpotDeploySuccessResponse } from "./_methods/spotDeploy.js";
export type { SpotSendOptions, SpotSendParameters, SpotSendSuccessResponse } from "./_methods/spotSend.js";
export type { SpotUserOptions, SpotUserParameters, SpotUserSuccessResponse } from "./_methods/spotUser.js";
export type { SubAccountModifyOptions, SubAccountModifyParameters, SubAccountModifySuccessResponse, } from "./_methods/subAccountModify.js";
export type { SubAccountSpotTransferOptions, SubAccountSpotTransferParameters, SubAccountSpotTransferSuccessResponse, } from "./_methods/subAccountSpotTransfer.js";
export type { SubAccountTransferOptions, SubAccountTransferParameters, SubAccountTransferSuccessResponse, } from "./_methods/subAccountTransfer.js";
export type { TokenDelegateOptions, TokenDelegateParameters, TokenDelegateSuccessResponse, } from "./_methods/tokenDelegate.js";
export type { TwapCancelOptions, TwapCancelParameters, TwapCancelSuccessResponse } from "./_methods/twapCancel.js";
export type { TwapOrderOptions, TwapOrderParameters, TwapOrderSuccessResponse } from "./_methods/twapOrder.js";
export type { UpdateIsolatedMarginOptions, UpdateIsolatedMarginParameters, UpdateIsolatedMarginSuccessResponse, } from "./_methods/updateIsolatedMargin.js";
export type { UpdateLeverageOptions, UpdateLeverageParameters, UpdateLeverageSuccessResponse, } from "./_methods/updateLeverage.js";
export type { UsdClassTransferOptions, UsdClassTransferParameters, UsdClassTransferSuccessResponse, } from "./_methods/usdClassTransfer.js";
export type { UsdSendOptions, UsdSendParameters, UsdSendSuccessResponse } from "./_methods/usdSend.js";
export type { UserDexAbstractionOptions, UserDexAbstractionParameters, UserDexAbstractionSuccessResponse, } from "./_methods/userDexAbstraction.js";
export type { ValidatorL1StreamOptions, ValidatorL1StreamParameters, ValidatorL1StreamSuccessResponse, } from "./_methods/validatorL1Stream.js";
export type { VaultDistributeOptions, VaultDistributeParameters, VaultDistributeSuccessResponse, } from "./_methods/vaultDistribute.js";
export type { VaultModifyOptions, VaultModifyParameters, VaultModifySuccessResponse } from "./_methods/vaultModify.js";
export type { VaultTransferOptions, VaultTransferParameters, VaultTransferSuccessResponse, } from "./_methods/vaultTransfer.js";
export type { Withdraw3Options, Withdraw3Parameters, Withdraw3SuccessResponse } from "./_methods/withdraw3.js";
//# sourceMappingURL=client.d.ts.map