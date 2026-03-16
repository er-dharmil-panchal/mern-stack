# Introduction to Node.js 🚀
### 1. What is Node.js?
- Node.js is a runtime environment for JavaScript that allows JavaScript to run outside the browser.
- t is mainly used to build backend applications, APIs, and scalable network services using JavaScript.
- JavaScript code is executed using engines like V8. 
- Node.js uses the V8 engine, which is written in C++, making it fast and enabling system-level features such as file handling, networking, and OS interaction that normal browser JavaScript cannot directly access.

>  Node.js allows us to use a single language (JavaScript/TypeScript) for both the frontend and the backend, making the development process highly efficient.


---

### 2. Core Architecture
Node.js is famous for its **Single-Threaded, Event-Driven, and Non-Blocking I/O** architecture.

* **V8 Engine:** Converts JS code into Machine Code.
* **Libuv:** A C++ library that handles the "heavy lifting" (File system, Networking, Concurrency).
* **Event Loop:** The "brain" that manages asynchronous tasks without stopping the main thread.



---

### 3. Key Characteristics
| Feature | Description |
| :--- | :--- |
| **Asynchronous** | Node never waits for an API or Database to return data; it moves to the next task. |
| **Fast** | Built on Google Chrome's V8 engine, which is incredibly efficient. |
| **Scalable** | Ideal for real-time applications like chat, streaming, and stock trackers. |
| **NPM** | Access to over 1 million packages to speed up development. |

---

### 4. When to Use Node.js?
* **Real-time applications** (Chat apps, Gaming servers).
* **Data Streaming** (Netflix-like services).
* **SPAs (Single Page Applications)**.
* **I/O Bound Applications** (Dashboards, APIs).

---

### 5. Simple "Hello World" Server
To run this, create a file named `app.js` and run `node app.js`.

```javascript

const name = "DP";
const welcomeMessage = `Hello ${name}! Node.js is running on your machine.`;

console.log(welcomeMessage);
console.log("Current Time:", new Date().toLocaleTimeString());

// A simple calculation demo
const buyPrice = 100;
const sellPrice = 150;
console.log("Profit Calculation Demo: $" + (sellPrice - buyPrice));
```

> you can use both require() and import in Node.js, while you are limited to import in the browser.

### 6. Install Node.js 
- **Download:** [nodejs.org/en/download](https://nodejs.org/en/download)
- **Best Practice:** Download the **LTS (Long Term Support)** version, which typically has an **even number** for better stability.
- **My Environment:**
     - **Node.js:** `v24.14.0`
     - **npm:** `11.9.0`