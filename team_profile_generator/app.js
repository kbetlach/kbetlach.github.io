const inquirer = require("inquirer");
const fs = require("fs");

function generateTeamMember() {
    return inquirer.prompt([{
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "teamMembers",
            choices: ["Engineer", "Intern", "I don't want to add any additional team members."]
        }]).then(function (answer) {
        switch (answer.teamMembers) {
            case "Engineer": generateEngineer();
                break;
            case "Intern": generateIntern();
                break;
            default:
                console.log("***** Your team is complete. *****");
                fs.appendFile("output/./team.html", "</div></div></body></html>", 
                (err) => {
                    if (err) 
                        throw err;
            });
        }
    })
}

function generateManager() {
    console.log("***** Please build your team. *****");
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
    ]).then(function ({managerName, managerID, managerEmail, managerOffice}) {
        generateTeamMember();
        fs.writeFile("output/./team.html", `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>My Team - Profile</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
        <body>

        <style>
        
        body {
            font-family: 'Lora', serif;
            background: url("../images/interlaced.png");
        }

        header {
            background-color: teal;
            color: white;
            text-align: center;
            padding: 15px;
        }

        .card-body {
            font-size: 24px;
        }

        .card-title {
            font-size: 26px;
        }

        .card {
            margin: 25px;
            border: outset;
        }
        
        </style>

        <header>
            <h1>Team Profile</h1>
        </header>

 <br />

    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                        <div class="card-body" style="background-color: gold;">
                          <h5 class="card-title">${managerName}</h5>
                          <p class="card-text"><i class="fas fa-coffee"></i> Manager</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>ID</strong>: ${managerID}</li>
                          <li class="list-group-item"><strong>Email</strong>: ${managerEmail}</li>
                          <li class="list-group-item"><strong>Office Number</strong>: ${managerOffice}</li>
                        </ul>
    </div>
        </div>`, 
                
        (err) => {
            if (err) 
                throw err;
            })
    })
}

function generateEngineer() {
    console.log("***** Please enter your engineer's information. *****")
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
    ]).then(function ({engineerName, engineerID, engineerEmail, engineerGithub}) {
        generateTeamMember();
        fs.appendFile("output/./team.html", `
        <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                        <div class="card-body" style="background-color: royalblue;">
                          <h5 class="card-title">${engineerName}</h5>
                          <p class="card-text"><i class="fas fa-flask"></i> Engineer</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>ID</strong>: ${engineerID}</li>
                          <li class="list-group-item"><strong>Email</strong>: ${engineerEmail}</li>
                          <li class="list-group-item"><strong>GitHub</strong>: ${engineerGithub}</li>
                        </ul>
            </div>
                </div>`, 
                (err) => {
                    if (err) 
                        throw err;
            })
    })
}

function generateIntern() {
    console.log("***** Please enter your intern's information. *****")
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "internName"
        }, {
            type: "input",
            message: "What is your intern's employee ID?",
            name: "internID"
        }, {
            type: "input",
            message: "What is your intern's email address?",
            name: "internEmail"
        }, {
            type: "input",
            message: "What is your intern's school?",
            name: "internSchool"
        }
    ]).then(function ({internName, internID, internEmail, internSchool}) {
        generateTeamMember();
        fs.appendFile("output/./team.html", `
            <div class="col-md-4">
                <div class="card" style="width: 18rem;">
                        <div class="card-body" style="background-color: crimson;">
                          <h5 class="card-title">${internName}</h5>
                          <p class="card-text"><i class="fas fa-graduation-cap"></i> Intern</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item"><strong>ID</strong>: ${internID}</li>
                          <li class="list-group-item"><strong>Email</strong>: ${internEmail}</li>
                          <li class="list-group-item"><strong>School</strong>: ${internSchool}</li>
                        </ul>
                </div>
            </div>`, 
                (err) => {
                    if (err) 
                        throw err;
            })
    })
}

generateManager();