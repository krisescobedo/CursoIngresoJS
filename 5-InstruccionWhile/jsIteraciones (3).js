function mostrar()
{

var clave = prompt("ingrese el número clave.");

while (clave != "utn750")
{
	alert("Contraseña incorrecta");
	clave = prompt("introduzca la contraeña correcta");

/* Esta bien pero mal
	if (clave=="utn750")
	{
		alert("contraseña valida!");
	}*/
}

alert("contraseña valida!")


}//FIN DE LA FUNCIÓN
