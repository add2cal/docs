---
title: Set Up an RSVP Registration Form
description: Build an RSVP form with attendee limits, custom questions, email confirmation, and reminders, then connect it to your event.
outline: [2,3]
---

# Set Up an RSVP Registration Form

An RSVP form collects responses for an event. Its **RSVP template** holds the reusable form settings; the event holds the date and other event details.

## Create and connect the form

1. Open your event and enable **RSVP**.
2. Select an existing **RSVP Template** or create one. You can also create it under **Templates → RSVP**.
3. Give the template a descriptive **Internal Name**.
4. Enter the public **Headline** and **Text** explaining what people are registering for.
5. Set the limits and questions below, save, and publish the event.

The same template can serve several events. Its attendance limit applies to the individual event's registration flow, not a shared ticket pool across all linked events.

## Set a deadline and attendance limits

**Expiration Date** closes registration once that date and time has passed. Check it carefully if you reuse a template for a later event.

Use **Max. Total Signups** to limit capacity and **Max. Attendees per Signup** to let one response reserve places for several people. For example, a limit of 40 with at most 2 people per signup allows paired reservations within that capacity. Leave an optional limit empty when you do not need it.

Pending email confirmations temporarily reserve places. A form may therefore be full before the confirmed attendee count reaches the limit. See [Manage RSVP responses](/application-manual/managing-rsvp).

## Choose the response and confirmation flow

By default, submitting the form means the person is attending. Turn off **Process the initial signup as confirmation and do not show a select option** if you want a choice on the initial form. Enable **“Maybe” option** if undecided answers are useful.

With **Double Opt-In for answers**, the person must follow the email confirmation link within 30 minutes. Explain this next step in your introduction so people know to check their inbox.

## Add useful questions

Email and the attendance response are already part of the form. Under **Additional Fields**, choose **Add new field** for other questions.

| Field setting | What to enter |
| :--- | :--- |
| **Type** | Text, number, checkbox, radio button, label, or hidden value. |
| **Name** | A stable identifier, such as `dietary_requirements`, used in stored answers and exports. |
| **Label** | The question visitors see, such as “Any dietary requirements?” |
| **Placeholder / Default** | An example or a prefilled answer, where supported. |
| **Required** | Whether the person must complete the field. |

Place related radio choices consecutively. A field named `email` replaces the built-in email field, so only use that name intentionally.

## Add reminders and test the journey

Set **Send Reminder X days before** if needed, then select any [custom email templates](/application-manual/email-templates). When creating a form inside another new item, save it first if the app asks you to before adding email templates.

Test with an address you control: submit, confirm the email if enabled, check the confirmation, and open the response-management link. Review the [responses dashboard](/application-manual/managing-rsvp) before inviting your audience.
