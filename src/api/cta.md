
# Call to Action Template API

## Get all/latest CTA templates

```
GET /cta-block/all
```

Gets a list with the ids of all available CTA template blocks.


```
GET /cta-block/latest
```

Gets the latest CTA template blocks.

## Get one CTA template

```
GET /cta-block/:id
```

Reading a specific CTA block does not allow for any additional parameters. It only takes the id in the request url and simply provides you with all data for this one.

### Potential response

```json
{
  "name": "Newsletter Dummy CTA",
  "type": "form",
  "headline": "🥰 Next: Sign up for our Newsletter",
  "text": "",
  "fields": [
    {
      "type": "text",
      "name": "email",
      "label": "",
      "required": false,
      "placeholder": "Email"
    },
    {
      "type": "text",
      "name": "name",
      "label": "",
      "required": false,
      "placeholder": "Full Name"
    },
    {
      "type": "checkbox",
      "name": "terms",
      "label": "I want to receive informative as well as promotional emails.",
      "required": true,
      "default": false
    }
  ],
  "url": "https://newsletter-endpoint.your-domain.com",
  "button_label": "Sign up",
  "date_created": "2024-06-27T15:36:30.988Z",
  "date_updated": "2025-05-06T22:18:40.306Z"
}
```

<br />

## Add a CTA template

```
POST /cta-block
```

Creating a new CTA template block requires you to at least provide the "name" and "type" fields in the body.

```json
{
  "name": "Name of the item", // only internal
  "type": "text" // options: none, text, link, share, form,
}
```

### Potential request with all fields

```json
{
  "name": "Name of the item",
  "type": "text",
  "headline": "Headline in the modal",
  "text": "Additional intro text",
  "fields": [ // see notes below for details
    {
      "type": "text",
      "name": "additional_info",
      "label": "Additional note",
      "required": false,
      "placeholder": "Type here...",
      "default": "Call me maybe"
    },
    {
      "type": "checkbox",
      "name": "required_check",
      "label": "a required check",
      "required": true,
      "default": false
    }
  ],
  "url": "https://url-to.your-domain.com", // depending on the type, this is the link or endpoint for the form data
  "button_label": "Click me"
}
```

For the fields array, you can add the following types (`type`):
* **text**: Renders a regular text-type input field.
* **number**: Renders a number-type input field.
* **checkbox**: Renders a checkbox.
* **radio**: Renders a radio button. Consecutive radio fields form 1 group.
* **label**: Only renders the label text. If put in front of a radio group, it would turn into the radio group's label.
* **hidden**: Would not show up at the UI level. Can be used to transmit additional data on send.

Besides the type, fields take the following attributes:
* **name**: The identifier, also used for the results' data table.
* **required**: true/false.
* **label**: The label of the field. Simple string.
* **placeholder**: A potential placeholder ("text", "number", and "radio" only). For "radio" fields, this is the value of the field.
* **default**: The default value. String for "text", "number", and "hidden". True/false for "checkbox" and "radio".

### Potential response

```json
{
  "success": "CTA template created",
  "id": "67"
}
```

The id from a successful creation can be used for further processing, like using it at an event call.

<br />

## Update a CTA template

```
PATCH /cta-block/:id
```

Updating a CTA template block follows the same rules as creating one.

<br />

## Delete a CTA template

```
DELETE /cta-block/:id
```

Deleting a CTA template block is simple. Only provide the prokey and it gets removed.

**Be careful with this call!**

::: warning This does not delete events or groups!
They remain active, but lose their CTA functionality.
:::
