
# Groups API

::: info Style = Layout
Styles are referenced with the key "layout".
:::

## Get all/latest groups

```
GET /group/all
```

Gets a list with the ids of all available groups.

```
GET /group/latest
```

Gets the latest group.

## Get one group

```
GET /group/:prokey
```

Reading a specific group does not allow for any additional parameters. It only takes the proKey in the request url and simply provides you with all data for this one.

The response holds more fields than you might expect, as a group can be combined with a calendar subscription and therefore with a style and cta template.

### Potential response

```json
{
  "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaaa",
  "name": "My events",
  "status": "published",
  "internal_note": null,
  "subscription": "no",
  "subscription_cal_url": null,
  "layout": null,
  "landingpage": null,
  "cta": false,
  "cta_block": null,
  "date_updated": "2023-11-24T15:05:14.079Z",
  "date_created": "2023-11-24T15:05:13.007Z",
  "events": [
    "31a17cce-bbbb-4ee3-99bb-6144c6a3aaaa",
    "31a17cce-cccc-4ee3-99bb-6144c6a3bbbb"
  ]
}
```

<br />

## Add a group

```
POST /group
```

Creating a new group requires you to at least provide the "name" field in the body.

```json
{
  "name": "Name of the Event Group" // usually only internal, but can also appear publicly, if you use the subscription functionality!
}
```

### Potential request with all fields

Mind that you cannot add events on group creation. **You can only link events to a group when creating a new event!**

```json
{
  "name": "Name of the Event Group",
  "internal_note": null, // an optional simple string
  "subscription": "no", // can be "no" or "external" - the latter one requires a subscription_cal_url
  "subscription_cal_url": null, // url to an external calendar. Needs to start with "http"! Usually ends with ".ics"
  "layout": "id-of-a-style-template", // take the id from the url in the application or the response when creating one via API
  "landingpage": "id-of-a-landingpage-template", // take the id from the url in the application or the response when creating one via API
  "cta": true,
  "cta_block": "id-of-a-cta-block" // take the id from the url in the application or the response when creating one via API
}
```

### Potential response

```json
{
  "status": "success",
  "message": "created",
  "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaaa"
}
```

You can use the ProKey for further processing (incl. creating events within this group).

<br />

## Update a group

```
PATCH /group/:prokey
```

Updating a group follows the same rules as creating one.

::: warning Limitations
You can only change the subscription setting as long as there are no events linked to the group!

For the status, mind that if a group gets set to draft on the application UI, you cannot publish it via API!

**For every 5th update, we also deduct 1 event credit to prevent abuse!**
:::

<br />

## Delete a group

```
DELETE /group/:prokey
```

Deleting a group is simple. Only provide the prokey and it (incl. all linked events) gets removed.

**Be careful with this call!**