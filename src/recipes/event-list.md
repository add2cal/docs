---
title: Create an Event List on your Website
description: Build a public, automatically updated event list from an Add to Calendar PRO group and integrate it into your website.
outline: [2,3]
---

# Create an Event List on your Website

You can use the Add to Calendar Button web component to turn an Add to Calendar PRO group into a public event list.

The list is generated automatically from the events in that group. It includes year and month navigation, links to the individual event landing pages, and optional Add to Calendar actions.

::: tip Looking for all settings?
This recipe focuses on getting the list online. See the [Event List reference](/integration/event-list) for every configuration option, layout behavior, interaction rule, limitation, and CSS part.
:::

## 1. Prepare an event group

Open Add to Calendar PRO and create a group, or select an existing one.

Add all events that should appear in the list to this group. The list updates from the group data, so you do not need to maintain the events a second time in your website code.

## 2. Enable the public event overview

Enable **Public Event Overview** in the group settings.

The web component can only load the group if this setting is active.

::: warning Public means public
The event list is loaded in the visitor's browser. Do not enable the public overview for a group whose event information should remain private.
:::

## 3. Copy the group Prokey

Copy the Prokey shown for the group.

Make sure you use the **group Prokey**, not the Prokey of an individual event. The script cannot verify that distinction for you.

## 4. Load the Add to Calendar Button script

If the Add to Calendar Button is not already part of your website, load it from the CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
```

You can also install and import the npm package. See the [integration guides](/integration) for instructions for your tech stack.

## 5. Add the event list

Place the web component where the list should appear:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
></add-to-calendar-button>
```

That is the complete minimum setup. Because **Public Event Overview** is active for the group, the component automatically renders the event list.

::: tip Group is also a calendar subscription?
If the same group is additionally configured as a calendar subscription, the component defaults to the subscription button. Add the `group-overview` attribute to render the list instead:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  group-overview
></add-to-calendar-button>
```
:::

Instead of rendering a regular Add to Calendar button, the component now:

1. Loads the public events belonging to the group.
2. Selects the current year.
3. Offers only years and months that are relevant to the available events.
4. Renders the events using the default `list` layout.

## 6. Choose a layout

Use `group-overview-config` to configure the list. The value must be valid JSON.

Wrap the HTML attribute in single quotes, so the JSON keys and string values can use the required double quotes:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  group-overview-config='{"type":"cards"}'
></add-to-calendar-button>
```

Available layouts are:

- `list` - one detailed event per row. This is the default.
- `cards` - a responsive card layout with one, two, or three columns depending on the component's available width.
- `compact` - a minimal list containing the date and event title.

## 7. Choose what happens on click

By default, the whole event entry links to the event's Add to Calendar PRO landing page in a new tab.

This is the recommended flow, especially for RSVP events, because the landing page can show the complete event information and RSVP form.

If you do not want to use the landing page, set `no-details` to `true`. The whole entry will then open the Add to Calendar options or RSVP form in a modal:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  group-overview-config='{"no-details":true}'
></add-to-calendar-button>
```

If the list should be purely informational, set `no-add` to `true` instead. Entries are then rendered as static content without any click interaction - no landing-page link, no calendar options, and no RSVP modal:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  group-overview-config='{"no-add":true}'
></add-to-calendar-button>
```

`no-add` overrides `no-details` and `add-via-list`.

## 8. Optionally add direct Add to Calendar actions

Set `add-via-list` to `true` to show a small plus badge for regular events:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  group-overview-config='{"add-via-list":true}'
></add-to-calendar-button>
```

When `no-details` is `false`, the event entry still opens the landing page, while the plus badge opens the calendar options modal.

RSVP events do not receive a plus badge. Their RSVP flow remains on the landing page. If `no-details` is `true`, clicking the event opens the RSVP form in a modal instead.

::: tip Compact layout
In the compact layout, the plus badge takes the place of the normal list marker. RSVP entries use a simple dot so mixed lists remain aligned. With `no-details` enabled, compact entries use normal list markers and do not show plus badges.
:::

## 9. Optional complete example

The following example renders responsive cards, shows all months of the selected year at once, adds direct calendar actions for regular events, and uses a custom landing-page domain:

```html
<add-to-calendar-button
  prokey="YOUR-GROUP-PROKEY"
  language="en"
  group-overview-config='{
    "type":"cards",
    "years-only":true,
    "add-via-list":true,
    "custom-domain":"events.example.com"
  }'
></add-to-calendar-button>
```

The custom domain must already be configured and active in Add to Calendar PRO. Enter only the hostname, without `https://` and without a path.

## 10. Test the result

Check the following before publishing:

- The group Prokey is used instead of an event Prokey.
- **Public Event Overview** is enabled for the group.
- Every expected event belongs to the group and is published.
- Year and month navigation show the expected dates.
- Landing-page links open the correct event.
- Regular plus badges open the calendar options modal.
- RSVP events open the landing page, or the RSVP modal when `no-details` is enabled.
- The layout works at the actual width of the component's container, not only at full-screen width.

## Limitations

::: warning Recurring events
Recurring events are currently not fully supported by the event list. The list does not reliably expand and place every recurrence. Use individual, non-recurring dates when the overview must show every occurrence.
:::

Events are assigned to the month and year of their start date. If an event spans into a later year, it is also represented in January of the year in which it ends.

For the full date logic, all configuration fields, styling hooks, and interaction combinations, continue with the [Event List reference](/integration/event-list).
