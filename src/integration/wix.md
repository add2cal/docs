
# How to use Buttons and RSVP Forms with Wix.com

::: warning App vs. PRO
The following instructions describe the integration of the PRO buttons and forms into Wix!

For use cases where only a simple button is used, we also offer an official app in the Wix App Market, which, however, is not connected to our PRO offering!
:::


## Step 0: Prerequisites

When integration Add to Calendar Buttons or RSPV forms, you need to use the "Custom Element" of Wix ([Wix Help Article](https://support.wix.com/en/article/wix-editor-adding-a-custom-element-to-your-site)).

**This comes with some additional requirements!**

* You need to have a Wix Premium Plan.
* You need to connect a domain with your website.
* YOu need to make sure there are no ads on your website.

## Step 1: Create a Custom Element

* Add a new element from the menu and select the custom element one.
* You should see a fance frame with an image and some text in it. Click it!
* Now click the "Choose Source" button.
* You should be given the option to load your script from a server url or a velo file.
* You would select "Server URL" and use the file from jsDelivr as described in the general part of this documentation:
```
https://cdn.jsdelivr.net/npm/add-to-calendar-button@2
```
* Next, scroll down in the panel and change the "Tag name" field to `add-to-calendar-button`.

<br />

::: info
While it is possible to add our npm package to your site, create a velo file, where you import "add-to-calendar-button", and select this file as velo file here, we recommend to rather go with the CDN version here!
:::

## Step 2: Specify the ProKey Attribute

* Close the panel from step 1 and click "Set Attributes".
* Create a new attribute by clicking the button in the panel, which is also labeled "Set Attributes".
* As name, you would use `proKey`.
* As value, you use the **proKey of your event**.
* That's it.

## Step 3: Test it

* Your button should already show up.
* Move it around and position it the way you want.
* **Next:** Publish your page and test the button on your live website. _You should not test it in the preview (see below)._

<br /><br />

## Mind the Glitch!

When integrating the element in Wix, you might observe some strange behavior in the editor preview.

Within the editor itself, the element looks exactly as it should.

![Editor](/screenshots/wix-editor.png)

When starting the official preview and interacting with the button/form, you will see things being cut off.

This happens because within the editor and preview, due to security reasons, Wix puts the element into a rather restricted iframe.

![Preview](/screenshots/wix-preview.png)

**Don't worry!**

As soon as you publish your site, on the live website, it all looks fine again! 😊

![Live](/screenshots/wix-public.png)
