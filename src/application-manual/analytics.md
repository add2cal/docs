---
outline: [2,3]
---

# Tracking events being saved to calendars

For regular events, we track when users save them to their calendars.

::: warning To be more precise...
We track the initiation of the save process via clicks at the landing page, from email direct links, and from Add to Calendar Buttons with active Proxy option. The actual save can not be tracked, since it happens in the calendar app.
:::

We also only do this for regular events, not for RSVP setups. In the RSVP case, we show the replies instead (enough tracking needed).

You will get to those statistics via the respective event - either at the event overview page or at an event's detail page (at the very top via the `statistic` button).

At this analytics page, you can see the number of saves per calendar provider for a specific time span. You can easily change the time you want to check data for, switch between different visualization types and hover the graphics to get more information.

When we are looking at a multi-date-event, where the user needs to save multiple events, those events are split up with a number suffix - like `google-2` for the second date, saved with the Google Calendar option.