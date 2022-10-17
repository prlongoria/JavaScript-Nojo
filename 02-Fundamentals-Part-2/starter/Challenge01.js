// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �
// GOOD LUCK �

// let dolphinsScore = (44 + 23 + 71) / 3;
// let koalasScore = (65 + 54 + 49) / 3;
// if (dolphinsScore >= (koalasScore * 2)) {
//     console.log(`Dolphins score is ${dolphinsScore} so they are the Champions`);
// } else if (koalasScore >= (dolphinsScore * 2)) {
//     console.log(`Koalas score is ${koalasScore} so they are the Champions`)
// }else {
//     console.log("There is no Champion this year!");
// }

const calcAverage = (average1, average2, average3) => (average1 + average2 + average3) / 3;//función flecha

// function calcAverage (average1, average2, average3) { //función normal
//     let average = (average1 + average2 + average3) / 3;
//     return average;
// }
const averageDolphins = (calcAverage(44, 23, 71));//al ser función flecha, debo declarar los valores de los parámetros después
const averageKoalas = (calcAverage(65, 54, 49));
console.log(`Dolphins average is ${averageDolphins}`);
console.log(`Koalas average is ${averageKoalas}`);

function checkWinner(Dolphins, Koalas) {//aquí meto los parámetros, y también en los if
    if (Dolphins >= (Koalas * 2)) {
             return `Dolphins score is ${Dolphins} so they are the Champions`;
         } else if (Koalas >= (Dolphins * 2)) {
             return `Koalas score is ${Koalas} so they are the Champions`;
         }else {
             return "There is no Champion this year!";
         }
}
const winner = checkWinner(averageDolphins, averageKoalas);// y aquí ya meto los valores para esos parámetros y que declaré antes de la función
console.log(winner);


