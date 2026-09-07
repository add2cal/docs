---
title: How to integrate Buttons and RSVP Forms with Svelte
description: Integrate Add to Calendar PRO with Svelte applications. Complete guide for calendar buttons and RSVP forms in Svelte projects.
---

# How to integrate Buttons and RSVP Forms with Svelte

## Step 1: npm installation

Install the package from the npm registry.

```bash
npm install add-to-calendar-button
```

## Step 2: Import and use it

Load the core package in `onMount` so this example also works with SvelteKit and server rendering.

```svelte
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    void import('add-to-calendar-button');
  });
</script>

<add-to-calendar-button prokey="prokey-of-your-event"></add-to-calendar-button>
```

## Bring your own button

Open the button or form as a modal from a click handler. The dynamic import runs in the browser when clicked. Pass the trigger element for focus handling.

```svelte
<script>
async function openEvent(event) {
  const trigger = event.currentTarget;
  const { atcb_action } = await import('add-to-calendar-button');
  atcb_action({ prokey: 'prokey-of-your-event' }, trigger);
}
</script>

<button onclick={openEvent}>Open event</button>
```

## Styles and languages

The npm package includes only the default style and English by default. Import every additional style and language selected in the PRO app for your buttons and RSVP forms:

```javascript
// Inside your component's <script> block
onMount(() => {
  void (async () => {
    await Promise.all([
      import('add-to-calendar-button/styles/3d'),
      import('add-to-calendar-button/i18n/de'),
    ]);
    await import('add-to-calendar-button');
  })();
});
```

Replace the `onMount` callback from the first example with this one. It registers the required assets before initializing the button.

Alternatively, load styles and languages dynamically from jsDelivr by setting `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` on the element. Apply the same strategy to custom triggers; the option is named `styleSource` in `atcb_action`.

## Optional: Server-side rendering

The package provides a separate SSR entry to pre-render a button shell. Use its asynchronous variant on the server for PRO data. Full interaction and RSVP forms still initialize in the browser. See [SSR with PRO](/integration/general#ssr-with-pro) and the [Button Svelte guide](https://add-to-calendar-button.com/use-with-svelte).
