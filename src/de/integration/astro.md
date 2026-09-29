---
title: Wie man die Buttons und RSVP-Formulare mit Astro nutzt
description: Integriere Add to Calendar PRO mit Astro-Anwendungen. Vollständige Anleitung für Kalender-Buttons und RSVP-Formulare in Astro-Projekten.
---

# Wie man die Buttons und RSVP-Formulare mit Astro nutzt

## Schritt 1: npm-Installation

```bash
npm install add-to-calendar-button
```

## Schritt 2: Gemeinsame Komponente erstellen

Lege `src/components/add-to-calendar.astro` an. Die Props stehen im Astro-Frontmatter; das normale `<script>` lädt das Paket im Browser.

```astro
---
import type { AddToCalendarButtonType } from 'add-to-calendar-button';

interface Props {
  prokey: NonNullable<AddToCalendarButtonType['prokey']>;
}

const { prokey } = Astro.props;
---

<add-to-calendar-button prokey={prokey}></add-to-calendar-button>

<script>
  import 'add-to-calendar-button';
  import 'add-to-calendar-button/styles/all';
  import 'add-to-calendar-button/i18n/all';
</script>
```

## Schritt 3: Komponente verwenden

```astro
---
import AddToCalendarButton from '../components/add-to-calendar.astro';
---

<AddToCalendarButton prokey="prokey-deines-events" />
```

## Styles und Sprachen

Das npm-Paket enthält standardmäßig nur den Standard-Style und Englisch. Da deine PRO-Konfiguration Styles und Sprachen remote ändern kann, stellen die All-Imports im Browser-`<script>` alle unterstützten Dateien deiner installierten Version ohne weiteres Deployment deiner Anwendung bereit.

Alternativ kannst du Styles und Sprachen dynamisch von jsDelivr laden, indem du `style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"` am Element setzt. Dieselbe Strategie gilt für eigene Trigger; in `atcb_action` heißt die Option `styleSource`.

## Optional: Serverseitiges Rendering

Das Paket bietet einen separaten SSR-Einstieg für eine vorgerenderte Button-Hülle. Für PRO-Daten nutze die asynchrone Variante auf dem Server. Die vollständige Interaktion und RSVP-Formulare werden weiterhin im Browser initialisiert. Siehe [SSR mit PRO](/de/integration/general#ssr-mit-pro) und die [Button Astro Anleitung](https://add-to-calendar-button.com/use-with-astro).
