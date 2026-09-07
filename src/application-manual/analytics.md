---
title: Understand Event Analytics
description: Read calendar save clicks, landing page views, date ranges, and campaign information in Add to Calendar PRO analytics.
outline: [2,3]
---

# Understand Event Analytics

Use **Statistic** to understand how people interact with a shared event. For RSVP attendance, use the separate [RSVP Answers dashboard](/application-manual/managing-rsvp).

## Open the report

1. Find the event in **Events**.
2. Open its **Statistic** action from the overview or the event summary.
3. Choose a **Timespan**, such as the last 7, 30, or 90 days, or a custom range.
4. Choose whether to group the results by days or months where available.
5. Hover over a chart to inspect individual values.

Subscription groups also have a statistics view. Check the event or group name before comparing results so you are looking at the intended sharing item.

## What a save means

**Saves** measures the start of the calendar-saving process: a click on a calendar option. It does **not** confirm that the person completed the final save inside their calendar app.

Tracked entry points include the landing page, provided email links, and website buttons using a style with **Proxy** enabled. A directly shared `.ics` file does not provide this tracking.

Calendar providers appear separately so you can see which options people choose. In a multi-date event, a suffix such as `google-2` identifies the second date's Google Calendar action. Do not treat these separate actions as a count of unique attendees.

## Read landing page views

**Landing Page Views** shows visits to the hosted page. The report also offers country, referrer, and campaign information when available.

A view is not a registration or a calendar save. One person may visit more than once. Some visitors arrive without a usable referrer or campaign tag, so an empty source does not automatically indicate a tracking fault.

## Compare campaigns with UTM tags

Add campaign tags to the landing page link you share. For example:

```text
https://caldn.net/YOUR-PROKEY?utm_source=newsletter&utm_medium=email&utm_campaign=autumn-workshop
```

Use consistent names so campaigns remain easy to compare. Supported fields are `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, and `utm_content`. When a link already contains `?`, add another parameter with `&`.

Use campaign names rather than personal details in these URLs. The report helps compare traffic sources; it is not an attendee identification tool.

## If the numbers look wrong

Check the selected time range and whether you opened the correct event or group. For missing website-button saves, check the **Proxy** setting in the event's published style. Then make a test click through the same link your audience uses.

For confirmed attendance and downloadable guest lists, use [Manage RSVP responses](/application-manual/managing-rsvp). For more website interaction tracking, ask your website team to use the Button's tracking options rather than interpreting a save click as attendance.
