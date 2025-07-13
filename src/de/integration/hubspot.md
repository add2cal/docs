---
title: Wie man die Buttons und RSVP-Formulare mit HubSpot nutzt
description: Integriere Add to Calendar PRO mit HubSpot CRM. Füge Kalender-Buttons und RSVP-Formulare zu deinen HubSpot-Marketing-Workflows hinzu.
---

# Wie man die Buttons und RSVP-Formulare mit HubSpot nutzt

## Intro

Beim Erstellen von Webseiten und Landingpages mit HubSpot gelten einige Limitationen.

**Good News: Es ist trotzdem sehr einfach möglich einen Add to Calendar Button oder RSVP-Formular zu integrieren!**

## Schritt 1: Integriere unsere Skripte

Zunächst musst du unser Haupt-Skript sowie eine HubSpot-spezifische Erweiterung irgendwo auf der Seite unterbringen.

Dies kann ein Rich-Text-Quellcode, der Einbettungscode eines Video-Elements oder (im Webseiten-Fall) der Header-HTML-Bereich in den Einstellungen sein.

Wichtig: Du musst diesen Block nur 1x je Seite integrieren - unabhängig davon wie viele Add to Calendar Buttons und/oder RSVP-Formulare du auf einer Seite nutzt.

Kopiere den folgenden Code-Block und füge ihn dort ein:

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
<script type="text/javascript" async defer>document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".add-to-calendar-pro-frame");e.forEach(e=>{let t=e.innerHTML.trim(),a=t.match(/^[a-z0-9\-]+$/);if(a){let r=document.createElement("add-to-calendar-button");r.setAttribute("proKey",a[0]),e.parentNode.replaceChild(r,e)}})});</script>
```

## Schritt 2: Loslegen

Nun kannst du damit beginnen, deine Buttons und Formulare zu integrieren, indem du `<div></div>` Tags im Quellcode eines Rich-Text-Elements oder als "Einbettungscode" eines Video-Elements anlegst. Gib dem Tag die Klasse (class) "add-to-calendar-pro-frame" und kopiere deinen proKey.

Wir empfehlen zudem einen "Wrapper" um das Element, um die Positionierung zu optimieren.

Folge einfach folgendem Schema:

```html
<div style="width:fit-content;margin:auto;"><div class="add-to-calendar-pro-frame">prokey-deines-events</div></div>
```

<br /><br />

::: tip Sonderall Landingpage
Auf Landingpages kannst du leider kein globales Header-HTML definieren und in einigen Fällen auch nicht den Quellcode eines Rich-Text-Elements bearbeiten.

Nutze das Video-Element und füge beide Code-Blöcke von oben als Einbettungscode zu.
:::

::: warning Vorschau im Editor
Solltest du den Rich-Text-Quellcode anstelle des Video-Elements nutzen, siehst du das Add to Calendar Element nur im Vorschau-Modus oder der Live-Ansicht; nicht aber im Editor!

Bei Nutzung des Video-Elements wird der Button oder Formular u.U. doppelt dargestellt. Auch das ist lediglich im Editor der Fall!
:::