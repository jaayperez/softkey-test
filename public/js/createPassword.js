// Password generated with at least 1 number, 1 upper case character, 1 lower case character and 1 Special character
function generatePassword() {
  var passwordLength = randomIntFromInterval(10, 20);
  var numberChars = "0123456789";
  var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "~!#$%&*-+|";
  var allChars = numberChars + upperChars + lowerChars + specialChars;
  var randPasswordArray = Array(passwordLength);
  randPasswordArray[0] = numberChars;
  randPasswordArray[1] = upperChars;
  randPasswordArray[2] = lowerChars;
  randPasswordArray[3] = specialChars;
  randPasswordArray = randPasswordArray.fill(allChars, 4);
  if (window.crypto && window.crypto.getRandomValues) {
    return shuffleArray(randPasswordArray.map(function(x) {
      return x[Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * x.length)]
    })).join('');
  } else if (window.msCrypto && window.msCrypto.getRandomValues) {
    return shuffleArray(randPasswordArray.map(function(x) {
      return x[Math.floor(window.msCrypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1) * x.length)]
    })).join('');
  } else {
    return shuffleArray(randPasswordArray.map(function(x) {
      return x[Math.floor(Math.random() * x.length)]
    })).join('');
  }

}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// Generate random number in the range (min and max included)
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
