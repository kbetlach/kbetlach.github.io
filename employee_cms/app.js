var mysql = require("mysql");
var inquirer = require("inquirer");
var console_table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost", port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("***** Welcome to the Employee Database *****");
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
            "View All Employees By Department",
            "View All Employess By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View All Employees":
                viewAll();
                break;
            case "View All Employees By Department":
                byDepartment();
                break;
            case "View All Employees By Manager":
                byManager();
                break;
            case "Add Employee":
                addEmployee();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update Employee Role":
                updateRole();
                break;
            case "Update Employee Manager":
                updateManager();
                break;
            default: connection.end();
        }
    })
}

function viewAll() {
    connection.query("SELECT * FROM employee, role, department", function(err, res) {
        //where manager id = employee id, give me the name.
        //do a bunch of left joins on the primary / foreign keys to link tables.
      if (err) throw err;
      console.table(res);
      start();
    });
  }

function byDepartment() {

}

function byManager() {

}

function addEmployee() {

}

function removeEmployee() {

}

function updateRole() {

}

function updateManager() {

}