/**
 *   Node.js HTTP Module & Request Handling.
 * 
 *   FEATURES: Server Creation, Header Inspection, Manual Routing, and Log Persistence.
 */

// 🔥 Industrial tip - always name your main js file as index.js
const http = require('http'); // Built-in Node.js module for networking and server operations

// -------------------------------------------------------------------------
// SECTION 1: BASIC SERVER INITIALIZATION
// -------------------------------------------------------------------------

// -> Making First server using http
// http.createServer() instantiates a new web server.
const myServer = http.createServer(); // Done

/**
 * -> Handling the server: defining tasks for specific requests.
 * We must provide a 'Handler Function' (Request Listener) as an argument 
 * to the createServer method to process incoming traffic.
 */
const server = http.createServer((req, res) => {
     /**
      * req (Request Object): Contains details of the incoming request 
      * (e.g., user metadata, IP address, URL, and HTTP methods).
      * * res (Response Object): Used to send data back to the client 
      * and close the connection.
      */

     console.log('New Request Received...');
     
     // req.headers: Contains extra metadata (User-Agent, Content-Type, Host, etc.)
     console.log(req.headers); 
     // Note: use console.log(req) to inspect the complete raw request object.

     /*
          The 'req' is an object that represents the incoming HTTP request, 
          detailing what was requested, how it was requested, and the origin.
     */

     // Example: Greets the user whenever a request is made to this server.
     res.end('Hello User! Again');
});

/**
 * To run the server, we bind it to a 'Port Number'.
 * The server will 'listen' for incoming requests on this specific gateway.
 */
server.listen(8000, () => {
     // Callback for the developer to verify the server is active and healthy.
     console.log('server started ! (This is for developer that show if every thing is okay this msg will appeare)');
});


// -------------------------------------------------------------------------
// SECTION 2: LOGGING SERVER WITH MANUAL ROUTING
// -------------------------------------------------------------------------

// 🔥 lets make real time log entry on a web server
const fs = require('fs'); // File System module for log persistence

const logServer = http.createServer((req, res) => {
     // Generating a timestamped log string for every request.
     const log = `${Date.now()}: ${req.url} New Req Received\n`;

     /**
      * Asynchronous Logging:
      * fs.appendFile offloads the file writing task to the Libuv Thread Pool.
      * The callback executes only after the log has been successfully written.
      */
     fs.appendFile("log.txt", log, (err, data) => {
          // Manual Routing: Directing users based on the req.url path.
          switch(req.url) {
               case '/' : 
                    res.end('Home page');
                    break;
               case '/About' : 
                    res.end('About page');
                    break;
               case '/Contact' : 
                    res.end('contact page');
                    break; // break ensures logic doesn't fall through to default
               default: 
                    res.end('404! Not Found');
          }
     });
});

// Running the logging server on a different port (5000).
logServer.listen(5000, () => {
     console.log('The log server is started');
});

// 🔥 IMP - This is outdated, just learning as a base of how Node.js handles raw HTTP traffic before moving to production-grade frameworks like Express or NestJS.