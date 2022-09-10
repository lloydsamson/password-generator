 var slider = document.getElementById("myRange");
 var output = document.getElementById("rangeval");
 output.innerHTML = slider.value;

 const form = document.getElementById("passwordGeneratorForm");
 const includeUppercaseElement = document.getElementById("includeUppercase");
 const includeNumbersElement = document.getElementById("includeNumbers");
 const includeSymbolElement = document.getElementById("includeSymbols");
 const passwordDisplay = document.getElementById("genpass");

 const UPPERCASE_CHAR_CODES = fromLowToHigh(65, 90);
 const LOWERCASE_CHAR_CODES = fromLowToHigh(97, 122);
 const NUMBER_CHAR_CODES = fromLowToHigh(48, 57);
 const SYMBOL_CHAR_CODES = fromLowToHigh(33, 47).concat(
     fromLowToHigh(58, 64)
 ).concat(
     fromLowToHigh(91, 96)
 ).concat(
     fromLowToHigh(123, 126)
 )

 slider.oninput = function() {
     output.innerHTML = this.value;
 }

 form.addEventListener('submit', e => {
     e.preventDefault();
     const characterAmount = slider.value;
     const includeUppercase = includeUppercaseElement.checked;
     const includeNumbers = includeNumbersElement.checked;
     const includeSymbols = includeSymbolElement.checked;

     const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
     passwordDisplay.value = password;
 })

 function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
     let charCodes = LOWERCASE_CHAR_CODES
     if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
     if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)
     if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
     const passwordCharacters = [];

     for (let i = 0; i < characterAmount; i++) {
         const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
         passwordCharacters.push(String.fromCharCode(characterCode));
     }
     return passwordCharacters.join('');
 }

 function fromLowToHigh(low, high) {
     const array = [];
     for (let i = low; i <= high; i++) {
         array.push(i);
     }
     return array;
 }