# Verschiedenes

## ics-Datei-Inhalt abrufen

```
GET /ics/:prokey
```

Indem du den proKey des jeweiligen Events angibst, kannst du den "Body" der zugehörigen ics-Datei abrufen.

Nutze dies, um die ics-Datei in deinem System zu erstellen - ohne Abhängigkeit zur Generierung auf unserer Seite (was dazu führt, dass die ics-Datei auf einem öffentlich erreichbaren Storage abgelegt wird).

### Mögliche Response

```json
```

Ergänez den Query-Parameter `responseType` mit Wert `object`, um den Inhalt als Objekt zu erhalten (beinhaltet auch den Namen des jeweiligen Events, bzw. der Event-Serie, sofern diese über 1 ics-File ausgeliefert werden kann).

```
GET /ics/:prokey?responseType=object
```

### Mögliche Response

```json
```

## Custom Domains abrufen

```
GET /custom-domains
```

Erhalte eine Liste aller eingerichteten verfügbaren Custom Domains sowie die globale Standard-Einstellung.

### Mögliche Response

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

## RSVP-Rückmeldungen listen

```
GET /rsvp-answers/:prokey
```

Indem du den proKey des jeweiligen Events angibst, kannst du eine Liste aller verbundenen RSVP-Rückmeldungen erhalten.

### Mögliche Response

```json
[
  {
    "id": "abcdef12-3456-4789-8bcd-ef0123456788",
    "status": "undecided",
    "email": "max.muster@email.com",
    "amount": 1,
    "payload": {
      "required_check": true,
      "first_name": "Max",
      "last_name": "Muster"
    },
    "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaaa",
    "date_created": "2023-12-07T08:58:47.510Z",
    "date_updated": "2023-12-09T16:46:24.381Z"
  },
  {
    "id": "abcdef12-3456-4789-8bcd-ef0123456789",
    "status": "confirmed",
    "email": "eva.muster@email.com",
    "amount": 2,
    "payload": {
      "required_check": true,
      "first_name": "Eva",
      "last_name": "Muster"
    },
    "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaab",
    "date_created": "2023-11-21T15:54:09.823Z",
    "date_updated": "2023-12-03T19:30:00.314Z"
  }
]
```

### Neueste Antwort für ProKey aufrufen

Du kannst ausschließlich die neueste Antwort mit dem Stichwort "latest" abrufen:

```
GET /rsvp-answers/:prokey/latest
```

### Neueste globale Antwort aufrufen

Wenn du den ProKey weg lässt, gilt die Abfrage global über alle ProKeys.

```
GET /rsvp-answers/latest
```

