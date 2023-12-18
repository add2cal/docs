
# How to integrate Buttons and RSVP Forms with Next.js

## Step 1: npm installation

Since Nextjs does not play that nicely with web components, we strongly recommend to use our official [React Wrapper](https://github.com/add2cal/add-to-calendar-button-react) package instead of the default one.

It already mitigates all the potential problems and issues.

```bash
npm install add-to-calendar-button-react
```

## Step 2: Import it

Import the module into the component, where you want to use the button.

```typescript
import { AddToCalendarButton } from 'add-to-calendar-button-react';
```

## Step 3: Use it

Start using it by adding a `<AddtoCalendarButton proKey="prokey-of-your-event" />` tag to your source code.
