---
title: Add a Follow-up Message or Call to Action
description: Show a message, link, sharing prompt, or form after calendar sharing with a reusable call-to-action template.
outline: [2,3]
---

# Add a Follow-up Message or Call to Action

A **Call to Action (CTA)** gives visitors a next step in the calendar-sharing flow. For example, you could link to preparation material or invite them to share the event.

The CTA is part of the sharing experience. It is not proof that the visitor completed the final save inside their calendar app.

## Choose the right type

| Type | Example |
| :--- | :--- |
| **Text** | “We look forward to seeing you. Please arrive ten minutes early.” |
| **Link** | A button leading to a workshop preparation page. |
| **Share** | A prompt to share the event with someone else. |
| **Form** | A form submitting information to a service you have configured. |

## Create and connect a CTA

1. Open **Templates → CTA** and create a new template.
2. Enter an **Internal Name** and choose the **Type**.
3. Write a short **Headline** and **Text** with one clear next step.
4. For a link, enter the destination **URL** and a meaningful **Button Label**.
5. Save the template.
6. Open the event, enable **Call to Action (CTA)**, select the template, and publish.

Subscription groups can also have a CTA. Test it with the actual event or subscription, since the available calendar options depend on that setup.

## Preview the result

Use the preview action in the CTA editor, then test the published sharing flow. Check links on a phone as well as a computer.

Keep the message short. “Read the preparation guide” tells people more than a button labeled “Click here”. The connected style supplies the general appearance.

## If you need a form

The **URL** must be an endpoint capable of receiving the submitted fields, not just a normal website address. Ask the team managing the destination service to supply it.

Add fields with stable **Name** identifiers and clear visitor-facing **Labels**. Choose their types, defaults, and required settings as needed. Related radio choices should be placed consecutively.

A CTA form is separate from RSVP registration. Do not use it when your goal is to reserve places or maintain an attendee list; use an [RSVP form](/application-manual/rsvp-forms) instead.

For a newsletter signup, confirm with your newsletter team how the submission and any confirmation step should work before publishing the form. The technical submission format is described in the [CTA API reference](/api/cta).

## Reusing a CTA

Check **Usage** before changing a shared template. If one event needs different wording or a different destination, create a separate CTA and link it to that event.
