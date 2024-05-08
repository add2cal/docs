---
outline: [2,3]
---

# Working with RSVP Forms

At the [Application Manual](/application-manual/styles-and-templates.html#rsvp) we already introduced the RSVP template blocks, which are essential for creating an RSVP event.

In this recipe, we want to guide you through a typical RSVP setup process to make your life easier.

::: info Step by step or all at once
You can do almost all of those steps at one screen when creating a new event.

To keep it more structured, we describe a more staged process, where you create the building blocks first. When creating the event, you then only need to select them from the dropdowns.
:::

## 📋 The concept

Before you start creating any element, you should write down the base details for your project. ☝️

* Do you need to limit the number of attendees?
* Is it one event or many?
* Is it event-bound at all or do you simply want to create a general signup form (see the ["Waitlist" recipe](/recipes/waitlist.html) for that case)?
* Where do you want to show the form?
* What data do you need to ask for?
* Should people be able to answer with "no" or "maybe"?
* Do you require a Double-Opt-In for the signup (necessary to comply with GDPR and Co)?
* and so on...

When you are clear about your goals, start building it! 

## 🧱 Set up the RSVP template

* Visit the RSVP section at the [templates page](https://app.add-to-calendar-pro.com/templates#rsvp).
* Create a new one.
* Give it an internal name you can easily identify.
* The expiration date makes sure that nobody can sign up after you collected and processed the last candidate.
* Limiting the number of attendees is not always necessary, but usually the case for real-world events.
* We recommend to also set a custom headline and intro text, so the users know what this is about. Depending on where you want to host the form, you can also add this information on your website or the landingpage (see below) instead.
* Finally, add fields for all the information you want the users to add.
* Validate the result immediately at the preview on the right-hand side! 😍

## 🎨 Define a style

* Visit the [style page](https://app.add-to-calendar-pro.com/styles) and create a new style.
* Create a style fitting your brand and play with all the details that affect the UX.
* Whether specific options make sense for your case, highly depends on your plan. For example, if you do not want to show any Add to Calendar Button, you do not need to care about calendar options.
* The most important setting is the "Render RSVP inline" option. It defines whether the form is shown directly or if we render a button, where the form only appears on click (in a modal).
* You can observe the result in the right-hand side preview, if you activate the "RSVP simulation" there. Mind that this uses dummy data! *(When creating everything at once during the event creation, you would see the preview including your actual RSVP setup.)*
* That's it for now. We will revisit the style later.

## 📅 Create the event

Now, let's get to the core of everything - the event!

* Go to the event overview and create a new event.
* At the very top, activate the RSVP type.
* You can also drop the Add to Calendar Button functionality here. This way, we will not show any Add to Calendar Buttons at the form after the signup.
* Also mind the event distribution switch. When active, we show the date and details on the landingpage and also send an ics file to the user via email. When inactive, you would have a pure signup form, which is not bound to any date and time at all.
* Next select or specify a group. This is basically a container for the event. It can be helpful to organize multiple RSVP events in a meaningful way.
* The date setup speaks for itself.
* Finally, at the bottom, you select your already set up RSVP template and style.
* Save and you are ready to go! 🚀

## 📧 Customize the emails

With the previous steps, your RSVP form is already working and can collect data.

However, it still uses the default email templates. Nothing wrong with that! It is designed to fit any use case.

**But let's be honest - customizing this makes a lot of sense!**

* Go to the Email section at the [templates page](https://app.add-to-calendar-pro.com/templates#email).
* Create a new one.
* Before defining the internal name, check the type - there, you see all the different cases, where we are sending emails to your users. Not all might apply to your setup, but you definitely need to create more than 1 email template!
* After specifying the type, you can click the "load default content" button to prefill the following fields. This makes things a lot easier!
* Adjust and set a style.
* After saving and opening the template again, you can send yourself a test email via the button on the right side of the screen.
* Repeat this for all different types.
* Email templates get linked to the style of your event. So, get back to your style, activate the advanced settings (if not already visible) and select the email templates at the respective dropdowns.

## ✨ Enrich the landingpage

In case you want to make use of the automated landingpages, you should definitely customize this as well.

Even if not, you should be aware that when users want to edit their reply, they will get directed to a small management site, which uses the landingpage style as well.

* Go to the Landingpage section at the [templates page](https://app.add-to-calendar-pro.com/templates#landingpage).
* Create a new one.
* Customize it.
* Save it.
* The landingpage template gets linked to the style of your event. So, get back to your style, activate the advanced settings (if not already visible) and select the landingpage at the respective dropdown.
* The landingpage gets tested best by visiting the actual landingpage. You can find the link at the very top of the event detail page.

## 📣 Share and integrate it

You can now already easily share the landingpage basically everywhere and collect your first signups.

The integration on your own website works the same way as you would integrate an Add to Calendar Button. Check the [integration documentation](/integration.html) for more guidance on that part. The element automatically adapts to the RSVP type.

::: tip
You can prefill the attendee for the RSVP on the source code level by adding the "attendee" attribute to the HTML element. Mind the format "name|email".

When sharing the landingpage, you can do the same by adding `?attendee=name|email` to the landingpage url. Ideally, you already encode this data with a tool like [urlencoder.io](https://www.urlencoder.io/), which would lead to a more stable query like `?attendee%3Dname%7Cemail`.
:::

## 🔎 Track it

In the app, you find the button "RSVP Answers" at the top of the event's detail page - as well as quick action buttons at the event overview tables.

They guide you to the page, where you can keep track of all the answers.

You will find statistics as well as a detailed table with all the information, people put into the form.

At the bottom, you find options to export this data as JSON or CSV file.

## 🔗 Connect it with your system

If you want to go one step further, you can link it with your other systems, like your CRM.

Use our [Webhook functionality](/automation-integration/webhooks.html) to push data automatically to other places.

1. Navigate to the [webhook page](https://app.add-to-calendar-pro.com/webhooks).
2. Create a new one.
3. Set a respective trigger. You might want to create a webhook for both, the create and update event.
4. Set "RSVP Answer" as the Trigger Element.
5. Method and Payload URL should match your targeted system.
6. Add respective Header and Body information as needed and mind the additional guidance on the page.
7. Whenever a user signs up or changes the reply, you now get automatically notified! 💪
