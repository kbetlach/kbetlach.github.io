const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const pdf = require('html-pdf');

function promptUser() { 
  return inquirer.prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },
        {
          type: "input",
          message: "What is your GitHub username?:",
          name: "github",
        },
        {
          type: "input",
          message: "What is your favorite color?:",
          name: "color"
        },
  ])
  .then(function({ name, github, color }) {
    const queryURL = `https://api.github.com/users/${github}`;
    
    axios.get(queryURL)
      .then(function(response) {
      fs.writeFile("./index.html",

  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
    <link href="https://fonts.googleapis.com/css?family=PT+Serif&display=swap" rel="stylesheet">
    <title>GitHub Profile Generator</title>
  </head>

  <body style="background-color:whitesmoke; font-family: 'PT Serif', serif;">

    <style>
        a:link {
            text-decoration: none;
        }

        a {
            color: black;
        }
    </style>

<div class="container" style="width: 960px;">

        <header style="text-align: center; font-size: 40px;">
                GitHub Snapshot for ${name}
            </header>

<br />

    <div class="jumbotron jumbotron-fluid;" style="margin: 0 auto; background-color: ${color};">

        <div class="row">
            <div class="col-4"></div>
            <div class="col-4"><img class="center-block" src="${response.data.avatar_url};" style="height:300px; width: 300px;"></div>
            <div class="col-4"></div>
        </div>

<br />

    <h3 style="text-align:center;"><strong>Currently working for:</strong> ${response.data.company}</h3>

<br />

        <div class="row">
            <div class="col-4" style="text-align: center; font-size: 22px;"><i class="fas fa-location-arrow"></i><a href="https://google.com/maps/search/${response.data.location}"> ${response.data.location}</a></div>
            <div class="col-4" style="text-align: center; font-size: 22px;"><i class="fab fa-github"></i><a href="https://github.com/${github}"> GitHub</a></div>
            <div class="col-4" style="text-align: center; font-size: 22px;"><i class="fas fa-blog"></i><a href="${response.data.blog}"> Blog</a></div>
        </div>

    </div>

<br />

    <h2 style="text-align:center;">${response.data.bio}</h2>       

<br />

        <div class="row">
            <div class="col-4 card" style="background-color: ${color}; font-size: 24px; text-align: center; padding: 10px;">Public Repositories: ${response.data.public_repos}</div>
            <div class="col-4"></div>
            <div class="col-4 card" style="background-color: ${color}; font-size: 24px; text-align: center; padding: 10px;">GitHub Stars: ${response.data.public_gists}</div>
        </div>

<br />

        <div class="row">
            <div class="col-4 card" style="background-color: ${color}; font-size: 24px; text-align: center; padding: 10px;">Followers: ${response.data.followers}</div>
            <div class="col-4"></div>
            <div class="col-4 card" style="background-color: ${color}; font-size: 24px; text-align: center; padding: 10px;">Following: ${response.data.following}</div>
        </div>

<br />

    </div>
    </div>
  </body>
  </html>`,

  (err) => {
    if (err)
        throw err;

        console.log("Successfully created an html file!");      

      })
    })
  })
}

async function init() {
  
  try {
    const answers = await promptUser();
    
    var options = {
        format: 'Letter',
        height: "17500px",
        width: "1750px",  
   }

    await pdf.create(fs.readFileSync('./index.html', 'utf8'), options).toFile('./profile.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res);
    });
  }
  finally{
  }
}

  init();