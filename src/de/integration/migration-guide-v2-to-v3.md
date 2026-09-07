---
title: V3 Migrationsanleitung
description: Aktualisiere deine Add to Calendar PRO Integration von v2 auf v3, inklusive CDN-Skript, npm-Paket, Styles und Sprachen.
outline: [2,3]
---
# V3 Migrationsanleitung

Version 3 verwendet weiterhin das `<add-to-calendar-button>`-Element und deine bestehenden PRO Keys. Du musst deine Events nicht neu anlegen. Die wichtigste Änderung hängt davon ab, wie deine Webseite den Button lädt: über ein jsDelivr-Skript oder ein npm-Paket.

Diese Anleitung überträgt die [Add to Calendar Button Migrationsanleitung von v2 auf v3](https://add-to-calendar-button.com/migration-guide-v2-to-v3) auf die Nutzung mit Add to Calendar PRO.

## Welche Integration nutzt du?

| Integration | Was du tun musst |
| :--- | :--- |
| Ein `<script>`-Tag mit einer URL von `cdn.jsdelivr.net` | Entferne eine vorhandene Festlegung auf v2 oder ändere sie auf v3. Styles und Sprachen werden automatisch geladen. |
| Eine npm-Abhängigkeit, die dein Webseiten-Code importiert | Aktualisiere das Paket und importiere zusätzlich benötigte Styles und Sprachen explizit. Alternativ kann deine IT dynamisches Laden einrichten. |

Wenn du unsicher bist, bitte dein Webseiten-Team, die Skript-URL oder die Abhängigkeit in der `package.json` zu prüfen.

## Integration über das jsDelivr-Skript

Prüfe das Skript-Tag deiner Webseite, deines gemeinsamen Layouts oder deines Tag-Managers. Eine URL mit `add-to-calendar-button@2`, auch mit einer konkreten Version wie `@2.15.0`, bleibt auf v2.

Ersetze sie durch das Skript aus unserer [allgemeinen Integrationsanleitung](/de/integration/general#verwendung-via-cdn):

```html
<script src="https://cdn.jsdelivr.net/npm/add-to-calendar-button" async defer></script>
```

Diese URL folgt der neuesten veröffentlichten Version. Wenn deine IT größere Versionswechsel selbst steuern möchte, kann sie stattdessen `https://cdn.jsdelivr.net/npm/add-to-calendar-button@3` verwenden. Damit bleibt die Integration innerhalb von v3. Nutzt du bereits die URL ohne Versionsangabe, musst du die Skript-URL nicht ändern.

**Das Browser-Skript lädt die benötigten Styles und Sprachen für Buttons und RSVP-Formulare automatisch nach.** Wenn du einen Style oder eine Sprache in der Add to Calendar PRO App änderst, sind keine zusätzlichen Imports nötig. Deine Webseite muss das Skript und die dynamisch angeforderten Dateien vom CDN laden dürfen.

Dein bestehendes Element mit PRO Key bleibt erhalten:

```html
<add-to-calendar-button prokey="prokey-deines-events"></add-to-calendar-button>
```

Zeigt deine URL auf einen alten separaten Build wie `atcb-unstyle.min.js`, wechsle zum Hauptskript oben. Die alten Build-Pfade bleiben in v3 als Kompatibilitätslösungen verfügbar.

## Integration über das npm-Paket

### Auf v3 aktualisieren

Aktualisiere die Abhängigkeit in deinem Webseiten-Projekt:

```bash
npm install add-to-calendar-button@3
```

Übernimm die aktualisierte Abhängigkeit und Lockdatei in die Versionsverwaltung und baue und veröffentliche deine Webseite neu. Eine npm-Integration aktualisiert sich nicht automatisch, wenn eine neue Version erscheint oder du etwas in der PRO App änderst.

Nutze den Haupteinstieg des Pakets. Ersetze alte Imports mit `/unstyle`, `/no-pro` oder `/no-pro-unstyle` durch:

```javascript
import 'add-to-calendar-button';
```

Ersetze bei React und Next.js den nicht mehr unterstützten React Wrapper durch das Hauptpaket. Folge der aktualisierten [React](/de/integration/react)- oder [Next.js](/de/integration/nextjs)-Anleitung einschließlich der JSX-Typdeklaration.

### Styles und Sprachen importieren

**Nur der Standard-Style und Englisch sind standardmäßig enthalten.** Anders als in v2 enthält ein npm-Import nicht automatisch alle weiteren Styles und Sprachen. Importiere jeden zusätzlichen Style und jede Sprache, die deine PRO Events, Buttons und RSVP-Formulare verwenden.

Beispiel für den Style `3d` und Deutsch:

```javascript
import 'add-to-calendar-button';
import 'add-to-calendar-button/styles/3d';
import 'add-to-calendar-button/i18n/de';
```

Die Imports stellen die Dateien bereit. Deine Einstellungen in der PRO App bestimmen weiterhin, welcher Style und welche Sprache verwendet werden. Ohne die nötigen Imports oder eine dynamische Dateiquelle wird eine neu ausgewählte Sprache oder ein neuer Style möglicherweise nicht korrekt auf deiner Webseite angezeigt.

### Gemeinsame Ladestrategie mit deiner IT wählen

Du kannst die Imports in einer gemeinsamen Komponente oder einem Setup-Modul sammeln und einmal über den gemeinsamen Einstiegspunkt deiner Webseite laden. Alle Buttons, die dieselbe Paketinstanz verwenden, können anschließend auf die registrierten Styles und Sprachen zugreifen.

Besprich mit deiner IT, ob ihr nur die aktuell benötigten Dateien oder **alle verfügbaren Styles und Sprachen** importieren möchtet. Für die vollständige Variante ergänzt ihr im gemeinsamen Modul einen expliziten Import für jeden unterstützten Style und jede Sprache nach dem Muster oben. Einen Einstieg `/styles/all` oder `/i18n/all` gibt es nicht.

Wenn ihr alles ladet, können spätere Style- und Sprachänderungen in der PRO App ohne weitere Codeänderung auf der Webseite erscheinen. Voraussetzung ist, dass die Dateien in eurer installierten Version enthalten sind und ihr die Einstellungen nicht im Code überschreibt. Der Nachteil ist ein größeres Bundle: Besucher laden alle diese Styles und Sprachen, selbst wenn die Seite nur eine Variante nutzt. Neu veröffentlichte Dateien benötigen weiterhin ein Paket-Update.

### Fortgeschrittene Option: Dateien dynamisch laden

Deine IT kann mit `style-source` festlegen, wo die npm-Integration benötigte Dateien bei Bedarf lädt. Trotz des Namens bestimmt diese Option auch die Quelle für Sprachdateien.

**Du kannst weiterhin das npm-Paket nutzen und jsDelivr nur zum dynamischen Laden von Styles und Sprachen verwenden. Du musst diese Dateien nicht selbst hosten.** Behalte den Import des Hauptpakets bei:

```javascript
import 'add-to-calendar-button';
```

Setze anschließend die Dateiquelle am Button:

```html
<add-to-calendar-button
  prokey="prokey-deines-events"
  style-source="https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/styles/"
></add-to-calendar-button>
```

Damit werden fehlende Styles aus `dist/styles/` und fehlende Sprachen aus dem benachbarten Verzeichnis `dist/locales/` auf jsDelivr geladen. Deutsch wird beispielsweise von `https://cdn.jsdelivr.net/npm/add-to-calendar-button@3/dist/locales/de.json` geladen. Für so geladene Dateien sind keine separaten Imports nötig. Ein zusätzliches CDN-Skript-Tag ist ebenfalls nicht erforderlich.

Die URL mit `@3` folgt Updates innerhalb von v3. Für eine exakte Übereinstimmung mit deinem installierten npm-Paket ersetzt du `@3` durch dessen vollständige Versionsnummer und aktualisierst beides gemeinsam. Behalte die Endung `/dist/styles/` bei: Der Sprachloader ersetzt das abschließende `styles/` durch `locales/`.

Selbst-Hosting bleibt eine Alternative. Kopiert dafür `dist/styles/` und `dist/locales/` aus dem installierten Paket in benachbarte Verzeichnisse auf eurer Webseite. Zum Beispiel:

```html
<add-to-calendar-button
  prokey="prokey-deines-events"
  style-source="https://your-domain.com/atcb/styles/"
></add-to-calendar-button>
```

In dieser Struktur werden Styles aus `/atcb/styles/` und Sprachen aus `/atcb/locales/` geladen. Verwendet Dateien derselben Paketversion wie eure Integration und veröffentlicht den vollständigen Dateisatz, wenn ihr Styles und Sprachen in der PRO App frei wechseln möchtet. Hosting, Caching sowie nötige Content-Security- und Cross-Origin-Einstellungen sollte eure IT betreuen.

So müssen nicht alle Styles und Sprachen ins Bundle, allerdings entstehen zusätzliche Netzwerkanfragen bei Bedarf. Die Option `load-all-styles` kann Styles von der konfigurierten Quelle vorab laden; sie lädt nicht alle Sprachen. Diese Einrichtung richtet sich an erfahrene Entwickler. Das normale jsDelivr-Skript übernimmt das dynamische Laden bereits automatisch.

## Eigenen Code auf weitere v3-Änderungen prüfen

Bei einer Standard-PRO-Integration nur mit `prokey` bleiben die meisten Einstellungen in der App verwaltet. Falls deine IT eigenen Code ergänzt hat, prüft auch diese Änderungen:

- **TypeScript:** Verwendet `prokey` statt `proKey` in typisierten Konfigurationsobjekten, auch bei `atcb_action`. In einfachen JavaScript-Objekten funktioniert die alte Schreibweise weiterhin als Laufzeit-Alias.
- **ICS-Zeitstempel:** Ersetzt `created` und `updated` durch `icsCreated` und `icsUpdated` in JavaScript beziehungsweise `ics-created` und `ics-updated` in HTML. Die alten Namen werden nicht mehr gelesen.
- **HTML-Attribute:** Bevorzugt offizielle Namen in Kebab-Case, etwa `button-style` und `inline-rsvp`. Bestehende v2-Aliase funktionieren vorerst weiter. JavaScript-Konfigurationen verwenden weiterhin CamelCase.
- **Bisherige Kalendernamen:** Werte wie `Google` und `Outlook.com` funktionieren weiterhin. Die offiziellen v3-Werte sind kleingeschrieben, etwa `google` und `outlookcom`.
- **Server- und Worker-Hilfsfunktionen:** Importiert Datumsfunktionen aus `add-to-calendar-button/utils`, wenn ihr sie ohne Browser-Abhängigkeiten benötigt.
- **Eigene URLs und UI-Selektoren:** v3 lehnt skriptfähige URL-Schemata ab und ändert die Accessibility-Rollen der Dropdowns sowie das Modal-Markup. Prüft eigenes CSS und automatisierte Tests, die sich auf die bisherige Struktur verlassen.

Wenn ihr diese `customLabels`-Schlüssel überschreibt, benennt sie um:

| v2-Schlüssel | v3-Schlüssel |
| :--- | :--- |
| `date.status.cancelled.cta` | `date.status.cancelled_cta` |
| `label.share.email.subject` | `label.share.email_subject` |
| `label.rsvp` | `label.rsvp.title` |
| `form.status` | `form.status.title` |
| `form.success` | `form.success.title` |

## Vor der Veröffentlichung prüfen

1. Prüft, ob euer veröffentlichtes Skript beziehungsweise installiertes Paket v3 verwendet und nicht zusätzlich ein altes v2-Skript geladen wird.
2. Kontrolliert repräsentative Buttons und RSVP-Formulare in allen verwendeten Styles und Sprachen, einschließlich der Einstellungen aus der PRO App.
3. Ändert testweise einen Style oder eine Sprache in der App, um eure Ladestrategie zu überprüfen.
4. Testet das Speichern eines Events und das Absenden eines RSVP-Formulars in euren unterstützten Browsern. Der volle v3-Funktionsumfang richtet sich an Baseline-2023-Browser, einschließlich Safari ab 16.4.
5. Prüft Browser-Konsole und Netzwerkanfragen auf fehlende Dateien oder blockierte Ladevorgänge.

Weitere technische Details findet ihr in der [ursprünglichen Migrationsanleitung](https://add-to-calendar-button.com/migration-guide-v2-to-v3).
