# 🚀 Node.js & NPM Basics

## 🟢 Running Node.js
To execute a file (e.g., `Basics.js`), use the following command in your terminal:

```bash
node Basics.js
# or
node Basics
```
### ⚠️ Node.js vs. Browser Environment

* **No DOM/Window:** You cannot use `window`, `document`, or `alert()` inside Node.js. These are **Web APIs** provided by the browser, not the JavaScript engine itself.
* **V8 Engine:** While both the browser and Node.js use the V8 engine, Node.js embeds V8 within a **C++ environment** (using the Libuv library) to handle File Systems and Networking, whereas the browser embeds it in a sandbox for web page manipulation.
* **New Features:** Node.js introduces server-side features like `require()` (CommonJS) and `module.exports` which are not natively available in the standard browser environment without a bundler.

[Image of Node.js architecture vs Browser architecture]

---

### 🔥 NPM (Node Package Manager)

#### 1. What is NPM?
It is the default package manager for Node.js used to:
* **Install external libraries** (packages).
* **Manage project dependencies.**
* **Run project scripts.**

**Example Libraries:**
* **Express.js:** Backend framework.
* **Mongoose:** MongoDB ORM.
* **dotenv:** Environment variables management.

#### 2. Installing Packages
**Command:** `npm install express`

**Internal Process:**
1.  Connects to the **NPM Registry** (online repository).
2.  Downloads the package files.
3.  Stores them in the `node_modules/` folder.

**Project Structure:**
```text
my-project/
├── node_modules/     # Downloaded package files (do not edit)
├── package.json      # Project metadata and dependency list
└── index.js          # Your entry file
```
### 3. npm init (Creating package.json)
**Command:** `npm init` (or `npm init -y` to skip questions).

**Internal Process:**
* NPM creates a `package.json` file in your project directory.
* This file acts as the **manifest** for your project, managing metadata and dependencies.

**Example `package.json` content:**
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {}
}
```

**Why it's important:** It describes your entire project structure and requirements

| Field | Purpose |
| :--- | :--- |
| **name** | Project name |
| **version** | Project version |
| **main** | Entry file (e.g., `index.js`) |
| **scripts** | Commands to run (shortcuts) |
| **dependencies** | List of installed libraries |

---

### 4. Installing Dependencies Automatically
**Command:** `npm install` (run this after `package.json` is created or when cloning a project).

**What happens internally:**
* **Reads JSON:** npm reads the `dependencies` listed in your `package.json`.
* **Auto-Download:** It automatically installs all required packages into `node_modules`.
* **Collaboration:** This is useful when sharing your project; others can simply run `npm install` to get all dependencies without you sending them the heavy `node_modules` folder.

---

### 5. Running Projects with npm Scripts
An **npm script** is a shortcut name for a terminal command, not just a file name.

**Command:** `npm start`

**What happens internally:**
* **Lookup:** npm looks for the `"start"` script defined in `package.json`.
* **Execute:** It executes the command associated with `"start"` (e.g., `node index.js`).

**Example `package.json` with scripts:**
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node Basics.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {}
}
```

**Benefits of using npm scripts:**
* **Simplifies Execution:** Use `npm start` instead of typing `node Basics.js` every time.
* **Customization:** Allows you to define custom commands for building, testing, or deploying your project.

---

### 6. Summary

| Command | Purpose |
| :--- | :--- |
| `npm init` | Create `package.json` |
| `npm install <name>` | Install a specific library |
| `npm install` | Install all dependencies from the list |
| `npm start` | Run the project script |

> [!IMPORTANT]
> **node_modules** should **never** be pushed to GitHub. Instead, push `package.json` and `package-lock.json`. This allows others to run `npm install` to get the dependencies themselves.