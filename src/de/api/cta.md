---
title: Call-to-Action-Template-API
description: Verwalte CTA-Templates über die Add to Calendar PRO API. Erstelle benutzerdefinierte Formulare und Call-to-Action-Blöcke.
---

# Call-to-Action-Template-API

## Alle/Neueste CTA-Templates listen

```
GET /cta-block/all
```

Gibt eine Liste mit den IDs aller verfügbaren CTA-Template-Blöcke zurück.

```
GET /cta-block/latest
```

Gibt den neuesten CTA-Template-Block zurück.

## Ein CTA-Template lesen

```
GET /cta-block/:id
```

Beim Abrufen eines bestimmten CTA-Blocks sind keine zusätzlichen Parameter möglich. Es wird lediglich die ID in der Anfrage-URL benötigt, um alle Daten für ein bestimmtes Element zu erhalten.

### Mögliche Response

```json
{
  "id": 67,
  "name": "Newsletter Beispiel CTA",
  "type": "form",
  "headline": "🥰 Melde dich noch schnell für unseren Newsletter an",
  "text": "",
  "fields": [
    {
      "type": "text",
      "name": "email",
      "label": "",
      "required": false,
      "placeholder": "E-Mail"
    },
    {
      "type": "text",
      "name": "name",
      "label": "",
      "required": false,
      "placeholder": "Vollständiger Name"
    },
    {
      "type": "checkbox",
      "name": "terms",
      "label": "Ich möchte informative sowie werbliche E-Mails erhalten.",
      "required": true,
      "default": false
    }
  ],
  "url": "https://newsletter-endpoint.your-domain.de",
  "button_label": "Anmelden",
  "date_created": "2024-06-27T15:36:30.988Z",
  "date_updated": "2025-05-06T22:18:40.306Z"
}
```

<br />

## CTA-Template erstellen

```
POST /cta-block
```

Für die Erstellung eines neuen CTA-Template-Blocks müssen mindestens die Felder "name" und "type" im Body angegeben werden.

```json
{
  "name": "Name des Elements", // nur intern
  "type": "text" // Optionen: none, text, link, share, form
}
```

### Möglicher Request mit allen Feldern

```json
{
  "name": "Name des Elements",
  "type": "text",
  "headline": "Überschrift im Modal",
  "text": "Zusätzlicher Einleitungstext",
  "fields": [ // Details hierzu findest du unter dem Code-Block
    {
      "type": "text",
      "name": "additional_info",
      "label": "Zusätzliche Anmerkung",
      "required": false,
      "placeholder": "Hier tippen...",
      "default": "Ruf mich doch mal an"
    },
    {
      "type": "checkbox",
      "name": "required_check",
      "label": "Ein erforderlicher Haken",
      "required": true,
      "default": false
    }
  ],
  "url": "https://url-to.your-domain.de", // je nach Typ ist dies der Link oder Endpunkt für die Formulardaten
  "button_label": "Klick mich"
}
```

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
  "status": "success",
  "message": "created",
  "id": "67"
}
```

Die ID aus einer erfolgreichen Rückmeldung kannst du für weitere Schritte verwenden - bspw. im Zuge der Erstellung eines neuen Events.

<br />

## CTA-Template aktualisieren

```
PATCH /cta-block/:id
```

Die Aktualisierung eines CTA-Template-Blocks folgt denselben Regeln wie die Erstellung eines neuen.

**Besonderheiten bei der Aktualisierung:**
- Felder, die du sendest, werden aktualisiert.
- Felder, die du nicht sendest, bleiben unverändert.
- Setze ein Feld auf `null`, um es zu löschen.
- Der Wert/Array des `fields`-Felds wird als 1 Wert betrachtet. Was immer du auch angibst (wenn du es angibst), überschreibt alle (!) Unterelemente.

<br />

## CTA-Template löschen

```
DELETE /cta-block/:id
```

Das Löschen eines CTA-Template-Blocks ist einfach. Gib hierzu lediglich die ID an, und er wird entfernt.

**Sei bei diesem Aufruf sehr vorsichtig!**

::: warning Dies löscht keine Events oder Gruppen!
Sie bleiben aktiv, verlieren aber ihre CTA-Funktionalität.
:::

## Fehler

Siehe [API-Authentifizierung](/de/api/auth) für die Key-Einrichtung. Ein fehlender oder ungültiger Key liefert `401`. Eine Operation für ein bestimmtes CTA-Template kann `404` liefern, wenn das Template nicht verfügbar ist.
