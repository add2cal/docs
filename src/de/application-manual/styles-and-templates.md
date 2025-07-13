---
title: Styles und Templates
description: Meistere Styles und Templates in Add to Calendar PRO. Konfiguriere visuelles Design und Funktionalität effizient über Events hinweg.
outline: [2,3]
---

# Styles und Templates
Styles und Templates sind Bausteine. Sie haben jeweils einen spezifischen Zweck, sind aber auch so organisiert, dass sie für ein oder mehrere Events verwendet werden können.

Obwohl du sie direkt während der Erstellung eines Events erstellen kannst, kannst du dies auch auf ihren spezifischen Seiten tun. Dort kannst du sie leicht organisieren und bearbeiten. Dies ermöglicht es dir zum Beispiel, einen Style zu ändern, der dann alle verbundenen Ereignisse gleichzeitig beeinflusst.

Wie vielleicht schon offensichtlich ist, definieren Styles Look and Feel deiner veröffentlichten Elemente. Sie berücksichtigen jedoch auch die Benutzerfreundlichkeit und UX - wie bspw. welche Kalenderanbieter für einen „Add to Calendar“-Button verfügbar sind.

Templates gibt es für RSVP-Formulare und -E-Mails, Call to Action (CTA)-Screens, sowie Landingpages.

Während RSVP-Formulare, Landingpage-Templates, CTA-Screens und Styles mit Events verknüpft werden können; werden E-Mails mit RSVP-Formularen verbunden.

::: info Baue deine Welt!
Das „Add to Calendar“-System ist so strukturiert, dass es dir maximale Flexibilität bietet, wenn du dein spezifisches Setup erstellst.

Stelle dir Styles und Templates als Farben vor, die du verwenden kannst, um deine Events in dem Look zu gestalten, den du dir vorstellst - plus allerlei benutzerdefinierte Funktionalitäten.
:::

## Über Styles

Styles definieren, wie ein „Add to Calendar“-Button oder RSVP-Formular oder jedes andere verbundene Element aussieht. Dies umfasst auch das allgemeine Verhalten sowie die verfügbaren Kalenderanbieter-Optionen.

Du kannst die Live-Vorschau verwenden, um direkt das Ergebnis deiner Änderungen zu überprüfen.

Da die meisten Einstellungen offensichtlich sind, beschreiben wir sie hier nicht im Detail.

Wann immer etwas ein wenig komplizierter ist, kannst du auf das kleine Info-Symbol klicken, um weitere Details zu erhalten.

Schau dir die erweiterten Optionen für eine genauere Steuerung an und **beachte insb. die Proxy-Option, da diese für die Tracking-Funktionalität obligatorisch ist**.

Mit `Custom Labels`, `Custom Style Light` und `Custom Style Dark` kannst du fast alle Details des visuellen Elements ändern. Du solltest jedoch einige grundlegende Erfahrungen mit CSS haben, um die Anzeigen im Rahmen der Custom Style Optionen zu verstehen!

[In der App öffnen ❯](https://app.add-to-calendar-pro.com/styles)

## Über Templates

Templates sind den Styles recht ähnlich. Theoretisch könntest du auch Styles als eine andere Art von Template ansehen.

Letztendlich sind Templates zusätzliche Bausteine, die du verwenden kannst, um dein Event zu erweitern.

Wenn du ein RSVP-Formular erstellst, ist die Verwendung eines RSVP-Templates obligatorisch, da es wichtige Basis-Konfigurationen enthält. Wir haben das Ganze als Template gestaltet, damit du das gleiche Setup ganz einfach für mehrere Events/Termine verwenden kannst.

Gleiches gilt für Call-to-Action-Templates.

E-Mail- und Landingpage-Templates sind hingegen eher optional. Wenn du sie nicht verwendest, wird unser Standard gesetzt.

[In der App öffnen ❯](https://app.add-to-calendar-pro.com/templates)

### RSVP

Wie oben erwähnt, kannst du mit RSVP-Templates eine spezifische Struktur für einen RSVP festlegen, die dann für 1 oder mehrere Events verwendet werden kann.

#### Ablaufdatum

Wenn festgelegt und dieses Datum in der Vergangenheit liegt, sind keine weiteren Anmeldungen für dieses RSVP möglich.

#### Teilnehmer-Einschränkungen

Begrenze die Anzahl der Anmeldungen - insgesamt sowie pro Teilnehmer. Wenn letzteres festgelegt ist, muss ein Benutzer die Anzahl der Personen angeben, für die die Anmeldung gelten soll.

#### Formulargrundlagen

Standardmäßig wird das Senden des Formulars als Zusage gezählt und eine andere Antwort ist nur bei Bearbeitung möglich. Du kannst dieses Verhalten bei Bedarf ändern.
Du kannst auch entscheiden, ob es eine „Vielleicht“-Option geben soll.

Das Setzen der DOI-Option erfordert, dass der Benutzer seine E-Mail-Adresse innerhalb von 30 Minuten bestätigt. Dies ist obligatorisch, um Dingen wie der DSGVO zu entsprechen, wenn das Formular nicht hinter einem Login ist!

Zusätzlich kannst du eine benutzerdefinierte Überschrift und Einführungstext festlegen.

#### Zusätzliche Formularfelder

Felder für Bestätigung und E-Mail sind automatisch enthalten.

Du kannst zusätzliche Felder hinzufügen, wie du sie benötigst.

Der `Name` ist obligatorisch und wird verwendet, um das Feld im Backend zu identifizieren. Das `Label` ist das dem Benutzer gegenüber sichtbare Label, während du über `Platzhalter` und `Standard` die Werte der Felder (quasi) vorausfüllen kannst.

Je nach Feldtyp können die verfügbaren Optionen unterschiedlich sein.

Wenn du eine Radio-Button-Gruppe erstellen möchtest, erstelle mehrere Radiofelder nacheinander.

#### E-Mail-Templates

Überschreibe die Standard-E-Mails mit angepassten Versionen, indem du E-Mail-Templates mit dem RSVP-Formular verbindest.

### E-Mail

Bei der Arbeit mit RSVP gibt es mehrere E-Mails, die deine Benutzer erhalten können. Dies kann eine Double-Opt-In-Bestätigungs-E-Mail oder eine E-Mail sein, die einen Magic Link enthält, um sich auf der Verwaltungsseite einzuloggen, wo Benutzer ihre Antworten anpassen können.

*Du kannst diese Templates mit einem RSVP-Formular verknüpfen.*

Unser Standard ist so erstellt, dass er auf alle Fälle grob passt.

Wenn du deinen Benutzern jedoch ein noch stärker angepasstes (und normalerweise gebrandetes) Erlebnis bieten möchtest, kannst du diese E-Mails hier anpassen.

Der **Typ** definiert die spezifische E-Mail und den Fall (wie oben angedeutet).

Neben ihm findest du einen Button, über den du **die Standard-Inhalte** in die Eingabefelder laden kannst. So kannst du anpassen, was wir bereits erstellt haben, und musst nicht bei Null anfangen.

Mit den dann folgenden Feldern kannst du Textblöcke, Schriftarten und Farben anpassen.

Teste deine E-Mail über den Button ganz rechts auf der Seite! Er sendet eine E-Mail an die Adresse des eingeloggten Benutzers, sodass du das Ergebnis direkt in deinem E-Mail-Posteingang überprüfen kannst.

Beachte, dass du im Template lediglich einen benutzerdefinierten FROM-Namen hinzufügen und deine benutzerdefinierte Adresse als "reply-to" festlegen kannst.  
Die Absender-E-Mail-Adresse kann über die Einstellungen global definiert werden.

### Landingpage

Landingpage-Templates sind im Grunde zusätzliche Konfigurationen für die automatisch generierten Landingpages deiner Events.

Diese Landingpages können verwendet werden, um dein Event in sozialen Medien oder anderswo zu teilen. Sie kommen auch ins Spiel, wenn du unsere E-Mail-Links verwendest oder den „Add to Calendar“-Button im Proxy-Modus ntuzt (erforderlich für Tracking). In diesen Fällen, besonders wenn etwas schief geht (wir führen einige Vorabprüfungen mit dem angeforderten Kalenderanbieter durch), zeigen wir dem Benutzer einige Hinweise - mit dem Landingpage-Stil.
Für den RSVP-Fall nutzt jegliche Kommunikation, wie DOI, das Bearbeiten von Antworten usw., dieses Landingpage-Layout ebenfalls.

Wie du siehst, ist es sehr wahrscheinlich, dass deine Benutzer mit der Landingpage deines Events oder RSVPs in Kontakt kommen.

Mit einem entsprechenden Template, das mit einem Event/Gruppe verknüpft werden kann, kannst du diese Seite anpassen.

Du kannst die automatisch generierte Überschrift ändern, etwas Einführungstext hinzufügen, Farben definieren und Meta/SEO-Inhalte optimieren.

### Call to Action (CTA)

CTA-Templates sind relevant, wenn du diese Funktionalität bei einem Event aktivierst.
Wenn sie aktiviert ist, zeigen wir dem Benutzer nach dem Speichern des verbundenen Events eine entsprechende Nachricht an.

Das Template definiert, was hierbei gezeigt wird.

Es kann einfacher Text, ein Link (Button), eine Sharing-Funktion oder ein benutzerdefiniertes Formular sein.

Während die Einstellungen für den Text oder den Link oder sogar das Sharing-Tool ziemlich offensichtlich sind, kann die Einrichtung des Formulars ein wenig komplizierter sein.

Aber es ist ein großartiges Feature, da du es sogar verwenden kannst, um ein Newsletter-Abonnement anzubieten, nachdem eine Person dein Event gespeichert hat!

Bei der Arbeit mit dem Formular gibt die `URL` den Endpunkt an, an den wir die Eingaben senden. `Button-Text` kann verwendet werden, um anzupassen, was auf dem Absende-Button angezeigt wird.

Als nächstes kannst du alle `Felder` spezifizieren, die du anzeigen möchtest.

Sie sind im Grunde ähnlich dem RSVP-Formular.

Der `Name` ist obligatorisch und wird verwendet, um das Feld im Backend zu identifizieren. Das `Label` ist das dem Benutzer gegenüber sichtbare Label, während du über `Platzhalter` und `Standard` die Werte der Felder (quasi) vorausfüllen kannst.

Je nach Feldtyp können die verfügbaren Optionen unterschiedlich sein.

Zwei Dinge zu beachten:
1. Wenn du eine Radio-Button-Gruppe erstellen möchtest, erstelle mehrere Radiofelder nacheinander.
2. Wenn du ein ausgeblendetes Feld "header" nennst und dessen Wert ein JSON-Schema ist, übermitteln wir dies als Header-Information. In diesem Fall wird das Formular als JSON gesendet; ohne Header als multipart/form-data.

Du kannst deine Einstellungen immer über den Button ganz rechts auf dem Bildschirm testen.
