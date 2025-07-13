---
title: Automate Flows with Pipedream
description: Connect Add to Calendar PRO with Pipedream workflows. Listen for triggers and execute actions with our official Pipedream integration.
outline: [2,3]
---

# Automate Flows with Pipedream

You can easily listen for Add to Calendar PRO triggers or execute respective actions within Pipedream with the [official Pipedream app](https://pipedream.com/apps/add-to-calendar-pro)!

You can find it directly from within Pipedream when creating a workflow.

## Connecting Pipedream to Add to Calendar PRO

To connect Pipedream to Add to Calendar PRO, you first need to create a [new API key](/application-manual/settings#api-keys).

1. Go to `settings` and select the `Technical` tab.
2. There, you find the `API Keys` section.
3. Click "New API Key".
4. The name and expiration date are optional. We recommend to set a name (like "Pipedream"), so you can easily identify it later.
5. Copy the key and use it at Pipedream when you get asked for it.

## The Building Blocks

Once connected, you can make use of a bunch of triggers and actions.

### Triggers

Triggers can start a workflow when something happens.

In the Add to Calendar PRO with Pipedream case, this could be the following:

- RSVP answers:
  - A new RSVP answer got created.  
  Generally or for a specific event.  
  This is the maybe most common case.
  - An RSVP answer got updated.
- Events:
  - A new event got created.
  - An event got updated.
  - An event got deleted.
- Event Groups:
  - A new event group got created.
  - An event group got updated.
  - An event group got deleted.

### Actions

Actions create, read, update, or delete data at Add to Calendar PRO - from Pipedream.  
The Pipedream app guides you on the input with dynamic fields and automatically populated values.  
This works by using our API under the hood.

::: warning Mind the limits!
Since this is based on our API, our [API limits and quotas](/api/introduction#rate-limiting) apply.  
Usually, you will never hit them. If you do, contact us to find a better solution!
:::

You can control the following actions:

- Events:
  - Create a new event
  - Read/Find an event
  - Update an event
  - Delte an event
- Event Groups:
  - Create a new event group
  - Read/Find an event group
  - Update an event group
  - Delte an event group
- Landing Pages:
  - Create a new landing page
  - Read/Find a landing page
  - Update a landing page
  - Delte a landing page
- RSVP Templates:
  - Create a new RSVP template
  - Read/Find a RSVP template
  - Update a RSVP template
  - Delte a RSVP template
- Others:
  - Retrieve Ics Data (path to file as well as raw body) for a provided event.  
  This is then typically used as an attachment within an email.  
  Mind that this is not working for dynamic dates (like "today+2")!

<br />

::: tip Removing data fields
When updating an item, simply making one field empty would not remove its content, as empty fields are ignored by Pipedream.  
You can still remove information, by writing `{{null}}` as value for the field you want to remove.
:::

## Typical Use Cases

### RSVP handling

The maybe most common use case is the extended management of RSVP attendees.

Whenever somebody signs up, you could fetch the data and push it into an additional system. This could be a Mailchimp newsletter list, some Google Sheet, or simply another database.  
You could even trigger additional email flows.

### Lead Generation Forms

If you disable the event distribution at an RSVP event, it becomes a simple signup form (compare to the [waitlist recipe](/recipes/waitlist)).

Use the "new RSVP answer" trigger to push those signups directly into a CRM system like Salesforce, Hubspot, or ZOHO.

### Dynamic checkout

Since the Pipedream app allows you to create events and pull their ics file information, you could easily add functional calendar events and/or invites to any other flow you already have.

Think of one, where you start an email journey after somebody bought a product of yours.  
Simply create an event, fetch the ics data and use it within any email.

You could even pull the ics file and push it into another system.

### Mirror events

If you create events in another system, you no longer need to create them multiple times by hand.

Simply create a new event at Add to Calendar PRO via the Pipedream app whenever a new event gets created in your other system.

## Explore the possibilities!

Find examples and more information at [the respective Pipedream page ❯](https://pipedream.com/apps/add-to-calendar-pro)
