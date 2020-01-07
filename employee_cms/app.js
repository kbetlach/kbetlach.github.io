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
    maxLength: '0'
});

var connection = mysql.createConnection({
    host: "localhost", port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "rootroot",
    database: "employee_db"
});

//STARTS THE APP ONCE CONNECTED
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
            "Add Department",
            "Add Role",
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
            case "Add Department": addDepartment();
                break;
            case "Add Role": addRole();
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

//VIEW ALL EMPLOYEES
function viewAll() {
    connection.query
    ("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, roles.title, roles.salary, department.department FROM ((employee INNER JOIN roles ON employee.role_id = roles.id) INNER JOIN department ON roles.department_id = department.id)", function (err, res) {
        if (err) 
            throw err;
        

        console.table(res);
        start();
    });
}

//VIEW BY DEPARTMENT
function byDepartment() {

    departmentArray = [];

    connection.query("SELECT department FROM department", function (err, result) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            var choices = result[i].department;

            departmentArray.push(choices);
        }
                inquirer.prompt([
            {
                name: "department",
                message: "Which department's employees would you like to view?",
                type: "list",
                choices: departmentArray
            }
        ])
            .then(function (answer) {
                connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, roles.title, roles.salary, department.department FROM ((employee INNER JOIN roles ON employee.role_id = roles.id) INNER JOIN department ON roles.department_id = department.id) WHERE department = ?", [answer.department], function (err, result) {
                    if (err) throw err;
                    
                    console.table(result);
                    start();
                });

            });
    })
}

//VIEW BY ROLE
function byRole() {

    roleArray = [];

    connection.query("SELECT title FROM roles", function (err, result) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            var choices = result[i].title;

            roleArray.push(choices);
        }
                inquirer.prompt([
            {
                name: "role",
                message: "Which role would you like to view employees for?",
                type: "list",
                choices: roleArray
            }
        ])
            .then(function (answer) {
                connection.query("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, roles.title, roles.salary, department.department FROM ((employee INNER JOIN roles ON employee.role_id = roles.id) INNER JOIN department ON roles.department_id = department.id) WHERE title = ?", [answer.role], function (err, result) {
                    if (err) throw err;
                    
                    console.table(result);
                    start();
                });

            });
    })
}

//ADD EMPLOYEE
function addEmployee() {

    var roleArray = [];
    var roleIDArray = [];

    connection.query("SELECT title, id FROM roles", function (err, result) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            var role = result[i].title;
            var roleID = result[i].id;

            roleArray.push(role);
            roleIDArray.push(roleID);
    }
    
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
            message: "What is the employee's title?",
            choices: roleArray,
        }, {
            name: "manager",
            type: "list",
            message: "Who is the employee's manager?",
            choices: ["Andrew Kolander", "Dan Marshall", "None"]
        }
    ]).then(function (answer) {

        let role_id;
        let sql = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);";
        for (var i = 0; i < roleArray.length; i++) {
            if (roleArray[i] === answer.role) {
                role_id = roleIDArray[i];
        
            }
        }

        var manager_id;
        if (answer.manager === "Andrew Kolander") {
            manager_id = 1;
        } else if (answer.manager === "Dan Marshall") {
            manager_id = 6;
        } else if (answer.manager === "None") {
            manager_id = null;
        }

        connection.query("INSERT INTO employee SET ?", {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: role_id,
            manager_id: manager_id
        }, function (err, result) {
            if (err) 
                throw err;
            

            console.log("***** New employee added! *****");
            start();
        });
    });
})
}

//ADD DEPARTMENT
function addDepartment() {
    inquirer.prompt(
        {
            name: "newDepartment",
            type: "input",
            message: "What is the name of the new department you'd like to add?"
        }
    ).then(function (answer) {
        let sql = "INSERT INTO department (department) VALUES (?)";
        connection.query(sql, [answer.newDepartment], function (err, result) {
            if (err) throw err;
    
            console.log("***** New department added! *****");
            start();
        });
    });
}

//ADD ROLE
function addRole() {

    departmentArray = [];

    connection.query("SELECT id, department FROM department", function (err, result) {
        if (err) throw err;

        for (var i = 0; i < result.length; i++) {
            var choices = result[i].department;

            departmentArray.push(choices);
        }

    inquirer.prompt([
        {
            name: "newRole",
            type: "input",
            message: "What is the name of the new role?"
        },
        {
            name: "newSalary",
            type: "input",
            message: "What is the salary of this role?"
        },
        {
            name: "newDepartment",
            type: "list",
            message: "What department contains this role?",
            choices: departmentArray
        }
    ]).then(function (answer) {
        var deptID;
        let sql = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";

        for (var i = 0; i < result.length; i++) {
            if (result[i].department === answer.newDepartment) {
                deptID = result[i].id;
            }
        }

        connection.query(sql, [answer.newRole, answer.newSalary, deptID], function (err, result) {
            if (err) throw err;
    
            console.log("***** New role added! *****");
            start();
        });
    });
})
}

//UPDATE ROLE
function updateRole() {

    var roleArray = [];

    connection.query("SELECT id, title FROM roles", function (err, result){
        if (err) throw err;
        for (var i = 0; i < result.length; i++) {
            var choices = result[i].title + "-" + result[i].id;

            roleArray.push(choices);
        }
    })

    connection.query("SELECT first_name, last_name FROM employee", function (err, result) {
        if (err) 
            throw err;
        
        var choiceArray = [];

        for (var i = 0; i < result.length; i++) {
            var choices = result[i].first_name + " " + result[i].last_name;

            choiceArray.push(choices);
        }
        inquirer.prompt([
            {
                name: "person",
                type: "list",
                message: "Which employee's role would you like to update?",
                choices: choiceArray
            }, {
                name: "newRole",
                type: "list",
                message: "What is their new role?",
                choices: roleArray
            }
        ]).then(function (answer) {

            var first_name = answer.person.split(" ");
            var newRole = answer.newRole.split("-");

            connection.query(`UPDATE employee SET role_id = ${newRole[1]} WHERE first_name = '${first_name[0]}'`,
           
             function (err, res) {
                if (err) 
                    throw err;
                

                console.log("***** Employee's role updated. *****")
                start();
            })
        })
    })
}

//UPDATE MANAGER
function updateManager() {
    connection.query("SELECT first_name, last_name FROM employee", function (err, result) {
        if (err) 
            throw err;
        

        var choiceArray = [];

        for (var i = 0; i < result.length; i++) {
            var choices = result[i].first_name + " " + result[i].last_name;

            choiceArray.push(choices);
        }
        inquirer.prompt([
            {
                name: "person",
                type: "list",
                message: "Which employee's manager would you like to update?",
                choices: choiceArray
            }, {
                name: "newManager",
                type: "list",
                message: "Who is their new manager?",
                choices: ["Andrew Kolander", "Dan Marshall", "None"]
            }
        ]).then(function (answer) {

            var manager_id;
            if (answer.newManager === "Andrew Kolander") {
                manager_id = 1;
            } else if (answer.newManager === "Dan Marshall") {
                manager_id = 6;
            } else if (answer.newManager === "None") {
                manager_id = null;
            } 

            var first_name = answer.person.split(" ");

            connection.query(`UPDATE employee SET manager_id = ${manager_id} WHERE first_name = '${first_name[0]}'`, {
                manager_id: manager_id
            }, function (err, res) {
                if (err) 
                    throw err;
                

                console.log("***** Employee's manager updated. *****")
                start();
            })
        })
    })
}
