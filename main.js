
var maxPuntos = document.getElementById("maxPuntos");
var puntosSquad = document.getElementById("puntosSquad");
var divSalida = document.getElementById("salida");
var objetivo = 0;

function calcular()
{
	var valorpuntosSquad = puntosSquad.value;
	var valormaxPuntos = maxPuntos.value;

	if(valorpuntosSquad == "" || valormaxPuntos == "")
	{
		//Si no es verdad hace esto
		salida.innerHTML = "0.00";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">No se ingresaron valores</div>';
	}else{
		console.log("Puntos");
		objetivo = parseFloat(puntosSquad.value) * parseFloat(maxPuntos.value);
		salida.innerHTML = objetivo.toFixed(2);
	}



}