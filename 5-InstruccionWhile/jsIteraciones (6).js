function mostrar()
{
	var contador=1;
	var acumulador=0;
	acumulador = parseInt(acumulador)

while (contador <= 5 )
	{
	acumulador = acumulador + parseInt(prompt("intruduce el numero"));
	contador++;

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN