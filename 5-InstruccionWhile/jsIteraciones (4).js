function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	numero = parseInt(numero);

	while (numero <=0 || numero >=10)
	{
		alert("el numero introducido es invalido");
		numero = prompt("porfavor introduzca un numero dentro del rango");
		numero = parseInt(numero);
	}

document.getElementById('Numero').value = numero;

}//FIN DE LA FUNCIÓN