---
outline: [2,3]
---

# How to use Buttons and RSVP Forms with WordPress

## Step 1: Install the plugin

Install the [official package from the WordPress Plugin Directory](https://wordpress.org/plugins/add-to-calendar-button). 

* You can find it directly from the "Plugins" page within your admin dashboard. Search for: `add2cal`.
* Alternatively, you can [download it here](https://wordpress.org/plugins/add-to-calendar-button) and upload the zip file to your WordPress system. OR you unzip and upload the plugin manually into your wp-content/plugins/ directory.

## Step 2: Activate it

At your WordPress "Plugins" page, activate the plugin.

## Step 3: Make it PRO

After activating the plugin, you can find its settings page at `Settings > Add to Calendar Button`.

There, you can check the "Pro" checkbox to have it always set in PRO mode.

## Step 4: Use it

### A: Block

Simply use the "Block" within the WordPress Gutenberg Block Editor.

* Add a new block and search for "Add to Calendar Button".
* Click at the appearing button.
* Add the proKey at the input on the right side "Block" settings.

### B: Shortcode

Alternatively, you can also use the shortcode `[add-to-calendar-button]` and add the proKey directly to it:

```
[add-to-calendar-button prokey="prokey-of-your-event"]
```

## Overriding settings

You can override some attributes of the button via the respective input field. 
Check [the respective section at the general integration guide](/integration/general.html#overwrite-settings) for more information on that.

## Dynamic connections

Additionally, you can also connect the date information with Meta Fields, Advanced Custom Fields (ACF), or any shortcode (that prints a proper string). 
This way, you can make the button dynamic, showing information you somehow have generated on the respective page.

### How it works with the Block

When using the Gutenberg Block Editor, you can simply define the dynamic fields at the block settings.

1. Select the type of data field you want to use (Meta Fields, ACF, or Shortcode)
2. Select the type of date input you require (All-day would only offer input for a start and optional end date; date + time would also show time inputs; datetime would offer a combined input, where your field holds date and time at once).
3. At the respective input, add the name of the field you want to use. For example, if you have an ACF field called "my-start-date", you would put "my-start-date" into the start date field.
4. Preview and test.

### How it works with the Shortcode

When working with the shortcode, you can also define the dynamic fields as shortcode attributes.
You would simply put the field name (similar to the Gutenberg Block Editor) into the respective attribute.

For example, if you have an ACF field called "my-start-date", you would put it like this: 
```
[add-to-calendar-button prokey="prokey-of-your-event" acf-startdate="my-start-date"]
```

*As you can see, the type of the field you want to link, gets prefixed with "acf-", "mf-", or "sc-", depending on the type of field.*

<br />

You can use this scheme for the following information:

* startdate (“YYYY-MM-DD”)
* starttime (“HH:MM”)
* enddate (“YYYY-MM-DD”)
* endtime (“HH:MM”)
* startdatetime (“YYYY-MM-DDTHH:MM” or “YYYY-MM-DD HH:MM”)
* enddatetime (“YYYY-MM-DDTHH:MM” or “YYYY-MM-DD HH:MM”)
* name
* description
* location
* timezone

### What to mind!

::: warning As pointed out at the general integration guide, overriding core information (like the date) leads to a data mismatch, as the automatically generated landingpage and ics file are not aware of your WordPress data!
:::

You can circumvent this by setting the [event to private](/application-manual/groups-and-events.html#detail-page-1), which will not auto-generate a landingpage or ics file. 
The button will then not use a pre-built ics file, but instead generate one on the fly.

This comes with the downside, that you need to deal with worse compatibility (for example, Chrome on iOS does not like dynamic ics generation) and are not able to track saving events.
Unfortunately, there is no way around this by design.
