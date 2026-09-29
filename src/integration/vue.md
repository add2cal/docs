---
title: How to integrate Buttons and RSVP Forms with Vue 3
description: Integrate Add to Calendar PRO with Vue 3 applications. Complete guide for calendar buttons and RSVP forms in Vue projects.
---

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
import 'add-to-calendar-button/styles/all';
import 'add-to-calendar-button/i18n/all';
```

## Step 3: Register the custom element

Merge this compiler setting into your existing configuration so Vue recognizes the Web Component.

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'add-to-calendar-button',
        },
      },
    }),
  ],
});
```

## Step 4: Use it

Start using it by adding a `<add-to-calendar-button prokey="prokey-of-your-event"></add-to-calendar-button>` tag to your source code.

<br />

## Bring your own button

Open the button or form as a modal from a click handler. The dynamic import runs in the browser when clicked. Pass the trigger element for focus handling.

```vue
<script setup>
async function openEvent(event) {
  const trigger = event.currentTarget;
  const { atcb_action } = await import('add-to-calendar-button');
  atcb_action({ prokey: 'prokey-of-your-event' }, trigger);
}
</script>

<template>
  <button @click="openEvent">Open event</button>
</template>
```

## Styles and languages

The npm package includes only the default style and English by default. Because your PRO configuration can change styles and languages remotely, the all-imports above make every supported asset in your installed version available without another application deployment.

Alternatively, load styles and languages dynamically from jsDelivr by setting `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` on the element. Apply the same strategy to custom triggers; the option is named `styleSource` in `atcb_action`.
