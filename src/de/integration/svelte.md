---
title: Wie man die Buttons und RSVP-Formulare in Svelte nutzt
description: Integriere Add to Calendar PRO mit Svelte-Anwendungen. Vollständige Anleitung für Kalender-Buttons und RSVP-Formulare in Svelte-Projekten.
---

# Wie man die Buttons und RSVP-Formulare in Svelte nutzt

## Schritt 1: npm Installation

Installiere das Paket aus der npm-Registry.

```bash
npm install add-to-calendar-button
```

## Schritt 2: Importieren und verwenden

Lade das Hauptpaket in `onMount`, damit das Beispiel auch mit SvelteKit und serverseitigem Rendering funktioniert.

```svelte
<script>
  import { onMount } from 'svelte';

  onMount(() => {
    void import('add-to-calendar-button');
  });
</script>

<add-to-calendar-button prokey="prokey-deines-events"></add-to-calendar-button>
```

## Bring your own button

Öffne den Button oder das Formular über einen Klickhandler als Modal. Der dynamische Import läuft erst beim Klick im Browser. Übergib das auslösende Element für die Fokussteuerung.

```svelte
<script>
async function openEvent(event) {
  const trigger = event.currentTarget;
  const { atcb_action } = await import('add-to-calendar-button');
  atcb_action({ prokey: 'prokey-deines-events' }, trigger);
}
</script>

<button onclick={openEvent}>Open event</button>
```

## Styles und Sprachen

Das npm-Paket enthält standardmäßig nur den Standard-Style und Englisch. Importiere alle weiteren Styles und Sprachen, die du in der PRO App für deine Buttons und RSVP-Formulare auswählst:

```javascript
// Im <script>-Block deiner Komponente
onMount(() => {
  void (async () => {
    await Promise.all([
      import('add-to-calendar-button/styles/3d'),
      import('add-to-calendar-button/i18n/de'),
    ]);
    await import('add-to-calendar-button');
  })();
});
```

Ersetze den `onMount`-Callback aus dem ersten Beispiel durch diesen. Er registriert die benötigten Dateien vor der Initialisierung des Buttons.

Alternativ kannst du Styles und Sprachen dynamisch von jsDelivr laden, indem du `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` am Element setzt. Dieselbe Strategie gilt für eigene Trigger; in `atcb_action` heißt die Option `styleSource`.

## Optional: Serverseitiges Rendering

Das Paket bietet einen separaten SSR-Einstieg für eine vorgerenderte Button-Hülle. Für PRO-Daten nutze die asynchrone Variante auf dem Server. Die vollständige Interaktion und RSVP-Formulare werden weiterhin im Browser initialisiert. Siehe [SSR mit PRO](/de/integration/general#ssr-mit-pro) und die [Button Svelte Anleitung](https://add-to-calendar-button.com/use-with-svelte).
