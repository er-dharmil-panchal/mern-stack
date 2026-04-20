# Status Codes in HTTP

Status codes are three-digit numbers that indicate the outcome of an HTTP request. They are part of the HTTP response and provide information about whether the request was successful, encountered an error, or requires further action from the client.

## Common Status Codes:

- **200 OK**: The request was successful.
- **404 Not Found**: The requested resource could not be found.
- **500 Internal Server Error**: An error occurred on the server while processing the request.

## Range of Status Codes:

- Informational (100-199): Indicates that the request was received and is being processed.
- Success (200-299): Indicates that the request was successfully received, understood, and accepted.
- Redirection (300-399): Indicates that further action is needed to complete the request.
- Client Error (400-499): Indicates that the request contains bad syntax or cannot be fulfilled.
- Server Error (500-599):   that the server failed to fulfill a valid request.

## Real life example for each 5 categories of status codes:

- **Informational (100-199)**: When you send a request to a server, it might respond with a 100 Continue status code, indicating that the initial part of the request has been received and the client should continue with the rest of the request. For example, when uploading a file, the server might respond with 100 Continue to indicate that it is ready to receive the file data.
- **Success (200-299)**: When you successfully retrieve a webpage, the server responds with a 200 OK status code, indicating that the request was successful and the content is being returned. For example, when you visit a website, the server responds with 200 OK to indicate that the page has been successfully loaded.
- **Redirection (300-399)**: When you try to access a webpage that has been moved to a new URL, the server might respond with a 301 Moved Permanently status code, indicating that the resource has been permanently moved to a new location. For example, if you try to access `http://example.com/old-page`, the server might respond with 301 Moved Permanently and redirect you to `http://example.com/new-page`.
- **Client Error (400-499)**: When you try to access a webpage that does not exist, the server responds with a 404 Not Found status code, indicating that the requested resource could not be found. For example, if you try to access `http://example.com/nonexistent-page`, the server will respond with 404 Not Found to indicate that the page does not exist.
- **Server Error (500-599)**: When there is an unexpected error on the server while processing a request, it might respond with a 500 Internal Server Error status code, indicating that the server encountered an error and could not complete the request. For example, if there is a bug in the server's code or a database connection issue, the server might respond with 500 Internal Server Error to indicate that something went wrong on the server side.


## Code Example:
```javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  // Simulate a successful response
  res.status(200).json({ message: 'Users retrieved successfully' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```