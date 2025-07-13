---
title: Webhook API
description: Learn how to create, read, update, and delete webhooks via Add to Calendar PRO's API to automate your event marketing flows.
---

# Webhook API

## Get all/latest Webhooks

```
GET /webhook/all
```

Gets a list with the ids of all available webhooks.

```
GET /webhook/latest
```

Gets the latest webhook.

## Get one Webhook

```
GET /webhook/:id
```

Reading a specific webhook does not allow for any additional parameters. It only takes the id in the request url and simply provides you with all data for this one.

### Potential response

```json
{
  "id": 67,
  "name": "API generated Webhook",
  "active": true,
  "method": "POST",
  "payload_url": "https://webhook-endpoint.your-domain.com",
  "trigger": "create",
  "trigger_element": "rsvp_answer",
  "prokey_filter": "abcdef12-3456-4789-8bcd-ef0123456789",
  "header": [
    {
      "key": "secret",
      "value": "f7n4wzvn$7t84owz%vc!4wort73"
    }
  ],
  "body": [],
  "date_created": "2025-04-08T12:50:05.756Z",
  "date_updated": null,
  "last_execution": "2025-05-01T02:33:08.356Z"
}
```

<br />

## Add a Webhook

```
POST /webhook
```

Creating a new webhook requires you to set most of the fields. **Only `prokey_filter`, `body`, and `header` are optional!**

### Potential request with all fields

```json
{
  "name": "API generated Webhook", // only internal
  "active": true, // if false, it would not fire
  "method": "POST", // options: GET, POST, PUT, PATCH, DELETE
  "payload_url": "https://webhook-endpoint.your-domain.com", // the endpoint where we send the data to
  "trigger": "create", // options: create, update, delete
  "trigger_element": "rsvp_answer", // options: rsvp_answer, event, event_group, style, rsvp_template, cta_template, landingpage_template
  "prokey_filter": "abcdef12-3456-4789-8bcd-ef0123456789", // for rsvp answers, you can use this to filter for a specific event
  "header": [ // additional fields that get added to the header (usually some authentication token)
    {
      "key": "secret",
      "value": "f7n4wzvn$7t84owz%vc!4wort73"
    }
  ],
  "body": [ // additional body fields to send
    {
      "key": "additional-body-field",
      "value": "some value"
    }
  ]
}
```

::: info Customize the body
Per default, we send all data of the trigger element as JSON object with the key "element_data".

You can also define your own fields and use single fields as value by adding them to the body. There, you can add dynamic values by adding them in double curly brackets.  
Check the web app for more details on which fields are available for which trigger_element.
:::

### Potential response

```json
{
  "status": "success",
  "message": "created",
  "id": "67"
}
```

::: tip Test it
You can use the web app to send a test call with some generic test data.
You can also use services like [webhook.site](https://webhook.site/) to test before attaching it to your system.
:::

<br />

## Update a Webhook

```
PATCH /webhook/:id
```

Updating a webhook follows the same rules as creating one.

**Specialties when updating:**
- Fields you send are updated.  
- Fields you do not send stay as they are.
- Set a field to `null` and it gets cleared.

<br />

## Delete a Webhook

```
DELETE /webhook/:id
```

Deleting a webook is simple. Only provide the prokey and it gets removed.

**Be careful with this call as it would immediately remove the corresponding functionality!**
