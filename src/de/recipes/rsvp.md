---
outline: [2,3]
---

# Mit RSVP-Formularen arbeiten

Im [App Handbuch](/de/application-manual/styles-and-templates.html#rsvp) haben wir bereits die RSVP-Template-Blöcke vorgestellt, die für die Erstellung eines RSVP-Events unerlässlich sind.

In dieser Anleitung möchten wir dich durch den typischen Einrichtungsprozess eines RSVP mit Add to Calendar PRO führen, um dir das Leben zu erleichtern.

::: info Schritt für Schritt oder alles auf einmal
Du kannst fast alle folgenden Schritte auf einmal durchführen, wenn du ein neues Event erstellst.

Um es übersichtlicher zu gestalten, beschreiben wir den alternativen stufenweisen Prozess, bei dem du zuerst die einzelnen Bausteine erstellst. Wenn du das Event erstellst, musst du diese dann nur noch aus den Dropdown-Menüs auswählen.
:::

## 📋 Das Konzept

Bevor du irgendein Element erstellst, solltest du die Grunddaten deines Projekts aufschreiben. ☝️

* Musst du die Anzahl der Teilnehmer begrenzen?
* Ist es eine Veranstaltung oder mehrere?
* Ist es überhaupt an ein Datum gebunden oder möchtest du einfach ein allgemeines Anmeldeformular erstellen (siehe ["Warteliste"-Anleitung](/de/recipes/waitlist.html) für diesen Fall)?
* Wo möchtest du das Formular anzeigen?
* Welche Daten musst du abfragen?
* Sollen die Leute mit "nein" oder "vielleicht" antworten können?
* Ist ein Double-Opt-In für die Anmeldung erforderlich (notwendig, um die DSGVO einzuhalten)?
* und so weiter...

Wenn du über deine Ziele im Klaren bist kann die Erstellung beginnen!

## 🧱 Das RSVP-Template einrichten

* Besuche den RSVP-Bereich auf der [Template-Seite](https://app.add-to-calendar-pro.com/de/templates#rsvp).
* Erstelle einen neuen Eintrag.
* Definiere einen internen Namen, den du leicht identifizieren kannst.
* Das Ablaufdatum stellt sicher, dass sich niemand anmelden kann, nachdem du den letzten Kandidaten erfasst und verarbeitet hast.
* Die Begrenzung der Teilnehmerzahl ist nicht immer notwendig, aber bei "real-world"-Events in der Regel sinnvoll.
* Wir empfehlen auch, eine Überschrift und Intro-Text zu setzen, damit die Benutzer wissen, worum es geht. Abhängig davon, wo du das Formular nutzen möchtest, kannst du diese Informationen auch auf deiner Webseite oder der Landingpage (siehe unten) hinzufügen.
* Füge abschließend Felder für alle Informationen hinzu, die die Benutzer angeben sollen.
* Überprüfe das Ergebnis live in der Vorschau auf der rechten Seite! 😍

## 🎨 Einen Style definieren

* Besuche die [Style-Seite](https://app.add-to-calendar-pro.com/de/styles) und erstelle einen neuen Eintrag.
* Erstelle einen Style, der zu deiner Marke passt, und spiele mit allen Details, die die UX beeinflussen.
* Ob bestimmte Optionen für deinen Fall sinnvoll sind, hängt stark von deinem Plan ab. Ein Beispiel: Wenn du keinen "Add to Calendar"-Button anzeigen möchtest, musst du dich nicht um Kalender-Optionen kümmern.
* Die wichtigste Einstellung ist die Option "RSVP inline rendern". Sie definiert, ob das Formular direkt angezeigt wird oder ob wir einen Button darstellen, bei dem das Formular nur auf Klick erscheint (in einem Modal).
* Du kannst das Ergebnis in der Vorschau auf der rechten Seite beobachten, wenn du dort die "RSVP-Simulation" aktivierst. Beachte, dass diese Dummy-Daten verwendet! *(Wenn du alles gleichzeitig während der Eventerstellung erstellst, würdest du die Vorschau einschließlich deines tatsächlichen RSVP-Setups sehen.)*
* Das war's fürs Erste. Wir werden den Style später noch einmal überprüfen.

## 📅 Das Event erstellen

Jetzt kommen wir zum Kern des Ganzen - dem Event!

* Gehe zur Eventübersicht und erstelle ein neues Event.
* Aktiviere ganz oben den RSVP-Typ.
* Du kannst hier auch die Add to Calendar Button-Funktionalität abwählen. Auf diese Weise zeigen wir keine Add to Calendar-Buttons im Formular nach der Anmeldung.
* Beachte auch den Toggle "Event-Distribution". Wenn er aktiv ist, zeigen wir das Datum und die Event-Details auf der Landingpage und senden auch eine ics-Datei per E-Mail an den Benutzer. Wenn er inaktiv ist, hättest du ein reines Anmeldeformular, das an kein Datum und keine Uhrzeit gebunden ist.
* Wähle als Nächstes eine Gruppe aus oder lege eine Neue an. Dies ist im Grunde ein Container für das Event. Es kann hilfreich sein, mehrere RSVP-Events so gebündelt zu organisieren.
* Die Termin-Einstellungen sprechen in der Regel für sich.
* Abschließend wählst du am Ende dein bereits eingerichtetes RSVP-Template und den Style aus.
* Speichern und du bist bereit! 🚀

## 📧 Die E-Mails anpassen

Mit den vorherigen Schritten funktioniert dein RSVP-Formular bereits und kann Daten sammeln.

Es verwendet jedoch immer noch die Standard-E-Mail-Vorlagen. Nicht schlimm - diese sind so gestaltet, dass es auf jeden Anwendungsfall passt.

**Aber seien wir ehrlich - eine Individualisierung macht hier wirklich Sinn!**

* Gehe zum E-Mail-Bereich auf der [Template-Seite](https://app.add-to-calendar-pro.com/de/templates#email).
* Erstelle einen neuen Eintrag.
* Bevor du den internen Namen definierst, überprüfe den Typ - dort siehst du alle verschiedenen Fälle, in denen wir E-Mails an deine Benutzer senden. Nicht alle könnten auf deine Einrichtung zutreffen, aber du musst definitiv mehr als ein E-Mail-Template erstellen!
* Nachdem du den Typ angegeben hast, kannst du auf den Button "Standard-Inhalte laden" klicken, um die nachfolgenden Felder mit den Standard-Werten zu befüllen. Das macht die Bearbeitung deutlich einfacher!
* Passe alles nach deinen Wünschen und Vorstellungen an.
* Nachdem du gespeichert und das Template erneut geöffnet hast, kannst du dir eine Test-E-Mail über den Button auf der rechten Seite des Bildschirms senden.
* Wiederhole dies für alle verschiedenen Typen.
* E-Mail-Templates werden mit dem Style deines Events verknüpft. Gehe daher zurück zu deinem vorher erstellten Style-Element, aktiviere die erweiterten Einstellungen (falls noch nicht sichtbar) und wähle die E-Mail-Templates in den entsprechenden Dropdowns aus.

## ✨ Die Landingpage individualisieren

Falls du die automatisierten Landingpages nutzen möchtest, solltest du diese definitiv anpassen.

Falls du dies nicht planst, solltest du wissen, dass, wenn Benutzer ihre Antwort bearbeiten möchten, sie zu einer kleinen Verwaltungsseite weitergeleitet werden, die ebenfalls den Landingpage-Stil verwendet. Ein Landingpage-Template kann also auch aus diesem Grund sinnvoll sein.

* Gehe zum Landingpage-Bereich auf der [Template-Seite](https://app.add-to-calendar-pro.com/de/templates#landingpage).
* Erstelle einen neuen Eintrag.
* Passe die Werte an.
* Speichere alles.
* Das Landingpage-Template wird mit dem Style deines Events verknüpft. Gehe daher zurück zu deinem vorher erstellten Style-Element, aktiviere die erweiterten Einstellungen (falls noch nicht sichtbar) und wähle die Landingpage im entsprechenden Dropdown aus.
* Die Landingpage lässt sich am besten testen, indem du die tatsächliche Seite besuchst. Den Link findest du ganz oben auf der Event-Detailseite.

## 📣 Teile und integriere alles

Du kannst jetzt bereits ganz einfach die Landingpage überall teilen und deine ersten Anmeldungen sammeln.

Die Integration auf deiner eigenen Webseite funktioniert genauso, wie du einen Add to Calendar Button integrieren würdest. Schau dir die [Integrations-Dokumentation](/de/integration.html) für eine genauere Anleitung für deinen Tech-Stack an. Das Element selbst passt sich automatisch dem RSVP-Typ an.

::: tip
Du kannst den Teilnehmer für den RSVP auf Quellcode-Ebene vorbefüllen, indem du das "attendee"-Attribut dem HTML-Element hinzufügst. Beachte das Format "name|email".

Beim Teilen der Landingpage kannst du im Grunde dasselbe tun, indem du `?attendee=name|email` an die URL anfügst. Idealerweise kodierst du diese Daten mit einem Tool wie [urlencoder.io](https://www.urlencoder.io/), was zu einem stabileren Link führt - im Beispiel `?attendee%3Dname%7Cemail`.
:::

## 🔎 Antworten tracken und verwalten

In der App findest du den Button "RSVP Antworten" oben auf der Event-Detailseite - sowie kleine Buttons in den Event-Übersichtstabellen.

Sie führen dich zu der Seite, auf der du alle Antworten verfolgen kannst.

Du findest dort Statistiken sowie eine detaillierte Tabelle mit allen Informationen, die in das Formular eingegeben werden.

Unten auf der Seite findest du Buttons, worüber du diese Daten als JSON- oder CSV-Datei exportieren kannst.

## 🔗 Verbinde es mit deinem System

Wenn du noch einen Schritt weiter gehen möchtest, kannst du es mit deinen anderen Systemen, wie deinem CRM, verknüpfen.

Nutze unsere [Webhook-Funktionalität](/de/automation-integration/webhooks.html), um Daten automatisch an andere Stellen zu pushen.

1. Navigiere zur [Webhook-Seite](https://app.add-to-calendar-pro.com/de/webhooks).
2. Erstelle einen neuen Eintrag.
3. Lege einen entsprechenden Trigger fest. Du möchtest vielleicht einen Webhook sowohl für das Erstellen als auch für das Aktualisieren des Events erstellen.
4. Setze "RSVP-Antwort" als Trigger-Element.
5. Methode und Payload-URL sollten auf dein Zielsystem verweisen.
6. Füge die benötigten Header- und Body-Informationen hinzu und beachte die zusätzlichen Hinweise auf der Seite.
7. Sobald ein Benutzer sich anmeldet oder seine Antwort ändert, wirst dieses System ab sofort automatisch benachrichtigt! 💪
