
function mostrar()
{
	var valor= parseInt(prompt("numero"));
	var paridad;

	if (valor%2 == 0)
	{
		paridad = "par";
	} else 
		{
			paridad= "impar";
		}
	alert("el numero es "+paridad);
}
