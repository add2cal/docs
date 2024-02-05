
# Wie man die Buttons und RSVP-Formulare in React nutzt

## Schritt 0: Wähle eine Lösung

Da React-Projekte sehr vielseitig sein können, gibt es auch mehrere mögliche Wege den Add to Calendar Button passend zu integrieren.

* In eher einfachen Projekten kann das Ganze als Web Component out-of-the-box genutzt werden.
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

## Schritt 3: Loslegen

### Option A: Web Component

Beginne mit der Nutzung, indem du einen `<add-to-calendar-button proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.

### Option B: React Wrapper

Sofern du den React Wrapper nutzt, sieht dein Tag ein wenig anders aus. Im Grunde nutzt du hierbei den importierten React-Component anstelle des Custom Elements (Web Component).

Beginne mit der Nutzung, indem du einen `<AddtoCalendarButton proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.

<br />

## Bring your own button

Alternativ kannst du den Button oder Form auch programmatisch über die atcb_action Funktion auslösen. Beachte, dass hierbei ein Modal erzwungen wird.

Wenn du mit dem npm-Package arbeitest, musst du atcb_action zunächst importieren:

```javascript
import { atcb_action } from "add-to-calendar-button";
```

Du solltest zudem ein HTML-Element als zweiten Paramter angeben. Auch wenn dieser optional ist, optimiert er die UX deiner Nutzer; vor allem bei Navigation über die Tastatur.

Im folgenden Beispiel nutzen wir dieses Element auch als Trigger bei Klick:

```javascript
const button = document.getElementById('my-custom-button');
button.addEventListener('click', () => atcb_action({ proKey: "prokey-deines-events"}, button));

```
