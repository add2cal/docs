---
title: How to integrate Buttons and RSVP Forms with simple HTML/JavaScript
description: Integrate Add to Calendar PRO with HTML and JavaScript. Simple CDN-based integration for calendar buttons and RSVP forms.
---

# How to integrate Buttons and RSVP Forms with simple HTML/JavaScript

## Step 1: CDN script integration

Load the script via the jsDelivr CDN.

You can place the respective script tag anywhere on your page. We recommend the `<head>` area. It loads async and also gets put to the end of the loading process automatically.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
```

## Step 2: Use it

Start using it by adding a `<add-to-calendar-button proKey="prokey-of-your-event"></add-to-calendar-button>` tag to your source code.

<br />

## Bring your own button

Alternatively, you can also trigger the button or form programmatically via the atcb_action function. You would need to write more custom JavaScript for this case.

Also mind that this will force a modal to appear.

You should provide an HTML element as second parameter. Event it is optional, it optimizes the UX; especially for keyboard navigation.

In the following example, we also use this element as trigger onClick:

```html
<button id="my-custom-button">Click here</button>

<script type="application/javascript">
  const button = document.getElementById('my-custom-button');
  button.addEventListener('click', () => atcb_action({ proKey: "prokey-of-your-event"}, button));
</script>
```
