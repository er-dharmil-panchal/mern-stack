
// 1. Import
const express = require("express");
// console.log(express)

// 2. Initialize
// Now we have to initialize the express application which will act like a handler function as we have seen in Node.js
const app = express();

// We can use the app object to create routes and handle requests. For example, let's create a simple route that responds to GET requests at the root URL ("/"):

// 3. Create a route (The Path)
app.get("/", (req, res) => {
  res.send("Hello, World! - The server is running...");
});

app.get('/About', (req, res) => {
     res.send('This is the about page \n'+ req.query.name); // we can also use query parameters in express
});

// Unlike in http we have to use url to prevent query parameters and other things that can be added to the url,
// express will handle it for us and we can directly use the path to create routes.

// 4. Listen on a port (Start the server)
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});