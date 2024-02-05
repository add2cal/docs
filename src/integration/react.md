
# How to integrate Buttons and RSVP Forms with React

## Step 0: Pick a solution

As React projects can be very versatile, there are multiple potential ways to work with the Add to Calendar Button.

* In rather basic projects, you can use the Web Component out-of-the-box.
* In all other cases, you could also use the official [Add to Calendar Button React Wrapper](https://github.com/add2cal/add-to-calendar-button-react) instead of the main script. This comes with a deeper TypeScript and React integration.
We will highlight all options below.

Choose your fighter!

## Step 1: npm installation

### Option A: Web Component

Install the package from the npm registry.

```bash
npm install add-to-calendar-button
```

### Option B: React Wrapper

If you rather go with the more specialized React Wrapper, install the following package instead:

```bash
npm install add-to-calendar-button-react
```

## Step 2: Import it

### Option A: Web Component

Import the module into the component, where you want to use the button.

```typescript
import 'add-to-calendar-button';
```

### Option B: React Wrapper

With the React Wrapper implementation, the import statement looks a little bit different.

```typescript
import { AddToCalendarButton } from 'add-to-calendar-button-react';
```

## Step 3: Use it

### Option A: Web Component

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event">` tag to your source code.

### Option B: React Wrapper

If you went for the React Wrapper, the tag will look a little different. Basically, you then use the imported React component instead of the custom element (Web Component).

Start using it by adding a `<AddtoCalendarButton proKey="prokey-of-your-event">` tag to your source code.

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
