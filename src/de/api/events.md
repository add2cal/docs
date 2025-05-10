
# Event-API

::: info Style = Layout
Styles werrden auf API-Ebene als "layout" bezeichnet.
:::

## Alle/Neueste Events listen

```
GET /event/all
```

Gibt eine Liste mit den IDs aller verfügbaren Events zurück.

```
GET /event/latest
```

Gibt das neueste Event zurück.

## Ein Event lesen

```
GET /event/:prokey
```

Beim Abrufen eines Events sind keine zusätzlichen Parameter möglich. Es wird lediglich der proKey in der Anfrage-URL benötigt, um alle Daten für ein bestimmtes Element zu erhalten.

### Mögliche Response

```json
{
  "status": "published",
  "dates": [
    {
      "name": "Termin 1",
      "startDate": "2024-11-14",
      "endDate": null,
      "timeZone": "Europe/Berlin",
      "organizer_name": "",
      "organizer_email": "",
      "description": "<p>Eine kurze Beschreibung.</p>",
      "location": "Nirgends"
    },
    {
      "name": "Termin 2",
      "startDate": "2024-11-15",
      "endDate": null,
      "timeZone": "Europe/Berlin",
      "organizer_name": "",
      "organizer_email": ""
    }
  ],
  "title_event_series": "Dummy Terminreihe",
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
  "landingpage": null,
  "iCalFileName": null,
  "rsvp": false,
  "rsvp_block": null,
  "cta": true,
  "cta_block": 74,
  "hideButton": false,
  "distribution": true,
  "sequence": "10",
  "date_created": "2024-11-01T12:57:25.983Z",
  "date_updated": "2024-11-02T18:20:56.152Z",
  "event_group": {
    "prokey": "803a96ac-aaaa-2222-bbbb-6fb191041543"
  }
}
```

<br />

## Event erstellen

```
POST /event
```

Um ein neues Event zu erstellen, musst du mindestens die folgenden Felder im Body angeben:

```json
{
  "event_group": "prokey-der-event-gruppe", // wird bei Erstellung einer Gruppe als "id" zurückgegeben; auch über die UI der Anwendung einsehbar
  "dates": [{
    "name": "Titel des Termins",
    "startDate": "2024-12-24",
    "timeZone": "America/Los_Angeles" // nicht verpflichtend, aber strengstens empfohlen
  }],
}
```

Anstelle der `event_group` kannst du auch `new_event_group_name` (einfacher String) nutzen. Dies erstellt eine neue Gruppe mit dem gegebenen Namen anstelle der Verknüpfung des Events mit einer bestehenden.

Du kannst auch weitere Termine zu dem "dates"-Array hinzufügen (= Terminreihe).

::: warning Einschränkungen
Beachte die Einschränkungen, die auch in der Anwendung gelten - wie die Tatsache, dass Wiederholungs-Regeln nicht mit mehreren Terminen kombinierbar sind, etc.

Wir empfehlen ein potentielles Schema zunächst in der Anwendung zu erstellen, bevor du es über die API generierst.

Weiterhin ist es nicht erlaubt, den Status eines Events über die API zu ändern.
:::

### Möglicher Request mit allen Feldern

```json
{
  "event_group": "prokey-der-event-gruppe",
  "dates": [{
    "name": "Titel des Termins",
    "description": "<p>Eine Event-Beschreibung</p>", // erlaubt <p>, <strong>, <em>, <u>, <h1>, <h2>, <h3>, <h4>, <ul>, <ol>, <li>, <a>
    "startDate": "2024-12-24",
    "startTime": "14:45",
    "endDate": "2024-12-24",
    "endTime": "16:15",
    "timeZone": "America/Los_Angeles",
    "location": "World Wide Web",
    "status": "CONFIRMED", // oder "TENTATIVE" oder "CANCELLED"
    "availability": "free", // oder "busy"
    "organizer_name": "Jack",
    "organizer_email": "jack.frost@email.com",
    "attendee_name": "Santa",
    "attendee_email": "santa.claus@north.pole"
  }],
  "title_event_series": "Titel für eine Terminreihe bei >1 Terminen",
  "simplified_recurrence": true, // false setzen, wenn das "recurrence"-Feld genutzt werden soll. Dieses muss eine RRULE beinhalten; true, wenn stattdessen die übrigen recurrence-Felder genutzt werden sollen
  "recurrence": "RRULE:...",
  "recurrence_simple_type": "daily", // oder: "weekly", "monthly", "yearly",
  "recurrence_interval": 1,
  "recurrence_byDay": "2MO,TU", // Beispiel für den zweiten Montag und jeden Dienstag
  "recurrence_byMonth": "1,2,12", // Beispiel für Jan, Feb und Dec
  "recurrence_byMonthDay": "3,23", // Beispiel für den 3ten und 23ten Tag des Monats
  "recurrence_count": 10, // Beispiel: 10x wiederholen
  "recurrence_weekstart": "MO", // Beispiel für Montag
  "layout": "id-eines-style-templates", // diese ID findest du in der URL des entsprechenden Elements in der Anwendung
  "landingpage": "id-eines-landingpage-templates", // diese ID findest du in der URL des entsprechenden Elements in der Anwendung
  "iCalFileName": "überschreibt den ics-Dateinamen",
  "rsvp": true,
  "rsvp_block": "id-eines-rsvp-blocks", // diese ID findest du in der URL des entsprechenden Elements in der Anwendung oder in der Response bei Erstellung eines RSVP-Blocks über die API
  "cta": true,
  "cta_block": "id-eines-cta-blocks", // diese ID findest du in der URL des entsprechenden Elements in der Anwendung
  "hideButton": false,
  "distribution": true
}
```

### Mögliche Response

```json
{
  "success": "Created",
  "id": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaaa"
}
```

**Die id aus einer erfolgreichen Rückmeldung ist der proKey des neuen Events.**

Du kannst diese für weitere Schritte sowie diverse Maßnahmen nutzen:

* Wir generieren automatisch eine Landingpage, die du teilen kannst. Die URL baut sich wie folgt auf: `https://caldn.net/:prokey`.
* In den meisten Fällen erstellen wir automatisch eine ics-Datei. Du kannst diese via `https://event.caldn.net/:prokey/event.ics` herunterladen. Beachten hierbei folgende Besonderheiten:
  * Wir sind nicht in der Lage, eine Datei zu erstellen, wenn du dynamische Daten wie "today+4" verwendest (du kannst aber die Link-Option für "ical" unten nutzen);
  * Wir sind nicht in der Lage, eine Datei für RSVP-Formulare zu generieren - hier generieren wir die Datei dynamisch für jeden Teilnehmer und versenden diese personalisiert in den Bestätigungs-E-Mails;
  * Wenn mehrere Termine für eine Veranstaltung sowie ein Organisator definiert sind, werden mehrere ics-Dateien erzeugt. Die erste Datei folgt der obigen Logik, während die nachfolgenden Dateien eine aufsteigende Nummer erhalten (Beispiel: event-2.ics);
  * Falls du einen benutzerdefinierten ics-Dateinamen festgelegt hast, musst du "event" durch eben diesen Namen ersetzen.
* Für nicht-RSVP-Ereignisse kannst du das folgende Link-Schema für Hyperlinks (bspw. für E-Mails) verwenden: `https://caldn.net/:prokey/o/:calendarType`. Folgende Kalendertypen sind verfügbar: ical, apple, google, ms365, outlookcom, msteams, yahoo.

<br />

## Event aktualisieren

```
PATCH /event/:prokey
```

Die Aktualisierung eines Events folgt den gleichen Regeln wie die Erstellung eines neuen.

Der einzig wichtige Unterschied: Das `event_group`-Feld ist hier nicht erlaubt.

::: warning Einschränkungen
Beachte, dass du den Status über die Anwendungs-Oberfläche auf "Entwurf", über die API aber nicht auf "Veröffentlicht" setzen kannst!

Ferner gelten die gleichen Einschränkungen wie bei der Erstellung eines neuen Events.
:::

::: danger Achtung
Für jedes 5te Update ziehen wir zudem 1 Event-Credit ab, um Missbrauch vorzubeugen!
:::

<br />

## Event löschen

```
DELETE /event/:prokey
```

Das Löschen eines Events ist einfach. Gib hierzu lediglich den proKey an und das Event ist verschwunden.

**Sei bei diesem Aufruf sehr vorsichtig!**
