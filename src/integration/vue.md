
# How to integrate Buttons and RSVP Forms with Vue 3

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

## Step 3: Optimize the Vue config

Theoretically, this was already it.

Vue works extremely well with Web Components.

However, you might notice a warning in the browser console.
To get rid of this, you need to provide a little bit more information to the compiler options.

This can go into your `vite.config.js` or other places depending on your setup. Check the official Vue documentation for more details: [Click here](https://vuejs.org/guide/extras/web-components#using-custom-elements-in-vue).

```javascript
// vite.config.js or vite.config.ts

compilerOptions: {
  isCustomElement: (tag) => tag.includes('-')
}
```

In case the Add to Calendar Button is the only Web Component in your project, you could also be a little bit more explicit here.

```javascript
compilerOptions: {
  isCustomElement: (tag) => tag === 'add-to-calendar-button'
}
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
