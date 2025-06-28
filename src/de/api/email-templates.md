
# E-Mail-Template API

Der E-Mail-Template-Endpunkt ist vergleichsweise limitiert und ermöglicht nur das Abrufen der verfügbaren Template, um sie bspw. einfacher dynamisch mit anderen Aufrufen zu verwenden.

## Alle E-Mail-Templates abrufen

```
GET /email-template/all
```

Ruft eine Liste mit den IDs, Namen und Typen aller verfügbaren E-Mail-Template ab.

## Alle E-Mail-Templates eines bestimmten Typs abrufen

```
GET /email-template/:type
```

Ruft eine Liste mit den IDs und Namen aller verfügbaren E-Mail-Template eines bestimmten Typs ab.

**Verfügbare Typen:**
- email_rsvp_doi
- email_rsvp_thank_you
- email_rsvp_signup_confirmation
- email_rsvp_change_confirmation
- email_rsvp_event_update
- email_rsvp_magic_link
- email_rsvp_second_signup

## Das neueste E-Mail-Template abrufen

```
GET /email-template/latest
```

Ruft das neueste E-Mail-Template ab.

