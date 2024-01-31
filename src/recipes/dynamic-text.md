---
outline: [2,3]
---

# Use Variables to adjust Event Text per User

In some cases, you might want to tailor your event to each user.

Here, we are not talking about user-specific events, that might occur at checkout flows ([see recipe for that &raquo;](/recipes/dynamic-checkout.html))!

This is rather about 1 event, which should have a dynamic title or description to feel more personalized to the users.

**For thoses cases, you can make use of custom variables!**

## Process

1. First of all, you need to create your event.
2. Next, you need to write text at the event's **title**, **location**, or **description** with your variables in mind.
A variable placeholder can be set like this: `%%variableName%%`.
3. Finally, you need to provide the `customVar` option (which takes a JSON object, where the key is the variable name and the value the respective text) with the actual text for the variables at the button code and/or landingage to fill those placeholders. Therefore, of course, you need to make sure that you always have this information available.

## Example

The following in-depth example should make it clear.

### Goal

We want to create an event, which has the user's name in its title - "Event Reminder for John Doe".

It should also use the name in the description as well, starting with "Hi John".

### Environment

We are showing an Add-to-Calendar Button inside a protected (logged in user) area on our **website** - that's, how we know the name there.

Additionally, we are sending an **email** to the user, where we point him to the event's **landingpage**. We know the user's name when sending the email, but not on the landingpage as this is hosted by Add to Calendar PRO (but that won't be a problem).

### The Event

1. We create a new event within the app.
2. We set the title: `Event Reminder for %%firstname%% %%lastname%%`.
3. We set the description: `Hi %%firstname%%! This is ...`.
4. We set all the other details as usual.

### The Integration

#### Website:

At our website, we include the button with the following code:

```
<add-to-calendar-button proKey="the-ProKey-of-our-event" customVar='{"firstname": "dynamic-value-from-the-backend", "lastname": "dynamic-value-from-the-backend"}' />
```

This puts the information into the button at runtime. It could look like this in the end:

```
<add-to-calendar-button proKey="1b39d497-bf14-45ed-b9af-2cfab5c1231a" customVar='{"firstname": "John", "lastname": "Doe"}' />
```

#### Email:

When sending the email, we use the link to the landingpage `https://go.caldn.net/the-ProKey-of-our-event`, but we add the customVar information as query parameter. 

Mind that you need to encode this to work within a url! You can use a free online encoder like [urlencoder.io](https://www.urlencoder.io/).

In our case, this leads to a url like the following:

```
https://go.caldn.net/1b39d497-bf14-45ed-b9af-2cfab5c1231a?customVar=%7B%22firstname%22%3A%20%22John%22%2C%20%22lastname%22%3A%20%22Doe%22%7D
```

<br />

--- 

<br />

**That's it.**

When the user clicks the link, the landingpage also fills the placeholder with the provided information. Of course, it always makes sense to test this, before putting it into production!

Enjoy! 😊