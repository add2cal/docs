---
title: Häufige Probleme mit Events und RSVP lösen
description: Finde Hilfe bei fehlenden Events, unveröffentlichten Änderungen, vollen Formularen, E-Mail-Problemen und der Website-Darstellung.
outline: [2,3]
---

# Häufige Probleme mit Events und RSVP lösen

Öffne zuerst das Event in der App und prüfe seine veröffentlichte Landingpage. So lässt sich leichter unterscheiden, ob eine Event-Einstellung oder die Website-Integration betroffen ist.

## Ich finde ein Event nicht

Entferne Such-, Gruppen- und Datumsfilter sowie **Vergangene Events ausblenden**. Probiere die **Tabellen-Ansicht**: Formulare ohne Termin und dynamische Daten erscheinen nicht in der Kalenderansicht.

Prüfe bei Bedarf die Organisation, in der du angemeldet bist. Frage Kollegen, ob das Event verschoben oder gelöscht wurde, bevor du es doppelt anlegst.

## Meine Änderungen sind nicht sichtbar

Prüfe, ob du nur einen Entwurf gespeichert und noch nicht **Veröffentlichen** gewählt hast. Warte nach der Veröffentlichung **3–10 Minuten** und lade die öffentliche Seite erneut.

Fehlt eine Style- oder Template-Änderung, prüfe die Verknüpfung im Event und mögliche unveröffentlichte Entwurfsänderungen. Eine schon heruntergeladene Kalenderdatei oder ein importierter Kalendereintrag aktualisiert sich nicht zwingend zusammen mit der Seite.

## Button oder RSVP-Formular öffnen sich nicht

Prüfe, ob das Event veröffentlicht und öffentlich ist und eine aktive Lizenz besteht. Privatsetzen beendet den öffentlichen Button- und RSVP-Ablauf sowie die Bereitstellung der vorgefertigten Kalenderdatei.

Öffne die Landingpage. Funktioniert diese, aber nicht die Webseite, gib deinem Webseiten-Team ProKey, betroffene URL und [Integrationsanleitung](/de/integration/general). Prüfe auch, ob **Verhalten nach Ablauf** im Style ein altes Event verbirgt oder deaktiviert.

## Das RSVP-Formular ist geschlossen oder voll

Prüfe im RSVP-Template **Ablaufdatum**, **Max. Zusagen gesamt** und **Max. Teilnehmer pro Zusage**. Ausstehende E-Mail-Bestätigungen reservieren vorübergehend Plätze, selbst wenn die sichtbare bestätigte Anzahl niedriger ist. Siehe [RSVP-Status und Teilnehmerzahlen](/de/application-manual/managing-rsvp).

## Eine Anmeldung oder E-Mail fehlt

Bitte den Teilnehmer, eingegebene Adresse und Spamordner zu prüfen. Mit Double-Opt-In ist das Absenden nur der erste Schritt: Der E-Mail-Link muss innerhalb von 30 Minuten bestätigt werden.

Unbestätigte Einträge verschwinden nach ungefähr 20–30 Minuten. Solange die Anmeldung offen ist, kann sich die Person erneut anmelden. Bei Problemen mit einem eigenen Absender prüft euer Admin **Einstellungen → Technisches → E-Mail-Absender**.

## Kalender-Optionen oder Statistikwerte fehlen

Kalender-Optionen hängen vom Event-Typ und Gerät ab. Nicht unterstützte Optionen werden ausgeblendet. Abonnement-Kalender bieten auf manchen Geräten beispielsweise weniger Auswahl.

Für fehlende Kalender-Klicks prüfe **Proxy** im veröffentlichten Style und den Zeitraum des Berichts. Direkte Kalenderdatei-Downloads werden nicht erfasst. Ein Klick beweist außerdem nicht die abschließende Speicherung. Siehe [Statistiken](/de/application-manual/analytics).

## Andere Website-Elemente verdecken die Kalender-Auswahl

Aktiviere **Overlay erzwingen** im verbundenen Style und teste erneut. Ist ein eingebettetes RSVP-Formular zu schmal, bitte dein Webseiten-Team, die Breite des umgebenden Bereichs zu prüfen.

## Öffentliche Daten und private Events {#how-can-i-make-sure-there-is-no-data-publicly-available-on-the-internet}

Öffentliche Event-Links können weitergegeben werden. Ein Landingpage-Passwort schützt keine direkten Kalenderdateien. Wenn du die öffentliche Bereitstellung beenden möchtest, nutze **Privat setzen** beim Event; dadurch werden auch Button und RSVP-Formular deaktiviert. Für vertrauliche Abläufe mit ausschließlich individuell erzeugten Kalenderdateien findest du technische Schritte unter [Dynamic Checkout](/de/recipes/dynamic-checkout).

## Die Social-Vorschau zeigt alte Angaben {#social-preview}

Öffne zuerst die Landingpage und prüfe die veröffentlichten Angaben. Social-Media-Plattformen können ältere Bilder und Texte zwischenspeichern. Nutze, falls vorhanden, das Vorschau-Aktualisierungswerkzeug der Plattform. Wiederholte Änderungen in PRO erzwingen nicht bei jedem Anbieter eine sofortige Aktualisierung.

## Hilfe für ein konkretes Problem

Nutze **Hilfe** in der App. Nenne Event-/Gruppenname oder ProKey, öffentliche URL, erwartetes und tatsächliches Verhalten sowie Browser und Gerät. Beschreibe, ob das Problem auch auf der gehosteten Landingpage auftritt. Sende keine Passwörter, API-Keys oder privaten Links zur Teilnehmerverwaltung.
