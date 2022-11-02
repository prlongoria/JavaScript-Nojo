// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//PROBLEM1: Calculate the temperature amplitude (sometimes threre might be a sensor error)

//To undesrstand the problem:

//1.- temperature amplitude = highest tempr - lowest temperatures
//2.- How to compute max and min temperatures
//3.- what is a sensor error and what to do?

//To break the problem into sub-problems:

//1.- How to ignore error?
//2.- Find max value in temp array (research in google)
//3.- find min value in temp array (research in google)
//4.- substract min from max (amplitude) and return it

const calcTempAmplitude = function(temperatures){
    let max = temperatures[0];//supongo que el máximo es el primer elemento
    let min = temperatures[0];

    for(let i = 0; i < temperatures.length; i++)  {
        const currentTemperature = temperatures[i];

        if (typeof currentTemperature != 'number') continue;

        if(currentTemperature > max){//si un elemento del array es mayor que el primero
         max = currentTemperature;//la variable max será igual a ese elemento del array
        }
        if (currentTemperature< min) {
            min = currentTemperature;
        }
    }
        console.log(max, min);//imprime la variable max, que es el mayor de los elementos y la min
        return max - min;
};  

const amplitude = calcTempAmplitude(temperatures);//imprime el mayor y el menor de los elementos del array temperatures, pero puedo poner un array que yo quiera o meter directamente valores entre[]
console.log(amplitude);

//PROBLEM2: funcion should receive 2 arrays of temperatures:

//To undesrstand the problem:
//1.- with 2 arrays, should we implement funtionality twice? NO, just merge 2 arrays

//To break the problem into sub-problems:
//1.- How to merge 2 arrays? -buscar en google y encuentro: concat y push


const calcTempAmplitude2 = function(temperature1, temperature2){
    // const array1 = [];
    // const array2 = [];
    // const array3 = array1.concat(array2); 
    
    const temperatures = temperature1.concat(temperature2);
    console.log(temperatures);

    let max = temperatures[0];
    let min = temperatures[0];

    for(let i = 0; i < temperatures.length; i++)  {
        const currentTemperature = temperatures[i];

        if (typeof currentTemperature != 'number') continue;

        if(currentTemperature > max){
         max = currentTemperature;
        }
        if (currentTemperature< min) {
            min = currentTemperature;
        }
    }
        console.log(max, min);
        return max - min;
};  

const amplitude2 = calcTempAmplitude2([3, 5, 1], [9, 0, 5]);
console.log(amplitude2);
