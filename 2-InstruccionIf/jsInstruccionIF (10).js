function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
var numeroRandom;
numeroRandom = Math.floor(Math.random() * 10) + 1;

	if (numeroRandom >= 9) 
	{
		alert("your note is "+numeroRandom+". Excellent");
	}
	else 
	{
		if (numeroRandom >=4) 
		{
			alert("your note is "+numeroRandom+". Approved, but is not enough");
		} 
		else 
		{
			alert("your note is "+numeroRandom+". Desapproved, you dont qualify");
		}
	}
	
}//FIN DE LA FUNCIÓN