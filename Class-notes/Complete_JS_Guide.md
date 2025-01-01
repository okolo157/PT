# Complete JavaScript Guide

## 1. Fundamentals

### JavaScript Basics
```javascript
// First program
console.log("Hello, World!");

// Comments
// Single-line comment
/* Multi-line
   comment */
```

### Variables and Data Types
```javascript
// Variable declaration
let name = "John";
const PI = 3.14159;
var oldWay = "deprecated"; // avoid

// Primitive types
let string = "text";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue;
let bigInt = 9007199254740991n;
let symbol = Symbol("description");

// Reference types
let array = [1, 2, 3];
let object = { key: "value" };
let func = () => {};
```

### Operators
```javascript
// Arithmetic
let sum = 5 + 3;
let product = 4 * 2;

// Comparison
let isEqual = 5 === "5"; // false
let isLoose = 5 == "5";  // true

// Logical
let and = true && false;
let or = true || false;
let not = !true;

// Ternary
let result = condition ? "yes" : "no";
```

## 2. Control Flow

### Conditionals
```javascript
// if-else
if (condition) {
    // code
} else if (otherCondition) {
    // code
} else {
    // code
}

// switch
switch (value) {
    case 1:
        // code
        break;
    default:
        // code
}
```

### Loops
```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
while (condition) {
    // code
}

// for...of (arrays)
for (const item of array) {
    console.log(item);
}

// for...in (objects)
for (const key in object) {
    console.log(object[key]);
}
```

## 3. Functions

### Function Types
```javascript
// Declaration
function add(a, b = 0) {
    return a + b;
}

// Expression
const multiply = function(a, b) {
    return a * b;
};

// Arrow function
const divide = (a, b) => a / b;

// Rest parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b);
```

## 4. Objects and Arrays

### Array Methods
```javascript
const arr = [1, 2, 3, 4, 5];

// Manipulation
arr.push(6);       // Add to end
arr.pop();         // Remove from end
arr.unshift(0);    // Add to start
arr.shift();       // Remove from start

// Transformation
const doubled = arr.map(x => x * 2);
const evens = arr.filter(x => x % 2 === 0);
const sum = arr.reduce((a, b) => a + b, 0);
```

### Object Operations
```javascript
const person = {
    name: "John",
    age: 30
};

// Destructuring
const { name, age } = person;

// Methods
Object.keys(person);    // ["name", "age"]
Object.values(person);  // ["John", 30]
Object.entries(person); // [["name","John"], ["age",30]]
```

## 5. Asynchronous JavaScript

### Promises
```javascript
const promise = new Promise((resolve, reject) => {
    // Async operation
    if (success) {
        resolve(result);
    } else {
        reject(error);
    }
});

// Usage
promise
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Async/Await
async function getData() {
    try {
        const result = await fetch(url);
        const data = await result.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
```

## 6. DOM Manipulation

### Element Selection
```javascript
// Selecting elements
const element = document.querySelector('.class');
const elements = document.querySelectorAll('.class');
const byId = document.getElementById('id');

// Modifying elements
element.textContent = 'New text';
element.innerHTML = '<span>HTML content</span>';
element.setAttribute('class', 'newClass');

// Event handling
element.addEventListener('click', (event) => {
    event.preventDefault();
    // Handle click
});
```

## 7. Modern JavaScript Features

### ES6+ Features
```javascript
// Template literals
const greeting = `Hello, ${name}!`;

// Spread operator
const newArray = [...oldArray];
const newObject = { ...oldObject };

// Modules
export const function1 = () => {};
import { function1 } from './module';

// Classes
class Person {
    constructor(name) {
        this.name = name;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}
```

## 8. Error Handling

### Try-Catch
```javascript
try {
    // Risky code
    throw new Error('Custom error');
} catch (error) {
    console.error(error);
} finally {
    // Cleanup code
}
```

## 9. Testing

### Jest Example
```javascript
describe('Calculator', () => {
    test('adds numbers correctly', () => {
        expect(add(2, 2)).toBe(4);
    });
});
```
