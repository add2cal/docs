---
title: Konto und Organisation einstellen
description: Pflege dein Profil, sichere deinen Zugang und finde Einstellungen für Rechnungen, API-Keys, E-Mail-Absender und eigene Domains.
outline: [2,3]
---

# Konto und Organisation einstellen

Über das Zahnrad im Menü erreichst du **Einstellungen**. Wähle **Benutzer**, **Organisation**, **Technisches** oder **Lizenz**, je nachdem, was du ändern möchtest.

[Einstellungen in der App öffnen](https://app.add-to-calendar-pro.com/de/settings)

## Benutzer-Einstellungen

Ändere Name, Anrede/Pronomen, Zeitzone und bevorzugtes helles oder dunkles Theme. Die Konto-Zeitzone hilft bei der Datumsanzeige in der App. Prüfe beim Erstellen zusätzlich die eigene Zeitzone des Events.

Lasse **Hinweise ausblenden** während der Einarbeitung deaktiviert. **E-Mail-Benachrichtigungen** betrifft Produktneuigkeiten und Marketing, nicht die RSVP-Nachrichten an deine Teilnehmer.

### Login und E-Mail-Adresse

Die Login-Adresse kann nicht direkt bearbeitet werden. Lade für eine neue Adresse ein weiteres [Team-Mitglied](/de/application-manual/team) ein, nimm die Einladung an und prüfe dessen Rechte, bevor du das alte Konto entfernst.

Bei einem Passwort-Login meldet dich **Passwort ändern** ab und sendet eine E-Mail mit einem Link zum Zurücksetzen. Bei Google oder GitHub verwaltest du den Login beim jeweiligen Anbieter.

### Zwei-Faktor-Authentifizierung

Öffne bei einem Passwort-Konto **Zwei-Faktor-Authentifizierung**, gib dein Passwort ein, scanne den QR-Code mit deiner Authenticator-App und bestätige mit deren erzeugtem Code. Behalte für künftige Anmeldungen den Zugriff auf diese App.

## Organisation

Admins können Organisationsname, Rechnungs-E-Mail, Adresse, USt-ID und Logo ändern. Das Logo kann in zugehörigen E-Mails erscheinen. Prüfe die Rechnungsangaben vor einem Kauf.

Events und andere Inhalte gehören der Organisation, nicht ihrer ursprünglichen Erstellerin oder ihrem Ersteller. Deshalb können Kollegen weiterarbeiten, wenn jemand das Team verlässt.

## Technisches

Diesen Bereich verwalten Admins. Du brauchst ihn normalerweise nur für Verbindungen zu anderen Diensten oder einen eigenen E-Mail-Versand.

### API-Keys {#api-keys}

Wähle **Neuer API-Key**, vergib einen verständlichen Namen, wähle **Read** oder **Read & Write** und bei Bedarf ein Ablaufdatum. Erlaube nur den Zugriff, den der verbundene Dienst benötigt.

Kopiere den Key in dessen Verbindungseinstellungen. Du kannst ihn vorübergehend deaktivieren oder dauerhaft löschen; beides betrifft Integrationen, die ihn verwenden. Technische Details stehen in der [API-Authentifizierungsanleitung](/de/api/auth). Ein API-Key gehört nie in einen öffentlichen Website-Button. Dieser verwendet einen ProKey.

### E-Mail-Absender

Wähle eine angebotene Versandadresse oder ein eigenes Profil. Für ein eigenes Profil benötigst du SMTP-Daten deines E-Mail-Anbieters. Bitte eure E-Mail-Administration, diese einzutragen und zu prüfen.

Das Ändern der Absender-Adresse setzt die SMTP-Einstellungen zurück. Anzeigename und Antwortadresse lassen sich separat in den [E-Mail-Templates](/de/application-manual/email-templates) einstellen.

### Eigene Domain

Wenn deine Organisation eigene Domains nutzen kann, zeigt Technisches den globalen Standard. Im [Landingpage-Template](/de/application-manual/landing-pages) kannst du eine verfügbare seitenspezifische Domain wählen. Kontaktiere bei Fragen zur Einrichtung den Support.

## Lizenz

Prüfe aktuelle Lizenz, Verlängerungsdatum und verfügbare monatliche Events. Die Kaufverwaltung öffnet Paddle, wo du Rechnungen findest und Zahlungsmittel änderst. Maßgeblich für aktuelle Preise sind die Angaben in der App.

Mit **Auto-Scale** kannst du, soweit verfügbar, nach Verbrauch des Kontingents weitere Events erstellen. Dafür entstehen zusätzliche Nutzungskosten. Das Deaktivieren verhindert weitere automatische Zusatzkäufe, kündigt aber nicht die Lizenz.

Eine Kündigung ist sofort oder zum Ende des Abrechnungszeitraums möglich. Lies die gewählte Option vor der Bestätigung: Eine sofortige Kündigung beendet auch den Zugang sofort.

## Eigenes Konto löschen

Der Gefahrenbereich befindet sich unter Benutzer. Bleiben andere Personen, stelle vorher sicher, dass jemand anderes Admin ist. Als letzter Nutzer löschst du auch Organisation und Daten dauerhaft. Die App kann verlangen, zuerst ein aktives Abonnement zu kündigen.
