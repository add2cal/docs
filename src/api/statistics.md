---
title: Statistics API
description: Retrieve authenticated views, calendar-save, and current RSVP statistics for an Add to Calendar PRO event.
---

# Statistics API

The Statistics API returns event-level metrics for events that belong to the organization authorized by the API key. It provides tracked landing-page views, tracked calendar-option clicks, and a current RSVP attendance snapshot.

## Views

```http
GET /statistics/views/:prokey
```

Returns tracked visits to the event landing page. A view is not a registration, calendar save, or unique person.

Views and saves are not a unique-person funnel. In particular, do not calculate a saves-to-views conversion rate: saves may originate through channels beyond a landing-page visit.

Views and saves report only available tracking data:

- Directly shared static `.ics` files are not tracked.
- Email links and event landing pages are tracked where their tracking is available.
- Website button tracking depends on the relevant Proxy setting.
- Missing attribution is not proof of direct traffic.

### Query parameters

The views and saves routes accept the same parameters. All timestamps must be ISO-8601 UTC timestamps ending in `Z` or `+00:00`.

| Parameter | Values | Rules |
| --- | --- | --- |
| `from` | UTC ISO-8601 timestamp | Inclusive start. Must be provided together with `to`. |
| `to` | UTC ISO-8601 timestamp | Exclusive end. Must be provided together with `from`. |
| `interval` | `day`, `month`, `none` | Defaults to `day`. `none` returns totals only and no series. |
| `breakdown` | One supported dimension | Optional. Only one dimension may be requested. |

Supported view breakdowns are `country`, `referrer`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `utm_content`. The only supported save breakdown is `type`.

### Default, limits, and UTC windows

With no query parameters, the effective window is the last 30 **completed** UTC days and `interval=day`. An explicit range without `interval` also uses `day`.

- `from` is inclusive and `to` is exclusive.
- Buckets use UTC midnight for daily intervals and UTC calendar-month boundaries for monthly intervals.
- Partial boundary days and months count as buckets.
- Daily requests may contain at most 90 UTC day buckets.
- Monthly requests may contain at most 24 UTC month buckets.
- `interval=none` with no `from` or `to` explicitly requests all retained history totals. It returns no series.
- The server does not silently clip a window, change the interval, or truncate a range. An over-limit request returns `400`.

For example, `from=2026-01-01T12:00:00Z&to=2026-01-03T12:00:00Z&interval=day` is inclusive of interactions at the start and exclusive of interactions at the end. Its series buckets still align to UTC days.

### Potential response

```http
GET /statistics/views/11111111-1111-4111-8111-111111111111?from=2026-01-01T00:00:00Z&to=2026-01-03T00:00:00Z&interval=day&breakdown=country
Authorization: YOUR_API_KEY
```

```json
{
  "metric": "views",
  "definition": "Tracked visits to the event landing page.",
  "unit": "count",
  "window": {
    "from": "2026-01-01T00:00:00.000Z",
    "to": "2026-01-03T00:00:00.000Z",
    "timezone": "UTC",
    "interval": "day"
  },
  "total": 42,
  "breakdowns": [
    {
      "dimension": "country",
      "values": [{ "key": "DE", "value": 30 }, { "key": "US", "value": 12 }],
      "truncated": false,
      "returned_count": 2,
      "remaining_total": 0
    }
  ],
  "series": [
    { "start": "2026-01-01T00:00:00.000Z", "end": "2026-01-02T00:00:00.000Z", "total": 20 },
    { "start": "2026-01-02T00:00:00.000Z", "end": "2026-01-03T00:00:00.000Z", "total": 22 }
  ]
}
```

## Saves

```http
GET /statistics/saves/:prokey
```

Returns tracked calendar-option clicks. A click begins saving; it does not prove a calendar application completed a save, attendance, or a unique person.

Saves accept the same query parameters, UTC windows, and limits as Views. The only supported save breakdown is `type`.

### Potential response

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
  "breakdowns": [
    {
      "dimension": "type",
      "values": [{ "key": "google", "value": 10 }, { "key": "ical", "value": 5 }],
      "truncated": false,
      "returned_count": 2,
      "remaining_total": 0
    }
  ],
  "series": null
}
```

### Retention, freshness, and breakdown bounds

Views and saves report available tracking data. Historical retention and source freshness can vary, so interpret a zero only in its returned context, not as proof that a period is complete.

A breakdown has one dimension per request and at most 50 returned values, ordered by value descending and then key ascending. When more values exist, `truncated` is `true`, `returned_count` is `50`, and `remaining_total` is the sum of values not returned. Do not present a truncated breakdown as complete or sum incompatible breakdown dimensions.

## RSVP

```http
GET /statistics/rsvp/:prokey
```

Returns a current attendance snapshot, not a historical time series.

`GET /statistics/rsvp/:prokey` has no `from`, `to`, `interval`, or `breakdown` parameters. Supplying any of them returns `400`.

The snapshot has current counts by RSVP status, not a historical series. `entries` counts RSVP responses and `people` sums the places represented by responses. `entries` and `people` contain only `confirmed`, `undecided`, and `declined`; pending counts are in `snapshot.pending`. `snapshot.non_pending_totals` contains all three non-pending statuses.

For a non-RSVP event, the endpoint returns `404` with `RSVP statistics are not available for this event.` It does not fabricate zero attendance.

`capacity.max` and `capacity.max_per_person` expose configured RSVP limits or `null` when they are unlimited. `capacity.expired` is `true` only when a configured `capacity.expires` time is at or before the snapshot time. `capacity.occupancy.people` is confirmed + undecided + pending people and excludes declined people. With a finite maximum, `remaining` is clamped to zero and `full` reflects whether occupancy has reached it. For an unlimited maximum, `remaining` and `full` are `null`.

### Potential response

```http
GET /statistics/rsvp/11111111-1111-4111-8111-111111111111
Authorization: YOUR_API_KEY
```

```json
{
  "metric": "rsvp",
  "definition": "Current attendance snapshot.",
  "unit": "count",
  "snapshot": {
    "entries": { "confirmed": 8, "undecided": 2, "declined": 1 },
    "people": { "confirmed": 10, "undecided": 2, "declined": 1 },
    "non_pending_totals": { "entries": 11, "people": 13 },
    "pending": { "entries": 3, "people": 4 }
  },
  "capacity": {
    "max": 50,
    "max_per_person": 2,
    "expires": "2026-01-10T12:00:00.000Z",
    "expired": false,
    "occupancy": { "people": 16, "remaining": 34, "full": false }
  }
}
```

## Errors

Errors use this envelope. `details` is included when a validation error supplies machine-readable details; it is omitted for the examples below that have no details.

```json
{ "status": "error", "message": "string", "details": {} }
```

| Status | When it is returned | Example |
| --- | --- | --- |
| `400` | Invalid or unsupported parameters, a reversed or unpaired range, or a range that exceeds a cap | `{ "status": "error", "message": "Requested range exceeds the limit.", "details": { "limit": 90, "bucket_limit": 90, "requested": 91, "guidance": "Narrow the range, use month, or request interval=none." } }` |
| `401` | Missing, invalid, inactive, expired, or insufficient-scope API key | `{ "status": "error", "message": "Not authenticated." }` |
| `404` | Event is missing or not accessible to the authorized organization; RSVP statistics are unavailable for a non-RSVP event | `{ "status": "error", "message": "Event not found." }` or `{ "status": "error", "message": "RSVP statistics are not available for this event." }` |
| `503` | A statistics source is unavailable or the backend query deadline is reached | `{ "status": "error", "message": "backend_timeout" }` or `{ "status": "error", "message": "source_unavailable" }` |

A daily or monthly cap error includes `limit`, `bucket_limit`, `requested`, and `guidance`. A malformed parameter can return the same error envelope without `details`.

