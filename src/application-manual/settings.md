---
title: Manage Account and Organization Settings
description: Update your profile, secure your account, manage billing, and find API, sender email, and custom domain settings.
outline: [2,3]
---

# Manage Account and Organization Settings

Open the cog icon in the menu to reach **Settings**. Use **User**, **Organization**, **Technical**, or **Plan** depending on what you want to change.

[Open Settings in the app](https://app.add-to-calendar-pro.com/settings)

## User settings

Update your name, salutation/pronouns, time zone, and preferred light or dark theme. The account time zone helps display dates inside the app; check the event's own time zone separately when creating an event.

Leave **Hide Hints** off while learning the app. **Email updates** controls product news and marketing communication, not the messages your attendees receive through RSVP.

### Login and email address

Your login email cannot be edited directly. To use another address, invite it as a new [team member](/application-manual/team), accept the invitation, and make sure it has the access you need before removing the old account.

For a password login, **Change Password** logs you out and sends an email with a reset link. If you use Google or GitHub, manage that login with the respective provider.

### Two-factor authentication

For a password-based account, open **Two-Factor Authentication**, enter your password, scan the displayed QR code with your authenticator app, and enter its generated code to finish activation. Keep access to that authenticator for future logins.

## Organization settings

Admins can update the organization name, billing email, address, VAT ID, and logo. The logo can appear in related emails. Keep billing information accurate before making a purchase.

Events and other content belong to the organization, not to the person who created them. This is why colleagues can continue working after another team member leaves.

## Technical

This area is managed by admins. You usually only need it when connecting another service or customizing how emails are sent.

### API Keys {#api-keys}

Choose **New API Key**, enter a recognizable name, select **Read** or **Read & Write**, and optionally set an expiration date. Use only the access needed by the connected service.

Copy the key into that service's connection settings. You can disable a key temporarily or delete it permanently; either action affects integrations using it. Follow the existing [API authentication guide](/api/auth) for technical instructions. Never put an API key into a public website button; that uses a ProKey instead.

### Email Sender Address

Choose a provided sending address or a custom profile. A custom profile requires your email provider's SMTP details. Ask your email administrator to enter and check those settings.

Changing the sender address resets the SMTP settings. Displayed **From Name** and **Reply to** addresses can be set separately in [email templates](/application-manual/email-templates).

### Custom domain

When your organization has custom-domain capacity, Technical shows its global default domain. A [landing page template](/application-manual/landing-pages) can select an available page-specific domain. Contact support if you need help with domain setup.

## Plan settings

Check your current plan, renewal date, and available monthly events. **Manage Purchases** opens Paddle to view invoices and update payment details. Use the amounts shown in the app for current pricing.

Where available, **Auto-Scale** lets you create additional events after using your allowance, with extra usage charges. Disabling it prevents further automatic extras; it does not cancel the plan.

Cancellation offers immediate termination or termination at the end of the billing period. Read the selected option before confirming: immediate cancellation also ends access immediately.

## Delete your account

The **Danger Zone** is under User settings. If others remain, ensure another person is an admin first. If you are the last user, deletion also permanently removes the organization and its data. The app may require you to cancel an active subscription first.
