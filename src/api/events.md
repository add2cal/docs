---
title: Events API
description: Learn how to create, read, update, and delete events via Add to Calendar PRO's API for seamless event management and RSVP user flows.
---

# Events API

::: info Style = Layout
Styles are referenced with the key "layout".
:::

## Get all events

```
GET /event/all
```

Gets a list with the ids of all available events.

```
GET /event/all?from=:timestamp&to=:timestamp
```

Optionally filter the entries by time. Use "from", "to", or both parameters.

Allowed values:
* `now` (to use the current server time).
* a valid UTC ISO datetime without milliseconds (like `2025-11-03T20:06:27Z`)

<br />

::: info
For recurring or multi-date events, the earliest start and latest end across all dates are used for filtering.
:::

## Get the latest event

```
GET /event/latest
```

Gets the latest event.

## Get one event

```
GET /event/:prokey
```

Reading a sepcific event does not allow for any additional parameters. It only takes the proKey in the request url and simply provides you with all data for this one.

### Potential response

```json
{
  "status": "published",
  "dates": [
    {
      "name": "Date 1",
      "startDate": "2024-11-14",
      "endDate": null,
      "timeZone": "Europe/Berlin",
      "organizer_name": "",
      "organizer_email": "",
      "description": "<p>A short description.</p>",
      "location": "Nowhere"
    },
    {
      "name": "Date 2",
      "startDate": "2024-11-15",
      "endDate": null,
      "timeZone": "Europe/Berlin",
      "organizer_name": "",
      "organizer_email": ""
    }
  ],
  "title_event_series": "Dummy Event Series",
  "simplified_recurrence": true,
  "recurrence": null,
  "recurrence_interval": null,
  "recurrence_count": null,
  "recurrence_byDay": null,
  "recurrence_byMonthDay": null,
  "recurrence_byMonth": null,
  "recurrence_weekstart": null,
  "recurrence_simple_type": null,
  "layout": null,
  "landingpage": null,
  "iCalFileName": null,
  "rsvp": false,
  "rsvp_block": null,
  "cta": true,
  "cta_block": 74,
  "hideButton": false,
  "distribution": true,
  "sequence": "10",
  "date_created": "2024-11-01T12:57:25.983Z",
  "date_updated": "2024-11-02T18:20:56.152Z",
  "event_group": "803a96ac-aaaa-2222-bbbb-6fb191041543",
  "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaaa"
}
```

<br />

## Add an event

```
POST /event
```

Creating a new event requires you to at least provide the following fields in the body:

```json
{
  "event_group": "prokey-of-event-group", // gets returned, when creating a group; also visible in the application
  "dates": [{
    "name": "Title of the date",
    "startDate": "2024-12-24",
    "timeZone": "America/Los_Angeles" // not required, but highly recommended
  }]
}
```

Instead of `event_group`, you can also use `new_event_group_name`, which takes a string. This will create a new group with the provided name instead of linking the event to an existing one.

Going further, you can add more dates to the array (= multi-date event).

::: warning Limitations
Mind limitations, like recurrence not allowing for multiple dates, etc.

We recommend to create a potential setup in the application first, before building it via the API.

Additionally, the API does not allow to set the status of an event - it will always be published on creation.
:::

### Potential request with all fields

```json
{
  "event_group": "prokey-of-event-group",
  "dates": [{
    "name": "Title of the date",
    "description": "<p>An event description</p>", // allowing for <p>, <strong>, <em>, <u>, <h1>, <h2>, <h3>, <h4>, <ul>, <ol>, <li>, <a>
    "startDate": "2024-12-24",
    "startTime": "14:45",
    "endDate": "2024-12-24",
    "endTime": "16:15",
    "timeZone": "America/Los_Angeles",
    "location": "World Wide Web",
    "status": "CONFIRMED", // or "TENTATIVE" or "CANCELLED"
    "availability": "free", // or "busy"
    "organizer_name": "Jack",
    "organizer_email": "jack.frost@email.com",
    "attendee_name": "Santa",
    "attendee_email": "santa.claus@north.pole"
  }],
  "title_event_series": "Title for an event series if >1 date",
  "simplified_recurrence": true, // set false, if you go for the "recurrence" field, which takes an RRULE; and true if you use the other recurrence fields
  "recurrence": "RRULE:...",
  "recurrence_simple_type": "daily", // or: "weekly", "monthly", "yearly",
  "recurrence_interval": 1,
  "recurrence_byDay": "2MO,TU", // example for the second Monday and each Tuesday
  "recurrence_byMonth": "1,2,12", // example for Jan, Feb, and Dec
  "recurrence_byMonthDay": "3,23", // example for the 3rd and 23rd day of the month
  "recurrence_count": 10, // example: repeat 10 times
  "recurrence_weekstart": "MO", // example for Monday
  "layout": "id-of-a-style-template", // take the id from the url in the application or the response when creating one via API
  "landingpage": "id-of-a-landing-page-template", // take the id from the url in the application or the response when creating one via API
  "iCalFileName": "overriding the ics file name",
  "rsvp": true,
  "rsvp_block": "id-of-an-rsvp-block", // take the id from the url in the application or the response when creating one via API
  "cta": true,
  "cta_block": "id-of-a-cta-block", // take the id from the url in the application or the response when creating one via API
  "hideButton": false,
  "distribution": true
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

You can use the ProKey for further processing and several additional measures:

* We automatically set up a landing page you can use. Its url would be `https://caldn.net/:prokey`.
* In most cases, we auto-create an ics file for you. You can download it from `https://event.caldn.net/:prokey/event.ics`. Mind the specialties here:
  * We are not able to generate a file, if you are using dynamic dates like "today+4" (you can still use the link option for "ical" below);
  * We are not able to generate a file for RSVP forms - here, we generate them dynamically for each attendee and send personalized ones within the confirmation emails;
  * In case there are multiple dates to an event, as well as an organizer set, there would be multiple ics files. The first one follows the logic above, while subsequent ones get an ascending number added (example: event-2.ics);
  * In case you set a custom ics file name, you would need to replace "event" with your custom name.
* For non-RSVP events, you can use the following link scheme for direct links (like within emails): `https://caldn.net/:prokey/o/:calendarType`. CalendarType options would be: ical, apple, google, ms365, outlookcom, msteams, yahoo.

<br />

## Update an event

```
PATCH /event/:prokey
```

Updating an event follows the same rules as creating one.

**Specialties when updating:**
- The `event_group` field is not allowed.
- Fields you send are updated.  
- Fields you do not send stay as they are.
- Set a field to `null` and it gets cleared.
- The individual dates within the `dates` field are sensitive to its order. For example, if you want to update the name of date 2 (out of 2), you would also need to provide at least 1 field for date 1.
- If you want to remove a date from the `dates` field, you need to clear all of its values (making them `null`).

<br />

::: warning Limitations
For the status, mind that if an event gets set to draft on the application UI, you cannot publish it via API!

Additionally, updating an event falls under the same limitations as creating a new one.
:::

::: danger Attention
For every 5th update, we also deduct 1 event credit to prevent abuse!
:::

<br />

## Delete an event

```
DELETE /event/:prokey
```

Deleting an event is simple. Only provide the prokey and it gets removed.

**Be careful with this call!**
