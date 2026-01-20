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
exports.HyperliquidEventTarget = void 0;
const v = __importStar(require("valibot"));
const _polyfills_js_1 = require("../_polyfills.js");
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
class HyperliquidEventTarget extends EventTarget {
    constructor(socket) {
        super();
        socket.addEventListener("message", (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (v.is(HyperliquidEventSchema, msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_(msg.channel, { detail: msg.data }));
                }
                else if (v.is(PongEventSchema, msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_("pong", { detail: undefined }));
                }
                else if (v.is(ExplorerBlockEventSchema, msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_("_explorerBlock", { detail: msg }));
                }
                else if (v.is(ExplorerTxsEventSchema, msg)) {
                    this.dispatchEvent(new _polyfills_js_1.CustomEvent_("_explorerTxs", { detail: msg }));
                }
            }
            catch {
                // Ignore JSON parsing errors
            }
        });
    }
}
exports.HyperliquidEventTarget = HyperliquidEventTarget;
//# sourceMappingURL=_hyperliquidEventTarget.js.map