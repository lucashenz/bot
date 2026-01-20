import { addr, signTyped } from "micro-eth-signer";
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
export class PrivateKeySigner {
    #privateKey;
    address;
    constructor(privateKey) {
        this.#privateKey = privateKey;
        this.address = addr.fromSecretKey(privateKey);
    }
    signTypedData(params) {
        const signature = signTyped({
            domain: params.domain,
            // deno-lint-ignore no-explicit-any
            types: params.types, // function is too strict on types
            primaryType: params.primaryType,
            message: params.message,
        }, this.#privateKey, false);
        return Promise.resolve(signature);
    }
}
//# sourceMappingURL=_privateKeySigner.js.map