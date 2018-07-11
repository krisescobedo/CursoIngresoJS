function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById('edad').value;
edad = parseInt(edad);

if (!(edad<18 && edad>=13)) 
{
	alert("No es un Teenager");
}

}//FIN DE LA FUNCIÓN