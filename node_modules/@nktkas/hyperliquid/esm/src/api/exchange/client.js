// =============================================================
// Methods Imports
// =============================================================
import { agentEnableDexAbstraction, } from "./_methods/agentEnableDexAbstraction.js";
import { approveAgent, } from "./_methods/approveAgent.js";
import { approveBuilderFee, } from "./_methods/approveBuilderFee.js";
import { batchModify, } from "./_methods/batchModify.js";
import { cancel } from "./_methods/cancel.js";
import { cancelByCloid, } from "./_methods/cancelByCloid.js";
import { cDeposit, } from "./_methods/cDeposit.js";
import { claimRewards } from "./_methods/claimRewards.js";
import { convertToMultiSigUser, } from "./_methods/convertToMultiSigUser.js";
import { createSubAccount, } from "./_methods/createSubAccount.js";
import { createVault, } from "./_methods/createVault.js";
import { cSignerAction, } from "./_methods/cSignerAction.js";
import { cValidatorAction, } from "./_methods/cValidatorAction.js";
import { cWithdraw, } from "./_methods/cWithdraw.js";
import { evmUserModify, } from "./_methods/evmUserModify.js";
import { linkStakingUser, } from "./_methods/linkStakingUser.js";
import { modify } from "./_methods/modify.js";
import { order } from "./_methods/order.js";
import { noop } from "./_methods/noop.js";
import { perpDeploy, } from "./_methods/perpDeploy.js";
import { registerReferrer, } from "./_methods/registerReferrer.js";
import { reserveRequestWeight, } from "./_methods/reserveRequestWeight.js";
import { scheduleCancel, } from "./_methods/scheduleCancel.js";
import { sendAsset, } from "./_methods/sendAsset.js";
import { setDisplayName, } from "./_methods/setDisplayName.js";
import { setReferrer, } from "./_methods/setReferrer.js";
import { spotDeploy, } from "./_methods/spotDeploy.js";
import { spotSend, } from "./_methods/spotSend.js";
import { spotUser, } from "./_methods/spotUser.js";
import { subAccountModify, } from "./_methods/subAccountModify.js";
import { subAccountSpotTransfer, } from "./_methods/subAccountSpotTransfer.js";
import { subAccountTransfer, } from "./_methods/subAccountTransfer.js";
import { tokenDelegate, } from "./_methods/tokenDelegate.js";
import { twapCancel, } from "./_methods/twapCancel.js";
import { twapOrder, } from "./_methods/twapOrder.js";
import { updateIsolatedMargin, } from "./_methods/updateIsolatedMargin.js";
import { updateLeverage, } from "./_methods/updateLeverage.js";
import { usdClassTransfer, } from "./_methods/usdClassTransfer.js";
import { usdSend, } from "./_methods/usdSend.js";
import { userDexAbstraction, } from "./_methods/userDexAbstraction.js";
import { validatorL1Stream, } from "./_methods/validatorL1Stream.js";
import { vaultDistribute, } from "./_methods/vaultDistribute.js";
import { vaultModify, } from "./_methods/vaultModify.js";
import { vaultTransfer, } from "./_methods/vaultTransfer.js";
import { withdraw3, } from "./_methods/withdraw3.js";
// =============================================================
// Client
// =============================================================
/**
 * Execute actions: place orders, cancel orders, transfer funds, etc.
 *
 * Corresponds to the {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint | Exchange endpoint}.
 */
export class ExchangeClient {
    config_;
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
    constructor(config) {
        this.config_ = config;
    }
    /** @see {@link agentEnableDexAbstraction} */
    agentEnableDexAbstraction(opts) {
        return agentEnableDexAbstraction(this.config_, opts);
    }
    /** @see {@link approveAgent} */
    approveAgent(params, opts) {
        return approveAgent(this.config_, params, opts);
    }
    /** @see {@link approveBuilderFee} */
    approveBuilderFee(params, opts) {
        return approveBuilderFee(this.config_, params, opts);
    }
    /** @see {@link batchModify} */
    batchModify(params, opts) {
        return batchModify(this.config_, params, opts);
    }
    /** @see {@link cancel} */
    cancel(params, opts) {
        return cancel(this.config_, params, opts);
    }
    /** @see {@link cancelByCloid} */
    cancelByCloid(params, opts) {
        return cancelByCloid(this.config_, params, opts);
    }
    /** @see {@link cDeposit} */
    cDeposit(params, opts) {
        return cDeposit(this.config_, params, opts);
    }
    /** @see {@link claimRewards} */
    claimRewards(opts) {
        return claimRewards(this.config_, opts);
    }
    /** @see {@link convertToMultiSigUser} */
    convertToMultiSigUser(params, opts) {
        return convertToMultiSigUser(this.config_, params, opts);
    }
    /** @see {@link createSubAccount} */
    createSubAccount(params, opts) {
        return createSubAccount(this.config_, params, opts);
    }
    /** @see {@link createVault} */
    createVault(params, opts) {
        return createVault(this.config_, params, opts);
    }
    /** @see {@link cSignerAction} */
    cSignerAction(params, opts) {
        return cSignerAction(this.config_, params, opts);
    }
    /** @see {@link cValidatorAction} */
    cValidatorAction(params, opts) {
        return cValidatorAction(this.config_, params, opts);
    }
    /** @see {@link cWithdraw} */
    cWithdraw(params, opts) {
        return cWithdraw(this.config_, params, opts);
    }
    /** @see {@link evmUserModify} */
    evmUserModify(params, opts) {
        return evmUserModify(this.config_, params, opts);
    }
    /** @see {@link linkStakingUser} */
    linkStakingUser(params, opts) {
        return linkStakingUser(this.config_, params, opts);
    }
    /** @see {@link modify} */
    modify(params, opts) {
        return modify(this.config_, params, opts);
    }
    /** @see {@link order} */
    order(params, opts) {
        return order(this.config_, params, opts);
    }
    /** @see {@link noop} */
    noop(opts) {
        return noop(this.config_, opts);
    }
    /** @see {@link perpDeploy} */
    perpDeploy(params, opts) {
        return perpDeploy(this.config_, params, opts);
    }
    /** @see {@link registerReferrer} */
    registerReferrer(params, opts) {
        return registerReferrer(this.config_, params, opts);
    }
    /** @see {@link reserveRequestWeight} */
    reserveRequestWeight(params, opts) {
        return reserveRequestWeight(this.config_, params, opts);
    }
    scheduleCancel(paramsOrOpts, maybeOpts) {
        const isFirstArgParams = paramsOrOpts && "time" in paramsOrOpts;
        const params = isFirstArgParams ? paramsOrOpts : {};
        const opts = isFirstArgParams ? maybeOpts : paramsOrOpts;
        return scheduleCancel(this.config_, params, opts);
    }
    /** @see {@link sendAsset} */
    sendAsset(params, opts) {
        return sendAsset(this.config_, params, opts);
    }
    /** @see {@link setDisplayName} */
    setDisplayName(params, opts) {
        return setDisplayName(this.config_, params, opts);
    }
    /** @see {@link setReferrer} */
    setReferrer(params, opts) {
        return setReferrer(this.config_, params, opts);
    }
    /** @see {@link spotDeploy} */
    spotDeploy(params, opts) {
        return spotDeploy(this.config_, params, opts);
    }
    /** @see {@link spotSend} */
    spotSend(params, opts) {
        return spotSend(this.config_, params, opts);
    }
    /** @see {@link spotUser} */
    spotUser(params, opts) {
        return spotUser(this.config_, params, opts);
    }
    /** @see {@link subAccountModify} */
    subAccountModify(params, opts) {
        return subAccountModify(this.config_, params, opts);
    }
    /** @see {@link subAccountSpotTransfer} */
    subAccountSpotTransfer(params, opts) {
        return subAccountSpotTransfer(this.config_, params, opts);
    }
    /** @see {@link subAccountTransfer} */
    subAccountTransfer(params, opts) {
        return subAccountTransfer(this.config_, params, opts);
    }
    /** @see {@link tokenDelegate} */
    tokenDelegate(params, opts) {
        return tokenDelegate(this.config_, params, opts);
    }
    /** @see {@link twapCancel} */
    twapCancel(params, opts) {
        return twapCancel(this.config_, params, opts);
    }
    /** @see {@link twapOrder} */
    twapOrder(params, opts) {
        return twapOrder(this.config_, params, opts);
    }
    /** @see {@link updateIsolatedMargin} */
    updateIsolatedMargin(params, opts) {
        return updateIsolatedMargin(this.config_, params, opts);
    }
    /** @see {@link updateLeverage} */
    updateLeverage(params, opts) {
        return updateLeverage(this.config_, params, opts);
    }
    /** @see {@link usdClassTransfer} */
    usdClassTransfer(params, opts) {
        return usdClassTransfer(this.config_, params, opts);
    }
    /** @see {@link usdSend} */
    usdSend(params, opts) {
        return usdSend(this.config_, params, opts);
    }
    /** @see {@link userDexAbstraction} */
    userDexAbstraction(params, opts) {
        return userDexAbstraction(this.config_, params, opts);
    }
    /** @see {@link validatorL1Stream} */
    validatorL1Stream(params, opts) {
        return validatorL1Stream(this.config_, params, opts);
    }
    /** @see {@link vaultDistribute} */
    vaultDistribute(params, opts) {
        return vaultDistribute(this.config_, params, opts);
    }
    /** @see {@link vaultModify} */
    vaultModify(params, opts) {
        return vaultModify(this.config_, params, opts);
    }
    /** @see {@link vaultTransfer} */
    vaultTransfer(params, opts) {
        return vaultTransfer(this.config_, params, opts);
    }
    /** @see {@link withdraw3} */
    withdraw3(params, opts) {
        return withdraw3(this.config_, params, opts);
    }
}
export { ApiRequestError } from "./_methods/_base/errors.js";
//# sourceMappingURL=client.js.map