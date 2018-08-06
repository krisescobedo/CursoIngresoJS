/* Realizar el algoritmo que permita ingresar el -nombre de un animal del zoológico, 
-el peso el cual 
-debe ser entre 1 y 1000 y 
-la temperatura del hábitat (entre -30 y 30) 
-hasta que el usuario quiera e informar al terminar el ingreso 
por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero. */

function mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var pesoMayor;
	var cantAnimFrio;
	var pesoMenor;
	var pregunta = "si";
	var i=0;
	var pesoValido = 0;

	do {
		
		peso = parseInt(prompt("Introducir un peso dentro del 1 y los 1000 kg"))
		while (!(peso >= 1 && peso <= 1000))


	}

}
		






/*	do {
		i++
		nombre = prompt("Introduzca el nombre del animal");
		
		do {
			peso = prompt("introducir el peso del elefante, entre 1 y 1000 kilogramos");
			peso = parseInt(peso);
			if (peso >= 1  && peso <= 1000) {
				pesoValido=1;
			}
			if (pesoValido != 1) {
				alert("Introducir un peso dentro de los valores permitidos, entre 1 y 1000 kilogramos");
			}
			}while (pesoValido!=1);
	} */ 
