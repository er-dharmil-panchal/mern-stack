// Make a '/submit' function that jump to middleware if username is admin and print user if username is user and print guest if username is guest.
// also make html code form that submit the username to the server and display the result in the console. you can use postman to test the middleware function.

const express = require('express');
const app = express();
const Port = 3000;

app.use(express.urlencoded({ extended: true })); // to parse the form data
// what this Middleware does is it save the processed data in the req.body 
// like :-  req.body = ###(some processed data)###
 

// Practice 1: Create a middleware function that checks if the username is admin, user or guest and print the result in the console. You can use postman to test the middleware function.


// app.get('/', (req, res) => {
//      res.send(`
//           <form action="/submit" method="POST">
//                <input type="text" name="username" placeholder="Enter username">
//                <button type="submit">Submit</button>
//           </form>
//      `);
// });

// app.post('/submit', (req, res, next) => {
//      const username = req.body.username;
//      if (username === 'admin') {
//           next();
//      } else {
//           console.log('User user');
//           res.send('User user');
//      }
// });

// app.use((req, res) => {
//      console.log('User admin');
//      res.send('User admin');
// });

// app.listen(Port, () => {
//      console.log(`Server Started at PORT ${Port}`)
// })



// Practice 2: Manupulate req data from multiple middleware and count the number of middleware functions executed and send the result in the response. You can use postman to test the middleware function.

// app.get('/', (req, res) => {
//      res.send(`
//           <form action="/submit" method="POST">
//                <input type="text" name="username" placeholder="Enter username">
//                <button type="submit">Submit</button>
//           </form>
//      `);
// });

// app.post('/submit', (req, res, next) => {
//      const username = req.body.username;
//      req.username = username; // add username to req object
//      req.count_of_middleware = (req.count_of_middleware || 0) + 1; // count the number of middleware functions executed
//      next();
// });

// app.use((req, res, next) => {
//      console.log(`This is middleware 1 and the username is ${req.username}`);
//      req.count_of_middleware = (req.count_of_middleware || 0) + 1; // count the number of middleware functions executed
//      next();
// });

// app.use((req, res) => {
//      console.log(`User ${req.username}`)
//      res.send(`User ${req.username} and the count of middleware functions executed is ${req.count_of_middleware}`);
// });

// app.listen(Port, () => {
//      console.log(`Server Started at PORT ${Port}`)
// })


// Practice 3: create a middleware that log the time, method and path in log.txt file.

app.use((req, res, next) => {
     const log = `${new Date().toISOString()} - ${req.method} - ${req.path}\n`;
     require('fs').appendFile('log.txt', log, (err) => {
          if (err) {
               console.error('Error writing to log file', err);
          }
     });
     next();
});

app.get('/', (req, res) => {
     res.send("This is home page")
});

app.get('/about', (req, res) => {
     res.send("This is about page")
});

app.listen(Port, () => {
     console.log(`Server Started at PORT ${Port}`)
})

// we can send the response in the middleware function and end the request-response cycle, or we can pass the control to the next middleware function or route handler using the next() function.
// if we send the response in the middleware function, then the request-response cycle will be ended and the next middleware function or route handler will not be executed.
// But it is not a good practice to send the response in the middleware function, because it will make the code less modular and harder to maintain. It is better to pass the control to the next middleware function or route handler and send the response there.