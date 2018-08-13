/* 
Realizar un algoritmo que pide el ingreso de varias series televisivas, de las cuales se pide el título,
la cantidad de capítulos (más de 0) y el tipo (‘d’ = drama, ‘t’ = triller, ‘c’ = comedia y ‘o’ = otras). 
Se pide 
informar: 
a- la cantidad de series con capítulos pares. 
b- el nombre de la que tiene más capítulos.
c- el tipo de la que tiene menos capítulos. 
d- el promedio de capítulos entre todas las ingresadas. 
*/
function mostrar()
{
	var nombre;
	var capitulos;
	var genero;
	var respuesta;
	var paridad;
	var cantidadPares;
	var capitulosMayor;
	var capitulosNombreMayor;
	var contador;
	var capitulosMenor;
	var capitulosMenorGenero;
	var promedioCapitulos;
	var sumaCapitulos;



	respuesta= "si";
	cantidadPares=0;
	sumaCapitulos=0;
	contador= 0;



	while (respuesta == "si")
	{	
		contador++;
		nombre = prompt("introduzca el nombre de la serie");

//introduzco la cantidad de capitulos y verifico		
		do
		{
			capitulos= prompt("introducir la cantidad capitulos que tiene la serie (no pueden haber numeros negativos!)");
			capitulos= parseInt(capitulos);
			
		} while (isNaN(capitulos) || capitulos < 1);

//introducir el genero y verificar que sea correcto
		do 
		{
			genero= prompt("introducir el genero de la serie: Thriller (t), Drama (d), Comedia (c) Otras (o)");
		} while (genero!="t" && genero!="d" && genero!="c" && genero!="o");	
 		


//establecer la paridad de los capitulos
		if (capitulos%2 == 0)
		{
			paridad= "par";
			cantidadPares++;
		} else
			{
				paridad= "impar";
			}
	
//b- el nombre de la que tiene más capítulos.
		if (contador==1)
		{
			capitulosMayor= capitulos;
			capitulosMenor= capitulos;
			capitulosNombreMayor= nombre;
			capitulosMenorGenero= genero;
		}

		if (capitulos > capitulosMayor && contador!=1)
		{
			capitulosMayor= capitulos;
			capitulosNombreMayor= nombre;
		}

		if (capitulos < capitulosMenor && contador!=1)
		{
			capitulosMenor= capitulos;
			capitulosMenorGenero= genero;
		}

		
		sumaCapitulos = sumaCapitulos + capitulos; 
		promedioCapitulos= sumaCapitulos/contador;

		respuesta = prompt("desea continuar ingresando series? (respuesta distinta a (si) es considerada como un NO)");
	}

	alert("la cantidad de series con capitulos pares es de: "+cantidadPares);
	alert("la serie con mas capitulos es: "+capitulosNombreMayor);
	alert("el genero de serie que tiene menos capitulos es: "+capitulosMenorGenero);
	alert("el promedio de capitulos por serie es de: "+promedioCapitulos);

	

}
