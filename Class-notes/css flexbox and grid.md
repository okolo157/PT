# Flexbox (Flexible Box Layout)

## Core Concepts
The Flexbox layout model provides a more efficient way to lay out, align, and distribute space among items in a container. It works in one dimension at a time - either as a row or a column.

### Flex Container Properties
```css
.container {
    display: flex; /* or inline-flex */
    
    /* Main Axis Direction */
    flex-direction: row;              /* default - left to right */
    flex-direction: row-reverse;      /* right to left */
    flex-direction: column;           /* top to bottom */
    flex-direction: column-reverse;   /* bottom to top */
    
    /* Wrapping Behavior */
    flex-wrap: nowrap;       /* default - single line */
    flex-wrap: wrap;         /* multiple lines */
    flex-wrap: wrap-reverse; /* multiple lines in reverse */
    
    /* Shorthand for direction + wrap */
    flex-flow: row wrap;

    /* Main Axis Alignment */
    justify-content: flex-start;    /* items at start */
    justify-content: flex-end;      /* items at end */
    justify-content: center;        /* items at center */
    justify-content: space-between; /* equal space between items */
    justify-content: space-around;  /* equal space around items */
    justify-content: space-evenly;  /* equal space between and around */

    /* Cross Axis Alignment */
    align-items: stretch;     /* default - stretch to fill */
    align-items: flex-start;  /* items at start */
    align-items: flex-end;    /* items at end */
    align-items: center;      /* items at center */
    align-items: baseline;    /* align by text baseline */

    /* Multiple Line Alignment */
    align-content: flex-start;    /* lines at start */
    align-content: flex-end;      /* lines at end */
    align-content: center;        /* lines at center */
    align-content: space-between; /* equal space between lines */
    align-content: space-around;  /* equal space around lines */
    align-content: stretch;       /* lines stretch to fill */
}
```

### Flex Item Properties
```css
.item {
    /* Growth Factor */
    flex-grow: 0;   /* default - don't grow */
    flex-grow: 1;   /* grow to fill space */
    
    /* Shrink Factor */
    flex-shrink: 1; /* default - can shrink */
    flex-shrink: 0; /* don't shrink */
    
    /* Base Size */
    flex-basis: auto;   /* default - use item's size */
    flex-basis: 200px;  /* specific starting size */
    
    /* Shorthand for grow, shrink, and basis */
    flex: 0 1 auto;     /* default */
    flex: 1;            /* 1 1 0% - grow and shrink equally */
    
    /* Individual Alignment */
    align-self: auto;       /* default - follow container */
    align-self: flex-start; /* align to start */
    align-self: flex-end;   /* align to end */
    align-self: center;     /* align to center */
    align-self: stretch;    /* stretch to fill */
    
    /* Order */
    order: 0;    /* default */
    order: 1;    /* move later in order */
    order: -1;   /* move earlier in order */
}
```

# CSS Grid Layout

## Core Concepts
CSS Grid is a two-dimensional layout system that can handle both columns and rows simultaneously.

### Grid Container Properties
```css
.container {
    display: grid;
    
    /* Defining Columns and Rows */
    grid-template-columns: 200px 200px 200px;        /* fixed width */
    grid-template-columns: repeat(3, 1fr);           /* fractional units */
    grid-template-columns: minmax(100px, 1fr) 2fr;   /* responsive columns */
    
    grid-template-rows: 100px auto 100px;            /* fixed and auto heights */
    
    /* Grid Gaps */
    gap: 20px;                /* both row and column gaps */
    row-gap: 20px;           /* only row gaps */
    column-gap: 20px;        /* only column gaps */
    
    /* Template Areas */
    grid-template-areas: 
        "header header header"
        "sidebar main main"
        "footer footer footer";
        
    /* Alignment */
    justify-items: start | end | center | stretch;    /* horizontal alignment */
    align-items: start | end | center | stretch;      /* vertical alignment */
    place-items: center stretch;                      /* shorthand for both */
    
    /* Container Alignment */
    justify-content: start | end | center | space-between | space-around;
    align-content: start | end | center | space-between | space-around;
    place-content: center space-between;              /* shorthand for both */
}
```

### Grid Item Properties
```css
.item {
    /* Placement by Grid Lines */
    grid-column: 1 / 3;                  /* start / end */
    grid-row: 2 / 4;                     /* start / end */
    
    /* Shorthand for both */
    grid-area: 2 / 1 / 4 / 3;           /* row-start/column-start/row-end/column-end */
    
    /* Named Grid Areas */
    grid-area: header;                   /* matches template area name */
    
    /* Self Alignment */
    justify-self: start | end | center | stretch;
    align-self: start | end | center | stretch;
    place-self: center stretch;          /* shorthand for both */
}
```

# Typography

## Font Properties
```css
.text {
    /* Font Family */
    font-family: "Helvetica Neue", Arial, sans-serif;
    
    /* Font Size */
    font-size: 16px;                     /* pixels */
    font-size: 1.25rem;                  /* relative to root element */
    font-size: 1.2em;                    /* relative to parent */
    
    /* Font Weight */
    font-weight: normal;                 /* or 400 */
    font-weight: bold;                   /* or 700 */
    font-weight: 300;                    /* light */
    font-weight: 500;                    /* medium */
    
    /* Font Style */
    font-style: normal;
    font-style: italic;
    font-style: oblique;
    
    /* Font Variants */
    font-variant: normal;
    font-variant: small-caps;
    
    /* Line Height */
    line-height: 1.5;                    /* unitless - recommended */
    line-height: 150%;                   /* percentage */
    line-height: 24px;                   /* fixed height */
    
    /* Letter Spacing */
    letter-spacing: normal;
    letter-spacing: 0.1em;
    letter-spacing: 2px;
    
    /* Word Spacing */
    word-spacing: normal;
    word-spacing: 0.2em;
    word-spacing: 4px;
    
    /* Text Alignment */
    text-align: left;
    text-align: right;
    text-align: center;
    text-align: justify;
    
    /* Text Decoration */
    text-decoration: none;
    text-decoration: underline;
    text-decoration: overline;
    text-decoration: line-through;
    
    /* Text Transform */
    text-transform: none;
    text-transform: uppercase;
    text-transform: lowercase;
    text-transform: capitalize;
    
    /* Text Indent */
    text-indent: 50px;
    
    /* Text Shadow */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
```
