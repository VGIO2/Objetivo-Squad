/*var puntosSquad = document.getElementById("puntosSquad");
var maxPuntos = document.getElementById("maxPuntos");
var pSalida = document.getElementById("salida");



function calcular() {
    var valpuntosSquad = puntosSquad.value;
    var valmaxPuntos = maxPuntos.value;

    if (valmaxPuntos == "" || valpuntosSquad == "") {
        maxPuntos.placeholder="Rellenar el campo!";
        maxPuntos.style.backgroundColor = "rgba(247, 118, 23, 0.54)";
        puntosSquad.placeholder="Rellenar el campo!";
        puntosSquad.style.backgroundColor = "rgba(247, 118, 23, 0.54)";
    } else {
        maxPuntos.style.backgroundColor = "#fff";
        puntosSquad.style.backgroundColor = "#fff";

        if (valmaxPuntos * 0.8 <= valpuntosSquad) {
            pSalida.innerHTML = "Muy bien squad!";
        } else {
            pSalida.innerHTML = "Pueden hacerlo mejor";
        }
    }
}*/


 function calcular()
{
    var puntossquad= document.getElementById("puntossquad").value;
    var maxpuntos = document.getElementById("maxpuntos").value;
    
    var porcentajesquad=(100 * puntossquad)/maxpuntos;
    
    if(porcentajesquad >= 80)
    { 
       document.getElementById("salida").innerHTML = "Muy bien squad!";
    }
    else{
        document.getElementById("salida").innerHTML = "Pueden hacerlo mejor";
    }
}