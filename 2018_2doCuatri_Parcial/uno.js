/*Se piden por prompt el ancho y largo de una cancha de futbol y 
sabiendo que con un litro de pintura blanca se pintan 3 mts lineales, 
informar el perímetro y la cantidad de litros de pintura se deben comprar para pintar todo el perímetro. */
function mostrar()
{
	var ancho;
	var largo;
	var litrosPintura;
	var perimetro;

	ancho = prompt("Introduzca el ancho de la cancha (en metros)");
	largo = prompt("introduzca el largo de la cancha (en metros)");
	perimetro = 2*ancho + 2*largo;
	litrosPintura = perimetro/3;
	alert("la cantidad de litros de pintura necesarias es de: "+ litrosPintura + " y, el perimetro de la cancha con las medidas especificadas es de: "+ perimetro);
	//alert("comentar esta linea 1");
}
