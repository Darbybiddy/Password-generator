// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(password) {
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// this will determine how long the password is going to be. 
function promptpasswordLength() {
  var passwordLength = prompt(
    "How many character do you want in your password"
  );

  //makes sure the condition is met before we move foward. 
  while (passwordLength <= 8 || passwordLength >= 128) {
    alert("please enter a vlaue between 8 and 128");
    passwordLength = prompt("How many character do you want in your password");
  }
  return passwordLength;
};


//set variables that we we used for the password 
function getRandomLowercase() {
  return "abcdefghijklmnopqrstuvwxyz";
}
function getRandomUppercase() {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
function randomNumber() {
  return "1234567890";
}
function randomSymbols() {
  var symbols = "!@#$%^&*()";
  return symbols;
};


// collects the  differest aspects to "characters" and store this in a string. if any of these are selected then it takes that string and consideres it in the fucntion later. 
function getCharacters(uppercase, lowercase, number, symbols) {
  var string = "";
  if (uppercase) {
    string += getRandomUppercase();
  }

  if (lowercase) {
    string += getRandomLowercase();
  }

  if (symbols) {
    string += randomSymbols();
  }

  if (number) {
    string += randomNumber();
  }

  return string
};

function generatePassword() {
  var passwordLength = promptpasswordLength();
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
  let generatedPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  writePassword(generatedPassword);
};




// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
