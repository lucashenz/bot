"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateKeySigner = void 0;
const micro_eth_signer_1 = require("micro-eth-signer");
/**
 * Private key signer implementing the {@link AbstractViemLocalAccount} interface.
 *
 * @example
 * ```ts
 * import { PrivateKeySigner } from "@nktkas/hyperliquid/signing";
 * //       ^^^^^^^^^^^^^^^^
 * //       instead of importing viem / ethers
 *
 * const privateKey = "0xabc123..."; // your private key
 * const signer = new PrivateKeySigner(privateKey);
 * ```
 */
class PrivateKeySigner {
    #privateKey;
    address;
    constructor(privateKey) {
        this.#privateKey = privateKey;
        this.address = micro_eth_signer_1.addr.fromSecretKey(privateKey);
    }
    signTypedData(params) {
        const signature = (0, micro_eth_signer_1.signTyped)({
            domain: params.domain,
            // deno-lint-ignore no-explicit-any
            types: params.types, // function is too strict on types
            primaryType: params.primaryType,
            message: params.message,
        }, this.#privateKey, false);
        return Promise.resolve(signature);
    }
}
exports.PrivateKeySigner = PrivateKeySigner;
//# sourceMappingURL=_privateKeySigner.js.map