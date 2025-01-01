# Semantic HTML Guide

## Core Concepts

### Structural Hierarchy
- Use heading elements (`h1` to `h6`) to maintain content hierarchy
- `h1`: Highest level heading
- `h6`: Lowest level heading

### Element Types
1. **Presentational** (Deprecated)
   - `center`
   - `big`
   - `font`
2. **Semantic** (Preferred)
   - `header`
   - `nav`
   - `figure`

## Semantic Elements Reference

### Document Structure
```html
<header>Document or section header</header>
<main>Primary content</main>
<nav>Navigation links</nav>
<figure>Illustrations, diagrams</figure>
```

### Text Emphasis
```html
<em>Stress emphasis</em>
<strong>Strong importance</strong>
<i>Alternate voice, technical terms</i>
<b>Attention-drawing text</b>
```

### Lists and Descriptions
```html
<dl>
    <dt>Term</dt>
    <dd>Description of the term</dd>
</dl>
```

### Quotations
```html
<blockquote cite="url">
    Block quotation from another source
</blockquote>
<q>Short inline quotation</q>
```

### Special Text Elements
```html
<abbr title="HyperText Markup Language">HTML</abbr>
<address>Contact information</address>
<time datetime="2025-01-01T12:00:00">January 1st, 2025</time>
```

### Text Formatting
```html
<sup>Superscript</sup>
<sub>Subscript</sub>
<code>Computer code</code>
<pre>Preformatted text</pre>
```

### Specialized Elements
```html
<u>Non-textual annotation</u>
<ruby>
    漢 <rt>かん</rt>
</ruby>
<s>No longer accurate content</s>
```

## Best Practices

### Time and Date Formatting
- Use ISO 8601 format: `YYYY-MM-DDThh:mm:ss`
```html
<time datetime="2025-01-01T12:00:00">New Year 2025</time>
```

### Example Document Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML Example</title>
</head>
<body>
    <header>
        <h1>Main Title</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <h2>Article Title</h2>
            <figure>
                <img src="image.jpg" alt="Description">
                <figcaption>Image caption</figcaption>
            </figure>
            <p>Article content with <em>emphasized text</em> and 
               <strong>important information</strong>.</p>
        </article>
    </main>

    <footer>
        <address>
            Contact: <a href="mailto:example@domain.com">Email us</a>
        </address>
    </footer>
</body>
</html>
```
