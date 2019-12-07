DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;

CREATE TABLE department (
	department_id INT NOT NULL,
	department VARCHAR(30) NULL,
    PRIMARY KEY (department_id)
    );
    
CREATE TABLE role (
	role_id INT NOT NULL,
    title VARCHAR(30) NULL,
    salary DECIMAL(10,2) NULL,
    department_id INT NULL,
    PRIMARY KEY(role_id)
    );
    
CREATE TABLE employee (
	employee_id INT NOT NULL,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NULL,
    manager_id INT,
    PRIMARY KEY(employee_id)
    );
    
    SELECT * FROM department;
    SELECT * FROM role;
    SELECT * FROM employee;