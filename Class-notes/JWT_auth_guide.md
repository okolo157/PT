# Full-Stack JWT Authentication Guide

## Authentication Process Architecture

### User Interaction (Frontend)

    Step 1: The user interacts with the frontend by entering their login or signup credentials 
            (e.g., username, email, and password) in a form.
    Step 2: The frontend sends the credentials to the backend through an API request (e.g., via axios, fetch, etc.).
    
    
    Example:

        const payload = { username, password }; 
        const response = await axios.post('http://example.com/login', payload);

 ### Authentication and Token Generation (Backend)

    Step 3: The backend receives the login/signup request and validates the user's credentials.
        For login:
            Check if the username exists in the database.
            Verify the password (e.g., using bcrypt.compare()).
        For signup:
            Ensure the username/email is unique.
            Hash the password and save the new user in the database.

    Step 4: If the credentials are valid, the backend generates a JWT using a secret key and includes user-specific information (like id and username) in             the payload.
            
            Example:

            const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

Step 5: The backend sends the generated token back to the frontend in the response.

    Example:

        { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }

### Token Storage (Frontend)

    Step 6: The frontend receives the token and stores it securely for subsequent requests. Common storage options:
        Local Storage: Easy to use but vulnerable to XSS attacks.

        localStorage.setItem('token', response.data.token);

        HttpOnly Cookies: More secure since the token isn’t accessible via JavaScript, reducing XSS risks.
    Step 7: Update the frontend state to reflect the user is authenticated (e.g., redirect to a dashboard).

### Using Token for Protected Requests (Frontend to Backend)

    Step 8: For any subsequent request to protected routes (e.g., fetching user profile or data), 
            the frontend attaches the JWT to the Authorization header of the request.
          
            Example:

            const token = localStorage.getItem('token');
            const response = await axios.get('http://example.com/protected', {
              headers: { Authorization: `Bearer ${token}` },
            });

### Token Verification and Access (Backend)

    Step 9: The backend receives the request and verifies the token using the same secret key that was used to generate it.
            Example (middleware function):

            const token = req.headers.authorization?.split(' ')[1];
            if (!token) return res.status(401).json({ message: 'Unauthorized' });

            jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) return res.status(403).json({ message: 'Forbidden' });
            req.user = user; // Attach user data to the request object
            next();
            });

            Step 10: If the token is valid, the backend processes the request (e.g., fetch user data, return protected resources) 
            and sends the response back to the frontend.

### Displaying Data to the User (Frontend)

    Step 11: The frontend receives the response from the backend and displays the data to the user (e.g., showing their profile information or dashboard).
            
            Example:

            const response = await axios.get('http://example.com/protected', {
            headers: { Authorization: `Bearer ${token}` },
            });
            setUserData(response.data);

### Handling Token Expiry

    Step 12: If the token is expired, the backend rejects the request (e.g., with a 401 or 403 status).
    Step 13: The frontend should handle this by:
              Redirecting the user to the login page.
              Optionally, refreshing the token if you’re using a refresh token strategy.

### Logout Process

    Step 14: When the user logs out, the frontend removes the token from storage and clears the authenticated state.
        Example:

        localStorage.removeItem('token');
        setUser(null);


## Frontend Implementation (React)

### Key Frontend Concepts used
- State management for authentication
- Conditional rendering
- Token storage
- API interactions

### Frontend Code Example
```jsx
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  // State variables for input fields
  const [username, setUsername] = useState(''); // Tracks the username input
  const [email, setEmail] = useState(''); // Tracks the email input (only for signup)
  const [password, setPassword] = useState(''); // Tracks the password input
  const [isLogin, setIsLogin] = useState(true); // Tracks if the user is in login or signup mode
  const [token, setToken] = useState(localStorage.getItem('token')); // Gets the stored token from local storage (if any)
  const [message, setMessage] = useState(''); // Tracks messages to display to the user (success or error)

  // Handles form submission for login or signup
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    try {
      // Determine the endpoint based on whether the user is logging in or signing up
      const endpoint = isLogin ? '/login' : '/signup';

      // Create the payload to send to the server
      const payload = isLogin 
        ? { username, password } // Login requires only username and password
        : { username, email, password }; // Signup requires username, email, and password

      // Send a POST request to the server with the payload
      const response = await axios.post(`http://localhost:5000${endpoint}`, payload);

      // If successful, store the returned token in local storage and update the state
      localStorage.setItem('token', response.data.token);
      setToken(response.data.token);

      // Set a success message
      setMessage(isLogin ? 'Login successful!' : 'Signup successful!');
    } catch (error) {
      // Handle errors and display an error message
      setMessage(error.response?.data?.message || 'Operation failed');
    }
  };

  // Fetches protected data from the server after the user logs in
  const fetchProtectedData = async () => {
    try {
      // Send a GET request with the token in the Authorization header
      const response = await axios.get('http://localhost:5000/protected', {
        headers: { Authorization: `Bearer ${token}` }
      });

      // Display the message returned from the server
      setMessage(response.data.message);
    } catch (error) {
      // Handle errors and display a failure message
      setMessage('Failed to fetch data');
    }
  };

  // Handles user logout
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Clear the token from the state
    setToken(null);
  };

  return (
    <div>
      {/* If the user is not logged in, display the login or signup form */}
      {!token ? (
        <form onSubmit={handleSubmit}>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

          {/* Input for username */}
          <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username" 
            required
          />

          {/* Input for email (only visible in signup mode) */}
          {!isLogin && (
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" 
              required
            />
          )}

          {/* Input for password */}
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password" 
            required
          />

          {/* Button to submit the form */}
          <button type="submit">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>

          {/* Toggle link to switch between login and signup */}
          <p onClick={() => setIsLogin(!isLogin)}>
            {isLogin 
              ? 'Need an account? Sign Up' 
              : 'Already have an account? Login'}
          </p>
        </form>
      ) : (
        // If the user is logged in, display options to fetch data or logout
        <div>
          <p>Logged In</p>

          {/* Button to fetch protected data */}
          <button onClick={fetchProtectedData}>
            Fetch Protected Data
          </button>

          {/* Button to log out */}
          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
      
      {/* Display any success or error message */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
```

## Backend Implementation (Express & MongoDB)

### Backend Authentication Flow
1. Setup MongoDB connection
2. Create User model
3. Implement signup route
4. Implement login route
5. Create token verification middleware
6. Protect routes requiring authentication

### Backend Code Example
```javascript
// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import required modules
const express = require('express'); // Framework for building web applications
const mongoose = require('mongoose'); // MongoDB object modeling tool
const jwt = require('jsonwebtoken'); // JSON Web Token library for authentication
const cors = require('cors'); // Middleware to enable Cross-Origin Resource Sharing
const bcrypt = require('bcryptjs'); // Library to hash passwords

// Initialize the Express app
const app = express();

// Define the secret key for JWT from environment variables
const SECRET_KEY = process.env.JWT_SECRET;

// Middleware to enable Cross-Origin Resource Sharing for all routes
app.use(cors());

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// ===============================
// Define MongoDB User Schema and Model
// ===============================
// Define the schema for user documents in MongoDB
const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  }
});

// Create a User model using the defined schema
const User = mongoose.model('User', UserSchema);

// ===============================
// Connect to MongoDB
// ===============================
// Connect to the MongoDB database using the connection string from environment variables
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected')) // Log success message on connection
.catch(err => console.error('MongoDB Connection Error:', err)); // Log error if connection fails

// ===============================
// User Signup Endpoint
// ===============================
// Define the /signup route to handle user registration
app.post('/signup', async (req, res) => {
  try {
    // Extract the username, email, and password from the request body
    const { username, email, password } = req.body;
    
    // Check if a user with the same username or email already exists
    let user = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (user) {
      // If user exists, respond with a 400 status and an error message
      return res.status(400).json({ message: 'User already exists' });
    }

    // Generate a salt for password hashing
    const salt = await bcrypt.genSalt(10);
    // Hash the user's password using bcrypt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user object with the provided details
    user = new User({ 
      username, 
      email, 
      password: hashedPassword 
    });

    // Save the new user to the database
    await user.save();

    // Generate a JWT token for the newly registered user
    const token = jwt.sign(
      { id: user._id, username: user.username }, 
      SECRET_KEY, 
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Respond with the generated token
    res.status(201).json({ token });
  } catch (error) {
    // Respond with a 500 status if there is a server error
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ===============================
// User Login Endpoint
// ===============================
// Define the /login route to handle user authentication
app.post('/login', async (req, res) => {
  try {
    // Extract the username and password from the request body
    const { username, password } = req.body;
    
    // Find a user with the provided username
    const user = await User.findOne({ username });
    if (!user) {
      // Respond with a 400 status if the user is not found
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      // Respond with a 400 status if the password does not match
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token for the authenticated user
    const token = jwt.sign(
      { id: user._id, username: user.username }, 
      SECRET_KEY, 
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    // Respond with the generated token
    res.json({ token });
  } catch (error) {
    // Respond with a 500 status if there is a server error
    res.status(500).json({ message: 'Server error' });
  }
});

// ===============================
// Protected Route
// ===============================
// Define the /protected route to demonstrate token verification
app.get('/protected', authenticateToken, (req, res) => {
  // Respond with a message and the authenticated user's data
  res.json({ 
    message: 'Access to protected resource', 
    user: req.user 
  });
});

// ===============================
// Middleware for Token Verification
// ===============================
// Middleware to authenticate JWT tokens
function authenticateToken(req, res, next) {
  // Extract the Authorization header from the request
  const authHeader = req.headers['authorization'];
  // Extract the token from the header (format: "Bearer <token>")
  const token = authHeader && authHeader.split(' ')[1];
  
  // If no token is provided, respond with a 401 status
  if (token == null) return res.sendStatus(401);
  
  // Verify the token using the secret key
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Respond with 403 if the token is invalid
    req.user = user; // Attach the decoded user data to the request
    next(); // Proceed to the next middleware or route handler
  });
}

// ===============================
// Start the Server
// ===============================
// Define the port from environment variables or default to 5000
const PORT = process.env.PORT || 5000;
// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### .env File
      MONGODB_URI=your_mongodb_atlas_connection_string
      JWT_SECRET=your_very_long_random_secret

### Dependencies
      npm init -y
      npm install express mongoose jsonwebtoken cors bcryptjs dotenv
  
## Security Considerations
1. Always use HTTPS
2. Store tokens securely (HttpOnly cookies)
3. Implement token expiration
4. Hash passwords before storage
5. Validate and sanitize inputs

