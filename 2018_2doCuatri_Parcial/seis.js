/*(SWITCH + IF) Se ingresa una estación del año (verano, otoño, invierno o primavera) y un valor de temperatura. 
Se pide mostrar (por alert): Si la estación es invierno y la temperatura está entre 1 y 5 el mensaje “que fresquete!!!”. 
Si la estación es primavera o verano y la temperatura supera los 32 “es un horno!!” si no la supera y no baja 
a menos de 20 mostrar “que calorcito!!!”. Si es otoño con 15 grados mostrar “esta lindo”, si está por debajo de esa temperatura 
mostrar “se vino el frío” y si la supera los 15 pero no pasa de 21 “esta re bueno!”. Si supera el último valor 
mostrar “mucho calor para el otoño”. 
Aclaración: hacer un switch y dentro toda la lógica incluyendo los if y con una sola ventana alert. */


function mostrar()
{
	var estacion;
	var temperatura;

	estacion = prompt("Introduzca una estacion del año","(verano, otoño, invierno o primavera)");
	temperatura = (prompt("introduzca una temperatura"));

	switch (estacion) {
		case "verano":
		case "primavera":
		if (temperatura > 32){
			alert("Es un horno!!");
		}else 
			{
			if (temperatura <= 32 && temperatura >=20) {
				alert("que calorcito!!!");
			}
		}
		break;

/* Si es otoño con 15 grados mostrar “esta lindo”, si está por debajo de esa temperatura 
mostrar “se vino el frío” y si la supera los 15 pero no pasa de 21 “esta re bueno!”. Si supera el último valor 
mostrar “mucho calor para el otoño”.  */
		case "otoño":
		if (temperatura == 15){
			alert("Esta lindo!");
		}else 
			{ 
			if (temperatura < 15) 
			{
				alert("se vino el frio");
			}else 
				{
				if (temperatura>15 && temperatura<=21) {
					alert("esta lindo!");
				}
					else {
						alert("Mucho calor para el otoño");
					}
				}
			}
		break;
		case "invierno":
		if (temperatura>=0 && temperatura<=5){
			alert("que fresquete!!");
		}
	}
	//alert("comentar esta linea 6");
}
