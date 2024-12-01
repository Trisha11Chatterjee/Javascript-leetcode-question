/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    // Initialize an empty array to store the results
    const result = [];
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Apply the function `fn` to each element and its index
        result.push(fn(arr[i], i));
    }
    
    // Return the transformed array
    return result;
};


// Example 1
const arr1 = [1, 2, 3];
const plusone = function(n) { return n + 1; };
console.log(map(arr1, plusone)); // Output: [2, 3, 4]

// Example 2
const arr2 = [1, 2, 3];
const plusI = function(n, i) { return n + i; };
console.log(map(arr2, plusI)); // Output: [1, 3, 5]

// Example 3
const arr3 = [10, 20, 30];
const constant = function() { return 42; };
console.log(map(arr3, constant)); // Output: [42, 42, 42]
