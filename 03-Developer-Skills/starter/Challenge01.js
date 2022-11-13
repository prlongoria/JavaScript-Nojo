// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]
// GOOD LUCK �

//Undestanding the problem:
// - transform the array to string, sparate by ...
// - X days = index + 1

//Break it up into subproblems:
// - Transform array into string
// - transform each element to string with Celsius
// - Strings need to contain day
// - Add ... between elements, start and end of string
// - log string in console


const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

//console.log(`... {data1[0]}`ºC ... ${data1[1]}ºC ... ${data1[1]}ºC ...);

//debo hacer la funcinón:
const printForecast = function(arr){
    let string = ''; //para que se vaya rellenando
    for (let i = 0; i < arr.length; i++){

        string = string + `${arr[i]}ºC in ${i + 1} days ... ` ;
    }
    console.log("... " + string);
}
printForecast(data2);