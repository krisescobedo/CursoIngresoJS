function mostrar()
{

var sexo = prompt("ingrese f ó m .");
sexo = toLowerCase();

while( !sexo == "f" || sexo == "m" )
	{
	alert("Es acaso usted señor sin genero");
	sexo = toLowerCase(prompt("introduzca un genero correspondiente porfavor"));
	}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN