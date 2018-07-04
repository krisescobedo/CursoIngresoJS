/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoIngresado;
	var sueldoConAumento;
	sueldoIngresado = document.getElementById('sueldo').value;
	sueldoIngresado = parseInt(sueldoIngresado);
	sueldoConAumento = sueldoIngresado * 110 / 100;
	document.getElementById('resultado').value = sueldoConAumento;
// modulo de la programacion es el resto 
}
