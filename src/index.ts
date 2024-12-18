import { FixedBinaryArray } from "./classes/FixedBinaryArray";
import { FlexBinaryArray } from "./classes/FlexBinaryArray";
import { getFixedFns } from "./functions/fn-fixed";
import { getFlexFns } from "./functions/fn-flex";

// What to export from here?

// getFixedFns(len, chun = 32)
// getFlexFns(defaultLength = 8, defaultChun = 8)

export {
    FixedBinaryArray,
    FlexBinaryArray,
    getFixedFns,
    getFlexFns
}