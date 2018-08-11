/*Realizar un algoritmo que permita el ingreso del nombre, 
el ancho, el alto y el peso de 5 productos .Validar todos los datos, 
sabiendo que no puede tener más de 10 de ancho y 10 de alto, y su peso 
o puede superar los 1000 kilos. 
Informar: 
a- el peso más pesado 
b- la altura más alta 
c- el menor ancho. 
d- la cantidad que tiene un peso entre 300 y 600 kilos.  */

function mostrar()
{

	var nombreProducto;
	var anchoProducto;
	var pesoProducto;
	var altoProduto;
	var pesoMasPesado;
	var pesoMenosPesado;
	var contador300e600
	
	var contador= 0;

	while (contador < 5) {
		contador++;
		nombreProducto= prompt("introduzca el nombre del producto");
//pido y valido el ANCHO del producto		
		anchoProducto= prompt("introducir el ancho, (no puede superar los mil kilos!)");
		anchoProducto= parseInt(anchoProducto);
		while (isNaN(anchoProducto) || anchoProducto > 10 || anchoProducto < 0) {
			anchoProducto=prompt("Error!. Introducir el ancho, (no puede superar los 10 de ancho!)");
			anchoProducto= parseInt(anchoProducto)
		}
//pido y valido el LARGO del producto
		altoProduto= prompt("Introducir el alto del producto, (no puede superar los 10 de alto!)");
		altoProduto= parseInt(altoProduto);
		while (isNaN(altoProduto) || altoProduto > 10 || altoProduto < 0) {
			altoProduto= prompt("Error!. Introducir el alto del producto, (no puede superar los 10 de alto!)");
			altoProduto= parseInt(altoProduto);
		}
//pido y valido el PESO del producto
		pesoProducto= prompt("Introducir el peso del producto, entre 0 y 1000");
		pesoProducto= parseInt(pesoProducto);
		while (isNaN(pesoProducto) || pesoProducto > 1000 || pesoProducto < 0) {
			pesoProducto= prompt("Error! Introducir el peso del producto, entre 0 y 1000");
			pesoProducto= parseInt(pesoProducto);
		}

//Analisis
	if (contador == 1) {
		pesoMasPesado = pesoProducto;
		pesoMenosPesado = pesoProducto;
		masAlto= altoProduto
		menorAncho= anchoProducto
	} else {
		if (alto > masAlto) {
			masAlto=alto;
		}
		if (peso > pesoMasPesado) {
			pesoMasPesado=pesoProducto;
		}
		if (menorAncho > anchoProducto) {
			menorAncho= anchoProducto;
		}
	}
	
	if (peso>300 && peso <600){
		contador300e600++;
	}

	


	






	//alert("comentar esta linea 7");
	}
}
