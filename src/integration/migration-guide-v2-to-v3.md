---
title: V3 Migration Guide
description: Upgrade your Add to Calendar PRO integration from v2 to v3, including CDN scripts, npm packages, styles, and languages.
outline: [2,3]
---
# V3 Migration Guide

Version 3 keeps the `<add-to-calendar-button>` element and your existing PRO keys. You do not need to recreate your events. The main migration step depends on how your website loads the button: through a jsDelivr script or through an npm package.

This guide adapts the [Add to Calendar Button v2 to v3 migration guide](https://add-to-calendar-button.com/migration-guide-v2-to-v3) for Add to Calendar PRO customers.

## Which integration do you use?

| Integration | What you need to do |
| :--- | :--- |
| A `<script>` tag loading from `cdn.jsdelivr.net` | Remove any v2 version pin or change it to v3. Styles and languages load automatically. |
| An npm dependency imported in your website code | Upgrade the package and explicitly import the additional styles and languages you use, or have your IT team configure dynamic loading. |

If you are unsure, ask the team responsible for your website to check the script URL or the dependency in `package.json`.

## Integration via the jsDelivr script

Check the script tag in your website, shared layout, or tag manager. A URL containing `add-to-calendar-button@2`, including a specific version such as `@2.15.0`, stays on v2.

Replace it with the script we use in our [general integration instructions](/integration/general#using-it-via-cdn):

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
```

This URL follows the latest published version. If your IT team manages major upgrades explicitly, it can use `https://cdn.jsdelivr.net/npm/add-to-calendar-button@3` instead, which stays within v3. If you already use the unpinned URL above, no script URL change is needed.

**The browser script automatically loads the styles and languages needed by your buttons and RSVP forms.** You do not need to add imports when you change a style or language in the Add to Calendar PRO app. Your website must allow the script and its dynamically requested assets to load from the CDN.

Keep your existing element and PRO key:

```html
<add-to-calendar-button prokey="prokey-of-your-event"></add-to-calendar-button>
```

If your URL points to an old dedicated build such as `atcb-unstyle.min.js`, switch to the main script above. Legacy build paths remain compatibility shims in v3.

## Integration via the npm package

### Upgrade to v3

Update the dependency in your website project:

```bash
npm install add-to-calendar-button@3
```

Commit the updated dependency and lockfile, then rebuild and deploy your website. An npm integration does not upgrade just because a new version is published or you change something in the PRO app.

Use the main package entry. Replace legacy imports ending in `/unstyle`, `/no-pro`, or `/no-pro-unstyle` with:

```javascript
import 'add-to-calendar-button';
```

For React and Next.js, replace the unsupported React wrapper with the core package. Follow the updated [React](/integration/react) or [Next.js](/integration/nextjs) guide, including its JSX type declaration.

### Import your styles and languages

**Only the default button style and English are bundled by default.** Unlike v2, an npm import does not automatically include all other styles and languages. Import every additional style and language used by your PRO events, buttons, and RSVP forms.

For example, for the `3d` style and German:

```javascript
import 'add-to-calendar-button';
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

These imports make the assets available; your settings in the PRO app still determine which style and language a button uses. Without the required imports or a dynamic asset source, a new style or language selected in the app may not appear correctly on your website.

### Choose a shared loading strategy with your IT team

You can put these imports into a shared component or setup module and load it once through your website's shared entry point. Every button using that package instance can then use the registered styles and languages.

Discuss with your IT team whether to import only the assets you currently use or **all available styles and languages**. To include everything, add an explicit import for each supported style and locale to that shared module, following the example above. There is no `/styles/all` or `/i18n/all` entry.

Loading everything makes future style and language changes in the PRO app available on the website without another code change, as long as those assets exist in your installed version and you have not overridden the settings in code. The downside is a larger bundle: visitors load all those styles and languages even if the page only uses one. Newly released assets still require a package update.

### Advanced option: load assets dynamically

Your IT team can configure `style-source` so the npm integration fetches the required assets on demand. Despite its name, this option also determines where language files are loaded from.

**You can keep using the npm package and use jsDelivr only for dynamic loading of styles and languages. You do not need to self-host these files.** Keep your main package import:

```javascript
import 'add-to-calendar-button';
```

Then set the asset source on your button:

```html
<add-to-calendar-button
  prokey="prokey-of-your-event"
  style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"
></add-to-calendar-button>
```

This loads missing styles from `dist/styles/` and missing languages from the sibling `dist/locales/` directory on jsDelivr. For example, German loads from `https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/locales/de.json`. No separate imports are needed for assets loaded this way, and no additional CDN script tag is required.

The `@3` URL follows updates within v3. For an exact match with your installed npm package, replace `@3` with that package's full version and update both together. Keep the `/dist/styles/` suffix: the language loader replaces the final `styles/` with `locales/`.

Self-hosting remains an alternative. Copy `dist/styles/` and `dist/locales/` from the installed package into sibling directories on your website. For example:

```html
<add-to-calendar-button
  prokey="prokey-of-your-event"
  style-source="https://your-domain.com/atcb/styles/"
></add-to-calendar-button>
```

With this structure, styles load from `/atcb/styles/` and languages from `/atcb/locales/`. Use assets from the same package version as your integration and publish the full asset set if you want to support switching freely in the PRO app. Your IT team should manage hosting, caching, and any content security or cross-origin requirements.

This approach avoids bundling every style and language but adds network requests when assets are needed. The `load-all-styles` option can prefetch styles from the configured source; it does not load all languages. This setup is intended for experienced developers. The standard jsDelivr script already handles dynamic loading automatically.

## Check custom code for other v3 changes

For a standard PRO integration using only `prokey`, most configuration remains managed in the app. If your IT team has added custom code, check these changes too:

- **TypeScript:** use `prokey` instead of `proKey` in typed configuration objects, including calls to `atcb_action`. The old spelling still works as a runtime alias in plain JavaScript.
- **ICS timestamps:** replace `created` and `updated` with `icsCreated` and `icsUpdated` in JavaScript, or `ics-created` and `ics-updated` in HTML. The old names are no longer read.
- **HTML attributes:** prefer official kebab-case names such as `button-style` and `inline-rsvp`. Existing v2 aliases still work for now. JavaScript configuration properties remain camelCase.
- **Legacy calendar names:** existing values such as `Google` and `Outlook.com` still work; the official v3 values are lowercase, such as `google` and `outlookcom`.
- **Server and worker utilities:** import date helpers from `add-to-calendar-button/utils` when you need them without browser dependencies.
- **Custom URLs and UI selectors:** v3 rejects script-capable URL schemes and changes dropdown accessibility roles and modal markup. Check custom CSS and automated tests that depend on the old structure.

If you override any of these `customLabels` keys, rename them:

| v2 key | v3 key |
| :--- | :--- |
| `date.status.cancelled.cta` | `date.status.cancelled_cta` |
| `label.share.email.subject` | `label.share.email_subject` |
| `label.rsvp` | `label.rsvp.title` |
| `form.status` | `form.status.title` |
| `form.success` | `form.success.title` |

## Before publishing your updated website

1. Verify that your deployed script or installed package uses v3 and that no old v2 script is also loaded.
2. Check representative buttons and RSVP forms in every style and language you use, including settings managed in the PRO app.
3. Try changing a style or language in the app to confirm that your chosen loading strategy supports it.
4. Test saving an event and submitting an RSVP form in your supported browsers. The full v3 experience targets Baseline 2023 browsers, including Safari 16.4 and newer.
5. Check the browser console and network requests for missing assets or blocked loads.

For further technical details, see the [upstream migration guide](https://add-to-calendar-button.com/migration-guide-v2-to-v3).
