var a = prompt('Podaj wartość zmiennej (a)')
var b = prompt('Podaj wartość zmiennej (b)')
var value = (a*a) + (2 * a * b) - (b*b);
console.log(value);

if (value > 0) {
    console.log('Wynik dodatni');
} else if (value < 0) {
    console.log('Wynik ujemny');
} else if (value === 0) {
    console.log('Wynik jest równy 0');
} else {
    console.log('Wynik nie jest liczbą');
};