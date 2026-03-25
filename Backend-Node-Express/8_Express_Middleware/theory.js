// lets create a simple middleware..

const express = require('express');
const app = express();
const Port = 3000;


// we have to set the next() function in the middleware to pass the control to the next middleware function or the route handler,
// otherwise the request will be stuck in the middleware and will not reach the route handler.
// can see using postman.

// if i write return res.end("Something") then the request will be ended and will not reach the next middleware function or the route handler.
app.use((req, res, next) => {
    console.log('This is a middleware function');
    next(); // pass control to the next middleware function or route handler
});
app.use((req, res, next) => {
    console.log('This is a middleware function 2');
    next(); // pass control to the next middleware function or route handler
});



app.listen(Port, () => {
     console.log(`Server Started at PORT ${Port}`)
})