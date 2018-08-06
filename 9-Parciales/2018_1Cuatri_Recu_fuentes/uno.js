
function mostrar()
{
	var base;
	var altura;
	var perimetro;
	var superficie;
	
	base = prompt("ingrese la base");
	altura = prompt("ingrese la altura");
	perimetro = base *  3;
	superficie = base * altura; 
	alert("el perimetro del triangulo es " + perimetro);
	alert("la superficie del triangulo es de " + superficie)
}
