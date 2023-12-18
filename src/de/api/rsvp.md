
# RSVP-Template-API

::: info Achte auf die Details!
Diese API behandelt lediglich RSVP-Template-Blocks.

Ein funktionierendes RSVP-Formular besteht aus 2 Grund-Elementen. Einen solchen RSVP-Template-Block, der die Informationen zur Strukture des Formulars beinhaltet, sowie ein [Event](/de/api/events.html), das den eigentlichen Termin definiert.
:::

## RSVP-Template lesen

```
GET /rsvp-block/:id
```

Beim Abrufen eines RSVP-Blocks sind keine zusätzlichen Parameter möglich. Es wird lediglich die ID in der Anfrage-URL benötigt, um alle Daten für ein bestimmtes Element zu erhalten.

### Mögliche Response

```json
{
    "name": "Demo RSVP Block",
    "max": 50,
    "maxpp": 2,
    "expires": "2024-12-31T14:29:01.000Z",
    "maybe_option": true,
    "initial_confirmation": false,
    "doi": false,
    "headline": "Join the Add to Calendar User Community!",
    "text": "<p>Entdecke die Event-Tools der nächsten Generation - Add to Calendar Buttons, RSVP und mehr. <strong>Für dich gemacht! </strong>🫵</p>",
    "fields": [
        {
            "type": "hidden",
            "name": "hidden_field",
            "label": "",
            "required": true,
            "default": "ein paar versteckte Informationen"
        },
        {
            "type": "checkbox",
            "name": "required_check",
            "label": "Ein verpflichtender Check",
            "required": true,
            "default": false
        }
    ],
    "date_updated": "2023-12-09T14:54:27.586Z",
    "date_created": "2023-11-19T08:43:16.180Z",
}
```

<br />

## RSVP-Template erstellen

```
POST /rsvp-block
```

Um einen neuen RSVP-Template-Block zu erstellen, musst du mindestens das Feld "name" im Body angeben.

```json
{
    "name": "Name des Elements", // nur für interne Nutzung relevant
}
```

### Möglicher Request mit allen Feldern

```json
{
    "name": "Demo RSVP Block",
    "max": 50, // maximale Anzahl von Slots/Plätzen; Standardwert: unbegrenzt
    "maxpp": 2, // maximale Anzahl an Slots pro Anmeldung; Standardwert ist 1
    "expires": "2024-12-31T14:29:01.000Z", // ein optionales Ablaufdatum als ISO 8601 UTC datetime
    "maybe_option": true,
    "initial_confirmation": false, // falls true wird die initiale Anmeldung stets als "confirmed" gewertet
    "doi": false, // falls true muss jeder Nutzer zunächst seine E-Mail bestätigen
    "headline": "Join the Add to Calendar User Community!",
    "text": "<p>Entdecke die Event-Tools der nächsten Generation - Add to Calendar Buttons, RSVP und mehr. <strong>Für dich gemacht! </strong>🫵</p>", // erlaubt <p>, <strong>, <em>, <u>, <h1>, <h2>, <h3>, <h4>, <ul>, <ol>, <li>, <a>
    "fields": [ // Details hierzu findest du unter dem Code-Block
        {
            "type": "text",
            "name": "additional_info",
            "label": "Zusätzliche Nachricht",
            "required": false,
            "placeholder": "Hier einfügen...",
            "default": "Ruf mich doch mal an"
        },
        {
            "type": "checkbox",
            "name": "required_check",
            "label": "Ein verpflichtender Check",
            "required": true,
            "default": false
        }
    ],
}
```

For the fields array, you can add the following types:
Im Rahmen des "fields"-Arrays können folgende Typen (`type`) genutzt werden:
* **text**: Stellt ein normales Eingabefeld vom Typ Text dar.
* **number**: Stellt ein Eingabefeld vom Typ Zahl dar.
* **checkbox**: Rendert eine Checkbox.
* **radio**: Render einen Radio-Button. Aufeinanderfolgende Radio-Buttons werden zu einer Gruppe zusammengefasst.
* **label**: Stell reinen Text dar. Wird das Feld vor einem Radio-Button platziert, wird es als Label der Gruppe verwendet.
* **hidden**: Wird auf der UI-Ebene nicht angezeigt. Kann verwendet werden, um bei jeder Anmeldung zusätzliche Daten zu übermitteln.

Neben dem type, können folgende Attribute zugefügt werden:
* **name**: Der "Identifier". Wird auch für die Ergebnis-Tabelle genutzt.
* **required**: true/false.
* **label**: Das Label des Felds. Ein einfacher String.
* **placeholder**: Ein optionaler Platzhalter (nur bei "text", "number" und "radio"). Bei Radio-Buttons ist dies der "Value" des Felds.
* **default**: Der Standard-Wert des Felds. String bei "text", "number" und "hidden". True/false bei "checkbox" und "radio".

### Mögliche Response

```json
{
    "success": "RSVP block created",
    "id": "67"
}
```

Die id aus einer erfolgreichen Rückmeldung kannst du für weitere Schritte verwenden - bspw. im Zuge der Erstellung eines neuen Events.

<br />

## RSVP-Template aktualisieren

```
PATCH /rsvp-block/:id
```

Die Aktualisierung eines RSVP-Template-Blocks folgt den gleichen Regeln wie die Erstellung eines neuen.

::: warning Beachte die Datenstruktur
Wenn du das Template für ein aktives RSVP-Formular änderst, ändert sich die Datenstruktur.

Dies ist kein schwerwiegendes Problem, da wir uns technisch darum kümmern. Es würde also nicht direkt etwas "kaputt" gehen.

Allerdings könnten die gesammelten Daten schwieriger zu vergleichen sein, da einige Antworten anders aussehen als andere!
:::

<br />

## RSVP-Template löschen

```
DELETE /rsvp-block/:id
```

Das Löschen eines RSVP-Blocks ist einfach. Gib hierzu lediglich die id an und das Element ist verschwunden.

**Sei bei diesem Aufruf sehr vorsichtig!**

::: warning Dies löscht keine Events oder Gruppen!
Diese bleiben aktiv, verwandeln sich aber in reguläre Events, da die RSVP-Verbindungen verloren geht.

Das bedeutet, dass ein eingebundenes RSVP-Formular zu einem Add to Calendar Button wird.
:::
