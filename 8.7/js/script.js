var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log('Tablica zawiera nast�puj�ce imiona: ' + allNames);

var newName = prompt('Podaj nowe imi�');

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
} else {
  console.log('Podane imi� znajduje si� ju� w tablicy: ' + newName);
}

console.log('Ostatecznie tablica zawiera nast�puj�ce imiona: ' + allNames)