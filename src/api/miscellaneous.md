# Miscellaneous

## Retrieve ics file body

```
GET /ics/:prokey
```

Providing the proKey of the respective event, you can get the body for the ics file.

Use this to create the ics file on your side without relying on any auto-generation on our side (which would result in an ics file, placed on a public storage).

### Potential response

```json
[
  "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-
  (...)
  \r\nEND:VEVENT\r\nEND:VCALENDAR"
]
```

Add the query param `responseType` with value `object` to retrieve the content as object (will also include the ics file addresses as well as the name; or the event series title, if those events can all be included in one single ics file).

```
GET /ics/:prokey?responseType=object
```

### Potential response

```json
[
  {
    "name": "Event Title",
    "icsFile": "https://event.caldn.net/abcdef12-3456-4789-8bcd-ef0123456788/event.ics",
    "icsBody": "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-
    (...)
    \r\nEND:VEVENT\r\nEND:VCALENDAR"
  }
]
```

## Get custom domains

```
GET /custom-domains
```

Retrieves a list of all set up available custom domains as well as the global default one.

### Potential response

```json
{
  "default_custom_domain": 34,
  "available_custom_domains": [
    {
      "id": 34,
      "status": "published",
      "host": "rsvp.your-domain.com",
      "fallback_url": "https://www.your-domain.com",
      "dns_settings": [
        {
          "type": "TXT",
          "host": "_cf-custom-hostname.rsvp.your-domain.com",
          "value": "eee4b77a-a131-446a-9924-882d5902e12c"
        },
        {
          "type": "CNAME",
          "host": "_acme-challenge.rsvp.your-domain.com",
          "value": "rsvp.your-domain.com.f984fc006cffa4a5.dcv.cloudflare.com"
        },
        {
          "type": "CNAME",
          "host": "rsvp.your-domain.com",
          "value": "custom.caldn.net"
        }
      ]
    },
    {
      "id": 65,
      "status": "draft",
      "host": "events.your-domain.com",
      "fallback_url": null,
      "dns_settings": [
        {
          "type": "TXT",
          "host": "_cf-custom-hostname.events.your-domain.com",
          "value": "dad4b77a-a131-446a-9924-882d5902e34d"
        },
        {
          "type": "CNAME",
          "host": "_acme-challenge.events.your-domain.com",
          "value": "events.your-domain.com.f984fc006cffa4a5.dcv.cloudflare.com"
        },
        {
          "type": "CNAME",
          "host": "events.your-domain.com",
          "value": "custom.caldn.net"
        }
      ]
    }
  ]
}
```

## List RSVP replies

```
GET /rsvp-answers/:prokey
```

Providing the proKey of the respective event, you can get a list of all connected RSVP answers/replies.

### Potential response

```json
[
  {
    "id": "abcdef12-3456-4789-8bcd-ef0123456788",
    "status": "undecided",
    "email": "john.doe@email.com",
    "amount": 1,
    "payload": {
      "required_check": true,
      "first_name": "John",
      "last_name": "Doe"
    },
    "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaaa",
    "date_created": "2023-12-07T08:58:47.510Z",
    "date_updated": "2023-12-09T16:46:24.381Z"
  },
  {
    "id": "abcdef12-3456-4789-8bcd-ef0123456789",
    "status": "confirmed",
    "email": "jane.doe@email.com",
    "amount": 2,
    "payload": {
      "required_check": true,
      "first_name": "Jane",
      "last_name": "Doe"
    },
    "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaab",
    "date_created": "2023-11-21T15:54:09.823Z",
    "date_updated": "2023-12-03T19:30:00.314Z"
  }
]
```

### Get latest response

You can also only pull the latest one via:

```
GET /rsvp-answers/:prokey/latest
```

### Get latest response overall

Or the latest over all prokeys:

```
GET /rsvp-answers/latest
```
