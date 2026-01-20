import * as v from "valibot";
import { Hex } from "../../../_schemas.js";
/** Error response for failed operations. */
export const ErrorResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Error status. */
        status: v.pipe(v.literal("err"), v.description("Error status.")),
        /** Error message. */
        response: v.pipe(v.string(), v.description("Error message.")),
    }), v.description("Error response for failed operations."));
})();
/** Successful response without specific data. */
export const SuccessResponse = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** Successful status. */
        status: v.pipe(v.literal("ok"), v.description("Successful status.")),
        /** Response details. */
        response: v.pipe(v.object({
            /** Type of response. */
            type: v.pipe(v.literal("default"), v.description("Type of response.")),
        }), v.description("Response details.")),
    }), v.description("Successful response without specific data."));
})();
/** ECDSA signature components. */
export const SignatureSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.object({
        /** First 32-byte component. */
        r: v.pipe(Hex, v.length(66), v.description("First 32-byte component.")),
        /** Second 32-byte component. */
        s: v.pipe(Hex, v.length(66), v.description("Second 32-byte component.")),
        /** Recovery identifier. */
        v: v.pipe(v.picklist([27, 28]), v.description("Recovery identifier.")),
    }), v.description("ECDSA signature components."));
})();
/** HyperLiquid network type. */
export const HyperliquidChainSchema = /* @__PURE__ */ (() => {
    return v.pipe(v.picklist(["Mainnet", "Testnet"]), v.description("HyperLiquid network type."));
})();
//# sourceMappingURL=commonSchemas.js.map