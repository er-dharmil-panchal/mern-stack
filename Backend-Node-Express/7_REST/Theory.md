# REST API

Also called RESTful API (Representational State Transfer).

## What is REST API?

- There is server and client.
- Client sends a request to the server, and the server processes the request and sends back a response to the client.
- REST API, which stands for Representational State Transfer Application Programming Interface, is a set of rules and conventions for building web services that allow different applications to communicate with each other over the internet using standard HTTP methods.
- It allows for the creation of scalable and maintainable web services that can be easily consumed by a wide range of clients, including web browsers, mobile devices, and other applications.

## Some Rules of REST API

### 1. Server-Client Architecture

- REST API follows a client-server architecture where the client and server are separate entities that communicate with each other over a network.
- The client is responsible for making requests to the server, while the server is responsible for processing those requests and sending back responses.

#### Why this is a problem?

- The client is tightly coupled with the server, meaning any changes in the server-side implementation can affect the client's functionality.
- The server has control over the data format and structure, limiting the client's flexibility in handling the data.

#### Example

- Client requests something and server responds with HTML data.
- If client is browser then no worries, but what if it is a mobile app? It will not understand HTML data.
- Also here the server decides what data to send to the client, which makes client dependent on the server.
- Instead of sending HTML data, if server sends JSON data, then both browser and mobile app can understand it.
- Client can decide how to use that data, which makes client independent of the server.

- A good thing if we send direct data (not JSON) is we can save some time and bandwidth, but it will make client dependent on the server, which is not good.
- But if we know that the client will always be a browser, then we can send HTML data, which will save some time and bandwidth, and it will not make client dependent on the server, because browser can understand HTML data.

### 2. Always Respect All HTTP Methods

- REST API uses standard HTTP methods to perform operations on resources.
- The methods should be used according to their intended purpose.

#### Example of User Resource (route: /users)

- GET: Read user data and return it to the client.
- POST: Handle new user creation.
- PATCH: Update existing user data.
- DELETE: Remove user data from the server.

#### Not good things

- ❌ Using POST to update user data.
- ❌ Using POST to delete user data.

- Each HTTP method has a specific purpose and should be used accordingly to maintain the integrity of the API and ensure that it follows RESTful principles.

These are some of the rules of REST API. There are many more rules and best practices to follow when designing and implementing a RESTful API, but these are some of the fundamental ones that should be kept in mind.

With time we will learn more about REST API and its best practices.

## CSR vs SSR

| Aspect | Client-Side Rendering (CSR) | Server-Side Rendering (SSR) |
|---|---|---|
| Rendering Location | Rendering happens in the client's browser. | Rendering happens on the server. |
| Initial Load Time | Faster initial load time as only the necessary data is sent. | Slower initial load time as the entire page is rendered on the server. |
| SEO Optimization | Less SEO-friendly as search engines may struggle to index dynamically rendered content. | More SEO-friendly as search engines can easily index fully rendered pages. |
| User Experience | Can provide a more interactive and dynamic user experience as content can be updated without a full page reload. | May result in a less interactive experience as the entire page needs to be reloaded for updates. |
| Development Complexity | Generally simpler to implement as it relies on client-side JavaScript frameworks. | Can be more complex to implement as it requires server-side rendering logic and may involve additional server resources. |
| Performance | Can be faster for subsequent interactions after the initial load, as only data is fetched and rendered on the client. | Can be slower for subsequent interactions as the entire page needs to be re-rendered on the server for each request. |

- For Node and backend, usually we use SSR, because we mostly deal with browsers and API clients, and we want to provide better SEO and user experience.
- For React and frontend, usually we use CSR, because we want to provide a more interactive and dynamic user experience, and we don't have to worry about SEO as much.
