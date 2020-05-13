//Global variables.
var characters = "";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_'";
var numeric = "1234567890";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//Password generate function.
function generate (){

    var userChoice = parseInt(prompt("How many characters would you like your password to contain?"));
    
    if (userChoice > 128 || userChoice < 8) {
        alert("You must pick a character count between 8 and 128 characters."); 
        return false;
    }

    if (userChoice > 8 || userChoice < 128) {
        var specialChoice = confirm("Click OK to confirm including special characters in your password.");
        var numberChoice = confirm("Click OK to confirm including numeric characters in your password.");
        var lowerCaseChoice = confirm("Click OK to confirm including lower case letters in your password.");
        var upperCaseChoice = confirm("Click OK to confirm including upper case letters in your password.");
    }

if (specialChoice) {
    characters += special; 
}
if (numberChoice) {
    characters += numeric;
}
if (lowerCaseChoice) {
    characters += lowerCase;
}
if (upperCaseChoice) {
    characters += upperCase; 
}
else {
    alert("At least one character type must be selected for your password.");
}

        var password = "";
        for(var i = 0; i < userChoice; i++){
           var password1 = characters.charAt(Math.floor(Math.random() * characters.length));
           password = password + password1;
        }
        document.getElementById("field").innerHTML = password;
    }
    var generateClick = document.getElementById("generate")
    generateClick.addEventListener("click", generate);

//Copy password function.
    function copyPassword(){
        document.getElementById("field").select();
        document.execCommand("copy");
        alert("Your password is copied to the clipboard.");
    }
