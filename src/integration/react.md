---
title: How to integrate Buttons and RSVP Forms with React
description: Integrate Add to Calendar PRO with React applications. Complete guide for calendar buttons and RSVP forms in React projects.
---

# How to integrate Buttons and RSVP Forms with React

React 19 supports Web Components directly. Use the core `add-to-calendar-button` package and the `<add-to-calendar-button>` element.

## Step 1: npm installation

```bash
npm install add-to-calendar-button
```

## Step 2: Create your component

`src/EventButton.tsx`:

```tsx
import 'add-to-calendar-button';

export default function EventButton() {
  return (
    <add-to-calendar-button prokey="prokey-of-your-event"></add-to-calendar-button>
  );
}
```

Your event data, styles, and RSVP settings remain connected to the PRO app through the `prokey`.

This example is for a browser-rendered React app. For Next.js, use the [Next.js guide](/integration/nextjs).

## Step 3: Add the custom element TypeScript declaration

Register the JSX type once in a declaration file included by your `tsconfig.json`. JavaScript projects can skip this step.

```typescript
// src/global.d.ts
import type { AddToCalendarButtonType } from 'add-to-calendar-button';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'add-to-calendar-button': DetailedHTMLProps<
        Omit<HTMLAttributes<HTMLElement>, keyof AddToCalendarButtonType>,
        HTMLElement
      > & AddToCalendarButtonType;
    }
  }
}

export {};
```

If `compilerOptions.types` is set, include `react` and `react-dom` alongside its existing entries. For example, preserve `vite/client` in a Vite project.

## Bring your own button

Use `atcb_action` from the core package in a React click handler to open the button or form as a modal. Pass the trigger element for focus handling.

```tsx
import { atcb_action } from 'add-to-calendar-button';

export default function CustomEventButton() {
  return (
    <button
      onClick={(event) =>
        atcb_action({ prokey: 'prokey-of-your-event' }, event.currentTarget)
      }
    >
      Open event
    </button>
  );
}
```

## Styles and languages

The npm package includes only the default style and English by default. Import every additional style and language selected in the PRO app for your buttons and RSVP forms:

```javascript
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

Place these imports alongside the core import or in a shared setup module.

Alternatively, load styles and languages dynamically from jsDelivr by setting `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` on the element. Apply the same strategy to custom triggers; the option is named `styleSource` in `atcb_action`.
