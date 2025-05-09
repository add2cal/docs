# Making use of the integrated Webhooks

You can use webhooks to ping any other service or system, when things change at your Add to Calendar PRO events.

Per default, we send all data of the trigger element as JSON object with the key "element_data"; but you can also specify very custom payloads.

[Open in the app ❯](https://app.add-to-calendar-pro.com/webhooks)

## Potential Use Cases

* Additionally sending RSVP sign-ups to your CMS.
* Track the creation of events in your analytics tool to monitor your internal usage.

## How it works

Create a new webhook at the application.
There, you can specify all the relevant paramters:


| Field           | Content                                                                                                                                                                                                                                      |
| :---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name            | This is only an internal Name to identify your webhook at the overview.                                                                                                                                                                      |
| Status          | Can be used to disable the webhook temporarily, without deleting it.                                                                                                                                                                         |
| Trigger         | Trigger can be "Create", "Update", or "Delete". It defines at which action the webhook fires.                                                                                                                                                |
| Trigger Element | The Trigger Element specifies for which element type the action should apply. For example, Trigger "Update" with Trigger Element "Event" would fire every time, one of your events gets updated.                                             |
| Prokey Filter   | In the case of an RSVP answer, this would filter for a specific event. This way, not every single answer would trigger the webhook.                                                                                                          |
| Method          | The Method specifies how the call get send. Can be GET, POST, PUT, PATCH, or DELETE. Mind your security settings at the target system to not block the respective call!                                                                      |
| Payload URL     | The payload URL is the endpoint, the call gets sent to.                                                                                                                                                                                      |
| Header          | At the header input, you can add key-value pairs, which get sent in the header of the call.<br />This is usually helpful for authentication information. Depending on your case, you might also need to add other information to the header. |
| Body            | The body input als adds key-value pairs. Adding fields to the body, adds them in addition to the default "element_data".                                                                                                                     |

## Customize the payload with dynamic values

You can use variables to make custom data dynamic. Next to the "Trigger Element", you find a button, which shows you all available variables for your respective call. Mind that for a DELETE trigger, only the id can be used.

Those variables can be used in the header or body with double curly brackets.

For example, the variable "email", which would hold the user's email address at an RSVP signup, could be added as additional field to the body, setting the key to something like "user-email" and the value to "<span v-pre>{{email}}</span>".
