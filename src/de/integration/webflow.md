
# Wie man die Buttons und RSVP-Formulare mit Webflow nutzt

## Schritt 0: Voraussetzungen

Für die Integration des Add to Calendar Buttons oder RSVP Formulars mit Webflow musst du in der Lage sein "Custom Code" einzufügen. Dies erfordert eine kostenpflichtige Webflow-Lizenz!

## Schritt 1: Integriere das Skript

* Öffne die Einstellungen deiner Webseite.
* Navigiere zum "Custom code"-Bereich.
* Kopiere den folgenden Code und füge ihn im `<head>`-Textfeld ein.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
```

## Schritt 2: Erstelle ein Custom Element

* Wieder im Designer musst du nun ein neues Custom Element erstellen.
* Als Tag Name (unter "Settings" in dem neuen Element) gibst du `add-to-calendar-button` ein.
* Füge nun ein neues Attribute hinzu. Der Name muss "proKey" lauten. Der Value entspricht dann dem proKey, den du für das Element nutzen möchtest.
* Das war's. Du kannst das Ganze nun veröffentlichen und testen.

<br /><br />

::: warning Mangelnde Vorschau
Aufgrund von Limitation des Webflow Designers kann der Button (oder Formular) dort und in der Vorschau nicht gerendert werden. Du musst die Seite leider erst veröffentlichen und das Ergebnis auf der Live-Seite testen.
:::
