import * as v from "valibot";
/** Subscription to user events for a specific user. */
export declare const UserEventsRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Type of subscription. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"userEvents", undefined>, v.DescriptionAction<"userEvents", "Type of subscription.">]>;
    /** User address. */
    readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
}, undefined>, v.DescriptionAction<{
    type: "userEvents";
    user: `0x${string}`;
}, "Subscription to user events for a specific user.">]>;
export type UserEventsRequest = v.InferOutput<typeof UserEventsRequest>;
/** Event of one of possible user events. */
export declare const UserEventsEvent: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
    /** Array of user trade fills. */
    readonly fills: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ArraySchema<v.IntersectSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Price.">]>;
        readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Size.">]>;
        readonly side: v.SchemaWithPipe<readonly [v.PicklistSchema<["B", "A"], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
        readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Start position size.">]>;
        readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
        readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Realized PnL.">]>;
        readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
        readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
        readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
        readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
        readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
        readonly twapId: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "ID of the TWAP.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        feeToken: string;
        twapId: number | null;
    }, "User fill.">]>, v.ObjectSchema<{
        readonly cloid: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 34, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | undefined, "Client Order ID.">]>;
        readonly liquidation: v.SchemaWithPipe<readonly [v.OptionalSchema<v.ObjectSchema<{
            readonly liquidatedUser: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidated user.">]>;
            readonly markPx: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Mark price at the time of liquidation.">]>;
            readonly method: v.SchemaWithPipe<readonly [v.PicklistSchema<["market", "backstop"], undefined>, v.DescriptionAction<"market" | "backstop", "Liquidation method.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            liquidatedUser: `0x${string}`;
            markPx: string;
            method: "market" | "backstop";
        } | undefined, "Liquidation details.">]>;
    }, undefined>], undefined>, undefined>, v.DescriptionAction<({
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        feeToken: string;
        twapId: number | null;
    } & {
        cloid?: `0x${string}` | undefined;
        liquidation?: {
            liquidatedUser: `0x${string}`;
            markPx: string;
            method: "market" | "backstop";
        } | undefined;
    })[], "Array of user trade fills.">]>, v.DescriptionAction<({
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        feeToken: string;
        twapId: number | null;
    } & {
        cloid?: `0x${string}` | undefined;
        liquidation?: {
            liquidatedUser: `0x${string}`;
            markPx: string;
            method: "market" | "backstop";
        } | undefined;
    })[], "Array of user trade fills.">]>;
}, undefined>, v.ObjectSchema<{
    /** Funding update details. */
    readonly funding: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Asset symbol. */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
        /** Amount transferred in USDC. */
        readonly usdc: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Amount transferred in USDC.">]>;
        /** Signed position size. */
        readonly szi: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Signed position size.">]>;
        /** Applied funding rate. */
        readonly fundingRate: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Applied funding rate.">]>;
        /** Number of samples. */
        readonly nSamples: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Number of samples.">]>;
    }, undefined>, v.DescriptionAction<{
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    }, "Funding update details.">]>;
}, undefined>, v.ObjectSchema<{
    /** Liquidation details. */
    readonly liquidation: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Unique liquidation ID. */
        readonly lid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique liquidation ID.">]>;
        /** Address of the liquidator. */
        readonly liquidator: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidator.">]>;
        /** Address of the liquidated user. */
        readonly liquidated_user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Address of the liquidated user.">]>;
        /** Notional position size that was liquidated. */
        readonly liquidated_ntl_pos: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Notional position size that was liquidated.">]>;
        /** Account value at time of liquidation. */
        readonly liquidated_account_value: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Account value at time of liquidation.">]>;
    }, undefined>, v.DescriptionAction<{
        lid: number;
        liquidator: `0x${string}`;
        liquidated_user: `0x${string}`;
        liquidated_ntl_pos: string;
        liquidated_account_value: string;
    }, "Liquidation details.">]>;
}, undefined>, v.ObjectSchema<{
    /** Array of non-user initiated order cancellations. */
    readonly nonUserCancel: v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        /** Asset symbol (e.g., BTC). */
        readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol (e.g., BTC).">]>;
        /** Order ID. */
        readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        coin: string;
        oid: number;
    }[], "Array of non-user initiated order cancellations.">]>;
}, undefined>, v.ObjectSchema<{
    /** Array of user's TWAP history. */
    readonly twapHistory: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Creation time of the history record (in seconds since epoch).">]>;
        readonly state: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly executedNtl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Executed notional value.">]>;
            readonly executedSz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Executed size.">]>;
            readonly minutes: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Duration in minutes.">]>;
            readonly randomize: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the TWAP randomizes execution.">]>;
            readonly reduceOnly: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the order is reduce-only.">]>;
            readonly side: v.SchemaWithPipe<readonly [v.PicklistSchema<["B", "A"], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
            readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Order size.">]>;
            readonly timestamp: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Start time of the TWAP order (in ms since epoch).">]>;
            readonly user: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "User address.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        }, "TWAP order state.">]>, v.DescriptionAction<{
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        }, "State of the TWAP order.">]>;
        readonly status: v.SchemaWithPipe<readonly [v.VariantSchema<"status", [v.ObjectSchema<{
            readonly status: v.SchemaWithPipe<readonly [v.PicklistSchema<["finished", "activated", "terminated"], undefined>, v.DescriptionAction<"finished" | "activated" | "terminated", "Status of the TWAP order.">]>;
        }, undefined>, v.ObjectSchema<{
            readonly status: v.SchemaWithPipe<readonly [v.LiteralSchema<"error", undefined>, v.DescriptionAction<"error", "Status of the TWAP order.">]>;
            readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Error message.">]>;
        }, undefined>], undefined>, v.DescriptionAction<{
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        }, string>]>;
        readonly twapId: v.SchemaWithPipe<readonly [v.OptionalSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | undefined, "ID of the TWAP.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        time: number;
        state: {
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId?: number | undefined;
    }[], "Array of user's TWAP history.">]>, v.DescriptionAction<{
        time: number;
        state: {
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId?: number | undefined;
    }[], "Array of user's TWAP history.">]>;
}, undefined>, v.ObjectSchema<{
    /** Array of user's twap slice fills. */
    readonly twapSliceFills: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ArraySchema<v.ObjectSchema<{
        readonly fill: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.ObjectSchema<{
            readonly coin: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Asset symbol.">]>;
            readonly px: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Price.">]>;
            readonly sz: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Size.">]>;
            readonly side: v.SchemaWithPipe<readonly [v.PicklistSchema<["B", "A"], undefined>, v.DescriptionAction<"B" | "A", "Order side (\"B\" = Bid/Buy, \"A\" = Ask/Sell).">]>;
            readonly time: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Timestamp when the trade occurred (in ms since epoch).">]>;
            readonly startPosition: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Start position size.">]>;
            readonly dir: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Direction indicator for frontend display.">]>;
            readonly closedPnl: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Realized PnL.">]>;
            readonly hash: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 66, undefined>, v.DescriptionAction<`0x${string}`, "L1 transaction hash.">]>;
            readonly oid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Order ID.">]>;
            readonly crossed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Indicates if the fill was a taker order.">]>;
            readonly fee: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToStringAction<string | number, undefined>, v.StringSchema<undefined>, v.TransformAction<string, string>, v.RegexAction<string, undefined>]>, v.DescriptionAction<string, "Fee charged or rebate received (negative indicates rebate).">]>;
            readonly tid: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Unique transaction identifier for a partial fill of an order.">]>;
            readonly feeToken: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Token in which the fee is denominated (e.g., \"USDC\").">]>;
            readonly twapId: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "ID of the TWAP.">]>;
        }, undefined>, v.DescriptionAction<{
            coin: string;
            px: string;
            sz: string;
            side: "B" | "A";
            time: number;
            startPosition: string;
            dir: string;
            closedPnl: string;
            hash: `0x${string}`;
            oid: number;
            crossed: boolean;
            fee: string;
            tid: number;
            feeToken: string;
            twapId: number | null;
        }, "User fill.">]>, v.DescriptionAction<{
            coin: string;
            px: string;
            sz: string;
            side: "B" | "A";
            time: number;
            startPosition: string;
            dir: string;
            closedPnl: string;
            hash: `0x${string}`;
            oid: number;
            crossed: boolean;
            fee: string;
            tid: number;
            feeToken: string;
            twapId: number | null;
        }, "TWAP fill record.">]>;
        readonly twapId: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "ID of the TWAP.">]>;
    }, undefined>, undefined>, v.DescriptionAction<{
        fill: {
            coin: string;
            px: string;
            sz: string;
            side: "B" | "A";
            time: number;
            startPosition: string;
            dir: string;
            closedPnl: string;
            hash: `0x${string}`;
            oid: number;
            crossed: boolean;
            fee: string;
            tid: number;
            feeToken: string;
            twapId: number | null;
        };
        twapId: number;
    }[], "Array of user's twap slice fills.">]>, v.DescriptionAction<{
        fill: {
            coin: string;
            px: string;
            sz: string;
            side: "B" | "A";
            time: number;
            startPosition: string;
            dir: string;
            closedPnl: string;
            hash: `0x${string}`;
            oid: number;
            crossed: boolean;
            fee: string;
            tid: number;
            feeToken: string;
            twapId: number | null;
        };
        twapId: number;
    }[], "Array of user's twap slice fills.">]>;
}, undefined>], undefined>, v.DescriptionAction<{
    fills: ({
        coin: string;
        px: string;
        sz: string;
        side: "B" | "A";
        time: number;
        startPosition: string;
        dir: string;
        closedPnl: string;
        hash: `0x${string}`;
        oid: number;
        crossed: boolean;
        fee: string;
        tid: number;
        feeToken: string;
        twapId: number | null;
    } & {
        cloid?: `0x${string}` | undefined;
        liquidation?: {
            liquidatedUser: `0x${string}`;
            markPx: string;
            method: "market" | "backstop";
        } | undefined;
    })[];
} | {
    funding: {
        coin: string;
        usdc: string;
        szi: string;
        fundingRate: string;
        nSamples: number | null;
    };
} | {
    liquidation: {
        lid: number;
        liquidator: `0x${string}`;
        liquidated_user: `0x${string}`;
        liquidated_ntl_pos: string;
        liquidated_account_value: string;
    };
} | {
    nonUserCancel: {
        coin: string;
        oid: number;
    }[];
} | {
    twapHistory: {
        time: number;
        state: {
            coin: string;
            executedNtl: string;
            executedSz: string;
            minutes: number;
            randomize: boolean;
            reduceOnly: boolean;
            side: "B" | "A";
            sz: string;
            timestamp: number;
            user: `0x${string}`;
        };
        status: {
            status: "finished" | "activated" | "terminated";
        } | {
            status: "error";
            description: string;
        };
        twapId?: number | undefined;
    }[];
} | {
    twapSliceFills: {
        fill: {
            coin: string;
            px: string;
            sz: string;
            side: "B" | "A";
            time: number;
            startPosition: string;
            dir: string;
            closedPnl: string;
            hash: `0x${string}`;
            oid: number;
            crossed: boolean;
            fee: string;
            tid: number;
            feeToken: string;
            twapId: number | null;
        };
        twapId: number;
    }[];
}, "Event of one of possible user events.">]>;
export type UserEventsEvent = v.InferOutput<typeof UserEventsEvent>;
import type { SubscriptionConfig } from "./_types.js";
import type { ISubscription } from "../../../transport/mod.js";
/** Request parameters for the {@linkcode userEvents} function. */
export type UserEventsParameters = Omit<v.InferInput<typeof UserEventsRequest>, "type">;
/**
 * Subscribe to non-order events for a specific user.
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
 * import { userEvents } from "@nktkas/hyperliquid/api/subscription";
 *
 * const transport = new WebSocketTransport(); // only `WebSocketTransport`
 *
 * const sub = await userEvents(
 *   { transport },
 *   { user: "0x..." },
 *   (data) => console.log(data),
 * );
 * ```
 *
 * @see https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api/websocket/subscriptions
 */
export declare function userEvents(config: SubscriptionConfig, params: UserEventsParameters, listener: (data: UserEventsEvent) => void): Promise<ISubscription>;
//# sourceMappingURL=userEvents.d.ts.map