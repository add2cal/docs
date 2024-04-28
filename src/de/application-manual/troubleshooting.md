
# Fehlerbehebung

## Meine IDE zeigt TypeScript-Warnings

Das kann in seltenen Fällen passieren, wenn die Typen noch nicht sauber geladen und verarbeitet wurden. Manchmal hilft ein Neustart der IDE oder des Computers.

Wenn das Problem weiterhin besteht, kannst du in der `tsconfig`-Datei [skipLibCheck](https://www.typescriptlang.org/tsconfig#skipLibCheck) auf `false` setzen, was die Warnung verhindern sollte.
Bitte eröffne auch einen neuen Issue in unserem GitHub-Repo ["add-to-calendar-button"](https://github.com/add2cal/add-to-calendar-button/issues/new/choose) oder sende uns eine E-Mail, damit wir das Problem genauer prüfen können.

## Das Vorschaubild in sozialen Medien aktualisiert sich nicht

Wenn ein Link zur Landingpage geteilt wird, generieren wir automatisch ein Vorschaubild, das die Veranstaltungsdetails anzeigt. Dies hilft dabei, das Event prominenter zu bewerben.

Bei jedem Update wird dieses Bild ebenfalls aktualisiert. Allerdings cachen externe Tools und Websites dieses Bild normalerweise, was dazu führt, dass es sich nicht sofort aktualisiert. Einige Portale erneuern ihren Cache erst nach 7 Tagen, wenn überhaupt.

Selbst wenn wir alles Mögliche von unserer Seite aus tun (wie zum Beispiel die Bild-URL jedes Mal komplett zu ändern), haben wir keine direkte Kontrolle über diese externen Dienste und Plattformen.

_Was du in solchen Fällen tun kannst:_

* **Facebook/Meta**: Gehe zum Facebook-Debugger unter [developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/) und gib die URL ein, die du teilst. Wenn du die alten Informationen siehst, kannst du auf den Button "Erneut scrapen" klicken, und es sollte sich aktualisieren.
* **X/Twitter**: X bietet keine Option zum manuellen erneuern der Daten. Du kannst aber einen Trick anwenden, indem du einen Query-Parameter an deine URL anfügst. Auf diese Weise denkt X, dass du eine neue URL teilst, die erneut geprüft werden muss. Füge einfach etwas wie `?i=1` am Ende deiner URL hinzu. Du kannst die Nummer mehrmals ändern, um ein Auffrischen zu erzwingen.
