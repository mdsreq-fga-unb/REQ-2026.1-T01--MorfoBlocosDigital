#!/bin/sh

echo "Esperando PostgreSQL iniciar..."

while ! nc -z db 5432; do
  sleep 1
done

echo "PostgreSQL iniciado!"

python manage.py migrate

python manage.py runserver 0.0.0.0:8000