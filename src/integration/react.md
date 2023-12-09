
# Using Buttons and Forms with React

## Step 0: Pick a solution
As React projects can be very versatile, there are multiple potential ways to work with the Add to Calendar Button.

* In rather basic projects, you can use the Web Component out-of-the-box.
* If you are using TypeScript, you would need to define a respective interface.
* In all cases, you could also use the official [Add to Calendar Button React Wrapper](https://github.com/add2cal/add-to-calendar-button-react) instead of the main script. This comes with a deeper TypeScript and React integration.
We will highlight all options below.

Choose your fighter!

## Step 1: npm installation

### Option A: Web Component

Install the package from the npm registry.

```bash
npm install add-to-calendar-button
```

### Option B: React Wrapper

If you rather go with the more specialized React Wrapper, install the following package instead:

```bash
npm install add-to-calendar-button-react
```

## Step 2: Import it

### Option A: Web Component

Import the module into the component, where you want to use the button.

```typescript
import 'add-to-calendar-button';
```

### Option B: React Wrapper

With the React Wrapper implementation, the import statement looks a little bit different.

```typescript
import { AddToCalendarButton } from 'add-to-calendar-button-react';
```

## Step 3: Optimize the TypeScript config for the Web Component

::: info
This step is only necessary if you are NOT using the React Wrapper AND if you are working with TypeScript!
:::

In this case, you would need to define a respective global JSX interface. You do this within a *.d.ts type file (like "global.d.ts"), which needs to be picked up by your tsconfig (there, you should specify the "typeRoots" option).

```typescript
// global.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['add-to-calendar-button']: CustomElement<AddToCalendarButton>;
    }
  }
}
```

## Step 4: Use it

### Option A: Web Component

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event">` tag to your source code.

### Option B: React Wrapper
If you went for the React Wrapper, the tag will look a little different. Basically, you then use the imported React component instead of the custom element (Web Component).

Start using it by adding a `<AddtoCalendarButton proKey="prokey-of-your-event">` tag to your source code.
