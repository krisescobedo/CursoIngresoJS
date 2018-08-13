/*(IF)Pedir tres números e informar cual es el mayor y el menor de los mismos.  */
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;
	var mayor;
	var menor;

	numeroUno = prompt("introduzca el 1er numero");
	numeroDos = prompt("introduzca el 2do numero");
	numeroTres = prompt("introduzca el 3er numero");

	numeroUno= parseInt(numeroUno);
	numeroDos= parseInt(numeroDos);
	numeroTres= parseInt(numeroTres);

	
	if (numeroUno > numeroDos && numeroUno > numeroTres)
	{
		mayor=numeroUno;
	}else 
		{
			if (numeroDos > numeroUno && numeroDos>numeroTres)
			{
				mayor = numeroDos;
			}	 
			else 
			{
				mayor = numeroTres;
			}
		}	
		
	if (numeroUno<numeroDos && numeroUno<numeroTres) 
	{
		menor=numeroUno;
	}else 
		{
			if (numeroDos<numeroUno&& numeroDos<numeroTres)
			{
				menor=numeroDos;
			}
			else 
			{
				menor=numeroTres;
			}
		}
	alert("el mayor es " +mayor);
	alert("el menor es " +menor);
}	



/*
	if (numeroUno > numeroTres && numeroUno > numeroDos) {
		alert("el numero mayor es el "+numeroUno);
	}
	if (numeroDos > numeroUno && numeroDos >numeroTres) {
		alert("el numero mayor es el "+numeroDos);
	}

	if (numeroUno < numeroTres && numeroUno < numeroDos) {
		alert("el numero menor es "+numeroUno);
	}
	if (numeroDos < numeroTres && numeroDos < numeroUno) {
		alert("el numero menor es "+numeroDos);
	}
	if (numeroTres < numeroUno && numeroTres < numeroUno)
		alert("el numero menor es "+numeroTres)

*/
/*
	if (numeroUno < numeroDos && numeroDos < numeroTres) {
		alert("el numero mayor es el "+numeroTres);
		alert("el numero menor es el "+numeroUno);
	}
	else if (numeroUno > numeroDos && numeroDos > numeroTres) {
		alert("el numero mayor es "+numeroUno);
		alert("el numero menor es el "+numeroTres);
	}
	else if { (numeroDos > )
		alert("el numero")
	}
*/



//	alert("comentar esta linea 4");

