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

## Schritt 2: Client-Plugin erstellen

Lege `plugins/add-to-calendar.client.ts` in deinem Nuxt-App-Verzeichnis an (bei der Standardstruktur von Nuxt 4 unter `app/plugins/`). Die Endung `.client.ts` lädt das Hauptpaket nur im Browser.

```typescript
import 'add-to-calendar-button';

export default defineNuxtPlugin(() => {});
```

## Schritt 3: Custom Element registrieren

Ergänze diese Compiler-Einstellung in deiner bestehenden Konfiguration, damit Vue das Element als Web Component erkennt.

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'add-to-calendar-button',
    },
  },
});
```

## Schritt 4: Loslegen

```vue
<template>
  <ClientOnly>
    <add-to-calendar-button prokey="prokey-deines-events"></add-to-calendar-button>
  </ClientOnly>
</template>
```

## Bring your own button

Öffne den Button oder das Formular über einen Klickhandler als Modal. Der dynamische Import läuft erst beim Klick im Browser. Übergib das auslösende Element für die Fokussteuerung.

```vue
<script setup>
async function openEvent(event) {
  const trigger = event.currentTarget;
  const { atcb_action } = await import('add-to-calendar-button');
  atcb_action({ prokey: 'prokey-deines-events' }, trigger);
}
</script>

<template>
  <button @click="openEvent">Open event</button>
</template>
```

## Styles und Sprachen

Das npm-Paket enthält standardmäßig nur den Standard-Style und Englisch. Importiere alle weiteren Styles und Sprachen, die du in der PRO App für deine Buttons und RSVP-Formulare auswählst:

```javascript
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

Füge die Imports in dein `.client.ts`-Plugin ein.

Alternativ kannst du Styles und Sprachen dynamisch von jsDelivr laden, indem du `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` am Element setzt. Dieselbe Strategie gilt für eigene Trigger; in `atcb_action` heißt die Option `styleSource`.

## Optional: Serverseitiges Rendering

Das Paket bietet einen separaten SSR-Einstieg für eine vorgerenderte Button-Hülle. Für PRO-Daten nutze die asynchrone Variante auf dem Server. Die vollständige Interaktion und RSVP-Formulare werden weiterhin im Browser initialisiert. Siehe [SSR mit PRO](/de/integration/general#ssr-mit-pro) und die [Button Nuxt Anleitung](https://add-to-calendar-button.com/use-with-nuxt).

Verwende für die generierte SSR-Hülle nicht `v-html`: Vue würde beim Hydrieren die Shadow-DOM-Struktur ersetzen. Die offizielle Nuxt-Anleitung zeigt eine Direktive, die bereits vorhandenes Server-Markup erhält.
