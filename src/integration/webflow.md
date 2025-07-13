---
title: How to use Buttons and RSVP Forms with Webflow
description: Integrate Add to Calendar PRO with Webflow websites. Easy setup for calendar buttons and RSVP forms in Webflow projects.
---

# How to use Buttons and RSVP Forms with Webflow

## Step 0: Prerequisites

When integrating Add to Calendar Buttons or RSPV forms with Webflow, you need to to be able to add custom code, which requires a paid plan!

## Step 1: Add the base script

* Go to your website's settings.
* Navigate to the "Custom code" section.
* Copy the following code snippet and put it into the `<head>` input.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
```

## Step 2: Create a Custom Element

* Back at the designer, create a new custom element.
* For the tag name (under "Settings" at the new element), use `add-to-calendar-button`.
* Add a new attribute to the element. The name should be "proKey". The value would be the proKey you want to use.
* That's it. Publish and test.

<br /><br />

::: warning Mind the Glitch!
Due to limitations at the Webflow designer, the button cannot be rendered there and also not at the preview. You would need to publish first and check the button at the live site.
:::
