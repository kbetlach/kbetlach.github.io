# Team Profile Generator

# Introduction

As a continuation of our Node.js training, we were instructed to create a program that generates a profile for the user's team based on their input.

When the program is run, it is supposed to prompt the user for information about the team manager, including their name, employee ID, email address, and office number. After that, the user gets 3 choices. They can generate an engineer, an intern, or complete their team.

The engineer and intern questions differ from the manager's set. All 3 employee classes prompt for name, email, and employee ID, but the engineer prompts for their GitHub account, and the intern prompts for the school they are from.

When the user is done entering employees, they can select the option that they're done, and an html page will generate based on their inputs.

<img width="1265" alt="team" src="https://user-images.githubusercontent.com/53587397/72470541-9741eb80-37a6-11ea-86b3-ed8de3f9981e.png">

# Technologies

The portfolio was created in VS Code using html, css, Bootstrap, Google Fonts, npm packages, and JavaScript.

# Launch

For a demonstration, please see "demo.gif" in the repository. It can be found in the output folder alongside an html page that was generated from this program. Otherwise, follow these steps:

You'll need to do one of the following:

Copy the code from my GitHub repo into VS Code or the coding platform of your choice, and open your Terminal directly from your coding platform.

Or, you can save the code into a file of your own, and navigate to it using your Terminal.

Once inside the program in the Terminal, execute the command "npm i" in order to download all the packages required to run the program. Once that's complete, execute command "node app," or whatever you named the file.

This will start the program, and you will immediately be asked to enter the manager's information.

Once complete, an html file based on your inputs will generate into a folder called output.

# Sources and Inspiration

My favorite part to code was using a switch statement. This was the first I've utilized one of these and I thought it was pretty slick. Here's the function mine is in:

![code](https://user-images.githubusercontent.com/53587397/72470657-ba6c9b00-37a6-11ea-8d7d-b042f874745f.png)

This is the function that runs after the user has entered an employee's information. The switch statement redirects the user to the set of questions that matches their choice of engineer or intern. If they're done, the default in the switch statement console logs out that the team is complete, and appends the html closing tags to the page.

Shoutout to TA Blake, who helped me figure the switch statement out!