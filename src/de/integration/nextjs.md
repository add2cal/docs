
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
