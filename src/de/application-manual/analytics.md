---
title: Event-Speicherung und Landingpage-Aufrufe tracken
description: Verfolge und analysiere, wie Nutzer deine Events in ihren Kalendern speichern. Überwache Engagement mit integrierten Analytics.
outline: [2,3]
---

# Nutzerinteraktionen tracken

## Das Speichern im Kalender

Für Events tracken wir, wann Benutzer sie in ihren Kalendern speichern.

::: warning Um genauer zu sein...
Wir erfassen die Initiierung des Speicher-Prozess über Klicks auf der Landingpage, E-Mail-Direktlinks und Add to Calendar Buttons mit aktiver Proxy-Option. Die tatsächliche Speicherung kann leider nicht erfasst werden, da diese in der Kalendar-App des Nutzer abläuft.
:::

Wir tracken nur Events über Add to Calendar Buttons, nicht für RSVP-Setups. Im RSVP-Fall gibt es eine ausführliche Übersichtsseite zu den gegebenen Antworten (genug Tracking).

## Landingpage-Aufrufe

Wir erfassen auch die Seitenaufrufe deiner Landingpages.

Dabei werden unter anderem das Land des Nutzers, eine mögliche Verweisquelle (Referrer) sowie UTM-Parameter erfasst. 
Diese Daten sind nicht personenbezogen und lassen sich keiner einzelnen Person zuordnen - du musst dir daher keine Sorgen um den Datenschutz machen.

Bzgl. der UTM-Parameter kannst du nachfolgende an jede URL zu deinen Landingpages anhängen; wir tracken sie automatisch:

* utm_source
* utm_medium
* utm_campaign
* utm_term
* utm_content

## Wo man diese Infos findet

Zu diesen Statistiken gelangst du über das jeweilige Event - entweder auf der Übersichtsseite oder der Detailseite des jeweiligen Events (ganz oben über den `Statistik`-Button).

Auf dieser Analytics-Seite kannst du die Anzahl der Speicherungen pro Kalenderanbieter sowie Landingpage-Aufrufe für einen bestimmten Zeitraum sehen. Du kannst den Zeitraum, für den du Daten überprüfen möchtest, nach Bedarf ändern; zwischen verschiedenen Visualisierungstypen wechseln und weitere Informationen erhalten, indem du über die Grafik hoverst.

Wenn wir ein Multi-Date-Event betrachten, bei dem der Benutzer mehrere Termine speichern muss, werden diese mit einer Nummernendung aufgeteilt - bspw. `google-2` für das zweite Datum, gespeichert mit der Google Kalender-Option.