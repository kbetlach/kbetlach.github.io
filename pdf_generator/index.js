const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

var promptUser = inquirer
    .prompt([
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
      fs.writeFile("profile.html",

  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>GitHub Profile Generator</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid">
    <div class="container" style="background-color: ${color}">
      <h1 class="display-4">GitHub Snapshot for ${name}</h1>
      <div><img src="${response.data.avatar_url}"></div>
      <h2>${response.data.bio}</h2>
      <h3><span class="badge badge-secondary">Contact Me</span></h3>
      <ul class="list-group">
        <li class="list-group-item">Location: ${response.data.location}</li>
        <li class="list-group-item">My GitHub username is ${github}</li>
        <li class="list-group-item">Public Repositories: ${response.data.public_repos}</li>
        <li class="list-group-item">Followers: ${response.data.followers}</li>
        <li class="list-group-item">Following: ${response.data.following}</li>
        <li class="list-group-item">GitHub Stars: </li>
      </ul>
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