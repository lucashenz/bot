import * as v from "valibot";
/** Action related to validator management. */
export declare const CValidatorActionRequest: v.SchemaWithPipe<readonly [v.ObjectSchema<{
    /** Validator management action. */
    readonly action: v.SchemaWithPipe<readonly [v.UnionSchema<[v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Profile changes to apply. */
        readonly changeProfile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Validator node IP address. */
            readonly node_ip: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                /** IP address. */
                readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                Ip: string;
            } | null, "Validator node IP address.">]>;
            /** Validator name. */
            readonly name: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator name.">]>;
            /** Validator description. */
            readonly description: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator description.">]>;
            /** Whether the validator is unjailed. */
            readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the validator is unjailed.">]>;
            /** Enable or disable delegations. */
            readonly disable_delegations: v.SchemaWithPipe<readonly [v.NullableSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | null, "Enable or disable delegations.">]>;
            /** Commission rate in basis points (1 = 0.0001%). */
            readonly commission_bps: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Commission rate in basis points (1 = 0.0001%).">]>;
            /** Signer address. */
            readonly signer: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Signer address.">]>;
        }, undefined>, v.DescriptionAction<{
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        }, "Profile changes to apply.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Registration parameters. */
        readonly register: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Validator profile information. */
            readonly profile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Validator node IP address. */
                readonly node_ip: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** IP address. */
                    readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
                }, undefined>, v.DescriptionAction<{
                    Ip: string;
                }, "Validator node IP address.">]>;
                /** Validator name. */
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator name.">]>;
                /** Validator description. */
                readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator description.">]>;
                /** Whether delegations are disabled. */
                readonly delegations_disabled: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether delegations are disabled.">]>;
                /** Commission rate in basis points (1 = 0.0001%). */
                readonly commission_bps: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Commission rate in basis points (1 = 0.0001%).">]>;
                /** Signer address. */
                readonly signer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Signer address.">]>;
            }, undefined>, v.DescriptionAction<{
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            }, "Validator profile information.">]>;
            /** Initial jail status. */
            readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Initial jail status.">]>;
            /** Initial stake amount in wei. */
            readonly initial_wei: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Initial stake amount in wei.">]>;
        }, undefined>, v.DescriptionAction<{
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        }, "Registration parameters.">]>;
    }, undefined>, v.ObjectSchema<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Unregister the validator. */
        readonly unregister: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unregister the validator.">]>;
    }, undefined>], undefined>, v.DescriptionAction<{
        type: "CValidatorAction";
        changeProfile: {
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        };
    } | {
        type: "CValidatorAction";
        register: {
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        };
    } | {
        type: "CValidatorAction";
        unregister: null;
    }, "Validator management action.">]>;
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
        type: "CValidatorAction";
        changeProfile: {
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        };
    } | {
        type: "CValidatorAction";
        register: {
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        };
    } | {
        type: "CValidatorAction";
        unregister: null;
    };
    nonce: number;
    signature: {
        r: `0x${string}`;
        s: `0x${string}`;
        v: 27 | 28;
    };
    expiresAfter?: number | undefined;
}, "Action related to validator management.">]>;
export type CValidatorActionRequest = v.InferOutput<typeof CValidatorActionRequest>;
/** Successful response without specific data or error response. */
export declare const CValidatorActionResponse: v.SchemaWithPipe<readonly [v.UnionSchema<[v.SchemaWithPipe<readonly [v.ObjectSchema<{
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
export type CValidatorActionResponse = v.InferOutput<typeof CValidatorActionResponse>;
import { type ExchangeConfig, type ExtractRequestOptions } from "./_base/execute.js";
import type { ExcludeErrorResponse } from "./_base/errors.js";
/** Schema for user-provided action parameters (excludes system fields). */
declare const CValidatorActionParameters: v.UnionSchema<((Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
    /** Profile changes to apply. */
    readonly changeProfile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Validator node IP address. */
        readonly node_ip: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
            /** IP address. */
            readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
        }, undefined>, undefined>, v.DescriptionAction<{
            Ip: string;
        } | null, "Validator node IP address.">]>;
        /** Validator name. */
        readonly name: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator name.">]>;
        /** Validator description. */
        readonly description: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator description.">]>;
        /** Whether the validator is unjailed. */
        readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the validator is unjailed.">]>;
        /** Enable or disable delegations. */
        readonly disable_delegations: v.SchemaWithPipe<readonly [v.NullableSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | null, "Enable or disable delegations.">]>;
        /** Commission rate in basis points (1 = 0.0001%). */
        readonly commission_bps: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Commission rate in basis points (1 = 0.0001%).">]>;
        /** Signer address. */
        readonly signer: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Signer address.">]>;
    }, undefined>, v.DescriptionAction<{
        node_ip: {
            Ip: string;
        } | null;
        name: string | null;
        description: string | null;
        unjailed: boolean;
        disable_delegations: boolean | null;
        commission_bps: number | null;
        signer: `0x${string}` | null;
    }, "Profile changes to apply.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Profile changes to apply. */
        readonly changeProfile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Validator node IP address. */
            readonly node_ip: v.SchemaWithPipe<readonly [v.NullableSchema<v.ObjectSchema<{
                /** IP address. */
                readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
            }, undefined>, undefined>, v.DescriptionAction<{
                Ip: string;
            } | null, "Validator node IP address.">]>;
            /** Validator name. */
            readonly name: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator name.">]>;
            /** Validator description. */
            readonly description: v.SchemaWithPipe<readonly [v.NullableSchema<v.StringSchema<undefined>, undefined>, v.DescriptionAction<string | null, "Validator description.">]>;
            /** Whether the validator is unjailed. */
            readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether the validator is unjailed.">]>;
            /** Enable or disable delegations. */
            readonly disable_delegations: v.SchemaWithPipe<readonly [v.NullableSchema<v.BooleanSchema<undefined>, undefined>, v.DescriptionAction<boolean | null, "Enable or disable delegations.">]>;
            /** Commission rate in basis points (1 = 0.0001%). */
            readonly commission_bps: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, undefined>, v.DescriptionAction<number | null, "Commission rate in basis points (1 = 0.0001%).">]>;
            /** Signer address. */
            readonly signer: v.SchemaWithPipe<readonly [v.NullableSchema<v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, undefined>, v.DescriptionAction<`0x${string}` | null, "Signer address.">]>;
        }, undefined>, v.DescriptionAction<{
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        }, "Profile changes to apply.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        changeProfile: {
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: string | number | null;
            signer: string | null;
        };
    }, {
        changeProfile: {
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        changeProfile: {
            node_ip: {
                Ip: string;
            } | null;
            name: string | null;
            description: string | null;
            unjailed: boolean;
            disable_delegations: boolean | null;
            commission_bps: number | null;
            signer: `0x${string}` | null;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue | v.IpIssue<string>>;
    readonly "~types"?: {
        readonly input: {
            changeProfile: {
                node_ip: {
                    Ip: string;
                } | null;
                name: string | null;
                description: string | null;
                unjailed: boolean;
                disable_delegations: boolean | null;
                commission_bps: string | number | null;
                signer: string | null;
            };
        };
        readonly output: {
            changeProfile: {
                node_ip: {
                    Ip: string;
                } | null;
                name: string | null;
                description: string | null;
                unjailed: boolean;
                disable_delegations: boolean | null;
                commission_bps: number | null;
                signer: `0x${string}` | null;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue | v.IpIssue<string>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
    /** Registration parameters. */
    readonly register: v.SchemaWithPipe<readonly [v.ObjectSchema<{
        /** Validator profile information. */
        readonly profile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Validator node IP address. */
            readonly node_ip: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** IP address. */
                readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
            }, undefined>, v.DescriptionAction<{
                Ip: string;
            }, "Validator node IP address.">]>;
            /** Validator name. */
            readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator name.">]>;
            /** Validator description. */
            readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator description.">]>;
            /** Whether delegations are disabled. */
            readonly delegations_disabled: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether delegations are disabled.">]>;
            /** Commission rate in basis points (1 = 0.0001%). */
            readonly commission_bps: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Commission rate in basis points (1 = 0.0001%).">]>;
            /** Signer address. */
            readonly signer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Signer address.">]>;
        }, undefined>, v.DescriptionAction<{
            node_ip: {
                Ip: string;
            };
            name: string;
            description: string;
            delegations_disabled: boolean;
            commission_bps: number;
            signer: `0x${string}`;
        }, "Validator profile information.">]>;
        /** Initial jail status. */
        readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Initial jail status.">]>;
        /** Initial stake amount in wei. */
        readonly initial_wei: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Initial stake amount in wei.">]>;
    }, undefined>, v.DescriptionAction<{
        profile: {
            node_ip: {
                Ip: string;
            };
            name: string;
            description: string;
            delegations_disabled: boolean;
            commission_bps: number;
            signer: `0x${string}`;
        };
        unjailed: boolean;
        initial_wei: number;
    }, "Registration parameters.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Registration parameters. */
        readonly register: v.SchemaWithPipe<readonly [v.ObjectSchema<{
            /** Validator profile information. */
            readonly profile: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                /** Validator node IP address. */
                readonly node_ip: v.SchemaWithPipe<readonly [v.ObjectSchema<{
                    /** IP address. */
                    readonly Ip: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.IpAction<string, undefined>, v.DescriptionAction<string, "IP address.">]>;
                }, undefined>, v.DescriptionAction<{
                    Ip: string;
                }, "Validator node IP address.">]>;
                /** Validator name. */
                readonly name: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator name.">]>;
                /** Validator description. */
                readonly description: v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.DescriptionAction<string, "Validator description.">]>;
                /** Whether delegations are disabled. */
                readonly delegations_disabled: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Whether delegations are disabled.">]>;
                /** Commission rate in basis points (1 = 0.0001%). */
                readonly commission_bps: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Commission rate in basis points (1 = 0.0001%).">]>;
                /** Signer address. */
                readonly signer: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.StringSchema<undefined>, v.RegexAction<string, undefined>, v.TransformAction<string, `0x${string}`>]>, v.LengthAction<`0x${string}`, 42, undefined>]>, v.DescriptionAction<`0x${string}`, "Signer address.">]>;
            }, undefined>, v.DescriptionAction<{
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            }, "Validator profile information.">]>;
            /** Initial jail status. */
            readonly unjailed: v.SchemaWithPipe<readonly [v.BooleanSchema<undefined>, v.DescriptionAction<boolean, "Initial jail status.">]>;
            /** Initial stake amount in wei. */
            readonly initial_wei: v.SchemaWithPipe<readonly [v.SchemaWithPipe<readonly [v.UnionSchema<[v.StringSchema<undefined>, v.NumberSchema<undefined>], undefined>, v.ToNumberAction<string | number, undefined>, v.NumberSchema<undefined>, v.SafeIntegerAction<number, undefined>, v.MinValueAction<number, 0, undefined>]>, v.DescriptionAction<number, "Initial stake amount in wei.">]>;
        }, undefined>, v.DescriptionAction<{
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        }, "Registration parameters.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        register: {
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: string | number;
                signer: string;
            };
            unjailed: boolean;
            initial_wei: string | number;
        };
    }, {
        register: {
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        };
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        register: {
            profile: {
                node_ip: {
                    Ip: string;
                };
                name: string;
                description: string;
                delegations_disabled: boolean;
                commission_bps: number;
                signer: `0x${string}`;
            };
            unjailed: boolean;
            initial_wei: number;
        };
    }, v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue | v.IpIssue<string>>;
    readonly "~types"?: {
        readonly input: {
            register: {
                profile: {
                    node_ip: {
                        Ip: string;
                    };
                    name: string;
                    description: string;
                    delegations_disabled: boolean;
                    commission_bps: string | number;
                    signer: string;
                };
                unjailed: boolean;
                initial_wei: string | number;
            };
        };
        readonly output: {
            register: {
                profile: {
                    node_ip: {
                        Ip: string;
                    };
                    name: string;
                    description: string;
                    delegations_disabled: boolean;
                    commission_bps: number;
                    signer: `0x${string}`;
                };
                unjailed: boolean;
                initial_wei: number;
            };
        };
        readonly issue: v.StringIssue | v.ObjectIssue | v.NumberIssue | v.UnionIssue<v.StringIssue | v.NumberIssue> | v.RegexIssue<string> | v.ToNumberIssue<string | number> | v.SafeIntegerIssue<number> | v.MinValueIssue<number, 0> | v.LengthIssue<`0x${string}`, 42> | v.BooleanIssue | v.IpIssue<string>;
    } | undefined;
}) | (Omit<v.ObjectSchema<{
    /** Type of action. */
    readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
    /** Unregister the validator. */
    readonly unregister: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unregister the validator.">]>;
}, undefined>, "entries" | "~types" | "~run" | "~standard"> & {
    readonly entries: Omit<{
        /** Type of action. */
        readonly type: v.SchemaWithPipe<readonly [v.LiteralSchema<"CValidatorAction", undefined>, v.DescriptionAction<"CValidatorAction", "Type of action.">]>;
        /** Unregister the validator. */
        readonly unregister: v.SchemaWithPipe<readonly [v.NullSchema<undefined>, v.DescriptionAction<null, "Unregister the validator.">]>;
    }, "type">;
    readonly "~standard": v.StandardProps<{
        unregister: null;
    }, {
        unregister: null;
    }>;
    readonly "~run": (dataset: v.UnknownDataset, config: v.Config<v.BaseIssue<unknown>>) => v.OutputDataset<{
        unregister: null;
    }, v.ObjectIssue | v.NullIssue>;
    readonly "~types"?: {
        readonly input: {
            unregister: null;
        };
        readonly output: {
            unregister: null;
        };
        readonly issue: v.ObjectIssue | v.NullIssue;
    } | undefined;
}))[], undefined>;
/** Action parameters for the {@linkcode cValidatorAction} function. */
export type CValidatorActionParameters = v.InferInput<typeof CValidatorActionParameters>;
/** Request options for the {@linkcode cValidatorAction} function. */
export type CValidatorActionOptions = ExtractRequestOptions<v.InferInput<typeof CValidatorActionRequest>>;
/** Successful variant of {@linkcode CValidatorActionResponse} without errors. */
export type CValidatorActionSuccessResponse = ExcludeErrorResponse<CValidatorActionResponse>;
/**
 * Action related to validator management.
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
 * @example Change validator profile
 * ```ts
 * import { HttpTransport } from "@nktkas/hyperliquid";
 * import { cValidatorAction } from "@nktkas/hyperliquid/api/exchange";
 * import { privateKeyToAccount } from "npm:viem/accounts";
 *
 * const wallet = privateKeyToAccount("0x..."); // viem or ethers
 * const transport = new HttpTransport(); // or `WebSocketTransport`
 *
 * await cValidatorAction(
 *   { transport, wallet },
 *   {
 *     changeProfile: {
 *       node_ip: { Ip: "1.2.3.4" },
 *       name: "...",
 *       description: "...",
 *       unjailed: true,
 *       disable_delegations: false,
 *       commission_bps: null,
 *       signer: null,
 *     },
 *   },
 * );
 * ```
 */
export declare function cValidatorAction(config: ExchangeConfig, params: CValidatorActionParameters, opts?: CValidatorActionOptions): Promise<CValidatorActionSuccessResponse>;
export {};
//# sourceMappingURL=cValidatorAction.d.ts.map