# Node.js Class Notes: Asynchronous Programming

## 1. Node.js REPL Introduction

The Node.js REPL (Read-Eval-Print-Loop) is an interactive programming environment for testing code.

### Starting the REPL
```bash
node
```

### Basic REPL Operations
```javascript
// Mathematical operations
> 2 + 2
4

// Variable declaration
> let name = "John"
undefined
> name
'John'

// Multi-line operations
> function add(a, b) {
... return a + b;
... }
undefined
> add(5, 3)
8
```

## 2. Asynchronous Programming

### Callback Pattern (Old Way)

JavaScript runs code synchronously by default, meaning it executes one line after another. However, many tasks (e.g., reading files, making API calls) take time, and waiting for them would block everything else. To handle this, JavaScript supports asynchronous programming.

Callbacks: The Foundation of Async Programming
A callback is a function passed as an argument to another function. The "host" function calls the callback once the task is done.

Here’s a simple example:

```javascript
function greet(name) {
    console.log(`Hi ${name}, how do you do?`);
}

function displayGreeting(callback) {
    let name = prompt("Please enter your name");
    callback(name); // Calls the greet function with the name
}

displayGreeting(greet);
```

    greet(name): A function that takes a name and prints a greeting.
    displayGreeting(callback): A function that asks for your name using prompt and then calls the callback function with that name.
    displayGreeting(greet): Here, we pass the greet function as the callback.

When you run this:

    It prompts you to enter your name.
    After you type your name, the greet function runs, using your name in the message.

More Examples:

```javascript
function add(a, b, callback) {
    const result = a + b;
    callback(result);
}

function printResult(value) {
    console.log(`The result is: ${value}`);
}

add(5, 3, printResult); // Output: The result is: 8
```

    The add function performs addition and then calls the callback function with the result.
    The printResult function logs the result to the console.

```javascript
function greet(name, callback) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
        callback();
    }, 2000); // Simulate a 2-sec delay
}

function askQuestion() {
    console.log("How are you today?");
}

greet("Alice", askQuestion);
// Output after 2 seconds:
// Hello, Alice!
// How are you today?
```
      setTimeout delays the execution of the greeting message.
      After the greeting is logged, the callback (askQuestion) is called.


```javascript
function onClick(buttonName, callback) {
    console.log(`${buttonName} button clicked.`);
    callback();
}

function showAlert() {
    console.log("Alert: Button was clicked!");
}

onClick("Submit", showAlert);
```

      The onClick function simulates a button click event and calls the callback.
      The showAlert function acts as the event handler.

### Real-world Example with Callbacks
Callbacks are often used in Node.js, such as reading files:

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (error, data) => {
    if (error) {
        console.error('Error reading file:', error);
        return;
    }
    console.log('File contents:', data);
});
```

### Promises (Modern Way)
```javascript
const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
    .then(data => {
        console.log('File contents:', data);
    })
    .catch(error => {
        console.error('Error reading file:', error);
    });
```

### Async/Await (Current Best Practice)
```javascript
const fs = require('fs').promises;

async function readFileContent() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log('File contents:', data);
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

readFileContent();
```

## 3. Real-world Express Example with Async/Await

```javascript
const express = require('express');
const app = express();
const PORT = 3000;

// Simulated database operation
function fetchUserFromDB(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === "123") {
                resolve({ id: "123", name: "John Doe", email: "john@example.com" });
            } else {
                reject(new Error("User not found"));
            }
        }, 1000);
    });
}

// Route with async/await
app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await fetchUserFromDB(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

```

## 4. Built-in Operations with Use Cases

### File System Operations (fs module)
```javascript
const fs = require('fs').promises;

async function processLogFile() {
    try {
        // Read log file
        const logContent = await fs.readFile('app.log', 'utf8');
        
        // Process content
        const errorLogs = logContent
            .split('\n')
            .filter(line => line.includes('ERROR'));
        
        // Write error logs to new file
        await fs.writeFile('errors.log', errorLogs.join('\n'));
        
        console.log('Error logs extracted successfully');
    } catch (error) {
        console.error('Failed to process log file:', error);
    }
}
```

### Path Module Operations
```javascript
const path = require('path');

// Working with file paths
const filePath = '/user/documents/node/file.txt';

console.log(path.dirname(filePath));  // /user/documents/node
console.log(path.basename(filePath)); // file.txt
console.log(path.extname(filePath));  // .txt
```

### URL Module Usage
```javascript
const url = require('url');

const websiteURL = new URL('https://example.com/path?name=john&age=30');

console.log(websiteURL.searchParams.get('name')); // john
console.log(websiteURL.pathname);                 // /path
```

# Real world Example for URL module: Creating an Express Endpoint to Process YouTube Video Queries

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); //parse the req.body in json format
app.use(bodyParser.urlencoded({ extended: true })); //parse the url sent in req.body into URL-encoded format, typically used with forms.

// Route for serving the input form
app.get('/video', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Video Input</title>
      </head>
      <body>
        <form method="POST" action="/video">
          <label for="videoQuery">Enter YouTube URL:</label>
          <input type="text" id="videoQuery" name="videoQuery" required>
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  `);
});

// POST route to process the video query
app.post('/video', (req, res) => {
  const videoQuery = req.body.videoQuery;

  try {
    const urlObj = new URL(videoQuery);
    const videoId = urlObj.searchParams.get('v');

    if (!videoId) {
      return res.status(400).send('Invalid YouTube URL');
    }

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Video Player</title>
        </head>
        <body>
          <h1>Here is your video:</h1>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/${videoId}"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </body>
      </html>
    `);
  } catch (error) {
    res.status(400).send('Invalid URL');
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```


## 5. Practical Exercise

Create an API endpoint that:
1. Reads a log file
2. Processes the data by splitting content line by line, and filtering to extract all errors
3. Writes results to a new file
4. Implement error handling


## Additional Resources
- [Node.js Documentation on Async Patterns](https://nodejs.org/en/docs/guides/async-performance/)
- [Express Error Handling Guide](https://expressjs.com/en/guide/error-handling.html)
- [JavaScript Promises - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
