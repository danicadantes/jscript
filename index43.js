const text='game of thrones';
const firstChar = text.charAt(0);
const secondChar = text.charAt(5);
const thirdChar = text.charAt(8);
const result= firstChar.concat(secondChar,thirdChar);

console.log('The final result is',result.toUpperCase());

//when I tried using 1000 as index, only the character with a valid value is showing.
