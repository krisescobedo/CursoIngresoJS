function mostrar()
{
//tomo la edad  
	var mesDelAño;
	mesDelAño = document.getElementById('mes').value;
	console.log(mesDelAño);

	switch (mesDelAño)
	{
		case "Enero":
		alert("I hope you will start the year well");
		break;

		case "Marzo":
		alert ("Lets go to the class!");
		break;

		case "Julio":
		alert("The Winter Breaks its coming");
		break;

		case "Diciembre":
		alert("Merry Christmas hohoho");
		break;


	}




/*
	if (mesDelAño==Enero) 
	{
		alert("I hope you will start the year well");
	}
*/





}//FIN DE LA FUNCIÓN