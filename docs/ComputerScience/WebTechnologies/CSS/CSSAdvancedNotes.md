# CSS Advanced Notes
A comprehensive guide to advanced CSS concepts and techniques

## Table of Contents

1. [CSS Border](#css-border)
2. [CSS Outline](#css-outline)
3. [CSS Shadow](#css-shadow)
4. [CSS Background](#css-background)
5. [CSS Gradient](#css-gradient)
6. [CSS Object](#css-object)
7. [CSS Shape](#css-shape)
8. [CSS Filter and Blend](#css-filter-and-blend)
9. [SVG](#svg)
10. [CSS Interaction](#css-interaction)
11. [CSS Scrolling](#css-scrolling)
12. [Media Query](#media-query)
13. [Container Query](#container-query)
14. [Feature Query](#feature-query)
15. [CSS Accessibility](#css-accessibility)
16. [CSS Performance](#css-performance)
17. [CSS Hacks](#css-hacks)
18. [CSS Tools](#css-tools)
19. [CSS Style Guide](#css-style-guide)

## CSS Border

### Border Radius
Border radius creates rounded corners for elements. It can be applied uniformly or to individual corners.

```css
/* Uniform border radius */
.element {
    border-radius: 10px;
}

/* Individual corners */
.element {
    border-top-left-radius: 10px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 40px;
}

/* Elliptical corners */
.element {
    border-radius: 50px / 25px;
}
```

### Border Color
Defines the color of element borders using various color formats.

```css
.element {
    /* Named color */
    border-color: red;
    
    /* Hex color */
    border-color: #ff0000;
    
    /* RGB */
    border-color: rgb(255, 0, 0);
    
    /* RGBA with transparency */
    border-color: rgba(255, 0, 0, 0.5);
}
```

### Border Style
Controls the appearance of border lines.

```css
.element {
    border-style: solid;      /* Solid line */
    border-style: dashed;     /* Dashed line */
    border-style: dotted;     /* Dotted line */
    border-style: double;     /* Double line */
    border-style: groove;     /* 3D grooved effect */
    border-style: ridge;      /* 3D ridged effect */
    border-style: inset;      /* 3D inset effect */
    border-style: outset;     /* 3D outset effect */
    border-style: none;       /* No border */
    border-style: hidden;     /* Hidden border */
}
```

### Border Image
Uses images for element borders instead of solid colors.

```css
.element {
    border-image-source: url('border.png');
    border-image-slice: 30;
    border-image-width: 10px;
    border-image-repeat: round;
    
    /* Shorthand */
    border-image: url('border.png') 30 / 10px round;
}
```

### Border Collapse
Controls how table borders are rendered.

```css
table {
    /* Merge adjacent borders */
    border-collapse: collapse;
    
    /* Keep borders separate */
    border-collapse: separate;
    
    /* Control spacing between separate borders */
    border-spacing: 2px;
}
```

### Box Decoration Break
Determines how element fragments are rendered when broken across lines or pages.

```css
.element {
    /* Clone decorations for each fragment */
    box-decoration-break: clone;
    
    /* Slice decorations at break points */
    box-decoration-break: slice;
}
```

### Multiple Borders
Techniques for creating multiple borders around elements.

```css
/* Using outline */
.multiple-borders {
    border: 5px solid red;
    outline: 5px solid blue;
    outline-offset: 5px;
}

/* Using box-shadow */
.multiple-borders {
    border: 5px solid red;
    box-shadow: 
        0 0 0 5px blue,
        0 0 0 10px green;
}
```

## CSS Outline
Outlines differ from borders as they don't affect layout and can be non-rectangular.

```css
.element {
    outline: 2px solid red;
    outline-offset: 5px;
    
    /* Auto-color high contrast outline */
    outline: 2px auto -webkit-focus-ring-color;
}
```

## CSS Shadow

### Text Shadow
Adds shadow effects to text content.

```css
.text {
    /* Basic shadow */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    
    /* Multiple shadows */
    text-shadow: 
        2px 2px 4px rgba(0, 0, 0, 0.5),
        -2px -2px 4px rgba(255, 0, 0, 0.5);
}
```

### Box Shadow
Adds shadow effects to elements.

```css
.element {
    /* Basic shadow */
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    
    /* Inner shadow */
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.3);
    
    /* Multiple shadows */
    box-shadow: 
        5px 5px 10px rgba(0, 0, 0, 0.3),
        inset 0 0 10px rgba(0, 0, 0, 0.3);
}
```

## CSS Background

### Background Color
Sets the background color of elements.

```css
.element {
    /* Solid color */
    background-color: #ff0000;
    
    /* Transparent color */
    background-color: rgba(255, 0, 0, 0.5);
}
```

### Background Image
Adds images as element backgrounds.

```css
.element {
    /* Single image */
    background-image: url('image.jpg');
    
    /* Multiple images */
    background-image: 
        url('overlay.png'),
        url('background.jpg');
}
```

### Background Repeat
Controls how background images repeat.

```css
.element {
    background-repeat: repeat;        /* Default */
    background-repeat: no-repeat;     /* Single instance */
    background-repeat: repeat-x;      /* Repeat horizontally */
    background-repeat: repeat-y;      /* Repeat vertically */
    background-repeat: space;         /* Evenly spaced */
    background-repeat: round;         /* Scaled to fit */
}
```

### Background Position
Controls the starting position of background images.

```css
.element {
    /* Keywords */
    background-position: top left;
    background-position: center center;
    
    /* Percentages */
    background-position: 50% 50%;
    
    /* Length values */
    background-position: 20px 50px;
}
```

### Background Clip
Determines the painting area of the background.

```css
.element {
    background-clip: border-box;     /* Default */
    background-clip: padding-box;    /* Inside padding */
    background-clip: content-box;    /* Inside content */
    background-clip: text;           /* Clips to text */
}
```

### Background Origin
Sets the background positioning area.

```css
.element {
    background-origin: border-box;   /* From border edge */
    background-origin: padding-box;  /* From padding edge */
    background-origin: content-box;  /* From content edge */
}
```

### Background Size
Controls the size of background images.

```css
.element {
    background-size: auto;          /* Default */
    background-size: cover;         /* Cover container */
    background-size: contain;       /* Fit within container */
    background-size: 100% 100%;     /* Stretch to fit */
    background-size: 50px 50px;     /* Specific size */
}
```

### Background Attachment
Determines how backgrounds scroll with content.

```css
.element {
    background-attachment: scroll;  /* Scroll with content */
    background-attachment: fixed;   /* Fixed to viewport */
    background-attachment: local;   /* Scroll with element */
}
```

## CSS Gradient

### Color Stop List
Defines color transitions in gradients.

```css
.element {
    background: linear-gradient(
        90deg,
        red 0%,
        yellow 50%,
        blue 100%
    );
}
```

### Linear Gradient
Creates a gradient in a single direction.

```css
.element {
    /* Directional */
    background: linear-gradient(to right, red, blue);
    
    /* Angle */
    background: linear-gradient(45deg, red, blue);
    
    /* Multiple color stops */
    background: linear-gradient(
        to bottom,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
    );
}
```

### Radial Gradient
Creates a gradient that radiates from a center point.

```css
.element {
    /* Basic */
    background: radial-gradient(red, blue);
    
    /* Shaped */
    background: radial-gradient(circle, red, blue);
    
    /* Positioned */
    background: radial-gradient(
        circle at center,
        red,
        blue
    );
    
    /* Sized */
    background: radial-gradient(
        circle closest-corner at center,
        red,
        blue
    );
}
```

### Conic Gradient
Creates a gradient that rotates around a center point.

```css
.element {
    /* Basic */
    background: conic-gradient(red, blue);
    
    /* From angle */
    background: conic-gradient(from 45deg, red, blue);
    
    /* At position */
    background: conic-gradient(at 50% 50%, red, blue);
    
    /* Color wheel */
    background: conic-gradient(
        from 0deg,
        red,
        yellow,
        lime,
        aqua,
        blue,
        magenta,
        red
    );
}
```

### Gradient Reference
Common gradient patterns and techniques.

```css
/* Rainbow gradient */
.rainbow {
    background: linear-gradient(
        to right,
        red,
        orange,
        yellow,
        green,
        blue,
        indigo,
        violet
    );
}

/* Metallic effect */
.metallic {
    background: linear-gradient(
        170deg,
        #C0C0C0 0%,
        #FFFFFF 47%,
        #C0C0C0 100%
    );
}

/* Glass effect */
.glass {
    background: linear-gradient(
        135deg,
        rgba(255,255,255,0.1) 0%,
        rgba(255,255,255,0.4) 100%
    );
}
```

## CSS Object

### Object Fit
Controls how replaced elements (like images) fit their container.

```css
.image {
    width: 300px;
    height: 200px;
    
    object-fit: cover;      /* Cover container, crop if needed */
    object-fit: contain;    /* Fit within container */
    object-fit: fill;       /* Stretch to fill */
    object-fit: none;       /* Original size */
    object-fit: scale-down; /* Scaled down if needed */
}
```

### Object Position
Specifies the alignment of replaced element content.

```css
.image {
    object-position: center;        /* Center alignment */
    object-position: top left;      /* Top-left corner */
    object-position: 50% 50%;       /* Percentage values */
    object-position: 20px 20px;     /* Pixel values */
}
```

### Replaced Media Size
Controls size behavior of replaced elements.

```css
img, video, iframe {
    max-width: 100%;        /* Responsive scaling */
    height: auto;           /* Maintain aspect ratio */
    
    /* Fixed aspect ratio */
    aspect-ratio: 16 / 9;
}
```

### Embed Object Container
Techniques for responsive embedded content.

```css
/* Responsive iframe container */
.embed-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
}

.embed-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

## CSS Shape

### Shape Outside
Defines a shape for text to wrap around.

```css
.float-left {
    float: left;
    width: 300px;
    height: 300px;
    shape-outside: circle(50%);
    shape-outside: ellipse(45% 45% at 50% 50%);
    shape-outside: polygon(0 0, 100% 0, 100% 100%);
    shape-outside: url(shape.png);
}
```

### Clip
Defines a simple rectangular clipping region (deprecated).

```css
.clipped {
    clip: rect(0px, 60px, 200px, 0px);
    position: absolute; /* Required */
}
```

### Clip Path
Creates complex clipping paths for elements.

```css
.element {
    /* Basic shapes */
    clip-path: circle(50% at center);
    clip-path: ellipse(25% 40% at 50% 50%);
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    
    /* URL to SVG path */
    clip-path: url(#clipPath);
}
```

### Mask
Creates masks for partial visibility of elements.

```css
.element {
    /* Image mask */
    mask-image: url(mask.png);
    
    /* Gradient mask */
    mask-image: linear-gradient(to right, transparent, black);
    
    /* Multiple masks */
    mask-image: 
        linear-gradient(black, transparent),
        url(texture.png);
}
```

## CSS Filter and Blend

### Filter
Applies graphical effects to elements.

```css
.element {
    filter: blur(5px);
    filter: brightness(150%);
    filter: contrast(200%);
    filter: grayscale(100%);
    filter: hue-rotate(90deg);
    filter: invert(100%);
    filter: opacity(50%);
    filter: saturate(200%);
    filter: sepia(100%);
    
    /* Multiple filters */
    filter: contrast(175%) brightness(103%);
}
```

### Backdrop Filter
Applies filters to the area behind an element.

```css
.glass-effect {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    backdrop-filter: brightness(60%);
    
    /* Multiple backdrop filters */
    backdrop-filter: blur(10px) brightness(90%);
}
```

### Blend Mode
Controls how elements blend with their background.

```css
.element {
    mix-blend-mode: multiply;
    mix-blend-mode: screen;
    mix-blend-mode: overlay;
    mix-blend-mode: darken;
    mix-blend-mode: lighten;
    mix-blend-mode: color-dodge;
    mix-blend-mode: color-burn;
    mix-blend-mode: difference;
    mix-blend-mode: exclusion;
}
```

### Background Blend Mode
Controls how multiple backgrounds blend together.

```css
.element {
    background-image: 
        url(texture.png),
        url(pattern.png);
    background-blend-mode: multiply;
    
    /* Multiple blend modes */
    background-blend-mode: screen, multiply;
}
```

## SVG

### SVG Size
Controls SVG dimensions and viewBox.

```html
<svg width="100" height="100" viewBox="0 0 100 100">
    <!-- SVG content -->
</svg>

<style>
.responsive-svg {
    width: 100%;
    height: auto;
    max-width: 500px;
}
</style>
```

### SVG Fill
Controls fill color and patterns.

```html
<svg>
    <!-- Solid color -->
    <rect fill="red" />
    
    <!-- Gradient -->
    <rect fill="url(#gradient)" />
    
    <!-- Pattern -->
    <rect fill="url(#pattern)" />
</svg>

<style>
.svg-element {
    fill: currentColor; /* Inherits color */
    fill-opacity: 0.5;
}
</style>
```

### SVG Stroke
Controls outline properties.

```html
<svg>
    <path
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="5,5"
    />
</svg>
```

### SVG Marker
Defines markers for use on paths, lines, and polylines.

```html
<svg>
    <!-- Define marker -->
    <defs>
        <marker id="arrow" 
                viewBox="0 0 10 10" 
                refX="5" 
                refY="5"
                markerWidth="6" 
                markerHeight="6"
                orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="black"/>
        </marker>
    </defs>
    
    <!-- Use marker -->
    <path d="M10 10 L90 90" 
          stroke="black" 
          marker-end="url(#arrow)"
          fill="none"/>
</svg>

<style>
.path-with-markers {
    marker-start: url(#start-marker);
    marker-mid: url(#mid-marker);
    marker-end: url(#end-marker);
}
</style>
```

### SVG Shape
Basic shape elements in SVG.

```html
<svg viewBox="0 0 100 100">
    <!-- Rectangle -->
    <rect x="10" y="10" 
          width="80" height="50" 
          rx="5" ry="5"/>
    
    <!-- Circle -->
    <circle cx="50" cy="50" r="40"/>
    
    <!-- Ellipse -->
    <ellipse cx="50" cy="50" 
             rx="40" ry="30"/>
    
    <!-- Line -->
    <line x1="10" y1="10" 
          x2="90" y2="90" 
          stroke="black"/>
    
    <!-- Polygon -->
    <polygon points="50,10 90,90 10,90" 
             fill="blue"/>
    
    <!-- Polyline -->
    <polyline points="10,10 30,30 50,10" 
              fill="none" stroke="black"/>
</svg>
```

### SVG Text
Text elements and text paths in SVG.

```html
<svg viewBox="0 0 100 100">
    <!-- Basic text -->
    <text x="10" y="50" 
          font-family="Arial" 
          font-size="16">
        Hello SVG
    </text>
    
    <!-- Text on path -->
    <defs>
        <path id="curve" 
              d="M10 50 C30 10, 70 10, 90 50"/>
    </defs>
    <text>
        <textPath href="#curve">
            Text following a curved path
        </textPath>
    </text>
    
    <!-- Tspan for text formatting -->
    <text x="10" y="50">
        Normal 
        <tspan fill="red" 
               font-weight="bold">
            Bold Red
        </tspan> 
        Text
    </text>
</svg>
```

### SVG Title
Adds accessible titles and descriptions to SVG elements.

```html
<svg>
    <!-- Element with title and description -->
    <circle cx="50" cy="50" r="40">
        <title>Red Circle</title>
        <desc>A bright red circle in the center</desc>
    </circle>
    
    <!-- Group with title -->
    <g>
        <title>Chart Elements</title>
        <!-- Chart components -->
    </g>
</svg>
```

### SVG Group
Groups SVG elements for collective transforms and styling.

```html
<svg>
    <!-- Basic grouping -->
    <g fill="blue" stroke="black">
        <rect x="10" y="10" width="50" height="50"/>
        <circle cx="60" cy="60" r="25"/>
    </g>
    
    <!-- Transformed group -->
    <g transform="translate(100, 100) rotate(45)">
        <rect width="20" height="20"/>
        <circle cx="10" cy="10" r="10"/>
    </g>
</svg>
```

### SVG Defs
Defines reusable elements.

```html
<svg>
    <defs>
        <!-- Gradient definition -->
        <linearGradient id="gradient">
            <stop offset="0%" stop-color="blue"/>
            <stop offset="100%" stop-color="red"/>
        </linearGradient>
        
        <!-- Pattern definition -->
        <pattern id="pattern" 
                width="10" height="10" 
                patternUnits="userSpaceOnUse">
            <circle cx="5" cy="5" r="2" fill="black"/>
        </pattern>
        
        <!-- Symbol definition -->
        <symbol id="icon" viewBox="0 0 100 100">
            <path d="M10 10 L90 90 M90 10 L10 90"/>
        </symbol>
    </defs>
    
    <!-- Using defined elements -->
    <rect fill="url(#gradient)"/>
    <circle fill="url(#pattern)"/>
    <use href="#icon" width="50" height="50"/>
</svg>
```

### SVG Path
Creates complex shapes using path commands.

```html
<svg>
    <!-- Basic path -->
    <path d="M10 10 L90 90" stroke="black"/>
    
    <!-- Complex path with curves -->
    <path d="M10 10 
             C30 10, 70 10, 90 10
             Q90 50, 50 50
             T10 90
             Z"
          fill="none" stroke="black"/>
    
    <!-- Path commands:
         M = Move to
         L = Line to
         H = Horizontal line
         V = Vertical line
         C = Cubic Bézier
         Q = Quadratic Bézier
         T = Smooth quadratic Bézier
         S = Smooth cubic Bézier
         A = Arc
         Z = Close path -->
</svg>
```

### SVG Clip Path
Creates complex clipping masks.

```html
<svg>
    <defs>
        <!-- Clip path definition -->
        <clipPath id="clip">
            <circle cx="50" cy="50" r="40"/>
        </clipPath>
        
        <!-- Complex clip path -->
        <clipPath id="text-clip">
            <text x="0" y="50" 
                  font-size="50">
                CLIP
            </text>
        </clipPath>
    </defs>
    
    <!-- Using clip paths -->
    <image clip-path="url(#clip)" 
           href="image.jpg"/>
    
    <rect clip-path="url(#text-clip)" 
          width="100" height="100" 
          fill="gradient"/>
</svg>
```

### SVG Mask
Creates transparency masks.

```html
<svg>
    <defs>
        <!-- Basic mask -->
        <mask id="fade">
            <linearGradient id="fade-gradient">
                <stop offset="0" 
                      stop-color="white" 
                      stop-opacity="1"/>
                <stop offset="1" 
                      stop-color="white" 
                      stop-opacity="0"/>
            </linearGradient>
            <rect width="100" height="100" 
                  fill="url(#fade-gradient)"/>
        </mask>
        
        <!-- Complex mask -->
        <mask id="text-mask">
            <rect width="100%" height="100%" 
                  fill="white"/>
            <text x="10" y="50" 
                  fill="black" 
                  font-size="24">
                Masked Text
            </text>
        </mask>
    </defs>
    
    <!-- Using masks -->
    <image mask="url(#fade)" href="image.jpg"/>
    <rect mask="url(#text-mask)" 
          width="100" height="100" 
          fill="blue"/>
</svg>
```

### SVG Filter
Applies special effects to SVG elements.

```html
<svg>
    <defs>
        <!-- Blur filter -->
        <filter id="blur">
            <feGaussianBlur stdDeviation="2"/>
        </filter>
        
        <!-- Drop shadow -->
        <filter id="shadow">
            <feOffset dx="2" dy="2"/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix"
                values="0 0 0 0 0   
                        0 0 0 0 0
                        0 0 0 0 0  
                        0 0 0 0.5 0"/>
            <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
    </defs>
    
    <!-- Using filters -->
    <circle filter="url(#blur)" 
            cx="50" cy="50" r="40"/>
    <rect filter="url(#shadow)" 
          x="10" y="10" 
          width="80" height="80"/>
</svg>
```

### SVG Animation
Animates SVG elements without JavaScript.

```html
<svg>
    <!-- Animate attributes -->
    <circle cx="50" cy="50" r="20">
        <animate attributeName="r"
                 values="20;40;20"
                 dur="2s"
                 repeatCount="indefinite"/>
    </circle>
    
    <!-- Animate transform -->
    <rect width="20" height="20">
        <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="3s"
            repeatCount="indefinite"/>
    </rect>
    
    <!-- Animate motion -->
    <circle r="10">
        <animateMotion
            path="M10 10 L90 90"
            dur="2s"
            repeatCount="indefinite"/>
    </circle>
</svg>
```

### SVG API
JavaScript interaction with SVG elements.

```javascript
// Create SVG elements
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

// Set attributes
circle.setAttribute("cx", "50");
circle.setAttribute("cy", "50");
circle.setAttribute("r", "40");

// SVG transformation
circle.setAttribute("transform", "translate(100,100) rotate(45)");

// Get SVG point
const pt = svg.createSVGPoint();
pt.x = 100;
pt.y = 100;

// Get bounding box
const bbox = element.getBBox();

// Check if point is in path
const path = document.querySelector("path");
const isPointInPath = path.isPointInStroke(pt);
```

### SVG Reference
Common SVG patterns and techniques.

```html
<!-- Responsive SVG -->
<svg viewBox="0 0 100 100" 
     preserveAspectRatio="xMidYMid meet">
    <!-- Content -->
</svg>

<!-- External SVG -->
<object data="icon.svg" 
        type="image/svg+xml">
</object>

<!-- Inline SVG -->
<svg>
    <use href="sprite.svg#icon"/>
</svg>

<!-- SVG with fallback -->
<svg>
    <image href="image.jpg" 
           fallback="fallback.png"/>
</svg>

<style>
/* SVG styling best practices */
.svg-icon {
    width: 1em;
    height: 1em;
    fill: currentColor;
    vertical-align: middle;
}

/* Responsive SVG container */
.svg-container {
    width: 100%;
    padding-bottom: 100%; /* 1:1 aspect ratio */
    position: relative;
}

.svg-container svg {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>
```

# Advanced CSS Documentation

## CSS Interaction

### Cursor
```css
/* Basic cursor types */
cursor: pointer;      /* Hand pointer */
cursor: default;      /* Default arrow */
cursor: text;         /* Text I-beam */
cursor: move;         /* Move icon */
cursor: not-allowed;  /* Forbidden action */
cursor: grab;         /* Grab hand */
cursor: grabbing;     /* Grabbing hand */

/* Custom cursor */
cursor: url('path-to-cursor.png'), auto;
```

### Pointer Events
```css
/* Control how element responds to pointer events */
pointer-events: none;      /* Element ignores pointer events */
pointer-events: auto;      /* Default behavior */
pointer-events: all;       /* Element receives all pointer events */
```

### Touch Action
```css
.element {
  /* Control touch behavior */
  touch-action: none;              /* Disable all touch actions */
  touch-action: pan-x;             /* Allow horizontal panning */
  touch-action: pan-y;             /* Allow vertical panning */
  touch-action: manipulation;      /* Optimize for touch */
  touch-action: pinch-zoom;        /* Allow pinch zooming */
}
```

### Resize
```css
/* Allow element resizing */
resize: none;        /* Disable resizing */
resize: both;        /* Allow both directions */
resize: horizontal;  /* Only horizontal */
resize: vertical;    /* Only vertical */
```

### User Select
```css
/* Control text selection */
user-select: none;        /* Prevent selection */
user-select: text;        /* Allow selection */
user-select: all;         /* Select all content in one click */
user-select: auto;        /* Default browser behavior */
```

### Caret Color
```css
/* Customize text cursor color */
caret-color: red;
caret-color: transparent;
caret-color: currentColor;
```

## CSS Scrolling

### Scroll Behavior
```css
/* Control scroll animation */
scroll-behavior: smooth;   /* Smooth scrolling */
scroll-behavior: auto;     /* Instant scrolling */

/* For JavaScript scrolling */
element.scrollIntoView({ behavior: 'smooth' });
```

### Overscroll Behavior
```css
/* Control scroll chain behavior */
overscroll-behavior: auto;      /* Default chaining */
overscroll-behavior: contain;   /* Prevent scroll chaining */
overscroll-behavior: none;      /* Prevent bouncing */

/* Specific axis control */
overscroll-behavior-x: contain;
overscroll-behavior-y: contain;
```

### Scroll Snap
```css
/* Container */
.scroll-container {
  scroll-snap-type: x mandatory;  /* Horizontal snap */
  scroll-snap-type: y proximity;  /* Vertical snap */
}

/* Snap items */
.snap-item {
  scroll-snap-align: start;
  scroll-snap-align: center;
  scroll-snap-align: end;
}

/* Snap stop */
scroll-snap-stop: always;
scroll-snap-stop: normal;
```

### Overflow Anchor
```css
/* Control scroll position during DOM changes */
overflow-anchor: auto;    /* Enable scroll anchoring */
overflow-anchor: none;    /* Disable scroll anchoring */
```

### Overflow Scrolling
```css
/* iOS momentum scrolling */
-webkit-overflow-scrolling: touch;
overflow-scrolling: touch;

/* Basic overflow control */
overflow: auto;
overflow: scroll;
overflow: hidden;
```

### Horizontal Scrolling
```css
.scroll-horizontal {
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;  /* Firefox */
  
  /* Hide scrollbar for Chrome/Safari/Opera */
  &::-webkit-scrollbar {
    display: none;
  }
}
```

### Custom Scrollbar
```css
/* Webkit browsers */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}
```

## Media Query

### Media Logical Query
```css
/* Combining queries */
@media (min-width: 768px) and (max-width: 1024px) {
  /* styles */
}

@media not screen and (color) {
  /* styles */
}

@media only screen and (orientation: landscape) {
  /* styles */
}
```

### Media Type Query
```css
@media screen {
  /* Styles for screen devices */
}

@media print {
  /* Styles for print */
}

@media speech {
  /* Styles for screen readers */
}
```

### Media Feature Query
```css
/* Width and height */
@media (min-width: 768px) {
  /* styles */
}

@media (max-height: 600px) {
  /* styles */
}

/* Orientation */
@media (orientation: landscape) {
  /* styles */
}
```

### Print Device Query
```css
@media print {
  /* Hide unnecessary elements */
  .no-print {
    display: none;
  }
  
  /* Ensure dark text on light background */
  body {
    color: #000;
    background: #fff;
  }
  
  /* Show URLs after links */
  a[href]::after {
    content: " (" attr(href) ")";
  }
}
```

### Hover and Pointer Device Query
```css
/* Check if device supports hover */
@media (hover: hover) {
  .button:hover {
    background: #ddd;
  }
}

/* Check pointer precision */
@media (pointer: fine) {
  /* Styles for mouse/touchpad */
}

@media (pointer: coarse) {
  /* Styles for touch devices */
}
```

### Foldable Device Query
```css
/* Detect fold in the screen */
@media (spanning: single-fold-vertical) {
  /* styles */
}

@media (spanning: single-fold-horizontal) {
  /* styles */
}
```

### Display Mode Query
```css
@media (display-mode: fullscreen) {
  /* styles */
}

@media (display-mode: standalone) {
  /* styles */
}

@media (display-mode: minimal-ui) {
  /* styles */
}

@media (display-mode: browser) {
  /* styles */
}
```

### Resolution Query
```css
/* Target specific pixel densities */
@media (min-resolution: 2dppx) {
  /* Retina display styles */
}

@media (min-resolution: 300dpi) {
  /* High-resolution printer styles */
}
```

### Contrast Query
```css
@media (prefers-contrast: high) {
  /* High contrast styles */
}

@media (prefers-contrast: low) {
  /* Low contrast styles */
}

@media (prefers-contrast: custom) {
  /* User custom contrast styles */
}
```

### Color Scheme Query
```css
@media (prefers-color-scheme: dark) {
  /* Dark mode styles */
  :root {
    --background: #1a1a1a;
    --text: #ffffff;
  }
}

@media (prefers-color-scheme: light) {
  /* Light mode styles */
  :root {
    --background: #ffffff;
    --text: #1a1a1a;
  }
}
```

### Reduced Motion Query
```css
@media (prefers-reduced-motion: reduce) {
  /* Remove animations */
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Scripting Query
```css
@media (scripting: enabled) {
  /* Styles when JavaScript is available */
}

@media (scripting: none) {
  /* Fallback styles when no JavaScript */
}
```

### Media Query Support Detection
```css
/* Using @supports with media queries */
@supports (display: grid) and (max-width: 768px) {
  /* styles */
}

/* JavaScript detection */
if (window.matchMedia("(min-width: 768px)").matches) {
  // JavaScript code
}
```

### Media Query API
```javascript
// JavaScript Media Query API
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleTabletChange(e) {
  if (e.matches) {
    /* Tablet and below */
  }
}

mediaQuery.addListener(handleTabletChange);
```

## Container Query

### Container Size Query
```css
/* Define a container */
.container {
  container-type: inline-size;
  container-name: main;
}

/* Query the container */
@container main (min-width: 400px) {
  .child {
    /* styles */
  }
}
```

### Container Style Query
```css
/* Query container styles */
@container style(--theme: dark) {
  .child {
    /* styles for dark theme */
  }
}
```

### Container Query Reference
```css
/* Combined queries */
@container main (min-width: 400px) and style(--columns > 1) {
  /* styles */
}

/* Shorthand */
container: main / inline-size;
```

## Feature Query

### Supports At Rule
```css
@supports (display: grid) {
  /* Grid layout styles */
}

@supports not (display: grid) {
  /* Fallback styles */
}

@supports (display: grid) and (gap: 1rem) {
  /* Styles for grid with gap support */
}
```

### Supports API
```javascript
// JavaScript feature detection
if (CSS.supports('display', 'grid')) {
  // Code for grid support
}

if (CSS.supports('(display: grid) and (gap: 1rem)')) {
  // Code for grid and gap support
}
```

## CSS Accessibility

### Screen Reader Only
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Focusable Areas
```css
/* Focus styles */
:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Focus-visible (keyboard only) */
:focus-visible {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}

/* Remove focus for mouse users */
:focus:not(:focus-visible) {
  outline: none;
}
```

### Keyboard Styles
```css
/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### Graceful Degradation
```css
/* Progressive enhancement */
.component {
  /* Base styles */
  display: block;
  
  /* Modern layout if supported */
  @supports (display: grid) {
    display: grid;
  }
}
```

### ARIA
```css
/* Hide elements from screen readers */
[aria-hidden="true"] {
  display: none;
}

/* Style based on expanded state */
[aria-expanded="true"] {
  /* expanded styles */
}

/* Style based on selected state */
[aria-selected="true"] {
  /* selected styles */
}
```

### DPR (Device Pixel Ratio)
```css
/* High DPR images */
@media (-webkit-min-device-pixel-ratio: 2), 
       (min-resolution: 192dpi) {
  .image {
    background-image: url('high-res.jpg');
  }
}
```

## CSS Performance

### Will Change
```css
/* Optimize animations */
.element {
  will-change: transform;
  will-change: opacity;
  will-change: contents;
}

/* Remove optimization when done */
.element {
  will-change: auto;
}
```

### Contain
```css
/* Isolation for performance */
.element {
  contain: content;    /* Content only */
  contain: size;       /* Fixed size */
  contain: layout;     /* Layout isolation */
  contain: paint;      /* Paint isolation */
  contain: strict;     /* All containment */
}
```

### Content Visibility
```css
/* Optimize rendering */
.section {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px;  /* Estimated size */
}
```

### CSS Selectors Performance
```css
/* Efficient selectors */
.class {} /* Fast */
#id {} /* Fast */

/* Less efficient */
div span {} /* Slow */
.class * {} /* Very slow */
[attribute] {} /* Slower than classes */
```

### CSS Triggers Performance
```css
/* Properties that trigger layout */
.layout-trigger {
  width: 100px;     /* Triggers layout */
  height: 100px;    /* Triggers layout */
}

/* Properties that only trigger paint */
.paint-trigger {
  background: red;  /* Triggers paint */
  color: blue;      /* Triggers paint */
}

/* Properties for composition only */
.compose-trigger {
  transform: translateX(10px);  /* GPU accelerated */
  opacity: 0.5;                /* GPU accelerated */
}
```

### CSS Loading Performance
```css
/* Critical CSS inline */
<style>
  /* Critical styles here */
</style>

/* Async CSS loading */
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### Animation Performance
```css
/* Hardware-accelerated animations */
.optimized {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Use opacity and transform */
@keyframes performant {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100px);
    opacity: 0;
  }
}
```

### CSS Imports Performance
```css
/* Avoid @import in CSS */
/* Bad */
@import url('other-styles.css');

/* Better - Use HTML link tags */
<link rel="stylesheet" href="styles.css">
<link rel="stylesheet" href="other-styles.css">
```

### CSS Performance Reference
```css
/* Best practices */
.performance {
  /* Use transforms instead of position changes */
  transform: translate(10px, 20px);
  
  /* Use opacity instead of visibility */
  opacity: 0;
  
  /* Reduce paint areas */
  will-change: transform;
  
  /* Layer promotion */
  transform: translateZ(0);
}
```

## CSS Hacks

### Property Hacks
```css
/* IE-specific hacks */
.element {
  property: value \9; /* IE8 and below */
  *property: value; /* IE7 */
  _property: value; /* IE6 */
}

/* Safari-specific hack */
@media not all and (min-resolution:.001dpcm) {
  @supports (-webkit-appearance:none) {
    .safari-only {
      /* Safari-only styles */
    }
  }
}
```

### Selector Hacks
```css
/* Browser-specific selectors */
/* IE10+ */
_:-ms-lang(x), .ie-only {
  /* styles */
}

/* Firefox only */
@-moz-document url-prefix() {
  .firefox-only {
    /* styles */
  }
}

/* Safari only */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  .safari-only {
    /* styles */
  }
}
```

### CSS Hacks Reference
```css
/* Common browser detection */
/* Chrome & Safari */
@media screen and (-webkit-min-device-pixel-ratio:0) {
  /* styles */
}

/* Edge */
@supports (-ms-ime-align:auto) {
  /* styles */
}

/* Mobile Safari */
@supports (-webkit-touch-callout: none) {
  /* styles */
}
```

## CSS Tools

### PostCSS
```javascript
// postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-properties': true,
        'custom-media-queries': true
      }
    }),
    require('cssnano')({
      preset: 'default'
    })
  ]
}
```

### StyleLint
```javascript
// .stylelintrc.json
{
  "extends": "stylelint-config-standard",
  "rules": {
    "indentation": 2,
    "string-quotes": "single",
    "no-duplicate-selectors": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "selector-combinator-space-after": "always",
    "declaration-block-trailing-semicolon": "always",
    "block-no-empty": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true
  }
}
```

### Tailwind
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#5f6368',
      },
      spacing: {
        '128': '32rem',
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

## CSS Style Guide

### CSS Property Order
```css
/* Recommended property order */
.element {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Display & Box Model */
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 10px;

  /* Visual */
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  
  /* Typography */
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  line-height: 1.5;
  
  /* Animation */
  transition: all 0.3s ease;
  transform: translateX(0);
}
```

### CSS Naming Convention
```css
/* BEM Naming Convention */
.block {}
.block__element {}
.block--modifier {}

/* Example */
.card {}
.card__title {}
.card__image {}
.card--featured {}

/* SMACSS */
/* Base */
.button {}

/* Layout */
.l-header {}
.l-sidebar {}

/* Module */
.mod-newsletter {}

/* State */
.is-active {}
.is-hidden {}

/* Theme */
.theme-dark {}
```

### CSS Naming System and Architecture
```css
/* ITCSS (Inverted Triangle CSS) */

/* Settings */
:root {
  --color-primary: #007bff;
  --spacing-unit: 8px;
}

/* Tools */
@mixin center {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Generic */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Elements */
body {
  font-family: system-ui;
  line-height: 1.5;
}

/* Objects */
.o-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit);
}

/* Components */
.c-button {
  /* Component-specific styles */
}

/* Utilities */
.u-text-center {
  text-align: center;
}

/* Atomic CSS Example */
.p-1 { padding: 0.25rem; }
.m-2 { margin: 0.5rem; }
.flex { display: flex; }
.items-center { align-items: center; }
```

Best Practices for CSS Architecture:
1. Follow a consistent naming convention
2. Use meaningful, descriptive names
3. Keep specificity low
4. Write modular, reusable code
5. Document complex components
6. Use CSS custom properties for theming
7. Implement responsive design patterns
8. Optimize performance
9. Follow accessibility guidelines
10. Maintain consistent formatting

Remember:
- Keep selectors as shallow as possible
- Avoid !important
- Use comments for complex sections
- Follow team conventions
- Test across browsers
- Consider mobile-first approach
- Use version control
- Document breaking changes