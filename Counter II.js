/**
 * @param {number} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: function() {
            currentValue += 1;
            return currentValue;
        },
        decrement: function() {
            currentValue -= 1;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
};

/**
 * Example Usage:
 */
const counter = createCounter(5);

console.log(counter.increment()); // Output: 6
console.log(counter.reset());     // Output: 5
console.log(counter.decrement()); // Output: 4
