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
exports.AbstractWalletError = void 0;
exports.signTypedData = signTypedData;
exports.getWalletChainId = getWalletChainId;
exports.getWalletAddress = getWalletAddress;
const v = __importStar(require("valibot"));
const _base_js_1 = require("../_base.js");
const AbstractEthersV6SignerSchema = /* @__PURE__ */ (() => {
    return v.object({
        signTypedData: v.pipe(v.function(), v.check((fn) => fn.length === 3, "Number of arguments must be 3")),
        getAddress: v.function(),
        provider: v.nullish(v.object({
            getNetwork: v.function(),
        })),
    });
})();
const AbstractEthersV5SignerSchema = /* @__PURE__ */ (() => {
    return v.object({
        _signTypedData: v.pipe(v.function(), v.check((fn) => fn.length === 3, "Number of arguments must be 3")),
        getAddress: v.function(),
        provider: v.nullish(v.object({
            getNetwork: v.function(),
        })),
    });
})();
const AbstractViemJsonRpcAccountSchema = /* @__PURE__ */ (() => {
    return v.object({
        signTypedData: v.pipe(v.function(), v.check((fn) => fn.length === 1 || fn.length === 2, "Number of arguments must be 1 or 2")),
        getAddresses: v.function(),
        getChainId: v.function(),
    });
})();
const AbstractViemLocalAccountSchema = /* @__PURE__ */ (() => {
    return v.object({
        signTypedData: v.pipe(v.function(), v.check((fn) => fn.length === 1 || fn.length === 2, "Number of arguments must be 1 or 2")),
        address: v.string(),
    });
})();
/** Thrown when an error occurs in AbstractWallet operations (e.g., signing, getting address). */
class AbstractWalletError extends _base_js_1.HyperliquidError {
    constructor(message, options) {
        super(message, options);
        this.name = "AbstractWalletError";
    }
}
exports.AbstractWalletError = AbstractWalletError;
async function signTypedData(args) {
    const { wallet, domain, types, primaryType, message } = args;
    let signature;
    if (v.is(AbstractViemJsonRpcAccountSchema, wallet) || v.is(AbstractViemLocalAccountSchema, wallet)) {
        try {
            signature = await wallet.signTypedData({
                domain,
                types: {
                    EIP712Domain: [
                        { name: "name", type: "string" },
                        { name: "version", type: "string" },
                        { name: "chainId", type: "uint256" },
                        { name: "verifyingContract", type: "address" },
                    ],
                    ...types,
                },
                primaryType,
                message,
            });
        }
        catch (error) {
            throw new AbstractWalletError("Failed to sign typed data with viem wallet", { cause: error });
        }
    }
    else if (v.is(AbstractEthersV6SignerSchema, wallet)) {
        try {
            signature = await wallet.signTypedData(domain, types, message);
        }
        catch (error) {
            throw new AbstractWalletError("Failed to sign typed data with ethers v6 wallet", { cause: error });
        }
    }
    else if (v.is(AbstractEthersV5SignerSchema, wallet)) {
        try {
            signature = await wallet._signTypedData(domain, types, message);
        }
        catch (error) {
            throw new AbstractWalletError("Failed to sign typed data with ethers v5 wallet", { cause: error });
        }
    }
    else {
        throw new AbstractWalletError("Failed to sign typed data: unknown wallet");
    }
    return splitSignature(signature);
}
function splitSignature(signature) {
    const r = `0x${signature.slice(2, 66)}`;
    const s = `0x${signature.slice(66, 130)}`;
    const v = parseInt(signature.slice(130, 132), 16);
    return { r, s, v };
}
// =============================================================
// Helpers
// =============================================================
/** Get the chain ID of the wallet. */
async function getWalletChainId(wallet) {
    if (v.is(AbstractViemJsonRpcAccountSchema, wallet)) {
        try {
            const chainId = await wallet.getChainId();
            return `0x${chainId.toString(16)}`;
        }
        catch (error) {
            throw new AbstractWalletError("Failed to get chain ID from viem wallet", { cause: error });
        }
    }
    if (v.is(AbstractEthersV6SignerSchema, wallet)) {
        if ("provider" in wallet && wallet.provider) {
            try {
                const network = await wallet.provider.getNetwork();
                return `0x${network.chainId.toString(16)}`;
            }
            catch (error) {
                throw new AbstractWalletError("Failed to get chain ID from ethers v6 wallet", { cause: error });
            }
        }
    }
    if (v.is(AbstractEthersV5SignerSchema, wallet)) {
        if ("provider" in wallet && wallet.provider) {
            try {
                const network = await wallet.provider.getNetwork();
                return `0x${network.chainId.toString(16)}`;
            }
            catch (error) {
                throw new AbstractWalletError("Failed to get chain ID from ethers v5 wallet", { cause: error });
            }
        }
    }
    return "0x1";
}
/** Get the lowercase wallet address from various wallet types. */
async function getWalletAddress(wallet) {
    if (v.is(AbstractViemJsonRpcAccountSchema, wallet)) {
        try {
            const addresses = await wallet.getAddresses();
            return addresses[0].toLowerCase();
        }
        catch (error) {
            throw new AbstractWalletError("Failed to get address from viem wallet", { cause: error });
        }
    }
    if (v.is(AbstractViemLocalAccountSchema, wallet)) {
        return wallet.address.toLowerCase();
    }
    if (v.is(AbstractEthersV6SignerSchema, wallet) || v.is(AbstractEthersV5SignerSchema, wallet)) {
        try {
            const address = await wallet.getAddress();
            return address.toLowerCase();
        }
        catch (error) {
            throw new AbstractWalletError("Failed to get address from ethers wallet", { cause: error });
        }
    }
    throw new AbstractWalletError("Failed to get wallet address: unknown wallet");
}
//# sourceMappingURL=_abstractWallet.js.map