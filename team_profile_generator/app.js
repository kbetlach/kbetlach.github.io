const inquirer = require("inquirer");
const fs = require("fs");

function generateTeamMember() {
    return inquirer.prompt([{
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any additional team members."]
        }]).then(function (answer) {
            switch(answer.teamMembers) {
                case "Engineer":
                  generateEngineer();
                  break;
                case "Intern":
                  generateIntern();
                  break;
                default:
                  console.log("Your team is complete.");
                  //generate html in here.
              }
        })
}

function generateManager() {
    console.log("Please build your team.");
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "managerName"
        }, {
            type: "input",
            message: "What is your manager's employee ID?",
            name: "managerID"
        }, {
            type: "input",
            message: "What is your manager's email address?",
            name: "managerEmail"
        }, {
            type: "input",
            message: "What is your manager's office number?",
            name: "managerOffice"
        }
    ])
    .then(function(answer){
        //generate manager html
        generateTeamMember();
    })
}

function generateEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "engineerName"
        }, {
            type: "input",
            message: "What is your engineer's employee ID?",
            name: "engineerID"
        }, {
            type: "input",
            message: "What is your engineer's email address?",
            name: "engineerEmail"
        }, {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "engineerGithub"
        }
    ])
    .then(function(answer){
        //generate manager html
        generateTeamMember();
    })
}

function generateIntern() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        }, {
            type: "input",
            message: "What is your intern's employee ID?",
            name: "engineerID"
        }, {
            type: "input",
            message: "What is your intern's email address?",
            name: "internEmail"
        }, {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
        }
    ])
    .then(function(answer){
        //generate manager html
        generateTeamMember();
    })
}

generateManager();