# Introduction to Web Development - HTML Basics

## Understanding HTML

HTML (HyperText Markup Language) is the foundation of web development:
- **HyperText**: Links pages/documents together
- **Markup Language**: Structures content for web display

### Core Concepts

#### Tags and Elements
HTML uses paired tags to structure content:
```html
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
```

#### Attributes
Provide additional element information:
```html
<img src="image.jpg" alt="An example image">
```

### Basic Document Structure
```html
<!DOCTYPE html>
<html>
<head>
    <title>Your First Webpage</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is your first webpage.</p>
</body>
</html>
```

## Getting Started

### Setup Requirements
1. Code editor (VS Code or Notepad++)
2. New project folder ("MyFirstWebsite")
3. Basic understanding of file management

### Essential HTML Tags

#### Semantic Elements
```html
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>

<main>
    <article>
        <h1>Article Title</h1>
        <p>Article content...</p>
    </article>
</main>

<footer>
    <p>&copy; 2025 My Website</p>
</footer>
```

#### Forms and Input
```html
<form action="/submit" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>
    
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    
    <select name="country">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
    </select>
    
    <textarea name="message" rows="4"></textarea>
    
    <button type="submit">Submit</button>
</form>
```

#### Tables
```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John Doe</td>
            <td>25</td>
            <td>New York</td>
        </tr>
    </tbody>
</table>
```

### Advanced Features

#### Media Elements
```html
<!-- Video -->
<video controls width="500">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser doesn't support video.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser doesn't support audio.
</audio>
```

#### Responsive Design Meta Tags
```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Your page description">
    <meta name="keywords" content="HTML, CSS, JavaScript">
    <meta name="author" content="Your Name">
</head>
```

## Best Practices

### Accessibility
1. Use semantic HTML elements
2. Include proper ARIA attributes
3. Provide alt text for images
4. Ensure proper color contrast

```html
<!-- Accessible button example -->
<button 
    aria-label="Close dialog"
    role="button"
    tabindex="0">
    <span aria-hidden="true">&times;</span>
</button>
```

### SEO Optimization
```html
<head>
    <title>Page Title - Brand Name</title>
    <meta name="description" content="Clear, unique page description">
    <link rel="canonical" href="https://example.com/page">
    
    <!-- Open Graph tags -->
    <meta property="og:title" content="Page Title">
    <meta property="og:description" content="Page description">
    <meta property="og:image" content="image.jpg">
</head>
```

## Practice Project: Personal Profile Page

### Enhanced Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Profile</title>
</head>
<body>
    <header>
        <h1>John Doe</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="about">
            <h2>About Me</h2>
            <img src="profile.jpg" alt="John Doe profile picture">
            <p>Web developer passionate about creating awesome websites!</p>
        </section>

        <section id="portfolio">
            <h2>My Work</h2>
            <div class="project">
                <img src="project1.jpg" alt="Project 1 screenshot">
                <h3>Project Title</h3>
                <p>Project description...</p>
            </div>
        </section>

        <section id="contact">
            <h2>Contact Me</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" required>
                
                <label for="email">Email:</label>
                <input type="email" id="email" required>
                
                <button type="submit">Send</button>
            </form>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 John Doe</p>
    </footer>
</body>
</html>
```

### File Organization
```
MyFirstWebsite/
├── index.html
├── pages/
│   ├── about.html
│   └── contact.html
├── images/
│   ├── profile.jpg
│   └── projects/
└── css/
    └── style.css
```
