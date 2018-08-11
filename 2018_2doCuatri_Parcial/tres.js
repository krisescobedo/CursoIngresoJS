/* Pedir por prompt el importe del producto, la cantidad y el nombre, mostrar un solo mensaje con el siguiente texto : 
“compró la cantidad xx del producto xx , a un precio de xx, pagando el precio de xx con iva incluido”.  */

function mostrar()
{
	var importe;
	var cantidad;
	var nombre;
	var precioIva;

	importe= parseInt(prompt("Introduzca el importe del producto"));
	cantidad = parseInt(prompt("Indique la cantidad requerida"));
	nombre = prompt("Introduzca el nombre del producto")
	precioIva = importe + (importe*0.2)

	alert("compró la cantidad "+cantidad+" del producto "+nombre+", a un precio de "+importe+", pagando el precio de "+precioIva+" con iva incluido")
//	alert("comentar esta linea 3");
}
