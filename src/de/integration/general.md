---
title: Nutze die Buttons und RSVP-Formulare mit deinem Tech Stack
description: Lerne Add to Calendar PRO mit jedem Tech Stack zu integrieren. Vollständige Implementierungsanleitung für Kalender-Buttons und RSVP-Formulare.
outline: [2,3]
---
# Nutze die Buttons und RSVP-Formulare mit deinem Tech Stack
Unsere Add to Calendar Buttons und RSVP-Formulare lassen sich ganz einfach mit praktisch jedem Tech Stack integrieren.  
Die Einrichtung mit den Standardeinstellungen ist innerhalb von 1 Minute erledigt. Details kannst du anschließend nach Belieben anpassen.

::: tip Wie du starten solltest
Wir empfehlen, im Menü nach deinem Tech Stack zu suchen und von dort aus zu beginnen.  
Lies den Rest dieser Seite für ausführlichere Details und Optionen zur Anpassung.
:::

::: warning Bestehende v2-Integration aktualisieren?
Die [V3 Migrationsanleitung](/de/integration/migration-guide-v2-to-v3) erklärt das Update deines Skripts oder npm-Pakets und das Laden von Styles und Sprachen.
:::

## Allgemeiner Workflow

Es sind nur 2 Schritte notwendig, um RSVP-Formulare und Add to Calendar Buttons in deiner Anwendung oder auf deiner Webseite anzuzeigen.

1. Lade das Skript (durch Importieren des Pakets, Laden des Skripts über CDN oder über ein Plugin).
2. Platziere ein `<add-to-calendar-button>`-Tag dort, wo du das Element anzeigen möchtest, und füge den prokey als Attribut hinzu.

```html
<add-to-calendar-button prokey="prokey-deines-events"></add-to-calendar-button>
```

Wir generieren automatisch einen prokey für jedes von dir erstellte Event. Du kannst ihn ganz oben auf der jeweiligen Eventseite finden.

Wenn du ein [Event über unsere API erstellst](/de/api/events#event-erstellen), erhältst du den prokey als Response.

::: tip Browser-Initialisierung und SSR
Das Hauptpaket registriert die interaktive Web Component im Browser. Bei Nuxt kannst du dafür ein Client-Plugin verwenden; bei Next.js eine Client-Komponente. Version 3 bietet zusätzlich einen separaten SSR-Einstieg zum Vorab-Rendern einer Button-Hülle. Siehe [SSR mit PRO](#ssr-mit-pro).
:::

## Verwendung via CDN

Lade das Skript, indem du den folgenden Script-Tag zum Head-Bereich deiner Webseite hinzufügst.
Das Skript wird auf nicht blockierende Weise geladen.

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
```

Styles und Sprachen werden bei Bedarf automatisch vom CDN nachgeladen. Nutze das Hauptskript; frühere Unstyled-Builds sind in v3 nur noch Kompatibilitätslösungen.

## Verwendung via npm

Installiere das Paket mit dem folgenden npm-Befehl:

```bash
npm install add-to-calendar-button
```

Importiere das Modul in deinem Projekt/Komponente:

```javascript
import 'add-to-calendar-button';
```

Das Paket enthält standardmäßig nur den Standard-Style und Englisch. Importiere zusätzlich benötigte Styles und Sprachen:

```javascript
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

Alternativ kann deine IT `style-source` für dynamisches Laden von jsDelivr oder deinem eigenen Hosting setzen. Die [V3 Migrationsanleitung](/de/integration/migration-guide-v2-to-v3) erklärt die Strategien. Frühere `/unstyle`- und `/no-pro`-Imports sollten durch den Haupteinstieg ersetzt werden.

*Je nach Framework/Library musst du möglicherweise kleinere Anpassungen an der jeweiligen Konfiguration vornehmen.*

## Verwendung über ein Plugin

Für einige Systeme (wie WordPress) bieten wir offizielle Plugins an.

Normalerweise findest du diese in den entsprechenden Stores. Überprüfe allerdings unbedingt die jeweilige Seite in dieser Dokumentation für Details und um keine falschen (oder gar schädlichen) Inhalte zu installieren.

## SSR mit PRO

Der separate Einstieg `add-to-calendar-button/ssr` kann eine Button-Hülle vorab rendern. Für über einen `prokey` verwaltete Daten nutze `atcb_generate_ssr_html_async` auf dem Server. Die Funktion lädt die PRO-Konfiguration, bevor sie das HTML erzeugt:

```javascript
import { atcb_generate_ssr_html_async } from 'add-to-calendar-button/ssr';

const html = await atcb_generate_ssr_html_async({
  prokey: 'prokey-deines-events',
});
```

Übergib ausschließlich das von dieser Funktion erzeugte HTML an die HTML-Ausgabe deines Frameworks. Lade anschließend das Hauptpaket im Browser, um die Hülle zu aktivieren. Die SSR-Hülle ersetzt nicht die Initialisierung der vollständigen Interaktion und RSVP-Formulare im Browser. Plane auch die Fehlerbehandlung für das Laden der PRO-Konfiguration ein.

Die offiziellen Anleitungen für [Next.js](https://add-to-calendar-button.com/use-with-nextjs), [Astro](https://add-to-calendar-button.com/use-with-astro), [Nuxt](https://add-to-calendar-button.com/use-with-nuxt) und [Svelte](https://add-to-calendar-button.com/use-with-svelte) zeigen die framework-spezifische HTML-Ausgabe und Browser-Aktivierung. Ersetze dort die synchrone Erzeugung mit lokalen Event-Daten durch den asynchronen PRO-Aufruf oben in deinem serverseitigen Datenfluss. In Nuxt muss die vorhandene SSR-Hülle beim Hydrieren erhalten bleiben; nutze dafür die dort gezeigte Direktive statt `v-html`.

## Wichtige Überlegungen

Es gibt 2 Dinge, die vor der Implementierung zu beachten, bzw. deinerseits zu prüfen sind.

### 1. Paket/Plugin vs. CDN

Ob du das Skript als Teil deines Kernsystems verwalten möchtest - über deine üblichen Paket-/Plugin-Flows; oder ob du es lieber über einen Script-Tag von einem externen CDN laden möchtest.

Es gibt Vor- und Nachteile für beide Ansätze und es liegt ganz bei dir, was du bevorzugst. Im Zweifelsfall geht es um Bequemlichkeit und darum, was du gewohnt bist. Bedenke, dass die Verwendung als Modul von dir verlangt, es manuell aktuell zu halten!

### 2. User Flow

Ob du Links und Dateien über das Skript auf der Client-Seite generieren lassen oder ob du unseren Proxy-Service verwenden möchtest.

Im ersten Fall werden die Links zu den Kalendern direkt im Browser dynamisch generiert. Auch die ics-Datei wird auf diese Weise dynamisch erstellt. Dies ist der schnellste Ansatz (aus Sicht des Benutzers). Allerdings wird die ics-Generierung bei einigen Systemen blockiert und falls ein Kalenderanbieter offline geht oder interne Probleme hat, kann der Benutzer kein Event speichern.  
Bei Verwendung des Proxys werden Links und Dateien auf unserer Seite generiert und der Benutzer wird zuerst zu uns umgeleitet. Sollte etwas nicht funktionieren, können wir den Benutzer damit auch darüber informieren und Alternativen sowie Anleitungen anbieten. Dies ist daher der stabilere Weg, für den Benutzer aber etwas langsamer.

Du kannst die Proxy-Einstellung über einen Style verwalten, den du mit dem Event (oder Event-Gruppe) verbindest. Wenn kein Style definiert ist, verwendet wir standardmäßig die Proxy-Option.

## Einstellungen überschreiben

Bestimmte Parameter können direkt am HTML-Tag überschrieben werden.

Dies bedeutet, dass die Einstellung, die über das entsprechende Attribut an der Button-Einbindung vorgenommen wird, eine mögliche gegenteilige Einstellung, die in der App vorgenommen wird, überschreibt.

Dies kann hilfreich sein, wenn bspw. Styles im Code definiert werden oder dynamische Inhalte eingefügt werden sollen. Letzeres ist stark limitiert und sollte mit Bedacht genutzt werden! In den meisten Fällen empfiehlt sich hier eher die Arbeit über unsere API.

::: warning Alle Einstellungen überschreibbar machen
Du kannst die Option `proOverride` am Button-Tag setzen und damit alle verfügbaren Einstellungen auf Codeebene überschreiben.

**Sei vorsichtig damit, da dies leicht zu widersprüchlichen Daten führen kann, da Änderungen auf Codeebene sonst nirgendwo bei Add to Calendar PRO übernommen werden!**

Du solltest mindestens `proxy="false"` setzen.

Dies kann jedoch in (eher seltenen) Fällen nützlich sein, in denen du nur den Button auf deiner Website verwenden möchtest, während du die Event-Details auch nur dort festlegst (vielleicht aus Datenschutzgründen), während du das Design in der Add to Calendar PRO App verwalten lassen möchtest (vielleicht vom Marketing-Team).
:::

Parameter, die jederzeit überschrieben oder gar nur im Code gesetzt werden können, sind nachfolgend gelistet.


| Attribut           | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Typ / Format                             |
| :------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------- |
| debug              | Loggt Fehler in der JavaScript-Konsole des Browsers und rendert anstelle des Kalenders eine Fehlermeldung.                                                                                                                                                                                                                                                                                                                                                                                          | Boolean                                  |
| cspnonce           | Nötig, sofern du mit strenger Content-Security-Policy arbeitest. Der Wert kann als "nonce" in den CSP-Einstellungen freigegeben werden.                                                                                                                                                                                                                                                                                                                                                    | String                                   |
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
