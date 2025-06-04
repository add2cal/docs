---
outline: [2,3]
head:
  - - script
    - type: module
      src: https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.esm.js
  - - link
    - rel: stylesheet
      href: https://cdn.zapier.com/packages/partner-sdk/v0/zapier-elements/zapier-elements.css
---

# Automate Flows with Zapier

You can easily listen for Add to Calendar PRO triggers or execute respective actions within Zapier with our [official Zapier app](https://zapier.com/apps/add-to-calendar-pro)!

You can find it directly from within Zapier when creating a zap.

## Connecting Zapier to Add to Calendar PRO

To connect Zapier to Add to Calendar PRO, you first need to create a [new API key](/application-manual/settings.html#api-keys).

1. Go to `settings` and select the `Technical` tab.
2. There, you find the `API Keys` section.
3. Click "New API Key".
4. The name and expiration date are optional. We recommend to set a name (like "Zapier"), so you can easily identify it later.
5. Copy the key and use it at Zapier when you get asked for it.

## The Building Blocks

Once connected, you can make use of a bunch of triggers and actions.

### Triggers

Triggers can start a flow when something happens.

In the Add to Calendar PRO with Zapier case, this could be the following:

- RSVP answers:
  - A new RSVP answer got created.  
  Generally or for a specific event.  
  This is the maybe most common case.  
  [Use this zap ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_rsvp_attendee)
  - An RSVP answer got updated.  
  [Use this zap ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=updated_rsvp_answer)
- Events:
  - A new event got created.  
  [Use this zap ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_event)
  - An event got updated.  
  [Use this zap ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=updated_event)
  - An event got deleted.  
  [Use this zap ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=deleted_event)
- Event Groups:
  - A new event group got created.  
  [Use this zap ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_group)
  - An event group got updated.  
  [Use this zap ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=updated_group)
  - An event group got deleted.  
  [Use this zap ❯](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=deleted_group)

### Actions

Actions create, read, update, or delete data at Add to Calendar PRO - from Zapier.  
The Zapier app guides you on the input with dynamic fields and automatically populated values.  
This works by using our well documented API under the hood.

::: warning Mind the limits!
Since this is based on our API, our [API limits and quotas](/api/introduction.html#rate-limiting) apply.  
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

::: tip Removing data fields
When updating an item, simply making one field empty would not remove its content, as empty fields are ignored by Zapier.  
You can still remove information, by writing `$$CLEAR$$` as value for the field you want to remove.
:::

## Typical Use Cases

### RSVP handling

The maybe most common use case is the extended management of RSVP attendees.

Whenever somebody signs up, you could fetch the data and push it into an additional system. This could be a Mailchimp newsletter list, some Google Sheet, or simply another database.  
You could even trigger additional email flows.

### Lead Generation Forms

If you disable the event distribution at an RSVP event, it becomes a simple signup form (compare to the [waitlist recipe](/recipes/waitlist.html)).

Use the "new RSVP answer" trigger to push those signups directly into a CRM system like [Salesforce](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_rsvp_attendee&steps[1][app]=SalesforceCLIAPI@latest&steps[1][action]=create_lead), [Hubspot](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_rsvp_attendee&steps[1][app]=HubSpotCLIAPI@latest&steps[1][action]=contactCreate), [Pipedrive](https://api.zapier.com/v1/embed/add-to-calendar-pro/create?steps[0][app]=App224587CLIAPI@latest&steps[0][action]=new_rsvp_attendee&steps[1][app]=PipedriveCLIAPI@latest&steps[1][action]=create_lead), or ZOHO.

### Dynamic checkout

Since the Zapier app allows you to create events and pull their ics file information, you could easily add functional calendar events and/or invites to any other zap you already have.

Think of a zap, where you start an email journey after somebody bought a product of yours.  
Simply create an event, fetch the ics data and use it within any email.

You could even pull the ics file and push it into another system.

### Mirror events

If you create events in another system, you no longer need to create them multiple times by hand.

Simply create a new event at Add to Calendar PRO via our Zapier app whenever a new event gets created in your other system.

## Explore the possibilities!

<br />

<div style="position:relative;z-index:0;">
  <zapier-workflow
    client-id="v08oVVLLq6aY9241XuXc6tsG9UTjdvrZF5ffcAQx"
    :theme="theme"
    intro-copy-display="hide"
    manage-zaps-display="hide"
    guess-zap-display="show"
    app-search-bar-display="show"
    zap-create-from-scratch-display="show"
    id="zapier-workflow"
  ></zapier-workflow>
</div>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const theme = ref('light');
let observer = null;

onMounted(() => {
  if (typeof document !== 'undefined') {
    theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
  observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        if (typeof document !== 'undefined') {
          theme.value = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        }
      }
    }
  });
  if (typeof document !== 'undefined') {
    observer.observe(document.documentElement, { attributes: true });
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>
