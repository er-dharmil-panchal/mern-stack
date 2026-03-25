# Express Middleware

## What Is Middleware?
Middleware is a function that has access to:
- the request object (`req`)
- the response object (`res`)
- the next middleware function (`next`) in the application's request-response cycle

It can perform operations on the request/response, then either:
- send a response back to the client, or
- call `next()` to pass control to the next middleware or route handler.

## Basic Request-Response Flow in Express
Example:
1. Client sends a `GET` request to the server at `/api/users`.
2. The Express server receives it through the route handler: `app.get('/api/users', (req, res) => {})`.
3. The server processes the request and sends a response back with `res.json(users)`.

## Flow When Middleware Is Used
1. Client sends a `GET` request to the server at `/api/users`.
2. The request first goes through middleware, which can perform operations on request/response objects.
3. After middleware is done, it calls `next()` to pass control to the next middleware or route handler.
4. The route handler processes the request and sends a response back with `res.json(users)`.

Middleware has the power to decide whether to:
- pass control forward using `next()`, or
- send a response directly.

If middleware finds something wrong with the request, it can send a response without calling `next()`, and the route handler will not execute.

## Four Types of Middleware in Express
1. **Application-level middleware**
	- Used for operations on request/response objects for all routes in the app.
	- Defined using `app.use()`.
	- Example: Logging every request URL, or parsing JSON data.

2. **Router-level middleware**
	- Used for operations on request/response objects for all routes in a specific router.
	- Defined using `router.use()`.
	- Example: Run authentication checks only on `/dashboard`, not on `/home`.

3. **Built-in middleware**
	- Provided by Express for common operations.
	- Examples: `express.json()` to parse request body as JSON, `express.static()` to serve static files.

4. **Error-handling middleware**
	- Used to handle errors in the application.
	- Defined using `app.use()` with 4 parameters: `(err, req, res, next)`.

## Why Use Middleware?
1. Perform operations on request/response before they reach route handlers.
2. Perform operations on request/response after they leave route handlers.
3. Handle application errors.
4. Create reusable code across multiple routes.
5. **Security:** Block unauthorized users before database logic.
6. **Data parsing:** Clean/format data before main logic uses it.
7. **Modularity:** Keep code clean by separating concerns (for example, logging separate from business logic).

## Why Not Just Call Functions Manually?
If there are 100 routes and all need the same method, you would call that function 100 times manually. With middleware, you configure it once and it applies automatically to all matching routes.

## Table Comparison
| Scenario | Manual Function Call | Middleware Pattern |
|---|---|---|
| New Route | Must remember to call the function. | Automatically protected/processed. |
| Error | Manual if/else or try/catch. | `next(err)` handles it globally. |
| Scaling | Code gets messy and repetitive. | Code stays clean and modular. |
| Ordering | You control it inside the route. | Express controls it via the "stack." |

## Note
The primary problem middleware solves is **concern separation** and **centralized control**.

## Simple 3-Middleware Example (Concept)
Client -> m1 (check whether user is a hacker or not) -> m2 (check whether user is admin or not) -> m3 (check whether user is active or not) -> route handler (send response back to client)
