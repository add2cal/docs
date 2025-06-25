---
outline: [2,3]
---

# Elements to discover

At Add to Calendar PRO, we think of the different elements of event sharing and RSVP as building blocks.

That makes it easier to re-use specific things, keep it organized, and reduce maintenance effort on your side.

The hierarchy looks likes this:


```
└─ Event Group
   └─ Event
      ├─ RSVP template *(optional)*
      |  └─ Email template per RSVP email type *(optional)*
      ├─ CTA template *(optional)*
      ├─ Style *(optional)*
      └─ Landing page template *(optional)*
```

You will face this hierarchy during the creation of element. Still, within the app, they are organized a little different, in order to make them easily accessible - see the main navigation (Events - Styles - Templates).

*Styles, CTA-, and landing page templates can be also related to a group, if the group is set up as subscription.*

Webhooks, Team, and Settings are additional elements, which are described here as well.

## Events

::: tip Events are the core.
Generally speaking, it is all about events.
:::

They are the core of everything you build with Add to Calendar PRO. This might be obvious for Add to Calendar Buttons, but also an RSVP always sits on top of an event (even in edge cases, where there is no specific date).

**You should always start with creating one of them first!**

*(Except for the case, where you want to offer a calendar subscription with an external calendar. Since the event are basically outside of our system, you would directly start with an event group.)*

[Learn more &raquo;](/application-manual/groups-and-events#events)

## Groups

**An event group basically is a container for events.**

It can be used for structuring and organize all of your data, or to link to an external calendar instead of individual events. When creating a new event, you will be asked to specify a group to place it in (or to create a new group).

[Learn more &raquo;](/application-manual/groups-and-events#groups)

## Styles

[Styles](/application-manual/styles-and-templates#styles) define the look and feel of all public elements.

They can be created directly when creating a new event.

You can also create them independently within the "Styles" section.
All events you create, can be linked to an event with just one click. This makes it easy to use the same style for multiple buttons or forms, without the need to define them over and over again.

*Bascially, "Styles" are also templates. We differentiate, because they play a more vital role, but that's all.*

::: info Mind that there are some exceptions.
Landing pages and RSVP emails are also partly styled within the respective template blocks and not only by the *style*!
:::

## Templates

Similar to the "Styles", all other elements are also built as template blocks.
This means, that you can re-use them for multiple events. **They are also actively connected, which means that changing a template (or style) will directly affect any linked event!**

All templates can also be directly created during event creation, but their central home is the respective section in the app.

### RSVP

An [RSVP template](/application-manual/styles-and-templates#rsvp) defines RSVP functionality, like expiration, limitations, or fields.

Connect this to an event, while activating the RSVP option, and you turn the Add-to-Calendar-Button into a fully functional RSVP form.

### CTA

A [Call-to-Action (CTA)](/application-manual/styles-and-templates#cta) is quite similar to the RSVP template.

It can be also linked to an event and will show up after users added the event to their calendar. It can be a slogan, sharing options, some link to another product/website/event, or even a form (e.g. Newsletter signup).

Create the functionality here, link it to your event, and it will automatically show up - styled, based on any linked style.

### Emails

[Email templates](/application-manual/styles-and-templates#emails) can be linked to an RSVP template.

When setting them, you overwrite the default emails, that we send for any RSVP interaction of the user (like Double-Opt-In, confirmation, etc.).

You can also adjust the look of the email within the template.

### Landing pages

For every event, we automatically generate a nice responsive landing page for it.

This makes it easy to share your RSVP or event on social media and beyond.

By creating a [landing page template](/application-manual/styles-and-templates#landingpages), you can adjust the look as well as additional content of this landing page.
Link this template to the event/group and you are done.

## Webhooks

With [webhooks](/automation-integration/webhooks), you can easily push information to other services, whenever something important happens with your RSVP or event (except for users saving events to their calendar - this needs to be tracked differently).

## Team Members

You can invite your colleagues to your [team](/application-manual/team) and work on stuff together.

**No worries, there is no limitation on seats!**

within the "Team" section, you can manage the invites and roles.

## Settings

While the [settings](/application-manual/settings) are mainly about your account, the look of the application, and your license, some parts also affect your projects. For example, you can upload a logo, which then is also used at the email templates as footer image.
