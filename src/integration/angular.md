
# Using Buttons and Forms with Angular

## Step 1: npm installation

Install the package from the npm registry.

```bash
npm install add-to-calendar-button
```

## Step 2: Import it

Import the module into the component, where you want to use the button.

```javascript
import 'add-to-calendar-button';
```

## Step 3: Optimize the Angular config

To make Angular work properly with the Web Component, you need to import the CUSTOM_ELEMENTS_SCHEMA and update the @NgModule block respectively.

```typescript
// app.module.ts

import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
//(...)

@NgModule({
  //(...),
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
//(...)
```

## Step 4: Use it

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event">` tag to your source code.

## Proper bindings

To bind data to a specific attribute, you need to use the syntax [attr.PARAMETER]="your data".

Based on your setup, the data flow might happen after the first rendering of the button. This is no problem, but you might see errors in the console when in debug mode, claiming there is data missing. Mind that due to this reason, binding the "identifier" option would not work.

```javascript
<add-to-calendar-button
  [attr.proKey]="yourProkeyVar"
></add-to-calendar-button>
```
