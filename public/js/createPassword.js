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


// const characterAmountRange = document.getElementById('characterAmountRange')
// const characterAmountNumber = document.getElementById('characterAmountNumber')
// const includeUppercaseElement = document.getElementById('includeUppercase')
// const includeNumbersElement = document.getElementById('includeNumbers')
// const includeSymbolsElement = document.getElementById('includeSymbols')
// const form = document.getElementById('passwordGeneratorForm')
// const passwordDisplay = document.getElementById('passwordDisplay')
//
// const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
// const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
// const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
// const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
//   arrayFromLowToHigh(58, 64)
// ).concat(
//   arrayFromLowToHigh(91, 96)
// ).concat(
//   arrayFromLowToHigh(123, 126)
// )
//
// characterAmountNumber.addEventListener('input', syncCharacterAmount)
// characterAmountRange.addEventListener('input', syncCharacterAmount)
//
// form.addEventListener('submit', e => {
//   e.preventDefault()
//   const characterAmount = characterAmountNumber.value
//   const includeUppercase = includeUppercaseElement.checked
//   const includeNumbers = includeNumbersElement.checked
//   const includeSymbols = includeSymbolsElement.checked
//   const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
//   passwordDisplay.innerText = password
// })
//
// function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
//   let charCodes = LOWERCASE_CHAR_CODES
//   if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
//   if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
//   if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
//
//   const passwordCharacters = []
//   for (let i = 0; i < characterAmount; i++) {
//     const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
//     passwordCharacters.push(String.fromCharCode(characterCode))
//   }
//   return passwordCharacters.join('')
// }
//
// function arrayFromLowToHigh(low, high) {
//   const array = []
//   for (let i = low; i <= high; i++) {
//     array.push(i)
//   }
//   return array
// }
//
// function syncCharacterAmount(e) {
//   const value = e.target.value
//   characterAmountNumber.value = value
//   characterAmountRange.value = value
// }