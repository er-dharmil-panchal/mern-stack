//        File Overview: Advanced Exporting Techniques — Focuses on exporting multiple functions using module.exports objects,
//        using the exports shorthand, handling errors in math operations, and understanding export precedence.


// ==========================================
// 1. CORE FUNCTIONS & BASIC EXPORT
// ==========================================

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

// To export this module, we can use module.exports
module.exports = {
     add,
     subtract
} 

// 🔥 Can also do like this - it will give name for the function/value to access in other file
// module.exports = {
//      addFN: add,
//      subtractFN: subtract
// } 


// ==========================================
// 2. TESTING & IMPORT VALIDATION
// ==========================================

const hello = require('./hello');

console.log(hello); // Output: This is a string exported from the hello module


// ==========================================
// 3. MULTIPLE EXPORTS USING 'EXPORTS' OBJECT
// ==========================================

// 🔥 Multiple exports using exports object.
exports.multiply = function(a, b) {
    return a * b;
}

exports.divide = function(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}


// ==========================================
// 4. RULES OF PRECEDENCE & ARROW FUNCTIONS
// ==========================================

// 🔥 If we use module.exports and exports together, the exports object will be ignored and only the module.exports will be exported.
// module.exports = {
//     add,subtract
// }

// Arrow function with exports object
exports.modulo = (a, b) => {
    if (b === 0) {
        throw new Error('Cannot modulo by zero');
    }
    return a % b;
}