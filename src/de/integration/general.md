---
outline: [2,3]
---
# Nutze die Buttons und RSVP-Formulare mit deinem Tech Stack

## Wichtige Überlegungen

Es gibt 3 Dinge, die vor der Implementierung zu beachten, bzw. deinerseits zu prüfen sind.

### 1. Paket/Plugin vs. CDN

Ob du das Skript als Teil deines Kernsystems verwalten möchtest - über deine üblichen Paket-/Plugin-Flows; oder ob du es lieber über einen Script-Tag von einem externen CDN laden möchtest.

Es gibt Vor- und Nachteile für beide Ansätze und es liegt ganz bei dir, was du bevorzugst. Im Zweifelsfall geht es um Bequemlichkeit und darum, was du gewohnt bist. Bedenke, dass die Verwendung als Modul von dir verlangt, es manuell aktuell zu halten!

### 2. Bundle-Size

Wie wichtig dir die Bundle-Size ist, wenn du das Skript als npm-Paket verwendest.

Wenn du das Skript in seiner Standard-Variante verwendest, fragst du dich vielleicht, ob du die Größe des Skripts reduzieren kannst. Aufgrund der Natur des Skripts ist dies (z. B. Tree-Shaking) nicht direkt möglich.
Du kannst jedoch stattdessen die unstyle-Version laden, um CSS-Daten zu sparen, die du nicht benötigst. Bei diesem Ansatz musst du sicherstellen, dass Events in der App mit einem Style verknüpft sind UND bei diesem die Option "Load Async" aktiv ist. Dies stellt sicher, dass der Stil asynchron über das jsDelivr CDN geladen wird (stelle sicher, dass dies bei potenziellen CORS-Einstellungen erlaubt ist).

### 3. User Flow

Ob du Links und Dateien über das Skript auf der Client-Seite generieren lassen oder ob du unseren Proxy-Service verwenden möchtest.

Im ersten Fall werden die Links zu den Kalendern direkt im Browser dynamisch generiert. Auch die ics-Datei wird auf diese Weise dynamisch erstellt. Dies ist der schnellste Ansatz (aus Sicht des Benutzers). Allerdings wird die ics-Generierung bei einigen Systemen blockiert und falls ein Kalenderanbieter offline geht oder interne Probleme hat, kann der Benutzer kein Event speichern. Die Verwendung unseres Proxys erfordert, dass Events mit einem Style verknüpft sind, bei dem die "Proxy"-Option aktiv ist.

In diesem Fall werden Links und Dateien auf unserer Seite generiert und der Benutzer wird zuerst zu uns umgeleitet. Sollte etwas nicht funktionieren, können wir den Benutzer damit auch darüber informieren und Alternativen sowie Anleitungen anbieten. Dies ist daher der stabilere Weg, für den Benutzer aber etwas langsamer. Du kannst die Zwischenseiten anpassen, indem du einen Style mit einem Landingpage-Template verknüpfst.

## Allgemeiner Workflow

Es sind nur 2 Schritte notwendig, um RSVP-Formulare und Buttons in deiner Anwendung anzuzeigen.

1. Lade das Skript (durch Importieren des Pakets, Laden des Skripts über CDN oder über ein Plugin).
2. Platziere ein `<add-to-calendar-button />`-Tag dort, wo du das Element anzeigen möchtest, und füge den proKey als Attribut hinzu.

```html
<add-to-calendar-button proKey="prokey-deines-events" />
```

Wir generieren automatisch einen proKey für jedes von dir erstellte Event. Du kannst ihn ganz oben auf der jeweiligen Eventseite finden.

Wenn du ein [Event über unsere API erstellst](/de/api/events.html#event-erstellen), erhältst du den proKey als Response.

::: Warnung Client only!
Bedenke, dass der Button nur auf Seite des "Clients" funktioniert.
Daher kann das Rendern auf dem Server (z. B. mittels SSR oder SSG-Prerendering) zu unerwartetem Verhalten führen.

Je nach Framework solltest du deiner Komponente entsprechende Auszeichnungen, wie `<ClientOnly></ClientOnly>` (Nuxt) oder `use client` (React) zufügen.
:::

## Verwendung via CDN

Lade das Skript, indem du den folgenden Script-Tag zum Head-Bereich deiner Webseite hinzufügst.
Das Skript wird auf nicht blockierende Weise geladen.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2" async defer></script>
```

Bei Nutzung der kleineren Unstyled-Version wäre dies:

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button@2/dist/atcb-unstyle.min.js" async defer></script>
```

## Verwendung via npm

Installiere das Paket mit dem folgenden npm-Befehl:

```bash
npm install add-to-calendar-button
```

Importiere das Modul in deinem Projekt/Komponente:

```javascript
import 'add-to-calendar-button';
```

..., bzw für die Unstyled-Version:

```javascript
import 'add-to-calendar-button/unstyle';
```

*Je nach Framework/Library musst du möglicherweise kleinere Anpassungen an der jeweiligen Konfiguration vornehmen.*

## Verwendung über ein Plugin

Für einige Systeme (wie WordPress) bieten wir offizielle Plugins an.

Normalerweise findest du diese in den entsprechenden Stores. Überprüfe allerdings unbedingt die jeweilige Seite in dieser Dokumentation für Details und um keine falschen (oder gar schädlichen) Inhalte zu installieren.

## Einstellungen überschreiben

Bestimmte Parameter können direkt am HTML-Tag überschrieben werden.

Dies bedeutet, dass die Einstellung, die über das entsprechende Attribut an der Button-Einbindung vorgenommen wird, eine mögliche gegenteilige Einstellung, die in der App vorgenommen wird, überschreibt.

Dies kann hilfreich sein, wenn bspw. Styles im Code definiert werden oder dynamische Inhalte eingefügt werden sollen. Letzeres ist stark limitiert und sollte mit Bedacht genutzt werden! In den meisten Fällen empfiehlt sich hier eher die Arbeit über unsere API.

Parameter, die überschrieben oder gar nur im Code gesetzt werden können:


| Attribut           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Typ / Format                             |
| :------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| debug              | Loggt Fehler in der JavaScript-Konsole des Browsers und rendert anstelle des Kalenders eine Fehlermeldung.                                                                                                                                                                                                                                                                                                                                                                                          | Boolean                                  |
| cspnonce           | Nötig, sofern du mit strenger Content-Security-Policy arbeitest. Experimentell! Aktuell nur für JavaScript; CSS muss auch inline erlaubt sein.                                                                                                                                                                                                                                                                                                                                                    | String                                   |
| instance           | Ermöglicht ein "Neu-Rendern" des Buttons, indem die Zahl verändert/erhöht wird.                                                                                                                                                                                                                                                                                                                                                                                                                  | Number                                   |
| attendee           | Schema "NAME\|E-MAIL" (bspw. "Max Muster\|max.muster@gmail.com") oder nur eine E-Mail-Adresse. Nur 1 Eintrag möglich. Ermöglicht die Nutzung von iCal-Status-Funktionalitäten. Erfordert einen gesetzten Organisator. Erzwingt eine dynamische Erzeugung von ics-Dateien anstelle des Abrufs der statischen Datei.                                                                                                                                                                               | String (NAME\|EMAIL)                     |
| images             | Reichert die Rich-Data-Angaben an. 1-3 Bilder via url. Empfohlen werden 3 Bilder mit einer Breite von je 1920px. Eines mit einem Seitenverhältnis von 1x1, eines mit 4x3 und eines mit 16x9.                                                                                                                                                                                                                                                                                                       | Array (urls)                             |
| size               | Skalierung anpassen. 1-3 Werte. Bei mehreren Werten wird der erste für große, der zweite für mittlere und der dritte für kleine Bildschirme gesetzt. Bei 2 Werten gilt der zweite für mittlere und kleine Bildschirme.                                                                                                                                                                                                                                                                         | String (X\|X\|X)                         |
| inline             | Rendert den Button inline anstelle des standardmäßigen Block-Styles.                                                                                                                                                                                                                                                                                                                                                                                                                              | Boolean                                  |
| inlineRsvp         | Rendert das RSVP-Formular inline und nicht als Modal nach Button-Klick.                                                                                                                                                                                                                                                                                                                                                                                                                             | Boolean                                  |
| forceOverlay       | Rendert Dropdowns über allen Elementen. Ressourcen-intensiv, aber für manche Layout notwendig.                                                                                                                                                                                                                                                                                                                                                                                                    | Boolean                                  |
| customLabels       | Siehe die entsprechende Einstellung in der App für mögliche Werte. Die Struktur muss einem JSON-Schema entsprechen.                                                                                                                                                                                                                                                                                                                                                                               | Object                                   |
| customCss          | Lädt eine angegebene externe css-Datei (absoluter Pfad) anstelle des integrierten Styles.                                                                                                                                                                                                                                                                                                                                                                                                          | String (url)                             |
| lightMode          | Definiert wie das Dark/Light-Theme gesetzt werden soll. "system" orientiert sich am Betriebssystem des Nutzers. "bodyScheme" schaltet auf "dark", wenn im body oder html tag die Klasse "atcb-dark" oder "dark" gesetzt ist.                                                                                                                                                                                                                                                                        | String (system, dark, light, bodyScheme) |
| styleLight         | Siehe die entsprechende Einstellung in der App für mögliche Werte. Beispiel: styleLight="--btn-background: #2f4377; --btn-text: #fff; --font: Georgia, 'Times New Roman', Times, serif;"                                                                                                                                                                                                                                                                                                          | String                                   |
| styleDark          | Siehe die entsprechende Einstellung in der App für mögliche Werte. Beispiel: styleDark="--btn-background: #2f4377; --btn-text: #fff;"                                                                                                                                                                                                                                                                                                                                                             | String                                   |
| language           | Sprache des Buttons. Optionen: ar, cs, de, en, es, et, fa, fi, fr, hi, id, it, ja, ko, nl, no, ro, pl, pt, sv, tr, vi, zh                                                                                                                                                                                                                                                                                                                                                                           | String                                   |
| blockInteraction   | Blockiert jegliche Interaktion mit dem Button - mit Ausnahme von Hover-Effekten.                                                                                                                                                                                                                                                                                                                                                                                                                    | Boolean                                  |
| disabled           | Deaktiviert den Button und zeigt diesen ausgegraut an.                                                                                                                                                                                                                                                                                                                                                                                                                                              | Boolean                                  |
| hidden             | Blendet den Button aus.                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Boolean                                  |
| bypassWebViewCheck | Für Nutzer, die den Button auf ihrem iPhone in einer WebView-Umgebung (z.B. dem Instagram Browser) laden, können wir die ics-Datei nicht direkt zum Download anbieten. Deshalb zeigen wir in diesem Fall eine kleine Anleitung, wie man den Termin stattdessen speichern kann. Wenn du den Button in deiner eigenen Anwendung verwendest; in der du den Download von ics-Dateien im Standardbrowser aktiv zulassen kannst, kannst du diesen Workaround mit der Option bypassWebViewCheck umgehen. | Boolean                                  |
| customVar          | Definiere individuelle Variabeln, die in der Beschreibung und der Ortsangabe deines Events genutzt werden können. Die Struktur muss einem JSON-Schema entsprechen. Ein Feld "name" kann mittels %%name%% in der Beschreibung oder dem Ort genutzt werden.                                                                                                                                                                                                                                          | Object                                   |
| proxy              | Hierbei wird der Nutzer über die Landingpage geleitet, wenn er ein Event speichern möchte. Dadurch können wir den Nutzer in Spezielfällen besser anleiten, du musst allerdings möglicherweise deine Datenschutzbestimmungen erweitern.<br />Diese Option muss gesetzt sein, wenn Klicks auf Add-to-Calendar-Buttons getrackt werden sollen!                                                                                                                                                    | Boolean                                  |
| fakeMobile         | Simuliert ein mobiles Endgerät.                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Boolean                                  |
| fakeIOS            | Simuliert iOS.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Boolean                                  |
| fakeAndroid        | Simuliert Android.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Boolean                                  |
