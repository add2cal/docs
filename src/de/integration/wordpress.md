---
outline: [2,3]
---

# Wie man die Buttons und RSVP-Formulare in WordPress nutzt

## Schritt 1: Installiere das Plugin

Installiere das [offizielle Paket aus dem WordPress Plugin-Verzeichnis](https://wordpress.org/plugins/add-to-calendar-button).

* Du kannst es direkt von der "Plugins"-Seite in deinem Admin-Dashboard aus finden. Suche nach: `add2cal`.
* Alternativ kannst du es [hier herunterladen](https://wordpress.org/plugins/add-to-calendar-button) und die Zip-Datei in dein WordPress-System hochladen. ODER du entpackst und lädst das Plugin manuell in dein wp-content/plugins/ Verzeichnis hoch.

## Schritt 2: Aktivieren

Aktiviere das Plugin auf der WordPress "Plugin"-Seite.

## Schritt 3: PRO-Modus aktivieren

Nachdem du das Plugin aktiviert hast, findest du die Einstellungsseite unter `Einstellungen > Add to Calendar Button`.

Dort kannst du die "Pro"-Checkbox aktivieren, um das Plugin stets im PRO-Modus zu nutzen.

## Schritt 4: Loslegen

### A: Block

Du kannst nun ganz einfach den entsprechenden "Block" mit dem WordPress Gutenberg Block Editor nutzen.

* Füge einen neuen Block hinzu und suche hierbei nach "Add to Calendar Button".
* Klicke auf den Block, bzw. auf den Button.
* Füge den proKey in die Eingabe auf der rechten Seite bei den "Block"-Einstellungen hinzu.

### B: Shortcode

Alternativ kannst du auch den Shortcode `[add-to-calendar-button]` verwenden und den proKey direkt darin hinzufügen:

```
[add-to-calendar-button prokey="prokey-of-your-event"]
```

## Überschreiben von Einstellungen

Du kannst einige Attribute des Buttons über das entsprechende Eingabefeld überschreiben.

Weitere Informationen findest du in der [allgemeinen Integrations-Anleitung](/de/integration/general.html#einstellungen-uberschreiben).

## Dynamische Verbindungen

Zusätzlich kannst du die Termin-Informationen mit Meta-Feldern, Advanced Custom Fields (ACF) oder einem Shortcode (sofern dieser einen passenden Text ausgibt) verbinden. 
Dies erlaubt dir, dass der Button dynamisch Informationen beinhaltet, die du auf der jeweiligen Seite generiert hast.

### Wie es mit dem Block funktioniert

Wenn du den Gutenberg-Block-Editor verwendest, kannst du die dynamischen Felder direkt in den Block-Einstellungen definieren.

1. Wähle den Datentyp aus, den du verwenden möchtest (Meta-Felder, ACF, oder Shortcode)
2. Wähle den Termin-Eingabe-Typ, den du benötigst ("Ganztags" würde nur ein Start- und optional ein End-Datum anbieten; Datum + Zeit würde auch Zeit-Eingaben anbieten; Datetime würde eine kombinierte Eingabe bieten, falls dein Feld Datum und Zeit gleichzeitig enthält).
3. Füge den Namen des Feldes, das du verbinden möchtest in das entsprechende Eingabefeld ein. Wenn du zum Beispiel ein ACF-Feld mit dem Namen "my-start-date" hast, würdest du "my-start-date" in das Startdatum-Feld einfügen.
4. Teste das Ganze über die Seitenvorschau.

### Wie es mit dem Shortcode funktioniert

Wenn du den Shortcode verwendest, kannst du die dynamischen Felder als Shortcode-Attribute definieren. 
Du würdest einfach den Feldnamen (ähnlich wie beim Block-Editor) in das entsprechende Attribut einfügen.

Wenn du zum Beispiel ein ACF-Feld mit dem Namen "my-start-date" hast, würdest du den Shortcode wie folgt einfügen:
```
[add-to-calendar-button prokey="prokey-of-your-event" acf-startdate="my-start-date"]
```

*Wie du siehst wird der Feld-Typ mit "acf-", "mf-"" oder "sc-" vorangestellt.*

<br />

Du kannst dieses Schema für die folgenden Informationen verwenden:

* startdate (“YYYY-MM-DD”)
* starttime (“HH:MM”)
* enddate (“YYYY-MM-DD”)
* endtime (“HH:MM”)
* startdatetime (“YYYY-MM-DDTHH:MM” oder “YYYY-MM-DD HH:MM”)
* enddatetime (“YYYY-MM-DDTHH:MM” oder “YYYY-MM-DD HH:MM”)
* name
* description
* location
* timezone

### Was zu beachten ist!

::: warning Wie in der allgemeinen Anleitung erwähnt, führt das Überschreiben von Termin-Informationen (wie dem Startdatum) zu einem Daten-Konflikt, da die automatisch generierte Landingpage und ics-Datei nichts von deinen WordPress-Daten wissen!
:::

Du kannst dieses Problem umgehen, indem du das [Event als privat markierst](/de/application-manual/groups-and-events.html#detail-seite-1), wodurch keine Landingpage oder ics-Datei erzeugt. 
Der Button wird dann nicht mit einer vorgebauten ics-Datei arbeiten, sondern diese beim Aufruf dynamisch erzeugen.

Dies birgt leider den Nachteil, dass du eine schlechtere Kompatibilität akzeptieren musst (bspw. unterstützt Chrome auf iOS keine dynamische ics-Generierung) und dass du keine Event-Speichervorgänge tracken kannst. 
Leider gibt es keine Möglichkeit, dieses Problem zu umgehen.
