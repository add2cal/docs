# Webhook-API

## Alle/Neueste Webhooks listen

```
GET /webhook/all
```

Gibt eine Liste mit den IDs aller verfügbaren Webhooks zurück.

```
GET /webhook/latest
```

Gibt den neuesten Webhook zurück.

## Einen Webhook lesen

```
GET /webhook/:id
```

Beim Abrufen eines bestimmten Webhooks sind keine zusätzlichen Parameter möglich. Es wird lediglich die ID in der Anfrage-URL benötigt, um alle Daten für ein bestimmtes Element zu erhalten.

### Mögliche Response

```json
{
  "name": "API-generierter Webhook",
  "active": true,
  "method": "POST",
  "payload_url": "https://webhook-endpoint.your-domain.de",
  "trigger": "create",
  "trigger_element": "rsvp_answer",
  "prokey_filter": "abcdef12-3456-4789-8bcd-ef0123456789",
  "header": [
    {
      "key": "secret",
      "value": "f7n4wzvn$7t84owz%vc!4wort73"
    }
  ],
  "body": [],
  "date_created": "2025-04-08T12:50:05.756Z",
  "date_updated": null,
  "last_execution": "2025-05-01T02:33:08.356Z"
}
```

<br />

## Webhook erstellen

```
POST /webhook
```

Für die Erstellung eines neuen Webhooks müssen die meisten Felder angegeben werden. **Nur `prokey_filter`, `body` und `header` sind optional!**

### Möglicher Request mit allen Feldern

```json
{
  "name": "API-generierter Webhook", // nur intern
  "active": true, // wenn false, wird er nicht ausgelöst
  "method": "POST", // Optionen: GET, POST, PUT, PATCH, DELETE
  "payload_url": "https://webhook-endpoint.your-domain.de", // der Endpunkt, an den wir die Daten senden
  "trigger": "create", // Optionen: create, update, delete
  "trigger_element": "rsvp_answer", // Optionen: rsvp_answer, event, event_group, style, rsvp_template, cta_template, landingpage_template
  "prokey_filter": "abcdef12-3456-4789-8bcd-ef0123456789", // Bei RSVP-Antworten kann hierüber auf ein bestimmtes Event gefiltert werden
  "header": [ // zusätzliche Felder, die dem Header hinzugefügt werden (normalerweise ein Authentifizierungstoken)
    {
      "key": "secret",
      "value": "f7n4wzvn$7t84owz%vc!4wort73"
    }
  ],
  "body": [ // zusätzliche Body-Felder zum Senden
    {
      "key": "additional-body-field",
      "value": "some value"
    }
  ]
}
```

::: info Body anpassen
Standardmäßig senden wir alle Daten des Trigger-Elements als JSON-Objekt mit dem Schlüssel "element_data".

Du kannst auch deine eigenen Felder definieren und einzelne Felder als Wert verwenden, indem du sie dem Body hinzufügst. Dort kannst du dynamische Werte hinzufügen, indem du sie in doppelten geschweiften Klammern einfügst.
Überprüfe die Web-App für weitere Details, welche Felder für welches `trigger_element` verfügbar sind.
:::

### Mögliche Response

```json
{
  "status": "success",
  "message": "created",
  "id": "67"
}
```

::: tip Teste es
Du kannst die Web-App verwenden, um einen Testaufruf mit einigen generischen Testdaten zu senden.
Du kannst zusätzlich Dienste wie [webhook.site](https://webhook.site/) nutzen, um den Flow zu testen, bevor du ihn an dein eigenes System anbindest.
:::

<br />

## Webhook aktualisieren

```
PATCH /webhook/:id
```

Die Aktualisierung eines Webhooks folgt denselben Regeln wie die Erstellung eines neuen.

<br />

## Webhook löschen

```
DELETE /webhook/:id
```

Das Löschen eines Webhooks ist einfach. Gib hierzu lediglich die ID an, und er wird entfernt.

**Sei bei diesem Aufruf sehr vorsichtig, da dies die entsprechende Funktionalität sofort entfernt!**
