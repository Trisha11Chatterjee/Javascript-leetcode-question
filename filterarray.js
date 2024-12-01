/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // Initialize an empty array to store the filtered results
    const filteredArr = [];
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        // Apply the filtering function `fn` to the element and its index
        if (fn(arr[i], i)) {
            // If `fn` returns a truthy value, add the element to the filtered array
            filteredArr.push(arr[i]);
        }
    }
    
    // Return the filtered array
    return filteredArr;
};

// Example 1
const arr1 = [0, 10, 20, 30];
const greaterThan10 = function(n) { return n > 10; };
console.log(filter(arr1, greaterThan10)); // Output: [20, 30]

// Example 2
const arr2 = [1, 2, 3];
const firstIndex = function(n, i) { return i === 0; };
console.log(filter(arr2, firstIndex)); // Output: [1]

// Example 3
const arr3 = [-2, -1, 0, 1, 2];
const plusOne = function(n) { return n + 1; };
console.log(filter(arr3, plusOne)); // Output: [-2, 0, 1, 2]
