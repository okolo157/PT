# Web Development Workflow: From Code to Deployment

## Prerequisites
- GitHub Account
- Git installed locally
- Node.js and npm
- Basic understanding of JavaScript/Express

## Setup

### 1. Initialize Project as usual
```bash
mkdir my-project
cd my-project
npm init -y
npm install express cors
```

### 2. Basic Express Server (app/server.js)
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// CORS with specific configuration
app.use(cors({
  origin: 'https://yourfrontend.com',
  methods: ['GET', 'POST']
}));

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### 3. Git Repository
```bash
# Initialize git repository
git init

# Create .gitignore
echo "node_modules/" > .gitignore
echo ".env" >> .gitignore

# First commit
git add .
git commit -m "Initial project setup"
git branch -M main
```

(Note that you can also create with Github GUI in the sidebar)

### 4. GitHub Repository
1. Create new repository on GitHub
2. Link local repository
```bash
git remote add origin https://github.com/yourusername/project-name.git
git push -u origin main
```

## Deployment on Render

### Backend Deployment
1. Sign up on Render.com
2. Create New Web Service
3. Connect GitHub Repository
4. Configure Build Settings:
   - Build Command: `npm install`
   - Start Command: `node app.js`
   - Add environment variables as needed

### Continuous Deployment
- Enable "Auto-Deploy" in Render settings
- Every push to `main` branch triggers automatic redeployment

## Best Practices
- Use environment variables
- Implement proper CORS configuration
- Secure sensitive information
- Regular commits with meaningful messages

## Common CORS Configurations
```javascript
// Allow specific origin
app.use(cors({
  origin: 'https://example.com'
}));

// Multiple allowed origins
const corsOptions = {
  origin: ['https://site1.com', 'https://site2.com']
};
app.use(cors(corsOptions));
```

## Workflow Summary
1. Local Development
2. Git Commits
3. GitHub Push
4. Automatic Render Deployment
