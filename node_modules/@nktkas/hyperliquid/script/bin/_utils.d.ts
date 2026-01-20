/**
 * Utility functions for command-line argument parsing and transformation.
 * More useful for working with proxy arguments.
 *
 * @example
 * ```ts
 * import { extractArgs, transformArgs } from "./_utils.ts";
 *
 * const args = ["info", "meta", "--user", "0x1234", "--limit", "10", "--verbose"];
 * const rawArgs = extractArgs(args, { flags: ["verbose"] });
 * // { _: ["info", "meta"], user: "0x1234", limit: "10", verbose: "true" }
 *
 * const typedArgs = transformArgs(rawArgs);
 * // { _: ["info", "meta"], user: "0x1234", limit: 10, verbose: true }
 * ```
 *
 * @module
 */
export type RawArgs<Collect extends boolean = true, DoubleDash extends boolean = false> = {
    _: string[];
} & (DoubleDash extends true ? {
    "--": string[];
} : {
    "--"?: never;
}) & Record<string, Collect extends false ? string : string | string[]>;
export type ExtractOptions<Collect extends boolean = true, DoubleDash extends boolean = false> = {
    /**
     * Consider these keys as flags (no value expected).
     * Value going after a flag will be treated as a positional argument.
     */
    flags?: string[];
    /**
     * Collect repeated options into arrays.
     * - `true` - repeated keys accumulate values into an array.
     * - `false` - later values overwrite earlier ones.
     * @default true
     */
    collect?: Collect;
    /**
     * Handle `--no-*` as negation (sets value to "false").
     * - `true` - `--no-foo` becomes `{ foo: "false" }`.
     * - `false` - `--no-foo` becomes `{ "no-foo": "true" }`.
     * @default true
     */
    negatable?: boolean;
    /**
     * Store arguments after `--` in a separate array.
     * - `true` - arguments after `--` are stored in `"--"` array.
     * - `false` - arguments after `--` are added to `_` array.
     * @default false
     */
    doubleDash?: DoubleDash;
};
/** Extract command-line arguments into a key-value object (does not transform values). */
export declare function extractArgs<Collect extends boolean = true, DoubleDash extends boolean = false>(args: string[], options?: ExtractOptions<Collect, DoubleDash>): RawArgs<Collect, DoubleDash>;
export interface TransformOptions {
    /**
     * Transform rule for null values.
     * @value `"null"` (case insensitive)
     * @default null
     */
    null?: "null" | "string";
    /**
     * Transform rule for boolean values.
     * @value `"true"` / `"false"` (case insensitive)
     * @default bool
     */
    bool?: "bool" | "string";
    /**
     * Transform rule for hexadecimal values.
     * @value `"0xff"` (case insensitive) (0x prefix required)
     * @default "string"
     */
    hex?: "string" | "number";
    /**
     * Transform rule for special numeric values.
     * @value `"Infinity"` / `"NaN"` (case insensitive) (may include leading sign)
     * @default "number"
     */
    specialNumber?: "string" | "number";
    /**
     * Transform rule for numeric values.
     * @value `"123"` / `"12.3"` / `"1e+2"` / `"-123"` (anything that can be parsed by `Number(value)`; excludes hex values)
     * @default "number"
     */
    number?: "number" | "string";
    /**
     * Transform rule for JSON object/array values.
     * @value `"{ \"a\": 1 }"`, `"[invalid array string]"` (anything that begins with `{` and ends with `}` or begins with `[` and ends with `]`)
     * @default "object"
     */
    json?: "object" | "string";
}
type TransformedValue = string | number | boolean | null | Record<string, unknown> | unknown[];
export type Args<Collect extends boolean = true, DoubleDash extends boolean = false> = {
    _: string[];
} & (DoubleDash extends true ? {
    "--": string[];
} : {
    "--"?: never;
}) & Record<string, Collect extends false ? TransformedValue : TransformedValue | TransformedValue[]>;
/**
 * Transform raw args (string values) into typed args based on rules.
 *
 * Order of transformation:
 * 1. null (`"null"`)
 * 2. boolean (`"true"`, `"false"`)
 * 3. hex (`"0x..."`)
 * 4. special number (`"Infinity"`, `"-Infinity"`, `"NaN", "-NaN"`)
 * 5. number (numeric strings)
 * 6. json (object/array strings)
 * 7. string (default)
 */
export declare function transformArgs<Collect extends boolean = true, DoubleDash extends boolean = false>(args: RawArgs<Collect, DoubleDash>, options?: TransformOptions): Args<Collect, DoubleDash>;
export {};
//# sourceMappingURL=_utils.d.ts.map