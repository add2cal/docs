---
outline: [2,3]
---

# Gruppen und Events

Eine **Event-Gruppe** ist eine Art Container für ein oder mehrere **Events**.
Diese Elemente sind der Kern jedwedes Vorhabens.

Du findest beide über den Punkt "Events" im Menü.

Auf der Übersichtsseite kannst du über den Toggle-Switch zwischen den beiden Hierarchie-Ebenen wechseln.

[In der App öffnen ❯](https://app.add-to-calendar-pro.com/de)

## Die Event-Gruppe

Sie kann zur Strukturierung und Organisation deiner Daten genutzt oder mit einem externen Kalender verknüpft werden.
Letzteres erzeugt einen Button, über den man einen Kalender abonnieren kann. Entsprechend kannst du Styles und CTAs in diesem Fall direkt mit der Gruppe verknüpfen.

### Erstellung

Die Erstellung einer Gruppe ist ziemlich einfach, da nicht viele Informationen benötigt werden - vor allem, wenn du kein Kalendar-Abonnement anlegst.

Du kannst das Feld **"Interne Notiz"** für individuelle Informationen nutzen. Dies hat keinen Einfluss auf irgendeine Funktionalität. Wenn du im Team arbeitest, kann dies aber nützlich sein, um bspw. Hintegrund-Informationen zur Gruppe festzuhalten.

Legt du ein Kalender-Abonnement an, so kannst du diesem einen **Style** sowie ein **Call-to-Action-Element** zuweisen.
Zur Visualisierung des Ganzen gibt es eine entsprechende Vorschau.

[In der App öffnen ❯](https://app.add-to-calendar-pro.com/de/create-group)

### Detail-Seite

Auf der Detail-Seite einer Gruppe werden alle damit verbundenen Events in einer Tabelle angezeigt. Eine Gruppe kann damit auch ein guter Startpunkt für eine gefilterte Event-Übersicht sein.

::: warning Beachte!
Sobald eine Gruppe Events beinhaltet, kann diese Option nicht mehr geändert werden, da sich damit die Kernfunktionalität der Gruppe ändert.
:::

Im Kalendar-Abonnement-Fall siehst du anstelle dieser Übersicht die Style- und CTA-Felder samt Vorschau, die du bereits aus der Erstellung der Gruppe kennst.

Ganz oben siehst du entweder nur den ProKey zum Kopieren (im Fall ohne Abonnement) oder eine komplette Zusammenfassung mit allem, was du für das Teilen und die Integration benötigst. Von E-Mail-Links bis zu deiner automatisch erstellten Landingpage und mehr. An dieser Stelle findest du ebenfalls den Link zum Analytics/**Statistik**-Dashboard für diese Event-Gruppe.

## Das Event

Ein **Event** wird durch einen bestimmten Termin und weitere beschreibende Parameter definiert. Es ist das Kern-Element von allem, was du mit Add to Calendar PRO entwickelst.

Bei einem Event kann sich bspw. um ein Ganztags-Event, einen wiederholenden Termin oder auch mehrere Termine (Termin-Reihe) handeln. Darüber hinaus kannst du allerdings noch viel mehr Details definieren (bspw. einen Organisator) definieren.

Mit einem Event lassen sich Styles, RSVPs und CTAs verknüpfen, um entsprechende Funktionalitäten zu aktivieren.

### Erstellung

Ein neues Event kann über die Übersichtsseite oder innerhalb einer Event-Gruppe erfolgen.

Zu Beginn definierst du die Art des Events.
Hierbei geht es im Wesentlichen um:

* **RSVP**: Ob du das Event mit einem RSVP-Formular nutzen möchtest oder nicht.
* **Event-Distribution**: Wenn du das Element als RSVP nutzt, ob du möchtest, dass das Event (Datum und Details) an den Nutzer übermittelt wird oder ob du nur ein einfaches Anmeldeformular möchtest (bei dem du die zugrundeliegenden Eventdetails nicht anzeigen möchtest).
* **Add-to-Calendar-Button**: Ob du einen "Zum Kalender hinzufügen"-Button für das Event erstellen möchtest. Wenn du dich zusätzlich für RSVP entscheidest, wirkt sich dies auch darauf aus, ob wir einen solchen Button nach der Anmeldung des Nutzers anzeigen.
* **Call to Action (CTA)**: Ob nach dem Speichern eines Events über den Add-to-Calendar-Button ein CTA-Screen angezeigt werden soll.

Als Nächstes definierst du die Termin-Daten.
Dies ist grundsätzlich recht selbsterklärend.

Du kannst mehrere Termin-Blöcke erstellen, um ein Multi-Date-event zu kreieren (z.B. wenn das Event aus 2 Teilen besteht) oder eine Wiederholungslogik erstellen.

Schließlich kannst du, abhängig von dem, was du zuvor angegeben hast, einen Style, RSVP-Formular und CTA-Element für das Event definieren.

In allen Fällen kannst du das Ergebnis immer in der dynamischen Vorschau überprüfen.

[In der App öffnen ❯](https://app.add-to-calendar-pro.com/de/group/create-group/create-event)

### Detail-Seite

Sobald erstellt, kannst du das Event jederzeit auf der Detailseite aktualisieren.
Dort findest du im Grunde die gleiche Struktur wie bei der Erstellung selbst vor.

Ganz oben findest du eine Zusammenfassung mit allem, was du für das Teilen und die Integration benötigst. Von E-Mail-Links bis zu deiner automatisch erstellten Landingpage und mehr. Hier findest du auch den Link zum Analytics-Dashboard für dieses Event. Das wäre die Übersicht über RSVP-Anmeldungen im RSVP-Fall oder [Statistiken](/de/application-manual/analytics.html) darüber, wann und wie oft Personen ein Event zu ihren Kalendern hinzugefügt haben (im Nicht-RSVP-Fall).

Ebenfalls an oberster Stelle findest du die Option, ein Event als privat zu markieren. 
Dies blockiert die automatische Generierung einer Landingpage und ICS-Datei, aber erlaubt dir weiterhin ICS-Dateien über die API zu generieren oder einen Button mit [dynamischen Datumseigenschaften in WordPress](/de/integration/wordpress.html#dynamische-verbindungen) zu verwenden.

::: warning Beachte automatische Anpassungen
Je nachdem, was du auswählst sowie je nach Nutzer-Situation, passen wir automatisch manche Details an. Beispiel: Wenn du ein wiederkehrendes Event erstellst, werden einige Kalendertypen nicht angezeigt, da nicht alle diese Funktion unterstützen (im Rahmen eines Add-to-Calendar-Buttons).
:::
