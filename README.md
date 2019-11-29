# [Kyle's Bootcamp Repo] (https://github.com/kbetlach/kbetlach.github.io)

Welcome to the U of M coding bootcamp repo of Kyle Betlach!

Here you will find a constantly changing and evolving repo that will become filled out with the various homework assignments I will be completing for the bootcamp.

- Basic Portfolio: For homework assignment 1, we were tasked with creating a professional portfolio for our work. For more information and to see the finished portfolio, click the "homework01" folder. 

- Bootsrap Portfolio: For this assignment, we were asked to remake our portfolio from homework01, but with Bootstrap CSS this time. Looks mostly the same as the portfolio from homework01, but as the screen gets smaller, the content is responsive and will fall into place to still be readable.

- Password Generator: As part of the JavaScript curruculum, we created a random password generator. The generator will ask users how many characters between 8 - 128 they want in their password, and they can further specify what types of characters will be included (special, numeric, upper or lower case letters). 

- As a bonus, there is a functioning copy button that copies the generated password to the user's clipboard for easy pasting.

- Code Quiz: A working five-question quiz about computer coding. When user's click the start button, the questions start and a 75 second timer begins ticking down. If a question is answered incorrectly, the user is penalized 15 seconds off of the timer. The final score is the seconds remaining on the clock plus the amount of correctly answered questions. 

For now, the assignment is not fully finished as it is supposed to be able to store user scores in local storage. User's should also be able to click the "View Highscores" button and see all the high scores logged in local storage. I intend to complete this at a later date.

- Workday Planner: Timeblocks are laid out to represent a work day from 9 am to 5 pm. User's can enter a task in any of the time blocks and click the save button. The input will save into local storage, and upon refreshing the page, whatever was stored there will generate.

- Weather Dashboard: A functioning weather dashboard that allows users to search any city in the world and have the current weather conditions generate. Additionally, a five day forecast will generate as well. Any city searched will have a button created to the side of the page that says the name of the city. Clicking any generated buttons will re-display that city's weather information. User city searches / buttons are stored in local storage. Weather data is generated from the Open Weather API.

- GitHub Profile PDF Generator: As part of our Node.js training, we were tasked with creating a program that will prompt the user what their name, GitHub username, and favorite color are to immediately generate a PDF GitHub profile.

The PDF is meant to display the user's name, current, company, location, and links to GitHub and a personal blog. The location is clickable, and will re-direct the user to the location within Google Maps. The GitHub and blog links are also live. Additionally, using an Axios call, the page should display their profile picture, and the amount of public repos, followers, following, and GitHub Stars they have.

- Team Profile Generator: As a continuation of our Node.js training, we were instructed to create a program that generates a profile for the user's team based on their input.

When the program is run, it is supposed to prompt the user for information about the team manager, including their name, employee ID, email address, and office number. After that, the user gets 3 choices. They can generate an engineer, an intern, or complete their team.

When the user is done entering employees, they can select the option that they're done, and an html page will generate based on their inputs.