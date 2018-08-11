/* Se ingresa por prompt la edad , el nombre, el apellido y la localidad. 
mostrar el siguiente mensaje “ud es xx xx tiene xx años de edad y vive en xx”  */
function mostrar()
{
	var edad;
	var nombre;
	var apellido;
	var localidad;

	edad = prompt("introduzca su edad");
	nombre = prompt("introduzca su nombre");
	apellido = prompt("introduzca su apellido");
	localidad = prompt("introduzca su localidad");

	alert("Usted es "+nombre+" "+apellido+" tiene "+edad+"años de edad y vive en "+localidad);



//	alert("comentar esta linea 2");
}
