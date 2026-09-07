---
title: Event List Configuration
description: Complete reference for rendering a public Add to Calendar PRO group as a configurable event list on your website.
outline: [2,3]
---

# Event List Configuration

The event list feature renders the public events of an Add to Calendar PRO group through the `<add-to-calendar-button>` web component.

Instead of rendering a button, the component loads the group's event data and builds a navigable list directly on your website.

::: tip Quick start
If you want to get a list online first, follow the step-by-step [Create an Event List on your Website recipe](/recipes/event-list).
:::

## Requirements

The feature requires all of the following:

- A valid Add to Calendar PRO group.
- The Prokey of that group.
- **Public Event Overview** enabled in the group settings.
- At least one version of the Add to Calendar Button package that supports the event list.
- Client-side JavaScript. The event data is loaded and rendered in the browser.

The component cannot confirm whether a Prokey belongs to a group. You are responsible for providing the correct group Prokey.

## Basic configuration

Provide the group Prokey. Nothing else is required:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
></add-to-calendar-button>
```

When **Public Event Overview** is active for the group, the component detects this automatically and renders the event list instead of a regular Add to Calendar button.

There is one exception: if the group is also configured as a calendar subscription, the component defaults to rendering the subscription button. In that case, explicitly set the Boolean `group-overview` attribute to render the list instead:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  group-overview
></add-to-calendar-button>
```

`group-overview` only takes effect together with a valid `prokey`. Setting it on any group that has the public event overview enabled is always safe, but only necessary in the subscription case.

Additional settings belong in the `group-overview-config` object:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  group-overview-config='{
    "type":"list",
    "years-only":false,
    "no-details":false,
    "no-add":false,
    "add-via-list":true
  }'
></add-to-calendar-button>
```

HTML object attributes must contain valid JSON. A convenient pattern is to use single quotes around the attribute and double quotes inside the JSON. Do not add comments or trailing commas.

## How data is loaded

The component requests the public events from the Add to Calendar PRO Events API. Internally, it uses:

```text
GET https://api.add-to-calendar-pro.com/v1/event/all
    ?group=YOUR-GROUP-PROKEY
    &dates=true
    &from=...
    &to=...
```

You do not need to call this endpoint yourself and you do not expose an API token. The group Prokey acts as the public identifier.

The `from` parameter is always included. The `to` parameter is only included when configured.

In development mode, the component uses the development API, development event configuration endpoint, and `dev.caldn.net` landing-page links.

## Date organization

### Default range

The default lower limit is January 1 of the previous calendar year at `00:00:00Z`.

For example, during 2027 the default is:

```text
2026-01-01T00:00:00Z
```

Events from years earlier than the previous year are not rendered.

There is no default upper limit.

### Year selection

The current year is selected initially and is always available in the year selector.

Other years only appear when at least one event is assigned to them. A year without events is omitted, except for the current year. If the current year has no events, the component shows the localized “No events this year.” message.

The component's `language` setting controls the empty message, month names, and formatted date strings.

### Month selection

In the default mode, a second selector shows the months available in the selected year. Months without events are omitted.

The current month is selected when it contains events. Otherwise, the first available month is selected.

### Start and end dates

An event appears in the month and year of its start date.

If an event starts in one year and ends in a later year, it also appears in January of the ending year. It is not repeated in every month between the start and end dates.

For multi-date events, every date returned by the group endpoint becomes its own list entry.

## Configuration reference

`group-overview-config` can contain none, some, or all of the following properties.

| Property        | Type    | Default                        | Description                                                                                                                                                                        |
| :-------------- | :------ | :----------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `years-only`    | Boolean | `false`                        | Removes the month selector and renders every event of the selected year. Month names become headings between the groups of events.                                                 |
| `type`          | String  | `list`                         | Selects the visual layout. Allowed values are `list`, `cards`, and `compact`. Invalid values fall back to `list`.                                                                  |
| `from`          | String  | January 1 of the previous year | UTC ISO datetime limiting the API request at the lower end. Values earlier than the default minimum are clamped to the default.                                                    |
| `to`            | String  | No upper limit                 | UTC ISO datetime limiting the API request at the upper end. It must not be earlier than the effective `from` value.                                                                |
| `no-details`    | Boolean | `false`                        | Prevents navigation to the event landing page. The whole event entry opens the Add to Calendar options or RSVP modal instead.                                                      |
| `no-add`        | Boolean | `false`                        | Disables all interaction. Entries are rendered as plain, non-clickable content without landing-page links, Add to Calendar actions, or RSVP modals. Overrides `no-details` and `add-via-list`. |
| `custom-domain` | String  | `caldn.net`                    | Hostname used when creating landing-page links, for example `events.example.com`. Do not include a protocol or path. The domain must already be configured in Add to Calendar PRO. |
| `add-via-list`  | Boolean | `false`                        | Adds a direct calendar-options trigger for regular events. Its exact presentation depends on `type`, `no-details`, and whether the event uses RSVP.                                |

### UTC datetime format

`from` and `to` must use a UTC ISO datetime without milliseconds:

```text
2027-01-01T00:00:00Z
```

The following values are not valid for these settings:

```text
2027-01-01
2027-01-01T00:00:00+01:00
2027-01-01T00:00:00.000Z
```

If `to` is invalid or falls before the effective `from`, the overview cannot be initialized.

## Layout types

### `list`

The list layout renders one event per row and is limited to a width of 600px.

Each entry contains:

- The start day in a dark block on the left.
- The title, clamped to two lines.
- Datetime and location on separate lines.
- The description, normalized to plain whitespace and clamped to two lines.

The whole card is the event link or action trigger.

### `cards`

The cards layout renders equal-width cards and uses the component's container width, not the viewport width.

- Below 600px: one column.
- From 600px: two columns.
- From 1000px: three columns.
- Maximum component width: 1200px.

Each card contains the datetime above the title, followed by the location and description. The title is clamped to two lines and the description to three lines.

Incomplete rows keep the same column width as complete rows.

### `compact`

The compact layout renders a minimal text list using this basic pattern:

```text
Date | Event title
```

The complete text is linked. When direct Add to Calendar actions are enabled, the plus badge becomes the list marker for regular events. RSVP entries use an aligned dot instead.

## Interaction behavior

The interaction depends on `no-add`, `no-details`, `add-via-list`, the selected layout, and whether the event uses RSVP.

With `no-add` enabled, no interaction is available at all. Entries are rendered as static content: no landing-page link, no calendar options, and no RSVP modal. `no-details` and `add-via-list` have no effect in this mode.

With `no-add` disabled (the default), the following combinations apply:

| `no-details` | `add-via-list` | Regular event                                                                                                                                  | RSVP event                                                              |
| :----------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| `false`      | `false`        | The whole entry opens the landing page.                                                                                                        | The whole entry opens the landing page and its RSVP flow.               |
| `false`      | `true`         | The whole entry opens the landing page. A separate plus badge opens the calendar options modal.                                                | The whole entry opens the landing page. No plus badge is shown.         |
| `true`       | `false`        | The whole entry opens the calendar options modal.                                                                                              | The whole entry opens the RSVP form in a modal.                         |
| `true`       | `true`         | In `list` and `cards`, the badge is a visual part of the same action link; clicking anywhere opens the modal. In `compact`, no badge is shown. | The whole entry opens the RSVP form in a modal. No plus badge is shown. |

### RSVP events

RSVP events intentionally do not receive an independent plus action. A personalized calendar file can depend on the RSVP response and belongs to the RSVP flow.

With the default settings, the event therefore opens its landing page. With `no-details` enabled, the RSVP form is forced into a modal, even if that event's style normally requests inline RSVP rendering.

## Landing pages and custom domains

Without `custom-domain`, event links use:

```text
https://caldn.net/EVENT-PROKEY
```

With a configured custom domain:

```html
group-overview-config='{"custom-domain":"events.example.com"}'
```

the initial link becomes:

```text
https://events.example.com/EVENT-PROKEY
```

The value changes the generated source link. Add to Calendar PRO may redirect to a configured custom domain anyway, but setting it here avoids exposing that redirect to technical users inspecting the page.

The custom domain must be active in Add to Calendar PRO. The web component does not configure or validate the remote domain setup.

## Language and custom labels

Use the regular `language` attribute to localize month names, date strings, and the empty-current-year message:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  language="de"
></add-to-calendar-button>
```

The empty message can also be overridden through `customLabels` using the key `group_overview.empty`.

## Styling

The event list uses a simple black-and-white base style. It does not change with the regular Add to Calendar Button `buttonStyle` setting.

The component uses Shadow DOM. Style exposed elements with CSS `::part()` selectors:

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

Available parts are:

| Part                                | Element                            |
| :---------------------------------- | :--------------------------------- |
| `atcb-group-overview`               | Root overview element              |
| `atcb-group-overview-controls`      | Selector container                 |
| `atcb-group-overview-year-select`   | Year selector                      |
| `atcb-group-overview-month-select`  | Month selector                     |
| `atcb-group-overview-results`       | Rendered results container         |
| `atcb-group-overview-empty`         | Empty-current-year message         |
| `atcb-group-overview-month-heading` | Month heading in `years-only` mode |
| `atcb-group-overview-list`          | Event list container               |
| `atcb-group-overview-event`         | Individual event entry             |
| `atcb-group-overview-link`          | Main event link or action link     |
| `atcb-group-overview-day`           | Day block in the `list` layout     |
| `atcb-group-overview-day-value`     | Numeric day value                  |
| `atcb-group-overview-title`         | Event title                        |
| `atcb-group-overview-meta`          | Metadata container                 |
| `atcb-group-overview-datetime`      | Datetime row                       |
| `atcb-group-overview-location`      | Location row                       |
| `atcb-group-overview-datetime-icon` | Datetime icon                      |
| `atcb-group-overview-location-icon` | Location icon                      |
| `atcb-group-overview-description`   | Event description                  |
| `atcb-group-overview-add`           | Plus badge or button               |
| `atcb-group-overview-marker`        | Compact RSVP marker                |

Not every part exists in every layout or configuration.

## Limitations and considerations

### Recurring events

::: warning Current limitation
Recurring events are not fully supported. The overview does not reliably expand a recurrence into all of its occurrences, so filtering and month placement can be incomplete.
:::

Use individual dates or multi-date events when every occurrence must appear in the list.

### Public data

The group and its returned event data are public when **Public Event Overview** is active. Do not use the feature as an access-control mechanism.

### Client-side rendering

The component fetches and renders the events in the browser. Account for the loading request in performance, Content Security Policy, and privacy reviews.

### Event details remain managed in PRO

The list is an overview, not a second event database. Titles, dates, descriptions, locations, landing pages, and RSVP configuration should continue to be maintained in Add to Calendar PRO.

## Complete example

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>

<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  language="en"
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

For a shorter implementation walkthrough, see [Create an Event List on your Website](/recipes/event-list).
