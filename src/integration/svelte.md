
# How to integrate Buttons and RSVP Forms with Svelte

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

## Step 3: Use it

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event">` tag to your source code.

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
