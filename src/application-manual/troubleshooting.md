
# Troubleshooting

## How can I track user interaction

We automatically track the most important metrics for you!

This would be signups (and all related details) for the RSVP and the "event saves" for the Add to Calendar Buttons (see [details](/application-manual/analytics.html)).

We are not automatically tracking any additional data as this would usually go deeper into some darker areas (in terms of data privacy).

However, we prepared a lot for you here as well!

1. We push the latest event into the attribute `atcb-last-event` at the `<add-to-calendar-button>` element. It holds the event and respective trigger (schema: "EVENT:TRIGGER"; example: "openList:atcb-btn-1").
2. We are pushing this data also into the "Data Layer". This, for example, can be directly used with Google Analytics to follow all events.

The events we push:

* initialization
* openList
* closeList
* openCalendarLink
* openSingletonLink
* openSubEventLink
* success

*(You can try this by playing with the button on our website and putting "dataLayer" into the JavaScript console.)*

## Tracking does not seem to work

We track the initiation of the save process via clicks at the landingpage, from email direct links, and from Add to Calendar Buttons with active `Proxy` option. If the `Proxy` option is not set at the style, while you are using the Add to Calendar Button outside of the auto-generated landingpage, clicks cannot be tracked.

Another case would be when you share the generated ics file directly - we cannot track this either.

The actual save can also not be tracked, since it happens in the calendar app and we are no hacker spies 😉.

## How can I make the RSVP form span the full width

The inline RSVP form adapts to its surrounding container.

This usually already leads to it taking all the available width. Based on the used css, however, you might want to add something like `style="width:100%;"` to this container. For example, if the container uses a flexbox, explictly specifying the width is mandatory.

## How can I make sure there is no data publicly available on the internet

Per default, the event data and ics file are available to everybody who knows the link to it. We encourage search engines to not pick it up, but cannot guarantee this.

This is basically necessary for things like email links or even the Add to Calendar Button to work properly.

If you do not want this to happen - because, for example, you put sensitive information into the event details - you can set an event (or group) to private. Click the flap on the top of the big box at the beginning of the details page.

A private event has no public ics file or landingpage. The Add to Calendar Button will also not work as it requires to pull the information via the web. However, you can still [generate ics files via our API](/api/miscellaneous.html#retrieve-ics-file-body). 

This makes it an ideal case for [dynamic checkout flows](/recipes/dynamic-checkout.html) with sensitive information!

## The Add to Calendar Button dropdown is behind other elements

The dropdown gets rendered next to the button element with a higher z index.

When your page layout defines a new ["stacking context"](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) later on the page, this might be rendered at a higher level.

You can either optimize your layout or activate the `forceOverlay` option at the style of your Add to Calendar Button. This option will render the button above everything else in a rather brutal way (from a technical perspective).

## I want to use the same Add to Calendar Button with 2 styles

To achieve this, you would need to duplicate your event and connect the 2 events with the different styles.

## Social preview image not updating

When sharing a link to the landingpage, we automatically generate a preview image, which displays the event details. This helps to spread the word more prominently.

At each update, this image gets updated as well. However, external tools and websites usually cache this image, which makes it not updating immediately. Some refresh there cache only after 7 days, if at all.

Even doing everything possible from our side (like completely changing the image url each time), we have no direct control over those external services and platforms.

_What you can do in those cases:_

* **Facebook/Meta**: Go to the Facebook debugger at [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) and enter the url you are sharing. If you see the old information, you can click the "scrape again" button and it should update.
* **X/Twitter**: X does not offer an option to manually refresh. Instead, you can add a query parameter to you url. This way, X thinks it's a new one and crawls again. Simply add something like `?i=1` at the end of your url. You can change the number multiple times to force a refresh.

## My IDE throws TypeScript warnings

This can happen in rare cases, where types got not yet loaded. Sometimes it takes a restart of the IDE or the computer.

If the issue is still present, you can set the [skipLibCheck](https://www.typescriptlang.org/tsconfig#skipLibCheck) in your `tsconfig` to `false`, which should disable it.
Please also open a new issue at our GitHub repo ["add-to-calendar-button"](https://github.com/add2cal/add-to-calendar-button/issues/new/choose) or send us an email, so we can have a check too.