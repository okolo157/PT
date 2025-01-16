# Error Handling in Node.js

## Understanding Errors

### What is an Error?
An error is something that goes wrong in our code. In Node.js, errors are special objects that contain information about what went wrong.

### Common Types of Errors

1. **Operational Errors** (Things we can anticipate)
   - File not found
   - Network connection failed
   - Invalid user input

2. **Programming Errors** (Bugs in our code)
   - Using undefined variables
   - Calling methods that don't exist
   - Type errors

3. **Validation Errors** (Invalid data)
   - Required fields missing
   - Wrong data type
   - Value out of allowed range
   - Invalid format (email, phone, etc.)


## Core Concepts in Error Handling

### 1. The Error Object (`new Error()`)
```javascript
// Built-in JavaScript Error constructor
const error = new Error('Something went wrong');

// The error object contains:
console.log(error.message);  // 'Something went wrong'
console.log(error.name);     // 'Error'
console.log(error.stack);    // Shows where error occurred
```

### 2. Throwing Errors (`throw`)
```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Can't divide by zero");
        // Code after throw is never reached
    }
    return a / b;
}
```

### 3. Creating Custom Errors
```javascript
function createError(name, message) {
    const error = new Error(message);
    error.name = name;
    return error;
}

// Usage
throw createError('ValidationError', 'Invalid email');
```

### 4. Express Middleware (`next`)
```javascript
// Regular middleware
app.use((req, res, next) => {
    console.log('Processing request...');
    next(); // Continue to next middleware
});

// Error middleware (notice the 4 parameters)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something broke!');
});
```

### 5. Try-Catch Patterns
```javascript
// Basic try-catch
try {
    riskyOperation();
} catch (error) {
    handleError(error);
}

// Try-catch with finally
try {
    openFile();
} catch (error) {
    console.error(error);
} finally {
    // This always runs
    closeFile();
}

// Async try-catch
async function fetchData() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error; // Re-throwing the error
    }
}
```

### 6. Error Codes
Common built-in error codes in Node.js:
```javascript
try {
    // Try to read file
} catch (error) {
    switch(error.code) {
        case 'ENOENT':     // File not found
            console.log('File does not exist');
            break;
        case 'EACCES':     // Permission denied
            console.log('Permission denied');
            break;
        case 'ECONNRESET': // Connection reset
            console.log('Connection was reset');
            break;
    }
}
```

### 7. Status Codes in HTTP Errors
```javascript
function handleError(err, res) {
    switch(err.name) {
        case 'ValidationError':
            res.status(400).json({error: err.message}); // Bad Request
            break;
        case 'AuthenticationError':
            res.status(401).json({error: err.message}); // Unauthorized
            break;
        case 'NotFoundError':
            res.status(404).json({error: err.message}); // Not Found
            break;
        default:
            res.status(500).json({error: 'Server Error'}); // Internal Server Error
    }
}
```

## Common Error Handling Patterns

### 1. Validation Pattern
```javascript
function validateUser(user) {
    const errors = [];

    // Check required fields
    if (!user.email) {
        errors.push('Email is required');
    }
    if (!user.name) {
        errors.push('Name is required');
    }
    
    // Validate email format
    if (user.email && !user.email.includes('@')) {
        errors.push('Invalid email format');
    }

    // Validate age if provided, age is optional
    if (user.age && (typeof user.age !== 'number' || user.age < 0)) {
        errors.push('Age must be a positive number');
    }

    return errors;
}

function createUser(userData) {
    const errors = validateUser(userData);
    
    if (errors.length > 0) {
        throw createError('ValidationError', errors.join(', '));
    }
    
    // If validation passes, create user
    return {
        ...userData, //spreads the user into a new object, userData
        createdAt: new Date()
    };
}

// Using validation in Express
app.post('/users', (req, res) => {
    try {
        const newUser = createUser(req.body);

////The req.body represents the data sent in the HTTP request's body, this is the same object that is passed as the userData parameter to the createUser function.

        res.json(newUser);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({
                error: 'Validation Failed',
                message: error.message
            });
        } else {
            res.status(500).json({
                error: 'Server Error',
                message: 'Something went wrong'
            });
        }
    }
});
```

### 2. Async/Await Pattern
```javascript
async function getUserData(userId) {
    try {
        // Validate input first
        if (!userId) {
            throw createError('ValidationError', 'User ID is required');
        }

        const response = await fetch(`https://api.example.com/users/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        if (error.name === 'ValidationError') {
            console.error('Invalid input:', error.message);
        } else {
            console.error('Failed to get user data:', error.message);
        }
        throw error; // Re-throw to handle it in the calling function
    }
}
```

### 3. Creating Custom Errors
```javascript
function createError(name, message) {
    const error = new Error(message);
    error.name = name;
    return error;
}

// Example with validation
function validateAge(age) {
    if (typeof age !== 'number') {
        throw createError('ValidationError', 'Age must be a number');
    }
    if (age < 0 || age > 120) {
        throw createError('ValidationError', 'Age must be between 0 and 120');
    }
    return true;
}

// Using the validation
try {
    validateAge("twenty"); // This will throw an error
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
    // Output: ValidationError: Age must be a number
}
```


### Error Handling in Express

```
// Error handling middleware
function errorHandler(err, req, res, next) {
    // Log the error
    console.error(err.message);

    // Handle different types of errors
    if (err.name === 'ValidationError') {
        return res.status(400).json({
            error: 'Validation Failed',
            message: err.message
        });
    }

    // Default server error
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
}

// Example route with validation
app.post('/register', async (req, res, next) => {
    try {
        // Validate required fields
        const requiredFields = ['email', 'password', 'name'];
        for (const field of requiredFields) {
            if (!req.body[field]) {
                throw createError('ValidationError', `${field} is required`);
            }
        }

        // Create user if validation passes
        const user = await createUser(req.body);
        res.json(user);
    } catch (error) {
        next(error);
    }
});

// Add the error handler last
app.use(errorHandler);
```

**Task:**
      Create an express application that includes validation errors. Follow the example provided and ensure the following functionality:

    Create the Endpoint:
        Define a POST /register endpoint.
        The endpoint should accept a req.body object with the following fields:
            email (required): Must be a valid email address.
            name (required): Must be a string.
            password (required): Must be at least 8 characters long.
            age (optional): Must be a positive number if provided.

    Validation Logic:
        Return validation errors in the same way as in the example:
            If any validation fails, respond with:
                Status code: 400
                A JSON object:

            {
              "error": "Validation Failed",
              "message": "Validation error messages go here"
            }

Successful Requests:

    If all validations pass, return a JSON object that includes all the provided fields (email, name, password, age) and a createdAt timestamp.
    If using bcrypt to hash the password (for extra points), include the hashed password in the response.
