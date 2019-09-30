var special = "!#$%&'()*+,-./:;<=>?@[\]^_'"
var numeric = "1234567890"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var characters = prompt("How many characters would you like your password to contain?")
var special = confirm("Click OK to confirm including special characters in your password.")
var number = confirm("Click OK to confirm including numeric characters in your password.")
var lowerCase = confirm("Click OK to confirm including lower case letters in your password.")
var upperCase = confirm("Click OK to confirm including upper case letters in your password.")


function generate (){
    var password = '';

    for(var i = 0; i < characters.length; i++){
        password += characters.charAt(math.floor(Math.random() * characters.length));
    }

    document.getElementById("placeholder").value = password;

}