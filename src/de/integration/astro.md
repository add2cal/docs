---
title: Wie man die Buttons und RSVP-Formulare mit Astro nutzt
description: Integriere Add to Calendar PRO mit Astro-Anwendungen. Vollständige Anleitung für Kalender-Buttons und RSVP-Formulare in Astro-Projekten.
---

# Wie man die Buttons und RSVP-Formulare mit Astro nutzt

## Schritt 0: Wähle die richtige Architektur

Du kannst die Web-Komponente direkt dort verwenden, wo du sie brauchst, oder indirekt über eine Komponente (wie z. B. add-to-calendar.astro, die auf der jeweiligen Seite importiert wird).

Wir empfehlen den direkten Ansatz, wenn du nur 1 Element nutzt. Bei mehr als 1 Element empfiehlt sich die Hilfs-Komponente.

Nachfolgend beschreiben wir den Weg über die Hilfs-Komponente. Wenn du sie direkt einsetzt, erstelle einfach keine Komponente, sondern füge den `<add-to-calendar-button />`-Code direkt dort ein, wo du ihn benötigst.

## Schritt 1: npm-Installation

Installiere das Paket aus der npm-Registry.

```bash
npm install add-to-calendar-button
```

## Schritt 2: Erstelle die Komponente

Erstelle eine neue Komponente `add-to-calendar.astro` (üblicherweise unter `./src/components/`).

## Schritt 3: Definiere die Props

Definiere die Props der Komponente. Dies sollte mindestens der ProKey sein.

```tsx
import type { AddToCalendarButtonType } from 'add-to-calendar-button';

interface Props {
  prokey: AddToCalendarButtonType['proKey'];
} 

const { prokey } = Astro.props as Props;
```

## Schritt 4: Füge das Script hinzu

Füge hinzu:

```html
<add-to-calendar-button prokey={prokey} />
```

Gefolgt von:

```html
<script>
  import 'add-to-calendar-button';
</script>
```

## Schritt 5: Nutze die Komponente

Auf jeder anderen Seite (oder Komponente) importierst und nutzt du sie nun.

```tsx
import AddToCalendarButton from "../components/add-to-calendar-button.astro"; // passe den Pfad an deine Projektstruktur an
```

<br />

```astro
<AddToCalendarButton prokey="prokey-of-your-event" />
```
