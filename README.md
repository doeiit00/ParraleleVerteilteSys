# ParraleleVerteilteSys

Angular
1. In jedem neuen Codespace npm install -g @angular/cli und npm i
2. Um den Serve zu starten ng serve

Im Anschluss npm install

Mock API Server (JSON)
1. In jedem neuen Codespace npm install -g json-server
2. Um den Server dann zu starten json-server --watch db.json --port 3000

Wichiger Hinweis:
In der Enviroment.ts muss die apiBaseUrl geändert werden auf die, welche der JSON Server verwendet (was nicht localhost:3000 ist). Für jedes Cospace ist das eine andere URL!!

Die Daten die die Mock API bekommt sind in der db.json file