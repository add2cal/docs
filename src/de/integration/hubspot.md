
# Wie man die Buttons und RSVP-Formulare mit HubSpot nutzt

## Intro

Beim Erstellen von Webseiten und Landingpages mit HubSpot gelten einige Limitationen.

**Good News: Es ist trotzdem sehr einfach möglich einen Add to Calendar Button oder RSVP-Formular zu integrieren!**

Einzige Voraussetzung: Du musst in der Lage sein den Quellcode eines Rich-Text-Felds zu bearbeiten. Beim Arbeiten mit Landingpages kann dies zusätzlich limitiert sein - abhängig von der gewählten Vorlage.

## Schritt 1: Integriere unsere Skripte

Zunächst musst du unser Haupt-Skript sowie eine HubSpot-spezifische Erweiterung irgendwo auf der Seite unterbringen.

Dies kann der erwähnte Rich-Text-Quellcode sein - oder (im Webseiten-Fall) der Header-HTML-Bereich in den Einstellungen.

Wichtig: Du musst diesen Block nur 1x je Seite integrieren - unabhängig davon wie viele Add to Calendar Buttons und/oder RSVP-Formulare du auf einer Seite nutzt.

Kopiere den folgenden Code-Block und füge ihn dort ein:

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
<script type="text/javascript" async defer>document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".add-to-calendar-pro-frame");e.forEach(e=>{let t=e.innerHTML.trim(),a=t.match(/^[a-z0-9\-]+$/);if(a){let r=document.createElement("add-to-calendar-button");r.setAttribute("proKey",a[0]),e.parentNode.replaceChild(r,e)}})});</script>
```

## Schritt 2: Loslegen

Nun kannst du damit beginnen, deine Buttons und Formulare zu integrieren, indem du <div></div> Tags im Quellcode eines Rich-Text-Elements anlegst. Gib dem Tag die Klasse (class) "add-to-calendar-pro-frame" und kopiere deinen proKey.

Folge einfach folgendem Schema:

```html
<div class="add-to-calendar-pro-frame">prokey-of-your-event</div>
```
