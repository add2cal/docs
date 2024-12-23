
# Wie man die Buttons und RSVP-Formulare mit Astro nutzt

## Schritt 0: Wähle das beste Vorgehen

Du kannst einfach das Add to Calendar Button Skript via CDN laden und so wie in der [allgemeinen HTML-Anleitung](/de/integration/html.html) beschrieben integrieren.  
Hierbei muss du darauf achten, dass das Ganze nur client-seitig geschieht. Zudem ist dieser Weg nicht ganz ideal.

Wir empfehlen die Nutzung des React-Wrapper npm-Packages, die Erstellung einer benutzerdefinierten JSX-Komponente und die Integration dieser Komponente mit dem Attribut `client:only="react"`.

## Schritt 1: Setup

### Erstelle eine neue Komponente

Erstelle eine neue Komponente im components-Verzeichnis deines Astro-Projekts.  
Nenne diese "AddtoCalendarButton.tsx".   
Falls du mehrere Buttons nutzen möchtest, kannst du entweder mehrere Komponenten erstellen oder das Ganze über entsprechende Props dynamisch gestalten.

### Installiere das React-Wrapper npm-Package

Installiere das Package über die npm Registry.

```bash
npm install add-to-calendar-button-react
```

...und importiere es in deine Komponente.

```tsx
import { AddToCalendarButton } from 'add-to-calendar-button-react';
```

## Schritt 2: Definiere den Button

Definiere den Button in deiner Komponente.  
In unserem Beispiel haben wir den ProKey als Prop definiert, um ihn dynamisch zu halten.

```tsx
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import type { AddToCalendarButtonType } from 'add-to-calendar-button-react';

export default function atcb(props: AddToCalendarButtonType) {
  return (
    <AddToCalendarButton proKey={props.prokey} ></AddToCalendarButton>
  );
}
```

## Schritt 3: Loslegen

Du kannst die Komponente nun überall importieren, wo sie benötigt wird und sie wie jede andere benutzten.

Dein Code kann hierbei bspw. wie folgt aussehen.

```astro
---
import AddToCalendarButton from '../components/AddToCalendarButton.tsx';
import Layout from '../layouts/Layout.astro';
---
<Layout>
<AddToCalendarButton client:only="react" prokey="prokey-deines-events" />
</Layout>
```
