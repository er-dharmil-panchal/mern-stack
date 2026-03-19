# Express.js Introduction

## What is Express.js?
- Express.js is a minimalist web framework for Node.js. It provides a robust set of tools to build web applications and APIs by simplifying the complex, low-level code of raw Node.


## The Problem: Raw Node.js
- You have to manually handle every single bit of data.
- The code gets messy ("Spaghetti Code") very fast.
- Simple tasks (like sending a photo or a JSON object) take 10+ lines of logic.

## The Solution: Express.js
- Express is a Framework , It sits on top of Node.js to make backend development :
     - Readable: Uses simple English-like logic.
     - Modular: Breaks code into small, reusable pieces (Middleware).
     - Fast: Handles the boring "plumbing" (parsing data, headers, status codes) automatically.

## The "Pipe" Concept.
- In Express, a request from a user is like water in a pipe. It goes through "Stations" (Middleware) before it reaches the end:
- User Request → [Check Login?] → [Check Permissions?] → [Send Data] → Response