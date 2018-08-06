function mostrar()
{
	var precio;
	var porcentaje;
	var descuento;
	var precioConDescuento;
	var iva;
	var precioFinal;
	            
	precio = prompt("ingrese el precio");
	precio = parseInt(precio);
	porcentaje = prompt("ingrese el porcentaje de descuento");
	porcentaje = parseInt(porcentaje);
	descuento = precio * porcentaje / 100;
	precioConDescuento = precio - descuento;
	iva = precioConDescuento*21/100;
	precioFinal = precioConDescuento + iva;

	document.getElementById('elPrecioFinal').value = precioFinal

	alert("El descuento es de "+descuento+" el precio final es de "+precioConDescuento+ " y el impuesto de valor agregado es de "+iva);




}
