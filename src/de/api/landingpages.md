---
title: Landingpage-Template-API
description: Verwalte Landingpage-Templates über die Add to Calendar PRO API. Erstelle ansprechende Event-Websites und Landing-Pages.
---

# Landingpage-Template-API

::: info Achte auf die Details!
Diese Seite behandelt lediglich Landingpage-Templates.

Eine funktionale Landingpage besteht aus 2 Grundelementen. Einem solchen Template, das die Daten über Struktur und Stil der Seite enthält, sowie einem [Event](/de/api/events) oder einer [Abonnement-Gruppe](/de/api/groups), welche die zugrundeliegenden Termine definiert.
:::

## Alle/Neueste Landingpage-Templates listen

```
GET /landingpage/all
```

Gibt eine Liste mit den IDs aller verfügbaren Landingpage-Templates zurück.

```
GET /landingpage/latest
```

Gibt das neueste Landingpage-Template zurück.

## Ein Landingpage-Template lesen

```
GET /landingpage/:id
```

Beim Abrufen eines bestimmten Landingpage-Templates sind keine zusätzlichen Parameter möglich. Es wird lediglich die ID in der Anfrage-URL benötigt, um alle Daten für ein bestimmtes Element zu erhalten.

### Mögliche Response

```json
{
  "id": 67,
  "name": "RSVP LP",
  "header_image": null,
  "title": "",
  "intro": "<p>Reserviere noch heute deinen Platz!</p>",
  "legal": null,
  "highlight_color": "#9456ff",
  "background": "preset",
  "gradient_direction": null,
  "background_color_1": "#000000",
  "background_color_2": null,
  "image": "9aee3e8a-481b-4b26-89a2-e2bf9f72d2da",
  "image_repeat": true,
  "meta_title_override": null,
  "meta_robots_override": true,
  "meta_description_override": null,
  "custom_domain": null,
  "date_created": "2024-06-27T07:21:15.739Z",
  "date_updated": "2025-04-12T18:57:40.863Z"
}
```

<br />

## Landingpage-Template erstellen

```
POST /landingpage
```

Für die Erstellung eines neuen Landingpage-Templates muss mindestens das Feld "name" im Body angegeben werden.

```json
{
  "name": "Name des Elements" // nur intern
}
```

### Möglicher Request mit allen Feldern

```json
{
  "name": "Name des Elements",
  "title": "Willkommen auf meiner Webseite",
  "intro": "<p>Ein Text...</p>", // Einleitungstext; erlaubt HTML
  "legal": "<p>&copy; 2025, ACME Inc.</p>", // Rechtlicher Fußzeilentext; erlaubt HTML
  "highlight_color": "#fcba03", // Hex-Code; wird für Buttons und dekorative Elemente verwendet
  "background": "preset", // Optionen: solid, gradient, image, preset (wie image, aber mit einer Datei aus unserer Bibliothek)
  "gradient_direction": null, // Optionen: linear-t, linear-tr, linear-r, linear-br, radial; nur bei background = "gradient"
  "background_color_1": "#000000", // Hex-Code
  "background_color_2": null, // Hex-Code; nur bei background = "gradient"
  "image_repeat": true, // ob das Hintergrundbild im Vollbild angezeigt oder wiederholt werden soll
  "meta_title_override": null, // Text, der den automatisch generierten Meta-Titel überschreibt
  "meta_robots_override": true, // wenn true, setzen wir "norobots, noindex"
  "meta_description_override": null, // Text, der die automatisch generierte Meta-Beschreibung überschreibt
  "custom_domain": null // ID einer eingerichteten Custom Domain
}
```

::: warning Kein Bild bei POST/PATCH
Beachte, dass du kein Bild für den Header oder bei Verwendung der image-Option als Hintergrund angeben kannst!
Dies kann nur über unsere Web-App erfolgen.
:::

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

## Landingpage-Template aktualisieren

```
PATCH /landingpage/:id
```

Die Aktualisierung eines Landingpage-Templates folgt denselben Regeln wie die Erstellung eines neuen.

**Besonderheiten bei der Aktualisierung:**
- Felder, die du sendest, werden aktualisiert.
- Felder, die du nicht sendest, bleiben unverändert.
- Setze ein Feld auf `null`, um es zurückzusetzen.

<br />

## Landingpage-Template löschen

```
DELETE /landingpage/:id
```

Das Löschen eines Landingpage-Templates ist einfach. Gib hierzu lediglich die ID an, und es wird entfernt.

**Sei bei diesem Aufruf sehr vorsichtig!**

::: warning Dies löscht keine Events oder Gruppen!
Sie bleiben aktiv, verwenden dann aber stattdessen das generische Standard-Landingpage-Template.
:::
