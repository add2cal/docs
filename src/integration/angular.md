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

For a standalone component:

```typescript
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'add-to-calendar-button';

@Component({
  selector: 'app-event-button',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: '<add-to-calendar-button prokey="prokey-of-your-event"></add-to-calendar-button>',
})
export class EventButtonComponent {}
```

For an NgModule application, add the schema to the module declaring your component:

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

Start using it by adding a `<add-to-calendar-button prokey="prokey-of-your-event"></add-to-calendar-button>` tag to your source code.

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
button.addEventListener('click', () => atcb_action({ prokey: "prokey-of-your-event"}, button));

```

<br />

## Proper bindings

To bind data to a specific attribute, you need to use the syntax [attr.PARAMETER]="your data".

Based on your setup, the data flow might happen after the first rendering of the button. This is no problem, but you might see errors in the console when in debug mode, claiming there is data missing. Mind that due to this reason, binding the "identifier" option would not work.

```javascript
<add-to-calendar-button [attr.prokey]="yourProkeyVar"></add-to-calendar-button>
```

## Styles and languages

The npm package includes only the default style and English by default. Import every additional style and language selected in the PRO app for your buttons and RSVP forms:

```javascript
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

Place these imports alongside the core import or in a shared setup module.

Alternatively, load styles and languages dynamically from jsDelivr by setting `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` on the element. Apply the same strategy to custom triggers; the option is named `styleSource` in `atcb_action`.
