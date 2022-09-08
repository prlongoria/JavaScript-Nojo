let js = "amazing";
console.log(40 + 15 + 23 - 10);
console.log ('Jonas');
console.log(23);
let firstName = "Jonas";
console.log(firstName);
const number = 23;
console.log(number);
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

//Lecture: Values and Variables:
let country = "Spain";
let continent = "Europe";
let population = "50000000";
console.log(country);
console.log(continent);
console.log(population);

//Para saber el tipo de variable:
console.log(typeof javaScriptIsFun);
console.log(typeof firstName);
console.log(typeof number);

//Para cambiar el valor de una variable:
javaScriptIsFun = "YES!";
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

//Variables undefine:
let year;
console.log(year);
console.log(typeof year);
year = 1974;
console.log(typeof year);

//Variables null:
console.log(typeof null); //Da object,pero en realidad es null, al parecer es un error de JS

//Formas de declarar una variable:

//si pueden cambiar en un futuro:
let age = 30;
age = 31;

//si no van a cambiar en el futuro:
const birthYear = 1991;
//birthYear = 2007; //dará un error de assignment to constant variable

//const job; //error de missing initializer in const declaration (a una constante no la puedo dejar sin valor al declararla)

//Recomendación: si no sé si va a cambiar en el futuro, mejor poner const.

//var es un término obsoleto, pero debo conocerlo:
var job = "programmer";
job = 'teacher';
//let tiene alcance de bloque y var de función

//Operadores:

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas + 2, ageJonas /10, 2**3)
//2 ** 3 = 2*2*2 (2 elevado a 3)

//const firstName = "Jonas";
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

let x = 10 + 5; //valor de x será 15
x += 10; //suma 10 al valor de x (10+15):x=x+10
x *= 4; //multiplica el anterior valor de x (25) por 4
x ++; //suma 1 al valor de x anterior (100)
x --; //resta 1 al valor x
console.log(x);

//Operadores de comparación:
console.log(ageJonas > ageSarah);//imprime true
console.log(ageSarah >= 18);//imprime true
//Si pongo directamente en la consola del inspector: ageSarah <= 18 me dará false y si pongo firstName me dará Jonas

//También puedo meterlo en una constante de esta manera:
const isFullAge = ageSarah >= 18;

//Orden de operaciones en JS: hay una tabla en mdn si lo busco (el número más alto de la tabla, en la primera columna, es el de mayor precedencia para operarlo)

//Puedo declarar dos variables a la vez:
let z, y;
z = y = 25 - 10 - 5;
console.log(z, y); //esto me dará en consola 10 10
