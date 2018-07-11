function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);

if (edad>=18) 
{
	alert("Es un boludo grande");
}
else if (edad>=13)
{
	alert("Es un puber")
}
else
{
	alert("es una criatura")
}
//  or || (pipe)    and &&      not !

}//FIN DE LA FUNCIÓN