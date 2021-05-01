CREATE USER admin with password 'password';
CREATE DATABASE movies;
-- pg_restore
GRANT ALL PRIVILEGES ON DATABASE movies TO admin;
