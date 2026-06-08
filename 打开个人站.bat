@echo off
cd /d "%~dp0"
start "" "http://localhost:4173"
npm run preview -- --host 127.0.0.1 --port 4173
pause
