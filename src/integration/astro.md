---
title: How to integrate Buttons and RSVP Forms with Astro
description: Integrate Add to Calendar PRO with Astro applications. Complete guide for calendar buttons and RSVP forms in Astro projects.
---

# How to integrate Buttons and RSVP Forms with Astro

## Step 0: Pick the right solution

You can simply load the Add to Calendar Button script via CDN and integrate as described at the default [HTML guide](/integration/html).  
However, this some at some cost and you would need to take precaution to only load and render it on the client.

We recommend to use the React wrapper npm package, create a custom JSX component, and then integrate this component with `client:only="react"` attribute.

## Step 1: Setup

### Create a new component

Create a new component in the components folder and name it "AddtoCalendarButton.tsx".  
If you have multiple buttons, you can either create multiple components or make it accept the props you need to customize it.

### Add the React wrapper package

Install the package from the npm registry.

```bash
npm install add-to-calendar-button-react
```

...and import it into your new component:

```tsx
import { AddToCalendarButton } from 'add-to-calendar-button-react';
```

## Step 2: Define the button

Define the button in your new component.  
In our example, we also added a ProKey prop to illustrate how you can make it more dynamic.

```tsx
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import type { AddToCalendarButtonType } from 'add-to-calendar-button-react';

export default function atcb(props: AddToCalendarButtonType) {
  return (
    <AddToCalendarButton proKey={props.prokey} ></AddToCalendarButton>
  );
}
```

## Step 3: Use it

You can now import this component wherever you need it and use it like any other Astro component.

Your code block could look like the following.

```astro
---
import AddToCalendarButton from '../components/AddToCalendarButton.tsx';
import Layout from '../layouts/Layout.astro';
---
<Layout>
  <AddToCalendarButton client:only="react" prokey="prokey-of-your-event" />
</Layout>
```
