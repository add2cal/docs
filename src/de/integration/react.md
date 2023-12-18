
# Wie man die Buttons und RSVP-Formulare in React nutzt

## Schritt 0: Wähle eine Lösung

Da React-Projekte sehr vielseitig sein können, gibt es auch mehrere mögliche Wege den Add to Calendar Button passend zu integrieren.

* In eher einfachen Projekten kann das Ganze als Web Component out-of-the-box genutzt werden.
* Sofern du TypeScript nutzt, musst du ein entsprechendes Interface definieren.
* In allen Fällen kannst du alternativ zur nativen Nutzung auch den offiziellen [Add to Calendar Button React Wrapper](https://github.com/add2cal/add-to-calendar-button-react) nutzen. Dieser beinhaltet direkt eine tiefergehende TypeScript- und React-Unterstützung.

Choose your fighter!

## Schritt 1: npm Installation

### Option A: Web Component

Installiere das Package über die npm Registry.

```bash
npm install add-to-calendar-button
```

### Option B: React Wrapper

Falls du den spezialisierteren React-Wrapper nutzt, installierst du stattdessen folgendes Package:

```bash
npm install add-to-calendar-button-react
```

## Schritt 2: Import

### Option A: Web Component

Importiere das Modul in deine Komponente, in welcher du den Button nutzen möchtest.

```typescript
import 'add-to-calendar-button';
```

### Option B: React Wrapper

Bei der Implementierung des React Wrappers sieht das Import-Statement etwas anders aus.

```typescript
import { AddToCalendarButton } from 'add-to-calendar-button-react';
```

## Schritt 3: Optimiere die TypeScript-Config für den Web Component

::: info
Dieser Schritt ist nur notwendig, wenn du NICHT den React-Wrapper nutzt UND mit TypeScript arbeitest!
:::

In diesem Fall musst du ein entsprechendes globales JSX Interface definieren. Das erledigst du in einer *.d.ts Type Datei (bspw. "global.d.ts"), die von deiner tsconfig gelesen wird (dort sollte die "typeRoots" Option entsprechend spezifiziert sein).

```typescript
// global.d.ts

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['add-to-calendar-button']: CustomElement<AddToCalendarButton>;
    }
  }
}
```

## Schritt 4: Loslegen

### Option A: Web Component

Beginne mit der Nutzung, indem du einen `<add-to-calendar-button proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.

### Option B: React Wrapper
If you went for the React Wrapper, the tag will look a little different. Basically, you then use the imported React component instead of the custom element (Web Component).

Beginne mit der Nutzung, indem du einen `<AddtoCalendarButton proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.
