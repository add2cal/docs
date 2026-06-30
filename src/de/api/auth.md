---
title: API-Authentifizierung
description: Authentifiziere dich mit Add to Calendar PRO API-Keys. Erstelle und verwende API-Keys für sicheren Zugang zu unseren Services.
---

# API-Authentifizierung

Um deine Aufrufe zu authentifizieren, musst du zunächst einen API-Schlüssel in den Organisations-Einstellungen der Anwendung erstellen.

## Verwendung

Verwende diesen Schlüssel für jede Anfrage mit dem Header `Authorization`.


<br />

**Example:**

```
Authorization: a4bac3b2-aaaa-4bc3-9c44-0e198b9aaa74
```

---

<br />

## Scoping

Beim Erstellen eines neuen API-Keys hast du die Möglichkeit, Folgendes festzulegen:

- den Scope (Read, Write, Read & Write)
- ein Ablaufdatum

Der Standard-Scope ist "Read". In der Regel wirst du "Read & Write" einstellen wollen.
Es wird empfohlen, einen eigenen Key pro Anwendung/System, mit dem du dich verbindest, zu verwenden. Halte den Scope so eingeschränkt wie möglich. Ein "Write"-Key, der öffentlich zugänglich wird, kann dazu führen, dass Angreifer alle deine Daten löschen!

Das Ablaufdatum deaktiviert deinen Key nach einem bestimmten Datum automatisch. Das kann hilfreich sein, um sicherzustellen, dass ein SchlüsKeysel, den du vergisst, nach einigen Monaten ohnehin nutzlos wird.

Beide Einstellungen können nur bei der Erstellung festgelegt werden. Wenn du sie später ändern möchtest, musst du einen neuen Key erstellen.