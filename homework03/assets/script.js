var userChoice = "";

var special = "!#$%&'()*+,-./:;<=>?@[\]^_'";
var numeric = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function generate (){
        userChoice = "";
        var characters = parseInt(prompt("How many characters would you like your password to contain?"));

    if (characters > 128) {
        alert("You must pick a character count equal to or less than 128 characters!"); 
        return false;
    }
    if (characters < 8) {
        alert("You must pick a character count equal to or greater than 8 characters!")
        return false;
    }

var specialChoice = confirm("Click OK to confirm including special characters in your password.");
var numberChoice = confirm("Click OK to confirm including numeric characters in your password.");
var lowerCaseChoice = confirm("Click OK to confirm including lower case letters in your password.");
var upperCaseChoice = confirm("Click OK to confirm including upper case letters in your password.");

if(specialChoice){
    userChoice += special; 
}
if(numberChoice){
     userChoice += numeric;
}
if(lowerCaseChoice){
    userChoice += lowerCase;
}
if(upperCaseChoice){
    userChoice += upperCase; 
}

        var password = '';
        for(var i = 0; i < characters; i++){
           var password1 = userChoice.charAt(Math.floor(Math.random() * userChoice.length));
           password = password + password1;
        }
        document.getElementById("field").innerHTML = password;
    }
    var buttonClick = document.getElementById("generate")
    buttonClick.addEventListener("click", generate);