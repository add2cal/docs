---
title: Create a Public Event List
description: Publish a group’s events as a website list, choose how visitors open events, and keep the list current from the PRO app.
outline: [2,3]
---

# Create a Public Event List

A public event list shows several events from one group on your website. Visitors can browse dates and open an event's details or registration form.

This is different from the **Events** overview inside the app, which is for your team.

## Prepare the group

1. Open **Events**, switch to **Groups**, and select the group you want to display.
2. Make sure it contains the events your audience should see.
3. Publish the intended events and check that they are public.
4. Enable **Public event list** in the group's sharing summary.
5. Copy the **group ProKey** from that summary.

Choose a group dedicated to the content you want to publish. Enabling the public list makes its eligible event information available to visitors; it is not a private team view.

## Put the list on your website

Give your website team the group ProKey and the [event-list integration guide](/integration/event-list). The app's **Integration** action also provides the relevant starting snippet.

For a regular group with the public event list enabled, integrating the group displays the list automatically. For a group that also offers a calendar subscription, the integration must explicitly request the overview; otherwise visitors see a subscription button.

You can maintain event titles, descriptions, locations, and dates in PRO after the website setup is complete.

## Choose the visitor experience

Your website team can configure three layouts:

| Layout | Best for |
| :--- | :--- |
| **List** | A readable overview with dates and short details. |
| **Cards** | A wider page where events should be visually separated. |
| **Compact** | A short schedule with date and title. |

By default, clicking an event opens its landing page. The integration can instead open calendar options or the RSVP form directly, or show entries without interaction.

RSVP events follow the registration flow; they do not have the separate quick-add action used by ordinary calendar events.

## Check the published list

Open the website as a visitor. Switch between the available years and months, open an ordinary event, and try an RSVP event if the group contains one.

If an event is missing, check its group, publication/privacy settings, and dates. The default list starts at January 1 of the previous year; older years are not shown. Additional date limits may have been set by your website team.

Multi-date events produce separate list entries. Recurring events are not reliably expanded into every occurrence in this list. Use separate dates or events when every session must appear.

For layout options, date filtering, and visual customization, refer your website team to [Event List Configuration](/integration/event-list).
