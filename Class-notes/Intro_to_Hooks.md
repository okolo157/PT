# React Hooks Guide

## Overview
React Hooks enable functional components to manage state and lifecycle events without using class components.

## Types of State

### 1. UI State
Controls visual elements on screen:
- Button disabled states
- Modal visibility
- Dropdown open/closed states

### 2. Data State
Manages application data:
- Form input values
- API response data
- Lists and collections

### 3. Communication State
Tracks external interactions:
- API request status
- Network connectivity
- Loading states

### 4. Session State
Manages user session information:
- User authentication data
- Shopping cart contents
- User preferences

---

## Core Hooks

### **useState**
Manages component state.

```javascript
const [state, setState] = useState(initialState);
```

#### **Example: Counter Component**
```javascript
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
```

---

### **useEffect**
Manages side effects in components. Executes code on component render or state updates.

#### **Example: Input Logger**
```javascript
import React, { useState, useEffect } from "react";

function Logger() {
  const [value, setValue] = useState("");
  
  useEffect(() => {
    console.log("Value changed to:", value);
  }, [value]); // Runs only when 'value' changes
  
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Logger;
```

---

### **useRef**
Maintains a reference to DOM elements or persistent values without triggering re-renders.

#### **Example: Focusing an Input Field**
```javascript
import React, { useRef, useEffect } from "react";

function FocusInput() {
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus(); // Auto-focuses input field on mount
  }, []);
  
  return <input ref={inputRef} type="text" placeholder="Auto-focused input" />;
}

export default FocusInput;
```

#### **useRef vs useState**
- `useRef` does **not** cause re-renders when its value changes.
- `useState` triggers a re-render when updated.

---

### **useMemo**
Optimizes performance by memoizing values to prevent unnecessary recalculations.

#### **Example: Expensive Computation**
```javascript
import React, { useState, useMemo } from "react";

function ExpensiveComponent({ number }) {
  const squaredNumber = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]);
  
  return <h2>Squared: {squaredNumber}</h2>;
}

export default ExpensiveComponent;
```

#### **When to Use useMemo**
- When computing **expensive calculations**.
- When dealing with **large data sets**.
- To **avoid unnecessary re-renders** in child components.



