/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // Cache to store previously computed results
    const cache = new Map();
    let callCount = 0;

    // Function to handle arguments serialization (key generation)
    const serializeArgs = (args) => JSON.stringify(args);

    // Wrapper function with memoization
    const memoized = function(...args) {
        const key = serializeArgs(args); // Serialize arguments to create a cache key
        if (cache.has(key)) {
            return cache.get(key);
        }

        // If not in cache, call the function, cache the result, and increment call count
        const result = fn(...args);
        cache.set(key, result);
        callCount++;
        return result;
    };

    // Add a `getCallCount` method to retrieve the number of calls made to `fn`
    memoized.getCallCount = function() {
        return callCount;
    };

    return memoized;
}

/** 
 * Example Usage:
 */

// Example 1: `sum`
let callCount = 0;
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

console.log(memoizedSum(2, 2)); // 4
console.log(memoizedSum(2, 2)); // 4
console.log(memoizedSum.getCallCount()); // 1
console.log(memoizedSum(1, 2)); // 3
console.log(memoizedSum.getCallCount()); // 2

// Example 2: `factorial`
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(2)); // 2
console.log(memoizedFactorial(3)); // 6
console.log(memoizedFactorial(2)); // 2
console.log(memoizedFactorial.getCallCount()); // 2
console.log(memoizedFactorial(3)); // 6
console.log(memoizedFactorial.getCallCount()); // 2

// Example 3: `fib`
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const memoizedFib = memoize(fib);

console.log(memoizedFib(5)); // 8
console.log(memoizedFib.getCallCount()); // 1
