# Development Resources Guide

## Essential Tools

### VS Code Extensions
- Prettier
- ESLint
- Live Server

### CDN Links
```html
<!-- FontAwesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>
```

## Documentation

### Official Documentation
- [Tailwind CSS React](https://tailwindcss.com/docs/guides/create-react-app)
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs)
- [Git](https://git-scm.com/)
- [React](https://react.dev/)
- [Node.js](https://nodejs.org/en)
- [NPM](https://npmjs.com)
- [FontAwesome React Guide](https://docs.fontawesome.com/web/use-with/react)


## Setup Commands

### Font Awesome Install

```bash
//Add SVG core
npm i --save @fortawesome/fontawesome-svg-core

//Add Icon packages
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

//Add React installation
npm i --save @fortawesome/react-fontawesome@latest
```

### Font Awesome Import
```bash
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon-name } from "@fortawesome/free-solid-svg-icons";
OR
import { icon-name } from "@fortawesome/free-brands-svg-icons";

//Usage
<FontAwesomeIcon icon={icon-name}/>
```

### Node.js Version Check
```bash
node -v
npm -v
```

### React Project Setup
```bash
npx create-react-app my-app
cd my-app
npm start
```

### NPM Package Installation
```bash
npm install <package-name>
```

## Learning Resources

### Full-stack course
- (https://www.freecodecamp.org/learn/full-stack-developer/)

### CSS & Layout Tutorials
- [Flexbox Tutorial](https://youtu.be/tXIhdp5R7sc?si=rnkShUfoZew5KLCc)
- [CSS Basics](https://youtu.be/i1FeOOhNnwU?si=jG8lbwaPgbb0YH44)
- [CSS in React](https://youtu.be/j5P9FHiBVNo?si=fTnAUnh6oGVZcyum)

### React Tutorials
- [React Startup Guide](https://youtu.be/E8lXC2mR6-k?si=92jIs95f7_TWMAcW)
