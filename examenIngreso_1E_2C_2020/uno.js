/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar() {
	let nombre;
	let peso;
	let sexo;
	let edad;
	let respuesta1 = "s";
	let contadorsexo = 0;
	let acumuedad = 0;
	let pesomax = 0;
	let nombremax;


	for (contador = 0; contador < 5; contador++) {

		do {
			nombre = prompt("Ingrese un nombre");
			respuesta1 = prompt(" El nombre ingresado es " + nombre + " ? s/n");
		} while (!(respuesta1 == "s"));

		peso = parseInt(prompt("Ingrese su peso"));
		while (!(peso >= 1)) {
			peso = parseInt(prompt("Ingrese un peso Valido"));
		}

		edad = parseInt(prompt("Ingrese su edad"));

		while (!(edad > 0)) {
			edad = parseInt(prompt("Ingrese una edad VALIDAD"));
		}

		sexo = prompt("Ingrese su sexo f/m");
		while (!(sexo == "f" || sexo == "m")) {
			sexo = prompt("Ingrese un sexo VALIDO f/m");
		}

		switch (sexo) {
			case "f":
				contadorsexo++;
				break;
		}
		acumuedad = acumuedad + edad;

		switch (sexo) {
			case "m":
				pesomax = peso;
				nombremax = nombre;
				break;
		}
	}

	//a)informar la cantidad de mujeres.
	document.write("La cantidad de mujeres es " + contadorsexo + "<br>");
	//b)la edad promedio en total.
	document.write("La edad promedio es " + acumuedad / contador + "<br>");
	//)el hombre mas pesado.
	document.write("El hombre mas pesado es " + nombremax + "<br>");
	//pedir datos por prompt y mostrar por document.write o console.log

}
