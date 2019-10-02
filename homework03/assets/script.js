var userChoice = ""

var special = "!#$%&'()*+,-./:;<=>?@[\]^_'";
var numeric = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var characters = parseInt(prompt("How many characters would you like your password to contain?"));
//create if else for character counts

    if (characters > 128) {
        alert("You must pick a character count equal to or less than 128 characters!"); 
    }
    if (characters < 8) {
        alert("You must pick a character count equal to or greater than 8 characters!")
    }
    
//create conditionals for which options are chosen
//look into sort method

var specialChoice = confirm("Click OK to confirm including special characters in your password.");
var numberChoice = confirm("Click OK to confirm including numeric characters in your password.");
var lowerCaseChoice = confirm("Click OK to confirm including lower case letters in your password.");
var upperCaseChoice = confirm("Click OK to confirm including upper case letters in your password.");

    if(specialChoice) userChoice += special; 
    if(numberChoice)  userChoice += number;
    if(lowerCaseChoice)  userChoice += lowerCase;
    if(upperCaseChoice)  userChoice += upperCase; {
        function generate (){
            var password = '';
            for(var i = 0; i < userChoice; i++){
                password += userChoice.charAt(math.floor(Math.random() * characters.length));
            }
        }
    }
    console.log(generate);

//display result to user as an alert