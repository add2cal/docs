
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
- rsvp_doi
- rsvp_thank_you
- rsvp_signup_confirmation
- rsvp_change_confirmation
- rsvp_event_update
- rsvp_magic_link
- rsvp_second_signup

## Das neueste E-Mail-Template abrufen

```
GET /email-template/latest
```

Ruft das neueste E-Mail-Template ab.

