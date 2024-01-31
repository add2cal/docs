---
outline: [2,3]
---

# Elemente

Bei Add to Calendar PRO betrachten wir die verschiedenen Elemente im Kontext von Event-Sharing und RSVP als Bausteine.

Das erleichtert die Wiederverwendung spezifischer Setups, hält alles aufgeräumt und reduziert den Wartungsaufwand auf deiner Seite.

Die Hierarchie sieht folgendermaßen aus:

```
└─ Event-Gruppe
   └─ Event
      ├─ RSVP-Template *(optional)*
      ├─ CTA-Template *(optional)*
      └─ Style *(optional)*
          ├─ Landingpage-Template *(optional)*
          └─ E-Mail-Template je RSVP-E-Mail-Typ *(optional)*
```

Du wirst auf diese Hierarchie während der Erstellung eines Elements stoßen. Innerhalb der App sind sie jedoch etwas anders organisiert, um sie leichter zugänglich zu machen - siehe Hauptnavigation (Events - Styles - Templates).

Webhooks, Team und Einstellungen sind zusätzliche Elemente, die wir auf dieser Seite ebenfalls beschreiben.

## Events

::: tip Events sind der Kern von allem.
Generell geht es um Events.
:::

Sie sind der Kern von allem, was du mit Add to Calendar PRO erstellst. Das mag offensichtlich für Add-to-Calendar-Buttons sein, aber auch ein RSVP basiert immer auf einem Event (selbst in Sonderfällen, wo es kein spezifisches Datum gibt).

**Du solltest immer damit beginnen, zuerst ein Event zu erstellen!**

*(Ausgenommen der Fall, wo du ein Kalender-Abonnement mit einem externen Kalender anbieten möchtest. Da die Events im Grunde außerhalb unseres Systems liegen, würdest du direkt mit einer Eventgruppe beginnen.)*

[Mehr erfahren &raquo;](/de/application-manual/groups-and-events.html#events)

## Gruppen

**Eine Eventgruppe ist im Grunde ein Container für Events.**

Sie kann verwendet werden, um alle deine Termine zu strukturieren und zu organisieren, oder um auf einen externen Kalender zu verlinken, anstatt auf einzelne Events. Wenn du ein neues Event erstellst, wirst du gefragt, in welcher Gruppe du es platzieren möchtest (oder ob du eine neue Gruppe erstellen möchtest).

[Mehr erfahren &raquo;](/de/application-manual/groups-and-events.html#groups)

## Styles

[Styles](/de/application-manual/styles-and-templates.html#styles) definieren den Look aller öffentlichen Elemente.

Sie können direkt bei der Erstellung eines neuen Events erstellt werden.

Du kannst sie auch unabhängig davon im Abschnitt "Styles" erstellen.
Alle Events, die du erstellst, können mit nur einem Klick mit einem Style verknüpft werden. Dies erleichtert es, denselben Stil für mehrere Buttons oder Formulare zu verwenden, ohne sie immer wieder neu definieren zu müssen.

*Im Grunde genommen sind "Styles" auch Templates. Wir unterscheiden hierbei im Wording, weil sie eine zentralere Rolle spielen - aber das ist auch schon alles.*

::: info Beachte, dass es einige Ausnahmen gibt.
Landingpages und RSVP-E-Mails werden auch teilweise innerhalb der jeweiligen Template-Blöcke und nicht nur durch den *Style* gestaltet!
:::

## Templates

Ähnlich wie bei den "Styles" werden auch alle anderen Elemente als Template-Blöcke erstellt.
Das bedeutet, dass du sie für mehrere Events wiederverwenden kannst. **Sie sind auch aktiv damit verbunden, was bedeutet, dass eine Änderung eines Templates (oder eines Styles) direkt jedes verknüpfte Event beeinflusst!**

Alle Templates können auch direkt bei der Eventerstellung erstellt werden. Ihr "Zuhause" ist allerdings der jeweilige Abschnitt in der App.

### RSVP

Ein [RSVP-Template](/de/application-manual/styles-and-templates.html#rsvp) definiert RSVP-Funktionalitäten wie Ablaufdatum, Limitationen oder zusätzliche Angaben/Felder.

Verbinde diese mit einem Event, während du die RSVP-Option aktivierst, und du verwandelst den Add-to-Calendar-Button in ein voll funktionsfähiges RSVP-Formular.

### CTA

Ein [Call-to-Action (CTA)](/de/application-manual/styles-and-templates.html#cta) ist einem RSVP-Template sehr ähnlich.

Er kann auch mit einem Event verknüpft werden und wird angezeigt, nachdem Benutzer das Event zu ihrem Kalender hinzugefügt haben. Es kann ein Slogan, "Teilen"-Buttons, ein Link zu einem anderen Produkt/einer anderen Webseite/einem anderen Event oder sogar ein Formular (z. B. Newsletter-Anmeldung) sein.

Erstelle hier die Funktionalität, verlinke sie mit deinem Event, und der CTA wird automatisch angezeigt - im Look eines verknüpften Styles.

### E-Mails

[E-Mail-Templates](/de/application-manual/styles-and-templates.html#emails) können mit einem Style verknüpft werden.

Wenn du sie definierst, überschreibst du die Standard-E-Mails, die wir für jede RSVP-Interaktion des Benutzers senden (wie Double-Opt-In, Bestätigung usw.).

Du kannst auch das Aussehen der E-Mail innerhalb des Templates anpassen.

### Landingpages

Für jedes Event generieren wir automatisch eine ansprechende, responsive Landingpage.

Dies erleichtert das Teilen deines RSVPs oder Events in sozialen Medien und darüber hinaus.

Indem du ein [Landingpage-Template](/de/application-manual/styles-and-templates.html#landingpages) erstellst, kannst du das Aussehen sowie zusätzliche Inhalte dieser Landingpage anpassen.
Verknüpfe das Template mit dem Style, der beim jeweiligen Event verwendet wird, und du bist fertig.

## Webhooks

Mit [Webhooks](/de/automation-integration/webhooks.html) kannst du Informationen problemlos an andere Dienste weiterleiten, wann immer etwas Wichtiges mit deinem RSVP oder Event passiert (außer, wenn Benutzer Events in ihren Kalender speichern - dies muss anders getrackt werden).

## Teammitglieder

Du kannst deine Kolleginnen und Kollegen zu deinem [Team](/de/application-manual/team.html) einladen und gemeinsam an Projekten arbeiten.

**Keine Sorge, es gibt keine Begrenzung in der Anzahl, bzw. entstehen keine Kosten durch mehr Mitglieder!**

Im Abschnitt "Team" kannst du die Einladungen und Rollen verwalten.

## Einstellungen

Während die [Einstellungen](/de/application-manual/settings.html) hauptsächlich deinen Account, das Aussehen der Anwendung und deine Lizenz betreffen, beeinflussen einige Teile auch deine Projekte. Zum Beispiel kannst du ein Logo hochladen, das dann auch in den E-Mail-Templates als Abbinder verwendet wird.
