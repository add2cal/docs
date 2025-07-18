---
title: Using Buttons and RSVP Forms with Angular
description: Integrate Add to Calendar PRO with Angular applications. Complete guide for calendar buttons and RSVP forms in Angular projects.
---

# Using Buttons and RSVP Forms with Angular

## Step 1: npm installation

Install the package from the npm registry.

```bash
npm install add-to-calendar-button
```

## Step 2: Import it

Import the module into the component, where you want to use the button.

```javascript
import 'add-to-calendar-button';
```

## Step 3: Optimize the Angular config

To make Angular work properly with the Web Component, you need to import the **CUSTOM_ELEMENTS_SCHEMA** and update the **@NgModule** or **@Component** block respectively.

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//(...)

@NgModule({
  //(...),
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
//(...)
```

## Step 4: Use it

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event"></add-to-calendar-button>` tag to your source code.

<br />

## Bring your own button

Alternatively, you can also trigger the button or form programmatically via the atcb_action function. Mind that this will force a modal to appear.

When working with the npm package, you would need to import the atcb_action first:

```javascript
import { atcb_action } from "add-to-calendar-button";
```

You should also provide a HTML element as second parameter. Event it is optional, it optimizes the UX; especially for keyboard navigation.

In the following example, we also use this element as trigger onClick:

```javascript
const button = document.getElementById('my-custom-button');
button.addEventListener('click', () => atcb_action({ proKey: "prokey-of-your-event"}, button));

```

<br />

## Proper bindings

To bind data to a specific attribute, you need to use the syntax [attr.PARAMETER]="your data".

Based on your setup, the data flow might happen after the first rendering of the button. This is no problem, but you might see errors in the console when in debug mode, claiming there is data missing. Mind that due to this reason, binding the "identifier" option would not work.

```javascript
<add-to-calendar-button [attr.proKey]="yourProkeyVar"></add-to-calendar-button>
```
