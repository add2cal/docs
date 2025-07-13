---
title: How to integrate Buttons and RSVP Forms with React
description: Integrate Add to Calendar PRO with React applications. Complete guide for calendar buttons and RSVP forms in React projects.
---

# How to integrate Buttons and RSVP Forms with React

## Step 0: Pick a solution

As React projects can be very versatile, there are multiple potential ways to work with the Add to Calendar Button.

* In rather basic projects, you could use the default Web Component out-of-the-box.
* However, we recommend the use of the official [Add to Calendar Button React Wrapper](https://github.com/add2cal/add-to-calendar-button-react) instead of the main script. This comes with a deeper TypeScript and React integration.

We will focus on the latter one below.

## Step 1: npm installation

Install the package from the npm registry.

```bash
npm install add-to-calendar-button-react
```

## Step 2: Import it

Import the module into the component, where you want to use the button.

```typescript
import { AddToCalendarButton } from 'add-to-calendar-button-react';
```

## Step 3: Use it

Start using it by adding a `<AddtoCalendarButton proKey="prokey-of-your-event">` tag to your source code.

::: warning use client!
The button works only on the client side!

Depending on your setup, you should add `'use client';` respectively.
:::

<br />

## Bring your own button

Alternatively, you can also trigger the button or form programmatically via the atcb_action function. Mind that this will force a modal to appear.

When working with the npm package, you would need to import the atcb_action first:

```javascript
import { atcb_action } from "add-to-calendar-button-react";
```

You should also provide a HTML element as second parameter. Event it is optional, it optimizes the UX; especially for keyboard navigation.

In the following example, we also use this element as trigger onClick:

```javascript
const button = document.getElementById('my-custom-button');
button.addEventListener('click', () => atcb_action({ proKey: "prokey-of-your-event"}, button));

```
