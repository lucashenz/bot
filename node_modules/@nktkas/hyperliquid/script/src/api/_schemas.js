"use strict";
// deno-lint-ignore-file valibot-project/require-name-suffix valibot-project/require-jsdoc valibot-project/require-description
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISO8601WithoutTimezone = exports.Percent = exports.Cloid = exports.Address = exports.Hex = exports.UnsignedInteger = exports.Integer = exports.Decimal = exports.UnsignedDecimal = void 0;
const v = __importStar(require("valibot"));
// ============================================================
// Number
// ============================================================
exports.UnsignedDecimal = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toString(), v.string(), // HACK: for correct JSONSchema generation
    v.transform((value) => formatDecimalString(value)), v.regex(/^[0-9]+(\.[0-9]+)?$/));
})();
exports.Decimal = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toString(), v.string(), // HACK: for correct JSONSchema generation
    v.transform((value) => formatDecimalString(value)), v.regex(/^-?[0-9]+(\.[0-9]+)?$/));
})();
exports.Integer = (() => {
    return v.pipe(v.union([v.string(), v.number()]), v.toNumber(), v.number(), // HACK: for correct JSONSchema generation
    v.safeInteger());
})();
exports.UnsignedInteger = (() => {
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
exports.Hex = (() => {
    return v.pipe(v.string(), v.regex(/^0[xX][0-9a-fA-F]+$/), v.transform((value) => value.toLowerCase()));
})();
exports.Address = (() => {
    return v.pipe(exports.Hex, v.length(42));
})();
exports.Cloid = (() => {
    return v.pipe(exports.Hex, v.length(34));
})();
// ============================================================
// Other
// ============================================================
exports.Percent = (() => {
    return v.pipe(v.string(), v.regex(/^[0-9]+(\.[0-9]+)?%$/), v.transform((value) => value));
})();
exports.ISO8601WithoutTimezone = (() => {
    return v.pipe(v.string(), v.regex(/^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])[T ](?:0\d|1\d|2[0-3])(?::[0-5]\d){2}(?:\.\d{1,9})?$/));
})();
//# sourceMappingURL=_schemas.js.map