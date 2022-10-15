//Aquí voy metiendo las lecciones:

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
let birthYear = 1991;
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

//String:
const jonas = "I am " + firstName + ', a ' + (now - birthYear) + ' years old';
console.log(jonas);

//Cadena de plantilla (template literals): `esto es html` y ${aquí meto js, cualquier cosa}
const jonasNew = `I am ${firstName}, a ${job} of ${now - birthYear} years old`;
console.log(jonasNew);

console.log(`This is an example of other String template literals`);

//New line: \n\
console.log('String with \n\ multiple \n\ lines');

//Otra manera de hacer múltiples líneas, presionando enter pero dentro de ``
console.log(`String
multiple
lines`);

//Introducir emojis en windows: windows + .

//Condicional:
age = 17;//ya la tengo arriba declarada y  no puedo volver a poner const age = 19;
const isOldEnough = age >= 18;
if (isOldEnough) {
    console.log('Sarah can start driving license 🤓')
}
if (!isOldEnough) {
    const yearsLeft = 18 - age;
    console.log(`Sorry Sarah, you are too young for that! You have to wait another ${yearsLeft} years`);
}
birthYear = 1991;
let century;
if(birthYear<= 2000) {
     century = 20;
}if(birthYear>2000) {
     century = 21;
}
console.log(century);

//Type Conversion(convertir manualmente un tipo en otro):

const inputYear = "1991";
console.log(Number(inputYear), inputYear); //Number(string)convierte un string a un número
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));//esto es imposible de convertir a número:NaN
console.log(typeof NaN);//me dirá que el tipo de NaN es un número

console.log(String(23));//Así convierto a un string un número

//Type Coercion(Javascript convierte automáticamente):

console.log('I am ' + 23 + ' years old');//23 se convierte automáticamente a un string
console.log('23' - '10' - 3);//convierte a los string automáticamente a number
console.log('23' + '10' + 3);//concatena los tres como tres string y lo devuelve como string
console.log('23' + '10' - 3);//me devuelve el string 2307, es decir resta 10 y 3 y lo concatena con 23, pero lo devuelve como número
console.log('23' * '2');//hace la multiplicación y devuelve un number, aunque le estoy metiendo strings
console.log('23' / '2');//idem

let n = '1' + 1;//concatena dos string
n = n - 1;//el operador - convierte el string a number y hace la operación
console.log(n);

console.log(5+3+'10');//hace la operación de 5+3=8, este 8 lo convierte a string y lo concatena con 10 dando el string 810
//Las operaciones las hace de izda a drcha, el - opera y convierte a número y el + concatena y convierte a string

//Boolean
// falsy values: 0, "", undefined, null, NaN, false
console.log(Boolean(0));//false
console.log(Boolean(undefined));//false
console.log(Boolean('Jonas'));//true
console.log(Boolean({}));//true
console.log(Boolean(''));//false

const money = 0;
if (money) {
    console.log("Don`t spend it all");
}else {
    console.log("You should get a job!");
}

let height=175;
if (height) {
    console.log('Height is defined');//si height es 0 o no le pongo valor
}else {
    console.log('Height is undefined');//si height tiene un valor definido
}

//Operadores de igualdad
const ageChild = 18;
if (ageChild === 18) { //=== igualdad estricta. == igualdad flexible, me igualaría '18' con 18 porque entraría en acción la coercion y convertirá el string en number EVITARLA PORQUE ME PUEDE DAR ERRORES EN MI CÓDIGO
    console.log("Your are an adult");
}

const favourite = Number (prompt ("What`s your favourite number?")); //si pongo ese Number me lo convierte a numero pero sino será un string
console.log(favourite);
console.log(typeof favourite);
if(favourite === 23) {
    console.log("23 is an amazing number");//sale si le pongo ==, pero si pongo === no sale porque 23 es un string (si en el prompt no he puesto Number para que lo convierta) y él busca que sea un número
} else if (favourite === 7) {
    console.log('7 is also cool');
}else if (favourite === 9) {
    console.log('9 is also cool');
}else { 
    console.log('This number is not 23 or 7 or 9');
}

if (favourite != 23) {
    console.log('Why not 23?');
}

