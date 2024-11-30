/**
 * @return {Function}
 */
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n; // Initialize the counter with the given value
    
    return function() {
        return count++; // Return the current value and increment the counter
    };
};

/**
 * Example Usage:
 */
const counter = createCounter(10);
console.log(counter()); // Output: 10
console.log(counter()); // Output: 11
console.log(counter()); // Output: 12

const counter2 = createCounter(-2);
console.log(counter2()); // Output: -2
console.log(counter2()); // Output: -1
console.log(counter2()); // Output: 0
console.log(counter2()); // Output: 1
console.log(counter2()); // Output: 2

