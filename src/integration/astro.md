---
title: How to integrate Buttons and RSVP Forms with Astro
description: Integrate Add to Calendar PRO with Astro applications. Complete guide for calendar buttons and RSVP forms in Astro projects.
---

# How to integrate Buttons and RSVP Forms with Astro

## Step 0: Pick the right architecture

You can use the web component directly wherever you need it or indirectly via a component (like add-to-calendar.astro, which gets imported at the respective page).

We recommend the direct approach, if you only use 1 element. More than 1, go with the helper component.

Below, we describe the helper component way. If you use it directly, simply do not create the component, but include the `<add-to-calendar-button />` code directly where you need it.

## Step 1: npm installation

Install the package from the npm registry.

```bash
npm install add-to-calendar-button
```

## Step 2: Create the component

Create a new component `add-to-calendar.astro` (usually at `./src/components/`).

## Step 3: Define the props

Define the props of the component. This should at least be the ProKey.

```tsx
import type { AddToCalendarButtonType } from 'add-to-calendar-button';

interface Props {
  prokey: AddToCalendarButtonType['proKey'];
} 

const { prokey } = Astro.props as Props;
```

## Step 4: Add the script

Add:

```html
<add-to-calendar-button prokey={prokey} />
```

Followed by:

```html
<script>
  import 'add-to-calendar-button';
</script>
```

## Step 5: Use the component

On any other page (or component), import and use it.

```tsx
import AddToCalendarButton from "../components/add-to-calendar-button.astro"; // set the path the way your project is set up
```

<br />

```astro
<AddToCalendarButton prokey="prokey-of-your-event" />
```
