import * as v from "valibot";
/** Subscription to user non-funding ledger updates for a specific user. */
export declare const UserNonFundingLedgerUpdatesRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userNonFundingLedgerUpdates", undefined>, v.DescriptionAction<"userNonFundingLedgerUpdates", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userNonFundingLedgerUpdates";
    user: `0x${string}`;
}, "Subscription to user non-funding ledger updates for a specific user.">]>;
export type UserNonFundingLedgerUpdatesRequest = v.InferOutput<typeof UserNonFundingLedgerUpdatesRequest>;
/** Event of user non-funding ledger updates. */
export declare const UserNonFundingLedgerUpdatesEvent: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
    /** Array of user's non-funding ledger update. */
    readonly nonFundingLedgerUpdates: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp of the update (in ms since epoch).">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
        readonly delta: v.SchemaWithPipe<readonly [v.VariantSchema<"type", [v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"accountClassTransfer", undefined>, v.DescriptionAction<"accountClassTransfer", "Update type.">]>;
            readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
            readonly toPerp: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the transfer is to the perpetual account.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"deposit", undefined>, v.DescriptionAction<"deposit", "Update type.">]>;
            readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount deposited in USDC.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"internalTransfer", undefined>, v.DescriptionAction<"internalTransfer", "Update type.">]>;
            readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
            readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
            readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Transfer fee.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"liquidation", undefined>, v.DescriptionAction<"liquidation", "Update type.">]>;
            readonly liquidatedNtlPos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Total notional value of liquidated positions.">]>;
            readonly accountValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Account value at liquidation time.">]>;
            readonly leverageType: v.SchemaWithPipe<readonly [v.PicklistSchema<["Cross", "Isolated"], undefined>, v.DescriptionAction<"Cross" | "Isolated", "Leverage type for liquidated positions.">]>;
            readonly liquidatedPositions: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
                readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol of the liquidated position.">]>;
                readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Signed position size liquidated.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                coin: string;
                szi: string;
            }[], "Details of each liquidated position.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"rewardsClaim", undefined>, v.DescriptionAction<"rewardsClaim", "Update type.">]>;
            readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount of rewards claimed.">]>;
            readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"spotTransfer", undefined>, v.DescriptionAction<"spotTransfer", "Update type.">]>;
            readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
            readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred.">]>;
            readonly usdcValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Equivalent USDC value.">]>;
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
            readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
            readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Transfer fee.">]>;
            readonly nativeTokenFee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee in native token.">]>;
            readonly nonce: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Nonce of the transfer.">]>;
            readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"subAccountTransfer", undefined>, v.DescriptionAction<"subAccountTransfer", "Update type.">]>;
            readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Initiator address.">]>;
            readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultCreate", undefined>, v.DescriptionAction<"vaultCreate", "Update type.">]>;
            readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the created vault.">]>;
            readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Initial allocated amount in USDC.">]>;
            readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Vault creation fee.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDeposit", undefined>, v.DescriptionAction<"vaultDeposit", "Update type.">]>;
            readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the target vault.">]>;
            readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount deposited in USDC.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultDistribution", undefined>, v.DescriptionAction<"vaultDistribution", "Update type.">]>;
            readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the vault distributing funds.">]>;
            readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount distributed in USDC.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"vaultWithdraw", undefined>, v.DescriptionAction<"vaultWithdraw", "Update type.">]>;
            readonly vault: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Vault address.">]>;
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the user withdrawing funds.">]>;
            readonly requestedUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Withdrawal request amount in USD.">]>;
            readonly commission: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Withdrawal commission fee.">]>;
            readonly closingCost: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Closing cost associated with positions.">]>;
            readonly basis: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Basis value for withdrawal calculation.">]>;
            readonly netWithdrawnUsd: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Net withdrawn amount in USD after fees and costs.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"withdraw", undefined>, v.DescriptionAction<"withdraw", "Update type.">]>;
            readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount withdrawn in USDC.">]>;
            readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce (timestamp in ms) used to prevent replay attacks.">]>;
            readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Withdrawal fee.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"send", undefined>, v.DescriptionAction<"send", "Update type.">]>;
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the sender.">]>;
            readonly destination: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Destination address.">]>;
            readonly sourceDex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Source DEX (\"\" for default USDC perp DEX, \"spot\" for spot).">]>;
            readonly destinationDex: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Destination DEX (\"\" for default USDC perp DEX, \"spot\" for spot).">]>;
            readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token identifier.">]>;
            readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount to send (not in wei).">]>;
            readonly usdcValue: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Equivalent USDC value.">]>;
            readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Transfer fee.">]>;
            readonly nativeTokenFee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee in native token.">]>;
            readonly nonce: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Nonce of the transfer.">]>;
            readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"deployGasAuction", undefined>, v.DescriptionAction<"deployGasAuction", "Update type.">]>;
            readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
            readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount in the specified token.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"cStakingTransfer", undefined>, v.DescriptionAction<"cStakingTransfer", "Update type.">]>;
            readonly token: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token symbol.">]>;
            readonly amount: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount in the specified token.">]>;
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
    }[], "Array of user's non-funding ledger update.">]>, v.DescriptionAction<{
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
    /** Whether this is an initial snapshot. */
    readonly isSnapshot: v.SchemaWithPipe<readonly [v.OptionalSchema<v.LiteralSchema<true, undefined>, undefined>, v.DescriptionAction<true | undefined, "Whether this is an initial snapshot.">]>;
}, undefined>, v.DescriptionAction<{
    user: `0x${string}`;
    nonFundingLedgerUpdates: {
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
    }[];
    isSnapshot?: true | undefined;
}, "Event of user non-funding ledger updates.">]>;
export type UserNonFundingLedgerUpdatesEvent = v.InferOutput<typeof UserNonFundingLedgerUpdatesEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/** Request parameters for the {@linkcode userNonFundingLedgerUpdates} function. */
export type UserNonFundingLedgerUpdatesParameters = Omit<v.InferInput<typeof UserNonFundingLedgerUpdatesRequest>, "type">;
/**
 * Subscribe to non-funding ledger updates for a specific user.
 *
 * @param config - General configuration for Subscription API subscriptions.
 * @param params - Parameters specific to the API subscription.
 * @param listener - A callback function to be called when the event is received.
 *
 * @returns A request-promise that resolves with a {@link ISubscription} object to manage the subscription lifecycle.
 *
 * @throws {ValiError} When the request parameters fail validation (before sending).
 * @throws {TransportError} When the transport layer throws an error.
 *
 * @example
 * ```ts
 * import { WebSocketTransport } from "@nktkas/hyperliquid";
 * import { userNonFundingLedgerUpdates } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await userNonFundingLedgerUpdates(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function userNonFundingLedgerUpdates(config: SubscriptionConfig, params: UserNonFundingLedgerUpdatesParameters, listener: (data: UserNonFundingLedgerUpdatesEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=userNonFundingLedgerUpdates.d.ts.map