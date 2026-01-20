/**
 * Nonce manager for generating unique nonces per wallet address and network.
 *
 * Uses lazy cleanup: removes entries when Date.now() > lastNonce.
 */
declare class NonceManager {
    #private;
    getNonce(key: string): number;
}
/** Global nonce manager instance. */
export declare const globalNonceManager: NonceManager;
export {};
//# sourceMappingURL=_nonce.d.ts.map