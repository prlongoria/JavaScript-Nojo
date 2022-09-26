// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and 
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message 
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement �
// GOOD LUCK � 
 
let massMark = 95;
let massJohn = 85;

let heightMark = 1.88;
let heightJohn = 1.76;

let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;

let markHigherBMI = bmiMark > bmiJohn;

console.log(markHigherBMI);//Data 1:true/Data 2:false

if(bmiMark>bmiJohn) {
    console.log("Mark's BMI is higher than John's!");
}
if(bmiMark<bmiJohn) {
    console.log("John's BMI is higher than John's!");
}

ME HE QUEDADO AQUÍ, ME DA UN ERROR QUE NO COMPRENDO, SEGUIR HACIENDO ESTE EJERCICIO, LO 
PRIMERO HE DE ENCONTRAR POR QUÉ ME DA ESE ERROR DE massMark, SINO PUEDO VER EL VIDEO EN EL QUE ESTOY 
QUE ES LA SOLUCIÓN DE ESTE CHALLENGE02