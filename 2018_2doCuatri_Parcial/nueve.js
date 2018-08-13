/*En una tienda se ingresan los datos de los cliente (nombre , sexo, estado civil{soltero, casado,viudo},
cantidad de productos e importe total de la compra) 
Necesitamos saber: 
a- el nombre de la persona que más cantidad de productos compró. 
b- de los solteros, el sexo del que más gasto y el que menos gasto. 
c- el importe y nombre de la primer mujer en comprar. 
d- el promedio de gasto de los viudos. */

function mostrar()
{
	var nombre;
	var sexo;
	var estadoCivil;
	var cantidadProductos;
	var importeTotal;
	var clienteContador;

	var cantidadMayor;
	var cantidadMenor;
	var cantidadMayorNombre;

	var gastoMayor;
	var gastoMenor;
	var solteroSexoMasGasto;
 	var solteroSexoMenosGasto;
 	var banderaSolteros;

 	var primeraMujerContador;
 	var primeraMujerImporte;
 	var primeraMujerNombre;


 	
 	var respuesta;

 	respuesta= "si";
 	clienteContador=0;
 	banderaSolteros=0;

 	while(respuesta=="si")
 	{
 		clienteContador++;
 	//Introduzco los datos del cliente, cantidades e importe
 		nombre= prompt("introducir el nombre del cliente");
 	//sexo	
 		do
 		{
 			sexo= prompt("introducir el sexo del cliente, femenino(f) o masculino(m)");
 		}while (sexo!= "f" && sexo!= "m");
		
	//estado civil	
		do
 		{
 			estadoCivil= prompt("introducir el estado civil");
		} while(estadoCivil!="s" && estadoCivil!="v" && estadoCivil!="c");
		
	//importe y cantidad	
		importeTotal= prompt("introducir el importe total del cliente");
		importeTotal= parseInt(importeTotal);
 		
 		cantidadProductos= prompt("Introducir la cantidad de productos comprados");
 		cantidadProductos= parseInt(cantidadProductos);

 //a- el nombre de la persona que más cantidad de productos compró. 	
 		if (clienteContador==1)
 		{
 			cantidadMayor= cantidadProductos;
 			cantidadMenor= cantidadProductos;
 			cantidadMayorNombre= nombre;
 		}

 		if (cantidadProductos>cantidadMayor)
 		{
 			cantidadMayor= cantidadProductos;
 			cantidadMayorNombre= nombre;
 		}

/*	b- de los solteros, el sexo del que más gasto y el que menos gasto.
		if (estadoCivil=="s")
		{
			banderaSolteros=1
			sol
		} */

//c- el importe y nombre de la primer mujer en comprar. 

		if ()




 		respuesta= prompt("desea intoducir otro cliente?, respuesta distinta a (si) se considera como un NO");

 





 	}



console.log(cantidadMayor);
console.log(cantidadMayorNombre);








}
