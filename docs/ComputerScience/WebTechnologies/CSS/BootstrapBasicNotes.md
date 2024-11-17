---
author: spnarkhede
authorTitle: Web Developer
authorURL: https://github.com/spnarkhede
authorImageURL: https://github.com/spnarkhede.png
tags: [Web, CSS, Bootstrap]
---

# Bootstrap Basic Notes

## Table of Contents
1. [Custom Bootstrap Theme](#custom-bootstrap-theme)
2. [Bootstrap Reboot Tips](#bootstrap-reboot-tips)
3. [Useful Custom Functions](#useful-custom-functions)
4. [Custom Colors](#custom-colors)
5. [Custom Spacing](#custom-spacing)
6. [Custom Layout](#custom-layout)
7. [Custom Borders](#custom-borders)
8. [Custom Navbar and Navigation](#custom-navbar-and-navigation)
9. [Custom Dropdown](#custom-dropdown)
10. [Custom List Group](#custom-list-group)
11. [Custom Card](#custom-card)
12. [Custom Breadcrumb](#custom-breadcrumb)
13. [Custom Form](#custom-form)
14. [Reference](#reference)

---

## Custom Bootstrap Theme
- [Bootstrap CMS Theme](https://github.com/sabertazimi/hust-web/tree/main/css/bootstrap-cms)
- [Advanced Webpack Configuration](https://medium.com/@estherfalayi/setting-up-webpack-for-bootstrap-4-and-font-awesome-eb276e04aaeb)

---

## Bootstrap Reboot Tips

1. Use `@import '~bootstrap/scss/reboot';`.
2. Best practices:
   - Set `body` font-size to `1rem` for scalable spacing.
   - Avoid `margin-top`; use `margin-bottom` instead.
   - Prefer `rems` for margins for better scaling across devices.
   - Set `box-sizing: border-box` globally.
   - Use `inherit` wherever possible for font properties.

---

## Useful Custom Functions
Include these imports:
```scss
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/mixins';
```

Example custom functions:
```scss
@function color($key: 'blue') {
  @return map-get($colors, $key);
}

@function theme-color($key: 'primary') {
  @return map-get($theme-colors, $key);
}
```

---

## Custom Colors

Import variables:
```scss
@import '~bootstrap/scss/variables';
```

Example:
```scss
$theme-colors: (
  'primary': #0074d9,
  'danger': #ff4136,
  'secondary': #495057,
  'success': #37b24d,
  'info': #1c7ed6
);
```

---

## Custom Spacing
Spacing classes:
- `t`: top margin/padding
- `b`: bottom margin/padding
- `x`: horizontal (left + right)
- `y`: vertical (top + bottom)

Examples:
```scss
.mt-0 { margin-top: 0 !important; }
.ml-1 { margin-left: ($spacer * 0.25) !important; }
.px-2 { padding-right: ($spacer * 0.5) !important; }
```

---

## Custom Layout

Key variables:
```scss
$grid-columns: 12;
$grid-gutter-width: 30px;
```

---

## Custom Borders

Customize border properties:
```scss
$border-width: 1px;
$border-color: $gray-300;
$border-radius: 0.25rem;
```

---

## Custom Navbar and Navigation

Navbar customization:
```scss
$navbar-light-color: $violet-4;
$navbar-light-active-color: $violet-9;
$navbar-dark-color: $violet-3;
```

---

## Custom Dropdown

Key variables:
```scss
$dropdown-padding-y: 1rem;
$dropdown-border-color: $primary;
$dropdown-item-padding-x: 3rem;
```

---

## Custom List Group

Example:
```scss
$list-group-border-color: $primary;
```

---

## Custom Card

Card customization:
```scss
$card-border-color: $primary;
$card-color: $primary;
$card-bg: $violet-0;
```

---

## Custom Breadcrumb

Breadcrumb styles:
```scss
$breadcrumb-bg: $violet-0;
$breadcrumb-divider: quote('>');
```

---

## Custom Form

Form adjustments:
```scss
$input-btn-padding-y: 0.75rem;
$input-btn-focus-width: 0; /* remove focus shadow */
```

---

## Reference

- [Bootstrap 5 CheatSheet](https://github.com/themeselection/bootstrap-cheatsheet)
```

This structure ensures clarity and organizes the content into digestible sections, making it easy for readers to navigate and understand.