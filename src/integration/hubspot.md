
# How to use Buttons and RSVP Forms with HubSpot

## Intro

When building a website or landingpage at HubSpot, there are a lot of limitations in place.

**Good news: It is still possible and not difficult to integrate an Add to Calendar Button or RSVP form!**

The only requirement: You need to be able to change the source code of a rich text field. When working with landingpages, this can be limited too, when using specific templates.

## Step 1: Integrate our base scripts

You would need to add our script as well as a HubSpot specific extension somewhere on the page.

This can be the mentioned source code or (in the website case) the header HTML area within the website settings.

The important part is, that you only need to do this once per page - not matter the amount of Add to Calendar Buttons and/or RSVP forms on a page.

Copy and paste the following code block:

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
<script type="text/javascript" async defer>document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".add-to-calendar-pro-frame");e.forEach(e=>{let t=e.innerHTML.trim(),a=t.match(/^[a-z0-9\-]+$/);if(a){let r=document.createElement("add-to-calendar-button");r.setAttribute("proKey",a[0]),e.parentNode.replaceChild(r,e)}})});</script>
```

## Step 2: Use it

You can now add your buttons and forms by creating <div></div> elements in the source code of a rich text input, where you add the class name "add-to-calendar-pro-frame" and the proKey as innerHTML.

Like this:

```html
<div class="add-to-calendar-pro-frame">prokey-of-your-event</div>
```
