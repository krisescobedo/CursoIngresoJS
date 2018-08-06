/*Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/

function mostrar()
{
	var num1;
	var num2;
	var suma;

	num1 = prompt("Introduzca el 1er numero");
	num2 = prompt("intrduzca el 2do numero");
	num1 = parseInt(num1);
	num2 = parseInt(num2);
	suma = num1 + num2;

	if (num1==num2){
		alert(num1+num2);
	}
	else if (num1 > num2) {
		alert(num1/num2);
	}
	else (num1 < num2) {
		alert(suma);
		if (suma < 50 ) {
			alert("la suma de los numeros introducidos es menor a 50");
		}
		
	}
	
}
