---
title: Wie man die Buttons und RSVP-Formulare mit Next.js nutzt
description: Integriere Add to Calendar PRO mit Next.js-Anwendungen. Vollständige Anleitung für Kalender-Buttons und RSVP-Formulare in Next.js-Projekten.
---

# Wie man die Buttons und RSVP-Formulare mit Next.js nutzt

Diese Anleitung gilt für den Next.js App Router mit React 19. React 19 unterstützt Web Components direkt. Nutze das Hauptpaket `add-to-calendar-button` und das Element `<add-to-calendar-button>`.

## Schritt 1: npm-Installation

```bash
npm install add-to-calendar-button
```

## Schritt 2: Komponente erstellen

`app/components/event-button.tsx`:

```tsx
'use client';

import 'add-to-calendar-button';

export default function EventButton() {
  return (
    <add-to-calendar-button prokey="prokey-deines-events"></add-to-calendar-button>
  );
}
```

Deine Event-Daten, Styles und RSVP-Einstellungen bleiben über den `prokey` mit der PRO App verbunden.

Importiere diese Client-Komponente in deiner Seite:

```tsx
// app/page.tsx
import EventButton from './components/event-button';

export default function Page() {
  return <EventButton />;
}
```

Die Direktive `'use client'` markiert die interaktive Komponente. Für eine vorgerenderte Button-Hülle gibt es zusätzlich den separaten SSR-Einstieg; siehe unten.

## Schritt 3: TypeScript für das Custom Element einrichten

Registriere den JSX-Typ einmal in einer von deiner `tsconfig.json` erfassten Deklarationsdatei. Für JavaScript-Projekte ist dieser Schritt nicht nötig.

```typescript
// src/global.d.ts
import type { AddToCalendarButtonType } from 'add-to-calendar-button';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'add-to-calendar-button': DetailedHTMLProps<
        Omit<HTMLAttributes<HTMLElement>, keyof AddToCalendarButtonType>,
        HTMLElement
      > & AddToCalendarButtonType;
    }
  }
}

export {};
```

Falls `compilerOptions.types` gesetzt ist, ergänze `react` und `react-dom` neben den vorhandenen Einträgen. Behalte zum Beispiel `vite/client` in einem Vite-Projekt bei.

## Bring your own button

Nutze `atcb_action` aus dem Hauptpaket in einem React-Klickhandler, um den Button oder das Formular als Modal zu öffnen. Übergib das auslösende Element für die Fokussteuerung.

```tsx
'use client';

import { atcb_action } from 'add-to-calendar-button';

export default function CustomEventButton() {
  return (
    <button
      onClick={(event) =>
        atcb_action({ prokey: 'prokey-deines-events' }, event.currentTarget)
      }
    >
      Event öffnen
    </button>
  );
}
```

## Styles und Sprachen

Das npm-Paket enthält standardmäßig nur den Standard-Style und Englisch. Importiere alle weiteren Styles und Sprachen, die du in der PRO App für deine Buttons und RSVP-Formulare auswählst:

```javascript
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

Füge die Imports neben dem Hauptimport oder in einem gemeinsamen Setup-Modul ein.

Alternativ kannst du Styles und Sprachen dynamisch von jsDelivr laden, indem du `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` am Element setzt. Dieselbe Strategie gilt für eigene Trigger; in `atcb_action` heißt die Option `styleSource`.

## Optional: Serverseitiges Rendering

Das Paket bietet einen separaten SSR-Einstieg für eine vorgerenderte Button-Hülle. Für PRO-Daten nutze die asynchrone Variante auf dem Server. Die vollständige Interaktion und RSVP-Formulare werden weiterhin im Browser initialisiert. Siehe [SSR mit PRO](/de/integration/general#ssr-mit-pro) und die [Button Next.js Anleitung](https://add-to-calendar-button.com/use-with-nextjs).
