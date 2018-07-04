/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	var numeroUno;
	var numeroDos;

function sumar()
{	
	var suma;
	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);	
	suma = numeroUno+numeroDos;
	alert(suma);
}

function restar()
{
	var resta;
	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	resta= numeroUno - numeroDos;
	alert(resta);
}

function multiplicar()
{ 
	var producto;
	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	producto = numeroUno * numeroDos;
	alert(producto);
}

function dividir()
{
	var cociente
	numeroUno = parseInt(document.getElementById('numeroUno').value);
	numeroDos = parseInt(document.getElementById('numeroDos').value);
	cociente = numeroUno / numeroDos;
	alert(cociente);
}

