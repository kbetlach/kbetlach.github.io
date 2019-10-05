var characters = "";

var special = "!#$%&'()*+,-./:;<=>?@[\]^_'";
var numeric = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    function generate (){

        characters = "";
        var userChoice = parseInt(prompt("How many characters would you like your password to contain?"));
    
    if (userChoice > 128) {
        alert("You must pick a character count equal to or less than 128 characters!"); 
        return false;
    }
    if (userChoice < 8) {
        alert("You must pick a character count equal to or greater than 8 characters!");
        return false;
    }

        var specialChoice = confirm("Click OK to confirm including special characters in your password.");
        var numberChoice = confirm("Click OK to confirm including numeric characters in your password.");
        var lowerCaseChoice = confirm("Click OK to confirm including lower case letters in your password.");
        var upperCaseChoice = confirm("Click OK to confirm including upper case letters in your password.");
    }

if(specialChoice){
    characters += special; 
}
if(numberChoice){
    characters += numeric;
}
if(lowerCaseChoice){
    characters += lowerCase;
}
if(upperCaseChoice){
    characters += upperCase; 
}

        var password = '';
        for(var i = 0; i < userChoice; i++){
           var password1 = characters.charAt(Math.floor(Math.random() * characters.length));
           password = password + password1;
        }
        document.getElementById("field").innerHTML = password;

    var buttonClick = document.getElementById("generate")
    buttonClick.addEventListener("click", generate);

//password copy function

    function copyPassword(){

        document.getElementById("field").select();

        document.execCommand("copy");

        alert("Your password is copied to clipboard!");

    }
