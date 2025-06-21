docker run --name postgres-dev \
  -e POSTGRES_USER=elemis \
  -e POSTGRES_PASSWORD=clave123 \
  -e POSTGRES_DB=carrera \
  -p 5432:5432 \
  -d postgres