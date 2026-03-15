//        File Overview: Node.js Module Fundamentals — Covers function exports,
//        module.exports vs. exports, require() path resolution,
//        and the difference between local and built-in module imports.


// ==========================================
// 1. MODULE DEFINITION & BASIC EXPORTS
// ==========================================

// Modules are reusable pieces of code that can be imported and used in other files.
// In Node.js, we can create a module by exporting functions or variables using the `module.exports` object.

// Example of a simple module that exports a function
function greet(name) {
     return `Hello, ${name}!`;
}

// Export the greet function
// 🔥 If we don't export the function, it will act like a private function and won't be accessible from other files.
// By exporting it, we can use it in other files by importing the module.
module.exports = greet;


// ==========================================
// 2. IMPORTING & PATH RESOLUTION
// ==========================================

// 🔥 For importing an module we have to use require object (its Node specific not applicable in JS).
// The require function is used to import modules in Node.js. It takes the path of the module as an argument and returns the exported object from that module.
// ./ is used to indicate that the module is in the same directory as the current file.
//  If the module is in a different directory, we can use ../ to navigate up one level in the directory structure.

const maths = require('./math');


// ==========================================
// 3. EXECUTION & LOGGING
// ==========================================

console.log(`the sum of 2 and 3 is ${maths.add(2, 3)}`); // Output: 5
console.log(`the difference of 5 and 2 is ${maths.subtract(5, 2)}`); // Output: 3

console.log(greet('Dp')); // Output: Hello, Dp`!

console.log(maths)

// if we pass string or number in the module.exports, it will be treated as a value and not as a function or variable.
// module.exports = "This is a string exported from the hello module";
// module.exports = 43
console.log(require('./hello'))


// ==========================================
// 4. DESTRUCTURING & EXTERNAL MODULES
// ==========================================

// 🔥 Direct access to the funtion of other module.
const { add, subtract } = require('./math');

// console.log(`the sum of 4 and 5 is ${add(4, 5)}`); // Output: 9
// console.log(`the difference of 10 and 3 is ${subtract(10, 3)}`); // Output: 7


// ==========================================
// 5. ADVANCED RULES & PRECEDENCE
// ==========================================

// 🔥 Multiple export using exports object in other file..,
// if module.export exist in other module then exports object will be ignored and only module.exports will be exported. So we can't use both together in the same file.
// console.log(math.multiply(2,4))
// console.log(math) // {multiply: [Function (anonymous)],divide: [Function (anonymous)],modulo: [Function (anonymous)] }

// 🔥 NOTE : module.export will override if there is more than 1 module.export, but in exports object we can use multiple time.
// 🔥 if we use ./ in require then it will find in our current directory., if we don't then it will look for the module in the node_modules folder.
//  So if we want to import a built-in module or a third-party module, we don't need to use ./ in require.
//  For example, to import the fs module, we can simply use require('fs') without ./ because it's a built-in module.