"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalNonceManager = void 0;
/**
 * Nonce manager for generating unique nonces per wallet address and network.
 *
 * Uses lazy cleanup: removes entries when Date.now() > lastNonce.
 */
class NonceManager {
    #map = new Map();
    getNonce(key) {
        const now = Date.now();
        this.#cleanup(now);
        const lastNonce = this.#map.get(key) ?? 0;
        const nonce = now > lastNonce ? now : lastNonce + 1;
        this.#map.set(key, nonce);
        return nonce;
    }
    #cleanup(now) {
        for (const [key, lastNonce] of this.#map) {
            if (now > lastNonce) {
                this.#map.delete(key);
            }
        }
    }
}
/** Global nonce manager instance. */
exports.globalNonceManager = new NonceManager();
//# sourceMappingURL=_nonce.js.map