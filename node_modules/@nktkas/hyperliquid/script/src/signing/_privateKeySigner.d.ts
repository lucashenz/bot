import type { AbstractViemLocalAccount } from "./_abstractWallet.js";
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
export declare class PrivateKeySigner implements AbstractViemLocalAccount {
    #private;
    address: `0x${string}`;
    constructor(privateKey: string);
    signTypedData(params: {
        domain: {
            name?: string;
            version?: string;
            chainId?: number;
            verifyingContract?: `0x${string}`;
            salt?: `0x${string}`;
        };
        types: {
            [key: string]: {
                name: string;
                type: string;
            }[];
        };
        primaryType: string;
        message: Record<string, unknown>;
    }): Promise<`0x${string}`>;
}
//# sourceMappingURL=_privateKeySigner.d.ts.map