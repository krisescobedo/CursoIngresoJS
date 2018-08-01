function mostrar()
/*
	Ingresar
	Maria f 15
	Jose m 33
	pepe m 81
	Mostrar
		Cantidad
		 	1. Mayores de edad =2
			2. menores de edad = 1
			3. cantidad de mujeres =1
			4. cantidad e hombres =2
		Nombre
			1. de el mayor de edad = Pepe
			2. de el menor edad = Maria
			3. el nombre del hombre menor = Jose
*/
{
	
	var edad;
	var sexo;
	var nombre;
	var mayorEdad;
	var menorEdad;
	var nombreHombreMenor;
	var edadHombreMenor;
	var nombreMenor;
	var nombreMayor;
	
	var contMayorEdad=0;
	var contMenorEdad=0;

	var contM=0;
	var contF=0;

	var contador=0;
	
	while (contador < 3){

		//pido los datos de entrada		
		nombre = prompt("ingrese el nombre");
		edad = parseInt(prompt("ingrese la edad"));
		sexo = prompt("ingrese el sexo");
		
		//me fijo si es mayor o menor de edad y lo contabiliza
		if (edad > 18) {
			contMayorEdad++;
		}
		else {
			contMenorEdad++;
		}

		//compruebo si es hombre o mujer y lo contabilizo
		if (sexo == 'm'){
			contM++;
		}
		else {
			contF++;
		}

		//calcular la menor y mayor edad y añadirla a sus nombres
		if (edad > mayorEdad || contador==0){
			mayorEdad=edad;
			nombreMayor=nombre;
		}
		if (edad < menorEdad || contador ==0){
			menorEdad=edad;
			nombreMenor=nombre;
		}

		//calcular el nombre del hombre menor
		if (sexo == 'm' && (contM == 1 || edad < edadHombreMenor)){
			edadHombreMenor = edad;
			nombreHombreMenor = nombre;
		}

		contador++;


		}


		//Muestro la informacion
		document.write("Cantidad de personas mayores de edad : " + contMayorEdad);
		document.write("Cantida de personas menores de edad " + contMenorEdad);
		document.write("Cantidad de mujeres "+contF);
		document.write("Cantidad de hombres "+contM);
		document.write("El nombre de la persona de mayor edad es de "+nombreMayor);
		document.write("El nombre de la persona de menor edad es "+nombreMenor);
		document.write("El nombre del hombre de menor edad es " +nombreHombreMenor);
	}



