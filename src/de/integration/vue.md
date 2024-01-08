
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

## Schritt 3: Optimiere die Vue-Konfiguration

Theoretisch war es das schon.

Vue funktioniert wunderbar mit Web Components.

Allerdings wirst du feststellen, dass die Anwendung in deiner Browser-Konsole eine Warnung wirft.
Um diese aufzulösen musst du dem Compiler ein paar mehr Informationen mitgeben.

Dies geschieht tendenziell in der `vite.config.js`. Je nach Umgebung kannst du es aber auch an anderen Stellen integrieren. Prüfe hierzu die offizielle Vue Dokumentation: [Hier klicken](https://vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue).

```javascript
// vite.config.js oder vite.config.ts

compilerOptions: {
  isCustomElement: (tag) => tag.includes('-')
}
```

Für den Fall, dass der Add to Calendar Button der einzige Web Component in deinem Projekt ist, kannst du hierbei auch etwas konkreter werden.

```javascript
// vite.config.js oder vite.config.ts

compilerOptions: {
  isCustomElement: (tag) => tag === 'add-to-calendar-button'
}
```

## Schritt 4: Loslegen

Beginne mit der Nutzung, indem du einen `<add-to-calendar-button proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.
