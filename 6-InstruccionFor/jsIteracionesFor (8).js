function mostrar()
{
	var numeroIngresado;
	var numerosAnteriores;
	var numeroRecorrido;
	var esPrimo;

	numeroIngresado =prompt("Please, enter a number");
	numeroIngresado = parseInt(numeroIngresado);


	for(numeroRecorrido=numeroIngresado; numeroRecorrido >1; numeroRecorrido--)
	{
		esPrimo = 0;
		for ( numerosAnteriores = 2 ; numerosAnteriores < numeroRecorrido ; numerosAnteriores++ ) {
		
			if (numeroRecorrido % numerosAnteriores == 0)
			{
				esPrimo = 1;
				break;	
			}
		}
		if (esPrimo == 0){
		console.log(numeroRecorrido + " es un numero primo");		
		}
	}
	// ctrl + d
	
	// 11 - 24 algoritmo numero primo
}//FIN DE LA FUNCIÓN

/*
Jose Enero 9
Maria Marzo 5 22
Lucas Julio 7 15
Fer Agos 8 40
Pame Febrero 2 17
*/


/*
* for ( numerosAnteriores = numeroIngresado -1 ; numerosAnteriores > 1 ; numerosAnteriores-- ) {
		
		if (numeroIngresado % numerosAnteriores == 0)
		{
			console.log(numerosAnteriores);
			esPrimo = 1;
			break;	
		}
	}
	if (esPrimo == 0){
		console.log(numeroIngresado + " es un numero primo");
	}
	else {
		console.log(numeroIngresado + " no es un numero primo");
	} */