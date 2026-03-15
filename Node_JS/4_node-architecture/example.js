 
const fs = require('fs');


// blocking....


console.log('1')
const result = fs.readFileSync('theory.md','utf-8')
console.log(result)
console.log('2')

/*
     output
          1
          result
          2
*/

// non-blocking with same example


// console.log('1')
// const result = fs.readFile('theory.md','utf-8',(err,data) => {
//           console.log(data)
// })
// console.log('2')

/*
     output
          1
          2
          result
*/