FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /app

# Instala uv para manejar dependencias declaradas en pyproject.toml
RUN pip install --no-cache-dir uv

COPY pyproject.toml uv.lock ./ 

# Sincroniza dependencias (modo congelado para builds reproducibles)
RUN uv sync --frozen --no-install-project

COPY . .

ENV FLASK_APP=app.py \
    FLASK_RUN_HOST=0.0.0.0 \
    FLASK_RUN_PORT=5000

EXPOSE 5000

CMD ["uv", "run", "flask", "run", "--host=0.0.0.0", "--port=5000"]
