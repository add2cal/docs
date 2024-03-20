---
outline: [2,3]
---

# Newsletter effizient promoten

Wenn du dich mit Events beschäftigst, bietest du deinen Nutzern meist auch einen Newsletter an.

**Zeit, ihn zu bewerben!**

## 🎯 Das Ziel

Wir wollen ein Anmeldeformular mit einem "Add to Calendar"-Button verbinden.

Immer wenn ein Benutzer das Event speichert, wollen wir die Tatsache nutzen, dass er/sie bereits aktiv ist und eine Newsletter-Anmeldung anbieten.

## 📋 Die Tools

Um unser Ziel zu erreichen, brauchen wir im Grunde 3 Dinge:

1. Ein entsprechendes Event, das für den "Add to Calendar"-Button verantwortlich ist.
2. Eine CTA-Template vom Typ "Formular", die das Anmeldeformular enthält.
3. Die Möglichkeit, neue Abonnenten über einen API-POST-Aufruf in deinem Newsletter-System zu erstellen (und dann normalerweise einen API-Schlüssel).

## 🧱 Die Umsetzung

Theoretisch kannst du das alles auf einmal machen, wenn du ein neues Event erstellst.
Um Datenverlust zu vermeiden, empfehlen wir allerdings zuerst das CTA-Template und dann das Event zu erstellen. Auf diese Weise musst du beim Erstellen des Events nur das CTA-Template verlinken, anstatt es komplett neu zu erstellen.

**Los geht's:**

1. Gehe zu "Templates" und wähle den Typ "Call-to-Action".
2. Erstelle einen neuen Eintrag.
3. Gib ihm einen eingängigen Namen und wähle den Typ "Formular".
4. Verwende die Überschrift und das Texteingabefeld für zusätzliche Informationen, wie "Yeah, du hast es geschafft!" und "Nur noch ein Schritt, um nie wieder etwas Cooles zu verpassen. Melde dich für unseren Newsletter an!".
5. Als "URL" fügst du den API-Endpunkt hinzu.
6. Setze ein attraktives Beschriftung für den Absende-Button, wie "Jetzt anmelden".
7. Füge die entsprechenden Felder eines nach dem anderen hinzu. Wenn du ein verstecktes Feld "header" nennst und sein Wert einem JSON-Schema entspricht, werden wir dies für die Header-Informationen der Anfrage verwenden. In diesem Fall senden wir das Formular auch als JSON - daher solltest du dies unabhängig davon erstellen, ob du zusätzliche Header senden musst oder nicht (verwende in diesem Fall ein leeres Objekt: `{}`).
8. Speichere das Ganze ab.
9. Teste das Ergebnis über den Button auf der rechten Seite - und passe das Template bei Bedarf an. Stelle auch sicher, dass die Anfrage nicht durch CORS-Einstellungen auf dem Ziel-Server blockiert wird.
10. Erstelle nun ein neues Event.
11. Aktiviere die CTA-Option oben.
12. Gib die Event-Details nach Belieben an.
13. Wähle für das Call-to-Action-Template das vorher erstellte aus.
14. Speichere das Event und integriere den "Add to Calendar"-Button.
15. Du bist bereit, Newsletter-Abonnenten zu sammeln! 🚀
