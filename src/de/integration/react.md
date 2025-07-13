---
title: Wie man die Buttons und RSVP-Formulare in React nutzt
description: Integriere Add to Calendar PRO mit React-Anwendungen. Vollständige Anleitung für Kalender-Buttons und RSVP-Formulare in React-Projekten.
---

# Wie man die Buttons und RSVP-Formulare in React nutzt

## Schritt 0: Wähle eine Lösung

Da React-Projekte sehr vielseitig sein können, gibt es auch mehrere mögliche Wege den Add to Calendar Button passend zu integrieren.

* In eher einfachen Projekten kann das Ganze theoretisch über den üblichen Web Component out-of-the-box genutzt werden.
* Wir empfehlen im Zweifel aber unbedingt den offiziellen [Add to Calendar Button React Wrapper](https://github.com/add2cal/add-to-calendar-button-react) zu nutzen. Dieser beinhaltet direkt eine tiefergehende TypeScript- und React-Unterstützung.

Im Folgenden beziehen wir uns auf letzteres.

## Schritt 1: npm Installation

Installiere das Package über die npm Registry.

```bash
npm install add-to-calendar-button-react
```

## Schritt 2: Import

Importiere das Modul in deine Komponente, in welcher du den Button nutzen möchtest.

```typescript
import { AddToCalendarButton } from 'add-to-calendar-button-react';
```

## Schritt 3: Loslegen

Beginne mit der Nutzung, indem du einen `<AddtoCalendarButton proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.

::: warning use client!
Der Button funktioniert nur client-seitig!

Du solltest daher unbedingt an geeigneter Stelle `'use client';` nutzen.
:::

<br />

## Bring your own button

Alternativ kannst du den Button oder Form auch programmatisch über die atcb_action Funktion auslösen. Beachte, dass hierbei ein Modal erzwungen wird.

Wenn du mit dem npm-Package arbeitest, musst du atcb_action zunächst importieren:

```javascript
import { atcb_action } from "add-to-calendar-button-react";
```

Du solltest zudem ein HTML-Element als zweiten Paramter angeben. Auch wenn dieser optional ist, optimiert er die UX deiner Nutzer; vor allem bei Navigation über die Tastatur.

Im folgenden Beispiel nutzen wir dieses Element auch als Trigger bei Klick:

```javascript
const button = document.getElementById('my-custom-button');
button.addEventListener('click', () => atcb_action({ proKey: "prokey-deines-events"}, button));

```
