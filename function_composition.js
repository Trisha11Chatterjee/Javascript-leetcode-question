/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        // Start with the input value
        let result = x;

        // Apply functions from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }

        // Return the final result
        return result;
    };
};

/**
 * Example Usage:
 * const fn = compose([x => x + 1, x => 2 * x]);
 * console.log(fn(4)); // Output: 9
 */

const functions = [x => x + 1, x => x * x, x => 2 * x];
const fn = compose(functions);
console.log(fn(4)); // Output: 65



 
