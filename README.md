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

**Die Daten die die Mock API bekommt sind in der db.json file**

## Docker & Kubernetes Anleitung

### 1. Images bauen und zu Docker Hub pushen

#### Frontend

```bash
docker build -t <dein-dockerhub-name>/frontend:latest .
docker push <dein-dockerhub-name>/frontend:latest
```

#### Mock-API

```bash
cd mockapi
docker build -t <dein-dockerhub-name>/mockapi:latest .
docker push <dein-dockerhub-name>/mockapi:latest
cd ..
```

***

### 2. Kubernetes-Deployments anwenden

#### 1. Starte Minikube (falls nicht bereits gestartet):

```bash
minikube start
```

#### 2. Wende die Deployments und Services an:

```bash
kubectl apply -f k8s/
```

***

### 3. Anwendungen erreichbar machen

#### Port-Forwarding (z.B. in Codespaces oder lokal)

```bash
kubectl port-forward service/frontend-service 8080:80
kubectl port-forward service/mockapi-service 3000:80
```

- **Frontend:** http://localhost:8080
- **Mock-API:** http://localhost:3000/items

***

## Hinweise

- Nach Änderungen an `db.json` oder dem Frontend immer das jeweilige Image neu bauen und pushen!
- Die Mock-API liefert die Daten aus `mockapi/db.json` unter `/items` aus.
- Die Images müssen öffentlich auf Docker Hub liegen, damit Kubernetes sie ziehen kann.