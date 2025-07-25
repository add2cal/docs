---
title: Event-Gruppen-API
description: Verwalte Event-Gruppen über die Add to Calendar PRO API. Erstelle Container für Events und Kalender-Abonnements.
---

# Event-Gruppen-API

::: info Style = Layout
Styles werrden auf API-Ebene als "layout" bezeichnet.
:::

## Alle/Neueste Gruppen listen

```
GET /group/all
```

Gibt eine Liste mit den IDs aller verfügbaren Gruppen zurück.

```
GET /group/latest
```

Gibt die neueste Gruppe zurück.

## Eine Gruppe lesen

```
GET /group/:prokey
```

Beim Abrufen einer Event-Gruppe sind keine zusätzlichen Parameter möglich. Es wird lediglich der proKey in der Anfrage-URL benötigt, um alle Daten für ein bestimmtes Element zu erhalten.

Die Antwort enthält mehr Felder, als du vielleicht erwartest, da eine Gruppe mit einem Kalender-Abonnement und dadurch auch mit einem Style und CTA-Template kombiniert werden kann.

### Mögliche Response

```json
{
  "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaaa",
  "name": "Meine Events",
  "status": "published",
  "internal_note": null,
  "subscription": "no",
  "subscription_cal_url": null,
  "layout": null,
  "landingpage": null,
  "cta": false,
  "cta_block": null,
  "date_updated": "2023-11-24T15:05:14.079Z",
  "date_created": "2023-11-24T15:05:13.007Z",
  "events": [
    "31a17cce-bbbb-4ee3-99bb-6144c6a3aaaa",
    "31a17cce-cccc-4ee3-99bb-6144c6a3bbbb"
  ]
}
```

<br />

## Gruppe erstellen

```
POST /group
```

Um eine neue Gruppe zu erstellen, musst du mindestens das Feld "name" im Body angeben.

```json
{
  "name": "Name der Event-Gruppe" // gewöhnlich nur für die interne Übersicht; im Fall der Kalender-Abonnement-Funktion aber auch öffentlich sichtbar!
}
```

### Möglicher Request mit allen Feldern

Beachte, dass du bei der Erstellung einer Gruppe keine Events hinzufügen kannst. **Du kannst Events nur verknüpfen, wenn du ein neues erstellst!**

```json
{
  "name": "Name der Event-Gruppe",
  "internal_note": null, // ein optionaler einfacher String
  "subscription": "no", // kann "no" oder "external" lauten - letzteres erfordert eine subscription_cal_url
  "subscription_cal_url": null, // url zu einem externen Kalender. Muss mit "http" beginnen! Endet gewöhnlich mit ".ics"
  "layout": "id-eines-style-templates", // diese ID findest du in der URL des entsprechenden Elements in der Anwendung oder in der Response bei Erstellung über die API
  "landingpage": "id-eines-landingpage-templates", // diese ID findest du in der URL des entsprechenden Elements in der Anwendung oder in der Response bei Erstellung über die API
  "cta": true,
  "cta_block": "id-eines-cta-blocks" // diese ID findest du in der URL des entsprechenden Elements in der Anwendung oder in der Response bei Erstellung über die API
}
```

### Mögliche Response

```json
{
  "status": "success",
  "message": "created",
  "prokey": "99ec3e7f-ef04-bbbb-a3d7-e30736faaaaa"
}
```

Du kannst den ProKey für weitere Schritte nutzen (inkl. der Erstellung von neuen Events innerhalb der Gruppe).

<br />

## Gruppe aktualisieren

```
PATCH /group/:prokey
```

Die Aktualisierung einer Gruppe folgt den gleichen Regeln wie die Erstellung einer neuen.

**Besonderheiten beim Aktualisieren:**
- Felder, die du sendest, werden aktualisiert.  
- Felder, die du nicht sendest, bleiben unverändert.
- Setze ein Feld auf `null`, um es zu löschen.

<br />

::: warning Einschränkungen
Die "subscription"-Einstellung lässt sich nur ändern, solange noch keine Events mit der Gruppe verknüpft sind!

Beachte, dass du den Status über die Anwendungs-Oberfläche auf "Entwurf", über die API aber nicht auf "Veröffentlicht" setzen kannst!

**Für jedes 5te Update ziehen wir zudem 1 Event-Credit ab, um Missbrauch vorzubeugen!**
:::

<br />

## Gruppe löschen

```
DELETE /group/:prokey
```

Das Löschen einer Gruppe ist einfach. Gib hierzu lediglich den proKey an und die Gruppe sowie alle verbundenen Events sind verschwunden.

**Sei bei diesem Aufruf sehr vorsichtig!**
