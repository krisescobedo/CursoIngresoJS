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
	var nombre;
	var ancho;
	var alto;
	var peso;
	var i = 0;
	var especificacionesValidas=0;
	var pesoPesado

	while (i<5) {
		nombre = prompt("introducir nombre");
		ancho = parseInt(prompt("introducir ancho"));
		alto = parseInt(prompt("introducir alto"));
		peso = parseInt(prompt("introducir peso"));
		i++;		

	}

	if (ancho<=10 %% alto<=10 && peso<=1000){
			especificacionesValidas = 1
		}
		if (especificacionesValidas!=1) {
			alert("las especificaciones introducidas no son validas, vuelva a intentarlo");
			i = 0;
		}

	if (i==1){
		o = peso

	}






	//alert("comentar esta linea 7");
	}
}
