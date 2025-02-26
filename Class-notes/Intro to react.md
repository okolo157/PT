# Introduction to React and JSX

## What is React?
React is a JavaScript library for building user interfaces, developed by Facebook (now Meta) and open-sourced in 2013. It powers applications like Facebook, Instagram, Netflix, and Airbnb.

## Core Concepts

### Component-Based Architecture
- Components are the building blocks of React applications
- Each component is a self-contained module managing its own state and rendering
- Components can be class-based or functional (modern React primarily uses functional components)
- Components can be nested and reused throughout the application

### Virtual DOM
- Efficient UI updates without full page reloads
- Acts as a lightweight copy of the actual DOM
- Enables React's reconciliation process for optimal rendering

### Declarative Programming
- Specify desired UI state, React handles the rendering
- Focus on what you want to achieve rather than how to do it
- Makes code more predictable and easier to debug

## JSX Deep Dive

### Basic Syntax
```jsx
// Basic JSX syntax
const element = <h1>Hello, World!</h1>;

// JSX with JavaScript expressions
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;

// Multi-line JSX needs parentheses
const component = (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);
```

### JSX Rules and Conventions
1. **Single Parent Element**
   - JSX must return a single parent element
   - Use fragments `<>...</>` to avoid unnecessary div wrappers
   ```jsx
   return (
     <>
       <h1>Title</h1>
       <p>Content</p>
     </>
   );
   ```

2. **className Instead of class**
   - Use `className` for CSS classes
   ```jsx
   const element = <div className="container">Content</div>;
   ```

3. **JavaScript Expressions in JSX**
   ```jsx
   const user = {
     name: "John",
     age: 25
   };
   
   const profile = (
     <div>
       <h2>{user.name}</h2>
       <p>Age: {user.age}</p>
       <p>Can vote: {user.age >= 18 ? 'Yes' : 'No'}</p>
     </div>
   );
   ```

## Components in Practice

### Functional Components
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// Arrow function syntax
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
};
```

### Props
- Props are read-only
- Used to pass data from parent to child components
```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Role: {props.role}</p>
    </div>
  );
}

// Usage
<UserCard name="John" role="Developer" />
```

## State Management

### useState Hook
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## Setting Up Development Environment

### Required Tools
1. **Node.js and npm**
   - Download from nodejs.org
   - Verify installation: `node -v` and `npm -v`

2. **Create React App**
   ```bash
   npx create-react-app my-app
   cd my-app
   npm start
   ```

### Project Structure
```
my-app/
  ├── node_modules/
  ├── public/
  │   ├── index.html
  │   └── manifest.json
  ├── src/
  │   ├── App.js
  │   ├── index.js
  │   └── components/
  ├── package.json
  └── README.md
```

## Best Practices

1. **Component Organization**
   - One component per file
   - Use meaningful component names
   - Group related components in folders

2. **Code Style**
   - Use consistent naming conventions
   - Follow ESLint and Prettier configurations
   - Comment complex logic

3. **Performance Considerations**
   - Use React.memo for performance optimization
   - Avoid unnecessary re-renders
   - Implement proper key props in lists

## Additional Resources

1. **Official Documentation**
   - [React Documentation](https://react.dev/)
   - [Create React App Documentation](https://create-react-app.dev/)

2. **Community Resources**
   - React Developer Tools browser extension
   - React Discord community
   - Stack Overflow React tag

## Practice Exercises
1. Create a simple counter component
2. Build a todo list with add/remove functionality
3. Implement a form with controlled components
4. Create a component that fetches and displays data from an API
