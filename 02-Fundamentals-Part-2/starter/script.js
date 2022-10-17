'use strict';
//Debo activar el modo estricto para que sea más seguro mi código en Javascrip:
//esa línea de activación del strict debe ser la primera de mi script o sino no funcionará
//también podría activarlo sólo para un bloque de código, pero es más práctico ponerlo al
//principio del script y que proteja todo el código de este archivo
//Esto evita errores accidentales: prohibe hacer ciertas cosas y además, crea errores visibles en
//determinadas situaciones en las que sin este modo de restricción, Javascript fallará sin que yo sepa que he cometido un error
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;//Si escribiera mal adrede la variable y en cosola aparece el error, sin embargo, si no pongo use strict no me aparecerá el error, sólo no ejecuta el código
if(hasDriversLicense) console.log('I can drive!');

//const interface = 'Audio';//Aquí me saltará un error porque la palabra interface es reservada, y el modo estricto me lo detecta y  me lo canta en consola

//Functions:
function logger() {//aquí no reservo espacio para valores porque sólo quiero que haga siempre lo mismo sin necesidad de parámetros a los que asignarles un valor cuando llame a esta función
    console.log('My name is Jonas');//Esta función no retorna un valor, pro eso no le meto parámetros para luego asignarles un valor(constante o variable)
}
logger();//calling, running or invoking the function, si no hago esto, nunca se ejecutará esa función

function fruitProcessor(apples, oranges) {//ahí en los () van los parámetros, estos reservan espacios vacíos a rellenar cuando llamemos a la función para que se ejecute y le metemos su valor en el paréntesis en ese momento
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
//Ahora debo llamarla para que se ejecute:
fruitProcessor(5, 0);//esto imprime en consola solamente 5 0, pero no imprime el juice porque tengo un return y no imprime en consola

const appleJuice = fruitProcessor(5, 0);//así lo meto en una constante
console.log(appleJuice);//así imprime el return de la función fruitProcessor
//O también puedo hacerlo así:
console.log(fruitProcessor(5, 0));//Y esto me da el mismo resultado que las líneas 29 y 30

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//const age1 = calcAge1(1990);//puedo declarar aquí la constante, antes de declarar la función, o la puedo declarar después, funcionará igualmente
//Function declaration:
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    //return age;
    return 2037 - birthYear;
}
console.log(calcAge1(1991)); 

//Function expression:(devuelve valor que guardo en una constante)
const calcAge2 = function(birthYear) { //puedo meter una función en una variable
    return 2037 - birthYear;
}//en este caso, no puedo declarar la constante age2 antes ya que estoy metiendo la función en una constante, no funcionaría
console.log(calcAge2(1991));

const age2 = calcAge2(1991);
const age1 = calcAge1(1990);//aquí la declaro después y veo que funciona igual que cuando la declaré antes de declarar la función, porque a esta función no la meto en una constante.
console.log(age1, age2);//así imprimo el resultado de ambas funciones con los valores que le asigné a sus parámetros


//const calcAge3 = function(birthYear) {
//    return 2037 - birthYear;
//}

//función flecha: la expresión que pongo en linea 63 es el equivalente a la función de las lineas 58-60
const calcAge3 = birthYear => 2037 - birthYear;//cojo el parámetro birthyear y después de la flecha le pongo el valor que quiero que tenga, y a continuación lo meto en una constante
//no necesito ni llaves ni el return en la función flecha. Lo que sí que debo hacer es llamarla para que se ejecute:
console.log (calcAge3(1992));//o de otra forma sería:
const age3 = calcAge3(1992);
console.log (age3);//imprime lo mismo que la línea 65

const yearsUntilRetirement = birthYear => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return retirement;
}
console.log(yearsUntilRetirement(1991));//1991 es el valor del parámetro birthyear que es lo que pongo justo antes de la flecha

//si tuviera varios parámetros:
const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement2(1991, 'Jonas'));
console.log(yearsUntilRetirement2(1980, 'Bob'));//Veo que puedo poner los valores que quiera a los parámetros, las veces que quiera

//Functions calling other functions:
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {//ahí en los () van los parámetros, estos reservan espacios vacíos a rellenar cuando llamemos a la función para que se ejecute y le metemos su valor en el paréntesis en ese momento
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

//Arrays:
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2000);//otra manera de crear un array es esta
console.log(years[1]);

console.log(friends[0]);
console.log(friends.length);//me da el número de elementos del array
console.log(friends[friends.length-1]);//imprime el último elemento de mi array

friends[2] = 'Jay';//así consigo que cambie Peter por Jay
console.log(friends[2]);
//Ojo, declaré el array friends como una const, así que sólo puedo mutar elemento a elemento, pero no el array entero del tirón

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];//Puedo meterle distintos tipos al array
console.log(jonas);

//Exercise:
function calcAge4(birthYear) {
    const age = 2037 - birthYear;
    return 2037 - birthYear;
}
const years2 = [1990, 1967, 2002, 2010, 2018];

console.log(calcAge4(years2));//NaN, no puedo hacer esto

const age4 = calcAge4(years2[0]);
const age5 = calcAge4(years2[1]);
const age6 = calcAge4(years2[years.length-1]);//para que coja el último elemento de mi array
console.log(age4, age5, age6)

const ages = [calcAge4(years2[0]), calcAge4(years2[1]), calcAge4(years2[years.length-1])];
console.log(ages);

