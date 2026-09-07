---
title: Event-Liste konfigurieren
description: Vollständige Referenz zur Darstellung einer öffentlichen Add to Calendar PRO Gruppe als konfigurierbare Event-Liste.
outline: [2,3]
---

# Event-Liste konfigurieren

Die Event-Listen-Funktion rendert die öffentlichen Events einer Add to Calendar PRO Gruppe über die `<add-to-calendar-button>` Web Component.

Anstatt einen Button darzustellen, lädt die Komponente die Event-Daten der Gruppe und baut daraus direkt auf deiner Webseite eine navigierbare Liste auf.

::: tip Schnellstart
Wenn du zunächst eine Liste online bringen möchtest, folge der Schritt-für-Schritt-Anleitung [Eine Event-Liste auf deiner Webseite erstellen](/de/recipes/event-list).
:::

## Voraussetzungen

Die Funktion benötigt folgende Voraussetzungen:

- Eine gültige Add to Calendar PRO Gruppe.
- Den Prokey dieser Gruppe.
- Die aktivierte Einstellung **Public Event Overview** in den Gruppeneinstellungen.
- Eine aktuelle Version des Add to Calendar Button Pakets, die die Event-Liste unterstützt.
- Client-seitiges JavaScript. Die Event-Daten werden im Browser geladen und gerendert.

Die Komponente kann nicht prüfen, ob ein Prokey zu einer Gruppe gehört. Du bist dafür verantwortlich, den richtigen Gruppen-Prokey anzugeben.

## Basiskonfiguration

Gib den Gruppen-Prokey an. Mehr ist nicht erforderlich:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
></add-to-calendar-button>
```

Wenn **Public Event Overview** für die Gruppe aktiv ist, erkennt die Komponente das automatisch und rendert die Event-Liste anstelle eines normalen Add to Calendar Buttons.

Es gibt eine Ausnahme: Wenn die Gruppe gleichzeitig als Kalender-Abonnement konfiguriert ist, rendert die Komponente standardmäßig den Abonnement-Button. Setze in diesem Fall explizit das Boolean-Attribut `group-overview`, um stattdessen die Liste darzustellen:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  group-overview
></add-to-calendar-button>
```

`group-overview` funktioniert nur zusammen mit einem gültigen `prokey`. Du kannst das Attribut bei jeder Gruppe mit aktiver öffentlicher Event-Übersicht gefahrlos setzen. Notwendig ist es nur im Abonnement-Fall.

Zusätzliche Einstellungen gehören in das Objekt `group-overview-config`:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  group-overview-config='{
    "type":"list",
    "years-only":false,
    "no-details":false,
    "no-add":false,
    "add-via-list":true
  }'
></add-to-calendar-button>
```

Objekt-Attribute in HTML müssen valides JSON enthalten. Eine praktische Schreibweise verwendet einfache Anführungszeichen um das Attribut und doppelte Anführungszeichen innerhalb des JSON. Verwende keine Kommentare oder nachgestellten Kommas.

## Laden der Daten

Die Komponente lädt die öffentlichen Events über die Add to Calendar PRO Events API. Intern verwendet sie:

```text
GET https://api.add-to-calendar-pro.com/v1/event/all
    ?group=DEIN-GRUPPEN-PROKEY
    &dates=true
    &from=...
    &to=...
```

Du musst diesen Endpunkt nicht selbst aufrufen und stellst keinen API-Token bereit. Der Gruppen-Prokey dient als öffentliche Kennung.

Der Parameter `from` wird immer übertragen. `to` wird nur ergänzt, wenn du ihn konfigurierst.

Im Entwicklungsmodus verwendet die Komponente die Entwicklungs-API, den Entwicklungs-Endpunkt für Event-Konfigurationen und Landingpage-Links über `dev.caldn.net`.

## Datumsorganisation

### Standardzeitraum

Die standardmäßige Untergrenze ist der 1. Januar des vorherigen Kalenderjahres um `00:00:00Z`.

Im Jahr 2027 wäre der Standard beispielsweise:

```text
2026-01-01T00:00:00Z
```

Events aus Jahren vor dem vorherigen Jahr werden nicht gerendert.

Es gibt standardmäßig keine Obergrenze.

### Jahresauswahl

Das aktuelle Jahr ist zunächst ausgewählt und steht in der Jahresauswahl immer zur Verfügung.

Andere Jahre erscheinen nur, wenn ihnen mindestens ein Event zugeordnet ist. Ein Jahr ohne Events wird ausgeblendet. Das aktuelle Jahr bildet die Ausnahme: Wenn es keine Events enthält, zeigt die Komponente den lokalisierten Hinweis „Keine Veranstaltungen in diesem Jahr.“ an.

Die `language`-Einstellung der Komponente steuert den leeren Hinweis, die Monatsnamen und die formatierten Datumsangaben.

### Monatsauswahl

Im Standardmodus zeigt eine zweite Auswahl die verfügbaren Monate des ausgewählten Jahres. Monate ohne Events werden nicht angeboten.

Der aktuelle Monat wird ausgewählt, wenn er Events enthält. Andernfalls wird der erste verfügbare Monat ausgewählt.

### Start- und Enddaten

Ein Event erscheint im Monat und Jahr seines Startdatums.

Wenn ein Event in einem Jahr beginnt und in einem späteren Jahr endet, erscheint es zusätzlich im Januar des Endjahres. Es wird nicht in jedem Monat zwischen Start- und Enddatum wiederholt.

Bei Events mit mehreren Terminen wird jedes vom Gruppen-Endpunkt zurückgegebene Datum zu einem eigenen Listeneintrag.

## Konfigurationsreferenz

`group-overview-config` kann keine, einige oder alle der folgenden Eigenschaften enthalten.

| Eigenschaft     | Typ     | Standard                        | Beschreibung                                                                                                                                                                  |
| :-------------- | :------ | :------------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `years-only`    | Boolean | `false`                         | Entfernt die Monatsauswahl und rendert alle Events des ausgewählten Jahres. Monatsnamen werden zu Überschriften zwischen den Event-Gruppen.                                   |
| `type`          | String  | `list`                          | Wählt das visuelle Layout. Erlaubte Werte sind `list`, `cards` und `compact`. Ungültige Werte fallen auf `list` zurück.                                                       |
| `from`          | String  | 1. Januar des vorherigen Jahres | UTC-ISO-Zeitstempel, der die API-Abfrage am unteren Ende begrenzt. Werte vor der standardmäßigen Untergrenze werden auf den Standardwert angehoben.                           |
| `to`            | String  | Keine Obergrenze                | UTC-ISO-Zeitstempel, der die API-Abfrage am oberen Ende begrenzt. Er darf nicht vor dem effektiven `from`-Wert liegen.                                                        |
| `no-details`    | Boolean | `false`                         | Verhindert die Navigation zur Event-Landingpage. Stattdessen öffnet der gesamte Event-Eintrag die Kalenderoptionen oder das RSVP-Modal.                                       |
| `no-add`        | Boolean | `false`                         | Deaktiviert jegliche Interaktion. Einträge werden als rein statischer Inhalt ohne Landingpage-Links, Add-to-Calendar-Aktionen und RSVP-Modals dargestellt. Übersteuert `no-details` und `add-via-list`. |
| `custom-domain` | String  | `caldn.net`                     | Hostname für Landingpage-Links, beispielsweise `events.example.com`. Gib kein Protokoll und keinen Pfad an. Die Domain muss bereits in Add to Calendar PRO konfiguriert sein. |
| `add-via-list`  | Boolean | `false`                         | Ergänzt bei regulären Events einen direkten Auslöser für die Kalenderoptionen. Die genaue Darstellung hängt von `type`, `no-details` und der Verwendung von RSVP ab.          |

### UTC-Datetime-Format

`from` und `to` müssen UTC-ISO-Zeitstempel ohne Millisekunden verwenden:

```text
2027-01-01T00:00:00Z
```

Die folgenden Werte sind für diese Einstellungen nicht gültig:

```text
2027-01-01
2027-01-01T00:00:00+01:00
2027-01-01T00:00:00.000Z
```

Wenn `to` ungültig ist oder vor dem effektiven `from` liegt, kann die Übersicht nicht initialisiert werden.

## Layout-Typen

### `list`

Das Listen-Layout rendert ein Event pro Zeile und ist auf eine Breite von 600 px begrenzt.

Jeder Eintrag enthält:

- Den Starttag in einem dunklen Block auf der linken Seite.
- Den auf zwei Zeilen begrenzten Titel.
- Datum und Uhrzeit sowie den Ort in getrennten Zeilen.
- Die auf einfache Leerzeichen normalisierte und auf zwei Zeilen begrenzte Beschreibung.

Die gesamte Karte ist der Event-Link oder Aktionsauslöser.

### `cards`

Das Karten-Layout rendert gleich breite Karten und orientiert sich an der Container-Breite der Komponente, nicht an der Breite des Browserfensters.

- Unter 600 px: eine Spalte.
- Ab 600 px: zwei Spalten.
- Ab 1000 px: drei Spalten.
- Maximale Komponentenbreite: 1200 px.

Jede Karte zeigt Datum und Uhrzeit über dem Titel, gefolgt von Ort und Beschreibung. Der Titel wird auf zwei Zeilen und die Beschreibung auf drei Zeilen begrenzt.

Unvollständige Reihen behalten dieselbe Spaltenbreite wie vollständige Reihen.

### `compact`

Das kompakte Layout rendert eine minimale Textliste nach diesem Grundmuster:

```text
Datum | Event-Titel
```

Der vollständige Text ist verlinkt. Wenn direkte Add-to-Calendar-Aktionen aktiv sind, ersetzt die Plus-Marke bei regulären Events den Listenpunkt. RSVP-Einträge verwenden stattdessen einen ausgerichteten Punkt.

## Interaktionsverhalten

Die Interaktion hängt von `no-add`, `no-details`, `add-via-list`, dem ausgewählten Layout und der Verwendung von RSVP ab.

Wenn `no-add` aktiv ist, steht keinerlei Interaktion zur Verfügung. Einträge werden als statischer Inhalt dargestellt: kein Landingpage-Link, keine Kalenderoptionen und kein RSVP-Modal. `no-details` und `add-via-list` haben in diesem Modus keine Wirkung.

Wenn `no-add` deaktiviert ist (der Standard), gelten die folgenden Kombinationen:

| `no-details` | `add-via-list` | Reguläres Event                                                                                                                                                            | RSVP-Event                                                                                       |
| :----------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------- |
| `false`      | `false`        | Der gesamte Eintrag öffnet die Landingpage.                                                                                                                                | Der gesamte Eintrag öffnet die Landingpage mit dem RSVP-Ablauf.                                  |
| `false`      | `true`         | Der gesamte Eintrag öffnet die Landingpage. Eine separate Plus-Marke öffnet das Modal mit den Kalenderoptionen.                                                            | Der gesamte Eintrag öffnet die Landingpage. Es wird keine Plus-Marke angezeigt.                  |
| `true`       | `false`        | Der gesamte Eintrag öffnet das Modal mit den Kalenderoptionen.                                                                                                             | Der gesamte Eintrag öffnet das RSVP-Formular in einem Modal.                                     |
| `true`       | `true`         | Bei `list` und `cards` ist die Marke ein visueller Teil desselben Aktionslinks; ein Klick an beliebiger Stelle öffnet das Modal. Bei `compact` wird keine Marke angezeigt. | Der gesamte Eintrag öffnet das RSVP-Formular in einem Modal. Es wird keine Plus-Marke angezeigt. |

### RSVP-Events

RSVP-Events erhalten bewusst keine unabhängige Plus-Aktion. Eine personalisierte Kalenderdatei kann von der RSVP-Antwort abhängen und gehört deshalb zum RSVP-Ablauf.

Mit den Standardeinstellungen öffnet das Event daher seine Landingpage. Wenn `no-details` aktiv ist, wird das RSVP-Formular in einem Modal geöffnet, selbst wenn der Event-Stil normalerweise eine Inline-Darstellung des RSVP-Formulars anfordert.

## Landingpages und eigene Domains

Ohne `custom-domain` verwenden Event-Links folgendes Schema:

```text
https://caldn.net/EVENT-PROKEY
```

Mit einer konfigurierten eigenen Domain:

```html
group-overview-config='{"custom-domain":"events.example.com"}'
```

wird der ursprüngliche Link wie folgt aufgebaut:

```text
https://events.example.com/EVENT-PROKEY
```

Der Wert verändert den im Quellcode erzeugten Link. Add to Calendar PRO leitet gegebenenfalls ohnehin auf eine konfigurierte eigene Domain weiter. Die Einstellung verhindert jedoch, dass technisch versierte Personen diese Weiterleitung beim Untersuchen der Seite sehen.

Die eigene Domain muss in Add to Calendar PRO aktiv sein. Die Web Component konfiguriert oder validiert die externe Domain-Einrichtung nicht.

## Sprache und individuelle Beschriftungen

Verwende das reguläre `language`-Attribut, um Monatsnamen, Datumsangaben und den Hinweis für ein leeres aktuelles Jahr zu lokalisieren:

```html
<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  language="de"
></add-to-calendar-button>
```

Der leere Hinweis kann außerdem über `customLabels` mit dem Schlüssel `group_overview.empty` überschrieben werden.

## Styling

Die Event-Liste verwendet einen einfachen Schwarz-Weiß-Basisstil. Sie verändert sich nicht mit der regulären `buttonStyle`-Einstellung des Add to Calendar Buttons.

Die Komponente verwendet Shadow DOM. Nutze CSS-`::part()`-Selektoren, um freigegebene Elemente zu gestalten:

```css
add-to-calendar-button::part(atcb-group-overview-year-select) {
  border-color: rebeccapurple;
}

add-to-calendar-button::part(atcb-group-overview-title) {
  color: rebeccapurple;
}

add-to-calendar-button::part(atcb-group-overview-event) {
  border-radius: 0;
}
```

Folgende Parts stehen zur Verfügung:

| Part                                | Element                                 |
| :---------------------------------- | :-------------------------------------- |
| `atcb-group-overview`               | Wurzelelement der Übersicht             |
| `atcb-group-overview-controls`      | Container der Auswahlfelder             |
| `atcb-group-overview-year-select`   | Jahresauswahl                           |
| `atcb-group-overview-month-select`  | Monatsauswahl                           |
| `atcb-group-overview-results`       | Container der gerenderten Ergebnisse    |
| `atcb-group-overview-empty`         | Hinweis für ein leeres aktuelles Jahr   |
| `atcb-group-overview-month-heading` | Monatsüberschrift im `years-only`-Modus |
| `atcb-group-overview-list`          | Container der Event-Liste               |
| `atcb-group-overview-event`         | Einzelner Event-Eintrag                 |
| `atcb-group-overview-link`          | Hauptlink oder Aktionslink des Events   |
| `atcb-group-overview-day`           | Tagesblock im `list`-Layout             |
| `atcb-group-overview-day-value`     | Numerischer Tageswert                   |
| `atcb-group-overview-title`         | Event-Titel                             |
| `atcb-group-overview-meta`          | Metadaten-Container                     |
| `atcb-group-overview-datetime`      | Zeile für Datum und Uhrzeit             |
| `atcb-group-overview-location`      | Ortszeile                               |
| `atcb-group-overview-datetime-icon` | Icon für Datum und Uhrzeit              |
| `atcb-group-overview-location-icon` | Orts-Icon                               |
| `atcb-group-overview-description`   | Event-Beschreibung                      |
| `atcb-group-overview-add`           | Plus-Marke oder Button                  |
| `atcb-group-overview-marker`        | Markierung für kompakte RSVP-Einträge   |

Nicht jeder Part existiert in jedem Layout oder jeder Konfiguration.

## Einschränkungen und Hinweise

### Wiederkehrende Events

::: warning Aktuelle Einschränkung
Wiederkehrende Events werden nicht vollständig unterstützt. Die Übersicht kann eine Wiederholung nicht zuverlässig in alle einzelnen Vorkommen auflösen. Filterung und Monatszuordnung können daher unvollständig sein.
:::

Verwende einzelne Termine oder Events mit mehreren Daten, wenn jedes Vorkommen in der Liste erscheinen muss.

### Öffentliche Daten

Die Gruppe und die zurückgegebenen Event-Daten sind öffentlich, wenn **Public Event Overview** aktiv ist. Verwende diese Funktion nicht als Zugriffskontrolle.

### Client-seitiges Rendering

Die Komponente lädt und rendert die Events im Browser. Berücksichtige die zusätzliche Anfrage bei Performance-, Content-Security-Policy- und Datenschutzprüfungen.

### Event-Details bleiben in PRO verwaltet

Die Liste ist eine Übersicht und keine zweite Event-Datenbank. Titel, Daten, Beschreibungen, Orte, Landingpages und RSVP-Konfigurationen sollten weiterhin in Add to Calendar PRO gepflegt werden.

## Vollständiges Beispiel

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>

<add-to-calendar-button
  prokey="DEIN-GRUPPEN-PROKEY"
  language="de"
  group-overview-config='{
    "years-only":false,
    "type":"cards",
    "from":"2027-01-01T00:00:00Z",
    "to":"2028-12-31T23:59:59Z",
    "no-details":false,
    "no-add":false,
    "custom-domain":"events.example.com",
    "add-via-list":true
  }'
></add-to-calendar-button>
```

Eine kürzere Implementierungsanleitung findest du unter [Eine Event-Liste auf deiner Webseite erstellen](/de/recipes/event-list).
