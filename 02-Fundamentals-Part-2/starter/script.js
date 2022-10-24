'use strict';
//Debo activar el modo estricto para que sea más seguro mi código en Javascrip:
//esa línea de activación del strict debe ser la primera de mi script o sino no funcionará
//también podría activarlo sólo para un bloque de código, pero es más práctico ponerlo al
//principio del script y que proteja todo el código de este archivo
//Esto evita errores accidentales: prohibe hacer ciertas cosas y además, crea errores visibles en
//determinadas situaciones en las que sin este modo de restricción, Javascript fallará sin que yo sepa que he cometido un error
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;//Si escribiera mal adrede la variable y en cosola aparece el error, sin embargo, si no pongo use strict no me aparecerá el error, sólo no ejecuta el código
// if(hasDriversLicense) console.log('I can drive!');

// //const interface = 'Audio';//Aquí me saltará un error porque la palabra interface es reservada, y el modo estricto me lo detecta y  me lo canta en consola

// //Functions:
// function logger() {//aquí no reservo espacio para valores porque sólo quiero que haga siempre lo mismo sin necesidad de parámetros a los que asignarles un valor cuando llame a esta función
//     console.log('My name is Jonas');//Esta función no retorna un valor, pro eso no le meto parámetros para luego asignarles un valor(constante o variable)
// }
// logger();//calling, running or invoking the function, si no hago esto, nunca se ejecutará esa función

// function fruitProcessor(apples, oranges) {//ahí en los () van los parámetros, estos reservan espacios vacíos a rellenar cuando llamemos a la función para que se ejecute y le metemos su valor en el paréntesis en ese momento
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// //Ahora debo llamarla para que se ejecute:
// fruitProcessor(5, 0);//esto imprime en consola solamente 5 0, pero no imprime el juice porque tengo un return y no imprime en consola

// const appleJuice = fruitProcessor(5, 0);//así lo meto en una constante
// console.log(appleJuice);//así imprime el return de la función fruitProcessor
// //O también puedo hacerlo así:
// console.log(fruitProcessor(5, 0));//Y esto me da el mismo resultado que las líneas 29 y 30

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //const age1 = calcAge1(1990);//puedo declarar aquí la constante, antes de declarar la función, o la puedo declarar después, funcionará igualmente
// //Function declaration:
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     //return age;
//     return 2037 - birthYear;
// }
// console.log(calcAge1(1991)); 

// //Function expression:(devuelve valor que guardo en una constante)
// const calcAge2 = function(birthYear) { //puedo meter una función en una variable
//     return 2037 - birthYear;
// }//en este caso, no puedo declarar la constante age2 antes ya que estoy metiendo la función en una constante, no funcionaría
// console.log(calcAge2(1991));

// const age2 = calcAge2(1991);
// const age1 = calcAge1(1990);//aquí la declaro después y veo que funciona igual que cuando la declaré antes de declarar la función, porque a esta función no la meto en una constante.
// console.log(age1, age2);//así imprimo el resultado de ambas funciones con los valores que le asigné a sus parámetros


// //const calcAge3 = function(birthYear) {
// //    return 2037 - birthYear;
// //}

// //función flecha: la expresión que pongo en linea 63 es el equivalente a la función de las lineas 58-60
// const calcAge3 = birthYear => 2037 - birthYear;//cojo el parámetro birthyear y después de la flecha le pongo el valor que quiero que tenga, y a continuación lo meto en una constante
// //no necesito ni llaves ni el return en la función flecha. Lo que sí que debo hacer es llamarla para que se ejecute:
// console.log (calcAge3(1992));//o de otra forma sería:
// const age3 = calcAge3(1992);
// console.log (age3);//imprime lo mismo que la línea 65

// const yearsUntilRetirement = birthYear => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }
// console.log(yearsUntilRetirement(1991));//1991 es el valor del parámetro birthyear que es lo que pongo justo antes de la flecha

// //si tuviera varios parámetros:
// const yearsUntilRetirement2 = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement2(1991, 'Jonas'));
// console.log(yearsUntilRetirement2(1980, 'Bob'));//Veo que puedo poner los valores que quiera a los parámetros, las veces que quiera

// //Functions calling other functions:
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {//ahí en los () van los parámetros, estos reservan espacios vacíos a rellenar cuando llamemos a la función para que se ejecute y le metemos su valor en el paréntesis en ese momento
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// //Arrays:
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2000);//otra manera de crear un array es esta
// console.log(years[1]);

// console.log(friends[0]);
// console.log(friends.length);//me da el número de elementos del array
// console.log(friends[friends.length-1]);//imprime el último elemento de mi array

// friends[2] = 'Jay';//así consigo que cambie Peter por Jay
// console.log(friends[2]);
// //Ojo, declaré el array friends como una const, así que sólo puedo mutar elemento a elemento, pero no el array entero del tirón

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];//Puedo meterle distintos tipos al array
// console.log(jonas);

// //Exercise:
// function calcAge4(birthYear) {
//     const age = 2037 - birthYear;
//     return 2037 - birthYear;
// }
// const years2 = [1990, 1967, 2002, 2010, 2018];

// console.log(calcAge4(years2));//NaN, no puedo hacer esto

// const age4 = calcAge4(years2[0]);
// const age5 = calcAge4(years2[1]);
// const age6 = calcAge4(years2[years.length-1]);//para que coja el último elemento de mi array
// console.log(age4, age5, age6)

// const ages = [calcAge4(years2[0]), calcAge4(years2[1]), calcAge4(years2[years.length-1])];
// console.log(ages);


// //Add elements to an array:
// // const friends = ['Michael', 'Steven', 'Peter'];
// friends.push('Jay');//El método push() añade Jay al final del array friends y me dice la longitud del nuevo array
// console.log(friends);

// const lengthArray = friends.push();//me da la longitud del array friends
// console.log(lengthArray);

// friends.unshift('John');//unshift() añade un elemento al inicio del array y me da su longitud
// console.log(friends);

// //Remove elements from array:
// friends.pop();//elimina el último elemento del array y me da su longitud
// console.log(friends);

// const poppedElement = friends.pop();//esta const guarda el array friends menos el último elemento
// console.log(poppedElement);//y aquí se imprime ese último elemento que eliminó

// friends.shift();//elimina el primer elemento del array me da su longitud
// console.log(friends);

// console.log(friends.indexOf('Michael'));//me da la posición en que se encuentra Michael en el array
// console.log(friends.indexOf('Patricia'));//como este elemento no existe en mi array, me da -1

// console.log(friends.includes('Michael'));//devuelve true
// console.log(friends.includes('Patricia'));//devuelve false

// friends.push(23);//añado número 23
// console.log(friends);
// console.log(friends.includes('23'));//me da false porque aquí meto un string en lugar de un número
// console.log(friends.includes(23));//true porque esto sí es un número

// if (friends.includes('Steven')) {
//     console.log('You have a friend called Steven');
// };
// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter');//no hace nada porque el array no contiene Peter
// }

//Objetos:
// const jonasArray = [
//     'Jonas', 
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     'Michael', 'Peter', 'Steven'
// ];

// const jonasObject = {//aqui meto las propiedades del objeto jonasObject
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037-1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// };
// console.log(jonasObject);

//Obtener propiedades del objeto:
// console.log(jonasObject.lastName);//esta es una forma
// console.log(jonasObject['lastName']);//otra forma

// const nameKey = 'Name';//creo una key para el Name de las propiedades del objeto
// console.log(jonasObject['first' + nameKey]);//y así consigo que imprima firstName
// console.log(jonasObject['last' + nameKey]);//y así el lastName

// const interesetedIn =prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// //asdfconsole.log(jonasObject[interesetedIn]);//así me imprimirá lo que el usuario meta en el prompt
// if(jonasObject[interesetedIn]) {
//     console.log(jonasObject[interesetedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName, lastName, age, job and friends');
// };

//Puedo añadir más propiedades a mi objeto, así:
// jonasObject.location = 'Portugal';//puedo añadirlo con .
// jonasObject['twitter'] = '@jonasschmedtman';//puedo añadirlo con []
// console.log(jonasObject);//imprime el jonasObject con location y su twitter

//Challenge: Jonas has 3 friends, and his best friend is called Michael:
// console.log(jonasObject.firstName + ' has ' +  jonasObject.friends.length + ' friends' + ' and his best friend is called '+ jonasObject.friends[0]);//esta es una forma

// console.log(`${jonasObject.firstName} has ${jonasObject.friends.length} friends, and his best friend is called ${jonasObject.friends[0]}`);//otra forma

//Métodos para objetos:
// const jonasObject2 = {//aqui meto las propiedades del objeto jonasObject
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear2: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: false,

    //Puedo crear un método para este objeto, así:(aquí dentro no puedo meter una función). esto es pues, un valor de una función
    // calcAge5: function(birthYear) {
    //     return 2037 - birthYear;
    // }

    //Para evitar confusiones con la birthyear, puedo usar la palabra this: y así apuntará al birthyear del objeto
    // calcAge: function() {
    //     console.log(this);//imprime todas las propiedades del jonasObject
    //     return 2037 - this.birthYear2;//pongo el this para que acceda a esa propiedad en concreto del jonasObject
    // }

    //Pero la mejor práctica es hacerlo de la siguiente manera, porque así lo meto en una nueva propiedad del objeto, es decir, añado una nueva propiedad con un método:
//     calcAge: function() {
//         this.age = 2037 - 1991;
//         return this.age;
//     },

//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()} years old ${jonasObject2.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`;
//     }
// };

//En lugar del método, podría crear una función fuera del objeto, talque así:
//const calcAge5 = function(birthYear) {
//    return 2037 - 1991;
//}

// console.log('Jonas is: ' + jonasObject2.calcAge5(1991));
// console.log('Jonas is: ' + jonasObject2['calcAge5'](1991));//de otra forma

//console.log(jonasObject2.calcAge());

// console.log(jonasObject2.calcAge());//debo llamar al método si quiero que luego me imprima la propiedad que añadí nueva, porque sino esa nueva propiedad aún no existe
// console.log(jonasObject2.age);//después de llamar al método ya puedo pedir la nueva propiedad

//Challenge: Jonas is a 46 year old teacher and he has a/no drivers's license

//Puedo hacerlo así:
// if (jonasObject2.hasDriversLicense) {
//     console.log(`${jonasObject2.firstName} is a ${jonasObject2.age} years old ${jonasObject2.job} and he has a drivers license`);
// } else {
//     console.log(`${jonasObject2.firstName} is a ${jonasObject2.age} years old ${jonasObject2.job} and he has no drivers license`);
// }

// O también con operador ternario:
// console.log( `${jonasObject2.firstName} is a ${jonasObject2.age} years old ${jonasObject2.job} and he has ${jonasObject2.hasDriversLicense ? 'a' : 'no'} drivers license`);


//O puedo hacerlo añadiendo el método getSummary al jonasObject, que es mejor práctica
// console.log(jonasObject2.getSummary());

//For Loop: se ejecuta mientras la condición es TRUE

// for (let repetition = 1; repetition <= 10; repetition++) {
// //declaro variable repetition igual a 1 porque es mi primera repetición desde la que quiero que empiece a realizar el loop, y esta será actualizada por el bucle for; condición lógica que se evalúa antes de cada iteración del ciclo y si esta es true, se ejecutará la siguiente iteración del ciclo y en cuanto esta condición sea falsa, el ciclo se detiene. EN ESTE CASO QUIERO QUE SE REPITA 10 VECES; actualizo el contador en 1, para que vaya repitiéndose hasta que deje de ser true la condición
// console.log(`Lifting weights repetition ${repetition}`);//asi me lo imprime las 10 veces que quiero y cambia el número de cada repetición
// }

//Bucle for en un array:
// const jonasArray = [
//     'Jonas', 
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];//puedo crear un array vacío para llenarlo dentro del ciclo for

// //la i debe ser 0 porque quiero recorrerlo desde el primer elemento del array, al cual llamo i:
// for (let i = 0; i < jonasArray.length; i++) {//fijarme que he puesto i<.length, si pusiera <= debería poner .length-1
//     console.log(jonasArray[i], typeof jonasArray[i]);//para que me imprima el array y los tipos de variables que lo componen

//    //Puedo llenar el array vacío así:
//     // types[i] = typeof jonasArray[i];//así lleno el array vacío

//     //Hay otra manera de rellenar un array vacío:método push:ES MEJOR HÁBITO
//     types.push(typeof jonasArray[i]);
// };
// console.log(types);

// const years = [1991, 2007, 1969, 2020];//array con años de nacimiento
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);//realiza la operación para conocer la edad y rellenar con esas cantidades el array vacío, suponiendo que 2037 es el año actual
// };
// console.log(ages);

// //continue and break:

// console.log('---ONLY STRINGS');
// for (let i = 0; i < jonasArray.length; i++) {

//     if(typeof jonasArray[i] != 'string') continue;//así le digo que sólo quiero que me registre los string en la consola
//     console.log(jonasArray[i], typeof jonasArray[i]);
// }
// console.log('---FINISHED STRINGS');

// console.log('---BREAK WITH NUMBER');
// for (let i = 0; i < jonasArray.length; i++) {
//     if(typeof jonasArray[i] === 'number') break;//así le digo que cuando encuentre un elemento que sea tipo número, detenga el ciclo
//     console.log(jonasArray[i], typeof jonasArray[i]);//sólo imprime lo anterior al primer número que encuentra, de hecho, el número no lo imprime
// }
// console.log('---FINISHED BREAK WITH NUMBER');

//looping backwards:
// const jonasArray = [
//     'Jonas', 
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {//quiero que recorra el array al revés
//     console.log(i, jonasArray[i]);//imprime los elementos del array al revés, y como le puse que imprima i delante, imprime el índice de cada uno
// };

// //loop in loop:
// for(let exercise = 1; exercise <= 3; exercise++) {//así le digo que repita lo que voy a poner dentro de {}las veces que yo quiera, en este caso, 3 veces
//     console.log(`----STARTING EXERCISE ${exercise}`);//imprime esto 3 veces y le cambia el número incrementándolo cada vez

//     //Meto ahora en cada uno de los starting exercise el siguiente ciclo:
//     for  (let repetition = 1; repetition <= 5; repetition++) {
//         console.log(`Exercise ${exercise}: Lifting weight repetition ${repetition}`);
//     };
// }


//While loop:SE PUEDE UTILIZAR EN MÁS SITUACIONES QUE EL FOR porque no necesita un contador salvo que yo lo quiera. Lo único que necesita el while es una condición que mientras sea verdadera siga el ciclo. Puedo usarlo si no necesito que un número se incremente, solo si quiero que pase algo, una condición
// for  (let repetition = 1; repetition <= 10; repetition++) {
//              console.log(`Lifting weight repetition ${repetition}`);
// };

// let repetition = 1;//debo declarar la variable fuera del while
// while (repetition <= 10) {
//     console.log(`WHILE LOOP: Lifting weight repetition ${repetition}`);//aquí pongo lo que quiero que haga mientras la condición repet<=10 sea true
//     repetition++;//mientras sea true también va aumentando el contador
// };

//Ejemplo de tirar un dado: con un número ramdom (aleatorio)
// let dice = Math.random() * 6;//me dará números decimales aleatorios entre 0 y 6
// console.log(dice);//cada vez que acutalizo la página me imprime un número decimal aleatorio

// let dice2 = Math.trunc(Math.random() * 6);//así me dará números aleatorios enteros entre 0 y 5
// console.log(dice2);

let dice3 = Math.trunc(Math.random() * 6) + 1;//así me dará números aleatorios enteros entre 1 y 6
//console.log(dice3);

while (dice3 !== 6) { //si dice es diferente de 6, el ciclo se ejecutará
    console.log(`You rolled a ${dice3}`);//hasta aquí sólo estoy creando un número random entre 1 y 6 y eso me rompe el navegador pues sería un ciclo infinito, así que debo seguir creando nuevos valores de números random, y para ello debo meter dice en el loop:
    dice3 = Math.trunc(Math.random() * 6) + 1;//así sigo generando números random hasta que salgo el seis, que es la condición que puse al while
};
//IMPROTANTE: CUANDO SEPA CUÁNTAS VECES SE VA A REPETIR EL LOOP, ENTONCES SÍ QUE NECESITO UN CONTADOR, por ejemplo cuando quiero recorrer un array, y para eso es mejor el loop for.
