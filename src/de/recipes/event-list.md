---
title: Eine Event-Liste auf deiner Webseite erstellen
description: Erstelle aus einer Add to Calendar PRO Gruppe eine öffentliche, automatisch aktualisierte Event-Liste für deine Webseite.
outline: [2,3]
---

# Eine Event-Liste auf deiner Webseite erstellen

Mit der Add to Calendar Button Web Component kannst du eine Add to Calendar PRO Gruppe in eine öffentliche Event-Liste umwandeln.

Die Liste wird automatisch aus den Events dieser Gruppe erzeugt. Sie enthält eine Jahres- und Monatsauswahl, Links zu den individuellen Event-Landingpages und optionale Add-to-Calendar-Aktionen.

::: tip Du suchst alle Einstellungen?
Diese Anleitung konzentriert sich darauf, die Event-Liste online zu bringen. In der [Referenz zur Event-Liste](/de/integration/event-list) findest du alle Konfigurationsoptionen, Layouts, Interaktionsregeln, Einschränkungen und CSS Parts.
:::

## 1. Eine Event-Gruppe vorbereiten

Öffne Add to Calendar PRO und erstelle eine Gruppe oder wähle eine bestehende Gruppe aus.

Füge alle Events, die in der Liste erscheinen sollen, zu dieser Gruppe hinzu. Die Liste wird direkt aus den Gruppendaten aktualisiert. Du musst die Events daher nicht zusätzlich in deinem Website-Code pflegen.

## 2. Die öffentliche Event-Übersicht aktivieren

Aktiviere **Public Event Overview** in den Einstellungen der Gruppe.

Die Web Component kann die Gruppe nur laden, wenn diese Einstellung aktiv ist.

::: warning Öffentlich bedeutet öffentlich
Die Event-Liste wird im Browser deiner Besucher geladen. Aktiviere die öffentliche Übersicht nicht für eine Gruppe, deren Event-Daten privat bleiben sollen.
:::

## 3. Den Prokey der Gruppe kopieren

Kopiere den Prokey, der bei der Gruppe angezeigt wird.

Achte darauf, den **Prokey der Gruppe** zu verwenden und nicht den Prokey eines einzelnen Events. Das Skript kann diesen Unterschied nicht für dich prüfen.

## 4. Das Add to Calendar Button Skript laden

Wenn der Add to Calendar Button noch nicht Teil deiner Webseite ist, kannst du ihn über das CDN laden:

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
```

Alternativ kannst du das npm-Paket installieren und importieren. In den [Integrationsanleitungen](/de/integration) findest du eine Anleitung für deinen Tech-Stack.

## 5. Die Event-Liste einfügen

Platziere die Web Component dort, wo die Liste erscheinen soll:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
></add-to-calendar-button>
```

Das ist bereits die vollständige Minimalkonfiguration. Da **Public Event Overview** für die Gruppe aktiv ist, rendert die Komponente automatisch die Event-Liste.

::: tip Gruppe ist gleichzeitig ein Kalender-Abonnement?
Wenn dieselbe Gruppe zusätzlich als Kalender-Abonnement konfiguriert ist, rendert die Komponente standardmäßig den Abonnement-Button. Ergänze das Attribut `group-overview`, um stattdessen die Liste darzustellen:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  group-overview
></add-to-calendar-button>
```
:::

Anstelle eines normalen Add to Calendar Buttons führt die Komponente nun folgende Schritte aus:

1. Sie lädt die öffentlichen Events der Gruppe.
2. Sie wählt das aktuelle Jahr aus.
3. Sie bietet nur Jahre und Monate an, die für die verfügbaren Events relevant sind.
4. Sie rendert die Events im standardmäßigen `list`-Layout.

## 6. Ein Layout auswählen

Konfiguriere die Liste über `group-overview-config`. Der Wert muss valides JSON sein.

Setze das HTML-Attribut in einfache Anführungszeichen. Dadurch kannst du für JSON-Schlüssel und String-Werte die erforderlichen doppelten Anführungszeichen verwenden:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  group-overview-config='{"type":"cards"}'
></add-to-calendar-button>
```

Folgende Layouts stehen zur Verfügung:

- `list` - ein detailliertes Event pro Zeile. Dies ist der Standard.
- `cards` - ein responsives Karten-Layout mit einer, zwei oder drei Spalten, abhängig von der verfügbaren Breite der Komponente.
- `compact` - eine minimale Liste mit Datum und Event-Titel.

## 7. Das Verhalten beim Anklicken festlegen

Standardmäßig verlinkt der gesamte Event-Eintrag auf die Add to Calendar PRO Landingpage des Events. Sie wird in einem neuen Tab geöffnet.

Das ist insbesondere für RSVP-Events der empfohlene Ablauf, da die Landingpage alle Event-Informationen und das RSVP-Formular anzeigen kann.

Wenn du die Landingpage nicht verwenden möchtest, setze `no-details` auf `true`. Der gesamte Eintrag öffnet dann die Kalenderoptionen oder das RSVP-Formular in einem Modal:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  group-overview-config='{"no-details":true}'
></add-to-calendar-button>
```

Wenn die Liste rein informativ sein soll, setze stattdessen `no-add` auf `true`. Die Einträge werden dann als statischer Inhalt ohne jegliche Klick-Interaktion dargestellt - ohne Landingpage-Link, ohne Kalenderoptionen und ohne RSVP-Modal:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  group-overview-config='{"no-add":true}'
></add-to-calendar-button>
```

`no-add` übersteuert `no-details` und `add-via-list`.

## 8. Optional direkte Add-to-Calendar-Aktionen hinzufügen

Setze `add-via-list` auf `true`, um bei regulären Events eine kleine Plus-Marke anzuzeigen:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  group-overview-config='{"add-via-list":true}'
></add-to-calendar-button>
```

Wenn `no-details` auf `false` steht, öffnet der Event-Eintrag weiterhin die Landingpage. Die Plus-Marke öffnet dagegen das Modal mit den Kalenderoptionen.

RSVP-Events erhalten keine Plus-Marke. Ihr RSVP-Ablauf bleibt auf der Landingpage. Wenn `no-details` auf `true` steht, öffnet ein Klick auf das Event stattdessen das RSVP-Formular in einem Modal.

::: tip Kompaktes Layout
Im kompakten Layout ersetzt die Plus-Marke den normalen Listenpunkt. RSVP-Einträge verwenden einen einfachen Punkt, damit gemischte Listen ausgerichtet bleiben. Wenn `no-details` aktiv ist, verwenden kompakte Einträge normale Listenpunkte und zeigen keine Plus-Marken.
:::

## 9. Optionales vollständiges Beispiel

Das folgende Beispiel rendert responsive Karten, zeigt alle Monate des ausgewählten Jahres gleichzeitig an, ergänzt direkte Kalenderaktionen für reguläre Events und verwendet eine eigene Landingpage-Domain:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  language="de"
  group-overview-config='{
    "type":"cards",
    "years-only":true,
    "add-via-list":true,
    "custom-domain":"events.example.com"
  }'
></add-to-calendar-button>
```

Die eigene Domain muss bereits in Add to Calendar PRO konfiguriert und aktiv sein. Gib nur den Hostnamen ein, ohne `https://` und ohne Pfad.

## 10. Das Ergebnis testen

Prüfe vor der Veröffentlichung folgende Punkte:

- Du verwendest den Prokey der Gruppe und nicht den Prokey eines Events.
- **Public Event Overview** ist für die Gruppe aktiviert.
- Alle erwarteten Events gehören zur Gruppe und sind veröffentlicht.
- Die Jahres- und Monatsauswahl zeigt die erwarteten Daten.
- Landingpage-Links öffnen das richtige Event.
- Plus-Marken regulärer Events öffnen das Modal mit den Kalenderoptionen.
- RSVP-Events öffnen die Landingpage oder, bei aktivem `no-details`, das RSVP-Modal.
- Das Layout funktioniert mit der tatsächlichen Breite des Komponenten-Containers und nicht nur bei voller Bildschirmbreite.

## Einschränkungen

::: warning Wiederkehrende Events
Wiederkehrende Events werden von der Event-Liste derzeit nicht vollständig unterstützt. Die Liste kann nicht zuverlässig jede Wiederholung auflösen und einordnen. Verwende einzelne, nicht wiederkehrende Termine, wenn jede Wiederholung in der Übersicht erscheinen muss.
:::

Events werden dem Monat und Jahr ihres Startdatums zugeordnet. Wenn ein Event bis in ein späteres Jahr reicht, wird es zusätzlich im Januar des Endjahres dargestellt.

Die vollständige Datumslogik, alle Konfigurationsfelder, Styling-Schnittstellen und Interaktionskombinationen findest du in der [Referenz zur Event-Liste](/de/integration/event-list).
