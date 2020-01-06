GitHub Profile PDF Generator

##Introduction

As part of our Node.js training, we were tasked with creating a program that will prompt the user what their name, GitHub username, and favorite color are to immediately generate a PDF GitHub profile.

The PDF is meant to display the user's name, current, company, location, and links to GitHub and a personal blog. The location is clickable, and will re-direct the user to the location within Google Maps. The GitHub and blog links are also live. Additionally, using an Axios call, the page should display their profile picture, and the amount of public repos, followers, following, and GitHub Stars they have.

<img width="1013" alt="profile" src="https://user-images.githubusercontent.com/53587397/71793646-3f1b2480-3003-11ea-87ea-879ebb627315.png">

###Technologies

The portfolio was created in VS Code using html, css, Bootstrap, Google Fonts, npm packages, and JavaScript.

####Launch

For a demonstration, please see "demo.gif" in the repository. Otherwise, follow these steps:

You'll need to do one of the following:

Copy the code from my GitHub repo into VS Code or the coding platform of your choice, and open your Terminal directly from your coding platform.

Or, you can save the code into a file of your own, and navigate to it using your Terminal.

Once inside the program in the Terminal, execute the command "npm i" in order to download all the packages required to run the program. Once that's complete, execute command "node index," or whatever you named the file.

This will start the program, and you will be prompted with three questions.

Once complete, both an html and PDF file will generate in the folder the file is living in.

#####Sources and Inspiration

This was an interesting assignment! Fun to get into node stuff and use the Terminal more.

My favorite part to code was probably the using template literals in the html. I found it to be quick and easy to grasp, and made using the API response really easy. Here's an example:

<img width="1149" alt="code" src="https://user-images.githubusercontent.com/53587397/71793626-2ad72780-3003-11ea-967d-2845987972ef.png">

Shoutout to TA Connor, who helped me in a big way in getting my html to convert into the PDF and display appropriately.