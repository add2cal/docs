---
outline: [2,3]
---

# Add to Calendar Buttons in einem dynamischen Checkout-Prozess

Der Verkauf von Termin-gebundenen Artikeln (bspw. Konzert-Tickets) oder einfach die Vereinbarung von Terminen über einen Buchungsprozess sind übliche Szenarien für viele Unternehmen.

In diesem Ablauf möchtest du normalerweise den jeweiligen Termin irgendwie in die Kalender der Kunden einfügen. Vielleicht per E-Mail, vielleicht indem du einen Add to Calendar Button oder eine ics-Datei auf einer Bestätigungsseite oder einem Benutzerkonto anbietest.

**Kein Problem mit Add to Calendar PRO**!

## 📋 Was du brauchst

Du solltest einen Style sowie eine allgemeine Event-Gruppe vorbereiten. Letztere dient als eine Art Sammelbehälter.

Abgesehen davon wird alles andere über die API abgewickelt - du musst dafür natürlich einen API-Key erstellen.

## 🧱 Einrichtung

Die Einrichtung dieses Ablaufs erfordert etwas mehr Arbeit, da du dies in deine bestehenden Backend-Abläufe integrieren musst!

**Der generelle Ablauf visualisiert:**

![Editor](/screenshots/checkout-flow.svg)

<br />

**Hier kommt eine Liste der nötigen Schritte:**

1. Erstelle einen Style und bereite alles für einen potenziellen Add to Calendar Button vor, damit dieser gut aussieht (überspringe diesen Schritt, wenn du nur mit ics-Dateien arbeiten möchtest).
2. Erstelle ein Landingpage-Template und verknüpfe es mit dem Style. Das ist wichtig, wenn du E-Mail-Links verwendest; oder wenn du einfach eine schöne Veranstaltungs-Landingpage teilen möchtest (kann auch für das Support-Team nützlich sein, wenn ein Benutzer Hilfe beim Speichern des Events benötigt).
3. Erstelle einen API-Key (auf der Seite der Organisationseinstellungen).
4. Erstelle eine Event-Gruppe (mit Kalender-Abonnement auf "Nein"), die alle zukünftigen Veranstaltungen beinhalten wird.
5. Lies die [API-Dokumentation über die Eventerstellung](/de/api/events.html#add-an-event).
6. Erstelle in deinem Backend eine Funktion, die ein Event über die Add to Calendar PRO API basierend auf den Daten, die du für den Benutzer hast, erstellt. Wir empfehlen, in diesem Fall auch den Organizer und den Attendee festzulegen (bei manchen Systemen wird das Event dadurch automatisch zum Kalender des Benutzers hinzugefügt, sobald eine E-Mail mit der ics-Datei geöffnet wird)! Die Response beinhaltet eine ID (der ProKey des Events).
7. Verwende diese ID, um die generierte ics-Datei beim Senden einer Bestätigungs-E-Mail abzurufen und an die E-Mail anzufügen.
8. Verwende diese ID, um Add to Calendar Links in dieser Bestätigungs-E-Mail zu integrieren.
9. Verwende diese ID, um einen schönen Add to Calendar Button auf der "Danke"-Seite nach dem Checkout zu rendern.

### Schema für ics-Dateien

```
https://event.caldn.net/:id/event.ics
```

Du kannst den Namen der Datei über die Option `iCalFileName` anpassen. Passe den Namen im Schema in diesem Fall ebenfalls entsprechend an!

### Schema für E-Mail-Links

```
https://go.caldn.net/:id/o/:type
```

Mit `type` als "apple", "google", "ical", "ms365", "outlookcom", "msteams" oder "yahoo".


## ❇️ Weiter gedacht

Du fragst dich vielleicht, wie du mit Entwicklungs- oder Staging-Umgebungen umgehen kannst!

**Einfach!**

Erstelle eine Event-Gruppe pro Umgebung! Wenn du das Event über die API erstellst, kannst du dann leicht zwischen den Umgebungen unterscheiden.

Du kannst die Aufteilung auch explizit in der App sehen, da alle Events ihrer Gruppe untergeordnet sind.
