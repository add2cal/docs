---
outline: [2,3]
---

# Promoting your Newsletter efficiently

When you are dealing with events, you are usually also offering a newsletter.

**Time to promote it!**

## 🎯 The Goal

We want to connect a signup form with an Add to Calendar Button.

Whenever a user saves the event, we want to use the fact that he/she is already active and offer a newsletter signup.

## 📋 The Tools

In order to get this done, we basically need 3 things:

1. A respective event, which is responsible for the Add to Calendar Button.
2. A CTA template of the type "form", which will hold the signup form.
3. The option to create new subscribers via an API POST call at your newsletter system (and then usually an API key).

## 🧱 The Creation

Theoretically, you can do this all at once, when creating a new event.
To prevent any data loss, however, we recommend to create the CTA template first and the event second. This way, when creating the event, you would only need to link the CTA template instead of creating it all together.

**Let's go:**

1. Go to templates and select the "Call-to-Action" type.
2. Create a new entry.
3. Give it a catchy name and select the "Form" type.
4. Use the headline and text input for any additional information, like "Yeah, you made it!" and "One more step to never miss something cool again. Sign up for our newsletter!".
5. For the "URL", add the API endpoint.
6. Set a sexy submit button label like "Sign up now".
7. Add the respective fields one by one. If you name a hidden field "header" and its value is a JSON scheme, we will use this as the requests header information. In this case, we also send the form as JSON - therefore, you should create this no matter whether you need to send additional headers or not (use an empty object in this case: `{}`).
8. Save it.
9. Test it via the button on the right side - and adjust if necessary. Also make sure that the request is not blocked by any CORS settings at the targeted server.
10. Create a new event.
11. Activate the CTA option at the top.
12. Specify the event details as you like.
13. For the Call-to-Action template, select the one you have created before.
14. Save the event and integrate the Add to Calendar Button.
15. You are ready to collect newsletter subscribers! 🚀
