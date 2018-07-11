function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;
edad = document.getElementById('edad').value;
edad = parseInt(edad);
estadoCivil = document.getElementById('estadoCivil').value;

if (edad<18 && estadoCivil!="Soltero") 
{
	alert("No te podes casar a esa edad macho");
}
if (edad>=18 && estadoCivil=="Soltero")
{
	alert("No te cases amigo")
}
	


}//FIN DE LA FUNCIÓN