---
outline: [2,3]
---

# Styles and Templates
Styles and templates are building blocks. They both have their specific purpose, while they are also organized in a way to be used for one or many events.

While you can create them right during event creation, you can also do this at their specific pages. There, you can organize and edit them easily. This, for example, enables you to change a style, which then affects all connected events at once.

As it might be obvious already, styles define the look and feel of your published elements. They, however, also account for usability and UX - like which calendar providers are available for an Add to Calendar Button.

Templates exist for RSVP forms and emails, Call to Action (CTA) screens, as well as landingpages.

While RSVP forms, landingpage templates, CTA screens, and styles can be linked to events; emails can be linked to RSVP forms.

::: info Build your world!
The Add to Calendar system is structured in way to offer you a maximum of flexibilty when it comes to you building your specific setup.

Think of styles and templates as colors you can use to paint your events in th color you want - plus all kinds of custom functionality.
:::

## About styles

Styles define how an Add to Calendar Button or RSVP form or any other connected element looks like. This also includes general behavior as well as the available calendar provider options.

You can use the live preview to directly check the result of your changes.

As most settings are obvious, we do not describe them here in every details.

Whenever something is a little bit more complicated, you can click the small info icon to receive further details.

Check out the advanced options for more granular control and also **mind the proxy option as this one is mandatory for the analytics feature**.

With `Custom Labels`, `Custom Style Light`, and `Custom Style Dark`, you can go full-customized and change almost all details of the visual element. However, you should have some basic experience with CSS to understand the custom style options here!

[Open in the app ❯](https://app.add-to-calendar-pro.com/styles)

## About templates

Templates are quite similar to styles. Theoretically, you could also look at styles as some other template type.

Bottom line, templates are additional building blocks, you can use to enrich your event.

In case you are building an RSVP form, using an RSVP remplate is mandatory as it holds important base configuration. We made this a template, so you can easily use the same setup for multiple events/dates.

The same applies for Call to Action templates.

Email and Landingpage templates, on the other hand, are rather optional. If you do not work with them, our default will be delivered. Using them gives you the power to customize all details of your user's journey.

[Open in the app ❯](https://app.add-to-calendar-pro.com/templates)

### RSVP

As mentioned above, with RSVP templates, you can specify a specific structure for an RSVP, which than can be used for 1 or multiple events.

#### Expiration Date

When set and this date is in the past, no more signups are possible for this RSVP.

#### Attendee Limitations

Limit the number of signups - total as well as per attendee. If the latter one is set, a user needs to specify the amount of people the RSVP is meant for.

#### Form Basics

Per default, sending the form is counted as signup and selecting another answer is only possible on edit. You can change this behavior, if needed.
You can also decided whether or not there shall be a "maybe" option.

Setting the DOI option will require the user to confirm his email address within 30 minutes. This is mandatory to comply with things like GDPR if the form is not behind a login!

In addition, you can specify a custom headline and intro text.

#### Additional Form fields

Fields for confirmation and email are included automatically.

You can add additional fields as you need them.

The `name` is mandatory and used to identify the field in the backend. The `label` is the user facing label, while you can use `placeholder` and `default` value information to prefil input fields.

Depending on the field type, the available options might differ.

When you want to create a radio button group, create multiple radio fields after each other.

#### Email templates

Override the default emails with customized ones by linking email templates with the RSVP form.

### Email

When working with RSVP, there are multiple emails, your user's might receive. This can be a Double-Opt-In confirmation email or an email, containing a magic link to log into the management page, where users can adjust their responses.

*You can link those templates to an RSVP form.*

Our default is created in a way that it fits all cases.

However, if you want to give your users an even more customized (and usually branded) experience, you can tune those emails here.

The **type** defines the specific email and case (as implied above).

Next to it, you find a button, via which you can **load the default values** into the input fields. This way, you can adjust what we have already created and do not need to come up with something from scratch.

With the then following fields, you can adjust text blocks, font, and colors.

Test your email via the button on the very right side of the page! It sends an email to the address of the logged in user, so you can easily check the result directly in your email inbox.

Mind that here you can only define a custom FROM name and set your custom reply-to address.  
To define the sender email address, you need to set this up globally at the settings page.

### Landingpage

Landingpage templates are basically additional configurations for the auto-generated landingpages for your events.

Those landingpages can be used to share your event on social media or anywhere else. They also come into play, when you use our email links or proxy the Add to Calendar Button (required for analytics). In those cases, especially if something goes wrong (we do some pre-checks with the requested calendar provider), we show some guidance to the user - with the landingpage style.
For the RSVP case, any communication, like DOI, the user editing his response, etc., uses this landingpage layout as well.

As you see, there is a big chance, your users are getting in contact with your event's or RSVP's landingpage.

With a respective template, linkable to an event/group, you can customize this page.

You can change the auto-generated headline, add some intro text, define colors, and optimize meta/SEO content.

### Call to Action (CTA)

CTA templates are relevant when you activate this functionality at an event.
Having it enabled, we show a respective screen to the user after the connected event got saved.

The template defines what is shown on this screen.

It can be simple text, a link (button), a sharing function, or a custom form.

While the settings for the text, or link, or even the sharing tool, are quite obvious, setting up the form can be a little bit more complicated.

But it is an awesome feature, as you can even use it to offer a newsletter subscription after a person saved your event!

When working with the form, the `url` specifies the endpoint, where we send the input to. The `button label` can be used to customize what is shown on the submit button.

Next, you can specify all the `fields` you want to show.

They are basically the same as with the RSVP form.

The `name` is mandatory and used to identify the field in the backend. The `label` is the user facing label, while you can use `placeholder` and `default` value information to prefil input fields.

Depending on the field type, the available options might differ.

Two things to mind:
1. When you want to create a radio button group, create multiple radio fields after each other.
2. If you name a hidden field "header" and its value is a JSON scheme, we will use this as the requests header information. In this case, we send the form as JSON; otherwise as multipart/form-data.

You can always test your settings via the button at the very right of the screen.
