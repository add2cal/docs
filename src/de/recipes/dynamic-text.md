---
title: Nutze Variabeln, um Event-Texte je Nutzer anzupassen
description: Personalisiere Event-Inhalte mit dynamischen Variablen. Lerne, individuelle Event-Titel und Beschreibungen für einzelne Nutzer zu erstellen.
outline: [2,3]
---

# Nutze Variabeln, um Event-Texte je Nutzer anzupassen

In manchen Fällen möchtest du dein Event für jeden Benutzer individuell leicht anpassen.

Hierbei sprechen wir nicht über benutzerspezifische Ereignisse, die bspw. beim Checkout-Prozess auftreten können ([siehe entsprechende Seite hierzu &raquo;](/de/recipes/dynamic-checkout))!

Es geht eher um Events, bei denen du bestimmte Felder, wie den Titel oder die Beschreibung, auf die Nutzer zuschneiden möchtest (für den persönlichen Touch).

**Für diese Fälle kannst du benutzerdefinierte Variablen verwenden!**

## Prozess

1. Zuerst musst du dein Event erstellen.
2. Als Nächstes musst du Text im **Titel**, **Ort** oder in der **Beschreibung** des Events mit deinen Variablen spicken.
Ein Variablenplatzhalter kann so aussehen: `%%variableName%%`.
3. Schließlich musst du die `customVar` Option nutzen (ein JSON-Objekt, bei dem der Key der Variablenname und der Value der entsprechende Text ist), um die tatsächlichen Texte für die Variablen im Button-Code und/oder auf der Landingpage einzufügen. Daher musst du natürlich sicherstellen, dass du diese Informationen im jeweiligen Moment zur Verfügung hast.

## Beispiel

Das folgende detaillierte Beispiel sollte alle offenen Fragen beantworten.

### Ziel

Wir möchten ein Event erstellen, das den Namen des Benutzers in seinem Titel beinhaltet - "Erinnerung an das Event für Max Mustermann".

Wir wollen den Namen zudem auch in der Beschreibung verwenden, beginnend mit "Hi Max".

### Situation

Wir zeigen einen Add-to-Calendar-Button in einem geschützten Bereich (angemeldeter Benutzer) auf unserer **Webseite** - daher kennen wir dort auch den Namen.

Zusätzlich senden wir eine **E-Mail** an den Benutzer, in der wir ihn auf die **Landingpage** des Events schicken. Wir kennen den Namen des Benutzers beim Senden der E-Mail, aber nicht auf der Landingpage, da diese von Add to Calendar PRO gehostet wird (das ist aber kein Problem).

### Das Event

1. Wir erstellen ein neues Event in der App.
2. Wir schreiben den Titel: `Erinnerung an das Event für %%firstname%% %%lastname%%`.
3. Wir schreiben die Beschreibung: `Hi %%firstname%%! Das ist ...`.
4. Wir definieren alle anderen Details wie gewohnt.

### Die Integration

#### Webseite:

Auf unserer Webseite binden wir den Button mit folgendem Code ein:

```
<add-to-calendar-button prokey="der-Prokey-unseres-Events" customVar='{"firstname": "dynamischer-Wert-aus-dem-Backend", "lastname": "dynamischer-Wert-aus-dem-Backend"}'></add-to-calendar-button>
```

Das setzt die Informationen zur Laufzeit in den Button. Am Ende könnte es so aussehen:

```
<add-to-calendar-button prokey="1b39d497-bf14-45ed-b9af-2cfab5c1231a" customVar='{"firstname": "Max", "lastname": "Mustermann"}'></add-to-calendar-button>
```

#### E-Mail:

Beim Senden der E-Mail verwenden wir den Link zur Landingpage `https://caldn.net/der-Prokey-unseres-Events`, fügen aber die customVar Informationen als Query-Parameter hinzu.

Beachte, dass du diese Information kodieren musst, damit sie in einer URL nutzbar ist! Du kannst einen kostenlosen Online-Kodierer wie [urlencoder.io](https://www.urlencoder.io/) verwenden.

In unserem Fall führt das zu einer URL wie die Folgende:

```
https://caldn.net/1b39d497-bf14-45ed-b9af-2cfab5c1231a?customVar=%7B%22firstname%22%3A%20%22Max%22%2C%20%22lastname%22%3A%20%22Mustermann%22%7D
```

<br />

--- 

<br />

**Das ist alles.**

Wenn der Benutzer auf den Link klickt, füllt die Landingpage ebenfalls die Platzhalter mit den bereitgestellten Informationen aus. Natürlich macht es immer Sinn, dies zu testen, bevor man es live schaltet!

Viel Spaß! 😊