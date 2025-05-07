
# RSVP Template API

::: info Mind the difference!
This is about the RSVP template blocks.

A functional RSVP form consists of 2 base elements. Such an RSVP template block, holding the data about the structure of the form, as well as an [event](/api/events.html), which defines the underlying date.
:::

## Get an RSVP

```
GET /rsvp-block/:id
```

Reading an rsvp block does not allow for any additional parameters. It only takes the id in the request url and simply provides you with all data for a specific template block.

### Potential response

```json
{
    "name": "Demo RSVP Block",
    "max": 50,
    "maxpp": 2,
    "expires": "2024-12-31T14:29:01.000Z",
    "maybe_option": true,
    "initial_confirmation": false,
    "doi": false,
    "headline": "Join the Add to Calendar User Community!",
    "text": "<p>Discover the next level tooling for Add to Calendar Buttons, RSVP, and more. <strong>Made for you! </strong>🫵</p>",
    "fields": [
        {
            "type": "hidden",
            "name": "hidden_field",
            "label": "",
            "required": true,
            "default": "some hidden information"
        },
        {
            "type": "checkbox",
            "name": "required_check",
            "label": "a required check",
            "required": true,
            "default": false
        }
    ],
    "email_rsvp_doi": 34,
    "email_rsvp_thank_you": 33,
    "email_rsvp_signup_confirmation": 763,
    "email_rsvp_change_confirmation": 434,
    "email_rsvp_event_update": 55,
    "email_rsvp_magic_link": 454,
    "email_rsvp_second_signup": 153,
    "date_updated": "2023-12-09T14:54:27.586Z",
    "date_created": "2023-11-19T08:43:16.180Z",
}
```

<br />

## Add an RSVP

```
POST /rsvp-block
```

Creating a new RSVP template block requires you to at least provide the "name" field in the body.

```json
{
    "name": "Name of the item", // only internal
}
```

### Potential request with all fields

```json
{
    "name": "Demo RSVP Block",
    "max": 50, // max amount of seats; defaults to unlimited
    "maxpp": 2, // max seats per sign-up; defaults to 1
    "expires": "2024-12-31T14:29:01.000Z", // an optional expiration date as ISO 8601 UTC datetime
    "maybe_option": true,
    "initial_confirmation": false, // if true, the initial sign-up will always be "confirmed"
    "doi": false, // if true, each user will need to confirm his email
    "headline": "Join the Add to Calendar User Community!",
    "text": "<p>Discover the next level tooling for Add to Calendar Buttons, RSVP, and more. <strong>Made for you! </strong>🫵</p>", // allowing for <p>, <strong>, <em>, <u>, <h1>, <h2>, <h3>, <h4>, <ul>, <ol>, <li>, <a>
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
    "email_rsvp_doi": 34, // the id of an email template can be seen from the url, when opening it in the web app
    "email_rsvp_thank_you": 33,
    "email_rsvp_signup_confirmation": 763,
    "email_rsvp_change_confirmation": 434,
    "email_rsvp_event_update": 55,
    "email_rsvp_magic_link": 454,
    "email_rsvp_second_signup": 153,
}
```

For the fields array, you can add the following types (`type`):
* **text**: Renders a regular text-type input field.
* **number**: Renders a number-type input field.
* **checkbox**: Renders a checkbox.
* **radio**: Renders a radio button. Consecutive radio fields form 1 group.
* **label**: Only renders the label text. If put in front of a radio group, it would turn into the radio group's label.
* **hidden**: Would not show up at the UI level. Can be used to transmit additional data on each sign-up.

Besides the type, fields take the following attributes:
* **name**: The identifier, also used for the results' data table.
* **required**: true/false.
* **label**: The label of the field. Simple string.
* **placeholder**: A potential placeholder ("text", "number", and "radio" only). For "radio" fields, this is the value of the field.
* **default**: The default value. String for "text", "number", and "hidden". True/false for "checkbox" and "radio".

### Potential response

```json
{
    "success": "RSVP block created",
    "id": "67"
}
```

The id from a successful creation can be used for further processing, like using it at an event call.

<br />

## Update an RSVP

```
PATCH /rsvp-block/:id
```

Updating an RSVP template block follows the same rules as creating one.

::: warning Mind the data structure
Changing the template for an active RSVP form changes the data structure.

This is not necessarily a problem, as we take care of this. So, it would not break something directly.

However, the data you collect might be harder to compare, as some replies might look different than others!
:::

<br />

## Delete an RSVP

```
DELETE /rsvp-block/:id
```

Deleting an RSVP block is simple. Only provide the prokey and it gets removed.

**Be careful with this call!**

::: warning This does not delete events or groups!
They remain active, but transform into regular events, as the RSVP link gets dropped.

This means that an integrated RSVP form transforms into an Add to Calendar button.
:::
