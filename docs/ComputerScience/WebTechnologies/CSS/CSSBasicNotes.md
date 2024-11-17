# CSS Basic Notes

## Table of Contents
- [CSS Working Group](#css-working-group)
- [CSS Cascading and Inheritance](#css-cascading-and-inheritance)
- [CSS Selectors](#css-selectors)
- [CSS Data Types and Values](#css-data-types-and-values)
- [CSS Logical Properties](#css-logical-properties)
- [CSS Variables](#css-variables)
- [CSS Colors](#css-colors)
- [CSS Math Functions](#css-math-functions)
- [CSS Text Properties](#css-text-properties)
- [CSS Font Properties](#css-font-properties)
- [CSS Content and Counters](#css-content-and-counters)

## CSS Working Group

The CSS Working Group (CSSWG) is part of the W3C (World Wide Web Consortium) that develops specifications for CSS. They are responsible for:

- Developing new CSS features
- Maintaining existing specifications
- Ensuring backward compatibility
- Coordinating with browser vendors

### Key Resources:
- [CSSWG GitHub Repository](https://github.com/w3c/csswg-drafts)
- [CSS Working Group Blog](https://www.w3.org/blog/CSS/)

## CSS Cascading and Inheritance

### Cascading Order

The cascade determines how competing CSS rules are applied. The order of precedence (from highest to lowest):

1. Importance
    - User agent !important declarations
    - User !important declarations
    - Author !important declarations
    - Author declarations
    - User declarations
    - User agent declarations

2. Specificity
3. Order of appearance

### Layer (@layer)

CSS Cascade Layers allow authors to group styles and control their precedence:

```css
@layer framework {
  /* Framework styles */
}

@layer theme {
  /* Theme styles */
}

@layer custom {
  /* Custom styles */
}
```

Later layers take precedence over earlier layers.

### Scope (@scope)

Scoped styles allow limiting style rules to specific DOM subtrees:

```css
@scope (.card) {
  img {
    border-radius: 8px;
  }
}
```

### Nesting

CSS nesting allows writing nested selectors:

```css
.parent {
  color: blue;
  
  & .child {
    color: red;
  }
}
```

### Specificity

Specificity is calculated as a four-part value (a,b,c,d):
- a: Style attribute
- b: ID selectors
- c: Classes, attributes, and pseudo-classes
- d: Elements and pseudo-elements

## CSS Selectors

### Universal Selector
```css
* {
  box-sizing: border-box;
}
```

### Type Selector
```css
p {
  margin: 1em 0;
}
```

### Attribute Selector
```css
/* Exact match */
[data-type="primary"] {}

/* Contains value */
[class*="btn-"] {}

/* Starts with */
[href^="https"] {}

/* Ends with */
[src$=".jpg"] {}
```

### Combinators

#### Descendant Combinator
```css
article p {}  /* Matches any p inside article */
```

#### Child Combinator
```css
article > p {} /* Matches direct p children of article */
```

#### General Sibling Combinator
```css
h2 ~ p {} /* Matches p elements after h2 */
```

#### Adjacent Sibling Combinator
```css
h2 + p {} /* Matches p immediately after h2 */
```

### Pseudo-Classes

#### Location Pseudo-Classes
- `:link`
- `:visited`
- `:target`
- `:target-within`

#### User Action Pseudo-Classes
- `:hover`
- `:active`
- `:focus`
- `:focus-visible`
- `:focus-within`

#### Input Pseudo-Classes
- `:enabled`
- `:disabled`
- `:read-only`
- `:read-write`
- `:placeholder-shown`
- `:default`
- `:checked`
- `:indeterminate`
- `:valid`
- `:invalid`
- `:in-range`
- `:out-of-range`
- `:required`
- `:optional`

#### Structural Pseudo-Classes
- `:root`
- `:empty`
- `:first-child`
- `:last-child`
- `:only-child`
- `:first-of-type`
- `:last-of-type`
- `:only-of-type`
- `:nth-child()`
- `:nth-last-child()`
- `:nth-of-type()`
- `:nth-last-of-type()`

### Pseudo-Elements

#### First Letter and Line
```css
p::first-letter {}
p::first-line {}
```

#### Selection
```css
::selection {
  background-color: yellow;
  color: black;
}
```

#### Before and After
```css
.quote::before {
  content: "「";
}
.quote::after {
  content: "」";
}
```

## CSS Data Types and Values

### Global Values
- `inherit`: Takes the computed value from the parent element
- `initial`: Sets the property to its default value
- `revert`: Reverts to the browser's default styling
- `unset`: Combination of inherit and initial

### Value Processing

1. **Specified Value**: The value in the stylesheet
2. **Computed Value**: Value after resolving relative values
3. **Used Value**: Final value after layout calculations
4. **Actual Value**: Value actually applied by the browser

## CSS Variables (Custom Properties)

### Basic Usage
```css
:root {
  --primary-color: #007bff;
}

.button {
  background-color: var(--primary-color);
}
```

### Scope Variables
```css
.component {
  --component-bg: #eee;
  background: var(--component-bg);
}
```

### Dark Mode Variables
```css
:root {
  --text-color: black;
  --bg-color: white;
}

@media (prefers-color-scheme: dark) {
  :root {
    --text-color: white;
    --bg-color: black;
  }
}
```

## CSS Colors

### Color Formats

#### HSL Colors
```css
.element {
  color: hsl(0, 100%, 50%);  /* Red */
  color: hsla(0, 100%, 50%, 0.5);  /* Semi-transparent red */
}
```

#### HWB Colors
```css
.element {
  color: hwb(0 0% 0%);  /* Red */
  color: hwb(120 10% 10%);  /* Green with white and black mixed */
}
```

### Color Functions

#### Color Mix
```css
.element {
  background-color: color-mix(in srgb, #ff0000 50%, #0000ff 50%);
}
```

## CSS Math Functions

### calc()
```css
.element {
  width: calc(100% - 2rem);
  margin: calc(1rem + 2px);
}
```

### min() and max()
```css
.element {
  width: min(100%, 500px);
  height: max(100px, 20vh);
}
```

### clamp()
```css
.text {
  font-size: clamp(1rem, 2.5vw, 2rem);
}
```

## CSS Text Properties

### Text Alignment
```css
.text {
  text-align: start | end | left | right | center | justify;
  text-align-last: auto | start | end | left | right | center | justify;
}
```

### Text Decoration
```css
.text {
  text-decoration-line: none | underline | overline | line-through;
  text-decoration-style: solid | double | dotted | dashed | wavy;
  text-decoration-color: currentColor | <color>;
  text-decoration-thickness: auto | from-font | <length>;
}
```

### Text Overflow
```css
.text {
  text-overflow: clip | ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

## CSS Font Properties

### Font Family
```css
.text {
  font-family: "System UI", -apple-system, sans-serif;
}
```

### Font Loading and Performance
```css
@font-face {
  font-family: "Custom Font";
  src: url("/fonts/custom.woff2") format("woff2");
  font-display: swap;
}
```

### Variable Fonts
```css
@font-face {
  font-family: "Variable Font";
  src: url("/fonts/variable.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-stretch: 75% 125%;
}
```

## CSS Content and Counters

### Generated Content
```css
.chapter::before {
  content: "Chapter " counter(chapter) ": ";
}
```

### Counters
```css
body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ". ";
}
```

## References and Further Reading

1. [MDN Web Docs - CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
2. [W3C CSS Specifications](https://www.w3.org/Style/CSS/specs.en.html)
3. [CSS Working Group Editor Drafts](https://drafts.csswg.org/)
4. [Can I Use](https://caniuse.com/) - Browser compatibility tables
5. [CSS Tricks](https://css-tricks.com/) - Tutorials and articles
6. [Modern CSS Solutions](https://moderncss.dev/) - Modern CSS techniques

Note: This documentation provides a comprehensive overview of CSS features and properties. For the most up-to-date information and browser compatibility, always consult the official documentation and specifications.