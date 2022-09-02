// Assignment Code
var generateBtn = document.querySelector("#generate");
var letters = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var passwordLength;
// Write password to the #password input
function writePassword(password) {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// this will determine how long the password is going to be.
function promptpasswordLength() {
  passwordLength = parseInt(
    prompt("How many character do you want in your password")
  );
  console.log(typeof passwordLength);
  //makes sure the condition is met before we move foward.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("please enter a vlaue between 8 and 128");
    passwordLength = prompt("How many character do you want in your password");
  }
  
}

//set variables that we we used for the password
function getRandomLowercase() {
  return letters[Math.floor(Math.random() * letters.length)];
}
function getRandomUppercase() {
  return letters[Math.floor(Math.random() * letters.length)].toUpperCase();
}
function randomNumber() {
  return parseInt(numbers[Math.floor(Math.random() * numbers.length)]);
}
function randomSymbols() {
  var symbols = "!@#$%^&*()";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// collects the  differest aspects to "characters" and store this in a string. if any of these are selected then it takes that string and consideres it in the fucntion later.
function getCharacters(uppercase, lowercase, number, symbols) {
  var string = "";
  console.log(passwordLength)
  for (i = 0; i < passwordLength;) {
    if (uppercase) {
      string += getRandomUppercase();
      i++
      if (passwordLength === i) {
        break;
      }
    }

    if (lowercase) {
      string += getRandomLowercase();
      i++
      if (passwordLength === i) {
        break;
      }
    }
    if (symbols) {
      string += randomSymbols();
      i++
      if (passwordLength === i) {
        break;
      }
    }
    if (number) {
      string += randomNumber();
      i++
      if (passwordLength === i) {
        break;
      }
    }
  }
  return string;
}

function generatePassword() {
 promptpasswordLength();
  var uppercase = confirm("do you want uppercase letters?");
  var lowercase = confirm("do you want lowercase letters?");
  var symbols = confirm("do you want symbols?");
  var number = confirm("do you want numbers?");
  while (!uppercase && !lowercase && !symbols && !number) {
    var uppercase = confirm("do you want uppercase letters?");
    var lowercase = confirm("do you want lowercase letters?");
    var symbols = confirm("do you want symbols?");
    var number = confirm("do you want numbers?");
  }
  var passwordCharacters = getCharacters(uppercase, lowercase, number, symbols);

  writePassword(passwordCharacters);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
