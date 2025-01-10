# JavaScript Array Methods Guide

## Introduction
JavaScript provides powerful built-in methods for array manipulation. These methods help you work with arrays efficiently without writing complex loops. This guide covers the most commonly used array methods in Node.js and JavaScript.

## Table of Contents
- [find()](#find)
- [filter()](#filter)
- [map()](#map)
- [forEach()](#foreach)
- [some()](#some)
- [every()](#every)
- [reduce()](#reduce)
- [findIndex()](#findindex)
- [includes()](#includes)
- [sort()](#sort)
- [Practical Examples](#practical-examples)

## Methods

### find()
Finds the **first** element that matches the provided condition.

```javascript
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found); // 12
```

### filter()
Creates a new array with **all** elements that match the condition.

```javascript
const numbers = [5, 12, 8, 130, 44];
const bigNumbers = numbers.filter(num => num > 10);
console.log(bigNumbers); // [12, 130, 44]
```

### map()
Creates a new array by transforming each element using the provided function.

```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

### forEach()
Executes a function for each array element (doesn't create a new array).

```javascript
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log(`I like ${fruit}`));
// Output:
// I like apple
// I like banana
// I like cherry
```

### some()
Checks if **at least one** element matches the condition.

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true
```

### every()
Checks if **all** elements match the condition.

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
```

### reduce()
Reduces an array to a single value (from left to right).

```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((total, current) => total + current, 0);
console.log(sum); // 10
```

### findIndex()
Returns the index of the first element that matches the condition.

```javascript
const fruits = ['apple', 'banana', 'cherry'];
const index = fruits.findIndex(fruit => fruit === 'banana');
console.log(index); // 1
```

### includes()
Checks if an array includes a certain value.

```javascript
const pets = ['cat', 'dog', 'bird'];
console.log(pets.includes('dog')); // true
```

### sort()
Sorts the elements of an array in place.

```javascript
const fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

// For numbers, provide a comparison function
const numbers = [4, 2, 5, 1, 3];

// Ascending order
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

// Descending order
numbers.sort((a, b) => b - a);
console.log(numbers); // [100000, 30, 21, 4, 1]
```

## Practical Examples

### Example 1: Student Grade Management
```javascript
const students = [
    { name: 'John', grade: 85 },
    { name: 'Jane', grade: 92 },
    { name: 'Bob', grade: 78 },
    { name: 'Alice', grade: 95 }
];

// Find high scoring students
const highScorers = students
    .filter(student => student.grade > 80)
    .map(student => student.name);

// Calculate average grade
const averageGrade = students
    .reduce((sum, student) => sum + student.grade, 0) / students.length;

console.log('High scoring students:', highScorers);
// ['Jane', 'Alice']
console.log('Average grade:', averageGrade);
// 87.5
```

### Example 2: Shopping Cart
```javascript
const cart = [
    { item: 'Book', price: 20 },
    { item: 'Pen', price: 1 },
    { item: 'Notebook', price: 5 }
];

// Calculate total price
const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

// Check if any item is expensive (over $15)
const hasExpensiveItems = cart.some(item => item.price > 15);

// Get names of all items
const itemNames = cart.map(item => item.item);

console.log('Total:', totalPrice); // 26
console.log('Has expensive items:', hasExpensiveItems); // true
console.log('Items:', itemNames); // ['Book', 'Pen', 'Notebook']
```

## Best Practices

1. **Chain Methods Wisely**
   - Methods can be chained but consider readability
   - Break long chains into multiple lines
   - Consider performance with large arrays

2. **Choose the Right Method**
   - `find()` for single item lookup
   - `filter()` for multiple items
   - `map()` for transformations
   - `reduce()` for calculations

3. **Error Handling**
```javascript
// Safe array operations
const safeFind = (array, condition) => {
    try {
        return array.find(condition) || null;
    } catch (error) {
        console.error('Error in find operation:', error);
        return null;
    }
};
```

## Common Use Cases in Node.js

1. **Database Results Processing**
```javascript
const users = await db.getUsers();
const activeUsers = users.filter(user => user.isActive);
const userEmails = activeUsers.map(user => user.email);
```

2. **API Response Formatting**
```javascript
const products = await getProducts();
const formattedProducts = products.map(product => ({
    id: product.id,
    name: product.name,
    price: `$${product.price.toFixed(2)}`
}));
```

3. **Data Validation**
```javascript
const isValidData = data.every(item => 
    item.hasOwnProperty('id') && 
    item.hasOwnProperty('name')
);
```

Remember: These methods are immutable (except `sort()`), meaning they don't modify the original array but return a new one. This helps prevent bugs and makes your code more predictable.
