
# Wie man die Buttons und RSVP-Formulare in Angular nutzt

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

## Schritt 3: Optimiere die Angular-Konfiguration

Damit Angular sauber mit Web Components arbeitet, musst du das **CUSTOM_ELEMENTS_SCHEMA** importieren und den **@NgModule/@Component**-Block entsprechend aktualisieren.

```typescript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//(...)

@NgModule({
  //(...),
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
//(...)
```

## Schritt 4: Loslegen

Beginne mit der Nutzung, indem du einen `<add-to-calendar-button proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.

## Data-Bindings richtig nutzen

Um Daten an ein spezifisches Attribut zu binden, musst du die Syntax [attr.PARAMETER]="deine Daten" verwenden.

Je nach Konfiguration könnte der Datenfluss nach dem ersten Rendern des Buttons erfolgen. Das ist kein Problem, aber du könntest Fehler in der Konsole sehen, wenn du im Debug-Modus bist, die behaupten, dass Daten fehlen. Beachte aus diesem Grund, dass das "Binding" der "identifier"-Option nicht funktionieren würde.

```javascript
<add-to-calendar-button [attr.proKey]="deineProKeyVariable" />
```
