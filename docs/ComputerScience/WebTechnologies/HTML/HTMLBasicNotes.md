---
author: spnarkhede
authorTitle: Web Developer
authorURL: https://github.com/spnarkhede
authorImageURL: https://github.com/spnarkhede.png
tags: [Web, Angular]
---

# HTML Basic Notes

### Nested Operations

Child: `>`.

```html
<!-- div>ul>li -->
<div>
  <ul>
    <li></li>
  </ul>
</div>
```

Sibling: `+`.

```html
<!-- div+ul>li -->
<div></div>
<ul>
  <li></li>
</ul>
```

Parent: `^`.

```html
<!-- ul>li^div -->
<ul>
  <li></li>
</ul>
<div></div>

ul>li>a^^div
<ul>
  <li><a href=""></a></li>
</ul>
<div></div>
```

Repeat: `*`.

```html
<!-- ul>li*3 -->
<ul>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

Grouping: `()`.

```html
<!-- div>(p>span)*2 -->
<div>
  <p><span></span></p>
  <p><span></span></p>
</div>
```

### Attribute Operations

- id: `#`.
- class: `.`.

```html
<!-- div#header+div.main+div#footer -->
<div id="header"></div>
<div class="main"></div>
<div id="footer"></div>
```

Attribute values: `[]`.

```html
<!-- a[title=test target=_self] -->
<a title="test" target="_self" href=""></a>
```

Sequential values: `$`.

```html
<!-- p.item$*3 -->
<p class="item1"></p>
<p class="item2"></p>
<p class="item3"></p>

<!-- p.item$$*3 -->
<p class="item01"></p>
<p class="item02"></p>
<p class="item03"></p>
```

Sequence operator: `@`

```html
<!-- p.item$@-*3 @- = -1 -->
<p class="item3"></p>
<p class="item2"></p>
<p class="item1"></p>

<!-- p.item$@3*3 @3 = starts at 3, repeats 3 times -->
<p class="item3"></p>
<p class="item4"></p>
<p class="item5"></p>

<!-- p.item$@-3*3 @-3 = ends at 3 after 3 repetitions -->
<p class="item5"></p>
<p class="item4"></p>
<p class="item3"></p>
```

### Text Operations

Text operation: `{}`.

```html
<!-- a{click} -->
<a href="">click</a>

<!-- a>{click}+span{me} -->
<a href="">click<span>me</span></a>
```
Here’s the English translation for your README.md content:

### Default Elements

- `.header+.footer` -> `div.header+div.footer`.
- `ul>.item*3` -> `ul>li.item*3`.
- `table>.row*4>.cell*3` -> `table>tr.row*4>td.cell*3`.

## Structure

- [Semantics Section Reference](http://www.html5jscss.com/html5-semantics-section.html)

### Section

Must contain an **hx** heading as a child element.

### Header

Not only can the page `<body>` contain a header, but every `<article>` and `<section>` element can also contain a header.

### Footer

Not only can the page `<body>` contain a footer, but every `<article>` and `<section>` element can also contain a footer.

### hgroup

### nav

- Traditional navigation bar
- Sidebar navigation
- In-page navigation
- Pagination

### main

- Only one `main` element per webpage
- `main` cannot be a child of `article`, `aside`, `header`, `footer`, or `nav`

### address

Contact information - QQ, address, email, homepage link

### aside

Supplementary content such as definitions, friend links, or advertisements

### blockquote

Long text quotations

### pre

Code segments

## Head

`meta` data list in
[HEAD](https://github.com/joshbuchea/HEAD).

### Favicon

```html
<head>
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
</head>
```

Generate favicons in [all necessary sizes](https://github.com/pixel-point/favpie):

```html
<head>
  <link rel="icon" type="image/png" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="48x48" href="/favicon-48x48.png" />
  <link rel="apple-touch-icon" sizes="72x72" href="/favicon-72x72.png" />
  <link rel="apple-touch-icon" sizes="96x96" href="/favicon-96x96.png" />
  <link rel="apple-touch-icon" sizes="256x256" href="/favicon-256x256.png" />
  <link rel="apple-touch-icon" sizes="384x384" href="/favicon-384x384.png" />
  <link rel="apple-touch-icon" sizes="512x512" href="/favicon-512x512.png" />
  <link rel="manifest" href="/manifest.webmanifest" crossorigin="anonymous" />
</head>
```

### Theme Color

- [MDN Introduction](https://developer.mozilla.org/docs/Web/HTML/Element/meta/name/theme-color)
- [HTML Specification](https://html.spec.whatwg.org/multipage/semantics.html#meta-theme-color)

```html
<meta
  name="theme-color"
  content="#319197"
  media="(prefers-color-scheme: light)"
/>
<meta
  name="theme-color"
  content="#872e4e"
  media="(prefers-color-scheme: dark)"
/>
```

## Form

[Form](https://adamsilver.io/articles/form-design-from-zero-to-hero-all-in-one-blog-post):

```html
<form action="form submission backend URL" method="post">
  <fieldset>
    <legend>This is a section title</legend>
    <label for="file">Choose photo button</label>
    <input type="file" id="file" />
  </fieldset>

  <fieldset>
    <legend>This is a section title</legend>
    <div>Select size:</div>
    <input
      type="checkbox"
      name="size"
      value="5"
      id="cb_0"
      checked
      disabled
    />
    <label for="cb_0">5 inches</label>
    
    <input type="radio" name="material" value="fs" id="rd_0" />
    <label for="rd_0">Fujifilm, first option</label>

    <input
      type="text"
      id="description"
      placeholder="This is a placeholder"
      value="This is default content"
      readonly
      hidden
    />
    <input type="submit" /> == <button type="submit">Submit</button>
    <input type="reset" /> == <button type="reset">Reset</button>

    <div>
      <label for="delivery">Delivery method</label>
      <select id="delivery">
        <optgroup label="group1">
          <option value="0">Courier</option>
          <option value="1">EMS</option>
        </optgroup>
        <option value="2" selected>Standard Mail</option>
      </select>
    </div>

    <div>
      <label for="feedback">Feedback, multiline textbox</label>
      <textarea name="feedback" rows="4" id="feedback"></textarea>
    </div>
  </fieldset>
</form>
```

### Form Validation

- [Form validation guide](https://developer.mozilla.org/docs/Learn/Forms/Form_validation).
- [Constraint validation guide](https://developer.mozilla.org/docs/Web/Guide/HTML/Constraint_validation).

```ts
const usernameInput = document.querySelector('[name="name"]')

usernameInput.addEventListener('invalid', () => {
  usernameInput.setCustomValidity('Please enter your name.')
})
```

### Form Element Attributes

#### Form Attribute

`form=form_name`: Allows form elements to be placed outside of a form.

#### Form Action Attribute

`formaction=target_name`: Allows form elements to be submitted to a different page.

#### Form Method Attribute

`formmethod=post/get`: Allows form elements to be submitted in different ways.

#### Form Enctype Attribute

`enctype` (HTTP `Content-Type` header):

- Default: `application/x-www-form-urlencoded`, encodes all characters before submission.
- `multipart/form-data`: Doesn’t encode characters, must be used for file upload controls.
- `text/plain`: Encodes spaces as `+` in form data.

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file">Choose file to upload</label>
    <input type="file" id="file" name="file" multiple />
  </div>
  <div>
    <button>Upload image</button>
  </div>
</form>
```

#### Form Target Attribute

`target` defines how to open the linked document:

- `self` (default): Opens the linked document in the same frame.
- `blank`: Opens the linked document in a new window.
- `parent`: Opens the linked document in the parent frame.
- `top`: Opens the linked document in the full window.
- `frameName`: Opens the linked document in the specified frame.

#### Form Novalidate Attribute

Disables form validation on submission (`novalidate`).

#### AutoFocus Attribute

```html
<div class="form-control">
  <label for="search">Search the site...</label>
  <input
    id="search"
    name="search"
    type="search"
    placeholder="Search here ..."
    autofocus
  />
</div>
```

#### Required Attribute

```html
<div class="form-control">
  <label for="film">The film in question?</label>
  <input
    id="film"
    name="film"
    type="text"
    placeholder="e.g. King Kong"
    required
    aria-required="true"
  />
</div>
```

#### Disabled and Hidden Attribute

- `disabled`: Form element data will not be submitted.
- `hidden`: Form element data will still be submitted.

#### AutoComplete Attribute

[`autocomplete`](https://developer.mozilla.org/docs/Web/HTML/Attributes/autocomplete):

- `email`.
- `new-password`.
- `current-password`.
- `street-address`.
- `address-line1`.
- `address-line2`.
- `address-line3`.
- `city`.
- `state`.
- `country`.
- `tel`.
- `zip`.
- `one-time-code`.
- `cc-name`.
- `cc-number`.
- `cc-exp`.
- `off`.

```html
<form>
  <div>
    <label for="email">Email</label>
    <input autocomplete="email" required type="email" id="email" name="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input
      autocomplete="new-password"
      type="password"
      id="password"
      name="password"
    />
  </div>
  <button>Sign up</button>
</form>

<form>
  <div>
    <label for="email">Email</label>
    <input autocomplete="email" required type="email" id="email" name="email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input
      autocomplete="current-password"
      type="password"
      id="password"
      name="password"
    />
  </div>
  <button>Sign in</button>
</form>
```

### Form Labels

Specify form element labels

```html
<label for="input_id">OS : </label>
```

#### Implicit Control Attribute

JavaScript tip: Change form element value using control attribute.

```ts
const textbox = $('#label_id').control
textbox.value = '666666' // Equivalent to input.value = '666666';
```

### Form Input

#### Input Types

```html
<!-- default -->
<input type="text" />
<!-- numeric keyboard -->
<input type="tel" />
<!-- numeric keyboard -->
<input type="number" />
<!-- displays @ key -->
<input type="email" />
<!-- displays .com key -->
<input type="url" />
<!-- displays search button -->
<input type="search" />
<!-- displays date picker or wheel controls -->
<input type="date" />
<input type="date picker(data,month,week,time,datetime,datetime-local)" />

<input type="range" />
<input type="color" />
```

#### Text Input

```html
<input type="text" spellcheck="true" lang="en" />
```

#### Radio Input

With the same `name`, multiple radio elements create a radio group.

#### Checkbox Input

#### Search Input

Search bar:

```html
<div class="form-control">
  <label for="search">Search the site...</label>
  <input
    id="search"
    name="search"
    type="search"
    placeholder="Search here ..."
  />
</div>
```

#### Tel Input

Phone number without validation:

```html
<div class="form-control">
  <label for="tel">Telephone</label>
  <input
    id="tel"
    name="tel"
    type="tel"
    placeholder="1-234-546758"
    autocomplete="off"
    required
  />
</div>
```

#### Url Input

```html
<div class="form-control">
  <label for="web">Your Web address</label>
  <input id="web" name="web" type="url" placeholder="https://www.mysite.com" />
</div>
```

#### Email Input

```html
<div class="form-control">
  <label for="email">Your Email address</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="dwight.schultz@gmail.com"
    required
  />
</div>
```

#### Number Input

```html
<div class="form-control">
  <label for="yearOfCrime">Year Of Crime</label>
  <input
    id="yearOfCrime"
    name="yearOfCrime"
    type="number"
    min="1929"
    max="2015"
    step="1"
    required
  />
</div>
```

#### Range Input

```html
<div class="form-control">
  <input
    id="howYouRateIt"
    name="howYouRateIt"
    type="range"
    min="1"
    max="10"
    value="5"
    onchange="showValue(this.value)"
  />
  <span id="range">5</span>
</div>
```

#### DateTime Input

`[type]`:

- `date`.
- `month`.
- `week`.
- `time`.
- `datetime-local`.

```html
<input id="date" name="date" type="date" />
<input id="month" name="month" type="month" />
<input id="week" name="week" type="week" />
<input id="time" name="time" type="time" />
```

#### Color Input

```html
<div class="form-control">
  <label for="color">Your favorite color</label>
  <input id="color" name="color" type="color" />
</div>
```

#### List Input

`autocomplete`, specifies intelligent suggestions for the input field:

```html
<div class="form-control">
  <label for="awardWon">Award Won</label>
  <input id="awardWon" name="awardWon" type="text" list="awards" />
  <datalist id="awards">
    <select>
      <option value="Best Picture"></option>
      <option value="Best Director"></option>
      <option value="Best Adapted Screenplay"></option>
      <option value="Best Original Screenplay"></option>
    </select>
  </datalist>
</div>
```

#### File Input

File type:

```html
<input type="file" accept=".jpeg,.png" />
```

Multiple files:

```html
<input type="file" multiple />
```

Capture device camera:

```html
<!-- Front camera -->
<input type="file" capture="user" accept="image/*" />
<!-- Back camera -->
<input type="file" capture="environment" accept="image/*" />
```

#### Indeterminate

Check the state of `[type=checkbox]`:

```typescript
if (checkbox.indeterminate) {
  doSomething()
} else {
  if (checkbox.checked)
    doSomething()
  else
    doSomething()
}
```

#### Pattern

Specify input format using a regular expression:

```html
<input pattern="[0-9][A-Z]{3}" />
```

#### Validity

Returns a `ValidityState` object, which includes the `ValidityState.valid` attribute.

#### Output

A mirror element for the `<input>` element.

#### Data List Element

```html
<div class="form-control">
  <label for="browser">Select your browser from the list:</label>
  <input
    list="browsers"
    type="text"
    id="browser"
    placeholder="Choose from the list"
  />
  <datalist id="browsers">
    <option value="Edge"></option>
    <option value="Firefox"></option>
    <option value="Google Chrome"></option>
    <option value="Opera"></option>
    <option value="Safari"></option>
  </datalist>
</div>
```
### Textarea

#### Maxlength

Defines the maximum number of characters allowed in a `<textarea>`.

#### Cols

Specifies the maximum number of characters that can be displayed per line.

#### Wrap

- **hard**: Adds a line break when wrapping text, **requires** the `cols` attribute to be specified.
- **soft**: Does not add a line break when wrapping text.

### Menu


### Dialog

Native [`dialog`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog):

```html
<dialog open>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>OK</button>
  </form>
</dialog>
```

```html
<button class="btn" data-toggle="#dialog">Open modal</button>

<button class="btn" data-toggle="#dialog-tall">Open tall modal</button>

<dialog id="dialog">
  <header>
    Example modal
    <button class="btn btn-close" data-close>
      <svg width="16" height="16"><use xlink:href="#x" /></svg>
    </button>
  </header>
  Some basic text inside the modal to demonstrate how it all looks and works.
</dialog>

<dialog id="dialog-tall">
  <header>
    Super tall modal
    <button class="btn btn-close" data-close>
      <svg width="16" height="16"><use xlink:href="#x" /></svg>
    </button>
  </header>
  <p>Line breaks to push the height out.</p>
  <button type="button" class="btn" data-close>Close</button>
</dialog>
```

```ts
const togglers = document.querySelectorAll('[data-toggle]')
const closers = document.querySelectorAll('[data-close]')

togglers?.forEach((toggler) => {
  const target = toggler.getAttribute('data-toggle')
  const dialogs = document.querySelectorAll(target)

  toggler.addEventListener('click', (_event) => {
    dialogs.forEach((dialog) => {
      dialog.showModal()
    })
  })
})

closers?.forEach((closer) => {
  closer.addEventListener('click', (_event) => {
    const dialog = closer.closest('dialog')
    dialog.close()
  })
})
```

### Datalist

```html
<datalist id="register-prompt" style="display: none">
  <option value="Windows">Windows</option>
  <option value="Mac OS">Mac OS</option>
  <option value="Linux">Linux</option>
</datalist>
```

```html
<label for="myBrowser">Choose a browser from this list:</label>
<input list="browsers" id="myBrowser" name="myBrowser" />
<datalist id="browsers">
  <option value="Chrome"></option>
  <option value="Firefox"></option>
  <option value="Internet Explorer"></option>
  <option value="Opera"></option>
  <option value="Safari"></option>
  <option value="Microsoft Edge"></option>
</datalist>
```

### Form Demo

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign Up Form</title>
    <link rel="stylesheet" href="css/normalize.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/main.css" />
  </head>
  <body>
    <form action="index.html" method="post">
      <h2>Your basic info</h2>

      <label for="name">Name</label>
      <input type="text" id="name" name="student_name" />

      <label for="mail">Email</label>
      <input type="email" id="mail" name="student_email" />

      <label for="password">Password</label>
      <input type="password" id="password" name="student_password" />

      <label>Age:</label>
      <input
        type="radio"
        id="under_16"
        value="under_16"
        name="user_age"
      /><label for="under_16" class="light">Under 16</label><br />
      <input type="radio" id="over_16" value="over_16" name="user_age" /><label
        for="over_16"
        class="light"
        >16 or Older</label
      >

      <h2>Your profile</h2>

      <label for="bio">Biography</label>
      <textarea id="bio" name="student_bio"></textarea>

      <label for="courses">Select Courses</label>
      <select id="courses" name="student_courses">
        <optgroup label="Engineering">
          <option value="computer_engineering">
            Computer Science Engineering
          </option>
          <option value="electrical_engineering">Electrical Engineering</option>
          <option value="mechanical_engineering">Mechanical Engineering</option>
          <option value="civil_engineering">Civil Engineering</option>
          <option value="chemical_engineering">Chemical Engineering</option>
        </optgroup>
        <optgroup label="Management">
          <option value="finance_management">Finance Management</option>
          <option value="technology_management">Technology Management</option>
          <option value="marketing_management">Marketing Management</option>
          <option value="business_administration">
            Business Administration
          </option>
        </optgroup>
      </select>

      <label>Interests:</label>
      <input
        type="checkbox"
        id="engineering"
        value="interest_engineering"
        name="user_interest"
      /><label class="light" for="engineering">Engineering</label><br />
      <input
        type="checkbox"
        id="business"
        value="interest_business"
        name="user_interest"
      /><label class="light" for="business">Business</label><br />
      <input
        type="checkbox"
        id="law"
        value="interest_law"
        name="user_interest"
      /><label class="light" for="law">Law</label>

      <button type="submit">Submit</button>
    </form>
  </body>
</html>
```

## Content

### Details

Accordion list:

```html
<div class="container">
  <h3>FAQ</h3>

  <details open>
    <summary>Why is it called an accordion menu?</summary>
    <hr />
    <p>
      Because each part of it can expand and contract, like in an accordion. If
      you don't know what an accordion is, just imagine a cute fluffy cat. You
      still won't know what it is, but at least you'll feel better about not
      knowing.
    </p>
  </details>

  <details>
    <summary>Huh?</summary>
    <hr />
    <p>Huh.</p>
  </details>

  <details>
    <summary>If I use an accordion menu will it make me cool?</summary>
    <hr />
    <p>
      No, not unless you're designing a MySpace profile. The
      <code>{"details"}</code> element is cool though, and you can use that for
      a lot of things. I'm using it on this page right below here, to show the
      code for each example!
    </p>
  </details>
</div>

<style>
  .container {
    padding: 1em 2em;
    border: 0.2em solid black;
    border-radius: 2em;
  }

  details {
    padding: 1em;
    margin-bottom: 1em;
    border: 0.1em solid black;
    border-radius: 1em;
  }

  summary {
    font-size: 1.2em;
    cursor: pointer;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  details[open] summary {
    font-size: 1.3em;
  }
</style>
```

#### Details Summary

The `toggle` event is triggered when expanding and collapsing:

```html
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

#### Details Data Grid

#### Details AutoComplete

#### Details Open

Default `open=false`. 

### Description List

- `<dl>`: description list.
- `<dt>`: description Term.
- `<dd>`: description details.

```html
<h1>Review your data</h1>
<p>
  Please review the data you entered in the previous step to ensure it is
  correct:
</p>
<dl>
  <dt>First name</dt>
  <dd>Marc</dd>

  <dt>Last name</dt>
  <dd>Simmons</dd>

  <dt>Date of Birth</dt>
  <dd><time datetime="1990-05-15">May 15 1990</time></dd>
</dl>
```

### Table

```html
<table>
  <thead>
    <tr>
      <th scope="col">Col Header 1</th>
      <th scope="col">Col Header 2</th>
      <th scope="col">Col Header 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Row Header 1</th>
      <td>Row 1 Col 2</td>
      <td>Row 1 Col 3</td>
    </tr>
    <tr>
      <th scope="row">Row Header 2</th>
      <td>Row 2 Col 2</td>
      <td>Row 2 Col 3</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Summary</th>
      <td>Col 2 summary</td>
      <td>Col 3 summary</td>
    </tr>
  </tfoot>
</table>
```

### Mark

Highlight or emphasize, unrelated to the original author. 

### Ins

Insert text

```html
<ins
  cite="https://bugzilla.mozilla.org/show_bug.cgi?id=1620467"
  datetime="2020-07-23"
>
  The <code>appearance</code> property, previously only available prefixed in
  Firefox, can now be used in all modern browsers un-prefixed.
</ins>
```

### Del

Delete text

```html
<del
  cite="https://bugzilla.mozilla.org/show_bug.cgi?id=1620467"
  datetime="2020-07-23"
>
  Firefox doesn't support CSS's standard <code>appearance</code> property, so
  you can only use it prefixed.
</del>
```

### U
underline text

### Em

Emphasis in the article

### Strong

Paragraph emphasis

### Small

- Disclaimers, notes, legal regulations, copyright statements
- Does not change text style

### Hr

Horizontal line

### Progress
Percentage of value/max
```html
<label for="file">File progress:</label>

<progress id="file" max="100" value="70">70%</progress>
```