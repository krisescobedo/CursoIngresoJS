/*(IF)Pedir tres números e informar cual es el mayor y el menor de los mismos.  */
function mostrar()
{
	var num1;
	var num2;
	var num3;
	

	num1 = prompt("introduzca el 1er numero");
	num2 = prompt("introduzca el 2do numero");
	num3 = prompt("introduzca el 3er numero");
	
	if (num3 > num1 && num3 > num2){
		alert("el numero mayor es el "+num3);
		}
	if (num1 > num3 && num1 > num2) {
		alert("el numero mayor es el "+num1);
	}
	if (num2 > num1 && num2 >num3) {
		alert("el numero mayor es el "+num2);
	}

	if (num1 < num3 && num1 < num2) {
		alert("el numero menor es "+num1);
	}
	if (num2 < num3 && num2 < num1) {
		alert("el numero menor es "+num2);
	}
	if (num3 < num1 && num3 < num1)
		alert("el numero menor es "+num3)

	




//	alert("comentar esta linea 4");
}
