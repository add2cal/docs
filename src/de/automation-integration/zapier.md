---
outline: [2,3]
---

# Flows mit Zapier automatisieren

Mit unserer [offiziellen Zapier-App](https://zapier.com/apps/add-to-calendar-pro) kannst du ganz einfach Add to Calendar PRO Trigger überwachen oder entsprechende Aktionen innerhalb von Zapier ausführen!

Du findest die App direkt in Zapier, wenn du einen Zap erstellst.

## Zapier mit Add to Calendar PRO verbinden

Um Zapier mit Add to Calendar PRO zu verbinden, musst du zuerst einen [neuen API-Schlüssel](/de/application-manual/settings.html#api-keys) erstellen.

1. Gehe zu `Einstellungen` und wähle den Tab `Technisches`.
2. Dort findest du den Bereich `API-Keys`.
3. Klicke auf "Neuer API-Key".
4. Der Name und das Ablaufdatum sind optional. Wir empfehlen, einen Namen (wie "Zapier") zu setzen, damit du den Schlüssel später leicht identifizieren kannst.
5. Kopiere den Schlüssel und verwende ihn in Zapier, wenn du danach gefragt wirst.

## Bausteine

Nach erfolgter Verbindung kannst du eine Vielzahl an Triggern und Actions nutzen.

### Trigger

Trigger können einen Ablauf starten, wenn etwas passiert.

Im Fall von Add to Calendar PRO mit Zapier könnte dies Folgendes sein:

- RSVP-Antworten:
  - Eine neue RSVP-Antwort wurde erstellt.  
  Allgemein oder für eine bestimmte Veranstaltung.  
  Dies ist vielleicht der häufigste Fall.  
  [Diesen Zap verwenden ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_rsvp_attendee)
  - Eine RSVP-Antwort wurde aktualisiert.  
  [Diesen Zap verwenden ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=updated_rsvp_answer)
- Events:
  - Ein neues Event wurde erstellt.  
  [Diesen Zap verwenden ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_event)
  - Ein Event wurde aktualisiert.  
  [Diesen Zap verwenden ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=updated_event)
  - Ein Event wurde gelöscht.  
  [Diesen Zap verwenden ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=deleted_event)
- Event-Gruppen:
  - Eine neue Event-Gruppe wurde erstellt.  
  [Diesen Zap verwenden ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_group)
  - Eine Event-Gruppe wurde aktualisiert.  
  [Diesen Zap verwenden ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=updated_group)
  - Eine Event-Gruppe wurde gelöscht.  
  [Diesen Zap verwenden ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=deleted_group)

### Actions

Actions erstellen, lesen, aktualisieren oder löschen Daten in Add to Calendar PRO - von Zapier aus.  
Die Zapier-App führt dich mit dynamischen Feldern und automatisch ausgefüllten Werten durch die Eingabe.  
Dies funktioniert, indem im Hintergrund unsere gut dokumentierte API verwendet wird.

::: warning Beachte die Limits!
Da dies auf unserer API basiert, gelten unsere [API-Limits](/de/api/introduction.html#rate-limiting) entsprechend.  
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

::: tip Einzelne Felder löschen
Wenn du ein Element aktualisierst, wird durch ein leeres Feld dessen Wert nicht entfernt, da leere Felder von Zapier ignoriert werden.
Du kannst Informationen entfernen, indem du `$$CLEAR$$` als Wert für das Feld eingibst, das du löschen möchtest.
:::

## Typische Anwendungsfälle

### RSVP-Verwaltung

Der vielleicht häufigste Anwendungsfall ist die erweiterte Verwaltung von RSVP-Teilnehmern.

Wenn sich jemand anmeldet, kannst du die Daten abrufen und in ein zusätzliches System übertragen. Dies könnte eine Mailchimp-Newsletter-Liste, ein Google Sheet oder einfach eine andere Datenbank sein.  
Du könntest sogar zusätzliche E-Mail-Flows auslösen.

### Lead-Generierungsformulare

Wenn du die Event-Distribution bei einem RSVP-Event deaktivierst, wird es zu einem einfachen Anmeldeformular (vergleichbar mit der [Wartelisten-Anleitung](/de/recipes/waitlist.html)).

Verwende den "neue RSVP-Antwort"-Trigger, um diese Anmeldungen direkt in ein CRM-System wie [Salesforce](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_rsvp_attendee&steps[1][app]=SalesforceCLIAPI@latest&steps[1][action]=create_lead), [Hubspot](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_rsvp_attendee&steps[1][app]=HubSpotCLIAPI@latest&steps[1][action]=contactCreate), [Pipedrive](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_rsvp_attendee&steps[1][app]=PipedriveCLIAPI@latest&steps[1][action]=create_lead) oder ZOHO zu übertragen.

### Dynamischer Checkout

Da die Zapier App es dir ermöglicht, Events zu erstellen und deren ICS-Dateiinformationen abzurufen, kannst du ganz einfach funktionale Kalenderevents und/oder Einladungen zu jedem anderen Zap hinzufügen, den du bereits hast.

Stelle dir einen Zap vor, bei dem du eine E-Mail-Journey startest, nachdem jemand ein Produkt von dir gekauft hat.  
Erstelle einfach ein Event, rufe die ICS-Daten ab und verwende sie in jeder beliebigen E-Mail.

Du könntest sogar die ICS-Datei als Datei parsen und in ein anderes System übertragen.

### Events spiegeln

Wenn du Events in einem anderen System erstellst, musst du sie nicht mehr mehrfach von Hand erstellen.

Erstelle einfach ein neues Event bei Add to Calendar PRO über unsere Zapier-App, wann immer ein neues Event in deinem anderen System erstellt wird.

## Entdecke die Möglichkeiten!

[Beispiele und Vorlagen direkt in der App erkunden ❯](https://app.add-to-calendar-pro.com/de/use-zapier)
