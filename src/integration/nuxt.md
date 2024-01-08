
# How to integrate Buttons and RSVP Forms with Nuxt 3

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

## Step 3: Optimize the config

Theoretically, this was already it.

Vue works extremely well with Web Components.

However, you might notice a warning in the browser console.
To get rid of this, you need to provide a little bit more information to the vue compiler options.

This usually goes into your `nuxt.config.ts`.

```javascript
// nuxt.config.js or nuxt.config.ts

vue: {
  compilerOptions: {
    isCustomElement: (tag) => tag.includes('-'),
  },
}
```

In case the Add to Calendar Button is the only Web Component in your project, you could also be a little bit more explicit here.

```javascript
vue: {
  compilerOptions: {
    isCustomElement: (tag) => tag === 'add-to-calendar-button',
  },
}
```

## Step 4: Use it

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event" />` tag to your source code.
