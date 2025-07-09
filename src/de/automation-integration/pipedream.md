---
outline: [2,3]
---

# Flows mit Pipedream automatisieren

Mit der [offiziellen Pipedream-App](https://pipedream.com/apps/add-to-calendar-pro) kannst du ganz einfach Add to Calendar PRO Trigger überwachen oder entsprechende Aktionen innerhalb von Pipedream ausführen!

Du findest die App direkt in Pipedream, wenn du einen Workflow erstellst.

## Pipedream mit Add to Calendar PRO verbinden

Um Pipedream mit Add to Calendar PRO zu verbinden, musst du zuerst einen [neuen API-Schlüssel](/de/application-manual/settings#api-keys) erstellen.

1. Gehe zu `Einstellungen` und wähle den Tab `Technisches`.
2. Dort findest du den Bereich `API-Keys`.
3. Klicke auf "Neuer API-Key".
4. Der Name und das Ablaufdatum sind optional. Wir empfehlen, einen Namen (wie "Pipedream") zu setzen, damit du den Schlüssel später leicht identifizieren kannst.
5. Kopiere den Schlüssel und verwende ihn in Pipedream, wenn du danach gefragt wirst.

## Bausteine

Nach erfolgter Verbindung kannst du eine Vielzahl an Triggern und Actions nutzen.

### Trigger

Trigger können einen Workflow starten, wenn etwas passiert.

Im Fall von Add to Calendar PRO mit Pipedream könnte dies Folgendes sein:

- RSVP-Antworten:
  - Eine neue RSVP-Antwort wurde erstellt.  
  Allgemein oder für eine bestimmte Veranstaltung.  
  Dies ist vielleicht der häufigste Fall.
  - Eine RSVP-Antwort wurde aktualisiert.
- Events:
  - Ein neues Event wurde erstellt.
  - Ein Event wurde aktualisiert.
  - Ein Event wurde gelöscht.
- Event-Gruppen:
  - Eine neue Event-Gruppe wurde erstellt.
  - Eine Event-Gruppe wurde aktualisiert.
  - Eine Event-Gruppe wurde gelöscht.

### Actions

Actions erstellen, lesen, aktualisieren oder löschen Daten in Add to Calendar PRO - von Pipedream aus.  
Die Pipedream-App führt dich mit dynamischen Feldern und automatisch ausgefüllten Werten durch die Eingabe.  
Dies funktioniert, indem im Hintergrund unsere API verwendet wird.

::: warning Beachte die Limits!
Da dies auf unserer API basiert, gelten unsere [API-Limits](/de/api/introduction#rate-limiting) entsprechend.  
Normalerweise wirst du diese nie erreichen. Falls doch, kontaktiere uns, damit wir eine bessere Lösung finden!
:::

Du kannst die folgenden Actions nutzen:

- Events:
  - Create a new event
  - Read/Find an event
  - Update an event
  - Delte an event
- Event Groups:
  - Create a new event group
  - Read/Find an event group
  - Update an event group
  - Delte an event group
- Landing Pages:
  - Create a new landing page
  - Read/Find a landing page
  - Update a landing page
  - Delte a landing page
- RSVP Templates:
  - Create a new RSVP template
  - Read/Find a RSVP template
  - Update a RSVP template
  - Delte a RSVP template
- Andere:
  - Retrieve Ics Data (Pfad zur Datei sowie Raw-Body) für ein Event.  
  Diese Daten werden typischerweise als Anhang in einer E-Mail verwendet.  
  Beachte, dass dies nicht für dynamische Zeiten funktioniert (wie "today+2")!

<br />

::: tip Einzelne Felder löschen
Wenn du ein Element aktualisierst, wird durch ein leeres Feld dessen Wert nicht entfernt, da leere Felder von Pipedream ignoriert werden.
Du kannst Informationen entfernen, indem du `{{null}}` als Wert für das Feld eingibst, das du löschen möchtest.
:::

## Typische Anwendungsfälle

### RSVP-Verwaltung

Der vielleicht häufigste Anwendungsfall ist die erweiterte Verwaltung von RSVP-Teilnehmern.

Wenn sich jemand anmeldet, kannst du die Daten abrufen und in ein zusätzliches System übertragen. Dies könnte eine Mailchimp-Newsletter-Liste, ein Google Sheet oder einfach eine andere Datenbank sein.  
Du könntest sogar zusätzliche E-Mail-Flows auslösen.

### Lead-Generierungsformulare

Wenn du die Event-Distribution bei einem RSVP-Event deaktivierst, wird es zu einem einfachen Anmeldeformular (vergleichbar mit der [Wartelisten-Anleitung](/de/recipes/waitlist)).

Verwende den "neue RSVP-Antwort"-Trigger, um diese Anmeldungen direkt in ein CRM-System wie Salesforce, Hubspot oder ZOHO zu übertragen.

### Dynamischer Checkout

Da die Pipedream-App es dir ermöglicht, Events zu erstellen und deren ICS-Dateiinformationen abzurufen, kannst du ganz einfach funktionale Kalenderevents und/oder Einladungen zu jedem anderen Workflow hinzufügen, den du bereits hast.

Stelle dir einen Flow vor, bei dem du eine E-Mail-Journey startest, nachdem jemand ein Produkt von dir gekauft hat.  
Erstelle einfach ein Event, rufe die ICS-Daten ab und verwende sie in jeder beliebigen E-Mail.

Du könntest sogar die ICS-Datei als Datei parsen und in ein anderes System übertragen.

### Events spiegeln

Wenn du Events in einem anderen System erstellst, musst du sie nicht mehr mehrfach von Hand erstellen.

Erstelle einfach ein neues Event bei Add to Calendar PRO über die Pipedream-App, wann immer ein neues Event in deinem anderen System erstellt wird.

## Entdecke die Möglichkeiten!

Entdecke Beispiele und mehr Informationen auf [der entsprechenden Pipedream-Seite ❯](https://pipedream.com/apps/add-to-calendar-pro)