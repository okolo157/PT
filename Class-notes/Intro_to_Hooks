# React Hooks Guide

## Overview
Hooks add special features to React components, enabling state management and lifecycle features in functional components.

## Types of State

### 1. UI State
Controls visual elements on screen
- Button disabled states
- Modal visibility
- Dropdown open/closed states

### 2. Data State
Manages application data
- Form input values
- API response data
- Lists and collections

### 3. Communication State
Tracks external interactions
- API request status
- Network connectivity
- Loading states

### 4. Session State
Manages user session information
- User authentication data
- Shopping cart contents
- User preferences

## Core Hooks

### useState
```jsx
const [state, setState] = useState(initialState);
```

Key components:
- `state`: Current state value
- `setState`: State update function
- `initialState`: Starting state value

#### Example: Counter Component
```jsx
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

### useEffect
Manages side effects in components. Executes code on component render or state updates.

#### Example: Input Logger
```jsx
import React, { useState, useEffect } from "react";

function Logger() {
  const [value, setValue] = useState("");
  
  useEffect(() => {
    console.log("Value changed to:", value);
  }, [value]); // Dependency array - effect runs when 'value' changes
  
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
