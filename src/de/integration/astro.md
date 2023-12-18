
# Wie man die Buttons und RSVP-Formulare mit Astro nutzt

## Schritt 0: Wähle ein Vorgehen

Für Static Site Generators (SSG) empfehlen wir generell die Nutzung des Add to Calendar Buttons via CDN.

Alternativ kannst du aber auch das npm Package installieren und das Modul über eine Observer-Funktion implementieren.

Wir beschreiben nachfolgend alle Optionen.

## Schritt 1: Einrichtung

### Option A: Integration via CDN

Lade das Skript, indem du den nachfolgenden "Script Tag" im head-Bereich deiner Webseite einfügst.

Das Skript lädt automatisch auf nicht-blockierende Art und Weise. Daher ist es im Zweifel nicht entscheidend, wo genau es platziert wird.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
```

### Option B: npm Installation

Alternativ kannst du das Package auch aus der npm Registry installieren.

```bash
npm install add-to-calendar-button
```

...und einen Observer aufsetzen, der das Skript entsprechend lädt:

```html
<script type="module" hoist>
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      observer.disconnect();
      import('../../node_modules/add-to-calendar-button/dist/module/index.js');
    }
  });
  const instances = document.querySelectorAll('add-to-calendar-button');
  for (const instance of instances) observer.observe(instance);
</script>
```

## Schritt 2: Loslegen

Beginne mit der Nutzung, indem du einen `<add-to-calendar-button proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.
