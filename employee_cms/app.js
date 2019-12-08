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
            "View All Employess By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View All Employees": viewAll();
                break;
            case "View All Employees By Department": byDepartment();
                break;
            case "View All Employees By Manager": byManager();
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
    connection.query("SELECT * FROM employee, role, department", function (err, res) {
        // where manager id = employee id, give me the name.
        // do a bunch of left joins on the primary / foreign keys to link tables.
        if (err) 
            throw err;
        
        console.table(res);
        start();
    });
}

function byDepartment() {
    return inquirer.prompt({
        type: "list",
        message: "Which department's employees would you like to view?",
        name: "departmentChoice",
        choices: ["Engineering", "Sales", "Finance", "Human Resources",]
    }).then(function (answer) {
        switch (answer.action) {
            case "Engineering":
                viewEngineering();
                break;
            case "Sales":
                viewSales();
                break;
            case "Finance":
                viewFinance();
                break;
            case "Human Resources":
                viewHR();
                break;
            default: start();
        }
    })
}

function byManager() {
    return inquirer.prompt({
        type: "list",
        message: "Which manager's employees would you like to view?",
        name: "managerChoice",
        choices: ["Andrew Kolander", "Dan Marshall",]
    }).then(function (answer) {
        switch (answer.action) {
            case "Andrew Kolander":
                viewAndrew();
                break;
            case "Dan Marshall":
                viewDan();
                break;
            default: start();
        }
    })
}

function addEmployee () {
    console.log("Inserting a new product...\n");
    var query = connection.query(
      "INSERT INTO products SET ?",
      {
        flavor: "Rocky Road",
        price: 3.0,
        quantity: 50
      },
      function(err, res) {
        if (err) throw err;
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
}

function removeEmployee () {

}

function updateRole () {

}

function updateManager () {

}

function viewEngineering () {

}

function viewSales () {

}

function viewFinance () {

}

function viewHR () {

}

function viewAndrew() {

}

function viewDan() {

}