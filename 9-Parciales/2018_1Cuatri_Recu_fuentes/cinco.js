//Bienvenidos. 
/*(SWITCH)pedir el ingreso de un día de la semana, 
si es fin de semana mostrar " buen finde", 
si es día hábil “ a trabajar”, 
si no es un día valido, también informarlo, 
usar una sola ventana alert*/

function mostrar()
{
	var dia;
	dia = prompt("Introduzca un dia de la semana")

	switch (dia) {
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		alert("A trabajar esclavo!");
		break;
		case "viernes":
		case "sabado":
		case "domingo":
		alert("Buen finde semana atr");
		alert("Ojo! dia no habil");
	}
}
