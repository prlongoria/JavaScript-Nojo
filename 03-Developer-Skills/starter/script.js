// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//PROBLEM: Calculate the temperature amplitude (sometimes threre might be a sensor error)

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

        if(currentTemperature > max){//si un elemento del array es mayor que el primero
         max = currentTemperature;//la variable max será igual a ese elemento del array
        }
        if (currentTemperature< min) {
            min = currentTemperature;
        }
    }
        console.log(max, min);//imprime la variable max, que es el mayor de los elementos y la min
};  

calcTempAmplitude(temperatures);//imprime el mayor y el menor de los elementos del array temperatures, pero puedo poner un array que yo quiera o meter directamente valores entre[]
