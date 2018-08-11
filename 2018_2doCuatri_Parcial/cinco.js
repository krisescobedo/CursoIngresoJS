/*(SWITCH )Pedir el ingreso de un mes del año e informar si es de 31 días o de 30 o es febrero.  */


function mostrar()
{
	var mes;

	mes = prompt("Introducir un mes de año (sin mayusculas porfavor)");

	switch (mes){
		case "enero":
		case "marzo":
		case "mayo":
		case "julio":
		case "agosto":
		case "octubre":
		case "diciembre":
		alert("El mes elegido consta de 31 dias");
		break;
		case "febrero":
		alert("Mes de febrero consta de 29 dias");
		break;
		case "abril":
		case "junio":
		case "septiembre":
		case "noviembre":
		alert("Mes seleccionado consta de 30 dias");
		break;
		default:
		alert("el mes introducido no es correcto");


	}








//	alert("comentar esta linea 5");
}

