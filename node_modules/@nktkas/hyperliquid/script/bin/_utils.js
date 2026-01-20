"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractArgs = extractArgs;
exports.transformArgs = transformArgs;
/** Check if next argument can be used as a value. */
function isValidValue(nextArg) {
    if (typeof nextArg !== "string")
        return false;
    // Allow negative numbers as values (e.g., -5, -3.14)
    if (nextArg.startsWith("-") && isNaN(Number(nextArg)))
        return false;
    return true;
}
/** Set value for a key, with optional array collection on repeat. */
function setValue(result, key, value, collect) {
    if (key in result && collect) {
        // Key already exists and collect is enabled - convert to array or push
        const existing = result[key];
        if (Array.isArray(existing)) {
            existing.push(value); // Already an array - just push
        }
        else {
            result[key] = [existing, value]; // First repeat - convert to array
        }
    }
    else {
        // First occurrence or collect disabled - set/overwrite value
        result[key] = value;
    }
}
/** Extract command-line arguments into a key-value object (does not transform values). */
function extractArgs(args, options) {
    const flags = options?.flags ?? [];
    const collect = options?.collect ?? true;
    const negatable = options?.negatable ?? true;
    const doubleDash = options?.doubleDash ?? false;
    const result = (doubleDash ? { _: [], "--": [] } : { _: [] });
    let terminated = false; // After "--", all args are positional
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        // After "--" terminator, all arguments are positional
        if (terminated) {
            if (doubleDash) {
                result["--"].push(arg);
            }
            else {
                result._.push(arg);
            }
            continue;
        }
        // Options terminator: "--"
        if (arg === "--") {
            terminated = true;
            continue;
        }
        // Positional argument (doesn't start with "-")
        if (!arg.startsWith("-")) {
            result._.push(arg);
            continue;
        }
        const isLongOption = arg.startsWith("--");
        // Handle long options (--key, --key=value, --no-key)
        if (isLongOption) {
            const rawKey = arg.slice(2);
            const equalsIndex = rawKey.indexOf("=");
            const hasInlineValue = equalsIndex !== -1;
            let key = hasInlineValue ? rawKey.substring(0, equalsIndex) : rawKey;
            // Skip reserved keys "_" and "--"
            if (key === "_" || key === "--")
                continue;
            let value;
            if (negatable && key.startsWith("no-") && !hasInlineValue) { // Handle --no-* negation
                key = key.slice(3); // Remove "no-" prefix
                value = "false";
            }
            else if (hasInlineValue) { // Handle --key=value
                value = rawKey.substring(equalsIndex + 1);
            }
            else if (!flags.includes(key) && isValidValue(args[i + 1])) { // Handle --key value
                value = args[++i];
            }
            else { // Flag without value
                value = "true";
            }
            setValue(result, key, value, collect);
        } // Handle short options (-v, -f value, -abc)
        else {
            const chars = arg.slice(1);
            // Single short option: -f
            if (chars.length === 1) {
                const key = chars;
                if (key === "_")
                    continue; // Skip reserved key
                let value;
                if (!flags.includes(key) && isValidValue(args[i + 1])) { // Handle -f value
                    value = args[++i];
                }
                else { // Flag without value
                    value = "true";
                }
                setValue(result, key, value, collect);
            } // Grouped short flags: -abc → a, b, c (all flags, no values)
            else {
                for (const char of chars) {
                    if (char === "_")
                        continue; // Skip reserved key
                    setValue(result, char, "true", collect);
                }
            }
        }
    }
    return result;
}
/** Transform a single string value based on rules. */
function transformValue(value, opts) {
    // null
    if (value.toLowerCase() === "null") {
        return opts.null === "null" ? null : value;
    }
    // boolean
    if (value.toLowerCase() === "true" || value.toLowerCase() === "false") {
        return opts.bool === "bool" ? value.toLowerCase() === "true" : value;
    }
    // hex
    if ((value.startsWith("0x") || value.startsWith("0X")) &&
        !isNaN(Number(value))) {
        return opts.hex === "string" ? value : Number(value);
    }
    // special number
    if (value.toLowerCase() === "infinity" ||
        value.toLowerCase() === "-infinity" ||
        value.toLowerCase() === "nan" ||
        value.toLowerCase() === "-nan") {
        return opts.specialNumber === "string" ? value : Number(value);
    }
    // number
    if (!isNaN(Number(value))) {
        return opts.number === "number" ? Number(value) : value;
    }
    // json object/array
    if ((value.startsWith("{") && value.endsWith("}")) ||
        (value.startsWith("[") && value.endsWith("]"))) {
        if (opts.json === "object") {
            try {
                return JSON.parse(value);
            }
            catch { /** Ignore invalid JSON */ }
        }
        return value; // as string if parsing fails or opts is "string"
    }
    // string (default)
    return value;
}
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
function transformArgs(args, options) {
    const opts = {
        null: options?.null ?? "null",
        bool: options?.bool ?? "bool",
        hex: options?.hex ?? "string",
        specialNumber: options?.specialNumber ?? "number",
        number: options?.number ?? "number",
        json: options?.json ?? "object",
    };
    const result = ("--" in args ? { _: args._, "--": args["--"] } : { _: args._ });
    for (const key in args) {
        if (key === "_" || key === "--")
            continue; // Skip positional args arrays
        const value = args[key];
        // Handle arrays (repeated options)
        if (Array.isArray(value)) {
            result[key] = value.map((v) => transformValue(v, opts));
        }
        else {
            result[key] = transformValue(value, opts);
        }
    }
    return result;
}
//# sourceMappingURL=_utils.js.map