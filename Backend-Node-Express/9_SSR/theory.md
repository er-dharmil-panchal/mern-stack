# Server-Side Rendering (SSR)

> Till now we are doing only JSON response from our backend. But in some cases, we want to send the complete HTML page from the server. This is where Server-Side Rendering (SSR) comes into play.

## What is SSR?

- Server-Side Rendering (SSR) is a technique where the server generates the complete HTML for a web page and sends it to the client. This allows the client to see the content immediately without waiting for JavaScript to load and execute.

- Example of SSR in Express:

```javascript
app.get('/users', (req, res) => {
     const html = `
     <ul>
          ${users.map(user => `<li> ${user.first_name} </li>`).join("")}
     </ul>
     `
     res.send(html)
})
```

## Benefits of SSR
- Faster initial load time: Since the server sends a fully rendered HTML page, the user can see the content immediately without waiting for JavaScript to load and execute.
- Better SEO: Search engines can crawl and index the fully rendered HTML content more effectively.
- Improved accessibility: Users with disabilities or those who have JavaScript disabled can still see the content.

## Drawbacks of SSR
- Increased server load: The server has to render the HTML for each request, which can be resource-intensive, especially for complex applications.
- Slower subsequent interactions: After the initial load, interactions may be slower compared to client-side rendering (CSR) because the server has to handle each request and render the HTML again.
- Complexity: Implementing SSR can be more complex than CSR, especially when dealing with state management and client-side interactivity.

## When to and When not to use SSR (as per Industrial Standards)
- Use SSR when:
  - SEO is a priority for your application.
  - You want to improve the initial load time for users.
  - Your application has a lot of static content that doesn't change frequently.
- Avoid SSR when:
  - Your application is highly interactive and relies heavily on client-side JavaScript.
  - You have a large number of users and want to minimize server load.
  - You want to take advantage of modern client-side frameworks and libraries that are optimized for client-side rendering. (e.g., React, Vue, Angular)

## Conclusion
- SSR can be a powerful technique for improving the performance and SEO of web applications, but it may not be suitable for all use cases. It's important to consider the specific requirements of your application and weigh the benefits and drawbacks before deciding to implement SSR.


---

## EJS (Embedded JavaScript) 🚀

EJS is a **templating engine** that lets you generate dynamic HTML on the server by embedding JavaScript directly into your HTML files.

---

### 💡 Why use EJS instead of plain HTML/JS?

| Feature | Plain SSR (Strings/HTML) | EJS Templating |
| :--- | :--- | :--- |
| **Logic** | Complex string concatenation in `.js` files. | Clean `if/else` and `loops` inside HTML. |
| **Dynamic Data** | Hard to inject variables into static `.html`. | Use `<%= data %>` to inject values instantly. |
| **Maintenance** | Messy; UI and Logic are tangled. | Organized; HTML structure stays in `.ejs` files. |

---

### 🛠 The "Real Life" Problem Solver
**Problem:** In SSR, creating dynamic lists (like a user feed) using standard JS strings is a nightmare to read and debug.  
**EJS Solution:** It allows you to write standard HTML and use JS tags to "fill in the blanks" before the server sends the final page to the client.

---

### ⚡ Quick Facts
*   **SSR Focus:** Rendering happens on the **server**, reducing the JavaScript load on the user's browser. 🖥️
*   **Server Load:** EJS doesn't magically reduce server load, but using **partials** (reusable components) and **caching** makes the execution more efficient.
*   **Files:** Instead of `.html`, you use the `.ejs` extension.

### EJS (Embedded JavaScript) 🚀

EJS is a **templating engine** that generates dynamic HTML on the server by embedding JavaScript directly into HTML files.

---

### 💡 Why not `.html` + `.js`? 
Standard `.html` is **static**—it cannot "read" data or run loops. Without EJS, you'd have to:
1.  **CSR:** Use heavy client-side JS to fetch and inject data (slower for SEO).
2.  **Messy Strings:** Use complex string concatenation in Node.js to "build" HTML manually.

**EJS solves this** by acting as a bridge, allowing the server to "pre-fill" HTML with data using simple tags before sending it to the client.


### 📝 Summary
EJS removes messy string manipulation by embedding logic directly into HTML. It keeps code organized while allowing the server to inject dynamic data seamlessly. 🚀
