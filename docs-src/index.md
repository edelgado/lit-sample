---
layout: page.11ty.cjs
title: <mariposa-self-assessment> ⌲ Home
---

# &lt;mariposa-self-assessment>

`<mariposa-self-assessment>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<mariposa-self-assessment>` is just an HTML element. You can it anywhere you can use HTML!

```html
<mariposa-self-assessment></mariposa-self-assessment>
```

  </div>
  <div>

<mariposa-self-assessment></mariposa-self-assessment>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<mariposa-self-assessment>` can be configured with attributed in plain HTML.

```html
<mariposa-self-assessment name="HTML"></mariposa-self-assessment>
```

  </div>
  <div>

<mariposa-self-assessment name="HTML"></mariposa-self-assessment>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<mariposa-self-assessment>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name = 'lit-html';

render(
  html`
    <h2>This is a &lt;mariposa-self-assessment&gt;</h2>
    <mariposa-self-assessment .name=${name}></mariposa-self-assessment>
  `,
  document.body
);
```

  </div>
  <div>

<h2>This is a &lt;mariposa-self-assessment&gt;</h2>
<mariposa-self-assessment name="lit-html"></mariposa-self-assessment>

  </div>
</section>
