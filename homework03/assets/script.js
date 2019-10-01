//make an array of these

var userChoice = ["special", "numeric", "lowerCase", "upperCase"];

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
var special = confirm("Click OK to confirm including special characters in your password.");
var number = confirm("Click OK to confirm including numeric characters in your password.");
var lowerCase = confirm("Click OK to confirm including lower case letters in your password.");
var upperCase = confirm("Click OK to confirm including upper case letters in your password.");

    if (userChoice === "special") {
        
    }   

//parseInt
//switch from = to into populating an array
function generate (){
    var password = '';
    for(var i = 0; i < characters; i++){
        password = characters.charAt(math.floor(Math.random() * characters.length));
    }
}

//display result to user as an alert