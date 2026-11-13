---
title: KI-Assistenten per MCP verbinden
description: Verbinde einen MCP-kompatiblen KI-Assistenten sicher mit Add to Calendar PRO und erfahre, worauf er zugreifen kann.
outline: [2,3]
---

# KI-Assistenten per MCP verbinden

Das Model Context Protocol (MCP) ermöglicht kompatiblen KI-Assistenten und Entwickler-Tools, mit deinen Daten in Add to Calendar PRO zu arbeiten. Sie können deine Konfiguration prüfen, beim Erstellen oder Aktualisieren von Events helfen und Fragen mithilfe der Add to Calendar PRO Dokumentation beantworten.

Die URL des MCP-Servers lautet:

```text
https://add-to-calendar-pro.com/mcp
```

Verwende diese Adresse exakt in Kleinschreibung. Der Server nutzt OAuth. Du hinterlegst deinen API-Schlüssel daher nicht im KI-Assistenten.

## Voraussetzungen

Du benötigst:

- einen MCP-Client, der entfernte HTTP-Server und OAuth unterstützt;
- einen aktiven API-Schlüssel von Add to Calendar PRO; und
- die Berechtigung **Read** zum Prüfen von Daten oder **Read & Write**, wenn der Assistent Daten erstellen, ändern oder löschen soll.

Erstelle unter [Einstellungen → API-Schlüssel](https://app.add-to-calendar-pro.com/de/settings) einen eigenen Schlüssel für diese Verbindung. Vergib nur die benötigten Berechtigungen und nach Möglichkeit ein Ablaufdatum. Die OAuth-Verbindung validiert den Schlüssel durch das Lesen deiner Gruppen. Ein Schlüssel, der ausschließlich Schreibrechte besitzt, reicht deshalb nicht aus.

## MCP-Client verbinden

Die Bezeichnungen unterscheiden sich je nach Client. Der Ablauf bleibt gleich:

1. Öffne im Client die Einstellungen für MCP-Server, Integrationen oder Konnektoren.
2. Füge einen entfernten MCP-Server hinzu und trage `https://add-to-calendar-pro.com/mcp` als URL ein. Als Anzeigename kannst du **Add to Calendar PRO** verwenden.
3. Falls der Client nach einer OAuth Client-ID oder einem Client-Secret fragt, lasse diese Felder leer. Kompatible Clients registrieren sich automatisch.
4. Starte die Verbindung oder Autorisierung. Dein Browser öffnet eine Autorisierungsseite auf `add-to-calendar-pro.com`.
5. Prüfe den dort angezeigten Client-Namen und das Weiterleitungsziel. Gib deinen eigens erstellten API-Schlüssel ein und autorisiere die Verbindung.
6. Kehre zum Client zurück, wenn du dazu aufgefordert wirst. Dort sollten jetzt die Tools von Add to Calendar PRO erscheinen.
7. Teste die Verbindung mit einer reinen Leseanfrage, zum Beispiel „Liste meine Event-Gruppen auf“ oder „Zeige mein neuestes Event“.

Trage den API-Schlüssel weder in die MCP-Server-URL noch in ein Feld für HTTP-Header, eine Chat-Nachricht oder ein geheimes Feld des MCP-Clients ein. Er gehört ausschließlich in das Autorisierungsformular von Add to Calendar PRO.

## So wird dein API-Schlüssel geschützt

Das Autorisierungsformular übermittelt den API-Schlüssel direkt an Add to Calendar PRO. Nach der Validierung wird er verschlüsselt in der OAuth-Berechtigung gespeichert und serverseitig verwendet, wenn ein MCP-Tool die API aufruft. Der MCP-Client erhält OAuth-Tokens, nicht den API-Schlüssel.

Der API-Schlüssel wird nicht an den Client zurückgegeben, in Tool-Ergebnisse aufgenommen, protokolliert oder vom MCP-Server zwischengespeichert. Der Assistent kann dennoch mit den Berechtigungen dieses Schlüssels handeln. Verwende deshalb einen eigenen, eingeschränkten Schlüssel und prüfe Schreib- oder Löschaktionen vor der Freigabe.

Um den Zugriff zu beenden, trennst du den Server im MCP-Client und widerrufst oder löschst den eigenen API-Schlüssel unter **Einstellungen → API-Schlüssel**. Der Widerruf verhindert weitere API-Aktionen, auch wenn der Client noch ein OAuth-Token besitzt.

## Was ein Assistent erledigen kann

Der MCP-Server stellt 54 definierte API-Aktionen als einzelne Tools bereit. Mit der erforderlichen Berechtigung des API-Schlüssels kann ein Assistent:

- Event-Gruppen und Events auflisten, prüfen, erstellen, aktualisieren und löschen;
- Styles, RSVP-Templates, CTA-Templates, Landingpage-Templates und Webhooks auflisten, prüfen, erstellen, aktualisieren und löschen;
- Event-Listen filtern, erzeugte ICS-Inhalte abrufen und Bilder für Landingpages hochladen;
- Aufrufe, Speichervorgänge und RSVP-Statistiken von Events lesen;
- RSVP-Antworten auflisten und die neuesten Antworten prüfen;
- E-Mail-Templates und benutzerdefinierte Domains auflisten; und
- diese Dokumentation durchsuchen und lesen oder bewerten, welche Lösung von Add to Calendar PRO zu einem Anwendungsfall passt.

Diese Tools decken fast alles ab, was du für die Arbeit mit Events und den damit verbundenen Elementen benötigst. Der Assistent erhält die erwarteten Felder und Warnungen für jedes Tool. Maßgeblich für unterstützte Werte und das genaue Verhalten bleibt die [API-Referenz](/de/api/introduction).

Das Erstellen, Aktualisieren und Löschen erfordert einen Schlüssel mit Schreibberechtigung. Löschvorgänge können Daten dauerhaft entfernen oder verknüpfte Funktionen trennen. Wenn du beispielsweise eine Gruppe löschst, werden auch ihre Events gelöscht. Bitte den Assistenten, eine geplante destruktive Aktion zu erklären, bevor er das Tool ausführt.

## Aktuelle Einschränkungen

MCP stellt keine Tools für folgende Aufgaben bereit:

- Nutzer, Team-Mitglieder, Einladungen, Kontosicherheit oder Anmeldemethoden verwalten;
- Organisationsdaten, Tarife, Abrechnung oder Abonnements ändern;
- API-Schlüssel erstellen, erneuern oder löschen;
- E-Mail-Templates erstellen, aktualisieren oder löschen;
- RSVP-Antworten oder die Konfiguration benutzerdefinierter Domains ändern; oder
- beliebige API-Pfade aufrufen, für die kein definiertes MCP-Tool existiert.

Die Verbindung umgeht weder deinen Tarif und die API-Limits noch Berechtigungen oder den Umfang des API-Schlüssels. Auch ein KI-Assistent kann eine Anfrage missverstehen. Prüfe IDs, Termine, verknüpfte Templates und geplante Änderungen, bevor du Schreib- oder Löschaktionen zulässt.

## Fehlerbehebung

### Die Autorisierungsseite öffnet sich nicht

Prüfe, ob die Server-URL exakt `https://add-to-calendar-pro.com/mcp` lautet, ohne `/oauth` und ohne Großbuchstaben im Pfad. Entferne manuell eingetragene OAuth Client-IDs oder Secrets. Der Client muss entfernte MCP-Server, OAuth und die dynamische Client-Registrierung unterstützen.

### Der API-Schlüssel wird abgelehnt

Prüfe, ob der Schlüssel aktiv und noch nicht abgelaufen ist und eine Leseberechtigung enthält. Erstelle bei Bedarf unter **Einstellungen → API-Schlüssel** einen neuen eigenen Schlüssel. Verwende nicht dein Kontopasswort.

### Lesen funktioniert, Änderungen schlagen jedoch fehl

Der Schlüssel besitzt wahrscheinlich nur Leserechte. Ersetze ihn durch einen eigenen Schlüssel mit **Read & Write**, verbinde den MCP-Server erneut und führe die Autorisierung noch einmal durch.

### Der Client bleibt nach einem Schlüsselwechsel verbunden

Trenne den MCP-Server im Client, widerrufe den alten API-Schlüssel und autorisiere eine neue Verbindung. Falls der Client eine eigene Funktion zum Löschen der gespeicherten OAuth-Autorisierung anbietet, verwende sie vor dem erneuten Verbinden.
