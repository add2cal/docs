
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

This can go into your `vite.config.js` or other places depending on your setup. Check the official Vue documentation for more details: [Click here](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue).

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

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event">` tag to your source code.
