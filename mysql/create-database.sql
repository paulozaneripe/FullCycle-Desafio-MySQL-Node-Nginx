ALTER USER 'root'@'%' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;

CREATE DATABASE IF NOT EXISTS desafio_mysql_node_nginx;

CREATE TABLE people (
    id integer not null auto_increment,
    name varchar(200),
    primary key (id)
);
