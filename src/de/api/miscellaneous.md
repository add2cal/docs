# Verschiedenes

## RSVP-Rückmeldungen listen

```
GET /rsvp-answers/:id
```

Indem du den proKey des jeweiligen Events angibst, kannst du eine Liste aller verbundenen RSVP-Rückmeldungen erhalten.

### Mögliche Response

```json
[
    {
        "id": "id-der-rueckmeldung-1",
        "status": "undecided",
        "email": "max.muster@email.com",
        "amount": 1,
        "payload": {
            "required_check": true,
            "first_name": "Max",
            "last_name": "Muster"
        },
        "date_created": "2023-12-07T08:58:47.510Z",
        "date_updated": "2023-12-09T16:46:24.381Z"
    },
    {
        "id": "id-der-rueckmeldung-2",
        "status": "confirmed",
        "email": "eva.muster@email.com",
        "amount": 2,
        "payload": {
            "required_check": true,
            "first_name": "Eva",
            "last_name": "Muster"
        },
        "date_created": "2023-11-21T15:54:09.823Z",
        "date_updated": "2023-12-03T19:30:00.314Z"
    }
]
```
