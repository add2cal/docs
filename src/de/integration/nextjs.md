
# Wie man die Buttons und RSVP-Formulare mit Next.js nutzt

## Schritt 1: npm-Installation

Da Next.js nicht so gut mit Webkomponenten zusammenarbeitet, empfehlen wir dringend, unser offizielles [React Wrapper](https://github.com/add2cal/add-to-calendar-button-react)-Paket anstelle des Standardpakets zu verwenden.

Es behebt bereits alle potenziellen Probleme und Schwierigkeiten.

```bash
npm install add-to-calendar-button-react
```

## Schritt 2: Importieren

Importiere das Modul in der Komponente, in welcher du den Button verwenden möchtest.

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
