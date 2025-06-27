# API

Wir bieten eine einfache REST-Schnittstelle zum Erstellen und Lesen von Elementen an.

## URL

Die Basis-URL lautet:

```
https://api.add-to-calendar-pro.com/v1
```

Alle folgenden Call-Schemata setzen voraus, dass diese Basis vorangestellt wird.

## Rate Limiting

Die API beinhaltet ein Rate Limit von 80 Requests pro Sekunde.  
Sollte dir dies nicht ausreichen, sende uns bitte eine Nachricht, in der du uns deinen Fall beschreibst.

## Methoden

Die API akzeptiert die Methoden GET, POST, PATCH und DELETE.  
Für Aktualisierungen kannst du auch PUT nutzen. Dies wird automatisch zu PATCH konvertiert und ist daher nur als ein Workaround zu verstehen, falls eine PATCH-Methode in deinem Setup nicht möglich ist.
