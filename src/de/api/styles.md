# Style-API

## Alle Styles listen

```
GET /style/all
```

Gibt eine Liste mit den IDs aller verfügbaren Styles zurück.

## Einen Style lesen

```
GET /style/:id
```

Beim Abrufen eines bestimmten Styles sind keine zusätzlichen Parameter möglich. Es wird lediglich die ID in der Anfrage-URL benötigt, um alle Daten für ein bestimmtes Element zu erhalten.

### Mögliche Response

```json
{
  "name": "Beispiel Style",
  "options": [
    "apple",
    "google",
    "ms365",
    "msteams"
  ],
  "buttonStyle": "default",
  "customCss": null,
  "inline": false,
  "buttonsList": false,
  "trigger": "hover",
  "listStyle": "dropdown",
  "hideBackground": false,
  "hideIconButton": false,
  "hideIconList": false,
  "hideIconModal": false,
  "hideTextLabelButton": false,
  "hideTextLabelList": false,
  "hideCheckmark": false,
  "lightMode": "light",
  "language": "de",
  "customLabels": null,
  "images": null,
  "hideRichData": false,
  "identifier": null,
  "bypassWebViewCheck": false,
  "hideBranding": false,
  "inlineRsvp": false,
  "pastDateHandling": "none",
  "size": "6",
  "proxy": true,
  "forceOverlay": false,
  "styleLight": null,
  "styleDark": null,
  "load_async": false,
  "optionsMobile": null,
  "optionsIOS": null,
  "date_created": "2024-10-09T17:23:46.421Z",
  "date_updated": "2024-10-09T17:23:46.535Z"
}
```

<br />

## Style erstellen

```
POST /style
```

Für die Erstellung eines neuen Styles müssen mindestens die Felder "name" und "options" im Body angegeben werden.

```json
{
  "name": "Name des Elements", // nur intern
  "options": ["apple", "google"] // Optionen: apple, google, ical, ms365, msteams, outlookcom, yahoo
}
```

### Möglicher Request mit allen Feldern

```json
{
  "name": "Name des Elements",
  "options": [
    "apple",
    "google"
  ],
  "buttonStyle": "default", // Optionen: default, 3d, flat, round, neumorphism, text, date, custom (erfordert gesetztes customCSS)
  "customCss": "https://pfad-zu-deiner-custom-css-datei.deine-domain.com/style.css", // Lade deine eigene CSS-Datei (in Kombination mit buttonStyle "custom" verwenden)
  "inline": false, // Rendert den "Add to Calendar"-Button inline; ansonsten als Block
  "buttonsList": false, // Rendert Optionen als einzelne "Add to Calendar"-Buttons
  "trigger": "hover", // Definiert, wie sich die Optionsliste öffnet. Bei "hover" oder "click" (einige Kombinationen anderer Parameter erzwingen das eine oder andere!)
  "listStyle": "dropdown", // Optionen: dropdown, dropdown-static, dropup-static, overlay, modal
  "hideBackground": false, // Wenn true, kein abgedunkelter Hintergrund beim Öffnen der Optionsliste
  "hideIconButton": false, // Wenn true, versteckt das Icon am "Add to Calendar"-Button
  "hideIconList": false, // Wenn true, versteckt die Icons in der Optionsliste
  "hideIconModal": false, // Wenn true, versteckt alle Icons in Modals
  "hideTextLabelButton": false, // Wenn true, versteckt das Label am "Add to Calendar"-Button
  "hideTextLabelList": false, // Wenn true, versteckt die Labels in der Optionsliste
  "hideCheckmark": false, // Wenn true, versteckt das Häkchen, das dem "Add to Calendar"-Button hinzugefügt wird, wenn ein Event gespeichert wurde
  "lightMode": "light", // Theme; Optionen: light, dark, system, bodyScheme (reagiert auf die class "dark" oder "atcb-dark" im <html> oder <body> tag)
  "language": "de", // Optionen: ar, cs, de, en, es, et, fa, fi, fr, hi, id, it, ja, ko, nl, no, ro, pl, pt, sv, tr, vi, zh
  "customLabels": { // Überschreibe beliebigen Text - siehe Web-App für alle verfügbaren Labels
    "modal.button.default": "Klick mich!"
  },
  "images": null, // Ein Array von URLs zu Bilddateien, die Suchmaschinen und Co. als Metadaten präsentiert werden
  "hideRichData": false, // Wenn true, fügen wir keine strukturierten Daten über das Event hinzu
  "identifier": null, // Ein benutzerdefinierter Bezeichner für den "Add to Calendar"-Button, der für Tracking-Zwecke verwendet wird
  "bypassWebViewCheck": false, // In WebView-Umgebungen wird die Handhabung von ICS-Dateien normalerweise blockiert und wir zeigen eine kleine Anleitung. Wenn true, erzwingen wir trotzdem den Download. Verwenden, wenn du den Button in deine eigene, kontrollierbare App einbaust.
  "hideBranding": false, // Wenn true, verstecken wir jegliches Branding (erfordert einen Plan höher als "hobby")
  "inlineRsvp": false, // Wenn true, wird ein RSVP-Formular inline gerendert; ansonsten rendern wir einen Button, der es in einem Modal öffnet
  "pastDateHandling": "none", // Optionen: none, disable, hide; Was mit dem "Add to Calendar"-Button geschehen soll, wenn ein Event in der Vergangenheit liegt
  "size": "6", // Größe des "Add to Calendar"-Buttons; Zahl zwischen 0 und 10
  "proxy": true, // Wenn true, wird ein Klick auf den "Add to Calendar"-Button über unseren Proxy geleitet. Erforderlich für unser Tracking, um Klicks zu erfassen. Prüft den Zielkalender vorab und zeigt Alternativen und Anleitungen, falls nicht verfügbar
  "forceOverlay": false, // Rendert die "Add to Calendar"-Liste erzwungenermaßen über allen anderen Elementen. Rechenintensiv! Nur verwenden, wenn Probleme mit dem Standard-Setup auftreten
  "styleLight": { // Überschreibe CSS-Einstellungen. Siehe Web-App für alle verfügbaren Optionen, die auf dem verwendeten ButtonStyle basieren
    "--base-font-size-l": "14px"
  },
  "styleDark": null, // Überschreibe CSS-Einstellungen, die nur für den Dark-Mode gelten
  "load_async": false, // Lädt den Button asynchron - zeigt zuerst einen Platzhalter an
  "optionsMobile": null, // Gib alternative Optionen an, die für mobile Geräte verwendet werden
  "optionsIOS": null // Gib alternative Optionen an, die für iOS-Geräte verwendet werden; wenn gesetzt, zielt "optionsMobile" nur auf Android
}
```

### Mögliche Response

```json
{
  "success": "Style created",
  "id": "67"
}
```

<br />

## Style aktualisieren

```
PATCH /style/:id
```

Die Aktualisierung eines Styles folgt denselben Regeln wie die Erstellung eines neuen.

<br />

## Style löschen

```
DELETE /style/:id
```

Das Löschen eines Styles ist einfach. Gib hierzu lediglich die ID an, und er wird entfernt.

**Sei bei diesem Aufruf sehr vorsichtig!**

::: warning Dies löscht keine Events oder Gruppen!
Sie bleiben aktiv, verwenden dann aber stattdessen den Standard-Style.
:::
