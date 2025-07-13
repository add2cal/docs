---
title: Integrierte Webhooks und API nutzen
description: Nutze Webhooks um externe Services zu benachrichtigen, wenn sich Add to Calendar PRO Events ändern. Sende benutzerdefinierte Payloads.
---

# Integrierte Webhooks und API nutzen

Du kannst Webhooks verwenden, um einen anderen Dienst oder System zu benachrichtigen, wenn sich etwas bei deinen Add to Calendar PRO Events ändert.

Standardmäßig senden wir alle Daten des Trigger-Elements als JSON-Objekt mit dem Schlüssel "element_data". Du kannst aber auch benutzerdefinierte Felder und Werte ergänzen.

[In der App öffnen ❯](https://app.add-to-calendar-pro.com/de/webhooks)

<br />

::: tip Erstelle/Aktualisiere Elemente via API
Um Elemente in Add to Calendar PRO von einem anderen System aus zu erstellen oder zu aktualisieren, kannst du die dokumentierten API-Endpunkte nutzen.

[Zur Dokumentation geht es hier ❯](/de/api/introduction)
:::

## Mögliche Use Cases

* Sende RSVP-Anmeldungen zusätzlich an dein CMS.
* Tracke die Erstellung von Events in deinem Analytics-Tool, um die interne Nutzung zu überwachen.

## Wie es funktioniert

Erstelle einen neuen Webhook in der Anwendung.
Dort kannst du alle relevanten Parameter festlegen:


| Feld            | Wert                                                                                                                                                                                                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name            | Dies ist lediglich der interne Name, um deinen Webhook in Übersichten zu identifizieren.                                                                                                                                                                                         |
| Status          | Deaktiviere den Webhook temporär, ohne ihn zu löschen.                                                                                                                                                                                                                          |
| Trigger         | Trigger kann "Neu", "Update" oder "Löschen" sein. Er bestimmt, bei welcher Aktion der Webhook ausgelöst wird.                                                                                                                                                                   |
| Trigger-Element | Das Trigger-Element definiert bei welcher Element-Art die Trigger-Aktion greift. Ein Trigger "Update" mit einem Trigger-Element "Event" würde bspw. immer dann ausgelöst werden, wenn eines deiner Events aktualisiert wird.                                                    |
| Prokey-Filter   | Im Falle von RSVP-Antworten kann hierüber auf ein bestimmtes Event gefiltert werden, so dass nicht jede RSVP-Antwort den Webhook auslöst.                                                                                                                                       |
| Methode         | Die Methode definiert wie wir die Anfrage an das Dritt-System senden. Der Wert kann GET, POST, PUT, PATCH oder DELETE lauten. Achte darauf, dass die Sicherheits-Einstellungen des Zielsystems die Anfrage nicht blockieren!                                                      |
| Payload-URL     | Die Payload-URL ist der Endpunkt, an den die Anfrage gesendet wird.                                                                                                                                                                                                               |
| Header          | In diese Eingabemaske kannst du Key-Value-Paare hinzufügen, die im Header des Aufrufs gesendet werden.<br />Dies ist für gewöhnlich für die Authentifizierung nötig. Ggf. musst du aber auch andere Informationen in den Header einfügen (abhängig von deinem Zielsystem). |
| Body            | Hier kannst du ebenfalls Key-Value-Paare hinzufügen. Felder, die hier definiert werden, werden zusätzlich zu dem Standard-Feld "element_data" gesendet.                                                                                                                         |

## Den Payload mit dynamischen Werten anreichern

Du kannst Variablen verwenden, um benutzerdefinierte Daten dynamisch zu gestalten. Neben dem "Trigger-Element" findest du einen Button, der dir alle verfügbaren Variablen für deinen jeweiligen Aufruf anzeigt. Beachte, dass für einen DELETE-Trigger nur die ID verwendet werden kann.

Diese Variablen können im Header oder Body mit doppelten geschweiften Klammern verwendet werden.

Zum Beispiel kann die Variable "email", die die E-Mail-Adresse des Benutzers bei einer RSVP-Anmeldung enthält, als zusätzliches Feld zum Body hinzugefügt werden, indem der Key auf etwas wie "user-email" und der Wert auf "<span v-pre>{{email}}</span>" festgelegt wird.
