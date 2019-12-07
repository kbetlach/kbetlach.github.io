INSERT INTO department (department,department_id) VALUES ("Engineering",1);
INSERT INTO department (department,department_id) VALUES ("Sales",2);
INSERT INTO department (department,department_id) VALUES ("Finance",3);
INSERT INTO department (department,department_id) VALUES ("Human Resources",4);

INSERT INTO role (title,salary,role_id,department_id) VALUES ("Junior Developer",60000,1,1);
INSERT INTO role (title,salary,role_id,department_id) VALUES ("Senior Developer",100000,2,1);
INSERT INTO role (title,salary,role_id,department_id) VALUES ("Salesperson",60000,3,2);
INSERT INTO role (title,salary,role_id,department_id) VALUES ("Head of Sales",100000,4,2);
INSERT INTO role (title,salary,role_id,department_id) VALUES ("Accountant",80000,5,3);
INSERT INTO role (title,salary,role_id,department_id) VALUES ("HR Representative",90000,6,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("Andrew","Kolander",2,null,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("Nolan","Fry",1,1,2);
INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("AJ","Weydt",1,1,3);
INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("Joe","Kell",3,6,4);
INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("John","Hannasch",3,6,5);
INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("Dan","Marshall",4,null,6);
INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("Ashley","Bliskowski",5,null,7);
INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("Cameron","Boydston",5,null,8);
INSERT INTO employee (first_name,last_name,role_id,manager_id,employee_id) VALUES ("Lukas","Forseth",6,null,9);