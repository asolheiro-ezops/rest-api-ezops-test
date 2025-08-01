FROM postgres:13

WORKDIR /app

COPY database-init.sql .

CMD ["bash", "-c", "PGPASSWORD=\"$DB_PASSWORD\" psql \"postgresql://$DB_USER:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_NAME?sslmode=require\" -f ./database-init.sql"]
