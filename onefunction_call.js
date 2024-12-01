/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    // Variable to keep track of whether the function has been called
    let called = false;
    let result;

    return function(...args) {
        // If the function has already been called, return undefined
        if (called) {
            return undefined;
        }

        // Mark the function as called and store the result
        called = true;
        result = fn(...args);
        return result;
    };
};



const fn = (a, b, c) => a * b * c;
const onceFn = once(fn);

console.log(onceFn(5, 7, 4)); // Output: 140
console.log(onceFn(2, 3, 6)); // Output: undefined
console.log(onceFn(4, 6, 8)); // Output: undefined

 
