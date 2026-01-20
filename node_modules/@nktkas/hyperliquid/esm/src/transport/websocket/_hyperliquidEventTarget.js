import * as v from "valibot";
import { CustomEvent_ } from "../_polyfills.js";
const BlockDetailsSchema = /* @__PURE__ */ (() => {
    return v.looseObject({
        blockTime: v.unknown(),
        hash: v.unknown(),
        height: v.unknown(),
        numTxs: v.unknown(),
        proposer: v.unknown(),
    });
})();
const TxDetailsSchema = /* @__PURE__ */ (() => {
    return v.looseObject({
        action: v.unknown(),
        block: v.unknown(),
        error: v.unknown(),
        hash: v.unknown(),
        time: v.unknown(),
        user: v.unknown(),
    });
})();
const HyperliquidEventSchema = /* @__PURE__ */ (() => {
    return v.object({ channel: v.string(), data: v.unknown() });
})();
const PongEventSchema = /* @__PURE__ */ (() => {
    return v.object({ channel: v.literal("pong") });
})();
const ExplorerBlockEventSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.array(BlockDetailsSchema), v.nonEmpty());
})();
const ExplorerTxsEventSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.array(TxDetailsSchema), v.nonEmpty());
})();
export class HyperliquidEventTarget extends EventTarget {
    constructor(socket) {
        super();
        socket.addEventListener("message", (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (v.is(HyperliquidEventSchema, msg)) {
                    this.dispatchEvent(new CustomEvent_(msg.channel, { detail: msg.data }));
                }
                else if (v.is(PongEventSchema, msg)) {
                    this.dispatchEvent(new CustomEvent_("pong", { detail: undefined }));
                }
                else if (v.is(ExplorerBlockEventSchema, msg)) {
                    this.dispatchEvent(new CustomEvent_("_explorerBlock", { detail: msg }));
                }
                else if (v.is(ExplorerTxsEventSchema, msg)) {
                    this.dispatchEvent(new CustomEvent_("_explorerTxs", { detail: msg }));
                }
            }
            catch {
                // Ignore JSON parsing errors
            }
        });
    }
}
//# sourceMappingURL=_hyperliquidEventTarget.js.map