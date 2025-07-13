---
title: Wie man die Buttons und RSVP-Formulare auf Wix.com nutzt
description: Integriere Add to Calendar PRO mit Wix-Websites. Schritt-für-Schritt-Anleitung für Kalender-Buttons und RSVP-Formulare auf Wix-Seiten.
---

# Wie man die Buttons und RSVP-Formulare auf Wix.com nutzt

::: warning App vs. PRO
Die folgende Anleitung beschreibt die Einbindung der PRO-Buttons und -Formulare in Wix!

Für Anwendungsfälle, bei denen nur ein einfacher Button genutzt wird, bieten wir im [Wix App Market](https://www.wix.com/app-market/add-to-calendar-button) auch eine offizielle App an, die mit unserem PRO-Angebot allerdings nicht verbunden ist!
:::

## Schritt 0: Voraussetzungen

Für die Integration des Add to Calendar Buttons oder RSVP Formulars muss das "Benutzerdefinierte Element" von Wix ([Wix-Hilfe-Artikel](https://support.wix.com/de/article/wix-editor-ein-benutzerdefiniertes-element-zu-deiner-website-hinzuf%C3%BCgen)) genutzt werden.

**Dieses unterliegt einigen Voraussetzungen!**

* Du benötigst ein Wix Premium Abo.
* Du musst eine Domain mit deiner Webseite verbunden haben.
* Stelle zudem sicher, dass Wix-Werbung entfernt wurde.

## Schritt 1: Erstelle ein Custom Element

* Füge ein neues Element aus dem Menü hinzu und wähle das benutzerdefinierte Element als Typ aus.
* Du solltest einen schicken Rahmen mit einem Bild und etwas Text darin sehen. Klicke darauf!
* Jetzt klicke auf den Button "Quelle aussuchen".
* Du solltest die Option erhalten, dein Skript von einer Server-URL oder einer Velo-Datei zu laden.
* Du wählst "Server-URL" aus und nutzt die jsDelivr-URL wie im allgemeinen Teil der Doku beschrieben:
```
https://cdn.jsdelivr.net/npm/add-to-calendar-button
```
* Scrolle anschließend im Panel nach unten und ändere das Feld "Tag-Name" zu `add-to-calendar-button`.

<br />

::: info
Obwohl es möglich ist, unser npm-Paket zu deiner Seite hinzuzufügen; eine Velo-Datei zu erstellen, in der du "add-to-calendar-button" importierst; und diese Datei hier als Velo-Datei auszuwählen, empfehlen wir lieber mit der CDN-Version zu arbeiten!
:::

## Schritt 2: Setze das ProKey-Attribut

* Schließe das Panel aus Schritt 1 und klicke auf "Attribute einrichten".
* Erstelle ein neues Attribut, indem du im Panel auf den Button klickst, der ebenfalls mit "Attribute einrichten" beschriftet ist.
* Als Namen verwendest du `proKey`.
* Als Wert benutzt du den **ProKey deines Events**.
* Das war's.


## Schritt 3: Teste das Ergebnis

* Dein Button sollte bereits angezeigt werden.
* Verschiebe ihn und positioniere ihn so wie du möchtest.
* **Last but not least:** Veröffentliche deine Seite und teste den Button auf der Live-Webseite. _Du solltest ihn nicht in der Vorschau testen (siehe unten)._

<br /><br />

## Glitch in der Vorschau

Beim Integrieren des Elements in Wix wirst du einige merkwürdige Verhaltensweisen in der Editor-Vorschau beobachten.

Innerhalb des Editors selbst sieht das Element genau so aus, wie es soll.

![Editor](/screenshots/wix-editor.png)

Wenn du die offizielle Vorschau startest und mit dem Button/Formular interagierst, wirst du aber sehen, dass Dinge abgeschnitten werden.

Das liegt daran, dass Wix das Element sowohl im Editor als auch in der Vorschau aus Sicherheitsgründen in ein eher eingeschränktes iframe setzt.

![Vorschau](/screenshots/wix-preview.png)

**Keine Sorge!**

Sobald du deine Seite veröffentlichst, sieht auf der Live-Website alles wieder gut aus! 😊

![Live](/screenshots/wix-public.png)

