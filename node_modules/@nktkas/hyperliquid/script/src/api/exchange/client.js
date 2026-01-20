"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiRequestError = exports.ExchangeClient = void 0;
// =============================================================
// Methods Imports
// =============================================================
const agentEnableDexAbstraction_js_1 = require("./_methods/agentEnableDexAbstraction.js");
const approveAgent_js_1 = require("./_methods/approveAgent.js");
const approveBuilderFee_js_1 = require("./_methods/approveBuilderFee.js");
const batchModify_js_1 = require("./_methods/batchModify.js");
const cancel_js_1 = require("./_methods/cancel.js");
const cancelByCloid_js_1 = require("./_methods/cancelByCloid.js");
const cDeposit_js_1 = require("./_methods/cDeposit.js");
const claimRewards_js_1 = require("./_methods/claimRewards.js");
const convertToMultiSigUser_js_1 = require("./_methods/convertToMultiSigUser.js");
const createSubAccount_js_1 = require("./_methods/createSubAccount.js");
const createVault_js_1 = require("./_methods/createVault.js");
const cSignerAction_js_1 = require("./_methods/cSignerAction.js");
const cValidatorAction_js_1 = require("./_methods/cValidatorAction.js");
const cWithdraw_js_1 = require("./_methods/cWithdraw.js");
const evmUserModify_js_1 = require("./_methods/evmUserModify.js");
const linkStakingUser_js_1 = require("./_methods/linkStakingUser.js");
const modify_js_1 = require("./_methods/modify.js");
const order_js_1 = require("./_methods/order.js");
const noop_js_1 = require("./_methods/noop.js");
const perpDeploy_js_1 = require("./_methods/perpDeploy.js");
const registerReferrer_js_1 = require("./_methods/registerReferrer.js");
const reserveRequestWeight_js_1 = require("./_methods/reserveRequestWeight.js");
const scheduleCancel_js_1 = require("./_methods/scheduleCancel.js");
const sendAsset_js_1 = require("./_methods/sendAsset.js");
const setDisplayName_js_1 = require("./_methods/setDisplayName.js");
const setReferrer_js_1 = require("./_methods/setReferrer.js");
const spotDeploy_js_1 = require("./_methods/spotDeploy.js");
const spotSend_js_1 = require("./_methods/spotSend.js");
const spotUser_js_1 = require("./_methods/spotUser.js");
const subAccountModify_js_1 = require("./_methods/subAccountModify.js");
const subAccountSpotTransfer_js_1 = require("./_methods/subAccountSpotTransfer.js");
const subAccountTransfer_js_1 = require("./_methods/subAccountTransfer.js");
const tokenDelegate_js_1 = require("./_methods/tokenDelegate.js");
const twapCancel_js_1 = require("./_methods/twapCancel.js");
const twapOrder_js_1 = require("./_methods/twapOrder.js");
const updateIsolatedMargin_js_1 = require("./_methods/updateIsolatedMargin.js");
const updateLeverage_js_1 = require("./_methods/updateLeverage.js");
const usdClassTransfer_js_1 = require("./_methods/usdClassTransfer.js");
const usdSend_js_1 = require("./_methods/usdSend.js");
const userDexAbstraction_js_1 = require("./_methods/userDexAbstraction.js");
const validatorL1Stream_js_1 = require("./_methods/validatorL1Stream.js");
const vaultDistribute_js_1 = require("./_methods/vaultDistribute.js");
const vaultModify_js_1 = require("./_methods/vaultModify.js");
const vaultTransfer_js_1 = require("./_methods/vaultTransfer.js");
const withdraw3_js_1 = require("./_methods/withdraw3.js");
// =============================================================
// Client
// =============================================================
/**
 * Execute actions: place orders, cancel orders, transfer funds, etc.
 *
 * Corresponds to the {@link https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint | Exchange endpoint}.
 */
class ExchangeClient {
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
        return (0, agentEnableDexAbstraction_js_1.agentEnableDexAbstraction)(this.config_, opts);
    }
    /** @see {@link approveAgent} */
    approveAgent(params, opts) {
        return (0, approveAgent_js_1.approveAgent)(this.config_, params, opts);
    }
    /** @see {@link approveBuilderFee} */
    approveBuilderFee(params, opts) {
        return (0, approveBuilderFee_js_1.approveBuilderFee)(this.config_, params, opts);
    }
    /** @see {@link batchModify} */
    batchModify(params, opts) {
        return (0, batchModify_js_1.batchModify)(this.config_, params, opts);
    }
    /** @see {@link cancel} */
    cancel(params, opts) {
        return (0, cancel_js_1.cancel)(this.config_, params, opts);
    }
    /** @see {@link cancelByCloid} */
    cancelByCloid(params, opts) {
        return (0, cancelByCloid_js_1.cancelByCloid)(this.config_, params, opts);
    }
    /** @see {@link cDeposit} */
    cDeposit(params, opts) {
        return (0, cDeposit_js_1.cDeposit)(this.config_, params, opts);
    }
    /** @see {@link claimRewards} */
    claimRewards(opts) {
        return (0, claimRewards_js_1.claimRewards)(this.config_, opts);
    }
    /** @see {@link convertToMultiSigUser} */
    convertToMultiSigUser(params, opts) {
        return (0, convertToMultiSigUser_js_1.convertToMultiSigUser)(this.config_, params, opts);
    }
    /** @see {@link createSubAccount} */
    createSubAccount(params, opts) {
        return (0, createSubAccount_js_1.createSubAccount)(this.config_, params, opts);
    }
    /** @see {@link createVault} */
    createVault(params, opts) {
        return (0, createVault_js_1.createVault)(this.config_, params, opts);
    }
    /** @see {@link cSignerAction} */
    cSignerAction(params, opts) {
        return (0, cSignerAction_js_1.cSignerAction)(this.config_, params, opts);
    }
    /** @see {@link cValidatorAction} */
    cValidatorAction(params, opts) {
        return (0, cValidatorAction_js_1.cValidatorAction)(this.config_, params, opts);
    }
    /** @see {@link cWithdraw} */
    cWithdraw(params, opts) {
        return (0, cWithdraw_js_1.cWithdraw)(this.config_, params, opts);
    }
    /** @see {@link evmUserModify} */
    evmUserModify(params, opts) {
        return (0, evmUserModify_js_1.evmUserModify)(this.config_, params, opts);
    }
    /** @see {@link linkStakingUser} */
    linkStakingUser(params, opts) {
        return (0, linkStakingUser_js_1.linkStakingUser)(this.config_, params, opts);
    }
    /** @see {@link modify} */
    modify(params, opts) {
        return (0, modify_js_1.modify)(this.config_, params, opts);
    }
    /** @see {@link order} */
    order(params, opts) {
        return (0, order_js_1.order)(this.config_, params, opts);
    }
    /** @see {@link noop} */
    noop(opts) {
        return (0, noop_js_1.noop)(this.config_, opts);
    }
    /** @see {@link perpDeploy} */
    perpDeploy(params, opts) {
        return (0, perpDeploy_js_1.perpDeploy)(this.config_, params, opts);
    }
    /** @see {@link registerReferrer} */
    registerReferrer(params, opts) {
        return (0, registerReferrer_js_1.registerReferrer)(this.config_, params, opts);
    }
    /** @see {@link reserveRequestWeight} */
    reserveRequestWeight(params, opts) {
        return (0, reserveRequestWeight_js_1.reserveRequestWeight)(this.config_, params, opts);
    }
    scheduleCancel(paramsOrOpts, maybeOpts) {
        const isFirstArgParams = paramsOrOpts && "time" in paramsOrOpts;
        const params = isFirstArgParams ? paramsOrOpts : {};
        const opts = isFirstArgParams ? maybeOpts : paramsOrOpts;
        return (0, scheduleCancel_js_1.scheduleCancel)(this.config_, params, opts);
    }
    /** @see {@link sendAsset} */
    sendAsset(params, opts) {
        return (0, sendAsset_js_1.sendAsset)(this.config_, params, opts);
    }
    /** @see {@link setDisplayName} */
    setDisplayName(params, opts) {
        return (0, setDisplayName_js_1.setDisplayName)(this.config_, params, opts);
    }
    /** @see {@link setReferrer} */
    setReferrer(params, opts) {
        return (0, setReferrer_js_1.setReferrer)(this.config_, params, opts);
    }
    /** @see {@link spotDeploy} */
    spotDeploy(params, opts) {
        return (0, spotDeploy_js_1.spotDeploy)(this.config_, params, opts);
    }
    /** @see {@link spotSend} */
    spotSend(params, opts) {
        return (0, spotSend_js_1.spotSend)(this.config_, params, opts);
    }
    /** @see {@link spotUser} */
    spotUser(params, opts) {
        return (0, spotUser_js_1.spotUser)(this.config_, params, opts);
    }
    /** @see {@link subAccountModify} */
    subAccountModify(params, opts) {
        return (0, subAccountModify_js_1.subAccountModify)(this.config_, params, opts);
    }
    /** @see {@link subAccountSpotTransfer} */
    subAccountSpotTransfer(params, opts) {
        return (0, subAccountSpotTransfer_js_1.subAccountSpotTransfer)(this.config_, params, opts);
    }
    /** @see {@link subAccountTransfer} */
    subAccountTransfer(params, opts) {
        return (0, subAccountTransfer_js_1.subAccountTransfer)(this.config_, params, opts);
    }
    /** @see {@link tokenDelegate} */
    tokenDelegate(params, opts) {
        return (0, tokenDelegate_js_1.tokenDelegate)(this.config_, params, opts);
    }
    /** @see {@link twapCancel} */
    twapCancel(params, opts) {
        return (0, twapCancel_js_1.twapCancel)(this.config_, params, opts);
    }
    /** @see {@link twapOrder} */
    twapOrder(params, opts) {
        return (0, twapOrder_js_1.twapOrder)(this.config_, params, opts);
    }
    /** @see {@link updateIsolatedMargin} */
    updateIsolatedMargin(params, opts) {
        return (0, updateIsolatedMargin_js_1.updateIsolatedMargin)(this.config_, params, opts);
    }
    /** @see {@link updateLeverage} */
    updateLeverage(params, opts) {
        return (0, updateLeverage_js_1.updateLeverage)(this.config_, params, opts);
    }
    /** @see {@link usdClassTransfer} */
    usdClassTransfer(params, opts) {
        return (0, usdClassTransfer_js_1.usdClassTransfer)(this.config_, params, opts);
    }
    /** @see {@link usdSend} */
    usdSend(params, opts) {
        return (0, usdSend_js_1.usdSend)(this.config_, params, opts);
    }
    /** @see {@link userDexAbstraction} */
    userDexAbstraction(params, opts) {
        return (0, userDexAbstraction_js_1.userDexAbstraction)(this.config_, params, opts);
    }
    /** @see {@link validatorL1Stream} */
    validatorL1Stream(params, opts) {
        return (0, validatorL1Stream_js_1.validatorL1Stream)(this.config_, params, opts);
    }
    /** @see {@link vaultDistribute} */
    vaultDistribute(params, opts) {
        return (0, vaultDistribute_js_1.vaultDistribute)(this.config_, params, opts);
    }
    /** @see {@link vaultModify} */
    vaultModify(params, opts) {
        return (0, vaultModify_js_1.vaultModify)(this.config_, params, opts);
    }
    /** @see {@link vaultTransfer} */
    vaultTransfer(params, opts) {
        return (0, vaultTransfer_js_1.vaultTransfer)(this.config_, params, opts);
    }
    /** @see {@link withdraw3} */
    withdraw3(params, opts) {
        return (0, withdraw3_js_1.withdraw3)(this.config_, params, opts);
    }
}
exports.ExchangeClient = ExchangeClient;
var errors_js_1 = require("./_methods/_base/errors.js");
Object.defineProperty(exports, "ApiRequestError", { enumerable: true, get: function () { return errors_js_1.ApiRequestError; } });
//# sourceMappingURL=client.js.map