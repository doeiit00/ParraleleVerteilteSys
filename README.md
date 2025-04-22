# ParraleleVerteilteSys

12-Factor Anwendung – Frontend-relevant

    Codebase – 1 Codebase pro App, Git

    Dependencies – alles in package.json

    Config – siehe environment.ts + .env + Docker

    Backing services – externe APIs (wie dein Backend)

    Build, release, run – Trennung via Dockerfile

    Processes – stateless, keine Speicherung im Client

    Port binding – Angular läuft auf extern konfigurierbarem Port

    Concurrency – handled durch den Webserver, nicht durch Angular selbst

    Disposability – schnell startender/stoppender Container

    Dev/prod parity – docker-compose hilft hier

    Logs – Angular loggt über console, zentral erfasst vom Hostsystem

    Admin processes – z. B. Healthcheck-Seite oder Debug-Tools

Diese Punkte kannst du dann kurz dokumentieren in einer README.md.