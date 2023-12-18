# Miscellaneous

## List RSVP replies

```
GET /rsvp-answers/:id
```

Providing the proKey of the respective event, you can get a list of all connected RSVP answers/replies.

### Potential response

```json
[
    {
        "id": "id-of-the-answer-1",
        "status": "undecided",
        "email": "john.doe@email.com",
        "amount": 1,
        "payload": {
            "required_check": true,
            "first_name": "John",
            "last_name": "Doe"
        },
        "date_created": "2023-12-07T08:58:47.510Z",
        "date_updated": "2023-12-09T16:46:24.381Z"
    },
    {
        "id": "id-of-the-answer-2",
        "status": "confirmed",
        "email": "jane.doe@email.com",
        "amount": 2,
        "payload": {
            "required_check": true,
            "first_name": "Jane",
            "last_name": "Doe"
        },
        "date_created": "2023-11-21T15:54:09.823Z",
        "date_updated": "2023-12-03T19:30:00.314Z"
    }
]
```
