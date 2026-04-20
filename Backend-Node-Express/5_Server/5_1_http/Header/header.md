# Http Headers in API

- An HTTP header is a field in an HTTP request or response that provides essential metadata and context about the communication between a client (like a web browser) and a server.
- Headers are used to convey information such as content type, caching directives, authentication credentials, and more.
- headers carry request and response metadata.

# Key characteristics of HTTP Headers:

- **Format**: They are formatted as case-insensitive key-value pairs separated by a colon (e.g., Header-Name: header-value).
- **Placement**: In an HTTP message, headers are located after the start line (request or status line) and before the message body.
- **Visibility**: They are usually invisible to the end user but can be viewed using tools like Chrome DevTools or Firefox Developer Tools. 
Postman Blog

# Example:

- You send a mail to your friend.. 
- At the cover page of the mail, you write the name of your friend, the address, and the subject of the mail..
- so this is the header of the mail, it contains all the necessary information about the mail, and the content of the mail is written inside the mail.

# Real Example:
```http
GET /api/users HTTP/1.1
Host: example.com
Authorization: Bearer your_token_here
Accept: application/json
```  

# Code:
```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-My-Name', 'Dharmil');

  console.log('Headers sent to the client');
  console.log(res.getHeaders());

  // Responding with a JSON object
  res.json({ message: 'Headers received' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
In this example, we have an Express server that listens for GET requests to the `/api/users` endpoint. When a request is received, it accesses the `Authorization` and `Accept` headers from the incoming request and logs them to the console. Finally, it responds with a JSON object confirming that the headers were received.

## Output:
[Object: null prototype] 

>{  
      'x-powered-by': 'Express',  
  'content-type': 'application/json',  
  'X-My-Name': 'Dharmil'  
}


# Always use X prefix for custom headers to avoid conflicts with standard headers. For example, instead of using `My-Name`, use `X-My-Name`.

---

The express.urlencoded() middleware check the headers of the incoming request to determine if the content type is `application/x-www-form-urlencoded`. If it is, the middleware will parse the request body and make it available in `req.body`. If the content type does not match, the middleware will not process the body, and `req.body` will be undefined.

- otherwise if the data is json format then express.urlencoded() will not work and you need to use express.json() middleware to parse the json data.