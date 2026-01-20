import * as v from "valibot";
/**
 * Modify an order.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
export declare const ModifyRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"modify", undefined>, v.DescriptionAction<"modify", "Type of action.">]>;
        /** Order ID or Client Order ID. */
        readonly oid: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>, v.DescriptionAction<number | `0x${string}`, "Order ID or Client Order ID.">]>;
        /** New order parameters. */
        readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Asset ID. */
            readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            /** Position side (`true` for long, `false` for short). */
            readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
            /** Price. */
            readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero.">, v.DescriptionAction<string, "Price.">]>;
            /** Size (in base currency units). */
            readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
            /** Is reduce-only? */
            readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
            /** Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders). */
            readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                /** Limit order parameters. */
                readonly limit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /**
                     * Time-in-force.
                     * - `"Gtc"`: Remains active until filled or canceled.
                     * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
                     * - `"Alo"`: Adds liquidity only.
                     * - `"FrontendMarket"`: Similar to Ioc, used in Hyperliquid UI.
                     * - `"LiquidationMarket"`: Similar to Ioc, used in Hyperliquid UI.
                     */
                    readonly tif: v.SchemaWithPipe<readonly [v.PicklistSchema<["Gtc", "Ioc", "Alo", "FrontendMarket", "LiquidationMarket"], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
                }, undefined>, v.DescriptionAction<{
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                }, "Limit order parameters.">]>;
            }, undefined>, v.ObjectSchema<{
                /** Trigger order parameters. */
                readonly trigger: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** Is market order? */
                    readonly isMarket: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is market order?">]>;
                    /** Trigger price. */
                    readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero.">, v.DescriptionAction<string, "Trigger price.">]>;
                    /** Indicates whether it is take profit or stop loss. */
                    readonly tpsl: v.SchemaWithPipe<readonly [v.PicklistSchema<["tp", "sl"], undefined>, v.DescriptionAction<"tp" | "sl", "Indicates whether it is take profit or stop loss.">]>;
                }, undefined>, v.DescriptionAction<{
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                }, "Trigger order parameters.">]>;
            }, undefined>], undefined>, v.DescriptionAction<{
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            }, "Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders).">]>;
            /** Client Order ID. */
            readonly c: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
        }, undefined>, v.DescriptionAction<{
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        }, "New order parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "modify";
        oid: number | `0x${string}`;
        order: {
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        };
    }, "Action to perform.">]>;
    /** Nonce (timestamp in ms) used to prevent replay attacks. */
    readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
    /** ECDSA signature components. */
    readonly signature: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly r: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "First 32-byte component.">]>;
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "Second 32-byte component.">]>;
        readonly v: v.SchemaWithPipe<readonly [v.PicklistSchema<[27, 28], undefined>, v.DescriptionAction<27 | 28, "Recovery identifier.">]>;
    }, undefined>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components.">]>, v.DescriptionAction<{
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    }, "ECDSA signature components.">]>;
    /** Vault address (for vault trading). */
    readonly vaultAddress: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Vault address (for vault trading).">]>;
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "modify";
        oid: number | `0x${string}`;
        order: {
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        };
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    vaultAddress?: `0x${string}` | undefined;
    expiresAfter?: number | undefined;
}, "Modify an order.">]>;
export type ModifyRequest = v.InferOutput<typeof ModifyRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
export declare const ModifyResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"ok", undefined>, v.DescriptionAction<"ok", "Successful status.">]>;
    readonly response: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"default", undefined>, v.DescriptionAction<"default", "Type of response.">]>;
    }, undefined>, v.DescriptionAction<{
        type: "default";
    }, "Response details.">]>;
}, undefined>, v.DescriptionAction<{
    status: "ok";
    response: {
        type: "default";
    };
}, "Successful response without specific data.">]>, v.SchemaWithPipe<readonly [v.ObjectSchema<{
    readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"err", undefined>, v.DescriptionAction<"err", "Error status.">]>;
    readonly response: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
}, undefined>, v.DescriptionAction<{
    status: "err";
    response: string;
}, "Error response for failed operations.">]>], undefined>, v.DescriptionAction<{
    status: "err";
    response: string;
} | {
    status: "ok";
    response: {
        type: "default";
    };
}, "Successful response without specific data or error response.">]>;
export type ModifyResponse = v.InferOutput<typeof ModifyResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const ModifyParameters: Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"modify", undefined>, v.DescriptionAction<"modify", "Type of action.">]>;
    /** Order ID or Client Order ID. */
    readonly oid: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>, v.DescriptionAction<number | `0x${string}`, "Order ID or Client Order ID.">]>;
    /** New order parameters. */
    readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset ID. */
        readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
        /** Position side (`true` for long, `false` for short). */
        readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
        /** Price. */
        readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero.">, v.DescriptionAction<string, "Price.">]>;
        /** Size (in base currency units). */
        readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
        /** Is reduce-only? */
        readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
        /** Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders). */
        readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
            /** Limit order parameters. */
            readonly limit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /**
                 * Time-in-force.
                 * - `"Gtc"`: Remains active until filled or canceled.
                 * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
                 * - `"Alo"`: Adds liquidity only.
                 * - `"FrontendMarket"`: Similar to Ioc, used in Hyperliquid UI.
                 * - `"LiquidationMarket"`: Similar to Ioc, used in Hyperliquid UI.
                 */
                readonly tif: v.SchemaWithPipe<readonly [v.PicklistSchema<["Gtc", "Ioc", "Alo", "FrontendMarket", "LiquidationMarket"], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
            }, undefined>, v.DescriptionAction<{
                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
            }, "Limit order parameters.">]>;
        }, undefined>, v.ObjectSchema<{
            /** Trigger order parameters. */
            readonly trigger: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Is market order? */
                readonly isMarket: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is market order?">]>;
                /** Trigger price. */
                readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero.">, v.DescriptionAction<string, "Trigger price.">]>;
                /** Indicates whether it is take profit or stop loss. */
                readonly tpsl: v.SchemaWithPipe<readonly [v.PicklistSchema<["tp", "sl"], undefined>, v.DescriptionAction<"tp" | "sl", "Indicates whether it is take profit or stop loss.">]>;
            }, undefined>, v.DescriptionAction<{
                isMarket: boolean;
                triggerPx: string;
                tpsl: "tp" | "sl";
            }, "Trigger order parameters.">]>;
        }, undefined>], undefined>, v.DescriptionAction<{
            limit: {
                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
            };
        } | {
            trigger: {
                isMarket: boolean;
                triggerPx: string;
                tpsl: "tp" | "sl";
            };
        }, "Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders).">]>;
        /** Client Order ID. */
        readonly c: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
    }, undefined>, v.DescriptionAction<{
        a: number;
        b: boolean;
        p: string;
        s: string;
        r: boolean;
        t: {
            limit: {
                tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
            };
        } | {
            trigger: {
                isMarket: boolean;
                triggerPx: string;
                tpsl: "tp" | "sl";
            };
        };
        c?: `0x${string}` | undefined;
    }, "New order parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"modify", undefined>, v.DescriptionAction<"modify", "Type of action.">]>;
        /** Order ID or Client Order ID. */
        readonly oid: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>], undefined>, v.DescriptionAction<number | `0x${string}`, "Order ID or Client Order ID.">]>;
        /** New order parameters. */
        readonly order: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Asset ID. */
            readonly a: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Asset ID.">]>;
            /** Position side (`true` for long, `false` for short). */
            readonly b: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Position side (`true` for long, `false` for short).">]>;
            /** Price. */
            readonly p: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero.">, v.DescriptionAction<string, "Price.">]>;
            /** Size (in base currency units). */
            readonly s: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Size (in base currency units).">]>;
            /** Is reduce-only? */
            readonly r: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is reduce-only?">]>;
            /** Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders). */
            readonly t: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
                /** Limit order parameters. */
                readonly limit: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /**
                     * Time-in-force.
                     * - `"Gtc"`: Remains active until filled or canceled.
                     * - `"Ioc"`: Fills immediately or cancels any unfilled portion.
                     * - `"Alo"`: Adds liquidity only.
                     * - `"FrontendMarket"`: Similar to Ioc, used in Hyperliquid UI.
                     * - `"LiquidationMarket"`: Similar to Ioc, used in Hyperliquid UI.
                     */
                    readonly tif: v.SchemaWithPipe<readonly [v.PicklistSchema<["Gtc", "Ioc", "Alo", "FrontendMarket", "LiquidationMarket"], undefined>, v.DescriptionAction<"Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket", string>]>;
                }, undefined>, v.DescriptionAction<{
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                }, "Limit order parameters.">]>;
            }, undefined>, v.ObjectSchema<{
                /** Trigger order parameters. */
                readonly trigger: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** Is market order? */
                    readonly isMarket: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Is market order?">]>;
                    /** Trigger price. */
                    readonly triggerPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.CheckAction<string, "Value must be greater than zero.">, v.DescriptionAction<string, "Trigger price.">]>;
                    /** Indicates whether it is take profit or stop loss. */
                    readonly tpsl: v.SchemaWithPipe<readonly [v.PicklistSchema<["tp", "sl"], undefined>, v.DescriptionAction<"tp" | "sl", "Indicates whether it is take profit or stop loss.">]>;
                }, undefined>, v.DescriptionAction<{
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                }, "Trigger order parameters.">]>;
            }, undefined>], undefined>, v.DescriptionAction<{
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            }, "Order type (`limit` for limit orders, `trigger` for stop-loss/take-profit orders).">]>;
            /** Client Order ID. */
            readonly c: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
        }, undefined>, v.DescriptionAction<{
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        }, "New order parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        order: {
            a: string | number;
            b: boolean;
            p: string | number;
            s: string | number;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string | number;
                    tpsl: "tp" | "sl";
                };
            };
            c?: string | undefined;
        };
        oid: string | number;
    }, {
        order: {
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        };
        oid: number | `0x${string}`;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        order: {
            a: number;
            b: boolean;
            p: string;
            s: string;
            r: boolean;
            t: {
                limit: {
                    tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                };
            } | {
                trigger: {
                    isMarket: boolean;
                    triggerPx: string;
                    tpsl: "tp" | "sl";
                };
            };
            c?: `0x${string}` | undefined;
        };
        oid: number | `0x${string}`;
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 34> | v.PicklistIssue | v.BooleanIssue | v.CheckIssue<string> | v.UnionIssue<v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.PicklistIssue | v.BooleanIssue | v.CheckIssue<string>> | v.UnionIssue<v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 34>>>;
    readonly "~types"?: {
        readonly input: {
            order: {
                a: string | number;
                b: boolean;
                p: string | number;
                s: string | number;
                r: boolean;
                t: {
                    limit: {
                        tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                    };
                } | {
                    trigger: {
                        isMarket: boolean;
                        triggerPx: string | number;
                        tpsl: "tp" | "sl";
                    };
                };
                c?: string | undefined;
            };
            oid: string | number;
        };
        readonly output: {
            order: {
                a: number;
                b: boolean;
                p: string;
                s: string;
                r: boolean;
                t: {
                    limit: {
                        tif: "Gtc" | "Ioc" | "Alo" | "FrontendMarket" | "LiquidationMarket";
                    };
                } | {
                    trigger: {
                        isMarket: boolean;
                        triggerPx: string;
                        tpsl: "tp" | "sl";
                    };
                };
                c?: `0x${string}` | undefined;
            };
            oid: number | `0x${string}`;
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 34> | v.PicklistIssue | v.BooleanIssue | v.CheckIssue<string> | v.UnionIssue<v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.PicklistIssue | v.BooleanIssue | v.CheckIssue<string>> | v.UnionIssue<v.StringIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 34>>;
    } | undefined;
};
/** Action parameters for the {@linkcode modify} function. */
export type ModifyParameters = v.InferInput<typeof ModifyParameters>;
/** Request options for the {@linkcode modify} function. */
export type ModifyOptions = ExtractRequestOptions<v.InferInput<typeof ModifyRequest>>;
/** Successful variant of {@linkcode ModifyResponse} without errors. */
export type ModifySuccessResponse = ExcludeErrorResponse<ModifyResponse>;
/**
 * Modify an order.
 *
 * @param config - General configuration for Exchange API requests.
 * @param params - Parameters specific to the API request.
 * @param opts - Request execution options.
 *
 * @returns Successful response without specific data.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 * @throws {ApiRequestError} When the API returns an unsuccessful response.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { modify } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await modify(
 *   { transport, wallet },
 *   {
 *     oid: 123,
 *     order: {
 *       a: 0,
 *       b: true,
 *       p: "31000",
 *       s: "0.2",
 *       r: false,
 *       t: { limit: { tif: "Gtc" } },
 *       c: "0x...",
 *     },
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/exchange-endpoint#modify-an-order
 */
export declare function modify(config: ExchangeConfig, params: ModifyParameters, opts?: ModifyOptions): Promise<ModifySuccessResponse>;
export {};
//# sourceMappingURL=modify.d.ts.map