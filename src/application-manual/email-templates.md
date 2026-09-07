---
title: Customize RSVP Confirmation and Reminder Emails
description: Create branded RSVP emails, choose the right message type, connect templates to a form, and test the attendee email journey.
outline: [2,3]
---

# Customize RSVP Confirmation and Reminder Emails

Email templates control the messages people receive during RSVP registration and response management. Each template has one **Type** and is connected to the matching slot in an RSVP template.

## Choose the message you want to change

| Type | When it is used |
| :--- | :--- |
| **Double Opt-In (DOI)** | Asks the person to confirm their email address. |
| **Thank You** | Follows confirmation of the double opt-in. |
| **Signup Confirmation** | Confirms a signup when double opt-in is disabled. |
| **Change Confirmation** | Confirms a change to an RSVP response. |
| **Event Update** | Notifies participants when you publish an event update and choose to inform them. |
| **Magic Login Link** | Lets the person access their response-management page. |
| **Reminder** | Reminds attendees before the event, when a reminder is configured. |
| **Second Signup / Wrong Sender** | Helps with repeat registrations or a calendar reply from a different email address. |

## Create the template

1. Open **Templates → Email** and create a new template.
2. Choose its **Type** and a clear **Internal Name**, such as “Webinar confirmation — English”.
3. Use the button beside the type selector to load the default content.
4. Edit **Subject**, **Headline**, **Content**, and **Button Label** as appropriate for that message.
5. Adjust the colors and font, then save.

Starting from the defaults helps preserve a clear purpose for each message. A confirmation email should explain that registration is complete; a DOI email should make the remaining confirmation step obvious.

## Connect it to an RSVP form

Open the [RSVP template](/application-manual/rsvp-forms) and find **Email Templates**. Select your saved template in the matching message slot, then save the RSVP template.

Creating an email template alone does not connect it to an event. Default messages remain in use for slots you leave uncustomized. The reminder slot is relevant when **Send Reminder X days before** is configured.

## Set the sender and reply address

**From Name** is the displayed sender name. **Reply to** is where attendee replies should go. These do not configure the sending mailbox itself.

An administrator sets the **Email Sender Address** under **Settings → Technical**. A custom sending address requires SMTP settings from your email provider; ask your email administrator to configure those.

## Test before using it widely

Use the test action in the template editor to send a preview to the logged-in user's email address. Then test the complete signup flow with an event using the RSVP template.

Check the subject, readable text, button wording, reply address, and mobile appearance. Saving a shared email template can affect every RSVP template using it immediately. Create a separate template for a one-off variation.
