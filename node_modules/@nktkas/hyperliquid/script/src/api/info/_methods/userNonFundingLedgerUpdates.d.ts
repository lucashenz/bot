import * as v from "valibot";
/**
 * Request user non-funding ledger updates.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare const UserNonFundingLedgerUpdatesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of request. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userNonFundingLedgerUpdates", undefined>, v.DescriptionAction<"userNonFundingLedgerUpdates", "Type of request.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Start time (in ms since epoch). */
    readonly startTime: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "Start time (in ms since epoch).">]>;
    /** End time (in ms since epoch). */
    readonly endTime: v.SchemaWithPipe<readonly [v.NullishSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null | undefined, "End time (in ms since epoch).">]>;
}, undefined>, v.DescriptionAction<{
    type: "userNonFundingLedgerUpdates";
    user: `0x${string}`;
    startTime?: number | undefined;
    endTime?: number | null | undefined;
}, "Request user non-funding ledger updates.">]>;
export type UserNonFundingLedgerUpdatesRequest = v.InferOutput<typeof UserNonFundingLedgerUpdatesRequest>;
/**
 * Array of user's non-funding ledger update.
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare const UserNonFundingLedgerUpdatesResponse: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
    /** Timestamp of the update (in ms since epoch). */
    readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp of the update (in ms since epoch).">]>;
    /** L1 transaction hash. */
    readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
    /** Update details. */
    readonly delta: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"accountClassTransfer", undefined>, v.DescriptionAction<"accountClassTransfer", "Update type.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Indicates if the transfer is to the perpetual account. */
        readonly toPerp: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the transfer is to the perpetual account.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"deposit", undefined>, v.DescriptionAction<"deposit", "Update type.">]>;
        /** Amount deposited in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount deposited in USDC.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"internalTransfer", undefined>, v.DescriptionAction<"internalTransfer", "Update type.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Initiator address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
        /** Transfer fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Transfer fee.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"liquidation", undefined>, v.DescriptionAction<"liquidation", "Update type.">]>;
        /** Total notional value of liquidated positions. */
        readonly liquidatedNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total notional value of liquidated positions.">]>;
        /** Account value at liquidation time. */
        readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Account value at liquidation time.">]>;
        /** Leverage type for liquidated positions. */
        readonly leverageType: v.SchemaWithPipe<readonly [v.PicklistSchema<["Cross", "Isolated"], undefined>, v.DescriptionAction<"Cross" | "Isolated", "Leverage type for liquidated positions.">]>;
        /** Details of each liquidated position. */
        readonly liquidatedPositions: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
            /** Asset symbol of the liquidated position. */
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol of the liquidated position.">]>;
            /** Signed position size liquidated. */
            readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Signed position size liquidated.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            coin: string;
            szi: string;
        }[], "Details of each liquidated position.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"rewardsClaim", undefined>, v.DescriptionAction<"rewardsClaim", "Update type.">]>;
        /** Amount of rewards claimed. */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount of rewards claimed.">]>;
        /** Token symbol. */
        readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotTransfer", undefined>, v.DescriptionAction<"spotTransfer", "Update type.">]>;
        /** Token symbol. */
        readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
        /** Amount transferred. */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred.">]>;
        /** Equivalent USDC value. */
        readonly usdcValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Equivalent USDC value.">]>;
        /** Initiator address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
        /** Transfer fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Transfer fee.">]>;
        /** Fee in native token. */
        readonly nativeTokenFee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee in native token.">]>;
        /** Nonce of the transfer. */
        readonly nonce: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Nonce of the transfer.">]>;
        /** Token in which the fee is denominated (e.g., "USDC"). */
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccountTransfer", undefined>, v.DescriptionAction<"subAccountTransfer", "Update type.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Initiator address. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultCreate", undefined>, v.DescriptionAction<"vaultCreate", "Update type.">]>;
        /** Address of the created vault. */
        readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the created vault.">]>;
        /** Initial allocated amount in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Initial allocated amount in USDC.">]>;
        /** Vault creation fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Vault creation fee.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDeposit", undefined>, v.DescriptionAction<"vaultDeposit", "Update type.">]>;
        /** Address of the target vault. */
        readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the target vault.">]>;
        /** Amount deposited in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount deposited in USDC.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDistribution", undefined>, v.DescriptionAction<"vaultDistribution", "Update type.">]>;
        /** Address of the vault distributing funds. */
        readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the vault distributing funds.">]>;
        /** Amount distributed in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount distributed in USDC.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultWithdraw", undefined>, v.DescriptionAction<"vaultWithdraw", "Update type.">]>;
        /** Vault address. */
        readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
        /** Address of the user withdrawing funds. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the user withdrawing funds.">]>;
        /** Withdrawal request amount in USD. */
        readonly requestedUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Withdrawal request amount in USD.">]>;
        /** Withdrawal commission fee. */
        readonly commission: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Withdrawal commission fee.">]>;
        /** Closing cost associated with positions. */
        readonly closingCost: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Closing cost associated with positions.">]>;
        /** Basis value for withdrawal calculation. */
        readonly basis: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Basis value for withdrawal calculation.">]>;
        /** Net withdrawn amount in USD after fees and costs. */
        readonly netWithdrawnUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Net withdrawn amount in USD after fees and costs.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"withdraw", undefined>, v.DescriptionAction<"withdraw", "Update type.">]>;
        /** Amount withdrawn in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount withdrawn in USDC.">]>;
        /** Nonce (timestamp in ms) used to prevent replay attacks. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
        /** Withdrawal fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Withdrawal fee.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"send", undefined>, v.DescriptionAction<"send", "Update type.">]>;
        /** Address of the sender. */
        readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the sender.">]>;
        /** Destination address. */
        readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
        /** Source DEX ("" for default USDC perp DEX, "spot" for spot). */
        readonly sourceDex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Source DEX (\"\" for default USDC perp DEX, \"spot\" for spot).">]>;
        /** Destination DEX ("" for default USDC perp DEX, "spot" for spot). */
        readonly destinationDex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Destination DEX (\"\" for default USDC perp DEX, \"spot\" for spot).">]>;
        /** Token identifier. */
        readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token identifier.">]>;
        /** Amount to send (not in wei). */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount to send (not in wei).">]>;
        /** Equivalent USDC value. */
        readonly usdcValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Equivalent USDC value.">]>;
        /** Transfer fee. */
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Transfer fee.">]>;
        /** Fee in native token. */
        readonly nativeTokenFee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee in native token.">]>;
        /** Nonce of the transfer. */
        readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce of the transfer.">]>;
        /** Token in which the fee is denominated (e.g., "USDC"). */
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"deployGasAuction", undefined>, v.DescriptionAction<"deployGasAuction", "Update type.">]>;
        /** Token symbol. */
        readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
        /** Amount in the specified token. */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount in the specified token.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Update type. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cStakingTransfer", undefined>, v.DescriptionAction<"cStakingTransfer", "Update type.">]>;
        /** Token symbol. */
        readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
        /** Amount in the specified token. */
        readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount in the specified token.">]>;
        /** `true` for deposit, `false` for withdrawal. */
        readonly isDeposit: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "`true` for deposit, `false` for withdrawal.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "accountClassTransfer";
        usdc: string;
        toPerp: boolean;
    } | {
        type: "deposit";
        usdc: string;
    } | {
        type: "internalTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
    } | {
        type: "liquidation";
        liquidatedNtlPos: string;
        accountValue: string;
        leverageType: "Cross" | "Isolated";
        liquidatedPositions: {
            coin: string;
            szi: string;
        }[];
    } | {
        type: "rewardsClaim";
        amount: string;
        token: string;
    } | {
        type: "spotTransfer";
        token: string;
        amount: string;
        usdcValue: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
        nativeTokenFee: string;
        nonce: number | null;
        feeToken: string;
    } | {
        type: "subAccountTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
    } | {
        type: "vaultCreate";
        vault: `0x${string}`;
        usdc: string;
        fee: string;
    } | {
        type: "vaultDeposit";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultDistribution";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultWithdraw";
        vault: `0x${string}`;
        user: `0x${string}`;
        requestedUsd: string;
        commission: string;
        closingCost: string;
        basis: string;
        netWithdrawnUsd: string;
    } | {
        type: "withdraw";
        usdc: string;
        nonce: number;
        fee: string;
    } | {
        type: "send";
        user: `0x${string}`;
        destination: `0x${string}`;
        sourceDex: string;
        destinationDex: string;
        token: string;
        amount: string;
        usdcValue: string;
        fee: string;
        nativeTokenFee: string;
        nonce: number;
        feeToken: string;
    } | {
        type: "deployGasAuction";
        token: string;
        amount: string;
    } | {
        type: "cStakingTransfer";
        token: string;
        amount: string;
        isDeposit: boolean;
    }, "Update details.">]>;
}, undefined>, undefined>, v.DescriptionAction<{
    time: number;
    hash: `0x${string}`;
    delta: {
        type: "accountClassTransfer";
        usdc: string;
        toPerp: boolean;
    } | {
        type: "deposit";
        usdc: string;
    } | {
        type: "internalTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
    } | {
        type: "liquidation";
        liquidatedNtlPos: string;
        accountValue: string;
        leverageType: "Cross" | "Isolated";
        liquidatedPositions: {
            coin: string;
            szi: string;
        }[];
    } | {
        type: "rewardsClaim";
        amount: string;
        token: string;
    } | {
        type: "spotTransfer";
        token: string;
        amount: string;
        usdcValue: string;
        user: `0x${string}`;
        destination: `0x${string}`;
        fee: string;
        nativeTokenFee: string;
        nonce: number | null;
        feeToken: string;
    } | {
        type: "subAccountTransfer";
        usdc: string;
        user: `0x${string}`;
        destination: `0x${string}`;
    } | {
        type: "vaultCreate";
        vault: `0x${string}`;
        usdc: string;
        fee: string;
    } | {
        type: "vaultDeposit";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultDistribution";
        vault: `0x${string}`;
        usdc: string;
    } | {
        type: "vaultWithdraw";
        vault: `0x${string}`;
        user: `0x${string}`;
        requestedUsd: string;
        commission: string;
        closingCost: string;
        basis: string;
        netWithdrawnUsd: string;
    } | {
        type: "withdraw";
        usdc: string;
        nonce: number;
        fee: string;
    } | {
        type: "send";
        user: `0x${string}`;
        destination: `0x${string}`;
        sourceDex: string;
        destinationDex: string;
        token: string;
        amount: string;
        usdcValue: string;
        fee: string;
        nativeTokenFee: string;
        nonce: number;
        feeToken: string;
    } | {
        type: "deployGasAuction";
        token: string;
        amount: string;
    } | {
        type: "cStakingTransfer";
        token: string;
        amount: string;
        isDeposit: boolean;
    };
}[], "Array of user's non-funding ledger update.">]>;
export type UserNonFundingLedgerUpdatesResponse = v.InferOutput<typeof UserNonFundingLedgerUpdatesResponse>;
import type { InfoConfig } from "./_base/types.js";
/** Request parameters for the {@linkcode userNonFundingLedgerUpdates} function. */
export type UserNonFundingLedgerUpdatesParameters = Omit<v.InferInput<typeof UserNonFundingLedgerUpdatesRequest>, "type">;
/**
 * Request user non-funding ledger updates.
 *
 * @param config - General configuration for Info API requests.
 * @param params - Parameters specific to the API request.
 * @param signal - {@link https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal | AbortSignal} to cancel the request.
 *
 * @returns Array of user's non-funding ledger update.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { userNonFundingLedgerUpdates } from "@nktkas/hyperliquid/api/info";
 *
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * const data = await userNonFundingLedgerUpdates(
 *   { transport },
 *   { user: "0x..." },
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/info-endpoint/perpetuals#retrieve-a-users-funding-history-or-non-funding-ledger-updates
 */
export declare function userNonFundingLedgerUpdates(config: InfoConfig, params: UserNonFundingLedgerUpdatesParameters, signal?: AbortSignal): Promise<UserNonFundingLedgerUpdatesResponse>;
//# sourceMappingURL=userNonFundingLedgerUpdates.d.ts.map