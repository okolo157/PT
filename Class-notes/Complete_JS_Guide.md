# Intro to JavaScript

## What is JavaScript?
JavaScript is a programming language that makes websites interactive. It's like giving instructions to your computer, similar to how you might give directions to a friend. When you click a button, submit a form, or see animations on a website, that's usually JavaScript in action!

## 1. Getting Started

### Your First Program
Let's start with the classic "Hello, World!" program:
```javascript
console.log("Hello, World!");
```
- `console.log()` is like a printer - it prints (shows) whatever you put inside the parentheses
- The text must be in quotes (") to show it's a "string" (programmer talk for text)

### Comments
Comments are notes you write for yourself or other programmers. The computer ignores them:
```javascript
// This is a single-line comment - computer ignores this!

/* This is a multi-line comment
   You can write as many lines as you want
   Computer will ignore all of this too! */
```

## 2. Variables - Storing Information

### What Are Variables?
Variables are like labeled boxes where you can store information. Think of them as containers with names:
```javascript
let playerName = "Mario";  // A box labeled "playerName" containing "Mario"
let score = 0;            // A box labeled "score" containing the number 0
```

### Ways to Create Variables
```javascript
// let - you can change what's in the box later
let age = 25;
age = 26;  // This is fine!

// const - the content can't be changed (constant)
const birthday = "January 1st";
// birthday = "February 1st";  // This would cause an error!

// Avoid using 'var' - it's an older way that can cause problems
```

### Types of Information You Can Store

#### Text (Strings)
```javascript
let message = "Hello there!";
let name = 'John';  // Single or double quotes work
let greeting = `Hello, ${name}!`;  // Template literal - can include variables inside
```

#### Numbers
```javascript
let age = 25;        // Regular number
let price = 9.99;    // Decimal number
let temperature = -5; // Negative number
```

#### True/False (Booleans)
```javascript
let isRaining = true;
let isSunny = false;
```

#### Lists (Arrays)
```javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4, 5];

// Getting items from the list
console.log(colors[0]);  // "red" - counting starts at 0!
console.log(colors[1]);  // "green"
```

#### Objects (Collections of Related Data)
```javascript
let person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Getting object information
console.log(person.name);  // "John"
console.log(person.age);   // 30
```

## 3. Basic Operations

### Math Operations
```javascript
let a = 5;
let b = 3;

let addition = a + b;      // 8
let subtraction = a - b;   // 2
let multiplication = a * b; // 15
let division = a / b;      // 1.666...

// Special operations
let remainder = 7 % 3;     // 1 (what's left after dividing 7 by 3)
let power = 2 ** 3;        // 8 (2 to the power of 3)
```

### Text Operations
```javascript
let firstName = "John";
let lastName = "Doe";

// Joining text (concatenation)
let fullName = firstName + " " + lastName;  // "John Doe"

// Modern way using template literals
let greeting = `Hello, ${firstName} ${lastName}!`;  // "Hello, John Doe!"
```

## 4. Making Decisions (Conditionals)

### If Statements
Like asking questions and doing different things based on the answer:
```javascript
let age = 15;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Sorry, you're too young to vote.");
}
```

### Multiple Conditions
```javascript
let temperature = 25;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature < 20) {
    console.log("It's cool.");
} else if (temperature < 30) {
    console.log("It's nice out!");
} else {
    console.log("It's hot!");
}
```

## 5. Repeating Tasks (Loops)

### For Loops
When you want to do something a specific number of times:
```javascript
// Count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
}

// Loop through a list
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(`I like ${fruit}s`);
}
```

### While Loops
Keep doing something while a condition is true:
```javascript
let lives = 3;
while (lives > 0) {
    console.log(`You have ${lives} lives left`);
    lives = lives - 1;
}
```

## 6. Functions - Reusable Code Blocks

### Basic Functions
Functions are like recipes - they're sets of instructions you can use over and over:
```javascript
// Creating a function
function greet(name) {
    return `Hello, ${name}!`;
}

// Using the function
console.log(greet("Alice"));  // "Hello, Alice!"
console.log(greet("Bob"));    // "Hello, Bob!"
```

### Arrow Functions (Modern Way)
A shorter way to write functions:
```javascript
// Regular function
function add(a, b) {
    return a + b;
}

// Same thing as an arrow function
const add = (a, b) => a + b;
```

## 7. Working with the Webpage (DOM)

### Finding Elements
```javascript
// Get an element by its ID
const title = document.getElementById('main-title');

// Get elements by their class
const buttons = document.getElementsByClassName('btn');

// Modern way to find elements
const firstButton = document.querySelector('.btn');
const allButtons = document.querySelectorAll('.btn');
```

### Changing Elements
```javascript
// Change text
title.textContent = "New Title";

// Change HTML
element.innerHTML = "<span>New Content</span>";

// Change styles
element.style.color = "red";
element.style.fontSize = "20px";
```

### Responding to Events
```javascript
const button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log("Button was clicked!");
});
```

## 8. Modern JavaScript Features

### Working with Arrays
```javascript
const numbers = [1, 2, 3, 4, 5];

// Transform all items
const doubled = numbers.map(num => num * 2);  // [2, 4, 6, 8, 10]

// Find items that match a condition
const evenNumbers = numbers.filter(num => num % 2 === 0);  // [2, 4]

// Calculate a single value from the array
const sum = numbers.reduce((total, num) => total + num, 0);  // 15
```

### Spreading Arrays and Objects
```javascript
// Copy arrays
const original = [1, 2, 3];
const copy = [...original];  // [1, 2, 3]

// Combine arrays
const array1 = [1, 2];
const array2 = [3, 4];
const combined = [...array1, ...array2];  // [1, 2, 3, 4]

// Copy objects
const person = { name: "John", age: 30 };
const personCopy = { ...person };
```

## 9. Handling Errors

### Try-Catch Blocks
Prevent your program from crashing when something goes wrong:
```javascript
try {
    // Attempt something that might fail
    const result = someRiskyOperation();
    console.log(result);
} catch (error) {
    // Handle the error gracefully
    console.log("Oops, something went wrong:", error.message);
}
```

## 10. Asynchronous Programming

### Promises and Async/Await
For operations that take time (like fetching data from the internet):
```javascript
// Using Promises
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));

// Modern async/await way (cleaner!)
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}
```

## Practice Exercises
Exercises to try:

1. Create variables for your name, age, and favorite color. Print them using console.log.
2. Write a function that takes two numbers and returns their sum.
3. Create an array of your favorite foods and loop through it to print each one.
4. Make an object representing a book with properties for title, author, and year.
5. Write a function that checks if a number is even or odd.


## Additional Resources
- MDN Web Docs (mozilla.org) - Comprehensive JavaScript documentation
- JavaScript.info - In-depth tutorials
- CodePen.io - Try JavaScript in your browser
- FreeCodeCamp - Free JavaScript courses
