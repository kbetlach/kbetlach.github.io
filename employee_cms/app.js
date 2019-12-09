var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost", port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) 
        throw err;
    


    console.log("***** WELCOME TO THE EMPLOYEE DATABASE *****");
    start();
});

function start() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees By Department",
            "View All Employees By Role",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager",
            "Quit"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View All Employees": viewAll();
                break;
            case "View All Employees By Department": byDepartment();
                break;
            case "View All Employees By Role": byRole();
                break;
            case "Add Employee": addEmployee();
                break;
            case "Remove Employee": removeEmployee();
                break;
            case "Update Employee Role": updateRole();
                break;
            case "Update Employee Manager": updateManager();
                break;
            default: connection.end();
        }
    })
}

function viewAll() {
    connection.query("SELECT * FROM employee INNER JOIN roles ON employee.role_id = roles.id INNER JOIN department ON roles.department_id = department.id", function (err, res) {
        if (err) 
            throw err;
        


        console.table(res);
        start();
    });
}

function byDepartment() {
    inquirer.prompt({
        type: "list",
        message: "Which department's employees would you like to view?",
        name: "departmentChoice",
        choices: ["Engineering", "Sales", "Finance", "Human Resources",]
    }).then(function (answer) {
        if (answer.departmentChoice === "Engineering" || "Sales" || "Finance" || "Human Resources") {
            connection.query("SELECT * FROM employee INNER JOIN roles ON employee.role_id = roles.id INNER JOIN department ON roles.department_id = department.id WHERE department.department = ?", [answer.departmentChoice], function (err, res) {
                if (err) 
                    throw err;
                


                console.table(res);
                start();
            });
        }
    });
}

function byRole() {
    inquirer.prompt({
        name: "roleChoice",
        type: "list",
        message: "Which role would you like to see employees for?",
        choices: [
            "Junior Developer",
            "Senior Developer",
            "Salesperson",
            "Head of Sales",
            "Accountant",
            "HR Representative"
        ]
    }).then(function (answer) {
        if (answer.role === "Junior Developer" || "Senior Developer" || "Salesperson" || "Head of Sales" || "Accountant" || "HR Representative") {
            connection.query("SELECT * FROM employee INNER JOIN roles ON employee.role_id = roles.id WHERE title = ?", [answer.roleChoice], function (err, res) {
                if (err) 
                    throw err;
                


                console.table(res);
                start();
            });
        }
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?"
        }, {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?"
        }, {
            name: "role",
            type: "list",
            message: "What is the employee's role?",
            choices: [
                "Junior Developer",
                "Senior Developer",
                "Salesperson",
                "Head of Sales",
                "Accountant",
                "HR Representative"
            ]
        }, {
            name: "manager",
            type: "list",
            message: "What is the employee's manager's ID number?",
            choices: ["Andrew Kolander", "Dan Marshall", "null"]
        }
    ])
    .then(function (answer) {
        connection.query("INSERT INTO employee SET ?",
          {
            first_name: answer.firstName,
            last_name: answer.lastName,
            manager_id: answer.manager
          },
          function (err, res) {
            if (err) throw err;
          }
        );
        connection.query("INSERT INTO role SET ?",
          {
            title: answer.role
          },
          function (err, res) {
            if (err) throw err;
            
            console.table(res)
            console.log("Employee has successfully been added to the database!");
            start();
          }
        );
      });
  }

  //for loop to pull length of employees, and console log them as choices for each of these functions?
function removeEmployee() {}

function updateRole() {}

function updateManager() {}
