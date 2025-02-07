# Introduction to Web Development - HTML Basics

## What is HTML?

HTML (HyperText Markup Language) is the foundation of web development. Think of it as the skeleton of a webpage:
- **HyperText**: Text that links to other text - this is what makes the "web" in "web pages"
- **Markup Language**: A way to annotate text with codes that define how it should be structured

### Your First Webpage

Before we dive into complex concepts, let's create your first webpage:

1. Open any text editor (Notepad, TextEdit, VS Code)
2. Type this basic code:
```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>I made my first webpage!</p>
</body>
</html>
```
3. Save the file as `index.html` (make sure it ends with .html!)
4. Double-click the file to open it in your browser

Congratulations! You've just created your first webpage. 🎉

## Understanding How Browsers Read HTML

When you open an HTML file, your browser:
1. Reads the file from top to bottom
2. Understands the structure based on tags
3. Renders the content visually

### Developer Tools - Your Best Friend

Every modern browser includes developer tools (DevTools):
1. Right-click any webpage and select "Inspect" or press F12
2. You can see:
   - The HTML structure
   - How elements are styled
   - Any errors in your code

## HTML Building Blocks

### Tags and Elements
HTML uses tags to structure content. Tags usually come in pairs:
```html
<tagname>Content goes here</tagname>
```

Common tags you'll use every day:
```html
<h1>Main heading</h1>
<h2>Subheading</h2>
<p>Paragraph text</p>
<a href="https://example.com">Link</a>
<img src="picture.jpg" alt="Description">
```

### Common Beginner Mistakes and How to Fix Them

1. **Forgetting to close tags**
   ```html
   <!-- Wrong -->
   <p>This paragraph never ends
   
   <!-- Right -->
   <p>This paragraph has a closing tag</p>
   ```

2. **Nesting tags incorrectly**
   ```html
   <!-- Wrong -->
   <b><i>Bold and italic text</b></i>
   
   <!-- Right -->
   <b><i>Bold and italic text</i></b>
   ```

3. **Incorrect file paths**
   ```html
   <!-- Wrong -->
   <img src="C:\My Pictures\cat.jpg">
   
   <!-- Right -->
   <img src="images/cat.jpg">
   ```

## Basic Page Structure Explained

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Information about your page goes here -->
    <title>Page Title</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <!-- Visible content goes here -->
    <header>
        <h1>Welcome</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/about">About</a>
        </nav>
    </header>
    
    <main>
        <article>
            <h2>Main Content</h2>
            <p>Your content goes here...</p>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2025 Your Name</p>
    </footer>
</body>
</html>
```

## Forms and User Input

Forms allow users to input data. Each input needs:
1. A unique `id`
2. A `label` that describes it
3. A `name` attribute for data submission

```html
<form action="/submit" method="POST">
    <!-- Text input with label -->
    <div class="form-group">
        <label for="username">Username:</label>
        <input 
            type="text" 
            id="username" 
            name="username" 
            required
        >
    </div>
    
    <!-- Common input types -->
    <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email">
        
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
        
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="0" max="120">
        
        <label for="birthday">Birthday:</label>
        <input type="date" id="birthday" name="birthday">
    </div>
</form>
```


## Tables
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


## Media Elements
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


## Working with Lists

Lists are fundamental HTML elements that help organize information. HTML provides three types of lists:

### 1. Unordered Lists (ul)
Use when the order of items doesn't matter:

```html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Oranges</li>
</ul>
```

This displays as:
- Apples
- Bananas
- Oranges

### 2. Ordered Lists (ol)
Use when the sequence matters:

```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

You can customize the numbering:
```html
<!-- Start from a different number -->
<ol start="5">
    <li>Fifth item</li>
    <li>Sixth item</li>
</ol>

<!-- Use different numbering styles -->
<ol type="A">  <!-- A, B, C -->
    <li>Item A</li>
    <li>Item B</li>
</ol>

<ol type="i">  <!-- i, ii, iii -->
    <li>Item i</li>
    <li>Item ii</li>
</ol>
```

### 3. Description Lists (dl)
Use for term-definition pairs:

```html
<dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language - the standard language for creating web pages</dd>
    
    <dt>CSS</dt>
    <dd>Cascading Style Sheets - used for styling web pages</dd>
</dl>
```

### Nesting Lists
Lists can be nested inside other lists:

```html
<ul>
    <li>Fruits
        <ul>
            <li>Citrus
                <ul>
                    <li>Oranges</li>
                    <li>Lemons</li>
                </ul>
            </li>
            <li>Berries
                <ul>
                    <li>Strawberries</li>
                    <li>Blueberries</li>
                </ul>
            </li>
        </ul>
    </li>
    <li>Vegetables
        <ul>
            <li>Root vegetables</li>
            <li>Leafy greens</li>
        </ul>
    </li>
</ul>
```


### Task
Create a webpage that includes:
1. A shopping list using an unordered list




Tips for Working with Lists:
- Always close your `<li>` tags
- Use semantic meaning to choose between list types
- Don't use lists just for indentation (that's what CSS is for)
- Keep nested lists to a maximum of 3 levels for readability


## Validation and Testing

Before sharing your webpage:
1. Visit validator.w3.org
2. Paste your HTML code or upload your file
3. Fix any errors or warnings

## Resources for Learning More

When you get stuck:
1. MDN Web Docs (developer.mozilla.org)
2. W3Schools (w3schools.com)
3. Stack Overflow for specific problems


Remember: The best way to learn HTML is by practicing. Don't be afraid to experiment and make mistakes
