import * as v from "valibot";
/**
 * Deploying HIP-3 assets.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/hip-3-deployer-actions
 */
export declare const PerpDeployRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Action to perform. */
    readonly action: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for registering a new perpetual asset (v2). */
        readonly registerAsset2: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Max gas in native token wei. If not provided, then uses current deploy auction price.">]>;
            /** Contains new asset listing parameters. */
            readonly assetRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Coin symbol for the new asset. */
                readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the new asset.">]>;
                /** Number of decimal places for size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimal places for size.">]>;
                /** Initial oracle price for the asset. */
                readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Initial oracle price for the asset.">]>;
                /** Margin table identifier for risk management. */
                readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin table identifier for risk management.">]>;
                /** 'strictIsolated' does not allow withdrawing of isolated margin from open position. */
                readonly marginMode: v.SchemaWithPipe<readonly [v.PicklistSchema<["strictIsolated", "noCross"], undefined>, v.DescriptionAction<"strictIsolated" | "noCross", "'strictIsolated' does not allow withdrawing of isolated margin from open position.">]>;
            }, undefined>, v.DescriptionAction<{
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                marginMode: "strictIsolated" | "noCross";
            }, "Contains new asset listing parameters.">]>;
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** Contains new dex parameters. */
            readonly schema: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                /** Full name of the dex. */
                readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Full name of the dex.">]>;
                /** Collateral token index. */
                readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
                /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "User to update oracles. If not provided, then deployer is assumed to be oracle updater.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null, "Contains new dex parameters.">]>;
        }, undefined>, v.DescriptionAction<{
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                marginMode: "strictIsolated" | "noCross";
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        }, "Parameters for registering a new perpetual asset (v2).">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for registering a new perpetual asset. */
        readonly registerAsset: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Max gas in native token wei. If not provided, then uses current deploy auction price.">]>;
            /** Contains new asset listing parameters. */
            readonly assetRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Coin symbol for the new asset. */
                readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the new asset.">]>;
                /** Number of decimal places for size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimal places for size.">]>;
                /** Initial oracle price for the asset. */
                readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Initial oracle price for the asset.">]>;
                /** Margin table identifier for risk management. */
                readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin table identifier for risk management.">]>;
                /** Whether the asset can only be traded with isolated margin. */
                readonly onlyIsolated: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the asset can only be traded with isolated margin.">]>;
            }, undefined>, v.DescriptionAction<{
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            }, "Contains new asset listing parameters.">]>;
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** Contains new dex parameters. */
            readonly schema: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                /** Full name of the dex. */
                readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Full name of the dex.">]>;
                /** Collateral token index. */
                readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
                /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "User to update oracles. If not provided, then deployer is assumed to be oracle updater.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null, "Contains new dex parameters.">]>;
        }, undefined>, v.DescriptionAction<{
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        }, "Parameters for registering a new perpetual asset.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for setting oracle and mark prices for assets. */
        readonly setOracle: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** A list (sorted by key) of asset and oracle prices. */
            readonly oraclePxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and oracle prices.">]>;
            /** An outer list of inner lists (inner list sorted by key) of asset and mark prices. */
            readonly markPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, undefined>, v.DescriptionAction<[string, string][][], "An outer list of inner lists (inner list sorted by key) of asset and mark prices.">]>;
            /** A list (sorted by key) of asset and external prices which prevent sudden mark price deviations. */
            readonly externalPerpPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and external prices which prevent sudden mark price deviations.">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        }, "Parameters for setting oracle and mark prices for assets.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and funding multiplier. */
        readonly setFundingMultipliers: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and funding multiplier.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for halting or resuming trading for an asset. */
        readonly haltTrading: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Coin symbol for the asset to halt or resume. */
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the asset to halt or resume.">]>;
            /** Whether trading should be halted (true) or resumed (false). */
            readonly isHalted: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether trading should be halted (true) or resumed (false).">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            isHalted: boolean;
        }, "Parameters for halting or resuming trading for an asset.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and margin table ids. */
        readonly setMarginTableIds: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, number][], "A list (sorted by key) of asset and margin table ids.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for setting the fee recipient. */
        readonly setFeeRecipient: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the DEX. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the DEX.">]>;
            /** Address of the fee recipient. */
            readonly feeRecipient: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the fee recipient.">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            feeRecipient: `0x${string}`;
        }, "Parameters for setting the fee recipient.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and open interest cap notionals. */
        readonly setOpenInterestCaps: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, number][], "A list (sorted by key) of asset and open interest cap notionals.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A modification to sub-deployer permissions. */
        readonly setSubDeployers: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the DEX. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the DEX.">]>;
            /** A modification to sub-deployer permissions. */
            readonly subDeployers: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                /** Corresponds to a variant of PerpDeployAction. */
                readonly variant: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Corresponds to a variant of PerpDeployAction.">]>;
                /** Sub-deployer address. */
                readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-deployer address.">]>;
                /** Add or remove the subDeployer from the authorized set for the action variant. */
                readonly allowed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Add or remove the subDeployer from the authorized set for the action variant.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                variant: string;
                user: `0x${string}`;
                allowed: boolean;
            }[], "A modification to sub-deployer permissions.">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            subDeployers: {
                variant: string;
                user: `0x${string}`;
                allowed: boolean;
            }[];
        }, "A modification to sub-deployer permissions.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and margin modes. */
        readonly setMarginModes: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.PicklistSchema<["strictIsolated", "noCross"], undefined>], undefined>, undefined>, v.DescriptionAction<[string, "strictIsolated" | "noCross"][], "A list (sorted by key) of asset and margin modes.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Set fee scale. */
        readonly setFeeScale: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** Fee scale (between 0.0 and 3.0). */
            readonly scale: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee scale (between 0.0 and 3.0).">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            scale: string;
        }, "Set fee scale.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and growth modes. */
        readonly setGrowthModes: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.BooleanSchema<undefined>], undefined>, undefined>, v.DescriptionAction<[string, boolean][], "A list (sorted by key) of asset and growth modes.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "perpDeploy";
        registerAsset2: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                marginMode: "strictIsolated" | "noCross";
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    } | {
        type: "perpDeploy";
        registerAsset: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    } | {
        type: "perpDeploy";
        setOracle: {
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        };
    } | {
        type: "perpDeploy";
        setFundingMultipliers: [string, string][];
    } | {
        type: "perpDeploy";
        haltTrading: {
            coin: string;
            isHalted: boolean;
        };
    } | {
        type: "perpDeploy";
        setMarginTableIds: [string, number][];
    } | {
        type: "perpDeploy";
        setFeeRecipient: {
            dex: string;
            feeRecipient: `0x${string}`;
        };
    } | {
        type: "perpDeploy";
        setOpenInterestCaps: [string, number][];
    } | {
        type: "perpDeploy";
        setSubDeployers: {
            dex: string;
            subDeployers: {
                variant: string;
                user: `0x${string}`;
                allowed: boolean;
            }[];
        };
    } | {
        type: "perpDeploy";
        setMarginModes: [string, "strictIsolated" | "noCross"][];
    } | {
        type: "perpDeploy";
        setFeeScale: {
            dex: string;
            scale: string;
        };
    } | {
        type: "perpDeploy";
        setGrowthModes: [string, boolean][];
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
        type: "perpDeploy";
        registerAsset2: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                marginMode: "strictIsolated" | "noCross";
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    } | {
        type: "perpDeploy";
        registerAsset: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    } | {
        type: "perpDeploy";
        setOracle: {
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        };
    } | {
        type: "perpDeploy";
        setFundingMultipliers: [string, string][];
    } | {
        type: "perpDeploy";
        haltTrading: {
            coin: string;
            isHalted: boolean;
        };
    } | {
        type: "perpDeploy";
        setMarginTableIds: [string, number][];
    } | {
        type: "perpDeploy";
        setFeeRecipient: {
            dex: string;
            feeRecipient: `0x${string}`;
        };
    } | {
        type: "perpDeploy";
        setOpenInterestCaps: [string, number][];
    } | {
        type: "perpDeploy";
        setSubDeployers: {
            dex: string;
            subDeployers: {
                variant: string;
                user: `0x${string}`;
                allowed: boolean;
            }[];
        };
    } | {
        type: "perpDeploy";
        setMarginModes: [string, "strictIsolated" | "noCross"][];
    } | {
        type: "perpDeploy";
        setFeeScale: {
            dex: string;
            scale: string;
        };
    } | {
        type: "perpDeploy";
        setGrowthModes: [string, boolean][];
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Deploying HIP-3 assets.">]>;
export type PerpDeployRequest = v.InferOutput<typeof PerpDeployRequest>;
/**
 * Successful response without specific data or error response.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/hip-3-deployer-actions
 */
export declare const PerpDeployResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
export type PerpDeployResponse = v.InferOutput<typeof PerpDeployResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const PerpDeployParameters: v.UnionSchema<((Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** Parameters for registering a new perpetual asset (v2). */
    readonly registerAsset2: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
        readonly maxGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Max gas in native token wei. If not provided, then uses current deploy auction price.">]>;
        /** Contains new asset listing parameters. */
        readonly assetRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Coin symbol for the new asset. */
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the new asset.">]>;
            /** Number of decimal places for size. */
            readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimal places for size.">]>;
            /** Initial oracle price for the asset. */
            readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Initial oracle price for the asset.">]>;
            /** Margin table identifier for risk management. */
            readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin table identifier for risk management.">]>;
            /** 'strictIsolated' does not allow withdrawing of isolated margin from open position. */
            readonly marginMode: v.SchemaWithPipe<readonly [v.PicklistSchema<["strictIsolated", "noCross"], undefined>, v.DescriptionAction<"strictIsolated" | "noCross", "'strictIsolated' does not allow withdrawing of isolated margin from open position.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            szDecimals: number;
            oraclePx: string;
            marginTableId: number;
            marginMode: "strictIsolated" | "noCross";
        }, "Contains new asset listing parameters.">]>;
        /** Name of the dex. */
        readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
        /** Contains new dex parameters. */
        readonly schema: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** Full name of the dex. */
            readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Full name of the dex.">]>;
            /** Collateral token index. */
            readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
            /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
            readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "User to update oracles. If not provided, then deployer is assumed to be oracle updater.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            fullName: string;
            collateralToken: number;
            oracleUpdater: `0x${string}` | null;
        } | null, "Contains new dex parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        maxGas: number | null;
        assetRequest: {
            coin: string;
            szDecimals: number;
            oraclePx: string;
            marginTableId: number;
            marginMode: "strictIsolated" | "noCross";
        };
        dex: string;
        schema: {
            fullName: string;
            collateralToken: number;
            oracleUpdater: `0x${string}` | null;
        } | null;
    }, "Parameters for registering a new perpetual asset (v2).">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for registering a new perpetual asset (v2). */
        readonly registerAsset2: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Max gas in native token wei. If not provided, then uses current deploy auction price.">]>;
            /** Contains new asset listing parameters. */
            readonly assetRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Coin symbol for the new asset. */
                readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the new asset.">]>;
                /** Number of decimal places for size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimal places for size.">]>;
                /** Initial oracle price for the asset. */
                readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Initial oracle price for the asset.">]>;
                /** Margin table identifier for risk management. */
                readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin table identifier for risk management.">]>;
                /** 'strictIsolated' does not allow withdrawing of isolated margin from open position. */
                readonly marginMode: v.SchemaWithPipe<readonly [v.PicklistSchema<["strictIsolated", "noCross"], undefined>, v.DescriptionAction<"strictIsolated" | "noCross", "'strictIsolated' does not allow withdrawing of isolated margin from open position.">]>;
            }, undefined>, v.DescriptionAction<{
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                marginMode: "strictIsolated" | "noCross";
            }, "Contains new asset listing parameters.">]>;
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** Contains new dex parameters. */
            readonly schema: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                /** Full name of the dex. */
                readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Full name of the dex.">]>;
                /** Collateral token index. */
                readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
                /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "User to update oracles. If not provided, then deployer is assumed to be oracle updater.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null, "Contains new dex parameters.">]>;
        }, undefined>, v.DescriptionAction<{
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                marginMode: "strictIsolated" | "noCross";
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        }, "Parameters for registering a new perpetual asset (v2).">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        registerAsset2: {
            maxGas: string | number | null;
            assetRequest: {
                coin: string;
                szDecimals: string | number;
                oraclePx: string | number;
                marginTableId: string | number;
                marginMode: "strictIsolated" | "noCross";
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: string | number;
                oracleUpdater: string | null;
            } | null;
        };
    }, {
        registerAsset2: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                marginMode: "strictIsolated" | "noCross";
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        registerAsset2: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                marginMode: "strictIsolated" | "noCross";
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.PicklistIssue>;
    readonly "~types"?: {
        readonly input: {
            registerAsset2: {
                maxGas: string | number | null;
                assetRequest: {
                    coin: string;
                    szDecimals: string | number;
                    oraclePx: string | number;
                    marginTableId: string | number;
                    marginMode: "strictIsolated" | "noCross";
                };
                dex: string;
                schema: {
                    fullName: string;
                    collateralToken: string | number;
                    oracleUpdater: string | null;
                } | null;
            };
        };
        readonly output: {
            registerAsset2: {
                maxGas: number | null;
                assetRequest: {
                    coin: string;
                    szDecimals: number;
                    oraclePx: string;
                    marginTableId: number;
                    marginMode: "strictIsolated" | "noCross";
                };
                dex: string;
                schema: {
                    fullName: string;
                    collateralToken: number;
                    oracleUpdater: `0x${string}` | null;
                } | null;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.PicklistIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** Parameters for registering a new perpetual asset. */
    readonly registerAsset: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
        readonly maxGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Max gas in native token wei. If not provided, then uses current deploy auction price.">]>;
        /** Contains new asset listing parameters. */
        readonly assetRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Coin symbol for the new asset. */
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the new asset.">]>;
            /** Number of decimal places for size. */
            readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimal places for size.">]>;
            /** Initial oracle price for the asset. */
            readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Initial oracle price for the asset.">]>;
            /** Margin table identifier for risk management. */
            readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin table identifier for risk management.">]>;
            /** Whether the asset can only be traded with isolated margin. */
            readonly onlyIsolated: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the asset can only be traded with isolated margin.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            szDecimals: number;
            oraclePx: string;
            marginTableId: number;
            onlyIsolated: boolean;
        }, "Contains new asset listing parameters.">]>;
        /** Name of the dex. */
        readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
        /** Contains new dex parameters. */
        readonly schema: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** Full name of the dex. */
            readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Full name of the dex.">]>;
            /** Collateral token index. */
            readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
            /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
            readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "User to update oracles. If not provided, then deployer is assumed to be oracle updater.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            fullName: string;
            collateralToken: number;
            oracleUpdater: `0x${string}` | null;
        } | null, "Contains new dex parameters.">]>;
    }, undefined>, v.DescriptionAction<{
        maxGas: number | null;
        assetRequest: {
            coin: string;
            szDecimals: number;
            oraclePx: string;
            marginTableId: number;
            onlyIsolated: boolean;
        };
        dex: string;
        schema: {
            fullName: string;
            collateralToken: number;
            oracleUpdater: `0x${string}` | null;
        } | null;
    }, "Parameters for registering a new perpetual asset.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for registering a new perpetual asset. */
        readonly registerAsset: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Max gas in native token wei. If not provided, then uses current deploy auction price. */
            readonly maxGas: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Max gas in native token wei. If not provided, then uses current deploy auction price.">]>;
            /** Contains new asset listing parameters. */
            readonly assetRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Coin symbol for the new asset. */
                readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the new asset.">]>;
                /** Number of decimal places for size. */
                readonly szDecimals: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Number of decimal places for size.">]>;
                /** Initial oracle price for the asset. */
                readonly oraclePx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Initial oracle price for the asset.">]>;
                /** Margin table identifier for risk management. */
                readonly marginTableId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Margin table identifier for risk management.">]>;
                /** Whether the asset can only be traded with isolated margin. */
                readonly onlyIsolated: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the asset can only be traded with isolated margin.">]>;
            }, undefined>, v.DescriptionAction<{
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            }, "Contains new asset listing parameters.">]>;
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** Contains new dex parameters. */
            readonly schema: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                /** Full name of the dex. */
                readonly fullName: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Full name of the dex.">]>;
                /** Collateral token index. */
                readonly collateralToken: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Collateral token index.">]>;
                /** User to update oracles. If not provided, then deployer is assumed to be oracle updater. */
                readonly oracleUpdater: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "User to update oracles. If not provided, then deployer is assumed to be oracle updater.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null, "Contains new dex parameters.">]>;
        }, undefined>, v.DescriptionAction<{
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        }, "Parameters for registering a new perpetual asset.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        registerAsset: {
            maxGas: string | number | null;
            assetRequest: {
                coin: string;
                szDecimals: string | number;
                oraclePx: string | number;
                marginTableId: string | number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: string | number;
                oracleUpdater: string | null;
            } | null;
        };
    }, {
        registerAsset: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        registerAsset: {
            maxGas: number | null;
            assetRequest: {
                coin: string;
                szDecimals: number;
                oraclePx: string;
                marginTableId: number;
                onlyIsolated: boolean;
            };
            dex: string;
            schema: {
                fullName: string;
                collateralToken: number;
                oracleUpdater: `0x${string}` | null;
            } | null;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue>;
    readonly "~types"?: {
        readonly input: {
            registerAsset: {
                maxGas: string | number | null;
                assetRequest: {
                    coin: string;
                    szDecimals: string | number;
                    oraclePx: string | number;
                    marginTableId: string | number;
                    onlyIsolated: boolean;
                };
                dex: string;
                schema: {
                    fullName: string;
                    collateralToken: string | number;
                    oracleUpdater: string | null;
                } | null;
            };
        };
        readonly output: {
            registerAsset: {
                maxGas: number | null;
                assetRequest: {
                    coin: string;
                    szDecimals: number;
                    oraclePx: string;
                    marginTableId: number;
                    onlyIsolated: boolean;
                };
                dex: string;
                schema: {
                    fullName: string;
                    collateralToken: number;
                    oracleUpdater: `0x${string}` | null;
                } | null;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** Parameters for setting oracle and mark prices for assets. */
    readonly setOracle: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Name of the dex. */
        readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
        /** A list (sorted by key) of asset and oracle prices. */
        readonly oraclePxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and oracle prices.">]>;
        /** An outer list of inner lists (inner list sorted by key) of asset and mark prices. */
        readonly markPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, undefined>, v.DescriptionAction<[string, string][][], "An outer list of inner lists (inner list sorted by key) of asset and mark prices.">]>;
        /** A list (sorted by key) of asset and external prices which prevent sudden mark price deviations. */
        readonly externalPerpPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and external prices which prevent sudden mark price deviations.">]>;
    }, undefined>, v.DescriptionAction<{
        dex: string;
        oraclePxs: [string, string][];
        markPxs: [string, string][][];
        externalPerpPxs: [string, string][];
    }, "Parameters for setting oracle and mark prices for assets.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for setting oracle and mark prices for assets. */
        readonly setOracle: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** A list (sorted by key) of asset and oracle prices. */
            readonly oraclePxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and oracle prices.">]>;
            /** An outer list of inner lists (inner list sorted by key) of asset and mark prices. */
            readonly markPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, undefined>, v.DescriptionAction<[string, string][][], "An outer list of inner lists (inner list sorted by key) of asset and mark prices.">]>;
            /** A list (sorted by key) of asset and external prices which prevent sudden mark price deviations. */
            readonly externalPerpPxs: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and external prices which prevent sudden mark price deviations.">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        }, "Parameters for setting oracle and mark prices for assets.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setOracle: {
            dex: string;
            oraclePxs: [string, string | number][];
            markPxs: [string, string | number][][];
            externalPerpPxs: [string, string | number][];
        };
    }, {
        setOracle: {
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setOracle: {
            dex: string;
            oraclePxs: [string, string][];
            markPxs: [string, string][][];
            externalPerpPxs: [string, string][];
        };
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.TupleIssue>;
    readonly "~types"?: {
        readonly input: {
            setOracle: {
                dex: string;
                oraclePxs: [string, string | number][];
                markPxs: [string, string | number][][];
                externalPerpPxs: [string, string | number][];
            };
        };
        readonly output: {
            setOracle: {
                dex: string;
                oraclePxs: [string, string][];
                markPxs: [string, string][][];
                externalPerpPxs: [string, string][];
            };
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.TupleIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** A list (sorted by key) of asset and funding multiplier. */
    readonly setFundingMultipliers: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and funding multiplier.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and funding multiplier. */
        readonly setFundingMultipliers: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, string][], "A list (sorted by key) of asset and funding multiplier.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setFundingMultipliers: [string, string | number][];
    }, {
        setFundingMultipliers: [string, string][];
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setFundingMultipliers: [string, string][];
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.TupleIssue>;
    readonly "~types"?: {
        readonly input: {
            setFundingMultipliers: [string, string | number][];
        };
        readonly output: {
            setFundingMultipliers: [string, string][];
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string> | v.TupleIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** Parameters for halting or resuming trading for an asset. */
    readonly haltTrading: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Coin symbol for the asset to halt or resume. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the asset to halt or resume.">]>;
        /** Whether trading should be halted (true) or resumed (false). */
        readonly isHalted: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether trading should be halted (true) or resumed (false).">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        isHalted: boolean;
    }, "Parameters for halting or resuming trading for an asset.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for halting or resuming trading for an asset. */
        readonly haltTrading: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Coin symbol for the asset to halt or resume. */
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Coin symbol for the asset to halt or resume.">]>;
            /** Whether trading should be halted (true) or resumed (false). */
            readonly isHalted: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether trading should be halted (true) or resumed (false).">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            isHalted: boolean;
        }, "Parameters for halting or resuming trading for an asset.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        haltTrading: {
            coin: string;
            isHalted: boolean;
        };
    }, {
        haltTrading: {
            coin: string;
            isHalted: boolean;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        haltTrading: {
            coin: string;
            isHalted: boolean;
        };
    }, v.StringIssue | v.ObjectIssue | v.BooleanIssue>;
    readonly "~types"?: {
        readonly input: {
            haltTrading: {
                coin: string;
                isHalted: boolean;
            };
        };
        readonly output: {
            haltTrading: {
                coin: string;
                isHalted: boolean;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.BooleanIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** A list (sorted by key) of asset and margin table ids. */
    readonly setMarginTableIds: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, number][], "A list (sorted by key) of asset and margin table ids.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and margin table ids. */
        readonly setMarginTableIds: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, number][], "A list (sorted by key) of asset and margin table ids.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setMarginTableIds: [string, string | number][];
    }, {
        setMarginTableIds: [string, number][];
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setMarginTableIds: [string, number][];
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.TupleIssue>;
    readonly "~types"?: {
        readonly input: {
            setMarginTableIds: [string, string | number][];
        };
        readonly output: {
            setMarginTableIds: [string, number][];
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.TupleIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** Parameters for setting the fee recipient. */
    readonly setFeeRecipient: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Name of the DEX. */
        readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the DEX.">]>;
        /** Address of the fee recipient. */
        readonly feeRecipient: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the fee recipient.">]>;
    }, undefined>, v.DescriptionAction<{
        dex: string;
        feeRecipient: `0x${string}`;
    }, "Parameters for setting the fee recipient.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Parameters for setting the fee recipient. */
        readonly setFeeRecipient: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the DEX. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the DEX.">]>;
            /** Address of the fee recipient. */
            readonly feeRecipient: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the fee recipient.">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            feeRecipient: `0x${string}`;
        }, "Parameters for setting the fee recipient.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setFeeRecipient: {
            dex: string;
            feeRecipient: string;
        };
    }, {
        setFeeRecipient: {
            dex: string;
            feeRecipient: `0x${string}`;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setFeeRecipient: {
            dex: string;
            feeRecipient: `0x${string}`;
        };
    }, v.StringIssue | v.ObjectIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42>>;
    readonly "~types"?: {
        readonly input: {
            setFeeRecipient: {
                dex: string;
                feeRecipient: string;
            };
        };
        readonly output: {
            setFeeRecipient: {
                dex: string;
                feeRecipient: `0x${string}`;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** A list (sorted by key) of asset and open interest cap notionals. */
    readonly setOpenInterestCaps: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, number][], "A list (sorted by key) of asset and open interest cap notionals.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and open interest cap notionals. */
        readonly setOpenInterestCaps: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>], undefined>, undefined>, v.DescriptionAction<[string, number][], "A list (sorted by key) of asset and open interest cap notionals.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setOpenInterestCaps: [string, string | number][];
    }, {
        setOpenInterestCaps: [string, number][];
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setOpenInterestCaps: [string, number][];
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.TupleIssue>;
    readonly "~types"?: {
        readonly input: {
            setOpenInterestCaps: [string, string | number][];
        };
        readonly output: {
            setOpenInterestCaps: [string, number][];
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.TupleIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** A modification to sub-deployer permissions. */
    readonly setSubDeployers: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Name of the DEX. */
        readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the DEX.">]>;
        /** A modification to sub-deployer permissions. */
        readonly subDeployers: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            /** Corresponds to a variant of PerpDeployAction. */
            readonly variant: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Corresponds to a variant of PerpDeployAction.">]>;
            /** Sub-deployer address. */
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-deployer address.">]>;
            /** Add or remove the subDeployer from the authorized set for the action variant. */
            readonly allowed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Add or remove the subDeployer from the authorized set for the action variant.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            variant: string;
            user: `0x${string}`;
            allowed: boolean;
        }[], "A modification to sub-deployer permissions.">]>;
    }, undefined>, v.DescriptionAction<{
        dex: string;
        subDeployers: {
            variant: string;
            user: `0x${string}`;
            allowed: boolean;
        }[];
    }, "A modification to sub-deployer permissions.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A modification to sub-deployer permissions. */
        readonly setSubDeployers: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the DEX. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the DEX.">]>;
            /** A modification to sub-deployer permissions. */
            readonly subDeployers: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                /** Corresponds to a variant of PerpDeployAction. */
                readonly variant: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Corresponds to a variant of PerpDeployAction.">]>;
                /** Sub-deployer address. */
                readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Sub-deployer address.">]>;
                /** Add or remove the subDeployer from the authorized set for the action variant. */
                readonly allowed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Add or remove the subDeployer from the authorized set for the action variant.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                variant: string;
                user: `0x${string}`;
                allowed: boolean;
            }[], "A modification to sub-deployer permissions.">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            subDeployers: {
                variant: string;
                user: `0x${string}`;
                allowed: boolean;
            }[];
        }, "A modification to sub-deployer permissions.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setSubDeployers: {
            dex: string;
            subDeployers: {
                variant: string;
                user: string;
                allowed: boolean;
            }[];
        };
    }, {
        setSubDeployers: {
            dex: string;
            subDeployers: {
                variant: string;
                user: `0x${string}`;
                allowed: boolean;
            }[];
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setSubDeployers: {
            dex: string;
            subDeployers: {
                variant: string;
                user: `0x${string}`;
                allowed: boolean;
            }[];
        };
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue>;
    readonly "~types"?: {
        readonly input: {
            setSubDeployers: {
                dex: string;
                subDeployers: {
                    variant: string;
                    user: string;
                    allowed: boolean;
                }[];
            };
        };
        readonly output: {
            setSubDeployers: {
                dex: string;
                subDeployers: {
                    variant: string;
                    user: `0x${string}`;
                    allowed: boolean;
                }[];
            };
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.RegexIssue<string> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** A list (sorted by key) of asset and margin modes. */
    readonly setMarginModes: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.PicklistSchema<["strictIsolated", "noCross"], undefined>], undefined>, undefined>, v.DescriptionAction<[string, "strictIsolated" | "noCross"][], "A list (sorted by key) of asset and margin modes.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and margin modes. */
        readonly setMarginModes: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.PicklistSchema<["strictIsolated", "noCross"], undefined>], undefined>, undefined>, v.DescriptionAction<[string, "strictIsolated" | "noCross"][], "A list (sorted by key) of asset and margin modes.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setMarginModes: [string, "strictIsolated" | "noCross"][];
    }, {
        setMarginModes: [string, "strictIsolated" | "noCross"][];
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setMarginModes: [string, "strictIsolated" | "noCross"][];
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.PicklistIssue | v.TupleIssue>;
    readonly "~types"?: {
        readonly input: {
            setMarginModes: [string, "strictIsolated" | "noCross"][];
        };
        readonly output: {
            setMarginModes: [string, "strictIsolated" | "noCross"][];
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.PicklistIssue | v.TupleIssue;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** Set fee scale. */
    readonly setFeeScale: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Name of the dex. */
        readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
        /** Fee scale (between 0.0 and 3.0). */
        readonly scale: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee scale (between 0.0 and 3.0).">]>;
    }, undefined>, v.DescriptionAction<{
        dex: string;
        scale: string;
    }, "Set fee scale.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** Set fee scale. */
        readonly setFeeScale: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Name of the dex. */
            readonly dex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Name of the dex.">]>;
            /** Fee scale (between 0.0 and 3.0). */
            readonly scale: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee scale (between 0.0 and 3.0).">]>;
        }, undefined>, v.DescriptionAction<{
            dex: string;
            scale: string;
        }, "Set fee scale.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setFeeScale: {
            dex: string;
            scale: string | number;
        };
    }, {
        setFeeScale: {
            dex: string;
            scale: string;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setFeeScale: {
            dex: string;
            scale: string;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string>>;
    readonly "~types"?: {
        readonly input: {
            setFeeScale: {
                dex: string;
                scale: string | number;
            };
        };
        readonly output: {
            setFeeScale: {
                dex: string;
                scale: string;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.ToStringIssue<string | number> | v.RegexIssue<string>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
    /** A list (sorted by key) of asset and growth modes. */
    readonly setGrowthModes: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.BooleanSchema<undefined>], undefined>, undefined>, v.DescriptionAction<[string, boolean][], "A list (sorted by key) of asset and growth modes.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"perpDeploy", undefined>, v.DescriptionAction<"perpDeploy", "Type of action.">]>;
        /** A list (sorted by key) of asset and growth modes. */
        readonly setGrowthModes: v.SchemaWithPipe<readonly [v.ArraySchema<v.TupleSchema<[v.StringSchema<undefined>, v.BooleanSchema<undefined>], undefined>, undefined>, v.DescriptionAction<[string, boolean][], "A list (sorted by key) of asset and growth modes.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        setGrowthModes: [string, boolean][];
    }, {
        setGrowthModes: [string, boolean][];
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        setGrowthModes: [string, boolean][];
    }, v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.BooleanIssue | v.TupleIssue>;
    readonly "~types"?: {
        readonly input: {
            setGrowthModes: [string, boolean][];
        };
        readonly output: {
            setGrowthModes: [string, boolean][];
        };
        readonly issue: v.StringIssue | v.ArrayIssue | v.ObjectIssue | v.BooleanIssue | v.TupleIssue;
    } | undefined;
}))[], undefined>;
/** Action parameters for the {@linkcode perpDeploy} function. */
export type PerpDeployParameters = v.InferInput<typeof PerpDeployParameters>;
/** Request options for the {@linkcode perpDeploy} function. */
export type PerpDeployOptions = ExtractRequestOptions<v.InferInput<typeof PerpDeployRequest>>;
/** Successful variant of {@linkcode PerpDeployResponse} without errors. */
export type PerpDeploySuccessResponse = ExcludeErrorResponse<PerpDeployResponse>;
/**
 * Deploying HIP-3 assets.
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
 * import { perpDeploy } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await perpDeploy(
 *   { transport, wallet },
 *   {
 *     registerAsset: {
 *       maxGas: 1000000,
 *       assetRequest: {
 *         coin: "USDC",
 *         szDecimals: 8,
 *         oraclePx: "1",
 *         marginTableId: 1,
 *         onlyIsolated: false,
 *       },
 *       dex: "test",
 *       schema: null,
 *     },
 *   },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/hip-3-deployer-actions
 */
export declare function perpDeploy(config: ExchangeConfig, params: PerpDeployParameters, opts?: PerpDeployOptions): Promise<PerpDeploySuccessResponse>;
export {};
//# sourceMappingURL=perpDeploy.d.ts.map