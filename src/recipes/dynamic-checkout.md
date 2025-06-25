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

::: warning Mind sensitive information!
When you create an event, we automatically generate an ics file and provide you with a landing page and more.
Those things are public by nature. Everybody with a respective link can retrieve this information. So, even this link is quite cryptographic and it is therefore not completely "open", it can be a risk when placing sensitive information into the event's detail information. This can be a problem for checkout flows.

**You can [prevent this](/application-manual/troubleshooting#how-can-i-make-sure-there-is-no-data-publicly-available-on-the-internet) by setting the event to "private".**

In the following guide, we also highlight the process with a private event.
:::
::: tip Even easier with Zapier!
Alternatively, you can use our Zapier template for Shopify: [click here](https://zapier.com/apps/email/integrations/shopify/255643741/send-outbound-emails-with-add-to-calendar-pro-events-for-new-shopify-orders).

Of course, this also works for other shop systems, as long as they can be connected via Zapier.  
You can easily adapt the template to your use case.
:::

## 🧱 Setting it up

The setup of this flow requires some more work as you will need to weave this into your existing backend flows!

**Have a look at the general scheme (public):**

<br />

![checkout-Flow-with-ics-file-and-add-to-calendar-button](/screenshots/checkout-flow.svg)

<br /><br />

**When you keep the event _private_, the flow would look slightly different:**

<br />

![secured-checkout-Flow-with-ics-file-and-add-to-calendar-button](/screenshots/checkout-flow-secured.svg)

<br /><br />

**No here comes a list of the steps you need to take:**

1. Create a style and prepare everything for a potential Add to Calendar Button to look good (skip this if you are only up for ics files).
2. Create a landing page template. This is important if you want to use email links; or if you simply want to be able to share a nice event landing page (can be a nice thing for the support team, when a user needs help saving the event).
3. Create an API key (at the organization settings page).
4. Create an event group (with subscription set to "no"), which will hold all future events.
5. Read the [API documentation about event creation](/api/events#add-an-event).
6. At your backend, create a function, which creates an event via the Add to Calendar PRO API based on the data you have for the user. Use the ids of the new style and landing page to link them to the new event. We recommend to also set the organizer and attendee in this case (at some systems, this adds the event automatically to the user's calendar, as soon as an email with the ics file is opened)! _Set the event to private if necessary._ The response includes an id, which is the ProKey of the event.
7. With regular events:
   1. Use this id to pull and add the generated ics file when sending a confirmation email.
   2. Use this id to add Add to Calendar links at this confirmation email.
   3. Use this id to render a nice Add to Calendar Button at the "Thank you" page after the checkout.
8. For events marked as "private":
   1. Use this ID to retrieve the body content of the [ics file via API](/api/miscellaneous#retrieve-ics-file-body), generate the file yourself, and send it.
   2. For private events, you cannot use Add to Calendar links. Add to Calendar buttons do not work via the usual method either. However, you can use the data already provided (for creating the event) to create a button according to the open-source schema (see [add-to-calendar-button.com](https://add-to-calendar-button.com/de))

### Scheme for ics files

```
https://event.caldn.net/:id/event.ics
```

You can adjust the name of the file via the `iCalFileName` option. Adjust the name in the scheme accordingly!

### Scheme for email links

```
https://caldn.net/:id/o/:type
```

With `type` being "apple", "google", "ical", "ms365", "outlookcom", "msteams", or "yahoo".


## ❇️ How to optimize

You might be wondering how you can deal with dev or staging environments!

**Simple!**

Just create an event group per environment! When creating the event via API, you can then easily differentiate between the stages.

You can even see the split explicitely in the app as all events are children of their group, which then acts as evnironment bucket.
