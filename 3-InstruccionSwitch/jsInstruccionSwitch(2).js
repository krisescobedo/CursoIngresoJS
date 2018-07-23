function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño)
{
	case "Julio":
	case "Agosto":
	alert("Warm yourself because its freezing");
	break;

	case "Enero":
	case "Febrero":
	case "Marzo":
	case "Abril":
	case "Mayo":
	case "Junio":
	alert("The winter its not yet")
	break;

	case "Septiembre":
	case "Noviembre":
	case "Octubre":
	case "Diciembre":
	alert("The winter pass?");
	break;
}




}//FIN DE LA FUNCIÓN