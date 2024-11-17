# CSS Animation Documentation

## CSS Transform

### Translate Transform
```css
/* Basic 2D Translations */
.translate-2d {
  transform: translateX(20px);
  transform: translateY(20px);
  transform: translate(20px, 20px);
}

/* 3D Translations */
.translate-3d {
  transform: translateZ(20px);
  transform: translate3d(x, y, z);
}

/* Percentage translations */
.translate-percent {
  transform: translateX(50%);  /* 50% of element's width */
  transform: translateY(-50%); /* 50% of element's height */
}

/* Center element absolutely */
.center-absolute {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Scale Transform
```css
/* Basic scaling */
.scale {
  transform: scale(1.5);      /* Both axes */
  transform: scaleX(2);       /* X-axis only */
  transform: scaleY(0.5);     /* Y-axis only */
  transform: scale(2, 0.5);   /* Different values */
}

/* 3D scaling */
.scale-3d {
  transform: scaleZ(2);
  transform: scale3d(x, y, z);
}

/* Scale with transform-origin */
.scale-origin {
  transform-origin: left top;
  transform: scale(1.5);
}
```

### Rotate Transform
```css
/* 2D rotation */
.rotate-2d {
  transform: rotate(45deg);
  transform: rotate(-45deg);
  transform: rotate(0.5turn);
  transform: rotate(200grad);
  transform: rotate(3.14rad);
}

/* 3D rotation */
.rotate-3d {
  transform: rotateX(45deg);
  transform: rotateY(45deg);
  transform: rotateZ(45deg);
  transform: rotate3d(1, 1, 1, 45deg);
}

/* Multiple rotations */
.rotate-multiple {
  transform: rotateX(45deg) rotateY(45deg) rotateZ(45deg);
}
```

### Skew Transform
```css
/* Basic skewing */
.skew {
  transform: skew(20deg);         /* Both axes */
  transform: skewX(20deg);        /* X-axis only */
  transform: skewY(20deg);        /* Y-axis only */
  transform: skew(20deg, 10deg);  /* Different values */
}

/* Creative uses */
.parallelogram {
  transform: skew(-20deg);
}

/* Text correction in skewed container */
.parallelogram-text {
  transform: skew(20deg); /* Reverse the container skew */
}
```

### Matrix Transform
```css
/* 2D Matrix */
.matrix-2d {
  transform: matrix(a, b, c, d, tx, ty);
  /* Example: */
  transform: matrix(1, 0, 0, 1, 100, 100); /* Translation */
  transform: matrix(2, 0, 0, 2, 0, 0);     /* Scale */
}

/* 3D Matrix */
.matrix-3d {
  transform: matrix3d(
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  );
}
```

### Transform Origin
```css
.transform-origin {
  /* Keywords */
  transform-origin: top;
  transform-origin: bottom;
  transform-origin: left;
  transform-origin: right;
  transform-origin: center;

  /* Percentages */
  transform-origin: 50% 50%;
  transform-origin: 0% 100%;

  /* Lengths */
  transform-origin: 100px 50px;

  /* Multiple values */
  transform-origin: left top;
  transform-origin: right bottom;

  /* 3D */
  transform-origin: 50% 50% 50px;
}
```

### Individual Transform
```css
/* Separate properties for better performance */
.individual-transform {
  translate: 100px 200px;
  rotate: 45deg;
  scale: 1.5;
}

/* Combined with opacity for smooth animations */
.smooth-transform {
  opacity: 0;
  translate: 0 20px;
  transition: opacity 0.3s, translate 0.3s;
}

.smooth-transform:hover {
  opacity: 1;
  translate: 0 0;
}
```

### Transform Style
```css
.transform-style {
  /* Preserve 3D space for children */
  transform-style: preserve-3d;
  transform-style: flat; /* Default */
}

/* 3D Card Flip Example */
.card-container {
  perspective: 1000px;
}

.card {
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover {
  transform: rotateY(180deg);
}
```

### Transform Perspective
```css
/* Parent perspective */
.container {
  perspective: 1000px;
  perspective-origin: center;
}

/* Individual element perspective */
.element {
  transform: perspective(1000px) rotateY(45deg);
}

/* Advanced 3D example */
.scene {
  perspective: 600px;
  perspective-origin: 50% 50%;
}

.cube {
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateY(45deg);
}
```

### Backface Visibility
```css
.backface {
  backface-visibility: hidden;
  backface-visibility: visible; /* Default */
}

/* Card flip with hidden backface */
.card-front,
.card-back {
  position: absolute;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}
```

### Transform Container
```css
/* Container properties */
.container {
  transform: translate3d(0, 0, 0); /* Create containing block */
  will-change: transform;          /* Performance optimization */
}

/* Fixed position relative to transformed container */
.fixed-element {
  position: fixed;
  transform: translate3d(0, 0, 0); /* Force GPU acceleration */
}
```

### Transform Alignment
```css
/* Center alignment */
.center-transform {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/* Grid alignment */
.grid-item {
  transform: scale(0.9);
  place-items: center;
}

/* Flex alignment with transform */
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-item {
  transform-origin: center center;
}
```

### Transform Reference
```css
/* Common patterns */
.transform-patterns {
  /* GPU acceleration */
  transform: translateZ(0);
  transform: translate3d(0, 0, 0);

  /* Reset transform */
  transform: none;

  /* Multiple transforms */
  transform: 
    translateX(100px)
    rotate(45deg)
    scale(1.5);
}
```

## CSS Transition

### Transition Property
```css
/* Basic transitions */
.transition {
  transition: all 0.3s ease;
  transition: transform 0.3s ease;
  transition: opacity 0.3s ease;
}

/* Multiple properties */
.multiple-transitions {
  transition: 
    transform 0.3s ease,
    opacity 0.2s ease-in,
    background-color 0.4s linear;
}

/* Specific properties */
.specific-transitions {
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;
  transition-delay: 0.1s;
}
```

### Transition Timing Function
```css
/* Built-in timing functions */
.timing-functions {
  transition-timing-function: ease;        /* Default */
  transition-timing-function: linear;      /* Constant speed */
  transition-timing-function: ease-in;     /* Start slow */
  transition-timing-function: ease-out;    /* End slow */
  transition-timing-function: ease-in-out; /* Start and end slow */
}

/* Custom cubic-bezier */
.custom-timing {
  transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
}

/* Steps */
.step-timing {
  transition-timing-function: steps(4, end);
  transition-timing-function: step-start;
  transition-timing-function: step-end;
}
```

### Transition Direction
```css
/* Different timing for in/out */
.direction {
  transition: transform 0.3s ease-out;
}

.direction:hover {
  transition: transform 0.3s ease-in;
  transform: scale(1.1);
}

/* Chain transitions */
.chain-transition {
  transition: opacity 0.3s ease-out;
}

.chain-transition:hover {
  opacity: 0;
}

.chain-transition:hover ~ .next-element {
  transition-delay: 0.3s;
}
```

### Transition Class Controls
```css
/* Using classes for control */
.fade-enter {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.3s, transform 0.3s;
}

/* JavaScript control */
element.classList.add('fade-enter');
requestAnimationFrame(() => {
  element.classList.add('fade-enter-active');
});
```

### Transition Internals
```css
/* Performance optimization */
.optimize-transition {
  will-change: transform;
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Disable transitions temporarily */
.disable-transitions {
  transition: none !important;
}

/* Transition events in JavaScript */
element.addEventListener('transitionend', (e) => {
  console.log(`${e.propertyName} transition ended`);
});
```

### CSS View Transitions
```css
/* Modern View Transitions API */
/* In HTML */
<meta name="view-transition" content="same-origin">

/* In CSS */
::view-transition-old(root) {
  animation: fade-out 0.5s ease-out;
}

::view-transition-new(root) {
  animation: fade-in 0.5s ease-in;
}

/* In JavaScript */
if (document.startViewTransition) {
  document.startViewTransition(() => {
    updateDOM();
  });
}
```

### Transition Reference
```css
/* Best practices */
.transition-best-practices {
  /* Hardware acceleration */
  transform: translateZ(0);
  
  /* Smooth transitions */
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Performance properties */
  will-change: transform, opacity;
  
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
}
```

## CSS Animation

### Animation Property
```css
/* Basic keyframe animation */
@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

.animate {
  animation: slide-in 0.5s ease-out;
}

/* Multiple keyframes */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

/* Complex animation */
.complex-animation {
  animation: 
    slide-in 0.5s ease-out,
    fade-in 0.5s ease-out;
}
```

### Animation Fill Mode
```css
.fill-modes {
  /* Keep end state */
  animation-fill-mode: forwards;
  
  /* Apply first keyframe before animation */
  animation-fill-mode: backwards;
  
  /* Both effects */
  animation-fill-mode: both;
  
  /* Default */
  animation-fill-mode: none;
}

/* Practical example */
.slide-in {
  animation: slide-in 0.5s ease-out both;
}
```

### Animation Play State
```css
.play-states {
  /* Control animation */
  animation-play-state: running;  /* Default */
  animation-play-state: paused;
}

/* Pause on hover */
.pause-on-hover {
  animation: spin 2s linear infinite;
}

.pause-on-hover:hover {
  animation-play-state: paused;
}

/* JavaScript control */
element.style.animationPlayState = 'paused';
```

### Offset Animation
```css
/* Motion path animation */
.offset-path {
  offset-path: path('M 0,0 L 100,100 L 200,0');
  animation: move 3s linear infinite;
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}

/* Custom offset animation */
.custom-offset {
  animation-timing-function: steps(10);
  offset-rotate: auto;
  offset-anchor: center;
}
```

### Animation FLIP Pattern
```javascript
// First, Last, Invert, Play
const flip = (element) => {
  // First
  const first = element.getBoundingClientRect();
  
  // Last
  updateElement(element);
  const last = element.getBoundingClientRect();
  
  // Invert
  const dx = first.left - last.left;
  const dy = first.top - last.top;
  
  // Play
  element.animate([
    { transform: `translate(${dx}px, ${dy}px)` },
    { transform: 'translate(0, 0)' }
  ], {
    duration: 300,
    easing: 'ease-out'
  });
};
```

### Animation Bounce Cache Pattern
```css
/* Bounce animation */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}

.bounce {
  animation: bounce 1s infinite;
}

/* Optimized bounce */
.bounce-optimized {
  will-change: transform;
  transform: translateZ(0);
}
```

### Animation Helper
```css
/* Utility classes */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out;
}

/* Animation mixins (SCSS) */
@mixin animate($animation, $duration, $method, $times) {
  animation: $animation $duration $method $times;
}

/* Animation variables */
:root {
  --animation-duration: 0.3s;
  --animation-timing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Animation API
```javascript
// Web Animations API
element.animate([
  { opacity: 0, transform: 'translateY(20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 300,
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  fill: 'forwards'
});

// Animation Control
const animation = element.animate(keyframes, options);

animation.pause();
animation.play();
animation.reverse();
animation.finish();
animation.cancel();

// Animation Promise
animation.finished.then(() => {
  console.log('Animation completed');
});

// Animation Events
animation.onfinish = () => {
  console.log('Animation finished');
};

animation.oncancel = () => {
  console.log('Animation cancelled');
};

// Composite Operations
const options = {
  composite: 'add',       // Add to existing transforms
  composite: 'replace',   // Replace existing transforms
  composite: 'accumulate' // Accumulate with existing transforms
};

// Group Animations
const group = [
  element1.animate(keyframes1, timing1),
  element2.animate(keyframes2, timing2)
];

Promise.all(group.map(animation => animation.finished))
  .then(() => console.log('All animations complete'));
```

### GreenSock Library
```javascript
// Basic GSAP Animation
gsap.to(".element", {
  duration: 1,
  x: 100,
  y: 50,
  rotation: 360,
  scale: 1.5,
  ease: "power2.inOut"
});

// Timeline Animation
const tl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2.out"
  }
});

tl.from(".element1", { opacity: 0, y: 50 })
  .to(".element2", { x: 100 }, "-=0.5")
  .fromTo(".element3", 
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1 }
  );

// ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".parallax", {
  scrollTrigger: {
    trigger: ".parallax",
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true
  },
  y: 100,
  ease: "none"
});

// Advanced Animation
gsap.to(".element", {
  duration: 2,
  motionPath: {
    path: "#path",
    align: "#path",
    alignOrigin: [0.5, 0.5],
    autoRotate: true
  },
  ease: "power1.inOut",
  repeat: -1
});

// Stagger Animations
gsap.from(".stagger-elements", {
  duration: 0.5,
  opacity: 0,
  y: 50,
  stagger: {
    amount: 1,
    from: "start"
  }
});

// Complex Easings
gsap.to(".element", {
  duration: 2,
  x: 100,
  ease: "elastic.out(1, 0.3)",
  yoyo: true,
  repeat: -1
});

// SplitText Plugin
const split = new SplitText(".text", {
  type: "chars,words,lines"
});

gsap.from(split.chars, {
  duration: 0.6,
  opacity: 0,
  y: 50,
  stagger: 0.02,
  ease: "back.out"
});
```

### Animation Reference
```css
/* Common Animation Patterns */

/* 1. Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 2. Slide Up Fade In */
@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 3. Scale In */
@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* 4. Bounce */
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

/* 5. Shake */
@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

/* Animation Utility Classes */
.animate {
  /* Base animation properties */
  animation-duration: 0.3s;
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  animation-fill-mode: both;
}

/* Animation Performance Best Practices */
.perf-optimize {
  /* GPU acceleration */
  transform: translateZ(0);
  will-change: transform;
  
  /* Reduce paint */
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Responsive Animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Animation Variables */
:root {
  --animation-duration-fast: 150ms;
  --animation-duration-normal: 300ms;
  --animation-duration-slow: 500ms;
  
  --animation-timing-ease-out: cubic-bezier(0.4, 0, 0.2, 1);
  --animation-timing-ease-in: cubic-bezier(0.4, 0, 1, 1);
  --animation-timing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* Animation Mixins (SCSS) */
@mixin animate($animation, $duration: 0.3s, $timing: ease) {
  animation: $animation $duration $timing;
  animation-fill-mode: both;
}

@mixin keyframes($name) {
  @keyframes #{$name} {
    @content;
  }
}

/* Example Usage */
.element {
  @include animate(fadeIn, 0.5s, ease-out);
}

/* Common Animation Combinations */
.modal-enter {
  animation: 
    fadeIn 0.3s ease-out,
    scaleIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.notification-enter {
  animation:
    slideUpFade 0.3s ease-out,
    shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97);
}

/* Animation States */
.animate-hover {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
}

.animate-active {
  transition: all 0.1s ease;
  
  &:active {
    transform: scale(0.98);
  }
}
```

This completes the CSS Animation Documentation with all the requested topics. The documentation includes detailed examples, best practices, and common patterns for animations using CSS, the Web Animations API, and the GreenSock Animation Platform (GSAP). Would you like me to elaborate on any specific section or provide more examples for a particular animation technique?