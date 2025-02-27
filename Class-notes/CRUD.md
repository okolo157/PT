# Building a CRUD API with Express.js

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Project Setup](#project-setup)
- [Understanding CRUD Operations](#understanding-crud-operations)
- [API Implementation](#api-implementation)
- [Testing the API](#testing-the-api)
- [Hands-on Exercises](#hands-on-exercises)
- [Best Practices](#best-practices)

## Introduction

This tutorial builds on your basic Node.js and Express.js knowledge to create a fully functional CRUD (Create, Read, Update, Delete) API. We'll build a simple book management system that demonstrates all four CRUD operations using RESTful principles.


## Project Setup

1. Create a new directory and initialize a Node.js project:
```bash
mkdir express-crud-api
cd express-crud-api
npm init -y
```

2. Install required dependencies:
```bash
npm install express
```

3. Create your main application file (app.js):
```javascript
const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## Understanding CRUD Operations

CRUD operations map to HTTP methods as follows:

- CREATE → POST: Add new data
- READ → GET: Retrieve data
- UPDATE → PUT: Modify existing data
- DELETE → DELETE: Remove data

Each operation corresponds to specific API endpoints in our application:

| Operation | HTTP Method | Endpoint | Description |
|-----------|-------------|----------|-------------|
| Create | POST | /api/books | Create a new book |
| Read All | GET | /api/books | Retrieve all books |
| Read One | GET | /api/books/:id | Retrieve a specific book |
| Update | PUT | /api/books/:id | Update a specific book |
| Delete | DELETE | /api/books/:id | Delete a specific book |

## API Implementation

Here's the complete implementation of our books API:

```javascript
const express = require('express');
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// In-memory "database"
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' }
];

// GET all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET a single book by id
app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
//parseInt() - this makes sure that params.id is a number
//req.params.id - This is the book number someone is asking for. It comes from the web address (like /api/books/2 - here 2 is the number they want)
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
});

// POST a new book
app.post('/api/books', (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    books.push(book);
    res.status(201).json(book);
});

// PUT (update) a book
app.put('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    res.json(book);
});

// DELETE a book
app.delete('/api/books/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).json({ message: 'Book not found' });
    
    books.splice(bookIndex, 1);

//splice() works like using scissors to cut out something from an array:
//First number (bookIndex): Where to start cutting
//Second number (1): How many items to cut out

    res.status(204).send();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

## Testing the API

Use Thunder Client or any other REST client to test your API endpoints:

### GET all books
```http
GET http://localhost:3000/api/books
```

### GET single book
```http
GET http://localhost:3000/api/books/1
```

### Create book
```http
POST http://localhost:3000/api/books
Content-Type: application/json

{
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien"
}
```

### Update book
```http
PUT http://localhost:3000/api/books/1
Content-Type: application/json

{
    "title": "Updated Title",
    "author": "Updated Author"
}
```

### Delete book
```http
DELETE http://localhost:3000/api/books/1
```

## Hands-on Exercises

1. **Add Genre**
   - Add a genre field to books
   - Implement filtering by genre (filter array method)
   - Create an endpoint to list all available genre (foreach array method) 
     
2. **Add Search Functionality**
   - Implement a search endpoint that filters books by title
   - Example: GET /api/books/search?title=gatsby

3. **Add Validation**
   - Implement validation for book creation and updates
   - Ensure title and author are not empty
   - Return appropriate error messages



## Best Practices

1. **Input Validation**
```javascript
function validateBook(req, res, next) {
    const { title, author } = req.body;
    if (!title || !author) {
        return res.status(400).json({
            message: 'Title and author are required'
        });
    }
    next();
}

// Use the middleware
app.post('/api/books', validateBook, (req, res) => {
    // Handler code
});
```

2. **HTTP Status Codes**
- 200: Success
- 201: Created
- 204: No Content
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

