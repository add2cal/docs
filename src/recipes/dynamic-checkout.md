---
outline: [2,3]
---

# Add to Calendar Buttons in a dynamic Checkout

Selling time-bound stuff or simply setting up appointments via a booking process is a very typical use case for many companies.

Within this flow, you usually want to push this date somehow to the user's calendar. Maybe via email, maybe by offering an Add to Calendar Button or ics file at a confirmation page or a user account.

**No problem with Add to Calendar PRO**!

## 📋 What you need

You should prepare a style as well as a general event group (which acts as some kind of bucket).

Besides that, everything else will happen via the API - you need to create an API key for that case, of course.

## 🧱 Setting it up

The setup of this flow requires some more work as you will need to weave this into your existing backend flows!

**Have a look at the general scheme:**

![Editor](/screenshots/checkout-flow.svg)

<br />

**No here comes a list of the steps you need to take:**

1. Create a style and prepare everything for a potential Add to Calendar Button to look good (skip this if you are only up for ics files).
2. Create a landingpage template and link it to the style. This is important if you want to use email links; or if you simply want to be able to share a nice event landingpage (can be a nice thing for the support team, when a user needs help saving the event).
3. Create an API key (at the organization settings page).
4. Create an event group (with subscription set to "no"), which will hold all future events.
5. Read the [API documentation about event creation](/api/events.html#add-an-event).
6. At your backend, create a function, which creates an event via the Add to Calendar PRO API based on the data you have for the user. We recommend to also set the organizer and attendee in this case (at some systems, this adds the event automatically to the user's calendar, as soon as an email with the ics file is opened)! The response includes an id, which is the ProKey of the event.
7. Use this id to pull and add the generated ics file when sending a confirmation email.
8. Use this id to add Add to Calendar links at this confirmation email.
9. Use this id to render a nice Add to Calendar Button at the "Thank you" page after the checkout.

### Scheme for ics files

```
https://event.caldn.net/:id/event.ics
```

You can adjust the name of the file via the `iCalFileName` option. Adjust the name in the scheme accordingly!

### Scheme for email links

```
https://go.caldn.net/:id/o/:type
```

With `type` being "apple", "google", "ical", "ms365", "outlookcom", "msteams", or "yahoo".


## ❇️ How to optimize

You might be wondering how you can deal with dev or staging environments!

**Simple!**

Just create an event group per environment! When creating the event via API, you can then easily differentiate between the stages.

You can even see the split explicitely in the app as all events are children of their group, which then acts as evnironment bucket.
