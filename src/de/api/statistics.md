---
title: Statistik-API
description: Rufe authentifizierte Aufrufe, Kalender-Klicks und den aktuellen RSVP-Stand für ein Add to Calendar PRO Event ab.
---

# Statistik-API

Die Statistik-API liefert Event-Metriken für Events der durch den API-Key autorisierten Organisation. Sie stellt getrackte Landingpage-Aufrufe, getrackte Klicks auf Kalenderoptionen und einen aktuellen RSVP-Stand bereit.

Basis-URL: `https://api.add-to-calendar-pro.com/v1`

::: warning Verfügbarkeit
Diese Endpunkte sind erst nach dem zugehörigen Backend-Release verfügbar. Verlasse dich nicht vor der Release-Ankündigung auf sie.
:::

## Authentifizierung und Zugriff

Sende bei jeder Anfrage einen API-Key im `Authorization`-Header:

```http
Authorization: YOUR_API_KEY
```

Ein **Read**- oder **Read & Write**-Key wird akzeptiert. Ein **Write**-only-Key wird mit `401` abgewiesen. Fehlende, ungültige, inaktive oder abgelaufene Keys werden ebenfalls mit `401` abgewiesen. Ein Ablaufdatum ist optional: Ein Key ohne konfiguriertes Ablaufdatum oder mit `null` als Ablaufdatum bleibt gültig, wenn Status, Read-Scope und Organisationsautorisierung gültig sind. Ein konfiguriertes Ablaufdatum zum oder vor dem Anfragezeitpunkt wird abgewiesen.

Die Response verrät nicht, ob ein `prokey` einer anderen Organisation gehört: Fehlende und nicht zugängliche Events liefern beide `404`.

Alle Statistik-Responses verwenden `Cache-Control: private, no-store` und unterliegen dem bestehenden API Rate Limit.

## Routen und Metriken

| Route | Metrik | Definition |
| --- | --- | --- |
| `GET /statistics/views/:prokey` | `views` | Getrackte Besuche der Event-Landingpage. Ein Aufruf ist keine Anmeldung, kein Kalender-Save und keine eindeutige Person. |
| `GET /statistics/saves/:prokey` | `saves` | Getrackte Klicks auf Kalenderoptionen. Ein Klick startet den Save-Vorgang, beweist aber keinen abgeschlossenen Save im Kalender, keine Teilnahme und keine eindeutige Person. |
| `GET /statistics/rsvp/:prokey` | `rsvp` | Aktueller Teilnehmerstand. Keine historische Zeitreihe. |

Views und Saves sind kein Unique-Person-Funnel. Berechne insbesondere keine Saves-zu-Views-Conversion: Saves können aus Kanälen außerhalb eines Landingpage-Besuchs stammen.

### Tracking-Grenzen

Views und Saves enthalten nur verfügbare Tracking-Daten:

- Direkt geteilte statische `.ics`-Dateien werden nicht getrackt.
- E-Mail-Links und Event-Landingpages werden getrackt, soweit Tracking verfügbar ist.
- Das Tracking von Website-Buttons hängt von der relevanten Proxy-Einstellung ab.
- Fehlende Attribution beweist keinen direkten Traffic.

## Query-Parameter für Views und Saves

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

## Views-Response

```http
GET /statistics/views/11111111-1111-4111-8111-111111111111?from=2026-01-01T00:00:00Z&to=2026-01-03T00:00:00Z&interval=day&breakdown=country
Authorization: YOUR_API_KEY
```

```json
{
  "prokey": "11111111-1111-4111-8111-111111111111",
  "metric": "views",
  "definition": "Tracked visits to the event landing page.",
  "unit": "count",
  "state": "available",
  "generated_at": "2026-01-03T12:00:00.000Z",
  "source_freshness": null,
  "window": { "from": "2026-01-01T00:00:00.000Z", "to": "2026-01-03T00:00:00.000Z", "timezone": "UTC", "interval": "day" },
  "coverage": { "earliest_available": null, "latest_available": null, "retention_known": false, "completeness": "unknown" },
  "totals": { "value": 42 },
  "breakdowns": [{ "dimension": "country", "values": [{ "key": "DE", "value": 30 }, { "key": "US", "value": 12 }], "truncated": false, "returned_count": 2, "remaining_total": 0 }],
  "series": [{ "bucket_start": "2026-01-01T00:00:00.000Z", "bucket_end": "2026-01-02T00:00:00.000Z", "value": 20 }, { "bucket_start": "2026-01-02T00:00:00.000Z", "bucket_end": "2026-01-03T00:00:00.000Z", "value": 22 }]
}
```

## Saves-Response

```http
GET /statistics/saves/11111111-1111-4111-8111-111111111111?interval=none&breakdown=type
Authorization: YOUR_API_KEY
```

```json
{
  "prokey": "11111111-1111-4111-8111-111111111111",
  "metric": "saves",
  "definition": "Tracked calendar-option clicks.",
  "unit": "count",
  "state": "available",
  "generated_at": "2026-01-03T12:00:00.000Z",
  "source_freshness": null,
  "window": { "from": null, "to": null, "timezone": "UTC", "interval": "none" },
  "coverage": { "earliest_available": null, "latest_available": null, "retention_known": false, "completeness": "unknown" },
  "totals": { "value": 15 },
  "breakdowns": [{ "dimension": "type", "values": [{ "key": "google", "value": 10 }, { "key": "ical", "value": 5 }], "truncated": false, "returned_count": 2, "remaining_total": 0 }],
  "series": null
}
```

### Coverage, Freshness und Breakdown-Grenzen

`generated_at` ist der Zeitpunkt der Response-Erstellung. `source_freshness` ist aktuell `null`; behandle `generated_at` nicht als Zeitpunkt einer Quellaktualisierung.

Historische Retention und Vollständigkeit sind über diese API nicht verifiziert. Views und Saves liefern daher `coverage.retention_known: false` und `coverage.completeness: "unknown"`; `earliest_available` und `latest_available` sind `null`. Eine Null darf nur im zurückgegebenen Kontext interpretiert werden, nicht als Beweis für einen vollständigen Zeitraum.

Ein Breakdown enthält eine Dimension pro Anfrage und maximal 50 Werte, absteigend nach Wert sortiert. Bei weiteren Werten ist `truncated` auf `true`, `returned_count` auf `50` und `remaining_total` ist die Summe nicht zurückgegebener Werte. Stelle einen gekürzten Breakdown nicht als vollständig dar und summiere keine inkompatiblen Breakdown-Dimensionen.

## RSVP-Snapshot

`GET /statistics/rsvp/:prokey` hat keine `from`-, `to`-, `interval`- oder `breakdown`-Parameter. Jeder dieser Parameter führt zu `400`.

Der Snapshot enthält aktuelle Zählungen je RSVP-Status, keine historische Zeitreihe. `entries` zählt RSVP-Antworten. `people` summiert die durch Antworten repräsentierten Plätze. Pending-Werte bleiben getrennt von `non_pending_total_entries` und `non_pending_total_people`.

Für ein Nicht-RSVP-Event liefert der Endpunkt `state: "not_applicable"`, `snapshot: null` und `capacity: null`. Er erfindet keine Null-Teilnahme.

`capacity.max` und `capacity.max_per_person` zeigen konfigurierte RSVP-Limits, wenn vorhanden. `capacity.expired` ist nur `true`, wenn ein konfiguriertes `capacity.expires` zum oder vor dem Snapshot-Zeitpunkt liegt. Fehlende, `null`- oder zukünftige Ablaufzeiten liefern `false`. Die API berechnet weder Auslastungsprozente noch verbleibende Plätze.

```http
GET /statistics/rsvp/11111111-1111-4111-8111-111111111111
Authorization: YOUR_API_KEY
```

```json
{
  "prokey": "11111111-1111-4111-8111-111111111111",
  "metric": "rsvp",
  "definition": "Current attendance snapshot.",
  "unit": "count",
  "state": "available",
  "generated_at": "2026-01-03T12:00:00.000Z",
  "source_freshness": null,
  "snapshot": { "entries": { "confirmed": 8, "undecided": 2, "declined": 1, "pending": 3 }, "people": { "confirmed": 10, "undecided": 2, "declined": 1, "pending": 4 }, "non_pending_total_entries": 11, "non_pending_total_people": 13, "pending_entries": 3, "pending_people": 4 },
  "capacity": { "max": 50, "max_per_person": 2, "expires": "2026-01-10T12:00:00.000Z", "expired": false }
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
| `404` | Event fehlt oder ist für die autorisierte Organisation nicht zugänglich | `{ "status": "error", "message": "Event not found." }` |
| `503` | Statistikquelle nicht verfügbar oder Backend-Query-Deadline erreicht | `{ "status": "error", "message": "backend_timeout" }` oder `{ "status": "error", "message": "source_unavailable" }` |

Ein Daily- oder Monthly-Cap-Fehler enthält `limit`, `bucket_limit`, `requested` und `guidance`. Ein malformed Parameter kann das gleiche Envelope ohne `details` liefern.

## Reporting-Rezept für Agents

1. Ermittle autorisierte Events über die bestehenden Event-List-Endpunkte. Beachte deren Paginierung, bevor du einen `prokey` auswählst.
2. Rufe für ein gewähltes Event Views und Saves mit identischem explizitem `from`-, `to`- und `interval`-Fenster ab. RSVP wird getrennt als aktueller Snapshot abgerufen.
3. Verwende für längere Views- oder Saves-Serien nicht überlappende begrenzte Fenster und bewahre die Coverage-Metadaten jeder Response. Summiere weder RSVP-Snapshots über mehrere Anfragen noch inkompatible Dimensionen oder Metriktypen.
4. Vergleiche nur gleichartige Messwerte. Leite keinen Unique-Person-Funnel aus Views, Saves oder RSVP ab. Berichte Tracking-Lücken, `retention_known: false`, `completeness: "unknown"`, Trunkierung, nicht verfügbare Quellen und weitere Datenlücken ehrlich.

Diese Beispiele enthalten keine Live-Credentials. Die Kandidatenvalidierung erfolgt nur durch einen backendverwalteten Non-Production-Runner mit Read-only-Key und autorisierten Fixtures.
