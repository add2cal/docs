---
title: How to use Buttons and RSVP Forms with HubSpot
description: Integrate Add to Calendar PRO with HubSpot CRM. Add calendar buttons and RSVP forms to your HubSpot marketing workflows.
---

# How to use Buttons and RSVP Forms with HubSpot

## Intro

When building a website or landing page at HubSpot, there are a lot of limitations in place.

**Good news: It is still possible and not difficult to integrate an Add to Calendar Button or RSVP form!**

## Step 1: Integrate our base scripts

You would need to add our script as well as a HubSpot specific extension somewhere on the page.

This can be the source code of a rich text element, the embed code of a video element, or (in the website case) the header HTML area within the website settings.

The important part is, that you only need to do this once per page - not matter the amount of Add to Calendar Buttons and/or RSVP forms on a page.

Copy and paste the following code block:

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
<script type="text/javascript" async defer>document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".add-to-calendar-pro-frame");e.forEach(e=>{let t=e.innerHTML.trim(),a=t.match(/^[a-z0-9\-]+$/);if(a){let r=document.createElement("add-to-calendar-button");r.setAttribute("proKey",a[0]),e.parentNode.replaceChild(r,e)}})});</script>
```

## Step 2: Use it

You can now add your buttons and forms by creating `<div></div>` elements in the source code of a rich text input or video embed code, where you add the class name "add-to-calendar-pro-frame" and the proKey as innerHTML.

We also recommend a wrapper to optimize the positioning.

Like this:

```html
<div style="width:fit-content;margin:auto;"><div class="add-to-calendar-pro-frame">prokey-of-your-event</div></div>
```

<br /><br />

::: tip Special Case: Landing Page
At landing pages, you usually cannot add global header HTML and in some cases cannot edit the rich text source code too.

Use the video element and add the above code blocks to the embed code input.
:::

::: warning Preview in the editor
When using the rich text input instead of the video element, you would only see the Add to Calendar Element rendered in the preview or at the live site, but not in the editor itself!

When using the video element, you might see the button or form duplicated. This also only happens within the editor!
:::
