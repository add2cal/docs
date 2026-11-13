---
title: Statistik-API
description: Rufe authentifizierte Aufrufe, Kalender-Klicks und den aktuellen RSVP-Stand für ein Add to Calendar PRO Event ab.
---

# Statistik-API

Die Statistik-API liefert Event-Metriken für Events der durch den API-Key autorisierten Organisation. Sie stellt getrackte Landingpage-Aufrufe, getrackte Klicks auf Kalenderoptionen und einen aktuellen RSVP-Stand bereit.

## Views

```http
GET /statistics/views/:prokey
```

Liefert getrackte Besuche der Event-Landingpage. Ein Aufruf ist keine Anmeldung, kein Kalender-Save und keine eindeutige Person.

Views und Saves sind kein Unique-Person-Funnel. Berechne insbesondere keine Saves-zu-Views-Conversion: Saves können aus Kanälen außerhalb eines Landingpage-Besuchs stammen.

Views und Saves enthalten nur verfügbare Tracking-Daten:

- Direkt geteilte statische `.ics`-Dateien werden nicht getrackt.
- E-Mail-Links und Event-Landingpages werden getrackt, soweit Tracking verfügbar ist.
- Das Tracking von Website-Buttons hängt von der relevanten Proxy-Einstellung ab.
- Fehlende Attribution beweist keinen direkten Traffic.

### Query-Parameter

Views- und Saves-Routen akzeptieren dieselben Parameter. Alle Zeitstempel müssen ISO-8601 UTC sein und mit `Z` oder `+00:00` enden.

| Parameter | Werte | Regeln |
| --- | --- | --- |
| `from` | UTC ISO-8601 Zeitstempel | Inklusiver Start. Muss zusammen mit `to` angegeben werden. |
| `to` | UTC ISO-8601 Zeitstempel | Exklusives Ende. Muss zusammen mit `from` angegeben werden. |
| `interval` | `day`, `month`, `none` | Standard ist `day`. `none` liefert nur Totals und keine Zeitreihe. |
| `breakdown` | Eine unterstützte Dimension | Optional. Pro Anfrage ist nur eine Dimension erlaubt. |

Unterstützte View-Breakdowns sind `country`, `referrer`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` und `utm_content`. Der einzige unterstützte Saves-Breakdown ist `type`.

### Standard, Limits und UTC-Fenster

Ohne Query-Parameter ist das effektive Fenster die letzten 30 **abgeschlossenen** UTC-Tage mit `interval=day`. Ein explizites Fenster ohne `interval` verwendet ebenfalls `day`.

- `from` ist inklusiv, `to` ist exklusiv.
- Buckets verwenden UTC-Mitternacht für tägliche Intervalle und UTC-Kalendermonatsgrenzen für monatliche Intervalle.
- Teilweise Randtage und -monate zählen als Buckets.
- Tägliche Anfragen dürfen maximal 90 UTC-Tages-Buckets enthalten.
- Monatliche Anfragen dürfen maximal 24 UTC-Monats-Buckets enthalten.
- `interval=none` ohne `from` oder `to` fordert explizit Totals für die gesamte vorgehaltene Historie an und liefert keine Zeitreihe.
- Der Server kürzt kein Fenster stillschweigend, ändert kein Intervall und beschneidet keinen Bereich. Eine Anfrage über dem Limit liefert `400`.

Beispiel: `from=2026-01-01T12:00:00Z&to=2026-01-03T12:00:00Z&interval=day` schließt Interaktionen am Start ein und am Ende aus. Die Series-Buckets bleiben dennoch an UTC-Tagen ausgerichtet.

### Mögliche Response

```http
GET /statistics/views/11111111-1111-4111-8111-111111111111?from=2026-01-01T00:00:00Z&to=2026-01-03T00:00:00Z&interval=day&breakdown=country
Authorization: YOUR_API_KEY
```

```json
{
  "metric": "views",
  "definition": "Tracked visits to the event landing page.",
  "unit": "count",
  "window": { "from": "2026-01-01T00:00:00.000Z", "to": "2026-01-03T00:00:00.000Z", "timezone": "UTC", "interval": "day" },
  "total": 42,
  "breakdowns": [{ "dimension": "country", "values": [{ "key": "DE", "value": 30 }, { "key": "US", "value": 12 }], "truncated": false, "returned_count": 2, "remaining_total": 0 }],
  "series": [{ "start": "2026-01-01T00:00:00.000Z", "end": "2026-01-02T00:00:00.000Z", "total": 20 }, { "start": "2026-01-02T00:00:00.000Z", "end": "2026-01-03T00:00:00.000Z", "total": 22 }]
}
```

## Saves

```http
GET /statistics/saves/:prokey
```

Liefert getrackte Klicks auf Kalenderoptionen. Ein Klick startet den Save-Vorgang, beweist aber keinen abgeschlossenen Save im Kalender, keine Teilnahme und keine eindeutige Person.

Saves akzeptieren dieselben Query-Parameter, UTC-Fenster und Limits wie Views. Der einzige unterstützte Saves-Breakdown ist `type`.

### Mögliche Response

```http
GET /statistics/saves/11111111-1111-4111-8111-111111111111?interval=none&breakdown=type
Authorization: YOUR_API_KEY
```

```json
{
  "metric": "saves",
  "definition": "Tracked calendar-option clicks.",
  "unit": "count",
  "window": { "from": null, "to": null, "timezone": "UTC", "interval": "none" },
  "total": 15,
  "breakdowns": [{ "dimension": "type", "values": [{ "key": "google", "value": 10 }, { "key": "ical", "value": 5 }], "truncated": false, "returned_count": 2, "remaining_total": 0 }],
  "series": null
}
```

### Retention, Freshness und Breakdown-Grenzen

Views und Saves enthalten verfügbare Tracking-Daten. Historische Retention und Quell-Freshness können variieren. Interpretiere eine Null daher nur im zurückgegebenen Kontext, nicht als Beweis für einen vollständigen Zeitraum.

Ein Breakdown enthält eine Dimension pro Anfrage und maximal 50 Werte, absteigend nach Wert und anschließend aufsteigend nach Key sortiert. Bei weiteren Werten ist `truncated` auf `true`, `returned_count` auf `50` und `remaining_total` ist die Summe nicht zurückgegebener Werte. Stelle einen gekürzten Breakdown nicht als vollständig dar und summiere keine inkompatiblen Breakdown-Dimensionen.

## RSVP

```http
GET /statistics/rsvp/:prokey
```

Liefert einen aktuellen Teilnehmerstand, keine historische Zeitreihe.

`GET /statistics/rsvp/:prokey` hat keine `from`-, `to`-, `interval`- oder `breakdown`-Parameter. Jeder dieser Parameter führt zu `400`.

Der Snapshot enthält aktuelle Zählungen je RSVP-Status, keine historische Zeitreihe. `entries` zählt RSVP-Antworten und `people` summiert die durch Antworten repräsentierten Plätze. `entries` und `people` enthalten nur `confirmed`, `undecided` und `declined`; Pending-Werte stehen unter `snapshot.pending`. `snapshot.non_pending_totals` enthält alle drei nicht-pending Status.

Für ein Nicht-RSVP-Event liefert der Endpunkt `404` mit `RSVP statistics are not available for this event.` Er erfindet keine Null-Teilnahme.

`capacity.max` und `capacity.max_per_person` zeigen konfigurierte RSVP-Limits oder bei unbegrenzter Kapazität `null`. `capacity.expired` ist nur `true`, wenn ein konfiguriertes `capacity.expires` zum oder vor dem Snapshot-Zeitpunkt liegt. `capacity.occupancy.people` ist die Summe bestätigter, unentschiedener und pending Personen und schließt abgelehnte Personen aus. Bei einem endlichen Maximum wird `remaining` bei null gedeckelt und `full` zeigt, ob die Belegung das Maximum erreicht. Bei unbegrenztem Maximum sind `remaining` und `full` `null`.

### Mögliche Response

```http
GET /statistics/rsvp/11111111-1111-4111-8111-111111111111
Authorization: YOUR_API_KEY
```

```json
{
  "metric": "rsvp",
  "definition": "Current attendance snapshot.",
  "unit": "count",
  "snapshot": { "entries": { "confirmed": 8, "undecided": 2, "declined": 1 }, "people": { "confirmed": 10, "undecided": 2, "declined": 1 }, "non_pending_totals": { "entries": 11, "people": 13 }, "pending": { "entries": 3, "people": 4 } },
  "capacity": { "max": 50, "max_per_person": 2, "expires": "2026-01-10T12:00:00.000Z", "expired": false, "occupancy": { "people": 16, "remaining": 34, "full": false } }
}
```

## Fehler

Fehler verwenden dieses Envelope. `details` wird nur eingeschlossen, wenn ein Validierungsfehler maschinenlesbare Details liefert; in den Beispielen ohne Details fehlt das Feld.

```json
{ "status": "error", "message": "string", "details": {} }
```

| Status | Wann | Beispiel |
| --- | --- | --- |
| `400` | Ungültige oder nicht unterstützte Parameter, umgekehrte oder ungepaarte Range oder Limitüberschreitung | `{ "status": "error", "message": "Requested range exceeds the limit.", "details": { "limit": 90, "bucket_limit": 90, "requested": 91, "guidance": "Narrow the range, use month, or request interval=none." } }` |
| `401` | Fehlender, ungültiger, inaktiver, abgelaufener oder unzureichend berechtigter API-Key | `{ "status": "error", "message": "Not authenticated." }` |
| `404` | Event fehlt oder ist für die autorisierte Organisation nicht zugänglich; RSVP-Statistiken sind für ein Nicht-RSVP-Event nicht verfügbar | `{ "status": "error", "message": "Event not found." }` oder `{ "status": "error", "message": "RSVP statistics are not available for this event." }` |
| `503` | Statistikquelle nicht verfügbar oder Backend-Query-Deadline erreicht | `{ "status": "error", "message": "backend_timeout" }` oder `{ "status": "error", "message": "source_unavailable" }` |

Ein Daily- oder Monthly-Cap-Fehler enthält `limit`, `bucket_limit`, `requested` und `guidance`. Ein malformed Parameter kann das gleiche Envelope ohne `details` liefern.
