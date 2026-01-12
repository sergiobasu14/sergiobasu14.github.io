# Desafío Web Personal en AWS
Proyecto guiado para construir una web app personal lista para la nube utilizando frontend con Vite y backend Flask empaquetado con Docker y `uv`.

## Estructura actual
- `frontend/`: Aplicación creada con Vite (React). Usa la carpeta `frontend/legacy/` como referencia del sitio original.
- `backend/`: API en Flask gestionada con `uv`.

## Frontend (Vite + React)
Asegúrate de tener Node.js ≥ 18.

```bash
cd frontend
npm install
npm run dev
```

## Backend (Flask + uv)
```bash
cd backend
uv add flask            # ya aplicado, mantiene dependencias en pyproject.toml/uv.lock
uv run flask run --host=0.0.0.0 --port=5000
```
Endpoints disponibles:
- `GET /health` -> `{"status":"ok"}`

## Contenedor Docker del backend
Se añadió `backend/Dockerfile` para crear una imagen reproducible.

Construcción y ejecución local:
```bash
cd backend
docker build -t sergiobasu-backend .
docker run -p 5000:5000 sergiobasu-backend
```
Luego visita `http://localhost:5000/health` para verificarlo dentro del contenedor.

## Próximos pasos
- Añadir endpoints adicionales y lógica de negocio en Flask.
- Completar componentes del frontend y conectar el formulario al backend.
- Preparar Docker para el frontend y un `docker-compose` local.
- Desplegar ambas imágenes en AWS (ECS/Fargate o EC2) con integración a ProtonMail Bridge.
