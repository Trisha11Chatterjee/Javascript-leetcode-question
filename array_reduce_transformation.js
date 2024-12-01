/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // Initialize the accumulator with the initial value
    let accumulator = init;
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Update the accumulator by applying the function `fn`
        accumulator = fn(accumulator, nums[i]);
    }
    
    // Return the final value of the accumulator
    return accumulator;
};

// Example 1
const nums1 = [1, 2, 3, 4];
const sum = function(accum, curr) { return accum + curr; };
console.log(reduce(nums1, sum, 0)); // Output: 10

// Example 2
const nums2 = [1, 2, 3, 4];
const sumSquares = function(accum, curr) { return accum + curr * curr; };
console.log(reduce(nums2, sumSquares, 100)); // Output: 130

// Example 3
const nums3 = [];
const sumEmpty = function(accum, curr) { return 0; };
console.log(reduce(nums3, sumEmpty, 25)); // Output: 25

