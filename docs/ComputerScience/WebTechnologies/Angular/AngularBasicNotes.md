---
author: spnarkhede
authorTitle: Web Developer
authorURL: https://github.com/spnarkhede
authorImageURL: https://github.com/spnarkhede.png
tags: [Web, Angular]
---

# Angular Basic Notes

This document provides an overview of core Angular concepts and commands. Use it as a guide to set up, understand, and navigate essential Angular features.

---

## Table of Contents
1. [Installation](#installation)
2. [Module](#module)
3. [Component](#component)
4. [Service](#service)
5. [RxJS](#rxjs)
6. [Router](#router)
7. [Form](#form)
8. [Event Binding](#event-binding)
9. [Directives](#directives)
10. [Styles](#styles)

## Installation

- [Installation Guide](https://angular.io/guide/quickstart)
- [Basic Tutorial](https://angular.io/tutorial)

### CLI

- [CLI Commands](https://angular.io/cli)

```bash
npm install -g @angular/cli
```

```bash
ng new my-app
ng add <package-name>
ng serve --open
ng lint
ng test
ng e2e
```

Production build: `ng build` requires a trailing `/`.

```bash
ng build --prod true --outputPath ./build --baseHref https://sabertazimi.github.io/hust-web/angular/learn/
```

For additional CLI help:

```bash
ng generate --help
```

## Module

Angular needs to know how to compile the different parts of an application and which external files and libraries it requires. This information is provided as metadata. Some of this metadata resides in the `@Component` decorator, which you attach to component classes, while crucial metadata resides in the `@NgModule` decorator.

An NgModule provides a compilation context for its components. The root module has a root component created during the bootstrapping phase. Any module can contain other components, which can be loaded via routing or templates, sharing a common compilation context.

## Component

### Properties

```typescript
import { Input } from '@angular/core'

class InputComponent {
  @Input() hero: Hero
}
```

Private properties:

```typescript
import type { HeroService } from '../hero.service'

class HeroComponent {
  constructor(private heroService: HeroService) {}
}
```

### Event

**Parent Component**

```typescript
import type { OnInit } from '@angular/core'
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<app-child (valueChange)="displayCounter($event)"></app-child>`,
})
export class AppComponent implements OnInit {
  ngOnInit() {}

  displayCounter(count) {
    console.log(count)
  }
}
```

**Child Component**

```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-child',
  template: `<button class="btn btn-primary" (click)="handleClick()">
    Click me
  </button>`,
})
export class AppChildComponent {
  @Output() valueChange: EventEmitter<number> = new EventEmitter()
  counter = 0

  handleClick() {
    this.counter += 1
    this.valueChange.emit(this.counter)
  }
}
```

### Attributes

Angular only binds to public component properties.

```typescript
import type { MessageService } from '../message.service'

class MessageComponent {
  constructor(public messageService: MessageService) {}
}
```

```html
<div *ngIf="messageService.messages.length">
  <h2>Messages</h2>
  <button class="clear" (click)="messageService.clear()">Clear</button>
  <div *ngFor="let message of messageService.messages">{{message}}</div>
</div>
```

### References

`#` refers to the DOM.

```html
<div>
  <label>
    Hero name:
    <input #heroName />
  </label>
  <button (click)="add(heroName.value); heroName.value=''">add</button>
</div>
```

### Pipe

#### Pure Pipe

Angular executes pure pipes only when it detects a change in the input values. These are highly performant, executing only when inputs are modified.

#### Impure Pipe

Impure pipes execute on every change detection cycle and may be called frequently, even on every keystroke or mouse movement.

#### Async Pipe

```html
<!-- heroes$ is an Observable -->
<li *ngFor="let hero of heroes$ | async">{{hero.name}}</li>
```

## Service

### Injection Provider

```typescript
@Injectable({
  providedIn: 'root',
})
class Logger {}
```

## RxJS

- Manages inputs and consumer/redux actions.
- Automatically re-calculates after state changes (Reactive).
- Supports both synchronous and asynchronous actions.
- Harmonizes data retrieval, subscription, and binding.

### Basics

An Observable can emit multiple values, both synchronously and asynchronously. Setup and teardown logic is handled internally, allowing the application code to focus on subscribing and consuming values.

**Observer**: Consumers of data pushed by an Observable, with callback functions for `next`, `error`, and `complete`.

**Subscription**: Represents an Observable execution, terminated by `unsubscribe` to avoid memory leaks.

```typescript
const myObservable = of(1, 2, 3)
const myObserver = {
  next: x => console.log(`Observer got a next value: ${x}`),
  error: err => console.error(`Observer got an error: ${err}`),
  complete: () => console.log('Observer got a complete notification'),
}
const subscription = myObservable.subscribe(myObserver)
```

### Operators

Operators transform and combine Observables. Examples include `map`, `filter`, `take`, `switchMap`, and `mergeMap`.

## Router

`<router-outlet>` indicates where the router displays views.

```typescript
import { NgModule } from '@angular/core'
import type { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

## Form

- `[(ngModel)]`
- `(ngSubmit)`

## Event Binding

Use `()` syntax for event binding.

```html
<li (click)="onSelect($event.target.name)"></li>
<li (click)="onSelect(hero.name)"></li>
```

## Directives

### Structural Directives

#### For Directive

```html
<li *ngFor="let hero of heroes">{{hero.name}}</li>
```

#### If Directive

```html
<div *ngIf="selectedHero">Selected</div>
```

### Attribute Directives

#### Class Directive

Toggle class attributes based on component state.

```html
<div [ngClass]="currentClasses">This div is initially saveable, unchanged, and special</div>
```

```typescript
class Component {
  currentClasses

  setCurrentClasses() {
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    }
  }
}
```

## Styles

### CSS Class Binding

```html
<div [class.special]="isSpecial">The class binding is special</div>
<div class="special" [class.special]="!isSpecial">This one is not so special</div>
```
