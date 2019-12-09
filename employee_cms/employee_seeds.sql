INSERT INTO department (department) VALUES ("Engineering");
INSERT INTO department (department) VALUES ("Sales");
INSERT INTO department (department) VALUES ("Finance");
INSERT INTO department (department) VALUES ("Human Resources");

INSERT INTO roles (title,salary,department_id) VALUES ("Junior Developer",60000,1);
INSERT INTO roles (title,salary,department_id) VALUES ("Senior Developer",100000,1);
INSERT INTO roles (title,salary,department_id) VALUES ("Salesperson",60000,2);
INSERT INTO roles (title,salary,department_id) VALUES ("Head of Sales",100000,2);
INSERT INTO roles (title,salary,department_id) VALUES ("Accountant",80000,3);
INSERT INTO roles (title,salary,department_id) VALUES ("HR Representative",90000,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Andrew","Kolander",2,null);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Nolan","Fry",1,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("AJ","Weydt",1,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Joe","Kell",3,6);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("John","Hannasch",3,6);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Dan","Marshall",4,null);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Ashley","Bliskowski",5,null);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Cameron","Boydston",5,null);
INSERT INTO employee (first_name,last_name,role_id,manager_id) VALUES ("Lukas","Forseth",6,null);