# Introduction to Node.js Development

## Table of Contents
- [What is Node.js?](#what-is-nodejs)
- [Getting Started](#getting-started)
- [Core Concepts](#core-concepts)
- [HTTP and Web Servers](#http-and-web-servers)
- [Express.js Framework](#expressjs-framework)
- [Working with Requests and Responses](#working-with-requests-and-responses)
- [API Testing with Thunder Client](#api-testing-with-thunder-client)
- [Best Practices](#best-practices)

## What is Node.js?

Node.js is a JavaScript runtime environment that executes JavaScript code outside a web browser. It's built on Chrome's V8 JavaScript engine and enables developers to use JavaScript for server-side programming. This allows for:

- Building scalable network applications
- Creating web servers
- Developing command-line tools
- Building real-time applications

## Getting Started

### Installation

1. Download Node.js from the official website (https://nodejs.org)
2. Verify installation by running:
```bash
node --version
npm --version
```

### Your First Node.js Program

1. Navigate to the folder where you want to create your Node.js project and run the following command to initialize a new project:

```bash
npm init -y
```
This command will generate a package.json file, which will keep track of the project's dependencies and metadata.


2. Create a file named app.js:
```javascript
console.log("Hello, Node.js!");
```

3. Run it using:
```bash
node app.js
```

## Core Concepts

### Modules
Node.js uses a modular system where each file is treated as a separate module. You can share code between files using require and module.exports.

```javascript
// math.js
module.exports = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// app.js
const math = require('./math');
console.log(math.add(5, 3)); // Output: 8
```

### npm (Node Package Manager)
npm is the default package manager for Node.js. It allows you to:
- Install third-party packages
- Manage project dependencies
- Run scripts
- Share your own packages

Basic npm commands:
```bash
npm init           # Initialize a new project
npm install        # Install all dependencies
npm install express # Install specific package
npm run start      # Run script defined in package.json
```

## HTTP and Web Servers

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. Understanding HTTP is crucial for Node.js web development.

### Key HTTP Concepts

- *Methods*: GET, POST, PUT, DELETE, etc.
- *Status Codes*: 200 (OK), 404 (Not Found), 500 (Server Error), etc.
- *Headers*: Additional information about the request or response
- *Body*: The actual data being sent or received

### Creating a Basic HTTP Server

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

## Express.js Framework

Express.js is the most popular web framework for Node.js. It simplifies the process of building web applications.

### Basic Express Application

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.listen(3000, () => {
    console.log('Express server running on port 3000');
});
```

## Working with Requests and Responses

Understanding req (request) and res (response) objects is fundamental to Node.js web development.

### The Request Object (req)

The req object contains information about the HTTP request, including:

- req.params: URL parameters
- req.query: Query string parameters
- req.body: Request body data
- req.headers: Request headers
- req.method: HTTP method used

Example using request properties:
```javascript
app.get('/users/:id', (req, res) => {
    console.log(req.params.id);        // URL parameter
    console.log(req.query.sort);       // Query parameter
    console.log(req.headers.host);     // Header information
});
```

### The Response Object (res)

The res object is used to send responses to the client:

- res.send(): Send various types of responses
- res.json(): Send JSON responses
- res.status(): Set HTTP status code
- res.redirect(): Redirect to another URL
- res.render(): Render a view template

Example using response methods:
```javascript
app.get('/api/data', (req, res) => {
    res.status(200).json({
        message: 'Success',
        data: { name: 'John', age: 30 }
    });
});
```

## API Testing with Thunder Client

Thunder Client is a lightweight REST API client extension for VS Code, similar to Postman.

### Getting Started with Thunder Client

1. Install Thunder Client extension in VS Code
2. Access it from the VS Code sidebar

### Key Features

- *Collections*: Organize your API requests
- *Environment Variables*: Manage different environments
- *Request Types*: Support for all HTTP methods
- *Authentication*: Various auth methods supported
- *Testing*: Write tests for API responses

### Example Usage

1. Create a new request:
   - Select HTTP method (GET, POST, etc.)
   - Enter URL (e.g., http://localhost:3000/api/users)
   - Set headers if needed
   - Add body for POST/PUT requests

2. Testing API endpoints:
```javascript
// Your Express endpoint
app.post('/api/users', (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({
        message: 'User created',
        user: { name, email }
    });
});
```
// Test in Thunder Client:
// Method: POST
// URL: http://localhost:3000/api/users
// Body (JSON):
{
    "name": "John Doe",
    "email": "john@example.com"
}


## Best Practices

### Error Handling

Always implement proper error handling:
```javascript
app.get('/api/data', async (req, res) => {
    try {
        // Database operations or other async tasks
        const data = await getData();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
```

### Middleware Usage

Use middleware for common tasks:
```javascript
// Logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

### Security Best Practices

1. Use environment variables for sensitive data
2. Implement proper authentication and authorization
3. Validate user input
4. Set security headers
5. Use HTTPS in production

Example security middleware:
```javascript
const helmet = require('helmet');
app.use(helmet()); // Adds various HTTP headers for security
```
// Input validation example
const validateUser = (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
};


### Performance Tips

1. Use async/await for asynchronous operations
2. Implement caching where appropriate
3. Compress responses using gzip
4. Use connection pooling for databases
5. Implement rate limiting for APIs

This guide covers the fundamentals of Node.js development. As you progress, explore more advanced topics like:
- Database integration
- Authentication systems
- WebSocket implementation
- Microservices architecture
- Testing frameworks
- Deployment strategies
