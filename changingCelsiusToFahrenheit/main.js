
/*Crear un programa donde el usuario ingrese en un prompt la temperatura en Celsius y 
el programa muestre en una alerta la temperatura en Fahrenheit.*/

/* Create a program where the user add in a prompt temperature celsius   and them the program shows an 
alert with the temperature in fahrenheit */


var enterNum = prompt('Enter Celsius value');

function Fahrenheit(celsius){
            F = (5/9) * (celsius - 32);
            return F;
    }    
var result = alert("Esta es tu temeperatura en Fahrenheit " + Fahrenheit(enterNum));