---
title: RSVP-E-Mails und Erinnerungen gestalten
description: Erstelle eigene RSVP-E-Mails, wähle den Nachrichtentyp, verknüpfe Templates mit Formularen und teste den E-Mail-Ablauf.
outline: [2,3]
---

# RSVP-E-Mails und Erinnerungen gestalten

E-Mail-Templates bestimmen die Nachrichten während Anmeldung und Antwortverwaltung. Jedes Template hat einen **Typ** und wird im passenden Feld eines RSVP-Templates ausgewählt.

## Die passende Nachricht wählen

| Typ | Wann sie verwendet wird |
| :--- | :--- |
| **Double-Opt-In (DOI)** | Fordert zur Bestätigung der E-Mail-Adresse auf. |
| **Dankes-E-Mail** | Folgt nach der Bestätigung des Double-Opt-Ins. |
| **Bestätigung Anmeldung** | Bestätigt eine Anmeldung ohne Double-Opt-In. |
| **Bestätigung Änderung** | Bestätigt eine geänderte RSVP-Antwort. |
| **Event-Update** | Informiert bei einem veröffentlichten Event-Update, wenn du die Benachrichtigung auswählst. |
| **Magic Login Link** | Öffnet den Zugang zur persönlichen Antwortverwaltung. |
| **Erinnerung** | Erinnert vor dem Event, wenn eine Erinnerung eingestellt wurde. |
| **Erneute Anmeldung / Falscher Absender** | Hilft bei wiederholter Anmeldung oder einer Kalenderantwort von einer anderen E-Mail-Adresse. |

## Template erstellen

1. Öffne **Templates → E-Mail** und erstelle ein Template.
2. Wähle **Typ** und **Internen Namen**, etwa „Webinar-Bestätigung — Deutsch“.
3. Lade über den Button neben der Typauswahl die Standardinhalte.
4. Passe **Betreff**, **Überschrift**, **Inhalt** und **Button-Text** an die Nachricht an.
5. Wähle Farben und Schrift und speichere.

Die Standardtexte helfen dir, den Zweck jeder Nachricht zu erhalten. Eine Anmeldebestätigung soll deutlich machen, dass die Anmeldung abgeschlossen ist. Eine DOI-E-Mail muss dagegen klar zur noch nötigen Bestätigung auffordern.

## Mit einem RSVP-Formular verbinden

Öffne das [RSVP-Template](/de/application-manual/rsvp-forms) und den Bereich **E-Mail-Templates**. Wähle dein gespeichertes Template im Feld des passenden Nachrichtentyps und speichere das RSVP-Template.

Ein E-Mail-Template wird durch seine Erstellung noch nicht mit einem Event verbunden. Für nicht angepasste Nachrichtentypen bleiben die Standardnachrichten aktiv. Das Erinnerungsfeld ist relevant, wenn **X Tage vorher Erinnerung senden** eingestellt ist.

## Absender und Antwortadresse festlegen

**Von: Name** ist der angezeigte Absendername. **Antwort an** legt fest, wohin Antworten der Teilnehmer gehen. Beides richtet nicht das eigentliche Versandpostfach ein.

Den **E-Mail-Absender** legt ein Administrator unter **Einstellungen → Technisches** fest. Eine eigene Versandadresse erfordert SMTP-Daten deines E-Mail-Anbieters. Bitte den Verantwortlichen für eure E-Mails, diese einzurichten.

## Vor der breiten Verwendung testen

Die Testaktion im Template-Editor sendet eine Vorschau an die E-Mail-Adresse des angemeldeten Benutzers. Teste anschließend auch die vollständige Anmeldung bei einem Event, das dieses RSVP-Template verwendet.

Prüfe Betreff, Lesbarkeit, Button-Text, Antwortadresse und Darstellung auf dem Smartphone. Änderungen an einem gemeinsam verwendeten E-Mail-Template können sofort alle verbundenen RSVP-Templates betreffen. Erstelle für eine einzelne Abweichung ein separates Template.
