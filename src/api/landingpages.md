
# Landing Page Template API

::: info Mind the difference!
This is about the landing page template.

A functional landing page consists of 2 base elements. Such a template block, holding the data about the structure and style of the page, as well as an [event](/api/events) or [subscription group](/api/groups), which defines the underlying date(s).
:::

## Get all/latest landing page templates

```
GET /landingpage/all
```

Gets a list with the ids of all available landing page templates.

```
GET /landingpage/latest
```

Gets the latest landing page template.

## Get one landing page template

```
GET /landingpage/:id
```

Reading a specific landing page template does not allow for any additional parameters. It only takes the id in the request url and simply provides you with all data for this one.

### Potential response

```json
{
  "id": 67,
  "name": "RSVP LP",
  "header_image": null,
  "title": "",
  "intro": "<p>Reserve your seat today!</p>",
  "legal": null,
  "highlight_color": "#9456ff",
  "background": "preset",
  "gradient_direction": null,
  "background_color_1": "#000000",
  "background_color_2": null,
  "image": "9aee3e8a-481b-4b26-89a2-e2bf9f72d2da",
  "image_repeat": true,
  "meta_title_override": null,
  "meta_robots_override": true,
  "meta_description_override": null,
  "custom_domain": null,
  "date_created": "2024-06-27T07:21:15.739Z",
  "date_updated": "2025-04-12T18:57:40.863Z"
}
```

<br />

## Add a landing page template

```
POST /landingpage
```

Creating a new landing page template requires you to at least provide the "name" field in the body.

```json
{
  "name": "Name of the item", // only internal
}
```

### Potential request with all fields

```json
{
  "name": "Name of the item",
  "title": "Welcome to my website",
  "intro": "<p>Some text...</p>", // intro text; allows for HTML
  "legal": "<p>&copy; 2025, ACME Inc.</p>", // legal footer text; allows for HTML
  "highlight_color": "#fcba03", // hex code; used for buttons and decorative elements
  "background": "preset", // options: solid, gradient, image, preset (same as image, but with a files selected from our library)
  "gradient_direction": null, // options: linear-t, linear-tr, linear-r, linear-br, radial; only with background = "gradient"
  "background_color_1": "#000000", // hex code
  "background_color_2": null, // hex code; only with background = "gradient"
  "image_repeat": true, // whether to show the background image fullscreen or repeat it
  "meta_title_override": null, // text that overrides the auto-generated meta title
  "meta_robots_override": true, // if true, we set "norobots, noindex"
  "meta_description_override": null, // text that overrides the auto-generated meta description
  "custom_domain": null // id of a set up custom domain
}
```

::: warning No image on POST/PATCH
Mind that you cannot specify an image for the header or when using image as background option!  
This can only be done via our web app.
:::

### Potential response

```json
{
  "status": "success",
  "message": "created",
  "id": "67"
}
```

The id from a successful creation can be used for further processing, like using it at an event call.

<br />

## Update a landing page template

```
PATCH /landingpage/:id
```

Updating a landing page template follows the same rules as creating one.

**Specialties when updating:**
- Fields you send are updated.  
- Fields you do not send stay as they are.
- Set a field to `null` and it gets cleared.

<br />

## Delete a landing page template

```
DELETE /landingpage/:id
```

Deleting a landinpgage template is simple. Only provide the prokey and it gets removed.

**Be careful with this call!**

::: warning This does not delete events or groups!
They remain active, but will then use the generic default landing page template instead.
:::
