// deno-lint-ignore-file valibot-project/require-name-suffix valibot-project/require-jsdoc valibot-project/require-description
import * as v from "valibot";
// ============================================================
// Number
// ============================================================
export const UnsignedDecimal = /* @__PURE__ */ (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toString(), v.string(), // HACK: for correct JSONSchema generation
    v.transform((value) => formatDecimalString(value)), v.regex(/^[0-9]+(\.[0-9]+)?$/));
})();
export const Decimal = /* @__PURE__ */ (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toString(), v.string(), // HACK: for correct JSONSchema generation
    v.transform((value) => formatDecimalString(value)), v.regex(/^-?[0-9]+(\.[0-9]+)?$/));
})();
export const Integer = /* @__PURE__ */ (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toNumber(), v.number(), // HACK: for correct JSONSchema generation
    v.safeInteger());
})();
export const UnsignedInteger = /* @__PURE__ */ (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toNumber(), v.number(), // HACK: for correct JSONSchema generation
    v.safeInteger(), v.minValue(0));
})();
function formatDecimalString(value) {
    return value
        // remove leading/trailing whitespace
        .trim() // "  123.45  " → "123.45"
        // remove leading zeros
        .replace(/^(-?)0+(?=\d)/, "$1") // "00123" → "123", "-00.5" → "-0.5"
        // remove trailing zeros
        .replace(/\.0*$|(\.\d+?)0+$/, "$1") // "1.2000" → "1.2", "5.0" → "5"
        // add leading zero if starts with decimal point
        .replace(/^(-?)\./, "$10.") // ".5" → "0.5", "-.5" → "-0.5"
        // add "0" if string is empty after trimming
        .replace(/^-?$/, "0") // "" → "0", "-" → "0"
        // normalize negative zero
        .replace(/^-0$/, "0"); // "-0" → "0"
}
// ============================================================
// Hex
// ============================================================
export const Hex = /* @__PURE__ */ (() => {
    return v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.transform((value) => value.toLowerCase()));
})();
export const Address = /* @__PURE__ */ (() => {
    return v.pipe(Hex, v.length(42));
})();
export const Cloid = /* @__PURE__ */ (() => {
    return v.pipe(Hex, v.length(34));
})();
// ============================================================
// Other
// ============================================================
export const Percent = /* @__PURE__ */ (() => {
    return v.pipe(v.string(), v.regex(/^[0-9]+(\.[0-9]+)?%$/), v.transform((value) => value));
})();
export const ISO8601WithoutTimezone = /* @__PURE__ */ (() => {
    return v.pipe(v.string(), v.regex(/^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?$/));
})();
//# sourceMappingURL=_schemas.js.map