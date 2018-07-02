function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;
	
	precio = parseInt(prompt("ingresar el precio"));
	descuento = parseInt(prompt("agregar el descuento(en porcentaje)"));
	precioFinal = (precio - (precio*descuento/100));

	document.getElementById('elPrecioFinal').value = precioFinal

}
