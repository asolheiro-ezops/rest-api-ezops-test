FROM postgres:13

WORKDIR /app

COPY database-init.sql .

CMD ["bash", "-c", "PGPASSWORD=\"$DB_PASSWORD\ psql \"sslmode=require\" -h $DB_HOST -U $DB_USER -d $DB_NAME -p $DB_PORT -f ./database-init.sql"]
