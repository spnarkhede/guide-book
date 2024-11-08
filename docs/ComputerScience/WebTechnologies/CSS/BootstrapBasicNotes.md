---
author: spnarkhede
authorTitle: Web Developer
authorURL: https://github.com/spnarkhede
authorImageURL: https://github.com/spnarkhede.png
tags: [Web, CSS, Bootstrap]
---
# Bootstrap Basic Notes

## Overview

This document contains essential notes and customization tips for creating a custom Bootstrap theme, including best practices, custom functions, color configurations, spacing, layout, and component-specific styles for Bootstrap projects.

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

## Bootstrap Reboot Tips

Best practices to ensure a scalable and efficient layout:
- Set `font-size: 1rem` on `body` for scalable spacing.
- Avoid `margin-top`; instead, use `margin-bottom` for elements like headings and lists.
- Use `rems` for `margin` for better scaling across devices.
- Apply `box-sizing: border-box` on all elements.
- Set `resize: vertical` on `textarea` elements.

## Useful Custom Functions

```scss
@function color($key: 'blue') {
  @return map-get($colors, $key);
}
@function theme-color($key: 'primary') {
  @return map-get($theme-colors, $key);
}
```

## Custom Colors

Define your custom color palette:

```scss
$theme-colors: (
  'primary': #0074d9,
  'danger': #ff4136,
  'success': #37b24d
);
$colors: (
  'blue': $blue,
  'indigo': $indigo,
  'purple': $purple
);
```

## Custom Spacing

Utilize Bootstrap’s spacing utility classes with variables for quick and consistent padding/margin control.

## Custom Layout

```scss
$grid-columns: 12;
$grid-gutter-width: 30px;
```

## Custom Borders

```scss
$border-width: 1px;
$border-radius: 0.25rem;
```

## Custom Navbar and Navigation

Set styles for navbar elements with custom padding, color, and hover effects.

## Custom Dropdown

```scss
$dropdown-bg: $white;
$dropdown-border-color: $primary;
```

## Custom List Group

```scss
$list-group-border-color: $primary;
```

## Custom Card

```scss
$card-border-color: $primary;
```

## Custom Breadcrumb

Define custom styles for breadcrumb elements with a separator icon.

## Custom Form

```scss
$input-btn-padding-y: 0.75rem;
$input-btn-padding-x: 1.5rem;
```

## Reference

- [Bootstrap 5 Cheat Sheet](https://github.com/themeselection/bootstrap-cheatsheet)

---
