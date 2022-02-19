//Write a JavaScript program to extend a 3-digit color code to a 6-digit color code.


//#Source https://bit.ly/2neWfJ2 
const extend_Hex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');

console.log(extend_Hex('#03f'));
console.log(extend_Hex('05a'));
