/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
};

/**
 * Example Usage:
 */
try {
    console.log(expect(5).toBe(5)); // Output: true
} catch (error) {
    console.log({ error: error.message });
}

try {
    console.log(expect(5).toBe(null)); // Throws "Not Equal"
} catch (error) {
    console.log({ error: error.message });
}

try {
    console.log(expect(5).notToBe(null)); // Output: true
} catch (error) {
    console.log({ error: error.message });
}

try {
    console.log(expect(5).notToBe(5)); // Throws "Equal"
} catch (error) {
    console.log({ error: error.message });
}


