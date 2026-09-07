---
title: Add to Calendar Buttons in einem dynamischen Checkout-Prozess
description: Integriere Kalender-Buttons in dynamische Checkout-Flows. Perfekt für Terminbuchungen und zeitgebundene Produktverkäufe.
outline: [2,3]
---
# Add to Calendar Buttons in einem dynamischen Checkout-Prozess

Der Verkauf von Termin-gebundenen Artikeln (bspw. Konzert-Tickets) oder einfach die Vereinbarung von Terminen über einen Buchungsprozess sind übliche Szenarien für viele Unternehmen.

In diesem Ablauf möchtest du normalerweise den jeweiligen Termin irgendwie in die Kalender der Kunden einfügen. Vielleicht per E-Mail, vielleicht indem du einen Add to Calendar Button oder eine ics-Datei auf einer Bestätigungsseite oder einem Benutzerkonto anbietest.

**Kein Problem mit Add to Calendar PRO**!

## 📋 Was du brauchst

Du solltest einen Style sowie eine allgemeine Event-Gruppe vorbereiten. Letztere dient als eine Art Sammelbehälter.

Abgesehen davon wird alles andere über die API abgewickelt - du musst dafür natürlich einen API-Key erstellen.

::: warning Achtung bei sensiblen Daten!
Wenn du ein Event erstellst, generieren wir automatisch eine ics-Datei und stellen dir eine Landingpage und mehr zur Verfügung.
Diese Dinge sind von Natur aus "öffentlich" zugänglich. Jeder mit dem entsprechenden Link kann diese Informationen abrufen. Obwohl die Daten damit nicht völlig "offen" ist, kann es ein Risiko darstellen, wenn du sensible Informationen in den Detailinformationen des Events nutzt. Dies kann ein Problem bei manchen Checkout-Flows sein.

**Du kannst [das verhindern](/de/application-manual/troubleshooting#how-can-i-make-sure-there-is-no-data-publicly-available-on-the-internet) indem du das Event auf "privat" setzt.**

In der folgenden Anleitung zeigen wir auch den Prozess-Fluß mit einem privaten Event.
:::

::: tip Noch einfacher mit Zapier!
Alternativ kannst du unser Zapier-Template für Shopify benutzen: [hier klicken](https://zapier.com/apps/email/integrations/shopify/255643741/send-outbound-emails-with-add-to-calendar-pro-events-for-new-shopify-orders).

Natürlich funktioniert dies auch für andere Shopsysteme, solange sie über Zapier angebunden werden können.  
Das Template kannst du bequem an deinen Case anpassen.
:::

## 🧱 Einrichtung

Die Einrichtung dieses Ablaufs erfordert etwas mehr Arbeit, da du dies in deine bestehenden Backend-Abläufe integrieren musst!

**Der generelle Ablauf visualisiert:**

<br />

![Checkout-Flow-mit-ics-Datei-und-Add-to-Calendar-Button](/screenshots/checkout-flow.svg)

<br /><br />

**Wenn du ein Event als _privat_ markierst sieht der Flow ein klein wenig anders aus:**

<br />

![Geschuetzter-Checkout-Flow-mit-ics-Datei-und-Add-to-Calendar-Button](/screenshots/checkout-flow-secured.svg)

<br /><br />

**Hier kommt eine Liste der nötigen Schritte:**

1. Erstelle einen Style und bereite alles für einen potenziellen Add to Calendar Button vor, damit dieser gut aussieht (überspringe diesen Schritt, wenn du nur mit ics-Dateien arbeiten möchtest).
2. Erstelle ein Landingpage-Template. Das ist wichtig, wenn du E-Mail-Links verwendest; oder wenn du einfach eine schöne Veranstaltungs-Landingpage teilen möchtest (kann auch für das Support-Team nützlich sein, wenn ein Benutzer Hilfe beim Speichern des Events benötigt).
3. Erstelle einen API-Key (auf der Seite der Organisationseinstellungen).
4. Erstelle eine Event-Gruppe (mit Kalender-Abonnement auf "Nein"), die alle zukünftigen Veranstaltungen beinhalten wird.
5. Lies die [API-Dokumentation über die Eventerstellung](/de/api/events#add-an-event).
6. Erstelle in deinem Backend eine Funktion, die ein Event über die Add to Calendar PRO API basierend auf den Daten, die du für den Benutzer hast, erstellt. Gib den gespeicherten Style und Landingpage an, um das Event damit zu verknüpfen. Wir empfehlen, in diesem Fall auch den Organizer und den Attendee festzulegen (bei manchen Systemen wird das Event dadurch automatisch zum Kalender des Benutzers hinzugefügt, sobald eine E-Mail mit der ics-Datei geöffnet wird)! _Definiere das Event als "privat", falls nötig._ Die Response beinhaltet eine ID (der Prokey des Events).
7. Bei regulären Events:
   1. Verwende diese ID, um die generierte ics-Datei beim Senden einer Bestätigungs-E-Mail abzurufen und an die E-Mail anzufügen.
   2. Verwende diese ID, um Add to Calendar Links in dieser Bestätigungs-E-Mail zu integrieren.
   3. Verwende diese ID, um einen schönen Add to Calendar Button auf der "Danke"-Seite nach dem Checkout zu rendern.
8. Bei als "privat" markierten Events:
   1. Verwende diese ID, um den Body-Inhalt der [ics-Datei via API abzurufen](/de/api/miscellaneous#retrieve-ics-file-body), die Datei damit selbst zu generieren und zu versenden.
   2. Bei privaten Events kannst du keine Add to Calendar Links nutzen. Add to Calendar Buttons funktionieren über den üblichen Weg ebenfalls nicht. Du kannst allerdings die sowieso (für die Anlage des Events) gegebenen Daten nutzen, um einen Button gemäß dem Open-Source-Schema zu erstellen (siehe [add-to-calendar-button.com](https://add-to-calendar-button.com/de))

### Schema für ics-Dateien

```
https://event.caldn.net/:id/event.ics
```

Du kannst den Namen der Datei über die Option `iCalFileName` anpassen. Passe den Namen im Schema in diesem Fall ebenfalls entsprechend an!

### Schema für E-Mail-Links

```
https://caldn.net/:id/o/:type
```

Mit `type` als "apple", "google", "ical", "ms365", "outlookcom", "msteams" oder "yahoo".

## ❇️ Weiter gedacht

Du fragst dich vielleicht, wie du mit Entwicklungs- oder Staging-Umgebungen umgehen kannst!

**Einfach!**

Erstelle eine Event-Gruppe pro Umgebung! Wenn du das Event über die API erstellst, kannst du dann leicht zwischen den Umgebungen unterscheiden.

Du kannst die Aufteilung auch explizit in der App sehen, da alle Events ihrer Gruppe untergeordnet sind.
