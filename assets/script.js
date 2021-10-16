// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerSet = "abcdefghijklmnopqrstuvwxyz";
var numSet = "0123456789";
var specialSet = "!#$%&*+,-./:;<=>?@^_`{|}~";
var charBank = "";


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

function generatePassword() {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  var charTotal = prompt("How many characters do you want in your password?")
  while (charTotal < 8 || charTotal > 128) {
    alert("Please enter amount between 8 and 128.")
    charTotal = prompt("How many characters do you want in your password?")
  } 
 
  var upperChars = confirm("Do you want uppercase letters in your password?")
  var lowerChars = confirm("Do you want lowercase letters in your password?")
  var numChars = confirm("Do you want numbers in your password?")
  var specialChars = confirm("Do you want special characters in your password?")

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  if (upperChars === true) {
    charBank += upperSet
  }

  if (lowerChars === true) {
    charBank += lowerSet
  }

  if (numChars === true) {
    charBank += numSet
  }

  if (specialChars === true) {
    charBank += specialSet
  }

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  if (upperChars === false && lowerChars === false && numChars === false && specialChars === false) {
    alert("Please confirm at least one type of character.")
  }


  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  var randomPass = "";
  for (var i = 0; i < charTotal; i++) {
      randomPass += charBank.charAt(
        Math.floor(Math.random() * charBank.length - 1)
      );
    }
    return randomPass;
}