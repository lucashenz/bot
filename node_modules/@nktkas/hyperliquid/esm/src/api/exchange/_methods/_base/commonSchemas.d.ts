import * as v from "valibot";
/** Error response for failed operations. */
export declare const ErrorResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Error status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"err", undefined>, v.DescriptionAction<"err", "Error status.">]>;
    /** Error message. */
    readonly response: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
}, undefined>, v.DescriptionAction<{
    status: "err";
    response: string;
}, "Error response for failed operations.">]>;
export type ErrorResponse = v.InferOutput<typeof ErrorResponse>;
/** Successful response without specific data. */
export declare const SuccessResponse: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Successful status. */
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    /** Response details. */
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of response. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"default", undefined>, v.DescriptionAction<"default", "Type of response.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "default";
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "default";
    };
}, "Successful response without specific data.">]>;
export type SuccessResponse = v.InferOutput<typeof SuccessResponse>;
/** ECDSA signature components. */
export declare const SignatureSchema: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** First 32-byte component. */
    readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "First 32-byte component.">]>;
    /** Second 32-byte component. */
    readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Second 32-byte component.">]>;
    /** Recovery identifier. */
    readonly v: v.SchemaWithPipe<readonly [v.PicklistSchema<[27, 28], undefined>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
}, undefined>, v.DescriptionAction<{
    r: `0x${string}`;
    s: `0x${string}`;
    v: 27 | 28;
}, "ECDSA signature components.">]>;
export type SignatureSchema = v.InferOutput<typeof SignatureSchema>;
/** HyperLiquid network type. */
export declare const HyperliquidChainSchema: v.SchemaWithPipe<readonly [v.PicklistSchema<["Mainnet", "Testnet"], undefined>, v.DescriptionAction<"Testnet" | "Mainnet", "HyperLiquid network type.">]>;
export type HyperliquidChainSchema = v.InferOutput<typeof HyperliquidChainSchema>;
//# sourceMappingURL=commonSchemas.d.ts.map