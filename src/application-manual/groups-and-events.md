---
outline: [2,3]
---

# Groups and Events

An **event group** acts as a container for one or multiple **events**.
They are the core of everything.

Both can be found via the "Events" link at the menu.

At the overview page, you can easily switch between the two hierarchical levels via the respective toggle button.

[Open in the app ❯](https://app.add-to-calendar-pro.com/)

## The event group

It can be used for structuring and organize all of your data, or to link to an external calendar instead of individual events.
The latter one creates a button, which will trigger a **subscription** to this calendar. In this case, styles and CTAs can be directly connected to the group.

### Creation

The creation is quite simple, as you do not need to define a lot of information - especially when you go for the non-subscription case.

You can use the **internal note** field for some custom information. This has no impact on anything, but can help to identify the purpose of the group, when working in a team.

When you go for a subscription case, you will have the chance to link the group to a **style** as well as to an **Call to Action** element. For visualization, you will also see a preview of the result.

[Open in the app ❯](https://app.add-to-calendar-pro.com/create-group)

### Detail page

At the detail page of an event group, you will see all connected events in a table. This way, a group also can be used to get a filtered overview for specific events.

::: warning Mind!
Once a group has events attached, you can no longer change this, since it changes the core behavior of the group.
:::

In the subscription case, you won't see this table, but the style and CTA inputs, which you already know from the creation.

At the very top, you either only see the ProKey to copy (non-subscription case) or a complete summary with everything you need for sharing and integration purposes. From email links to your auto-created landingpage and more. Here, you also find the link to the **analytics** dashboard for this event group.

## The event

An **event** is defined by its date, location, and other details. It is the core data element for everything you want to do at Add to Calendar PRO.

It can be one all-day event, a recurring one, or even multiple dates if you want to create a small event series. Besides that, you can define event more details (like setting a specific time zone).

You can connect styles, RSVPs, and CTAs with your event to active respective functionalities.

### Creation

A new event can be created via the overview page or a respective event group detail page.

At the beginning you define the nature of your event.
This is mainly about the following:

* **RSVP**: Whether you want to use the event with an RSVP form or not
* **Event Distribution**: When using it as RSVP, whether you want to have the event (its date and details) to be distributed to the user or whether you only want a simple sign-up form (where you would not want to display the underlying event details).
* **Add to Calendar Button**: Whether you want to create an Add to Calendar Button for the event. When you also go RSVP, this will also affect whether we show such a button after the user signed up.
* **Call to Action (CTA)**: Whether you want a CTA screen to show up after the user saved an event via the Add to Calendar Button.

Next, you define the date(s).
This should be quite straightforward.

You can create multiple date blocks to make it a multi-date event (e.g. if the event has 2 parts) or create some recurrence logic.

Finally, depending on what you specified before, you can define a style, RSVP form, and CTA element for the event.

In all cases, you can always check the result at the dynamic preview.

[Open in the app ❯](https://app.add-to-calendar-pro.com/group/create-group/create-event)

### Detail page

Once created, you can always update the event on the detail page.
There, you basically find the same structure as on creation.

At the very top, you find a complete summary with everything you need for sharing and integration purposes. From email links to your auto-created landingpage and more. Here, you also find the link to the [analytics](/application-manual/analytics.html) dashboard for this event. This would be the overview of RSVP sign-ups in the RSVP case or analytics about when and how often people saved an event to their calendars (in the non-RSVP case).

Also at the top, you have the option to set an event to private. 
This will block the auto-generation of a landingpage and ics file, but will still allow you to generate ics files via API or use a button with [dynamic date properties in WordPress](/integration/wordpress.html#dynamic-connections).

::: warning Mind Auto-Adjustments
Depending on what you select as well as different cases on the user side, we automatically adjust some details. For example, when you create a recurring event, some calendar types will not show up, as not all do support this feature (in an Add to Calendar Button scope).
:::
