drop database if exists burger_db;

create database burger_db;

use burger_db;

create table burers(
id int not null auto_increment primary key,
burger_name varchar(30) not null,
devoured boolean
);