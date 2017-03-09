var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
console.log('Tablica zawiera nastêpuj¹ce imiona: ' + allNames);

var newName = prompt('Podaj nowe imiê');

if (allNames.indexOf(newName) === -1) {
  allNames.push(newName);
} else {
  console.log('Podane imiê znajduje siê ju¿ w tablicy: ' + newName);
}

console.log('Ostatecznie tablica zawiera nastêpuj¹ce imiona: ' + allNames)