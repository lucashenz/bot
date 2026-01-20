import * as v from "valibot";
/**
 * Deploying HIP-1 and HIP-2 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
export declare const SpotDeployRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register token parameters. */
        readonly registerToken2: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token specifications. */
            readonly spec: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Token name. */
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token name.">]>;
                /** Number of decimals for token size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token size.">]>;
                /** Number of decimals for token amounts in wei. */
                readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token amounts in wei.">]>;
            }, undefined>, v.DescriptionAction<{
                name: string;
                szDecimals: number;
                weiDecimals: number;
            }, "Token specifications.">]>;
            /** Maximum gas allowed for registration. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Maximum gas allowed for registration.">]>;
            /** Optional full token name. */
            readonly fullName: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "Optional full token name.">]>;
        }, undefined>, v.DescriptionAction<{
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        }, "Register token parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** User genesis parameters. */
        readonly userGenesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** Array of tuples: [user address, genesis amount in wei]. */
            readonly userAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[`0x${string}`, string][], "Array of tuples: [user address, genesis amount in wei].">]>;
            /** Array of tuples: [existing token identifier, genesis amount in wei]. */
            readonly existingTokenAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "Array of tuples: [existing token identifier, genesis amount in wei].">]>;
            /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
            readonly blacklistUsers: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.BooleanSchema<undefined>], undefined>, undefined>, undefined>, v.DescriptionAction<[`0x${string}`, boolean][] | undefined, "Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user).">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        }, "User genesis parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Genesis parameters. */
        readonly genesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** Maximum token supply. */
            readonly maxSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Maximum token supply.">]>;
            /** Set hyperliquidity balance to 0. */
            readonly noHyperliquidity: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Set hyperliquidity balance to 0.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        }, "Genesis parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register spot parameters. */
        readonly registerSpot: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Tuple containing base and quote token indices. */
            readonly tokens: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, v.DescriptionAction<[number, number], "Tuple containing base and quote token indices.">]>;
        }, undefined>, v.DescriptionAction<{
            tokens: [number, number];
        }, "Register spot parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register hyperliquidity parameters. */
        readonly registerHyperliquidity: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Spot index (distinct from base token index). */
            readonly spot: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Spot index (distinct from base token index).">]>;
            /** Starting price for liquidity seeding. */
            readonly startPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Starting price for liquidity seeding.">]>;
            /** Order size as a float (not in wei). */
            readonly orderSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Order size as a float (not in wei).">]>;
            /** Total number of orders to place. */
            readonly nOrders: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Total number of orders to place.">]>;
            /** Number of levels to seed with USDC. */
            readonly nSeededLevels: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Number of levels to seed with USDC.">]>;
        }, undefined>, v.DescriptionAction<{
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        }, "Register hyperliquidity parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Set deployer trading fee share parameters. */
        readonly setDeployerTradingFeeShare: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** The deployer trading fee share. Range is 0% to 100%. */
            readonly share: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "The deployer trading fee share. Range is 0% to 100%.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            share: `${string}%`;
        }, "Set deployer trading fee share parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Enable quote token parameters. */
        readonly enableQuoteToken: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** The token ID to convert to a quote token. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "The token ID to convert to a quote token.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
        }, "Enable quote token parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Enable aligned quote token parameters. */
        readonly enableAlignedQuoteToken: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier to enable as aligned quote token. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier to enable as aligned quote token.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
        }, "Enable aligned quote token parameters.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "spotDeploy";
        registerToken2: {
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        };
    } | {
        type: "spotDeploy";
        userGenesis: {
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        };
    } | {
        type: "spotDeploy";
        genesis: {
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        };
    } | {
        type: "spotDeploy";
        registerSpot: {
            tokens: [number, number];
        };
    } | {
        type: "spotDeploy";
        registerHyperliquidity: {
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        };
    } | {
        type: "spotDeploy";
        setDeployerTradingFeeShare: {
            token: number;
            share: `${string}%`;
        };
    } | {
        type: "spotDeploy";
        enableQuoteToken: {
            token: number;
        };
    } | {
        type: "spotDeploy";
        enableAlignedQuoteToken: {
            token: number;
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
    /** Expiration time of the action. */
    readonly expiresAfter: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Expiration time of the action.">]>;
}, undefined>, v.DescriptionAction<{
    action: {
        type: "spotDeploy";
        registerToken2: {
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        };
    } | {
        type: "spotDeploy";
        userGenesis: {
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        };
    } | {
        type: "spotDeploy";
        genesis: {
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        };
    } | {
        type: "spotDeploy";
        registerSpot: {
            tokens: [number, number];
        };
    } | {
        type: "spotDeploy";
        registerHyperliquidity: {
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        };
    } | {
        type: "spotDeploy";
        setDeployerTradingFeeShare: {
            token: number;
            share: `${string}%`;
        };
    } | {
        type: "spotDeploy";
        enableQuoteToken: {
            token: number;
        };
    } | {
        type: "spotDeploy";
        enableAlignedQuoteToken: {
            token: number;
        };
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Deploying HIP-1 and HIP-2 assets.">]>;
export type SpotDeployRequest = v.InferOutput<typeof SpotDeployRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
export declare const SpotDeployResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
export type SpotDeployResponse = v.InferOutput<typeof SpotDeployResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const SpotDeployParameters: v.UnionSchema<((Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
    /** Register token parameters. */
    readonly registerToken2: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Token specifications. */
        readonly spec: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token name. */
            readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token name.">]>;
            /** Number of decimals for token size. */
            readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token size.">]>;
            /** Number of decimals for token amounts in wei. */
            readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token amounts in wei.">]>;
        }, undefined>, v.DescriptionAction<{
            name: string;
            szDecimals: number;
            weiDecimals: number;
        }, "Token specifications.">]>;
        /** Maximum gas allowed for registration. */
        readonly maxGas: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Maximum gas allowed for registration.">]>;
        /** Optional full token name. */
        readonly fullName: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "Optional full token name.">]>;
    }, undefined>, v.DescriptionAction<{
        spec: {
            name: string;
            szDecimals: number;
            weiDecimals: number;
        };
        maxGas: number;
        fullName?: string | undefined;
    }, "Register token parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register token parameters. */
        readonly registerToken2: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token specifications. */
            readonly spec: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Token name. */
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token name.">]>;
                /** Number of decimals for token size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token size.">]>;
                /** Number of decimals for token amounts in wei. */
                readonly weiDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimals for token amounts in wei.">]>;
            }, undefined>, v.DescriptionAction<{
                name: string;
                szDecimals: number;
                weiDecimals: number;
            }, "Token specifications.">]>;
            /** Maximum gas allowed for registration. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Maximum gas allowed for registration.">]>;
            /** Optional full token name. */
            readonly fullName: v.SchemaWithPipe<readonly [v.OptionalSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | undefined, "Optional full token name.">]>;
        }, undefined>, v.DescriptionAction<{
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        }, "Register token parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        registerToken2: {
            spec: {
                name: string;
                szDecimals: string | number;
                weiDecimals: string | number;
            };
            maxGas: string | number;
            fullName?: string | undefined;
        };
    }, {
        registerToken2: {
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        registerToken2: {
            spec: {
                name: string;
                szDecimals: number;
                weiDecimals: number;
            };
            maxGas: number;
            fullName?: string | undefined;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>>;
    readonly "~types"?: {
        readonly input: {
            registerToken2: {
                spec: {
                    name: string;
                    szDecimals: string | number;
                    weiDecimals: string | number;
                };
                maxGas: string | number;
                fullName?: string | undefined;
            };
        };
        readonly output: {
            registerToken2: {
                spec: {
                    name: string;
                    szDecimals: number;
                    weiDecimals: number;
                };
                maxGas: number;
                fullName?: string | undefined;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
    /** User genesis parameters. */
    readonly userGenesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Token identifier. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
        /** Array of tuples: [user address, genesis amount in wei]. */
        readonly userAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[`0x${string}`, string][], "Array of tuples: [user address, genesis amount in wei].">]>;
        /** Array of tuples: [existing token identifier, genesis amount in wei]. */
        readonly existingTokenAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "Array of tuples: [existing token identifier, genesis amount in wei].">]>;
        /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
        readonly blacklistUsers: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.BooleanSchema<undefined>], undefined>, undefined>, undefined>, v.DescriptionAction<[`0x${string}`, boolean][] | undefined, "Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user).">]>;
    }, undefined>, v.DescriptionAction<{
        token: number;
        userAndWei: [`0x${string}`, string][];
        existingTokenAndWei: [number, string][];
        blacklistUsers?: [`0x${string}`, boolean][] | undefined;
    }, "User genesis parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** User genesis parameters. */
        readonly userGenesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** Array of tuples: [user address, genesis amount in wei]. */
            readonly userAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[`0x${string}`, string][], "Array of tuples: [user address, genesis amount in wei].">]>;
            /** Array of tuples: [existing token identifier, genesis amount in wei]. */
            readonly existingTokenAndWei: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[number, string][], "Array of tuples: [existing token identifier, genesis amount in wei].">]>;
            /** Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user). */
            readonly blacklistUsers: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ArraySchema<v.TupleSchema<[v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.BooleanSchema<undefined>], undefined>, undefined>, undefined>, v.DescriptionAction<[`0x${string}`, boolean][] | undefined, "Array of tuples: [user address, blacklist status] (`true` for blacklist, `false` to remove existing blacklisted user).">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        }, "User genesis parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        userGenesis: {
            token: string | number;
            userAndWei: [string, string | number][];
            existingTokenAndWei: [string | number, string | number][];
            blacklistUsers?: [string, boolean][] | undefined;
        };
    }, {
        userGenesis: {
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        userGenesis: {
            token: number;
            userAndWei: [`0x${string}`, string][];
            existingTokenAndWei: [number, string][];
            blacklistUsers?: [`0x${string}`, boolean][] | undefined;
        };
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue | v.TupleIssue>;
    readonly "~types"?: {
        readonly input: {
            userGenesis: {
                token: string | number;
                userAndWei: [string, string | number][];
                existingTokenAndWei: [string | number, string | number][];
                blacklistUsers?: [string, boolean][] | undefined;
            };
        };
        readonly output: {
            userGenesis: {
                token: number;
                userAndWei: [`0x${string}`, string][];
                existingTokenAndWei: [number, string][];
                blacklistUsers?: [`0x${string}`, boolean][] | undefined;
            };
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue | v.TupleIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
    /** Genesis parameters. */
    readonly genesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Token identifier. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
        /** Maximum token supply. */
        readonly maxSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Maximum token supply.">]>;
        /** Set hyperliquidity balance to 0. */
        readonly noHyperliquidity: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Set hyperliquidity balance to 0.">]>;
    }, undefined>, v.DescriptionAction<{
        token: number;
        maxSupply: string;
        noHyperliquidity?: true | undefined;
    }, "Genesis parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Genesis parameters. */
        readonly genesis: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** Maximum token supply. */
            readonly maxSupply: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Maximum token supply.">]>;
            /** Set hyperliquidity balance to 0. */
            readonly noHyperliquidity: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Set hyperliquidity balance to 0.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        }, "Genesis parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        genesis: {
            token: string | number;
            maxSupply: string | number;
            noHyperliquidity?: true | undefined;
        };
    }, {
        genesis: {
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        genesis: {
            token: number;
            maxSupply: string;
            noHyperliquidity?: true | undefined;
        };
    }, v.StringIssue | v.LiteralIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>>;
    readonly "~types"?: {
        readonly input: {
            genesis: {
                token: string | number;
                maxSupply: string | number;
                noHyperliquidity?: true | undefined;
            };
        };
        readonly output: {
            genesis: {
                token: number;
                maxSupply: string;
                noHyperliquidity?: true | undefined;
            };
        };
        readonly issue: v.StringIssue | v.LiteralIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
    /** Register spot parameters. */
    readonly registerSpot: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Tuple containing base and quote token indices. */
        readonly tokens: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, v.DescriptionAction<[number, number], "Tuple containing base and quote token indices.">]>;
    }, undefined>, v.DescriptionAction<{
        tokens: [number, number];
    }, "Register spot parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register spot parameters. */
        readonly registerSpot: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Tuple containing base and quote token indices. */
            readonly tokens: v.SchemaWithPipe<readonly [v.TupleSchema<[v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, v.DescriptionAction<[number, number], "Tuple containing base and quote token indices.">]>;
        }, undefined>, v.DescriptionAction<{
            tokens: [number, number];
        }, "Register spot parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        registerSpot: {
            tokens: [string | number, string | number];
        };
    }, {
        registerSpot: {
            tokens: [number, number];
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        registerSpot: {
            tokens: [number, number];
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.TupleIssue>;
    readonly "~types"?: {
        readonly input: {
            registerSpot: {
                tokens: [string | number, string | number];
            };
        };
        readonly output: {
            registerSpot: {
                tokens: [number, number];
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.TupleIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
    /** Register hyperliquidity parameters. */
    readonly registerHyperliquidity: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Spot index (distinct from base token index). */
        readonly spot: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Spot index (distinct from base token index).">]>;
        /** Starting price for liquidity seeding. */
        readonly startPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Starting price for liquidity seeding.">]>;
        /** Order size as a float (not in wei). */
        readonly orderSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Order size as a float (not in wei).">]>;
        /** Total number of orders to place. */
        readonly nOrders: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Total number of orders to place.">]>;
        /** Number of levels to seed with USDC. */
        readonly nSeededLevels: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Number of levels to seed with USDC.">]>;
    }, undefined>, v.DescriptionAction<{
        spot: number;
        startPx: string;
        orderSz: string;
        nOrders: number;
        nSeededLevels?: number | undefined;
    }, "Register hyperliquidity parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Register hyperliquidity parameters. */
        readonly registerHyperliquidity: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Spot index (distinct from base token index). */
            readonly spot: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Spot index (distinct from base token index).">]>;
            /** Starting price for liquidity seeding. */
            readonly startPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Starting price for liquidity seeding.">]>;
            /** Order size as a float (not in wei). */
            readonly orderSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Order size as a float (not in wei).">]>;
            /** Total number of orders to place. */
            readonly nOrders: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Total number of orders to place.">]>;
            /** Number of levels to seed with USDC. */
            readonly nSeededLevels: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Number of levels to seed with USDC.">]>;
        }, undefined>, v.DescriptionAction<{
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        }, "Register hyperliquidity parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        registerHyperliquidity: {
            spot: string | number;
            startPx: string | number;
            orderSz: string | number;
            nOrders: string | number;
            nSeededLevels?: string | number | undefined;
        };
    }, {
        registerHyperliquidity: {
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        registerHyperliquidity: {
            spot: number;
            startPx: string;
            orderSz: string;
            nOrders: number;
            nSeededLevels?: number | undefined;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>>;
    readonly "~types"?: {
        readonly input: {
            registerHyperliquidity: {
                spot: string | number;
                startPx: string | number;
                orderSz: string | number;
                nOrders: string | number;
                nSeededLevels?: string | number | undefined;
            };
        };
        readonly output: {
            registerHyperliquidity: {
                spot: number;
                startPx: string;
                orderSz: string;
                nOrders: number;
                nSeededLevels?: number | undefined;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
    /** Set deployer trading fee share parameters. */
    readonly setDeployerTradingFeeShare: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Token identifier. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
        /** The deployer trading fee share. Range is 0% to 100%. */
        readonly share: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "The deployer trading fee share. Range is 0% to 100%.">]>;
    }, undefined>, v.DescriptionAction<{
        token: number;
        share: `${string}%`;
    }, "Set deployer trading fee share parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Set deployer trading fee share parameters. */
        readonly setDeployerTradingFeeShare: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier.">]>;
            /** The deployer trading fee share. Range is 0% to 100%. */
            readonly share: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `${string}%`>]>, v.DescriptionAction<`${string}%`, "The deployer trading fee share. Range is 0% to 100%.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
            share: `${string}%`;
        }, "Set deployer trading fee share parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setDeployerTradingFeeShare: {
            token: string | number;
            share: string;
        };
    }, {
        setDeployerTradingFeeShare: {
            token: number;
            share: `${string}%`;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setDeployerTradingFeeShare: {
            token: number;
            share: `${string}%`;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>>;
    readonly "~types"?: {
        readonly input: {
            setDeployerTradingFeeShare: {
                token: string | number;
                share: string;
            };
        };
        readonly output: {
            setDeployerTradingFeeShare: {
                token: number;
                share: `${string}%`;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
    /** Enable quote token parameters. */
    readonly enableQuoteToken: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** The token ID to convert to a quote token. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "The token ID to convert to a quote token.">]>;
    }, undefined>, v.DescriptionAction<{
        token: number;
    }, "Enable quote token parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Enable quote token parameters. */
        readonly enableQuoteToken: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** The token ID to convert to a quote token. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "The token ID to convert to a quote token.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
        }, "Enable quote token parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        enableQuoteToken: {
            token: string | number;
        };
    }, {
        enableQuoteToken: {
            token: number;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        enableQuoteToken: {
            token: number;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>>;
    readonly "~types"?: {
        readonly input: {
            enableQuoteToken: {
                token: string | number;
            };
        };
        readonly output: {
            enableQuoteToken: {
                token: number;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
    /** Enable aligned quote token parameters. */
    readonly enableAlignedQuoteToken: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Token identifier to enable as aligned quote token. */
        readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier to enable as aligned quote token.">]>;
    }, undefined>, v.DescriptionAction<{
        token: number;
    }, "Enable aligned quote token parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotDeploy", undefined>, v.DescriptionAction<"spotDeploy", "Type of action.">]>;
        /** Enable aligned quote token parameters. */
        readonly enableAlignedQuoteToken: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Token identifier to enable as aligned quote token. */
            readonly token: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Token identifier to enable as aligned quote token.">]>;
        }, undefined>, v.DescriptionAction<{
            token: number;
        }, "Enable aligned quote token parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        enableAlignedQuoteToken: {
            token: string | number;
        };
    }, {
        enableAlignedQuoteToken: {
            token: number;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        enableAlignedQuoteToken: {
            token: number;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>>;
    readonly "~types"?: {
        readonly input: {
            enableAlignedQuoteToken: {
                token: string | number;
            };
        };
        readonly output: {
            enableAlignedQuoteToken: {
                token: number;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0>;
    } | undefined;
}))[], undefined>;
/** Action parameters for the {@linkcode spotDeploy} function. */
export type SpotDeployParameters = v.InferInput<typeof SpotDeployParameters>;
/** Request options for the {@linkcode spotDeploy} function. */
export type SpotDeployOptions = ExtractRequestOptions<v.InferInput<typeof SpotDeployRequest>>;
/** Successful variant of {@linkcode SpotDeployResponse} without errors. */
export type SpotDeploySuccessResponse = ExcludeErrorResponse<SpotDeployResponse>;
/**
 * Deploying HIP-1 and HIP-2 assets.
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
 * import { spotDeploy } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await spotDeploy(
 *   { transport, wallet },
 *   {
 *     registerToken2: {
 *       spec: {
 *         name: "USDC",
 *         szDecimals: 8,
 *         weiDecimals: 8,
 *       },
 *       maxGas: 1000000,
 *       fullName: "USD Coin",
 *     },
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/deploying-hip-1-and-hip-2-assets
 */
export declare function spotDeploy(config: ExchangeConfig, params: SpotDeployParameters, opts?: SpotDeployOptions): Promise<SpotDeploySuccessResponse>;
export {};
//# sourceMappingURL=spotDeploy.d.ts.map