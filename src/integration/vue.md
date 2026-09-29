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
import 'add-to-calendar-button/i18n/de';
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

The npm package includes only the default style and English by default. The example mixes `add-to-calendar-button/styles/all` with `add-to-calendar-button/i18n/de`, which is valid: use `add-to-calendar-button/styles/3d` when your style is fixed, or `add-to-calendar-button/styles/all` when remote PRO configuration can change it without deployment. Import the specific language or small known set, such as `add-to-calendar-button/i18n/de`, by default; use `add-to-calendar-button/i18n/all` only when languages can change unpredictably at runtime. Both `/all` imports increase the bundle because they include every respective asset.

Alternatively, load styles and languages dynamically from jsDelivr by setting `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` on the element. Apply the same strategy to custom triggers; the option is named `styleSource` in `atcb_action`.
