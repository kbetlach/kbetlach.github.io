DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE department (
	id INT AUTO_INCREMENT NOT NULL,
	department VARCHAR(30) NOT NULL,
	PRIMARY KEY (id)
);
    
CREATE TABLE roles (
	id INT AUTO_INCREMENT NOT NULL,
	title VARCHAR(30) NOT NULL,
	salary DECIMAL(10,0) NOT NULL,
	department_id INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (department_id) REFERENCES department(id)
);
    
CREATE TABLE employee (
	id INT AUTO_INCREMENT NOT NULL,
	first_name VARCHAR(30) NOT NULL,
	last_name VARCHAR(30) NOT NULL,
	role_id INT NOT NULL,
	manager_id INT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (role_id) REFERENCES roles(id)
);