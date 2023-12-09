
# Events API

## Get an event

```
GET /event/:id
```

Reading an event does not allow for any additional parameters.
It simply provides you with all data for a specific event.

### Potential response

```json
[
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
        "iCalFileName": null,
        "rsvp": false,
        "rsvp_block": null,
        "cta": true,
        "cta_block": 74,
        "hide_button": false,
        "sequence": "10",
        "date_created": "2024-11-01T12:57:25.983Z",
        "date_updated": "2024-11-02T18:20:56.152Z",
        "event_group": {
            "prokey": "803a96ac-aaaa-2222-bbbb-6fb191041543"
        }
    }
]
```

## Add an event

```
POST /event
```

## Update an event

```
PATCH /event/:id
```

## Delete an event

```
DELETE /event/:id
```
