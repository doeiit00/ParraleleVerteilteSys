# ParraleleVerteilteSys

## Angular
1. **Abhängigkeiten installieren:**

   In jedem neuen Codespace führst du die folgenden Befehle aus:
   ```bash
   npm install -g @angular/cli
   npm install
2. **Server starten**
   ```bash
   ng serve
***
## Mock API Server (JSON)
1. **Zweites Terminal öffnen**
   Öffne ein weiteres Terminal, um den Mock API Server zu starten.
2. **Abhängigkeiten installieren:**
   ```bash
   npm install -g json-server
4. **Server starten**
   ```bash
   json-server --watch db.json --port 3000
***
## Wichiger Hinweis:
* In der environment.ts-Datei muss die apiBaseUrl auf die URL geändert werden, die vom JSON-Server verwendet wird (nicht localhost:3000).
* Für jeden Codespace wird eine eigene URL generiert, die du nach dem Starten des Servers unter Ports findest.
* Stelle sicher, dass der API-Server auf Public gesetzt wird, damit er auch von außerhalb des Codespaces erreichbar ist.
***
**Die Daten die die Mock API bekommt sind in der db.json file**
