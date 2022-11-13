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

//Debugging: quiero que mi termómetro me dé la temperatura en kelvin y voy a provocar un error para hacer debug y encontrarlo
const measureKelvin = function(){
    const measurement = { //creo un objeto
        type: 'temperature',
        unit: 'celsius',
        //value: prompt('Degrees celsius: '), //para que me pida la temperatura y convertirla a kelvin. Así lo tenía antes de encontrar el error
        //Para que convierta el string a number:
        value: Number(prompt('Degrees Celsius: ')),
    };
    console.log(measurement.value);
    console.warn(measurement.value);//imprime un warning si lo hay
    console.error(measurement.value);//imprime un error si lo hay

    console.log(measurement);//imprime el objeto completo
    console.table(measurement);//imprime el objeto en una tabla


    const kelvin = measurement.value + 273; //creo que es simplemente sumar al valor de esa temperatura, 273, pero no funciona porque imprime una concatenación, no una suma
    return kelvin;
};
console.log(measureKelvin());
 //1.-Identificar el error (bug): Concatena los valores
 //2.-Encontrar el error:
 //veo que imprime concatenación de la const kelvin, así que hago un console.log de lo que hace la función measureKelvin
 //También puedo hacer console.warn y console.error que me imprimen errores y advertencias en consola
 //Como todo parece correcto, miro ahora más en profundidad el objeto: pido que imprima el objeto entero:measurement.
 //Y es ahora cuando veo que el value es un string, por eso lo concatena. 
 //3.-Solucinoar el error:convertir el string a número

 //El debug se puede hacer directamente en Chrome: sources->script->veo mi código->pongo un breakpint en el punto donde creo tener el problema(en este caso en const kelvin), así cuando 
 //cargue mi página, va a ejecutar justo hasta este punto y veré lo que se ve exactamente en este punto, incluidos los valores de todas las variable definidas, y ahí ya dando al play o al pause voy viendo lo que sale
 //Sección 5, video 61 si quiero mirarlo porque lo entiendo regular ya que mi navegador tiene una versión más moderna y no actúa igual que la suya.

 
 