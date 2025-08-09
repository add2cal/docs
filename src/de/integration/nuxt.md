---
title: Wie man die Buttons und RSVP-Formulare mit Nuxt nutzt
description: Integriere Add to Calendar PRO mit Nuxt-Anwendungen. Vollständige Anleitung für Kalender-Buttons und RSVP-Formulare in Nuxt-Projekten.
---

# Wie man die Buttons und RSVP-Formulare mit Nuxt nutzt

## Schritt 1: npm Installation

Installiere das Paket aus der npm-Registry.

```bash
npm install add-to-calendar-button
```

## Schritt 2: Import

Importiere das Modul in der Komponente, in welcher du den Button verwenden möchtest.

```javascript
import 'add-to-calendar-button';
```

## Schritt 3: Optimiere die Konfiguration

Theoretisch war es das schon.

Vue funktioniert wunderbar mit Web Components.

Allerdings wirst du feststellen, dass die Anwendung in deiner Browser-Konsole eine Warnung wirft.
Um diese aufzulösen musst du dem Vue Compiler ein paar mehr Informationen mitgeben.

Dies geschieht tendenziell in einem Vue-Block in der `nuxt.config.ts`.

```javascript
// nuxt.config.js oder nuxt.config.ts

vue: {
  compilerOptions: {
    isCustomElement: (tag) => tag.includes('-'),
  },
}
```

Für den Fall, dass der Add to Calendar Button der einzige Web Component in deinem Projekt ist, kannst du hierbei auch etwas konkreter werden.

```javascript
vue: {
  compilerOptions: {
    isCustomElement: (tag) => tag === 'add-to-calendar-button',
  },
}
```

## Schritt 4: Loslegen

Beginne mit der Nutzung, indem du einen `<add-to-calendar-button proKey="prokey-deines-events"></add-to-calendar-button>` Tag in deinen Quellcode einfügst.

<br />

## Bring your own button

Alternativ kannst du den Button oder Form auch programmatisch über die atcb_action Funktion auslösen. Beachte, dass hierbei ein Modal erzwungen wird.

Wenn du mit dem npm-Package arbeitest, musst du atcb_action zunächst importieren:

```javascript
import { atcb_action } from "add-to-calendar-button";
```

Du solltest zudem ein HTML-Element als zweiten Paramter angeben. Auch wenn dieser optional ist, optimiert er die UX deiner Nutzer; vor allem bei Navigation über die Tastatur.

Im folgenden Beispiel nutzen wir dieses Element auch als Trigger bei Klick:

```javascript
const button = document.getElementById('my-custom-button');
button.addEventListener('click', () => atcb_action({ proKey: "prokey-deines-events"}, button));

```
