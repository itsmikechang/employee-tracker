USE employees_db;

INSERT INTO department (name)
VALUES("Dev");
INSERT INTO department (name)
VALUES("Production");
INSERT INTO department (name)
VALUES("Sales");
INSERT INTO department (name)
VALUES("Recruiting");

INSERT INTO employeeRole (title, salary, department_id)
VALUES("Account Executive", 160000, 1);
INSERT INTO employeeRole (title, salary, department_id)
VALUES("Producer", 140000, 2);
INSERT INTO employeeRole (title, salary, department_id)
VALUES("Engineer", 120000, 3);
INSERT INTO employeeRole (title, salary, department_id)
VALUES("Recruiter", 120000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Mike", "Chang", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Dan", "Gideon", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Mark", "Park", 3, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Ashley", "Nasar", 4, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Danielle", "Reynolds", 4, 1);