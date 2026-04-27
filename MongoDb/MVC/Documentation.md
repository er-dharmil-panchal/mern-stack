# MVC Architecture Documentation 🏗️

## Overview
The **Model-View-Controller (MVC)** is an architectural pattern that separates an application into three main logical components to promote modularity and code reusability.


![Image of MVC architectural pattern diagram](https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png)



## Components

### 1. Model (M) 💾
- **Responsibility:** Manages data, business logic, and rules.
- **Action:** Handles database interactions, API calls, and validation.
- **Independence:** Knows nothing about the View or Controller.

### 2. View (V) 🖥️
- **Responsibility:** Displays data to the user.
- **Action:** Renders the UI (HTML/CSS, layouts).
- **Independence:** Only displays what it is given; does not process business logic.

### 3. Controller (C) 🧠
- **Responsibility:** The brain of the app.
- **Action:** Listens to user input, processes it, updates the Model, and tells the View what to show.

## The Flow 🔄
1. **Request:** User interacts with the UI.
2. **Process:** Controller intercepts the input.
3. **Logic:** Controller asks Model to update or fetch data.
4. **Refresh:** Controller selects the appropriate View to render the new state.

## Benefits ✅
- **Separation of Concerns:** Easier to maintain and scale.
- **Parallel Development:** Work on UI and logic simultaneously.
- **Testability:** Decoupled components are easier to unit test.