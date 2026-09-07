---
title: Wie man die Buttons und RSVP-Formulare in Vue 3 nutzt
description: Integriere Add to Calendar PRO mit Vue 3-Anwendungen. Vollständige Anleitung für Kalender-Buttons und RSVP-Formulare in Vue-Projekten.
---

# Wie man die Buttons und RSVP-Formulare in Vue 3 nutzt

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

## Schritt 3: Custom Element registrieren

Ergänze diese Compiler-Einstellung in deiner bestehenden Konfiguration, damit Vue das Element als Web Component erkennt.

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag === 'add-to-calendar-button',
        },
      },
    }),
  ],
});
```

## Schritt 4: Loslegen

Beginne mit der Nutzung, indem du einen `<add-to-calendar-button prokey="prokey-deines-events"></add-to-calendar-button>` Tag in deinen Quellcode einfügst.

<br />

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

Füge die Imports neben dem Hauptimport oder in einem gemeinsamen Setup-Modul ein.

Alternativ kannst du Styles und Sprachen dynamisch von jsDelivr laden, indem du `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` am Element setzt. Dieselbe Strategie gilt für eigene Trigger; in `atcb_action` heißt die Option `styleSource`.
