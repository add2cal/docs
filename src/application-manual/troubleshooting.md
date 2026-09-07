---
title: Fix Common Event and RSVP Problems
description: Find practical solutions for missing events, unpublished changes, full RSVP forms, email issues, and website display problems.
outline: [2,3]
---

# Fix Common Event and RSVP Problems

Start by opening the event in the app and checking its published landing page. This helps distinguish an event-setting problem from a website integration problem.

## I cannot find an event

Clear the search, group/date filters, and **Hide past events**. Try **Table View**: date-free forms and dynamic dates do not appear in Calendar View.

If it is still missing, confirm you are in the correct organization. Ask a colleague whether the event was moved or deleted before creating a duplicate.

## My changes are not visible

Check whether you saved a draft but have not selected **Publish**. After publishing, allow **3–10 minutes** for changes to reach the delivery systems, then reload the public page.

If a style or template change is missing, check that the event uses that item and that the event does not have unpublished draft changes. An already downloaded calendar file or imported calendar entry does not necessarily update with your published page.

## My button or RSVP form does not open

Check that the event is published, public, and associated with an active plan. **Set private** stops the public button and RSVP flow as well as delivery of the pre-built calendar file.

Open the landing page. If that works but the website does not, give your website team the ProKey, affected page URL, and your [integration guide](/integration/general). Check whether the style's **Past Date Handling** hides or disables an old event.

## The RSVP form is closed or full

Open its RSVP template and check **Expiration Date**, **Max. Total Signups**, and **Max. Attendees per Signup**. Pending email confirmations reserve places temporarily, even when the visible confirmed count is lower. See [RSVP status and counts](/application-manual/managing-rsvp).

## A registration or email is missing

Ask the attendee to check the address they entered and their spam folder. With double opt-in enabled, submitting the form is only the first step: the email link must be confirmed within 30 minutes.

Unconfirmed entries disappear after approximately 20–30 minutes. The person can register again if registration is still open. For a custom sender problem, ask your administrator to check **Settings → Technical → Email Sender Address**.

## Calendar choices or analytics are missing

Calendar options depend on the event type and device. Unsupported choices are hidden. Subscription calendars, for example, offer fewer options on some devices.

For missing save-click statistics, check the published style's **Proxy** setting and the report's date range. Direct calendar-file downloads are not tracked, and a save click does not prove the final calendar save. See [Analytics](/application-manual/analytics).

## A website element covers the calendar menu

Enable **Force Overlay** in the connected style and test again. For an inline RSVP form that is too narrow, ask your website team to check the width of its surrounding container.

## Public data and private events {#how-can-i-make-sure-there-is-no-data-publicly-available-on-the-internet}

Public event links can be forwarded. A landing page password does not protect direct calendar files. To stop public delivery, use **Set private** on the event; this also disables its button and RSVP form. For confidential workflows using individually generated calendar files only, see the technical [Dynamic Checkout guide](/recipes/dynamic-checkout).

## My social preview still shows old information {#social-preview}

First open the landing page to confirm the published information is correct. Social platforms can cache older preview images and text. Use the platform's preview-refresh tool if available; repeated changes in PRO cannot force every platform to refresh immediately.

## Get help with a specific problem

Use **Get Help** in the app. Include the event/group name or ProKey, the public page URL, what you expected, what happened, and your browser/device. Mention whether the issue also happens on the hosted landing page. Do not include passwords, API keys, or private attendee-management links.
