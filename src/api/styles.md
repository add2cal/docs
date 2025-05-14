
# Style API

## Get all/latest Styles

```
GET /style/all
```

Gets a list with the ids of all available styles.

```
GET /style/latest
```

Gets the latest style.

## Get one Style

```
GET /style/:id
```

Reading a specific style does not allow for any additional parameters. It only takes the id in the request url and simply provides you with all data for this one.

### Potential response

```json
{
  "name": "Dummy Style",
  "options": [
    "apple",
    "google",
    "ms365",
    "msteams"
  ],
  "buttonStyle": "default",
  "customCss": null,
  "inline": false,
  "buttonsList": false,
  "trigger": "hover",
  "listStyle": "dropdown",
  "hideBackground": false,
  "hideIconButton": false,
  "hideIconList": false,
  "hideIconModal": false,
  "hideTextLabelButton": false,
  "hideTextLabelList": false,
  "hideCheckmark": false,
  "lightMode": "light",
  "language": "en",
  "customLabels": null,
  "images": null,
  "hideRichData": false,
  "identifier": null,
  "bypassWebViewCheck": false,
  "hideBranding": false,
  "inlineRsvp": false,
  "pastDateHandling": "none",
  "size": "6",
  "proxy": true,
  "forceOverlay": false,
  "styleLight": null,
  "styleDark": null,
  "load_async": false,
  "optionsMobile": null,
  "optionsIOS": null,
  "date_created": "2024-10-09T17:23:46.421Z",
  "date_updated": "2024-10-09T17:23:46.535Z"
}
```

<br />

## Add a Style

```
POST /style
```

Creating a new style requires you to at least provide the "name" and "options" fields in the body.

```json
{
  "name": "Name of the item", // only internal
  "options": ["apple", "google"] // options: apple, google, ical, ms365, msteams, outlookcom, yahoo
}
```

### Potential request with all fields

```json
{
  "name": "Name of the item",
  "options": [
    "apple",
    "google"
  ],
  "buttonStyle": "default", // options: default, 3d, flat, round, neumorphism, text, date, custom (requires customCSS to be set)
  "customCss": "https://path-to-your-custom-css-file.your-domain.com/style.css", // load your own custom css file (use in combination with buttonStyle "custom")
  "inline": false, // render Add to Calendar Button inline; otherwise, block style
  "buttonsList": false, // render options as individual Add to Calendar Buttons
  "trigger": "hover", // defines how the options list opens. on "hover", or "click" (some combinations of other parameters force one or the other!)
  "listStyle": "dropdown", // options: dropdown, dropdown-static, dropup-static, overlay, modal
  "hideBackground": false, // if true, use no darkend background when the options list opens
  "hideIconButton": false, // if true, hides the icon at the Add to Calendar Button
  "hideIconList": false, // if true, hides the icons at the options list
  "hideIconModal": false, // if true, hides any icon at the modals
  "hideTextLabelButton": false, // if true, hides the label at the Add to Calendar Button
  "hideTextLabelList": false, // if true, hides the labels at the options list
  "hideCheckmark": false, // if true, hides the checkmark, which is added to the Add to Calendar Button when an event got saved
  "lightMode": "light", // theme; options: light, dark, system, bodyScheme
  "language": "en", // options: ar, cs, de, en, es, et, fa, fi, fr, hi, id, it, ja, ko, nl, no, ro, pl, pt, sv, tr, vi, zh
  "customLabels": { // override any text - see the web app for all available labels
    "modal.button.default": "hit this!"
  },
  "images": null, // an array of URLs of image files, which get presented towards search engines and Co as meta data
  "hideRichData": false, // if true, we will not add any structured data about the event
  "identifier": null, // a custom identifier for the Add to Calendar Button, which gets used for tracking purposes
  "bypassWebViewCheck": false, // In WebView environments, ics file handling usually gets blocked and we show a small guide. If set true, we would still force the download. Use if you are putting the button into your own app that you can control.
  "hideBranding": false, // if true, we hide any branding (requires a plan higher than "hobby")
  "inlineRsvp": false, // if true, an RSVP form gets rendered inline; otherwise, we render a button, which opens it inside a modal
  "pastDateHandling": "none", // options: none, disable, hide; what to do with the Add to Calendar Button, if an event is in the past
  "size": "6", // size of the Add to Calendar Button; number between 0 and 10
  "proxy": true, // if true, a click ad the Add to Calendar Button gets routet through our proxy. Required for our tracking to track the clicks. Pre-checks the targeted calendar and shows alternatives and guidance if not available
  "forceOverlay": false, // renders the Add to Calendar list on top of all other element in a forced way. Compute intensive! Only use, if you experience problems with the default setup
  "styleLight": { // override css settings. See the web app for all available options, which are based on the used ButtonStyle
    "--base-font-size-l": "14px",
  },
  "styleDark": null, // override css settings, which only apply to the dark mode version
  "load_async": false, // load the button in an async way - will show a placeholder first
  "optionsMobile": null, // specify alternative options, which get used for mobile devices
  "optionsIOS": null // specify alternative options, which get used for iOS devices; if set, "optionsMobile" will only target Android
}
```

### Potential response

```json
{
  "status": "success",
  "message": "created",
  "id": "67"
}
```

<br />

## Update a Style

```
PATCH /style/:id
```

Updating a style follows the same rules as creating one.

<br />

## Delete a Style

```
DELETE /style/:id
```

Deleting a style is simple. Only provide the prokey and it gets removed.

**Be careful with this call!**

::: warning This does not delete events or groups!
They remain active, but will then use default styl instead.
:::
