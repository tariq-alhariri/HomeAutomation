CREATE DATABASE users;

USE users;

CREATE TABLE user (
	/* Describe user table here. */

	id int NOT NULL AUTO_INCREMENT,
	username varchar(200) NOT NULL,
	passward varchar(255) NOT NULL,
	image varchar(250),
	PRIMARY KEY (ID)
);

/* Create the component table for the work after MVP */

/* Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 * to create the database and the tables.*/