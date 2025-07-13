---
title: Fehlerbehebung
description: Löse häufige Probleme mit Add to Calendar PRO. Finde Antworten auf oft gestellte Fragen und Fehlerbehebungsschritte.
---

# Fehlerbehebung

## Wie kann ich Benutzerinteraktion nachverfolgen?

Wir verfolgen automatisch die wichtigsten Metriken für dich!

Das wären Anmeldungen (und alle damit verbundenen Details) für RSVP-Formulare und die "Event-Speicherungen" für die Add to Calendar Buttons (siehe [Details hier](/de/application-manual/analytics)).

Wir verfolgen keine zusätzlichen Daten automatisch, da dies normalerweise tiefer in dunklere Bereiche (in Bezug auf Datenschutz) gehen würde.

Wir haben jedoch auch hier einiges für dich vorbereitet!

1. Wir fügen das neueste Ereignis als Attribut `atcb-last-event` dem `<add-to-calendar-button>` Element hinzu. Es enthält dabei das Ereignis und den jeweiligen Trigger (Schema: "EVENT:TRIGGER"; Beispiel: "openList:atcb-btn-1").
2. Wir pushen diese Daten auch in den "Data Layer". Dies kann zum Beispiel direkt mit Google Analytics verwendet werden, um alle Ereignisse zu verfolgen.

Die Ereignisse, die wir pushen:

* initialization
* openList
* closeList
* openCalendarLink
* openSingletonLink
* openSubEventLink
* success

*(Du kannst dies ausprobieren, indem du mit dem Button auf unserer Webseite spielst und "dataLayer" in die JavaScript-Konsole eingibst.)*

## Das Tracking scheint nicht zu funktionieren

Wir erfassen die Initiierung des Speicher-Prozess über Klicks auf der Landingpage, E-Mail-Direktlinks und Add to Calendar Buttons mit aktiver `Proxy`-Option. Wenn die `Proxy` Option nicht im Style gesetzt ist, während du den Add to Calendar Button außerhalb der automatisch generierten Landingpage verwendest, können Klicks nicht nachverfolgt werden.

Wenn du die generierte ics-Datei direkt teilst können wir dies ebenfalls nicht nachverfolgen.

Das eigentliche Speichern kann auch nicht nachverfolgt werden, da dies in der Kalender-App passiert und wir keine Hacker-Spione sind 😉.

## Wie kann ich das RSVP-Formular die volle Breite einnehmen lassen

Das Inline-RSVP-Formular passt sich an den umgebenden Container an.

Das führt normalerweise bereits dazu, dass es die gesamte verfügbare Breite einnimmt. Abhängig vom verwendeten CSS musst du jedoch möglicherweise etwas wie `style="width:100%;"` zu diesem Container hinzufügen. Wenn der Container zum Beispiel ein Flexbox verwendet, ist das Angeben der Breite (`width`) obligatorisch.

## Wie kann ich sicherstellen, dass keine Daten öffentlich im Internet verfügbar sind

Standardmäßig sind die Eventdaten und die ics-Datei für jeden verfügbar, der den Link dazu kennt. Wir ermutigen Suchmaschinen, diese nicht aufzurufen, können dies jedoch nicht garantieren.

Dies ist für Funktionen wie E-Mail-Links oder den Add-to-Calendar-Button notwendig, um ordnungsgemäß zu funktionieren.

Wenn du nicht möchtest, dass dies geschieht - zum Beispiel, weil du sensible Informationen in die Eventdetails einfügst - kannst du ein Event (oder eine Gruppe) auf privat setzen. Klicke dazu auf den 3-Punkte-Button in der Aktionsleiste am Ende der Event-Detailseite und im Anschluss auf den entsprechenden Button.

Ein privates Event hat keine öffentliche ics-Datei oder Landingpage. Der Add-to-Calendar-Button funktioniert ebenfalls nicht, da er die Informationen über das Web abrufen muss. Du kannst jedoch weiterhin [ics-Dateien über unsere API generieren](/de/api/miscellaneous#retrieve-ics-file-body).

Das macht es zu einem idealen Fall für [dynamische Checkout-Flows](/de/recipes/dynamic-checkout) mit sensiblen Informationen!

## Das Dropdown des Add to Calendar Buttons verschwindet hinter anderen Elementen

Das Dropdown wird direkt nach dem Button-Element mit einem höheren z-Index gerendert.

Wenn dein Seitenlayout später auf der Seite einen neuen ["Stacking Context"](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context) definiert, kann dieser den Button überlagern.

Du kannst entweder dein Layout optimieren oder die `forceOverlay` Option im Style deines Add to Calendar Buttons aktivieren. Diese Option wird den Button auf eine eher brutale Weise (aus technischer Sicht) über allem anderen platzieren.

## Ich möchte denselben Add to Calendar Button mit 2 Styles verwenden

Um dies zu erreichen, musst du dein Event duplizieren und die 2 Events mit den verschiedenen Styles verbinden.

## Das Vorschaubild in sozialen Medien aktualisiert sich nicht

Wenn ein Link zur Landingpage geteilt wird, generieren wir automatisch ein Vorschaubild, das die Veranstaltungsdetails anzeigt. Dies hilft dabei, das Event prominenter zu bewerben.

Bei jedem Update wird dieses Bild ebenfalls aktualisiert. Allerdings cachen externe Tools und Websites dieses Bild normalerweise, was dazu führt, dass es sich nicht sofort aktualisiert. Einige Portale erneuern ihren Cache erst nach 7 Tagen, wenn überhaupt.

Selbst wenn wir alles Mögliche von unserer Seite aus tun (wie zum Beispiel die Bild-URL jedes Mal komplett zu ändern), haben wir keine direkte Kontrolle über diese externen Dienste und Plattformen.

_Was du in solchen Fällen tun kannst:_

* **Facebook/Meta**: Gehe zum Facebook-Debugger unter [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) und gib die URL ein, die du teilst. Wenn du die alten Informationen siehst, kannst du auf den Button "Erneut scrapen" klicken, und es sollte sich aktualisieren.
* **X/Twitter**: X bietet keine Option zum manuellen erneuern der Daten. Du kannst aber einen Trick anwenden, indem du einen Query-Parameter an deine URL anfügst. Auf diese Weise denkt X, dass du eine neue URL teilst, die erneut geprüft werden muss. Füge einfach etwas wie `?i=1` am Ende deiner URL hinzu. Du kannst die Nummer mehrmals ändern, um ein Auffrischen zu erzwingen.

## Meine IDE zeigt TypeScript-Warnings

Das kann in seltenen Fällen passieren, wenn die Typen noch nicht sauber geladen und verarbeitet wurden. Manchmal hilft ein Neustart der IDE oder des Computers.

Wenn das Problem weiterhin besteht, kannst du in der `tsconfig`-Datei [skipLibCheck](https://www.typescriptlang.org/tsconfig#skipLibCheck) auf `false` setzen, was die Warnung verhindern sollte.
Bitte eröffne auch einen neuen Issue in unserem GitHub-Repo ["add-to-calendar-button"](https://github.com/add2cal/add-to-calendar-button/issues/new/choose) oder sende uns eine E-Mail, damit wir das Problem genauer prüfen können.