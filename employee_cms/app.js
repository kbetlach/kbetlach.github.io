var mysql = require("mysql");
var inquirer = require("inquirer");
var table = require("console.table");
var CFonts = require("cfonts");

CFonts.say('Employee|Database', {
  font: 'block',
  align: 'center',
  colors: ['system'],
  background: 'transparent',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
});

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
            case "Update Employee Role": updateRole();
                break;
            case "Update Employee Manager": updateManager();
                break;
            default: 
                console.log("***** PLEASE COME AGAIN *****")
                connection.end();
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
            message: "What is the employee's tilte?",
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
            message: "Who is the employee's manager?",
            choices: ["Andrew Kolander", "Dan Marshall", "None"]
        }
    ])
    .then(function (answer) {
        var role_id;
        if (answer.role === "Junior Developer") {
          role_id = 1;
        }
        else if (answer.role === "Senior Developer") {
            role_id = 2;
        }
        else if (answer.role === "Salesperson") {
            role_id = 3;
        }
        else if (answer.role === "Head of Sales") {
            role_id = 4;
        }
        else if (answer.role === "Accountant") {
            role_id = 5;
        }
        else if (answer.role === "HR Representative") {
            role_id = 6;
        }

        var manager_id;
        if (answer.manager === "Andrew Kolander") {
          manager_id = 1;
        }
        else if (answer.manager === "Dan Marshall") {
          manager_id = 6;
        }
        else if (answer.manager === "None") {
          manager_id = null;
        }
        
        connection.query("INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name: answer.lastName,
          role_id: role_id,
          manager_id: manager_id
        },
        function (err, result) {
          if (err) throw err;

          console.log("***** New employee added! *****");
          start();
        }
      );
    });
}

// INCOMPLETE - UPDATE NOT WORKING
function updateRole() {
    connection.query("SELECT first_name, last_name FROM employee", function(err, result) {
      if (err) throw err;
  
    var choiceArray = [];
   
    for (var i = 0; i < result.length; i++) {
     var choices = result[i].first_name + " " + result[i].last_name;
     
     choiceArray.push(choices);
    }
    inquirer
      .prompt({
        name: "title",
        type: "list",
        message: "Which employee's role would you like to update?",
        choices: choiceArray
      })
      .then(function(answer) {
          inquirer.prompt({
              name: "newRole",
              type: "list",
              message: "What is their new role?",
              choices: [
                "Junior Developer",
                "Senior Developer",
                "Salesperson",
                "Head of Sales",
                "Accountant",
                "HR Representative"
            ]
        }).then(function(answer) {
                connection.query("UPDATE employee SET role WHERE ?", [answer.newRole], function (err, res) {
                    if (err) 
                        throw err;
             })
            })
        })
    })
        start();
}

function updateManager() {
    connection.query("SELECT first_name, last_name FROM employee", function(err, result) {
      if (err) throw err;
  
    var choiceArray = [];
   
    for (var i = 0; i < result.length; i++) {
     var choices = result[i].first_name + " " + result[i].last_name;
     
     choiceArray.push(choices);
    }
    inquirer
      .prompt({
        name: "title",
        type: "list",
        message: "Which employee's manager would you like to update?",
        choices: choiceArray
      })
      .then(function(answer) {
        inquirer.prompt({
            name: "newManager",
            type: "list",
            message: "Who is their new manager?",
            choices: [
              "Andrew Kolander",
              "Dan Marshall",
              "None"
            ]
        }).then(function(answer) {
                connection.query("UPDATE employee SET ? WHERE ?", [answer.newManager], function (err, res) {
                    if (err) 
                        throw err;
             })
            })
        })
    })
        start();
}