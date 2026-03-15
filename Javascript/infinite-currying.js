/*
    You are expected to design a function that keeps returning another function until no argument is passed. 
    This tests your understanding of closures, function chaining, and how values are preserved across calls.
    Example: sum(1)(2)(3)...() - Outputs: 6

*/

export default function infiniteCurry(currentValue) {
    return function next(nextValue) {
        if (nextValue === undefined) {
            return currentValue;
        }
        return infiniteCurry(currentValue + nextValue);
    }
}
