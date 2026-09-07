---
title: Event-Statistiken verstehen
description: Verstehe Kalender-Klicks, Landingpage-Aufrufe, Zeiträume und Kampagneninformationen in den Statistiken von Add to Calendar PRO.
outline: [2,3]
---

# Event-Statistiken verstehen

Die **Statistik** zeigt, wie Menschen mit deinem geteilten Event interagieren. Für Teilnahmezusagen nutzt du die separate [RSVP-Antwortenübersicht](/de/application-manual/managing-rsvp).

## Den Bericht öffnen

1. Finde das Event unter **Events**.
2. Öffne **Statistik** in der Übersicht oder in der Zusammenfassung des Events.
3. Wähle einen **Zeitraum**, etwa die letzten 7, 30 oder 90 Tage, oder einen eigenen Bereich.
4. Gruppiere die Ergebnisse nach Tagen oder Monaten, soweit verfügbar.
5. Bewege den Mauszeiger über eine Grafik, um Einzelwerte zu sehen.

Auch Abonnement-Gruppen haben eine Statistikansicht. Prüfe vor Vergleichen den Event- oder Gruppennamen, damit du die richtigen Daten betrachtest.

## Was eine Speicherung bedeutet

**Speicherungen** zählt den Beginn des Speichervorgangs: einen Klick auf eine Kalender-Option. Der Wert bestätigt **nicht**, dass jemand den letzten Speicherschritt in seiner Kalender-App abgeschlossen hat.

Erfasst werden Aktionen auf der Landingpage, über bereitgestellte E-Mail-Links und über Website-Buttons mit aktiver **Proxy**-Option im Style. Eine direkt geteilte `.ics`-Datei liefert diese Messung nicht.

Kalenderanbieter erscheinen getrennt, damit du die genutzten Optionen vergleichen kannst. Bei mehreren Terminen bezeichnet ein Zusatz wie `google-2` die Google-Kalender-Aktion zum zweiten Termin. Solche einzelnen Aktionen sind keine Anzahl eindeutiger Teilnehmer.

## Landingpage-Aufrufe einordnen

**Landingpage-Aufrufe** zeigt Besuche der gehosteten Seite. Zusätzlich gibt es Informationen zu Land, Referrer und Kampagnen, soweit verfügbar.

Ein Aufruf ist weder eine Anmeldung noch eine Kalenderspeicherung. Eine Person kann mehrfach kommen. Manche Besuche enthalten keinen brauchbaren Referrer oder Kampagnentag. Eine fehlende Quelle bedeutet deshalb nicht automatisch einen Messfehler.

## Kampagnen mit UTM-Tags vergleichen

Ergänze Kampagnentags am geteilten Landingpage-Link. Zum Beispiel:

```text
https://caldn.net/DEIN-PROKEY?utm_source=newsletter&utm_medium=email&utm_campaign=herbst-workshop
```

Nutze einheitliche Namen, damit du Kampagnen vergleichen kannst. Unterstützt werden `utm_source`, `utm_medium`, `utm_campaign`, `utm_term` und `utm_content`. Enthält der Link schon ein `?`, ergänzt du weitere Parameter mit `&`.

Trage Kampagnennamen statt personenbezogener Angaben in die URL ein. Der Bericht vergleicht Besucherquellen und dient nicht zur Identifizierung einzelner Teilnehmer.

## Wenn Zahlen unerwartet sind

Prüfe Zeitraum und ausgewähltes Event beziehungsweise Gruppe. Fehlen Klicks auf Website-Buttons, kontrolliere **Proxy** im veröffentlichten Style. Teste anschließend denselben Link, den dein Publikum verwendet.

Für bestätigte Teilnahme und herunterladbare Gästelisten nutze [RSVP-Antworten verwalten](/de/application-manual/managing-rsvp). Für zusätzliche Website-Messungen kann dein Webseiten-Team die Tracking-Optionen des Buttons nutzen. Ein Kalender-Klick sollte nicht als Teilnahme interpretiert werden.
