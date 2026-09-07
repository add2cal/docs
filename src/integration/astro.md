---
title: How to integrate Buttons and RSVP Forms with Astro
description: Integrate Add to Calendar PRO with Astro applications. Complete guide for calendar buttons and RSVP forms in Astro projects.
---

# How to integrate Buttons and RSVP Forms with Astro

## Step 1: npm installation

```bash
npm install add-to-calendar-button
```

## Step 2: Create a shared component

Create `src/components/add-to-calendar.astro`. Define props in Astro frontmatter and load the package in the browser through a regular `<script>`.

```astro
---
import type { AddToCalendarButtonType } from 'add-to-calendar-button';

interface Props {
  prokey: NonNullable<AddToCalendarButtonType['prokey']>;
}

const { prokey } = Astro.props;
---

<add-to-calendar-button prokey={prokey}></add-to-calendar-button>

<script>
  import 'add-to-calendar-button';
</script>
```

## Step 3: Use the component

```astro
---
import AddToCalendarButton from '../components/add-to-calendar.astro';
---

<AddToCalendarButton prokey="prokey-of-your-event" />
```

## Styles and languages

The npm package includes only the default style and English by default. Import every additional style and language selected in the PRO app for your buttons and RSVP forms:

```javascript
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

Place these imports in the browser `<script>` block of your Astro component.

Alternatively, load styles and languages dynamically from jsDelivr by setting `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` on the element. Apply the same strategy to custom triggers; the option is named `styleSource` in `atcb_action`.

## Optional: Server-side rendering

The package provides a separate SSR entry to pre-render a button shell. Use its asynchronous variant on the server for PRO data. Full interaction and RSVP forms still initialize in the browser. See [SSR with PRO](/integration/general#ssr-with-pro) and the [Button Astro guide](https://add-to-calendar-button.com/use-with-astro).
