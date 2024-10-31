---
author: spnarkhede
authorTitle: DevOps Engineer
authorURL: https://github.com/spnarkhede
authorImageURL: https://github.com/spnarkhede
tags: [Strategic, Mindset, Book, Learnings]
--- 

# Angular Basic Notes

## Basic

- [Installation](https://angular.io/guide/quickstart)
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

production build: suffix `/` is required

```bash
ng build --prod true --outputPath ./build --baseHref https://sabertazimi.github.io/hust-web/angular/learn/
```

```bash
ng generate --help
```

## Module



## Component

### Props

```ts
import { Input } from '@angular/core'

class InputComponent {
  @Input() hero: Hero
}
```

private props

```ts
import type { HeroService } from '../hero.service'

class HeroComponent {
  constructor(private heroService: HeroService) {}
}
```

### Event

parent

```ts
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

child

```ts
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

Angular 只会绑定到组件的公共属性

```ts
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

### Reference

`#` refer to DOM

```html
<div>
  <label
    >Hero name:
    <input #heroName />
  </label>
  <button (click)="add(heroName.value); heroName.value=''">add</button>
</div>
```

### Pipe

#### Pure Pipe


#### Impure Pipe



#### Async Pipe

```html
<!-- heroes$ is a Observable -->
<li *ngFor="let hero of heroes$ | async">{{hero.name}}</li>
```

## Service

### Injection Provider

```ts
@Injectable({
  providedIn: 'root',
})
class Logger {}
```

## RxJS


### Basis

```ts
// Create simple observable that emits three values
const myObservable = of(1, 2, 3)

// Create observer object
const myObserver = {
  next: x => console.log(`Observer got a next value: ${x}`),
  error: err => console.error(`Observer got an error: ${err}`),
  complete: () => console.log('Observer got a complete notification'),
}

// Execute with the observer object
const subscription = myObservable.subscribe(myObserver)
// Logs:
// Observer got a next value: 1
// Observer got a next value: 2
// Observer got a next value: 3
// Observer got a complete notification
```

```ts
class Component {
  search(term: string): void {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      // return another Observable
      switchMap((term: string) => this.heroService.searchHeroes(term))
    )
  }
}
```

### RxJS Pipe Helper


```ts
import { map, take } from '@rxjs/operators'
import { of } from '@rxjs/observable'

map.call(take.call(of(1, 2, 3), 2), val => val + 2)

of(1, 2, 3).pipe(
  take(2),
  map(val => val + 2)
)
```

### Operator

#### Creation Operator

- 单值: of, empty, never
- 多值: from
- 定时: interval, timer
- 从事件创建: fromEvent/fromEventPattern
- 从 Promise 创建: fromPromise
- 自定义创建: create

#### Transformation Operator

- map
- mapTo
- mergeMap/flatMap
- pluck
- reduce
- scan
- groupBy
- switch
- switchMap: 在每次发出时, 会取消前一个内部 Observable (所提供函数的 return value) 的订阅,
  然后订阅一个新的 observable. 即当有新的输入时便不再关心之前请求的响应结果.

借助`switchMap`操作符,
每个有效的击键事件都会触发一次`HttpClient.get()`方法调用.
即使在每个请求之间都有至少 300ms 的间隔,
仍然可能会同时存在多个尚未返回的 HTTP 请求.
`switchMap()`会记住原始的请求顺序,
只会返回最近一次 HTTP 方法调用的结果,
以前的那些请求都会被取消和舍弃.

#### Filter Operator

- audit
- auditTime
- filter
- skip
- first
- last
- take
- takeWhile
- takeUntil
- throttle
- throttleTime
- debounce
- debounceTime
- distinctUntilChanged: 只有当当前值与之前最后一个值 `!==` 时才将其发出
- bufferTime
- subscribeOn
- ObserveOn

#### Combination Operator

- concat: 保持原来的序列顺序连接两个数据流
- merge: 合并序列
- race: 预设条件为其中一个数据流完成
- forkJoin: 预设条件为所有数据流都完成
- zip: 取各来源数据流最后一个值合并为对象
- combineLatest: 取各来源数据流最后一个值合并为数组

#### Multi-Cast Operator

- MultiCast
- Publish
- Share

#### Error Handling Operator

- throw
- catch/catchError
- retry
- retryWhen
- finally

#### Utils Operator

- do/tap
- delay
- delayWhen
- timeout
- toPromise

## Router

`<router-outlet>` 会告诉路由器要在哪里显示路由的视图.

```ts
import { NgModule } from '@angular/core'
import type { Routes } from '@angular/router'
import { RouterModule } from '@angular/router'
import { HeroesComponent } from './heroes/heroes.component'

const routes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Form

- `[(ngModel)]`
- `(ngSubmit)`

## Event Binding

- `()` template syntax for event binding

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

same to `[ngStyle]`

```html
<div [ngClass]="currentClasses">
  This div is initially saveable, unchanged, and special
</div>
```

```ts
class Component {
  currentClasses

  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
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
<!-- toggle the "special" class on/off with a property -->
<div [class.special]="isSpecial">The class binding is special</div>

<!-- binding to `class.special` trumps the class attribute -->
<div class="special" [class.special]="!isSpecial">
  This one is not so special
</div>
```
