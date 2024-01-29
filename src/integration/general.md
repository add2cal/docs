# Using Buttons and RSVP Forms with your Tech Stack

## Things to consider

There are 3 important things to consider before implementing.

### 1. Package/Plugin vs. CDN

Whether you want the script to be part of your core, managed via your usual package/plugin flows - or whether you want to load it via a script tag from an external CDN.

There are Pros and Cons for both approaches and it is completely up to you what you prefer. In doubt, it is about convenience and what you are used to. Mind that using it as a module requires you to keep it up-to-date manually!

### 2. Bundle Size

How important bundle size is to you, if you use the script as npm package.

If you are using the script in its plain version, you might wonder whether you can reduze the size of the script. Due to the nature of the script, this (e.g. tree-shaking) is not directly possible.
However, you can load the unstyle version instead to save on css data you do not need. With this approach, you would need to make sure that events in the app are linked to a style AND at this style, the "load async" option is active. This makes sure the style gets loaded async via the jsDelivr CDN (make sure this is allowed at potential CORS settings).

### 3. User Flow

If you want links and files to be generated via the script on the client side or whether you want to use our Proxy service.

The first case will generate the links to the calendar sites dynamically directly in the browser. It will also generate the ics file that way. This is the fastest approach (from a user's perspective). However, ics generation gets blocked at some systems and if a calendar provider goes offline or has interal problems, the user will not be able to save an event. Using our proxy requires events to be connected to a style with the "proxy" option active. In this case, links and files get generated on our side and the user gets redirected to to us first.

This way, when something does not work, we can tell the user about it and offer alternatives and guidance. It is more stable, but a little slower for the user. You can customize this journey by linking a style to a custom landingpage template.

## General workflow

There are only 2 steps necessary to get RSVP forms and buttons showing up in your application.

1. Load the script (via importing the package, loading the script via CDN, or via a plugin).
2. Place an `<add-to-calendar-button />` tag where you want the element to show up and add the proKey as attribute to it.

```html
<add-to-calendar-button proKey="prokey-of-your-event" />
```

We automatically generate a proKey for every event you create. You can find it at the very top of the respective event page.

When you [create an event via our API](/api/events.html#add-an-event), you will receive the proKey as response.

::: warning It's client-side only!
Mind that the button only works on the client-side.
Therefore, trying to render it on the server (e.g. with SSR or SSG prerendering), might lead to unexpected behavior.

Depending on your framework, you might want to wrap it into something like `<ClientOnly></ClientOnly>` (Nuxt) or add `use client` to the component (React).
:::

## Using it via CDN

Load the script by adding the following script tag to the head section of your website.
The script will be loaded in a non-blocking way.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
```

## Using it via NPM

Install the package using the following npm command:

```bash
npm install add-to-calendar-button
```

Import the module into your project/component:

```javascript
import 'add-to-calendar-button';
```

*Based on your framework/library, you might need to make minor adjustments to the respective config.*

## Using it via Plugin

For some systems (like WordPress), we provide official plugins.

Usually, you can find them in the respective stores; but check the respective page in this documentation for details and to make sure you do not install wrong or malicious code.

## Overwrite settings

Some parameters can be overwritten by adding them directly to the HTML tag.

This means that the value, put as attribute to the button integration, overrules a potential different setting at the app.

This can be useful, if custom style shall be defined within the code or you want to change some details dynamically. Latter one is quite limited and should be considered carefully! Usually, the better way to change things dynamically is via our API.

Parameters, that can be overwritten or even only set at the code level:


| Attribute          | Description                                                                                                                                                                                                                                                                                                                                                                                                                             | Type / Format                            |
| :------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| debug              | Logs errors in the browser's JavaScript console and renders an error message instead of the button.                                                                                                                                                                                                                                                                                                                                     | Boolean                                  |
| cspnonce           | Necessary if you are working with a strict Content Security Policy. Experimental! Currently only for JavaScript; CSS must be allowed inline.                                                                                                                                                                                                                                                                                            | String                                   |
| instance           | Triggers a "re-render" of the button by changing/increasing the number.                                                                                                                                                                                                                                                                                                                                                                 | Number                                   |
| attendee           | Scheme "NAME\|E-MAIL" (for example, "John Doe\|john.doe@gmail.com") or just an email address. Only 1 entry possible. Enables the use of iCal status functionalities. Requires a set organizer. Enforces dynamic creation of ics files instead of retrieving the static file.                                                                                                                                                            | String (NAME\|EMAIL)                     |
| images             | Enhances the rich data details. 1-3 images via URL. It is recommended to use 3 images, each with a width of 1920px. One with an aspect ratio of 1x1, one with 4x3, and one with 16x9.                                                                                                                                                                                                                                                   | Array (urls)                             |
| size               | Adjust scaling. 1-3 values. With multiple values, the first is set for large screens, the second for medium screens, and the third for small screens. With 2 values, the second applies to both medium and small screens.                                                                                                                                                                                                               | String (X\|X\|X)                         |
| inline             | Renders the button inline instead of the default block style.                                                                                                                                                                                                                                                                                                                                                                           | Boolean                                  |
| inlineRsvp         | Renders the RSVP form inline and not as a modal after clicking the button.                                                                                                                                                                                                                                                                                                                                                              | Boolean                                  |
| forceOverlay       | Renders dropdowns above all elements. Resource-intensive but necessary for some layouts.                                                                                                                                                                                                                                                                                                                                                | Boolean                                  |
| customLabels       | See the relevant setting in the app for possible values. The structure must comply with a JSON schema.                                                                                                                                                                                                                                                                                                                                  | Object                                   |
| customCss          | Loads a specified external CSS file (absolute path) instead of the integrated style.                                                                                                                                                                                                                                                                                                                                                    | String (url)                             |
| lightMode          | Defines how the dark/light theme should be set. "system" is based on the user's operating system settings. "bodyScheme" switches to "dark" if the "atcb-dark" or "dark" class is set in the body or html tag.                                                                                                                                                                                                                           | String (system, dark, light, bodyScheme) |
| styleLight         | See the relevant setting in the app for possible values. Example: styleLight="--btn-background: #2f4377; --btn-text: #fff; --font: Georgia, 'Times New Roman', Times, serif;"                                                                                                                                                                                                                                                           | String                                   |
| styleDark          | See the relevant setting in the app for possible values. Example: styleDark="--btn-background: #2f4377; --btn-text: #fff;"                                                                                                                                                                                                                                                                                                              | String                                   |
| language           | Language of the button. Options: ar, cs, de, en, es, et, fa, fi, fr, hi, id, it, ja, ko, nl, no, ro, pl, pt, sv, tr, vi, zh                                                                                                                                                                                                                                                                                                             | String                                   |
| blockInteraction   | Blocks any interaction with the button, with the exception of hover effects.                                                                                                                                                                                                                                                                                                                                                            | Boolean                                  |
| disabled           | Disables the button and shows it in a grey state.                                                                                                                                                                                                                                                                                                                                                                                       | Boolean                                  |
| hidden             | Hides the button completely.                                                                                                                                                                                                                                                                                                                                                                                                            | Boolean                                  |
| bypassWebViewCheck | For users who load the button on their iPhone in a WebView environment (such as the Instagram browser), we cannot offer the ics file directly for download. Therefore, in this case, we show a small tutorial on how to save the event instead. If you use the button in your own application, where you can allow the download of ics files in the default browser, you can bypass this workaround with the option bypassWebViewCheck. | Boolean                                  |
| customVar          | Define custom variables, which then can be used in your event's description and location fields. The structure must comply with a JSON schema. A field "name" can be used via %%name%% in the description or location.                                                                                                                                                                                                                  | Object                                   |
| fakeMobile         | Simulates a mobile device.                                                                                                                                                                                                                                                                                                                                                                                                              | Boolean                                  |
| fakeIOS            | Simulates iOS.                                                                                                                                                                                                                                                                                                                                                                                                                          | Boolean                                  |
| fakeAndroid        | Simulates Android.                                                                                                                                                                                                                                                                                                                                                                                                                      | Boolean                                  |
