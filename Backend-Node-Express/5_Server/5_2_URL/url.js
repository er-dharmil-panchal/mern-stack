/**
 * Node.js URL Parsing and Routing.
 * 
 * FEATURES: URL Module Integration, Query Parameter Handling, and Pathname-based Routing.
 */

// -------------------------------------------------------------------------
// SECTION 1: UNDERSTANDING THE URL STRUCTURE
// -------------------------------------------------------------------------

/*
URL (Uniform Resource Locator) - The bridge between the client’s intent and your server’s logic.
It is a structured object.

Basic URL: https://www.google.com/

- Protocol (https://): HyperText Transfer Protocol Secure.
     - Defines how to communicate with the server.
     - It is a set of rules telling the browser how to communicate.
     - Examples:
          - https (secure - encrypted)
          - http (not secure)
          - ws (web socket for real-time communication)

- Domain (www.google.com):
     - The user-friendly name for my IP address (my server).
     - IP addresses are hard to memorize, so domains provide an easy-to-use alias.

- Path (/about):
     - The route path on the server.
     - In www.google.com/about/data, "/about" is the path.

- Query Parameters:
     - Parameters used to pass extra information through the URL.
     - Example: https://www.google.com/?client=safari
          
     - The Separator (?): The question mark acts as the boundary, signaling that the "Path" is finished and "Data" is starting.
     - The Key (client): The variable name the server is looking for.
     - The Value (safari): The data assigned to that key (identifying the browser).
*/

// -------------------------------------------------------------------------
// SECTION 2: URL MODULE AND SERVER INITIALIZATION
// -------------------------------------------------------------------------

// Using the 'url' module provides deep functionality for dissecting URL strings.
// Note: Built-in in Node.js, so 'npm install url' is generally not required for modern versions.
const url = require('url');
const http = require('http');

const localServer = http.createServer((req, res) => {
     // Parsing the incoming request URL
     const myUrl = url.parse(req.url);
     console.log(myUrl);

     /*
     // Almost everything is null when accessing via localhost without extra data
     Url {
       protocol: null,
       slashes: null,
       auth: null,
       host: null,
       port: null,
       hostname: null,
       hash: null,
       search: null,
       query: null,
       pathname: '/',
       path: '/',
       href: '/'
     }
     */

     // For search operations - URL: http://localhost:7000/about?name=Dharmil+panchal&age=18
     /*
     Url {
          protocol: null,
          search: '?name=Dharmil+panchal&age=18',
          query: 'name=Dharmil+panchal&age=18',
          pathname: '/about',
          path: '/about?name=Dharmil+panchal&age=18',
          href: '/about?name=Dharmil+panchal&age=18'
          }
     */
     res.end('helloo');
});

localServer.listen(7000, () => {
     console.log('Server is started on port 7000');
});

// -------------------------------------------------------------------------
// SECTION 3: ADVANCED ROUTING WITH QUERY PARAMETERS
// -------------------------------------------------------------------------

/* NOTE: If I pass a URL like http://localhost:7001/about?name=Dharmil+panchal&age=18, 
     the "about" case will fail if I use 'req.url' (as done in index.js).
     Instead, I use 'myUrl.pathname' to isolate the route from the data.
*/

const anotherServer = http.createServer((req, res) => {
     // Passing 'true' as the second argument parses the query string into a usable object.
     const myUrl = url.parse(req.url, true);  
     
     // query: [Object: null prototype] { name: 'Dharmil panchal', age: '18' }
     console.log(myUrl); 

     switch (myUrl.pathname) {
          case '/':
               res.end('Home page');
               break;
          case '/about':
               const user = myUrl.query.name;
               res.write('About page\n');
               // Output: My name is Dharmil panchal and My age is 18
               res.end(`My name is ${user} and My age is ${myUrl.query.age}`);      
               break;
          case '/contact':
               res.end('contact page');
               break; 
          default:
               res.end('404! Not Found');
     }
});

anotherServer.listen(7001, () => {
     console.log('Server is started on port 7001');
});

// -------------------------------------------------------------------------
// SUMMARY
// -------------------------------------------------------------------------

// This workflow represents how websites fetch and process data:
// User Request -> Server fetches from URL -> Logic processes data -> Server returns Response.

// 🔥 IMP - This is foundational. It demonstrates how Node.js handles raw HTTP traffic 
// before moving to production-grade frameworks like Express or NestJS.