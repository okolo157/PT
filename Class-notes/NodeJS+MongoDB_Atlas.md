# Getting Started with MongoDB Atlas and Node.js

## Project Structure
```
mongodb-project/
  ├── models/
  │   └── userModel.js
  ├── .env
  ├── package.json
  └── server.js
```

## Setting Up Your Project

First, create a new folder and initialize your Node.js project:
```bash
mkdir mongodb-project
cd mongodb-project
mkdir models
npm init -y
```

Install the required packages:
```bash
npm install mongoose dotenv express
```

## Understanding the Packages

### dotenv
- `dotenv` lets us keep sensitive information in a separate file
- Create a file called `.env` in your project folder
- Store your database connection string and other secrets here
- Never commit this file to version control

Example `.env` file:
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
```

### mongoose
- `mongoose` makes it easier to work with MongoDB
- Provides a simple way to define data models
- Handles database connections
- Makes database operations simpler

## Creating the Model

Create `models/userModel.js`:

```javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
```

## Basic Server Setup

Create `server.js`:

```javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/userModel');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create a user
app.post('/users', async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get one user
app.get('/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user
app.put('/users/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id, 
      req.body,
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user
app.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Testing the API with Thunder Client

### Test Examples

**Create a User (POST)**
- Method: POST
- URL: http://localhost:3000/users
- Headers: Content-Type: application/json
- Body (raw JSON):
```json
{
    "name": "John",
    "email": "john@test.com",
    "age": 25
}
```

**Get All Users (GET)**
- Method: GET
- URL: http://localhost:3000/users
- No headers or body needed

**Get One User (GET)**
- Method: GET
- URL: http://localhost:3000/users/:id
- Replace :id with the actual user ID from your database

**Update a User (PUT)**
- Method: PUT
- URL: http://localhost:3000/users/:id
- Headers: Content-Type: application/json
- Body (raw JSON):
```json
{
    "name": "John Updated"
}
```

**Delete a User (DELETE)**
- Method: DELETE
- URL: http://localhost:3000/users/:id
- No body needed
