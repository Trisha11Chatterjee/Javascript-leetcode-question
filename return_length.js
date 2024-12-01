/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    // The `args` parameter collects all arguments into an array-like structure.
    // Simply return the length of the `args` array.
    return args.length;
};

/**
 * Example Usage:
 */
console.log(argumentsLength(1, 2, 3)); // Output: 3
console.log(argumentsLength(5));      // Output: 1
console.log(argumentsLength({}, null, "3")); // Output: 3
console.log(argumentsLength());       // Output: 0



 
