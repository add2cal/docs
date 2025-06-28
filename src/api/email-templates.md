
# Email Template API

The email template endpoint is rather limited and only allows to retrieve the available templates, so you can dynamically use them with other calls.

## Get all email templates

```
GET /email-template/all
```

Gets a list with the ids, names, and types of all available email templates.

## Get all email templates of a specific type

```
GET /email-template/:type
```

Gets a list with the ids and names of all available email templates of a specific type.

**Available types:**
- email_rsvp_doi
- email_rsvp_thank_you
- email_rsvp_signup_confirmation
- email_rsvp_change_confirmation
- email_rsvp_event_update
- email_rsvp_magic_link
- email_rsvp_second_signup

## Get the latest email template

```
GET /email-template/latest
```

Gets the latest email template.
