// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
// GOOD LUCK �

//Metiendo la función en una constante y con operador ternario:
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
console.log(calcTip(100));

//Con función flecha:
const calcTip2 = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(calcTip2(100));

//Función con if-else:
function calcTip3 (bill) {
    
    let tip1 = bill * 0.15;
    let tip2 = bill * 0.20;
    if (bill>= 50 && bill <= 300) {
        return tip1;//esto sólo sirve si declaro dentro las tip1 y tip2
        // return bill * 0.15;//esto es así si no declaro dentro de la function las tip1 y tip2
    }else {
        return tip2;
        // return bill * 0.20;
    }    
};
console.log(calcTip3(100));

let bills = [125, 555, 44];
console.log(bills);

let tips = [calcTip(bills[0]),calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

let total = [tips[0]+bills[0], tips[1]+bills[1], tips[2]+bills[2]];
console.log(total);

console.log(bills, tips, total);