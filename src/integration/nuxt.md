---
title: How to integrate Buttons and RSVP Forms with Nuxt
description: Integrate Add to Calendar PRO with Nuxt applications. Complete guide for calendar buttons and RSVP forms in Nuxt projects.
---

# How to integrate Buttons and RSVP Forms with Nuxt

## Step 1: npm installation

Install the package from the npm registry.

```bash
npm install add-to-calendar-button
```

## Step 2: Create a client plugin

Create `plugins/add-to-calendar.client.ts` in your Nuxt app directory (`app/plugins/` in the default Nuxt 4 structure). The `.client.ts` suffix loads the core package only in the browser.

```typescript
import 'add-to-calendar-button';

export default defineNuxtPlugin(() => {});
```

## Step 3: Register the custom element

Merge this compiler setting into your existing configuration so Vue recognizes the Web Component.

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'add-to-calendar-button',
    },
  },
});
```

## Step 4: Use it

```vue
<template>
  <ClientOnly>
    <add-to-calendar-button prokey="prokey-of-your-event"></add-to-calendar-button>
  </ClientOnly>
</template>
```

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

The npm package includes only the default style and English by default. Import every additional style and language selected in the PRO app for your buttons and RSVP forms:

```javascript
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

Place these imports in your `.client.ts` plugin.

Alternatively, load styles and languages dynamically from jsDelivr by setting `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` on the element. Apply the same strategy to custom triggers; the option is named `styleSource` in `atcb_action`.

## Optional: Server-side rendering

The package provides a separate SSR entry to pre-render a button shell. Use its asynchronous variant on the server for PRO data. Full interaction and RSVP forms still initialize in the browser. See [SSR with PRO](/integration/general#ssr-with-pro) and the [Button Nuxt guide](https://add-to-calendar-button.com/use-with-nuxt).

Do not render the generated SSR shell with `v-html`: Vue would replace its shadow DOM during hydration. The official Nuxt guide demonstrates a directive that preserves existing server markup.
