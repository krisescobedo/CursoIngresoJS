function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

acumulador = parseInt(prompt("introduzca el numero"));
respuesta = prompt("desea continuar introduciendo valores?");

while (respuesta == "si")
{
	acumulador = acumulador + parseInt(prompt("introduzca el numero"));
	respuesta = prompt("desea continuar introduciendo valores?");
	contador++;
}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/(contador+1);

}//FIN DE LA FUNCIÓN