
# Wie man die Buttons und RSVP-Formulare mit simplem HTML/JavaScript nutzt

## Schritt 1: Skript-Integration via CDN

Lade das Script über das jsDelivr-CDN.

Du kannst das entsprechende script-Tag irgendwo auf deiner Seite platzieren. Generell empfehlen wir den `<head>`-Bereich. Es lädt asynchron und wird beim Rendern der Seite erst am Ende geladen, um nichts zu blockieren.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
```

## Schritt 2: Loslegen

Beginne mit der Nutzung, indem du einen `<add-to-calendar-button proKey="prokey-deines-events" />` Tag in deinen Quellcode einfügst.

<br />

## Bring your own button

Alternativ kannst du den Button oder Form auch programmatisch über die atcb_action Funktion auslösen. Hierzu musst du etwas mehr JavaScript-Code in deine Seite integrieren.

Beachte, dass hierbei ein Modal erzwungen wird.

Du solltest zudem ein HTML-Element als zweiten Paramter angeben. Auch wenn dieser optional ist, optimiert er die UX deiner Nutzer; vor allem bei Navigation über die Tastatur.

Im folgenden Beispiel nutzen wir dieses Element auch als Trigger bei Klick:

```html
<button id="my-custom-button">Hier klicken</button>

<script type="application/javascript">
  const button = document.getElementById('my-custom-button');
  button.addEventListener('click', () => atcb_action({ proKey: "prokey-deines-events"}, button));
</script>
```
