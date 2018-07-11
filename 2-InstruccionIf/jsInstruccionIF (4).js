function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
edad= parseInt(edad);

if (edad<18 && edad>=13) 
{
	alert("Es un Teenager");
}



}//FIN DE LA FUNCIÓN