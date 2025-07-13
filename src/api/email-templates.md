---
title: Email Template API
description: Learn how to use Add to Calendar PRO's Email Template API. Customize the whole RSVP user journey for higher success rates.
---

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
- rsvp_doi
- rsvp_thank_you
- rsvp_signup_confirmation
- rsvp_change_confirmation
- rsvp_event_update
- rsvp_magic_link
- rsvp_second_signup

## Get the latest email template

```
GET /email-template/latest
```

Gets the latest email template.
