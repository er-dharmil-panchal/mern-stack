/*
     Http methods :
          - Get : to get data from the server
          - Post : to send data to the server
          - Put : to update data in the server
          - Patch : to update a part of the data in the server
          - Delete : to delete data from the server
*/

const fs = require('fs');
const http = require('http');
// ------------------------
// Get method - When we want to get data from the server
// ------------------------
// whenever we enter the url in the browser and hit enter, the browser sends a get-request (By default) to the server

// ------------------------
// Post method - When we want to send data to the server
// ------------------------
// Whenever we submit a form, the browser sends a post-request to the server
// - Like when we fill a form and click on the submit button, the browser sends a post-request to the server with the data that we have filled in the form
// - real-life example : Instagram - when we create an account using email and password, the browser sends a post-request to the server with the email and password that we have filled in the form

// ------------------------
// Put method - When we want to update data in the server
// ------------------------
// Whenever we want to update data in the server, we can use the put method
// - real-life example : : When we click "Edit Profile" and hit save—it sends our Name, Bio, Username, and Website link all over again to replace the old ones.

// ------------------------
// Patch method - When we want to update a part of the data in the server
// ------------------------
// Whenever we want to update a part of the data in the server, we can use the patch method
// - real-life example :When we "Like" a post—it only sends a tiny bit of data to change the status of that one button from "off" to "on."

// PUT replaces the entire resource with a new version, while PATCH only updates the specific fields you send.


// ------------------------
// Delete method - When we want to delete data from the server
// ------------------------
// Whenever we want to delete data from the server, we can use the delete method
// - real-life example : When we want to delete our account from a website, we can use the delete method


// our previous code:

const logServer = http.createServer((req, res) => {
     const log = `${Date.now()}: ${req.url} New Req Received\n`;
     fs.appendFile("log.txt", log, (err, data) => {
          switch(req.url) {
               case '/' : 
                    if(req.method === 'GET') {
                         res.end('Home page');
                    }
                    break;
               case '/signup' :
                    if(req.method === 'POST') {
                         // DB qurey.
                         res.end('Signup');
                    } else {
                         res.end('This is a signup page, only POST method is allowed');
                    }
                    break;
               default: 
                    res.end('404! Not Found');
          }
     });
});

// Running the logging server on a different port (5000).
logServer.listen(5000, () => {
     console.log('The log server is started');
});

// here if user enter in signup page then as a first time it will be GET request and it will show the message "This is a signup page, only POST method is allowed"
// but when user fill the form and click on submit button then it will be POST request and it will show the message "Signup"

// 🔥 IMP - This is outdated, just learning as a base of how Node.js handles raw HTTP traffic before moving to production-grade frameworks like Express or NestJS.
